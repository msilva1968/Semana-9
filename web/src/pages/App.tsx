import { useState } from "react";
import style from './Botao.module.scss';

function App() {

  const enderecoRequicao = 'http://localhost:3000/livro';

  const [livros, setLivros] = useState([]);
  const [jaCarregouLivros, setJaCarregouLivros] = useState(false)

  const carregaLivros = () => {
    fetch(enderecoRequicao)
      .then(resposta => {

        if(!resposta.ok) { return Promise.reject(new Error('Algo deu errado!')) }

        return resposta.json();
      })
      .then(dados => {
        setLivros(dados);
        setJaCarregouLivros(true);
      })
      .catch(error => { 
        setJaCarregouLivros(false);
      } );
  }

  return (
    <div>
      <header className={style.header}>
        <div>
          <center>
          <h2><strong>Livraria On Line</strong></h2>
          </center>
        </div>
      </header>
      <br></br>
      <button className={style.botao} onClick={carregaLivros}>Listar Livros</button>
      {jaCarregouLivros && livros.length === 0 && <h3>Nenhum livro foi encontrado!</h3>}
      {!jaCarregouLivros && <h3>Clique no botão para listar os livros</h3>}
      {jaCarregouLivros && livros.map((livro: any) => (
        <div key={livro.id}>
          <h2>{livro.titulo}</h2>
          <strong>{livro.nomeAutor}</strong>
        </div>
      ))}
    </div>
  );
}

export default App;
