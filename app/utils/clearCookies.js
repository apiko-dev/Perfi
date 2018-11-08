const RCTNetworking = require('RCTNetworking'); //eslint-disable-line

export default () => {
  RCTNetworking.clearCookies((cleared) => {
    console.log(`Cookies cleared, had cookies=${cleared.toString()}`);
  });
};
