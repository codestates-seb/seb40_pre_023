package com.seb40pre023.domain.question.service;

import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.member.repository.MemberRepository;
import com.seb40pre023.domain.member.service.MemberService;
import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.domain.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.NoSuchMessageException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    // 질문이 존재하는지 검증하는 메서드
    public Question findVerifiedQuestion(Long questionId) {

        Optional<Question> optionalQuestion =
                questionRepository.findById(questionId);
        Question findQuestion =
                optionalQuestion.orElseThrow(() -> new NoSuchMessageException("게시물을 찾을 수 없습니다."));

        return findQuestion;
    }
}
