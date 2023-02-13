import React from 'react';
import './filme-info.css';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

const Filme = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: '9dae1f7a9ea5a808d3dc8fceea90e235',
            language: 'pt-BR',
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate('/', { replace: true });
          return;
        });
    }

    loadFilme();

    return () => {
      console.log('desmontado');
    };
  }, [id, navigate]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem('@primeflix');

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id,
    );

    if (hasFilme) {
      toast.warn('Esse filme já está na sua lista');
      return;
    }
    filmesSalvos.push(filme);
    localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos));
    toast.success('Filme Salvo com sucesso!');
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    );
  }
  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliaçâo: {filme.vote_average} / 10</strong>

      <div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a
            target="blank"
            rel="external"
            href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
};

export default Filme;
