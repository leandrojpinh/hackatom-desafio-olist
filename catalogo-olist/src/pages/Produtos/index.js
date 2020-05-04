import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

import { FiSearch } from 'react-icons/fi';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

import image from '../../assets/jpg/prod1.jpg';
import produtoService from '../../services/produtos';

export default function Produtos() {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const data = produtoService();

    setProdutos(data);
  }, []);

  function handleEdit(item) {
    history.push('/categoria', item);
  }

  function handleRemove(item) {

  }

  function handleSearch() {

  }

  return (
    <>
      <Navigation />
      <div className='content'>
        <div className='page'>
          <div className='search-area'>
            <Header title={'Meus Produtos'} />
            <form className='search'>
              <input placeholder="Pesquisar"
                value={search}
                onChange={e => setSearch(e.target.value)}>
              </input>
              <FiSearch size={20} color="#35363E" />
            </form>
          </div>
          <div className='wrapper'>
            <ul>
              {produtos.map(pergunta => (
                <li key={pergunta.id} onClick={() => { }}>
                  <div>
                    <img width={70} height={70} src={image} alt="" />
                    <span>{pergunta.name}</span>
                  </div>
                </li>
              ))
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
