import {
  Tail,
  ProfileCard,
  PostController,
  ProfilePicture,
  Timestamp,
  Name,
  Modified,
} from './style';

const QaFooter = ({ type, name, createAt, modifiedAt, editable, avatar }) => {
  return (
    <Tail>
      <PostController>
        <ul>
          <li>Share</li>
          {editable ? <li>Edit</li> : ''}
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
