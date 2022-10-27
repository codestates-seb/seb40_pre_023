package com.seb40pre023.domain.answervote.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AnswerVotePostDto {
//    private long memberId;
    private long answerId;
    private int voteCount;
}
