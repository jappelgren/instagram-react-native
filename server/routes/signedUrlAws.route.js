const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
require('dotenv').config()

router.get('/signed-url', async (req, res) => {
    AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-east-1',
        signatureVersion: 'v4'
    })
    const params = {
        Bucket: 'simstagram',
        Key: 'photo',
        Expires: 30*60,
        ContentType: 'image/png'
    }
})

