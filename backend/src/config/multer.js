
'use strict';
import multer from 'multer';
import Path from 'path';
import Crypto from 'crypto';
import aws from 'aws-sdk';
import multerS3 from 'multer-s3';;
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename);

const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, cb) => {

            // cb(null, Path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
        },
        filename: (req, file, cb) => {
            Crypto.randomBytes(16, (err, hash) => {
                if (err) { cb(err) };
                file.key = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, file.key);
            });
        },
    }),

    s3: multerS3({
        s3: new aws.S3(),
        bucket: "imagensjosinaldo",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            Crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);
                const filename = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, filename);
            });
        }
    })

};

export default {
    dest: Path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: storageTypes[process.env.STORAGE_TYPE],
    limits: {
        fileSize: 2 * 1024 * 1024 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif',
            'image/jpg',
            'image/svg',
            

        ];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('invalid file type.'));
        }
    }
};