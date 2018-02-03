const directions = require('../src/directions');

/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @returns {object}
*/

module.exports = async (name = 'Queen\'s University', context) => {
  let code = await directions.test(name);
  return code;
};