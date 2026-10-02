import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../lib/firebase";
import imageCompression from "browser-image-compression";

const compressionOptions = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
};

export const uploadPhoto = async (userId: string, file: File, path: string): Promise<string> => {
  try {
    // Compress image
    const compressedFile = await imageCompression(file, compressionOptions);
    
    // Create storage reference
    const storageRef = ref(storage, `users/${userId}/${path}/${Date.now()}_${file.name}`);
    
    // Upload file
    const snapshot = await uploadBytes(storageRef, compressedFile);
    
    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading photo:", error);
    throw error;
  }
};
