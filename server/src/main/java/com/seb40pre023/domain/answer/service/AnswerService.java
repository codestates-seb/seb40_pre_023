package com.seb40pre023.domain.answer.service;

import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.answer.repository.AnswerRepository;
import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.member.service.MemberService;
import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.domain.question.service.QuestionService;
import com.seb40pre023.global.error.exception.BusinessLogicException;
import com.seb40pre023.global.error.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.context.NoSuchMessageException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final MemberService memberService;
    private final QuestionService questionService;

    // 회원이 질문글에 답변 생성
    public Answer createAnswer(Long memberId, Long questionId, Answer answer) {
        Member member = memberService.findVerifiedMember(memberId);
        Question question = questionService.findVerifiedQuestion(questionId); // Id 를 통해 질문 가져오기
        question.setQuestionStatus(Question.QuestionStatus.UNACCEPTED); // 질문 상태 변경

        // Answer 에 DB 에서 불러온 Member 와 Question 입력
        answer.setMember(member);
        answer.setQuestion(question);

        return answerRepository.save(answer);
    }

    // 회원이 질문글에 작성한 답변 수정
    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> findAnswer.setContent(content));

//        Optional.ofNullable(answer.getAnswerStatus())
//                .ifPresent(memberStatus -> findAnswer.setAnswerStatus(AnswerStatus));

        return answerRepository.save(findAnswer);
    }

    public Answer findAnswer(Long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        return findAnswer;
    }

    public List<Answer> findAnswers() {
        List<Answer> answers = answerRepository.findAll();
        return answers;
    }

    public void deleteAnswer(Long memberId, Long answerId) {
        System.out.println("success delete answer : " + answerId);
        Answer findAnswer = findVerifiedAnswer(answerId);

        if (findAnswer.getMember().getMemberId().equals(memberId)) {
            answerRepository.deleteById(answerId);
        }else {
            throw new NoSuchMessageException("삭제 권한이 없습니다.");
        }


    }

    public Answer findVerifiedAnswer(Long answerId) {
        Optional<Answer> optionalAnswer =
                answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }
}
