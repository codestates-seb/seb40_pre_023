import { AnswerContainer } from '../../pages/QuestionDetail/style';
import { QlViewer } from '../../styles/QlVeiwer';
import QaFooter from '../QaFooter/QaFooter';
import { displayCreatedAt } from '../../utils/displayCreatedAt';
import VoteBtns from '../VoteBtns/VoteBtns';
import dompurify from 'dompurify';

const AnswerItem = ({ answer, editable }) => {
  const sanitizer = dompurify.sanitize;

  return (
    <AnswerContainer key={answer.answerId}>
      <VoteBtns votes={answer.numberOfTotalVote} answerId={answer.answerId} />
      <article>
        <div className="ql-snow">
          <QlViewer
            dangerouslySetInnerHTML={{ __html: sanitizer(answer.content) }}
          />
        </div>
        <QaFooter
          type="answer"
          createAt={displayCreatedAt(answer.createdAt)}
          modifiedAt={displayCreatedAt(answer.modifiedAt)}
          // CHECK: 답변자 이름이 안들어오고 있음()
          name={answer.nickname}
          editable={editable}
          avatar={''}
          itemId={answer.answerId}
        ></QaFooter>
      </article>
    </AnswerContainer>
  );
};

export default AnswerItem;
