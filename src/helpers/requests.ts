import { SERVER as urls } from 'constants/urls';

export const request = async (url: string, body: any, method: TMethod, token?: string) => {
  const response = await fetch(urls.server + url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },

  });
  if (!response.ok) throw await response.text();
  return response;
};

type TMethod = 'GET' | 'POST' | 'PUT'
