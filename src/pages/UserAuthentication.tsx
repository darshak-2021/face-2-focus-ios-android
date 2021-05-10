const AWS = require('aws-sdk')
var rekognition = new AWS.Rekognition()
var s3Bucket = new AWS.S3( { params: {Bucket: "face2focus", KeyPrefix: "uploads"} } );
var fs = require('fs');
exports.handler = (event, context, callback) => {
  console.log('event', event)
   let parsedData = JSON.parse(event.body);
   let encodedImage = parsedData.image;
   var filePath = parsedData.name;
   // let filePath = 'image.jpg';
   console.log("parced data event", event)
   let buf = new Buffer(encodedImage.replace(/^data:image\/\w+;base64,/, ""),'base64')
   var data = {
       Key: filePath,
       Body: buf,
       ContentEncoding: 'base64',
       ContentType: 'image/jpeg'
   };
   s3Bucket.putObject(data, function(err, data){
       if (err) {
           console.log('Error uploading data: ', data);
           callback(err, null);
       } else {
           var params = {
            Attributes: [ "ALL" ],
             Image: {
              S3Object: {
               Bucket: "face2focus",
               Name: filePath
              }
             },
            };
           rekognition.detectFaces(params, function(err, data) {
               if (err){
                   console.log(err, err.stack);
                   callback(err)
               }
               else{
                   console.log(data);
                   const result = {
                    statusCode: 200,
                    headers: {
                        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
                        "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
                    },
                    body: JSON.stringify(data),
                   }
                   callback(null, result);
               }
           });
       }
   });
};