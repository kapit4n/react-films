import React from 'react';
import './home.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Favorities from './favorites';
import FilmList from './film-list'


export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Favorities></Favorities>
          <FilmList></FilmList>
        </Container>
      </React.Fragment>
    );
  }
}
