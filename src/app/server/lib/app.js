const buildUrl = (...paths) =>
  `https://http://localhost:3000/api${paths.join('/')}`;

const stringifyQueryParams = (params) => new URLSearchParams(params).toString();

const sendRequest = async (url, init) => {
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return await response.json();
};

export const getAllCollections = (init) => {
  return sendRequest(buildUrl('collections', '1'), init);
};

export const getAllSection = (init) => {
  return sendRequest(buildUrl('sections'), init);
};

export const getSectionById = (id, init) => {
  return sendRequest(buildUrl('sections', id), init);
};

export const getCollectionByID = (id, init) => {
  return sendRequest(buildUrl('collections', id), init);
};

export const getCommentsUsers = (init) => {
  return sendRequest(buildUrl('reviews'), init);
};

export const createCompany = async (data, init) => {
  return (
    sendRequest <
    Company >
    (buildUrl('collections'),
    {
      ...init,
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        ...(init && init.headers),
        'content-type': 'application/json',
      },
    })
  );
};
