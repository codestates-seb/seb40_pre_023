import { Header, Button, TitleArea } from './style';
import { Link } from 'react-router-dom';

const PageTitle = ({ title, button }) => {
  return (
    <Header>
      <TitleArea>{title}</TitleArea>
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
