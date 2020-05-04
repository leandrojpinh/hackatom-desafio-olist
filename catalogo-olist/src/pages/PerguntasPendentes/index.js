import React, { useState, useEffect } from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import image from '../../assets/jpg/prod1.jpg';

import respostaService from '../../services/perguntas';

// import Modal from '../../components/Modal';

export default function Responder() {
  const history = useHistory();
  // const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [perguntas, setPerguntas] = useState([]);

  useEffect(() => {
    const data = respostaService();

    setPerguntas(data);
  }, []);

  const handleClickConfirm = (item) => {
    history.push('/pergunta-resposta', item);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      <Navigation />
      <div className='content'>
      <div className='page'>
        <div className='header'>
          <Header title={'Perguntas pendentes'} />
          <form>
            <input placeholder="Pesquisar"
              value={search}
              onChange={e => setSearch(e.target.value)} />
            <FiSearch size={20} color="#35363E" />
          </form>
        </div>
        <div className='wrapper'>
          <ul>
            {perguntas.map(pergunta => (
              <li key={pergunta.id} onClick={() => handleClickConfirm(pergunta)}>
                <strong>Pergunta</strong>
                <p>{pergunta.question}</p>
                <div>
                  <img width={70} height={70} src={image} alt="" />
                  <span>{pergunta.product_desc}</span>
                </div>
              </li>
            ))
            }
          </ul>
          {/* <Modal ref={this} isOpen={open} handleClickOpen={handleClickConfirm} handleClose={handleClose} /> */}
        </div>
      </div>
    </div>
    </>
  );
}
