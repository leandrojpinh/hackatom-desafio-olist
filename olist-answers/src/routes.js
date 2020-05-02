import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Responder from './pages/Responder';
import Produtos from './pages/Produtos';
import PerguntasRespostas from './pages/PerguntasRespostas';
import PerguntaResposta from './pages/PerguntaResposta';
import Categorias from './pages/Categorias';
import Categoria from './pages/Categoria';

import Navigation from './components/Navigation';

export default function Routes() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        {/* <Route path="/" exact component={Logon} /> */}
        <Route path="/responder" component={Responder} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/perguntas-respostas" component={PerguntasRespostas} />
        <Route path="/pergunta-resposta" component={PerguntaResposta} />
        <Route path="/categorias" component={Categorias} />
        <Route path="/categoria" component={Categoria} />
      </Switch>
    </BrowserRouter>
  );
}
