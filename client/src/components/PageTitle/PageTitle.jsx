import { Header, Button } from './style';
import { Link } from 'react-router-dom';

const PageTitle = ({ title, button }) => {
  return (
    <Header>
      {title}
      {button ? (
        <Link to="/questions/ask">
          <Button>{button}</Button>
        </Link>
      ) : (
        ''
      )}
    </Header>
  );
};

export default PageTitle;
