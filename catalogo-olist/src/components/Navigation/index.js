import React, { useState } from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';
import { FiMenu, FiHome, FiLayers, FiPackage, FiFolder, FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import avatar from '../../assets/avatar.png';
import profile from '../../assets/profile.png';

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Navigation() {
  const history = useHistory();
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(open);
  };

  const navigate = (url) => {
    history.push(`/${url}`);
  }

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key={'Início'} onClick={() => navigate('perguntas-pendentes')}>
          <ListItemIcon>
            <FiHome size={25} color="#35363E" />
          </ListItemIcon>
          <ListItemText primary={'Início'} />
        </ListItem>
        <ListItem button key={'Catálogo'} onClick={() => navigate('catalogo')}>
          <ListItemIcon>
            <FiLayers size={25} color="#35363E" />
          </ListItemIcon>
          <ListItemText primary={'Catálogo'} />
        </ListItem>
      </List>
      <Divider />
      <span className='separator'>Cadastros</span>
      <List>
        <ListItem button key={'Produtos'} onClick={() => navigate('produtos')}>
          <ListItemIcon>
            <FiPackage size={25} color="#35363E" />
          </ListItemIcon>
          <ListItemText primary={'Produtos'} />
        </ListItem>
        <ListItem button key={'Categorias'} onClick={() => navigate('categorias')}>
          <ListItemIcon>
            <FiFolder size={25} color="#35363E" />
          </ListItemIcon>
          <ListItemText primary={'Categorias'} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <nav>
      <Drawer anchor={'left'} open={isOpen} onClose={toggleDrawer(false)}>
        <div className='profile primary-dark'>
          <div>
            <img src={profile} width={100} height={100} alt="" />
            <strong>Vendedor 1</strong>
          </div>
          <div>
            <div>
              <span>Serviço ativo</span>
              <div className='circle' />
            </div>
            <button>
              <FiPower size={25} color="#FAFAFA" />
            </button>
          </div>
        </div>
        {list()}
      </Drawer>
      <div className='navigation'>
        <button onClick={() => setIsOpen(true)}>
          <FiMenu size={30} color="#FAFAFA" />
        </button>
        <h2>Catálogo Olist</h2>
        <div className='menu'>
          <Link className='active' to='/perguntas-pendentes'>Perguntas Pendentes</Link>
          {/* <Link className='' to='/produtos'>Produtos</Link> */}
          {/* <Link className='' to='/categorias'>Perguntas e Respostas</Link> */}
          <Link className='' to='/catalogo'>Catálogo</Link>
        </div>
        <div className='user'>
          <span>Vendedor 1</span>
          <img width={40} height={40} src={avatar} alt='perfil' />
        </div>
      </div>
    </nav>
  );
}
