import React, { useState, useEffect } from 'react';
import './styles.css';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { FiEdit, FiSearch, FiPlusSquare } from 'react-icons/fi';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Header from '../../components/Header';
import catalogoService from '../../services/catalogo';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    backgroundColor: 'transparent'
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function PerguntasRespostas() {
  const classes = useStyles();
  const history = useHistory();
  const [search, setSearch] = useState('');
  const [catalogo, setCatalogo] = useState([]);

  useEffect(() => {
    const data = catalogoService();

    setCatalogo(data);
  }, []);

  function handleEdit(item) {
    history.push('/pergunta-resposta', item);
  }

  function handleAdd() {

  }

  return (
    <div className='content'>
      <div className='page'>
        <div className='header'>
          <Header title={'Catálogo'} />
          <form>
            <input placeholder="Pesquisar"
              value={search}
              onChange={e => setSearch(e.target.value)} />
            <FiSearch size={20} color="#35363E" />
          </form>
          <button type="button" onClick={() => handleAdd()} className='add-button'>
            <FiPlusSquare size={20} color="#FAFAFA" />
            <span>Criar</span>
          </button>
        </div>
        <div className='wrapper'>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Pergunta</TableCell>
                <TableCell>Resposta</TableCell>
                <TableCell>Produto</TableCell>
                <TableCell>Categoria</TableCell>
                <TableCell>Ação</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {catalogo.map((item) => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    {item.pergunta}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.resposta}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.produto}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.categoria}
                  </TableCell>
                  <TableCell className='action'>
                    <button type="button" onClick={() => handleEdit(item)} className='table-button edit-button'>
                      <FiEdit size={20} color="#FAFAFA" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
