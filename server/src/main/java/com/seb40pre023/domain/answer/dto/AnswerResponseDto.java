package com.seb40pre023.domain.answer.dto;

import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;


@AllArgsConstructor
@Getter
@Setter
public class AnswerResponseDto {
    private Long answerId;
    private String content;
    private LocalDateTime createdAt;
}