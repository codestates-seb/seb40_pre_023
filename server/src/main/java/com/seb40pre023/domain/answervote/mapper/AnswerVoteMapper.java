package com.seb40pre023.domain.answervote.mapper;

import com.seb40pre023.domain.answervote.dto.AnswerVoteDto;
import com.seb40pre023.domain.answervote.entity.AnswerVote;
import com.seb40pre023.domain.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class AnswerVoteMapper {
    private final MemberService memberService;

    public AnswerVote answerVotePostToAnswerVote(AnswerVoteDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        AnswerVote answerVote = new AnswerVote();
        answerVote.setMemberId(requestBody.getMemberId());
        answerVote.setAnswerId(requestBody.getAnswerId());
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
        String nickname = null;

        voteId = answerVote.getVoteId();
        voteState = answerVote.getVoteState();
        createdAt = answerVote.getCreatedAt();
        modifiedAt = answerVote.getModifiedAt();
        nickname = memberService.findVerifiedMember(answerVote.getMemberId()).getNickname();

        Long memberId = answerVote.getMemberId();

        AnswerVoteDto.response response = new AnswerVoteDto.response( voteId, memberId, nickname, voteState, createdAt, modifiedAt );

        return response;
    }
}
