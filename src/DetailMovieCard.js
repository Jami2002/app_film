import React from "react";

import { BrowserRouter as Router } from 'react-router-dom'
const BoutonDeNavigation = ({ libelle, history }) => (
  <button type="button" onClick={() => history.push('/ma-nouvelle-url')}>{libelle}</button>
);
const SomeComponent = () => (
  <Router path="/" render={(props) => <BoutonDeNavigation {...props} title="Changer de page" />} />
)
const DetailMovieCard = () => (
  <Router>
    <SomeComponent />
    <AnotherComponent />
  </Router>
);

