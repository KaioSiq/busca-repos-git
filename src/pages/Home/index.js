import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';


function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [ erro, setErro] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.forEach((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      history.push('./repositories');
    })
    .catch(err => {
      setErro(true);
    });
  }

  return (
    <S.HomeContainer>
        <S.Content>
          <S.h1>Pesquisa de Repositórios no GitHub</S.h1>
        </S.Content>
        <S.Content>
        <S.Input name="usuario" id="usuario" className="usuarioInput " placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg>Ocorreu um Erro. Tente novamente</S.ErrorMsg> : ''}
    </S.HomeContainer>

  );
}

export default App;
