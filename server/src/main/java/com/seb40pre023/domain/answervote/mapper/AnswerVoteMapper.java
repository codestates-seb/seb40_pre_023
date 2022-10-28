package com.seb40pre023.domain.answervote.mapper;

import com.seb40pre023.domain.answer.dto.AnswerResponseDto;
import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.answervote.dto.AnswerVoteDto;
import com.seb40pre023.domain.answervote.dto.AnswerVotePostDto;
import com.seb40pre023.domain.answervote.dto.AnswerVoteResponseDto;
import com.seb40pre023.domain.answervote.entity.AnswerVote;
import com.seb40pre023.domain.member.entity.Member;
import org.springframework.stereotype.Component;

@Component
public class AnswerVoteMapper {
    public AnswerVote answerVotePostToAnswerVote(AnswerVoteDto.Post requestBody) {
        Member member = new Member();
        member.setMemberId(requestBody.getMemberId());

        Answer answer = new Answer();
        answer.setAnswerId(requestBody.getAnswerId());

        AnswerVote answerVote = new AnswerVote();
        answerVote.setVoteValue(requestBody.getVoteValue());
        answerVote.setMember(member);
        answerVote.setAnswer(answer);

        return answerVote;
    }

    public AnswerVoteDto.response answerVoteToAnswerVoteResponse(AnswerVote answerVote) {
        AnswerVoteDto.response response =
                new AnswerVoteDto.response(answerVote.getVoteId(), answerVote.getVoteValue(), answerVote.getCreatedAt(), answerVote.getModifiedAt());

        return response;
    }
}
