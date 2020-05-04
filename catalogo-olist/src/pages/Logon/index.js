import React, { useState } from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';

import image from '../../assets/svg/login.svg';

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    history.push('/perguntas-pendentes');
  }

  return (
    <div className='logon'>
      <div className='illustration'>
        <img src={image} alt="" />
      </div>
      <div className='content'>
        <div className='panel'>
          <h1>olist</h1>
          <form>
            <div className='input-group'>
              <label>E-mail</label>
              <input placeholder="ex.: seunome@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)} />
            </div>
            <div className='input-group'>
              <label>Senha</label>
              <input placeholder="ex.: suasenha"
                value={password}
                onChange={e => setPassword(e.target.value)} />
            </div>
            <button className='button' onClick={handleLogin}>
              <span>Entrar</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
