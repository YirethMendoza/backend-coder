import { fileURLToPath } from 'url';
import { dirname } from 'path';
import multer from 'multer';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename)

//Muter
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __dirname + "/public/img");
    },
    filename: (req, file, cb) => {
      cb(null, __filename.originalname);
    },
  });
  
  export const uploader = multer({ storage });