/**
 * Create topic example
 * API doc: https://developer.nulab.com/docs/typetalk/api/1/create-topic/
 */

const config = require('../config');
const Typetalk = require('typetalk');

const typetalk = new Typetalk.Client({
  clientId: config.TYPETALK_CLIENT_ID,
  clientSecret: config.TYPETALK_CLIENT_SECRET,
  scope: "topic.write"
});

typetalk.createTopic({
  name: "Hello, world!",
  spaceKey: config.TYPETALK_SPACE_KEY
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
