import connectToDatabase from '../../../lib/mongodb';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    return null;
  }

  if (req.method === 'POST') {
    return null;
  }

  if (req.method === 'PUT') {
    return null;
  }
  res.status(405).json({ message: 'Method not allowed' });
}
