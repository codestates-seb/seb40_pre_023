package com.seb40pre023.domain.question.service;

import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.member.repository.MemberRepository;
import com.seb40pre023.domain.member.service.MemberService;
import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.domain.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.NoSuchMessageException;
import org.springframework.stereotype.Service;

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

    // 질문 수정
    public Question updateQuestion(Question question) {


        return question;
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
