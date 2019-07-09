import React from 'react';
import './home.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Favorities3 from './favorities3';
import FilmList from './film-list'


export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Favorities3></Favorities3>
          <FilmList></FilmList>
        </Container>
      </React.Fragment>
    );
  }
}
