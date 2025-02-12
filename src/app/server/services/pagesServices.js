import CollectionModel from '../models/CollectionsModel';
import FiltersModel from '../models/FilterModel';
import { PagesEN, PagesUA } from '../models/PageModels/PageModels';
import TeamMembersModel from '../models/TeamMembersModels';
import CommentsModel from '../models/WasHelpedCommentsModels';

export const getPageUK = async (req, res) => {
  try {
    const pages = await PagesUA.find().lean();

    const sectionConfigs = {
      active_collections: { status: 'active', type: 'collections' },
      closed_collections: { status: 'closed', type: 'collections' },
      filters: { type: 'filter', status: 'filter' },
      comments: { type: 'was-helped', status: 'comments' },
      footer: { type: 'team' },
    };

    const updatedPages = await Promise.all(
      pages.map(async (page) => {
        const updatedSections = await Promise.all(
          page.sections_list.map(async (section) => {
            const config = sectionConfigs[section.section_name];

            if (config) {
              const query = {
                type: config.type,
                ...(config.status && { status: config.status }),
                language: 'ua',
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
    console.log(updatedPages);
    res.status(200).json({ status: 200, pages: updatedPages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPageEN = async (req, res) => {
  try {
    const pages = await PagesEN.find().lean();

    const sectionConfigs = {
      active_collections: { status: 'active', type: 'collections' },
      closed_collections: { status: 'closed', type: 'collections' },
      filters: { type: 'filter', status: 'filter' },
      comments: { type: 'was-helped', status: 'comments' },
      footer: { type: 'team' },
    };

    const updatedPages = await Promise.all(
      pages.map(async (page) => {
        const updatedSections = await Promise.all(
          page.sections_list.map(async (section) => {
            const config = sectionConfigs[section.section_name];

            if (config) {
              const query = {
                type: config.type,
                ...(config.status && { status: config.status }),
                language: 'en',
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

    res.status(200).json({ status: 200, pages: updatedPages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPageByRouteUA = async (req, res) => {
  try {
    const { route } = req.query;

    const page = await PagesUA.findOne({ route }).lean();

    if (!page) {
      throw new Error(`Page not found for route: ${route}`);
    }

    const sectionConfigs = {
      active_collections: { status: 'active', type: 'collections' },
      closed_collections: { status: 'closed', type: 'collections' },
      filters: { type: 'filter', status: 'filter' },
      comments: { type: 'was-helped', status: 'comments' },
      footer: { type: 'team' },
    };

    const updatedSections = await Promise.all(
      page.sections_list.map(async (section) => {
        const config = sectionConfigs[section.section_name];

        if (config) {
          const query = {
            type: config.type,
            ...(config.status && { status: config.status }),
            language: 'ua',
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
    console.log(updatedSections);

    res.status(200).json({
      status: 200,
      section: { ...page, sections_list: updatedSections },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPageByRouteEN = async (req, res) => {
  try {
    const { route } = req.query;

    const page = await PagesEN.findOne({ route }).lean();

    const sectionConfigs = {
      active_collections: { status: 'active', type: 'collections' },
      closed_collections: { status: 'closed', type: 'collections' },
      filters: { type: 'filter', status: 'filter' },
      comments: { type: 'was-helped', status: 'comments' },
      footer: { type: 'team' },
    };

    const updatedSections = await Promise.all(
      page.sections_list.map(async (section) => {
        const config = sectionConfigs[section.section_name];

        if (config) {
          const query = {
            type: config.type,
            ...(config.status && { status: config.status }),
            language: 'en',
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

    res.status(200).json({
      status: 200,
      section: { ...page, sections_list: updatedSections },
    });

    if (!page) {
      throw new Error(`Page not found for route: ${route}`);
    }

    res.status(200).json({ status: 200, section: page });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCollectionDetailsByIdEN = async (req, res) => {
  try {
    const { route, id, sectionName = 'collection_details' } = req.query;

    const page = await PagesEN.findOne({ route }).lean();
    if (!page) {
      return res
        .status(404)
        .json({ error: `Page not found for route: ${route}` });
    }

    const sectionConfigs = {
      active_collections: { status: 'active', type: 'collections' },
      closed_collections: { status: 'closed', type: 'collections' },
      filters: { type: 'filter', status: 'filter' },
      comments: { type: 'was-helped', status: 'comments' },
      footer: { type: 'team' },
    };

    const updatedSections = await Promise.all(
      page.sections_list.map(async (section) => {
        const config = sectionConfigs[section.section_name];

        if (config) {
          const query = {
            type: config.type,
            ...(config.status && { status: config.status }),
            language: 'en',
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

    const collection = await CollectionModel.findOne({ _id: id }).lean();
    if (!collection) {
      return res
        .status(404)
        .json({ error: `Collection not found for ID: ${id}` });
    }

    const finalSections = updatedSections.map((section) => {
      if (section.section_name === sectionName) {
        return {
          ...section,
          section_content: { ...section.section_content, ...collection },
        };
      }
      return section;
    });

    res.status(200).json({ status: 200, data: finalSections });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCollectionDetailsByIdUA = async (req, res) => {
  try {
    const { route, id, sectionName = 'collection_details' } = req.query;

    const page = await PagesUA.findOne({ route }).lean();
    if (!page) {
      return res
        .status(404)
        .json({ error: `Page not found for route: ${route}` });
    }

    const sectionConfigs = {
      active_collections: { status: 'active', type: 'collections' },
      closed_collections: { status: 'closed', type: 'collections' },
      filters: { type: 'filter', status: 'filter' },
      comments: { type: 'was-helped', status: 'comments' },
      footer: { type: 'team' },
    };

    const updatedSections = await Promise.all(
      page.sections_list.map(async (section) => {
        const config = sectionConfigs[section.section_name];

        if (config) {
          const query = {
            type: config.type,
            ...(config.status && { status: config.status }),
            language: 'en',
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

    const collection = await CollectionModel.findOne({ _id: id }).lean();
    if (!collection) {
      return res
        .status(404)
        .json({ error: `Collection not found for ID: ${id}` });
    }

    const finalSections = updatedSections.map((section) => {
      if (section.section_name === sectionName) {
        return {
          ...section,
          section_content: { ...section.section_content, ...collection },
        };
      }
      return section;
    });

    res.status(200).json({ status: 200, data: finalSections });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
