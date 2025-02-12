import crypto from 'crypto';

const generateHash = (controlString, key) => {
  return crypto.createHmac('md5', key).update(controlString).digest('hex');
};

export default generateHash;
