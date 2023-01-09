export enum ValidHttpMethods {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export const META_JWT = 'desp_be_jwt';

const baseURL = import.meta.env.VITE_BACKEND_URL;

export const fetchSinToken = async <T>(
  endpoint: string,
  data?: any,
  method: ValidHttpMethods = ValidHttpMethods.GET,
): Promise<T> => {
  const URL = `${baseURL}/${endpoint}`;

  if (method === ValidHttpMethods.GET) {
    const resp = await fetch(URL);
    const json = await resp.json();

    if (!resp.ok) {
      throw new Error(json.message || 'Lo sentimos, ocurrio un error inesperado');
    }

    return json;
  } else {
    const resp = await fetch(URL, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await resp.json();

    if (!resp.ok) {
      throw new Error(json.message || 'Lo sentimos, ocurrio un error inesperado');
    }

    return json;
  }
};

export const fetchConToken = async <T>(
  endpoint: string,
  data?: any,
  method: ValidHttpMethods = ValidHttpMethods.GET,
): Promise<T> => {
  const URL = `${baseURL}/${endpoint}`;
  const JWT = `Bearer ${localStorage.getItem(META_JWT)}` || '';

  if (method === ValidHttpMethods.GET) {
    const resp = await fetch(URL, {
      headers: {
        Authorization: JWT,
        'Content-Type': 'application/json',
      },
    });

    const json = await resp.json();

    if (!resp.ok) {
      throw new Error(json.message || 'Lo sentimos, ocurrio un error inesperado');
    }

    return json;
  } else {
    const resp = await fetch(URL, {
      method,
      headers: {
        Authorization: JWT,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await resp.json();

    if (!resp.ok) {
      throw new Error(json.message || 'Lo sentimos, ocurrio un error inesperado');
    }

    return json;
  }
};
