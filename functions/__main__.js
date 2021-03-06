const ejs = require('ejs');
const fs = require('fs');
const templatePath = __dirname + '/../static/index.ejs';
const lib = require('lib');
/**
 * Landing page
 * @returns {Buffer} Web page returned as a buffer
 */
module.exports = (context, callback) => {
  return ejs.renderFile(
    templatePath, {
      SERVICE_PATH: context.service.identifier
    }, {},
    (err, response) =>
    callback(err, new Buffer(response || ''), {
      'Content-Type': 'text/html'
    })
  );
};