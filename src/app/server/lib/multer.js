import multer from 'multer';

import path from 'node:path';
import { ObjectId } from 'bson';
import { responseError } from './responseError';
import { TEMP_UPLOAD_DIR } from '../constants';
import createHttpError from 'http-errors';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, TEMP_UPLOAD_DIR);
  },
  filename: (req, file, cb) => {
    const { base } = path.parse(file.originalname);
    const ext = path.extname(base);
    cb(null, new ObjectId().toString() + ext);
  },
});

export const upload = multer({ storage });

export const uploadMiddleware = (uploader) => (next) => async (req, res) => {
  try {
    await new Promise((resolve, reject) => {
      uploader(req, res, (err) => {
        if (err) {
          reject(err.message);
        }
        resolve();
      });
    });
    return await next(req, res);
  } catch (error) {
    const err = createHttpError(400, error.message);
    return responseError(res, err, 'Upload image error');
  }
};
