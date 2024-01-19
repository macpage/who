const url = 'https://api.jikan.moe/v4/anime?q=naruto&sfw';

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('bad!');
    }
    return response.json();
  })
  .then((data) => {
    console.log('antwort: ', data);
  })
  .catch((error) => {
    console.log('fehler: ', error);
  });
