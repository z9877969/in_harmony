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

  getCollectionCardById = async ({ id }) => {
    const response = await fetch(`${this.serverUrl}/api/collections/${id}`);
    const body = await response.json();
    return body;
  };
}

export const insideServerApi = new InsideServerApi();
