package com.seb40pre023.domain.answervote.dto;

import com.seb40pre023.domain.answervote.entity.AnswerVote;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class AnswerVoteDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        private Long memberId;
        private Long answerId;
        // UP은 +1을 DOWN은 -1을 넘겨준다고 했을 때
        private int voteValue;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        private Long voteId;
        private Long answerId;
        private int voteValue;
    }

    @Getter
    @AllArgsConstructor
    public static class response {
        private Long voteId;
        private int voteValue;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }

}
