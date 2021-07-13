import { url as urls } from 'constants/urls';

export const request = async (url: string, body: any, method: TMethod) => {
  const response = await fetch(urls.server + url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) throw new Error(response.statusText);
  return response;
};

type TMethod = 'GET' | 'POST' | 'PUT'
