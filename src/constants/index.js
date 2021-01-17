export const definitionEndpoint =
  'https://api.dictionaryapi.dev/api/v2/entries';
export const translationEndpoint = 'http://www.faraazin.ir/api/translate';
export const translationEndpointHeaders = {
  POST: '/api/translate HTTP/1.1',
  Host: 'www.faraazin.ir',
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
  Accept: 'application/json, text/plain, */*',
  'Accept-Language': 'en-US',
  'Accept-Encoding': 'gzip, deflate, br',
  'Content-Type': 'application/json;charset=utf-8',
  Origin: 'https://www.faraazin.ir',
  Referer: 'https://www.faraazin.ir/',
  Connection: 'keep-alive',
  Cookie: 'G_ENABLED_IDPS=google',
};

export const definitionEndpointHeaders = {
  'Content-Type': 'application/json',
};

export const languages = {
  en: 'English',
  hi: 'Hindi',
  es: 'Spanish',
  fr: 'French',
  ja: 'Japanese',
  ru: 'Russian',
  de: 'German',
  it: 'Italian',
  ko: 'Korean',
  'pt-BR': 'Brazilian Portuguese',
  ar: 'Arabic',
  tr: 'Turkish',
};

export const secondLanguages = {
  fa: 'Persian',
};
