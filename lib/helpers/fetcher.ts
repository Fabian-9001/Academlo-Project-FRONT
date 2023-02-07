import instance from './axios.helpers';
export const fetcher = (url: string) =>
  instance.get(url).then((res) => res.data);
