import Expo from 'expo';
import { config } from '../../config';


class SocialServiceProvider {
  constructor(configuration) {
    this._config = configuration;
    this.signInWithGoogle = this.signInWithGoogle.bind(this);
  }
  /**
   * Provide login via google
   * @return Promise
   * */
  async signInWithGoogle() {
    try {
      const result = await Expo.Google.logInAsync(this._config.authorization.google);
      if (result.type === 'success') {
        return result;
      }
      console.log('cancelled');
    } catch (e) {
      console.log('error', e);
    }
    return undefined;
  }
}


const socialServiceProvider = new SocialServiceProvider(config);
export { socialServiceProvider };
