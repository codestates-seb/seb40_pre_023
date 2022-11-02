package com.seb40pre023.domain.questionvote.dto;

import com.seb40pre023.domain.answer.dto.AnswerDto;
import com.seb40pre023.domain.member.dto.MemberDto;
import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.domain.question.entity.QuestionTag;
import com.seb40pre023.domain.questionvote.entity.QuestionVote;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.ElementCollection;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class QuestionVoteDto {

    @Getter
    @AllArgsConstructor
    public static class Post {



    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {


    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response{
        private Long voteId;
        private Map<Long, QuestionVote.VoteStatus> voteStatus;
        private int voteCount;

    }
}
