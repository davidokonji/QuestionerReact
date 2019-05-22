import encUtf8 from 'crypto-js/enc-utf8';
import aes from 'crypto-js/aes';

export const encrypto = (data) => {
  let encryptedString = aes.encrypt(JSON.stringify(data), 'secret_questioner');
  encryptedString = encryptedString.toString();
  return encryptedString;
};

export const decrypto = (encryptedString) => {
  try {
    const decryptedString = aes.decrypt(encryptedString.toString(), 'secret_questioner');
    const decryptedObject = JSON.parse(decryptedString.toString(encUtf8));
    return decryptedObject;
  } catch (error) {
    throw Error(error);
  }
};
