package com.seb40pre023.domain.question.dto;

import com.seb40pre023.domain.answer.dto.AnswerDto;
import com.seb40pre023.domain.answer.dto.AnswerResponseDto;
import com.seb40pre023.domain.member.dto.MemberDto;
import com.seb40pre023.domain.member.dto.MemberResponseDto;
import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.domain.question.entity.QuestionTag;
import com.seb40pre023.domain.tag.entity.Tag;
import com.seb40pre023.global.common.auditing.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class QuestionResDto extends BaseTime{

    private Long questionId;
    private MemberDto.Response member;
    private String title;
    private String content;
    private String status;
    private List<AnswerResponseDto> answerList;
    private List<QuestionTag> tags;

}
