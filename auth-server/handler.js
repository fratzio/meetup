const axios = require('axios');

module.exports.getAccessToken = async (event) => {
  const MEETUP_OAUTH_URL =
    'https://secure.meetup.com/oauth2/access' +
    '?client_id=tdfmobqjutcgn3fcgdrntmr1dr' +
    '&client_secret=94oq8nvcs9co1tqdvd462bsobv' +
    '&grant_type=authorization_code' +
    '&redirect_uri=https://fratzio.github.io/meetup/' +
    '&code=' +
    event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};

module.exports.refreshAccessToken = async (event) => {
  const MEETUP_OAUTH_URL =
    'https://secure.meetup.com/oauth2/access' +
    '?client_id=tdfmobqjutcgn3fcgdrntmr1dr' +
    '&client_secret=94oq8nvcs9co1tqdvd462bsobv' +
    '&grant_type=refresh_token' +
    '&refresh_token=' +
    event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};
