import React, { useState } from 'react';
import './styles.css';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import illustration from '../../assets/svg/perguntas-respostas.svg';

export default function PerguntaResposta() {
  const history = useHistory();

  const [produto, setProduto] = useState('');
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [categoria, setCategoria] = useState('');

  return (
    <div className='content'>
      <div className='page'>
        <div className='header'>
          <Header title={'Pergunta e Resposta'} />
          <Link to="/perguntas-pendentes" className="back-link">
            <FiArrowLeft size={30} color="#35363E" />
          </Link>
        </div>
        <div className='form-wrapper'>
          <div className='illustration'>
            <img src={illustration} alt="" />
          </div>
          <div className='wrapper'>
            <form className='form-register'>
              <div className='input-group'>
                <label>Produto</label>
                <input placeholder='' value={produto} onChange={e => setProduto(e.target.value)} />
              </div>
              <div className='input-group'>
                <label>Pergunta</label>
                <input placeholder='' value={pergunta} onChange={e => setPergunta(e.target.value)} />
              </div>
              <div className='input-group'>
                <label>Resposta</label>
                <input placeholder='' value={resposta} onChange={e => setResposta(e.target.value)} />
              </div>
              <div className='input-group'>
                <label>Categoria</label>
                <input placeholder='' value={categoria} onChange={e => setCategoria(e.target.value)} />
              </div>
              <div className='form-action'>
                <button type="button" className='button-cancel' onClick={() => { history.goBack() }}>Cancelar</button>
                <button type="submit" className='button'>Salvar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
