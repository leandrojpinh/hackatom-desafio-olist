import React, { useState } from 'react';
import './styles.css';

import Header from '../../components/Header';
import { FiEdit, FiTrash2, FiSearch, FiPlusSquare } from 'react-icons/fi';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: 'transparent'
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
export default function Categorias() {
  const classes = useStyles();
  const [search, setSearch] = useState('');

  function handleEdit(item) {

  }

  function handleRemove(item) {

  }

  function handleSearch() {

  }

  return (
    <div className='content'>
      <div className='page'>
        <div className='search-area'>
          <Header title={'Categoria'} />
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
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">
                    <div className='badge-cell'>
                      <span className='badge badge-warn'>{row.calories}</span>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div className='badge-cell'>
                      <span className='badge badge-info'>{row.fat}</span>
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
  );
}
