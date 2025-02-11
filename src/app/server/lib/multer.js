import multer from 'multer';
import path from 'path';

export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, TEMP_UPLOAD_DIR);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const uploadMiddleware = (req, res) => {
  return new Promise(function (resolve, reject) {
    upload.array('image', 5)(req, res, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

export { uploadMiddleware };
