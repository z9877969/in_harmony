import {
  getPageByRouteEN,
  getPageByRouteUK,
  getPageEN,
  getPageUK,
} from '../services/pagesServices';

export const handleGetPagesUK = async (req, res) => {
  try {
    const page = await getPageUK();
    res.status(200).json({ status: 200, sections: page });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const handleGetPagesEN = async (req, res) => {
  try {
    const page = await getPageEN();
    res.status(200).json({ status: 200, sections: page });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const handleGetByPoutPageUK = async (req, res) => {
  try {
    const { route } = req.query;
    const page = await getPageByRouteUK(route);
    res.status(200).json({ status: 200, section: page });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const handleGetByPoutPageEN = async (req, res) => {
  try {
    const { route } = req.query;
    const page = await getPageByRouteEN(route);
    res.status(200).json({ status: 200, section: page });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
