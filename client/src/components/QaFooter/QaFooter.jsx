import {
  Tail,
  ProfileCard,
  PostController,
  ProfilePicture,
  Timestamp,
  Name,
  Modified,
} from './style';
import { Link, useNavigate } from 'react-router-dom';
import { deleteQuestion, deleteAnswer } from '../../api/api';

const QaFooter = ({
  type,
  name,
  createAt,
  modifiedAt,
  editable,
  avatar,
  itemId,
  token,
}) => {
  const navigate = useNavigate();
  const onDelete = () => {
    if (type === 'question') {
      deleteQuestion(itemId, token)
        .then((res) => navigate('/'))
        .catch((err) => alert('글 삭제에 실패하였습니다😫'));
    } else if (type === 'answer') {
      deleteAnswer(itemId, token)
        .then((res) => navigate(0))
        .catch((err) => alert('글 삭제에 실패하였습니다😫'));
    }
  };
  return (
    <Tail>
      <PostController>
        <ul>
          <li>Share</li>
          {editable && type === 'question' ? (
            <>
              <Link to={`/questions/${itemId}/edit`}>
                <li>Edit</li>
              </Link>
              <li onClick={onDelete}>Delete</li>
            </>
          ) : (
            ''
          )}
          {editable && type === 'answer' ? (
            <>
              <Link to={`/answers/${itemId}/edit`}>
                <li>Edit</li>
              </Link>
              <li onClick={onDelete}>Delete</li>
            </>
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
        <ProfilePicture avatar={avatar ? avatar : ''}></ProfilePicture>
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
