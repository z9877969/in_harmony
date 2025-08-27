class InsideServerApi {
  constructor() {}

  get serverUrl() {
    const serverUrl =
      process.env.NODE_ENV === 'development'
        ? process.env.DEV_APP_DOMAIN
        : process.env.PROD_APP_DOMAIN;

    return serverUrl;
  }

  getSectionsDict = (sectionsList = []) => {
    return Object.values(sectionsList).reduce((acc, el) => {
      acc[el.section_name] = el;

      return acc;
    }, {});
  };

  getPageApi = async ({ locale, page }) => {
    try {
      if (locale !== 'ua' && locale !== 'en') return;
      const response = await fetch(
        `${this.serverUrl}/api/all-pages/${locale}/${page}`,
        { next: { revalidate: 60 } }
      );
      /* await connectToDatabase();
      const { updatedSections } = await getPageByRouteService({
        route: page,
        locale,
      }); */
      // const sectionsList = updatedSections;

      if (!response.ok) {
        throw new Error(`Failed to fetch page data: ${response.statusText}`);
      }

      const body = await response.json();
      const sectionsList = body.section?.sections_list ?? [];
      const sectionsDict = this.getSectionsDict(sectionsList);
      return { sectionsList, sectionsDict };
    } catch (error) {
      // eslint-disable-next-line
      console.error(`Error in getPageApi for [${page}, ${locale}]:`, error);
      throw new Error(`Failed to process page data: ${error.message}`);
    }
  };

  getAllPages = async ({ locale }) => {
    const response = await fetch(`${this.serverUrl}/api/all-pages/${locale}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch all pages data: ${response.statusText}`);
    }

    const body = await response.json();

    return body.pages;
  };

  getCollectionPageById = async ({
    locale,
    id,
    collectionType /* active | closed */,
  }) => {
    try {
      const response = await fetch(
        `${this.serverUrl}/api/all-pages/${locale}/${collectionType}/${id}`,
        { next: { revalidate: 60 } }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch collection data: ${response.statusText}`
        );
      }

      const body = await response.json();

      const sectionsList = body.sections?.sections_list;
      const sectionsDict = this.getSectionsDict(sectionsList);

      return { sectionsList, sectionsDict };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(
        `Error in getCollectionPageByIdApi for [${locale}, ${collectionType}, ${id}]:`,
        error
      );
      throw new Error(`Failed to process page data: ${error.message}`);
    }
  };
}

export const insideServerApi = new InsideServerApi();
