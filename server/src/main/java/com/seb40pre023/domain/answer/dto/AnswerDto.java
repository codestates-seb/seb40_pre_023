package com.seb40pre023.domain.answer.dto;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class AnswerDto {
    @Getter
    @AllArgsConstructor // TODO 테스트용?
    public static class Post {
        @NotNull
        private String content;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        private long answerId;
        @NotNull
        private String content;
    }

    @Getter
    @AllArgsConstructor
    public static class response {
        private long answerId;
        private String content;
    }
}
