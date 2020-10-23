const multer = require('multer');
const uuid = require('uuid').v1;

const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.AWS_REGION
})

const s3 = new aws.S3()

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
};

const fileUpload = multer({
    limits: 500000,
    // storage: multer.diskStorage({
    //     destination: (req, file, cb) => {
    //         cb(null, 'uploads/images');
    //     },
    //     filename: (req, file, cb) => {
    //         const ext = MIME_TYPE_MAP[file.mimetype];
    //         cb(null, uuid() + '.' + ext);
    //     }
    // }),
    storage: multerS3({
        s3: s3,
        bucket: process.env.S3_BUCKET_NAME,
        metadata: function (req, file, cb) {
          cb(null, {fieldName: 'TESTING_META_DATA!'});
        },
        key: function (req, file, cb) {
          cb(null, Date.now().toString())
        },
        acl: 'public-read'
      }),
    fileFilter: (req, file, cb) => {
        const isValid = !!MIME_TYPE_MAP[file.mimetype];
        let error = isValid ? null : new Error('Invalid mime type!');
        cb(error, isValid);
    }
});

module.exports = fileUpload;