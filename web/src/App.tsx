import { useEffect, useState } from "react";

function App() {

  const enderecoRequicao = 'http://localhost:3000/livro';

  const [livros, setLivros] = useState([]);
  const [jaCarregouLivros, setJaCarregouLivros] = useState(false)

  const carregaLivros = () => {
    fetch(enderecoRequicao)
      .then(resposta => {

        if(!resposta.ok) { return Promise.reject(new Error('Deu erro, se vira!')) }

        return resposta.json();
      })
      .then(dados => {
        setLivros(dados);
        setJaCarregouLivros(true);
      })
      .catch(error => { 
        setJaCarregouLivros(false);
        console.log(error.message)
      } );
  }

  return (
    <div className="App">
      <button onClick={carregaLivros}>Carrega Livros</button>
      {jaCarregouLivros && livros.length === 0 && <h3>Nenhum livro foi encontrado!</h3>}
      {!jaCarregouLivros && <h3>Clique no botão para carregar os livros</h3>}
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
