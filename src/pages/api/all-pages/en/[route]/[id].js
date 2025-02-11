import { connectToDatabase } from '@/app/server/lib';
import { getCollectionById } from '@/app/server/services/collectionsService';
import {
  getPageByRouteEN,
  getPageWithSectionById,
} from '@/app/server/services/pagesServices';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    const { route, id } = req.query;

    if (req.method === 'GET') {
      if (route && id) {
        const dynamicSection = await getPageWithSectionById(req, res);

        if (!dynamicSection) {
          return res.status(404).json({ message: 'Collection not found' });
        }

        return res.status(200).json(dynamicSection);
      } else if (route) {
        return getPageByRouteEN(req, res);
      } else if (id) {
        return getCollectionById(req, res);
      } else {
        return res.status(400).json({ message: 'Route or ID is required' });
      }
    } else {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
