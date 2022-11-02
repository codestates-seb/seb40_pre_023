package com.seb40pre023.domain.question.service;

import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.member.repository.MemberRepository;
import com.seb40pre023.domain.member.service.MemberService;
import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.domain.question.repository.QuestionRepository;
import com.seb40pre023.domain.questionvote.entity.QuestionVote;
import com.seb40pre023.domain.questionvote.entity.QuestionVoteCalculator;
import lombok.RequiredArgsConstructor;
import org.springframework.context.NoSuchMessageException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final MemberService memberService;
    // 질문 생성
    public Question createQuestion(Long memberId, Question question) {

        Member member = memberService.findVerifiedMember(memberId);
        question.setMember(member);
        question.setQuestionVote(new QuestionVote());

        return questionRepository.save(question);
    }

    /*
    * Controller 로부터 전달받은 데이터를 토대로 질문을 수정하는 메서드
    * parameter : Question (수정사항)
    * return : Question (수정사항이 반영된 Question)
    * */
    @Transactional
    public Question updateQuestion(Question question) {

        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Optional.ofNullable(question.getTitle())
                .ifPresent(findQuestion::setTitle);
        Optional.ofNullable(question.getContent())
                .ifPresent(findQuestion::setContent);
        Optional.ofNullable(question.getTagList())
                .ifPresent(findQuestion::setTagList);

        return findQuestion;
    }

    // 질문 조회하는 메서드
    public Question getQuestion(Long questionId) {

        return findVerifiedQuestion(questionId);
    }

    /*
    * 질문리스트를 조회하는 메서드
    * parameter : page, size
    * return : Page<Question>
    */
    public Page<Question> getQuestions(int page, int size) {

        return questionRepository.findAll(PageRequest.of(page, size,
                Sort.by("questionId").descending()));
    }

    // 질문이 존재하는지 검증하는 메서드
    public Question findVerifiedQuestion(Long questionId) {

        Optional<Question> optionalQuestion =
                questionRepository.findById(questionId);
        Question findQuestion =
                optionalQuestion.orElseThrow(() -> new NoSuchMessageException("게시물을 찾을 수 없습니다."));

        return findQuestion;
    }
    /*
    * 질문을 삭제하는 메서드
    * parameter : questionId (삭제하고자 하는 질문의 ID를 받음)
    * return : void (삭제 후 String message 로 전달)
    *
    * */
    public void deleteQuestion(Long memberId, Long questionId) {

        // 삭제하고자 하는 질문이 존재하는지 확인
        Question findQuestion = findVerifiedQuestion(questionId);

        // 현재 로그인한 회원 ID 와 질문 작성자가 일치하면 질문 삭제
        if (findQuestion.getMember().getMemberId().equals(memberId)) {
            questionRepository.delete(findQuestion);
        } else {
            throw new NoSuchMessageException("질문을 삭제할 수 있는 권한이 없습니다.");
        }
    }

    public int voteEvent(int voteType, Long questionId, Long memberId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        QuestionVote.VoteStatus vote;
        // voteType == 1 : 추천 / voteType == 2 : 비추천
        if (voteType == 1) vote = QuestionVote.VoteStatus.VOTE_GOOD;
        else vote = QuestionVote.VoteStatus.VOTE_BAD;

        // Question.VoteStatus 에 새로 추가된 vote 값을 넣어준다.
        findQuestion.getQuestionVote().getVoteStatus().put(memberId, vote);

        // voteCount 계산해서 Question - QuestionVote 에 넣어준다.
        int voteCount = QuestionVoteCalculator.calQuestionVote(findQuestion.getQuestionVote());
        findQuestion.getQuestionVote().setVoteCount(voteCount);
        questionRepository.save(findQuestion);

        return QuestionVoteCalculator.calQuestionVote(findQuestion.getQuestionVote());
    }
}
