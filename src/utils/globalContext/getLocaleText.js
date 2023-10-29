import vuetify from '../../plugins/vuetify';

/**
 * Коды юникода, чтобы можно было выводить текст с использованием спец символов
 *
 * */
const unicodeValues = {
  nbsp: '\u00A0',
  mdash: '\u2014',
  ndash: '\u2013',
  laquo: '\u00AB',
  raquo: '\u00BB',
  ldquo: '\u201C',
  quot: '\u0022',
  bull: '\u2022',
  rsquo: '\u2019',
  le: '≤',
};

/**
 * Parse html кодов в символы unicode
 * @param {string} str - строка, содержащая символы которые нужно перекодировать
 * @returns string
 */
export const htmlParser = (str) => {
  let newStr = str;
  Object.keys(unicodeValues).forEach((item) => {
    newStr = newStr.replace(new RegExp(`&${item};`, 'gm'), unicodeValues[item]);
  });
  return newStr;
};

/**
 * Добавление переменных к строке
 * Параметры описываются в виде #{<ключ параметра>}
 *
 * @param {string} string
 * @param {Object} params
 * @return {string}
 */
const paramParser = (string, params) => {
  let newString = string;
  Object.keys(params).forEach((param) => {
    newString = newString.replace(`#{${param}}`, params[param].toString());
  });
  return newString;
};

/**
 * Функция запроса текста из lang файла
 *
 * @param {string} key - ссылка на нужное сообщение в lang файле
 * @param {Object} params - параметры, которые необходимо отобразить в строке
 * @return {string}
 */
const getLocaleText = (key, params = {}) => {
  let langString = vuetify.framework.lang.t(`$vuetify.${key}`);
  if (langString === `$vuetify.${key}`) {
    return '';
  }
  langString = htmlParser(langString);
  langString = paramParser(langString, params);
  return langString;
};

export default getLocaleText;
