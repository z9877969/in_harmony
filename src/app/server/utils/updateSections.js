import CollectionModel from '../models/CollectionsModel';
import FiltersModel from '../models/FilterModel';
import PartnersModel from '../models/PartnersModel.js';
import TeamMembersModel from '../models/TeamMembersModels';
import CommentsModel from '../models/WasHelpedCommentsModels';
import { sectionConfigs } from './updatePages.js';

export default async function updateSections(page) {
  const updatedSections = await Promise.all(
    page.sections_list.map(async (section) => {
      const config = sectionConfigs[section.section_name];

      if (config) {
        const query = {
          type: config.type,
          ...(config.status && { status: config.status }),
          ...(config.language && { language: section.local }),
        };
        let data;
        if (config.type === 'collections') {
          data = await CollectionModel.find(query).lean();
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
          },
        };
      }

      return section;
    })
  );
  return updatedSections;
}
