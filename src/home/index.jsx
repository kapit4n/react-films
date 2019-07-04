import React from 'react';
import './home.css';
import Favorities from './favorites';
import FilmList from './film-list'
export default class Home extends React.Component {
  render() {
    return (
      <>
        <Favorities></Favorities>
        <FilmList></FilmList>
      </>
    );
  }
}
