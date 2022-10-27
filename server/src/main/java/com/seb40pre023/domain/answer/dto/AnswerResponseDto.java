package com.seb40pre023.domain.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@Getter
@Setter
public class AnswerResponseDto {
    private Long answerId;
    private String content;
}