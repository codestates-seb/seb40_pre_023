package com.seb40pre023.domain.answer.dto;

import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Getter
@Setter
public class AnswerResponseDto {
    private Long answerId;
    private Long memberId;
    private Long questionId;
    private String content;

    public void setMember(Member member) {
        this.memberId = member.getMemberId();
    }

    public void setQuestion(Question question) {
        this.questionId = question.getQuestionId();
    }
}
