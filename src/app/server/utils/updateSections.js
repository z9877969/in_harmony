import CollectionModel from '../models/CollectionsModel';
import FiltersModel from '../models/FilterModel';
import PartnersModel from '../models/PartnersModel.js';
import TeamMembersModel from '../models/TeamMembersModels';
import CommentsModel from '../models/WasHelpedCommentsModels';
import { sectionConfigs } from './updatePages.js';

export default async function updateSections(page, paginationParams) {
  const updatedSections = await Promise.all(
    page.sections_list.map(async (section) => {
      const config = sectionConfigs[section.section_name];

      if (config) {
        const query = {
          type: config.type,
          ...(config.status && { status: config.status }),
          ...(config.type !== 'partners' && { language: section.local }),
        };

        let data;
        let totalItems = 0;

        if (config.type === 'collections') {
          const { page = 1, limit = 10 } = paginationParams;
          const pageNumber = parseInt(page, 10);
          const limitNumber = parseInt(limit, 10);

          totalItems = await CollectionModel.countDocuments(query);
          data = await CollectionModel.find(query)
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber)
            .lean();
        } else if (config.type === 'filter') {
          data = await FiltersModel.find(query).lean();
        } else if (config.type === 'was-helped') {
          data = await CommentsModel.find(query).lean();
        } else if (config.type === 'team') {
          data = await TeamMembersModel.find(query).lean();
        } else if (config.type === 'partners') {
          data = await PartnersModel.find(query).lean();
        }

        return {
          ...section,
          section_content: {
            ...section.section_content,
            cards: data,
            ...(config.type === 'collections' && {
              pagination: {
                totalItems,
                totalPages: Math.ceil(totalItems / paginationParams.limit),
                currentPage: paginationParams.page,
                limit: paginationParams.limit,
              },
            }),
          },
        };
      }

      return section;
    })
  );
  return updatedSections;
}
