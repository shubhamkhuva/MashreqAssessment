import CryptoJS from 'react-native-crypto-js';
import {SECURITY_DATA} from './constant';

export const encryptString = (string: any) => {
  try {
    var iv = CryptoJS.enc.Hex.parse(SECURITY_DATA.CIPHER_IV);
    var encrypted = CryptoJS.AES.encrypt(string, SECURITY_DATA.CIPHER_KEY, {
      iv: iv,
    });
    return encrypted.toString();
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const decryptString = (encString: any) => {
  try {
    var iv = CryptoJS.enc.Hex.parse(SECURITY_DATA.CIPHER_IV);
    var decrypted = CryptoJS.AES.decrypt(encString, SECURITY_DATA.CIPHER_KEY, {
      iv: iv,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    console.log('Decryption Failed');
    console.log(e);
    return '';
  }
};
