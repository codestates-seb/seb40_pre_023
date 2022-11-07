package com.seb40pre023.domain.answervote.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
@Setter
public class AnswerVoteResponseDto {
    private long voteId;
    private long memberId;
    private long answerId;
    private int voteCount;
}
