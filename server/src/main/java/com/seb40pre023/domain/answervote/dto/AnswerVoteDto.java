package com.seb40pre023.domain.answervote.dto;

import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.answervote.entity.AnswerVote;
import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class AnswerVoteDto {
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post {
        private Long memberId;
        private Long answerId;
        private int voteState;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class response {
        private Long voteId;
        private Long memberId;
        private String nickname;
        private int voteState;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
