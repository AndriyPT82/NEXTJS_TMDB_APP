// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const fetch = require('node-fetch');


export default async function heandler() {
  const url = 'https://api.themoviedb.org/3/account/11216587/favorite/movies?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzgwYmFkYTYxZjc5MTRmYWNmMmEyNGI4YWRjZGY2NiIsInN1YiI6IjYxNWFhYzBhOTM4MjhlMDA4OTk0Y2FmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iweNI0LL6Qg3NTtH7RHBeFcmFD2UFod0Pe4ULbeCU-I'
    }
  };

  return await fetch(url, options)
    .then(res => res.json())
    .then(json => json)
    .catch(err => console.error('error:' + err));
}



