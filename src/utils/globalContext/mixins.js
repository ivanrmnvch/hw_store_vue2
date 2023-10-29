import getLocaleText from './getLocaleText';

export default {
  getLangText(key, params = {}) {
    return getLocaleText(key, params);
  },
};
