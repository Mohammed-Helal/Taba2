// Base URL
const baseURL = 'http://127.0.0.1:8000/api/';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};


export const api = async (endpoint, options = {}) => {
  const method = options.method || 'GET';

  let body = null;
  if (options.body) {
    body = JSON.stringify({
      ...options.body
    });
  }

  const response = await fetch(baseURL + endpoint, {
    method,
    headers: {
      ...defaultHeaders,
      ...(options.headers || {})
    },
    body: ['POST', 'PUT', 'PATCH'].includes(method.toUpperCase()) ? body : undefined
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Request failed");
  }

  return response.json();
};
