export const getCodeApi = code => {
  return fetch(`http://localhost:3002/data?code=${code}`)
    .then(response => response.json())
    .catch(err => console.error('err fetch => ', err))
}