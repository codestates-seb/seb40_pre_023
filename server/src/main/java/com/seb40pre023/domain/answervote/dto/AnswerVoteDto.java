package com.seb40pre023.domain.answervote.dto;

import com.seb40pre023.domain.answer.entity.Answer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class AnswerVoteDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        //    private long memberId;
        private long answerId;
        private int voteValue;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        private long answerId;
        private long voteId;
        private int voteValue;

//        public void setAnswer(Answer answer) {
//            this.answerId = answer.getAnswerId();
//        }
    }

    @Getter
    @AllArgsConstructor
    public static class response {
        private long voteId;
        //    private long memberId;
        private long answerId;
        private int voteValue;
    }

}
