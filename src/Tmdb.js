const API_KEY = '933f5159741f9abf431be48c1ed99aff';
const API_BASE = 'https://api.themoviedb.org/3';

/*
  - originais Netflix
  - recomendados (trending)
  - em alta (top rated)
  - ação
  - comédia
  - terror
  - romance
  - documentários
*/

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    const options = `language=pt-BR&api_key=${API_KEY}`;
    return [
      {
        slug: 'originals',
        title:' Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&${options}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?${options}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?${options}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie/?with_genres=28&${options}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie/?with_genres=35&${options}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie/?with_genres=27&${options}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie/?with_genres=10749&${options}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`/discover/movie/?with_genres=99&${options}`)
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if(movieId) {
      switch(type) {
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
        break;
        case 'tv':
          info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
        break;

        default:
          info = null;
        break;
      }
    }

    return info;
  }
}