import { Pages as PageModel } from '../models/PageModels';
import { LANGUAGE_TYPE } from '../constants';

const statsDict = {
  0: 'fedPeople',
  1: 'providedWithClothing',
  2: 'providedWithWater',
  3: 'receivedMedications',
  4: 'fedAnimals',
  5: 'providedWithElectricity',
};

const PAGE_ROUTE = 'about';

export const getStatsData = async (_, res) => {
  const result = await PageModel.findOne({
    route: PAGE_ROUTE,
    local: LANGUAGE_TYPE.UA,
  });

  const [
    {
      section_content: { cards },
    },
  ] = result.sections_list;
  const respData = cards.reduce((acc, { amount, description, _id }, idx) => {
    acc[statsDict[idx]] = {
      amount: Number(amount.slice(0, amount.length - 1).replace(' ', '')),
      description,
      _id,
    };
    return acc;
  }, {});

  res.json(respData);
};

export const updateStatsData = async (req, res) => {
  const sectionIndex = 0;
  const pathToCards = `sections_list.${sectionIndex}.section_content.cards`;

  const dataToUpdate = Object.values(statsDict).map((statsKey) => {
    const value = req.body[statsKey];
    const valueStr = value.toString();
    let newValueStr = '';
    let n = 1;
    for (let i = valueStr.length - 1; i >= 0; i -= 1) {
      newValueStr = valueStr[i] + newValueStr;
      if (n % 3 === 0) {
        newValueStr = ' ' + newValueStr;
      }
      n += 1;
    }
    newValueStr = newValueStr.trim() + '+';
    return newValueStr;
  });

  const result = await PageModel.find({
    route: 'about',
  });

  const [updatedCardsUa, updatedCardsEn] = result.map((el) => {
    const cards = el.sections_list[sectionIndex].section_content.cards.map(
      (el, idx) => {
        return { ...el, amount: dataToUpdate[idx] };
      }
    );

    el.sections_list[sectionIndex].section_content.cards = cards;
    return cards;
  });

  await PageModel.updateOne(
    {
      route: 'about',
      local: 'ua',
    },
    {
      $set: {
        [pathToCards]: updatedCardsUa,
      },
    }
  );
  await PageModel.updateOne(
    {
      route: 'about',
      local: 'en',
    },
    {
      $set: {
        [pathToCards]: updatedCardsEn,
      },
    }
  );

  res.status(204).json();
};
