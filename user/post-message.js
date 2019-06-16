/**
 * Create topic example
 * API doc: https://developer.nulab.com/docs/typetalk/api/1/post-message/
 */

const config = require('../config');
const Typetalk = require('typetalk');

const typetalk = new Typetalk.Client({
  clientId: config.TYPETALK_CLIENT_ID,
  clientSecret: config.TYPETALK_CLIENT_SECRET,
  scope: "topic.post"
});

const id = config.TYPETALK_TOPIC_ID;
typetalk.postMessage({message: "Hello, World!"}, {id})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
