package com.seb40pre023.domain.answervote.mapper;

import com.seb40pre023.domain.answervote.dto.AnswerVoteDto;
import com.seb40pre023.domain.answervote.entity.AnswerVote;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class AnswerVoteMapper {
    public AnswerVote answerVotePostToAnswerVote(AnswerVoteDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        AnswerVote answerVote = new AnswerVote();

        answerVote.setVoteState( requestBody.getVoteState() );

        return answerVote;
    }
    public AnswerVoteDto.response answerVoteToAnswerVoteResponse(AnswerVote answerVote) {
        if ( answerVote == null ) {
            return null;
        }

        Long voteId = null;
        int voteState = 0;
        LocalDateTime createdAt = null;
        LocalDateTime modifiedAt = null;

        voteId = answerVote.getVoteId();
        voteState = answerVote.getVoteState();
        createdAt = answerVote.getCreatedAt();
        modifiedAt = answerVote.getModifiedAt();

        Long memberId = answerVote.getMember().getMemberId();
        Long answerId = answerVote.getAnswer().getAnswerId();

        AnswerVoteDto.response response = new AnswerVoteDto.response( voteId, memberId, answerId, voteState, createdAt, modifiedAt );

        return response;
    }
}
