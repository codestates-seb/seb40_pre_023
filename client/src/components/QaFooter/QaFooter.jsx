import {
  Tail,
  ProfileCard,
  PostController,
  ProfilePicture,
  Timestamp,
  Name,
  Modified,
} from './style';
import { Link } from 'react-router-dom';

const QaFooter = ({
  type,
  name,
  createAt,
  modifiedAt,
  editable,
  avatar,
  itemId,
}) => {
  return (
    <Tail>
      <PostController>
        <ul>
          <li>Share</li>
          {/* to={`/questions/${item.questionId}`}> */}
          {editable && type === 'question' ? (
            <Link to={`/questions/${itemId}/edit`}>
              <li>Edit</li>
            </Link>
          ) : (
            ''
          )}
          {editable && type === 'answer' ? (
            <Link to={`/answers/${itemId}/edit`}>
              <li>Edit</li>
            </Link>
          ) : (
            ''
          )}
          <li>Follow</li>
        </ul>
      </PostController>
      {modifiedAt ? (
        <Modified>
          edited <span>{modifiedAt}</span>
        </Modified>
      ) : (
        ''
      )}
      <ProfileCard type={type}>
        <ProfilePicture avatar={avatar}></ProfilePicture>
        <div>
          <Timestamp>
            {type === 'question' ? 'asked ' : 'answered '}
            <span>{createAt}</span>
          </Timestamp>
          <Name>{name}</Name>
        </div>
      </ProfileCard>
    </Tail>
  );
};

export default QaFooter;
