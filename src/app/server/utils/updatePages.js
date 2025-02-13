import CollectionModel from '../models/CollectionsModel';
import FiltersModel from '../models/FilterModel';
import TeamMembersModel from '../models/TeamMembersModels';
import CommentsModel from '../models/WasHelpedCommentsModels';

export const sectionConfigs = {
  active_collections: { status: 'active', type: 'collections' },
  closed_collections: { status: 'closed', type: 'collections' },
  filters: { type: 'filter', status: 'filter' },
  comments: { type: 'was-helped', status: 'comments' },
  footer: { type: 'team' },
};

export default async function updatePages(pages) {
  const updatedPages = await Promise.all(
    pages.map(async (page) => {
      const updatedSections = await Promise.all(
        page.sections_list.map(async (section) => {
          const config = sectionConfigs[section.section_name];

          if (config) {
            const query = {
              type: config.type,
              ...(config.status && { status: config.status }),
              language: section.local,
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

      return { ...page, sections_list: updatedSections };
    })
  );
  return updatedPages;
}
