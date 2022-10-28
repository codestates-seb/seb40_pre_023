package com.seb40pre023.domain.answer.dto;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

public class AnswerDto {
    @Getter
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
    @AllArgsConstructor
    public static class response {
        private Long answerId;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
