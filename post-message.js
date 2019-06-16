/**
 * Post message example
 * API doc: https://developer.nulab.com/docs/typetalk/api/1/post-message/
 */

const config = require('./config');
const Typetalk = require('typetalk');

const typetalk = new Typetalk.Client({
  token: config.TYPETALK_TOKEN
});

const id = config.TYPETALK_TOPIC_ID;
typetalk.postMessage({message: "Hello, World!"}, {id})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
