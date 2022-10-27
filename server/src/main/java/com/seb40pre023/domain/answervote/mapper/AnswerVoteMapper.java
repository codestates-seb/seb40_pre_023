package com.seb40pre023.domain.answervote.mapper;

import com.seb40pre023.domain.answer.dto.AnswerResponseDto;
import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.answervote.dto.AnswerVoteDto;
import com.seb40pre023.domain.answervote.dto.AnswerVotePostDto;
import com.seb40pre023.domain.answervote.dto.AnswerVoteResponseDto;
import com.seb40pre023.domain.answervote.entity.AnswerVote;
import org.springframework.stereotype.Component;

@Component
public class AnswerVoteMapper {
//    public AnswerVote answerVotePostDtoToAnswerVote(AnswerVotePostDto answerVotePostDto) {
//        Answer answer = new Answer();
//        answer.setAnswerId(answerVotePostDto.getAnswerId());
//
//        AnswerVote answerVote = new AnswerVote();
//        answerVote.setVoteState(answerVote.getVoteState());
//        answerVote.setAnswer(answer);
//
//        return answerVote;
//    }

    public AnswerVote answerVotePostToAnswerVote(AnswerVoteDto.Post requestBody) {
        Answer answer = new Answer();
        answer.setAnswerId(requestBody.getAnswerId());

        AnswerVote answerVote = new AnswerVote();
        answerVote.setVoteValue(requestBody.getVoteValue());
        answerVote.setAnswer(answer);

        return answerVote;
    }

    public AnswerVote answerVotePatchToAnswerVote(AnswerVoteDto.Patch requestBody) {
        Answer answer = new Answer();
        answer.setAnswerId(requestBody.getAnswerId());

        AnswerVote answerVote = new AnswerVote();
        answerVote.setVoteId(requestBody.getVoteId());
        answerVote.setAnswer(answer);

        return answerVote;
    }

    public AnswerVoteDto.response answerVoteToAnswerVoteResponse(AnswerVote answerVote) {
        AnswerVoteDto.response response =
                new AnswerVoteDto.response(answerVote.getVoteId(), answerVote.getAnswer().getAnswerId(), answerVote.getVoteValue());

        return response;
    }

//    public AnswerVoteResponseDto answerVoteToAnswerVoteResponseDto(AnswerVote answerVote) {
//        AnswerVoteResponseDto response =
//                new AnswerVoteResponseDto(answerVote.getVoteId(), answerVote.getAnswer().getAnswerId(), answerVote.getVoteState());
//
//        return response;
//    }

}
