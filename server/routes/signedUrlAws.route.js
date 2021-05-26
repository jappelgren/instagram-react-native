const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
require('dotenv').config();

router.get('/', async (req, res) => {
    console.log(req.body);
    AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-east-1',
        signatureVersion: 'v4'
    });
    const params = {
        Bucket: 'simstagram',
        Key: req.params.url,
        Expires: 30 * 60,
    };
    const options = {
        signatureVersion: 'v4',
        region: 'us-east-1',
        endpoint: new AWS.Endpoint('simstagram.s3-accelerate.amazonaws.com'),
    };
    const client = new AWS.S3(options);
    const signedURL = await (new Promise((resolve, reject) => {
        client.getSignedUrl('putObject', params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }));
    return res.json({
        signedURL,
    });
});

module.exports = router;