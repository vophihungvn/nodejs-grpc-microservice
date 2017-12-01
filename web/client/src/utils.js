const BASE_URL = 'http://localhost:3000/'

export const post = (uri ,data) => {
    console.log(uri, data)
    return fetch( BASE_URL + uri, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
}

export const get = (uri) => {
  return fetch( BASE_URL + uri)
  .then(res => res.json())
}

export const setStorage = (key, value) => {
  localStorage.setItem(key, value)
}

export const getStorage = (key) => {
  return localStorage.getItem(key)
}