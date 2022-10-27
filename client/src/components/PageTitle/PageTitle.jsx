import React from 'react';
import { Header, Button } from './style';
import { Link } from 'react-router-dom';

const PageTitle = ({ title, button }) => {
  return (
    <Header>
      {title}
      {button ? (
        <Link to="/">
          <Button>{button}</Button>
        </Link>
      ) : (
        ''
      )}
    </Header>
  );
};

export default PageTitle;
