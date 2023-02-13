import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './favoritos.css';

const Favoritos = () => {
  const [filmes, setFilmes] = React.useState([]);

  React.useEffect(() => {
    const minhaLista = localStorage.getItem('@primeflix');
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(id, title) {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });

    setFilmes(filtroFilmes);
    localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes));
    toast.success(`O filme  ${title}  foi removido com sucesso.`);
  }

  return (
    <div className="meus-filmes">
      <h1>Meus favoritos</h1>
      {filmes.length === 0 && (
        <span>Você ainda não possui nenhum filme salvo. 😞 </span>
      )}
      <ul>
        {filmes.map((filme) => {
          return (
            <li key={filme.id}>
              <span>{filme.title}</span>
              <div>
                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                <button onClick={() => excluirFilme(filme.id, filme.title)}>
                  Excluir
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favoritos;
