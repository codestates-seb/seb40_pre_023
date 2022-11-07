package com.seb40pre023.domain.question.dto;

import com.seb40pre023.domain.answer.dto.AnswerDto;
import com.seb40pre023.domain.member.dto.MemberDto;
import com.seb40pre023.domain.question.entity.QuestionTag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class QuestionResDto{

    private Long questionId;
    private MemberDto.Response member;
    private String title;
    private String content;
    private String status;
    private List<AnswerDto.response> answerList;
    private List<QuestionTag> tags;

}
