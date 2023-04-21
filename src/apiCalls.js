 function getAPIData() {
  return fetch('http://localhost:3000/api/v1/projects')
  .then((res) => res.json)
 }

 export default getAPIData