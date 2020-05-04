import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

import { FiEdit, FiTrash2, FiSearch, FiPlusSquare } from 'react-icons/fi';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import categoriaService from '../../services/categoria';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: 'transparent'
  },
});

export default function Categorias() {
  const history = useHistory();
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const data = categoriaService();

    setCategorias(data);
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
            <Header title={'Categorias'} />
            <form className='search'>
              <input placeholder="Pesquisar"
                value={search}
                onChange={e => setSearch(e.target.value)}>
              </input>
              <FiSearch size={20} color="#35363E" />
            </form>
            <button type="button" onClick={() => handleSearch('')} className='add-button'>
              <FiPlusSquare size={20} color="#FAFAFA" />
              <span>Criar</span>
            </button>
          </div>
          <div className='wrapper'>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Categoria</TableCell>
                  <TableCell align="center">Núm de perguntas</TableCell>
                  <TableCell align="center">Núm de respostas</TableCell>
                  <TableCell align="center">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categorias.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.categoria}
                    </TableCell>
                    <TableCell align="center">
                      <div className='badge-cell'>
                        <span className='badge badge-warn'>{item.qtd_perguntas}</span>
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      <div className='badge-cell'>
                        <span className='badge badge-info'>{item.qtd_respostas}</span>
                      </div>
                    </TableCell>
                    <TableCell >
                      <div className='action'>
                        <button type="button" onClick={() => handleEdit('')} className='table-button edit-button'>
                          <FiEdit size={20} color="#FAFAFA" />
                        </button>
                        <button type="button" onClick={() => handleRemove('')} className='table-button remove-button'>
                          <FiTrash2 size={20} color="#FAFAFA" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
