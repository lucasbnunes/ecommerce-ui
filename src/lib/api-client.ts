import Ky from 'ky';

export const api = Ky.extend({
  prefixUrl: 'https://dummyjson.com',
});
