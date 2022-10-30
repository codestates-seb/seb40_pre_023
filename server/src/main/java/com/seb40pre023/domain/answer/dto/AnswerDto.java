package com.seb40pre023.domain.answer.dto;

import com.seb40pre023.domain.answervote.dto.AnswerVoteDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

public class AnswerDto {
    @Getter
    @Setter
    @AllArgsConstructor // TODO 테스트용?
    public static class Post {
        private Long memberId;
        private Long questionId;
        private String nickname;
        private String content;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        private Long answerId;
        private String content;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class response {
        private Long answerId;
        private Long memberId;
        private Long questionId;
        private String content;
        private int numberOfTotalVote;
        private List<AnswerVoteDto.response> answerVoteList;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
