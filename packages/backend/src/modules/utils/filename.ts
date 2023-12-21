import crypto from 'crypto';

function generateUniqueFileName() {
  const timestamp = Date.now();
  const randomString = crypto.randomBytes(8).toString('hex'); // 8 bytes converted to a hexadecimal string

  return `${timestamp}-${randomString}`;
}

export default generateUniqueFileName;
