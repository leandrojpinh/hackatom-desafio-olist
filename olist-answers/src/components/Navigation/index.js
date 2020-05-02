import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/avatar.png';

import './styles.css'

export default function Navigation() {
  return (
    <nav>
      <div className='navigation'>
        <h2>olist - Seller</h2>
        <div className='menu'>
          <Link className='active' to='/responder'>Responder</Link>
          <Link className='' to='/produtos'>Produtos</Link>
          <Link className='' to='/perguntas-respostas'>Perguntas e Respostas</Link>
          <Link className='' to='/categorias'>Categorias</Link>
        </div>
        <div className='user'>
          <span>Vendedor 1</span>
          <img width={40} height={40} src={avatar} alt='perfil' />
        </div>
      </div>
    </nav>
  );
}
