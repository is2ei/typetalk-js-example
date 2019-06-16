/**
 * Get Access Token examples
 * https://developer.nulab.com/docs/typetalk/auth/
 */

const config = require('./config');
const Typetalk = require('typetalk');

const typetalk = new Typetalk.Client({
  clientId: config.TYPETALK_CLIENT_ID,
  clientSecret: config.TYPETALK_CLIENT_SECRET,
  scope: config.TYPETALK_SCOPE
});

typetalk.getAccessToken()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
