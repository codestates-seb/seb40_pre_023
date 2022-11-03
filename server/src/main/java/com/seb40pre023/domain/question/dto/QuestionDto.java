package com.seb40pre023.domain.question.dto;

import com.seb40pre023.domain.answer.dto.AnswerDto;
import com.seb40pre023.domain.member.dto.MemberDto;
import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.domain.question.entity.QuestionTag;
import com.seb40pre023.domain.questionvote.dto.QuestionVoteDto;
import com.seb40pre023.domain.questionvote.entity.QuestionVote;
import com.seb40pre023.domain.tag.entity.Tag;
import com.seb40pre023.global.common.auditing.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {

    @Getter
    @AllArgsConstructor
    public static class Post {

        private String title;
        private String content;
        private String text;
        private List<String> tags;

    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {

        private Long questionId;
        private String title;
        private String content;
        private String text;
        private List<String> tags;

    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response{

        private Long questionId;
        private MemberDto.Response member;
        private String title;
        private String content;
        private String text;
        private Question.QuestionStatus status;
        private List<AnswerDto.response> answerList;
        private List<String> tags;
        private QuestionVoteDto.Response questionVote;
        private int answerNumber;
        private int views;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
