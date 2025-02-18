export default function handler(req, res) {
  if (req.method === 'POST') {
    const { locale, ...queryParams } = req.query;

    if (!locale) {
      return res.status(400).json({ error: 'Missing or invalid locale' });
    }

    const queryString = new URLSearchParams(queryParams).toString();

    res.writeHead(303, {
      Location: `/${locale}/thanks?${queryString}`,
    });
    res.end();
    return;
  }

  res.status(405).json({ error: 'Method Not Allowed' });
}
