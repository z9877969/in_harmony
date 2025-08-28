import createHttpError from 'http-errors';
import { LANGUAGE_TYPE } from '../constants';
import { Pages as PageModel } from '../models/PageModels';
import { ObjectId } from 'bson';
import { env } from '../utils';
import { saveFileToCloudinary, saveFileToUploadDir } from '../lib';
import { findAndDeleteImage } from '../utils/findAndDeleteImage';

const ROUTE = 'about';
const availableLocales = Object.values(LANGUAGE_TYPE);

export const getTeammates = async (req, res) => {
  const { locale = LANGUAGE_TYPE.UA } = req.query;
  if (locale && !availableLocales.includes(locale)) {
    throw createHttpError(
      400,
      `locale must be one of ${JSON.stringify(availableLocales)}`
    );
  }
  const data = await PageModel.find(
    { route: ROUTE, ...(locale && { local: locale }) },
    'sections_list local'
  ).lean();

  res.json(
    data.map(({ local, sections_list }) => {
      const data = {};
      data.locale = local;
      data.teammates = sections_list[2].section_content.team.cards;
      return data;
    })
  );
};

export const createTeammate = async (req, res) => {
  const image = req.file;
  let photoUrls = [];

  if (image) {
    const isCloudinaryEnabled = env('ENABLE_CLOUDINARY') === 'true';
    if (isCloudinaryEnabled) {
      const photoUrl = await saveFileToCloudinary(image);
      photoUrls.push({ path: null, url: photoUrl });
    } else {
      const photo = await saveFileToUploadDir(image);
      photoUrls.push({ path: photo.path, url: photo.url });
    }
  }

  const { locale, ...bodyRest } = req.body;

  bodyRest.image = photoUrls;
  bodyRest.icon = 'icon-non-image';
  bodyRest._id = new ObjectId().toString();

  await PageModel.updateOne(
    {
      route: ROUTE,
      local: locale,
    },
    {
      $push: {
        'sections_list.2.section_content.team.cards': bodyRest,
      },
    }
  );

  res.status(201).json(bodyRest);
};

export const updateTeammate = async (req, res) => {
  const image = req.file;
  let photoUrls = [];

  const { id, locale } = req.query;

  const page = await PageModel.findOne({
    route: ROUTE,
    local: locale,
  });
  const curTeammate = page.sections_list[2].section_content.team.cards.find(
    (el) => el._id === id
  );
  if (!curTeammate) {
    throw createHttpError(404, `Teammate not found for locale ${locale}`);
  }

  if (image) {
    const isCloudinaryEnabled = env('ENABLE_CLOUDINARY') === 'true';
    if (isCloudinaryEnabled) {
      const photoUrl = await saveFileToCloudinary(image);
      photoUrls.push({ path: null, url: photoUrl });
    } else {
      const photo = await saveFileToUploadDir(image);
      const removedImage = curTeammate.image[0]?.path;
      await findAndDeleteImage(removedImage);
      photoUrls.push({ path: photo.path, url: photo.url });
      req.body.image = photoUrls;
    }
  }

  let updatedCard = {};

  const updatedCards = page.sections_list[2].section_content.team.cards.map(
    (el) => {
      if (el._id !== id) return el;
      updatedCard = { ...el, ...req.body };
      return updatedCard;
    }
  );

  await PageModel.updateOne(
    {
      route: ROUTE,
      local: locale,
    },
    {
      $set: {
        'sections_list.2.section_content.team.cards': updatedCards,
      },
    }
  );
  delete updatedCard.icon;
  res.json(updatedCard);
};

export const removeTeammate = async (req, res) => {
  const { id, locale } = req.query;

  const page = await PageModel.findOne({
    route: ROUTE,
    local: locale,
  });
  const curTeammate = page.sections_list[2].section_content.team.cards.find(
    (el) => el._id === id
  );
  if (!curTeammate) {
    throw createHttpError(404, `Teammate not found for locale ${locale}`);
  }

  const updatedCards = page.sections_list[2].section_content.team.cards.filter(
    (el) => el._id !== id
  );

  await PageModel.updateOne(
    {
      route: ROUTE,
      local: locale,
    },
    {
      $set: {
        'sections_list.2.section_content.team.cards': updatedCards,
      },
    }
  );

  const removedImage = curTeammate.image[0]?.path;
  await findAndDeleteImage(removedImage);

  res.status(204).json();
};
