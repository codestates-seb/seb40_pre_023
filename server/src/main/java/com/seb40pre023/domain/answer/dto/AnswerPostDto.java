package com.seb40pre023.domain.answer.dto;

import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AnswerPostDto {
    private Long memberId;
    private Long questionId;
    private String nickname;
    private String content;


//    public Member getMember() {
//        Member member = new Member();
//        member.setMemberId(memberId);
//        return member;
//    }
//
//    public Question getQuestion() {
//        Question question = new Question();
//        question.setQuestionId(questionId);
//        return question;
//    }
}
