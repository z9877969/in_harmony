import { getMainPageUA, getMainPageUK } from '../services/mainPageServices';

export const handleGetMainPageUA = async (req, res) => {
  try {
    const page = await getMainPageUA();
    res.status(200).json({ status: 200, sections: page });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const handleGetMainPageUK = async (req, res) => {
  try {
    const page = await getMainPageUK();
    res.status(200).json({ status: 200, sections: page });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
