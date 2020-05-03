import React, { useState } from 'react';
import './styles.css';

import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import illustration from '../../assets/svg/categoria.svg';

export default function Categoria() {
  const history = useHistory();
  const [description, setDescription] = useState('');

  function handleEdit(item) {

  }

  function handleRemove(item) {

  }

  function handleBack() {

  }

  return (
    <div className='content'>
      <div className='page'>
        <div className='header'>
          <Header title={'Categoria'} />
          <Link to="/categorias" className="back-link">
            <FiArrowLeft size={30} color="#35363E" />
          </Link>
        </div>
        <div className='form-wrapper'>
          <div className='illustration'>
            <img src={illustration} width={500} height={346} alt='Categoria' />
          </div>
          <div className='wrapper'>
            <form className='form-register'>
              <div className='input-group'>
                <label>Descrição</label>
                <input placeholder='' value={description} onChange={e => setDescription(e.target.value)} />
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
