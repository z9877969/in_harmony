import { connectToDatabase } from '@/app/server/lib';
import { getPageByRoute } from '@/app/server/services/pagesServices';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async function handler(req, res) {
  try {
    await connectToDatabase();
    const { route } = req.query;

    if (req.method === 'GET') {
      if (route) {
        return getPageByRoute(req, res);
      } else {
        return res.status(400).json({ message: 'Route is required' });
      }
    } else {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
