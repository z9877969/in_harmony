import { headers } from 'next/headers';

class InsideServerApi {
  constructor() {}

  get serverUrl() {
    const host = headers().get('host');
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const serverUrl = `${protocol}://${host}`;

    return serverUrl;
  }

  getPageApi = async ({ locale, page }) => {
    const response = await fetch(
      `${this.serverUrl}/api/all-pages/${locale}/${page}`
    );
    const body = await response.json();
    const sectionsList = body.section?.sections_list ?? [];
    const sectionsDict = Object.values(sectionsList).reduce((acc, el) => {
      acc[el.section_name] = el;

      return acc;
    }, {});
    return { sectionsList, sectionsDict };
  };

  getAllPages = async ({ locale }) => {
    const response = await fetch(`${this.serverUrl}/api/all-pages/${locale}`);
    const body = await response.json();

    return body.pages;
  };

  getActiveCollectionPageApi = async (locale, id) => {
    const response = await fetch(
      `${this.serverUrl}/api/all-pages/${locale}/active/${id}`
    );
    const content = await response.json();

    const activeCollectionsSection = content.data.find(
      (section) => section.section_name === 'active_collections'
    );
    const [elementById] = activeCollectionsSection.section_content.cards.filter(
      (card) => card._id === id
    );

    const otherCollectionTitle = activeCollectionsSection.section_content.title;

    const otherCollections =
      activeCollectionsSection.section_content.cards.filter(
        (card) => card._id !== id
      );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch collection data: ${response.statusText}`
      );
    }

    return { elementById, otherCollections, otherCollectionTitle };
  };
}

export const insideServerApi = new InsideServerApi();
