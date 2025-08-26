import { headers } from 'next/headers';

class InsideServerApi {
  constructor() {}

  get serverUrl() {
    const host = headers().get('host');
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const serverUrl = `${protocol}://${host}`;

    return serverUrl;
  }

  getSectionsDict = (sectionsList = []) => {
    return Object.values(sectionsList).reduce((acc, el) => {
      acc[el.section_name] = el;

      return acc;
    }, {});
  };

  getPageApi = async ({ locale, page }) => {
    if (locale !== 'ua' && locale !== 'en') return;
    const response = await fetch(
      `${this.serverUrl}/api/all-pages/${locale}/${page}`,
      { next: { revalidate: 60 } }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch page data: ${response.statusText}`);
    }

    const body = await response.json();
    const sectionsList = body.section?.sections_list ?? [];
    const sectionsDict = this.getSectionsDict(sectionsList);
    return { sectionsList, sectionsDict };
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
  };
}

export const insideServerApi = new InsideServerApi();
