import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_ENCRYPTION_SECRET || "default-casulo-secret";

export const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
};

export const decryptData = (encryptedData: string): string => {
  try {
    if (!encryptedData || typeof encryptedData !== 'string') return encryptedData;
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted || encryptedData;
  } catch (e) {
    console.warn("Decryption failed, returning original data", e);
    return encryptedData;
  }
};

export const encryptObject = (obj: any): any => {
  const encrypted: any = {};
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      encrypted[key] = encryptData(obj[key]);
    } else if (typeof obj[key] === "number" || typeof obj[key] === "boolean") {
      encrypted[key] = encryptData(String(obj[key]));
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      encrypted[key] = encryptObject(obj[key]);
    } else {
      encrypted[key] = obj[key];
    }
  }
  return encrypted;
};

export const decryptObject = (obj: any): any => {
  if (!obj || typeof obj !== 'object') return obj;
  const decrypted: any = Array.isArray(obj) ? [] : {};
  
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      
      if (typeof value === "string") {
        try {
          const decryptedStr = decryptData(value);
          
          // Improved type detection after decryption
          if (decryptedStr === "true") {
            decrypted[key] = true;
          } else if (decryptedStr === "false") {
            decrypted[key] = false;
          } else if (decryptedStr !== "" && decryptedStr !== " " && !isNaN(Number(decryptedStr)) && isFinite(Number(decryptedStr))) {
            decrypted[key] = Number(decryptedStr);
          } else {
            decrypted[key] = decryptedStr;
          }
        } catch (e) {
          console.warn(`Error decrypting key ${key}:`, e);
          decrypted[key] = value;
        }
      } else if (typeof value === "object" && value !== null) {
        decrypted[key] = decryptObject(value);
      } else {
        decrypted[key] = value;
      }
    }
  }
  return decrypted;
};
