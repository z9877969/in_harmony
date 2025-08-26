export default function handler(_, res) {
  res.status(404).json({
    message: `Route not found`,
  });
}
