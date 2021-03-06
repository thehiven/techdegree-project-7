import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = (props) => {
  return (
    <header>
      <SearchForm history={props.history} startLoading={props.startLoading} />
      <Nav startLoading={props.startLoading} />
    </header>
  );
};

export default Header;