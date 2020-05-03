import React, { useState } from 'react';
import './styles.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { FiEdit, FiSearch, FiPlusSquare } from 'react-icons/fi';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    backgroundColor: 'transparent'
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

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


export default function PerguntasRespostas() {
  const classes = useStyles();
  const [search, setSearch] = useState('');

  function handleEdit(item) {

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
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell className='action'>
                    <button type="button" onClick={() => handleEdit('')} className='table-button edit-button'>
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
