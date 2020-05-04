import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PerguntasPendentes from './pages/PerguntasPendentes';
import Produtos from './pages/Produtos';
import Catalogo from './pages/Catalogo';
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
        <Route path="/perguntas-pendentes" component={PerguntasPendentes} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/catalogo" component={Catalogo} />
        <Route path="/pergunta-resposta" component={PerguntaResposta} />
        <Route path="/categorias" component={Categorias} />
        <Route path="/categoria" component={Categoria} />
      </Switch>
    </BrowserRouter>
  );
}
