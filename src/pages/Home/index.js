import React, { useEffect } from 'react';
import api from '../../services/api';

const Home = () => {
  const [filmes, setFilmes] = React.useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: '9dae1f7a9ea5a808d3dc8fceea90e235',
          language: 'pt-BR',
          page: 1,
        },
      });

      console.log(response.data.results)

    }
    loadFilmes();
  }, []);
  return (
    <div>
      <h1>BEM VINDO A HOME</h1>
    </div>
  );
};

export default Home;
