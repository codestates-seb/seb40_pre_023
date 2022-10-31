package com.seb40pre023.domain.answer.mapper;

import com.seb40pre023.domain.answer.dto.AnswerDto;
import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.answervote.mapper.AnswerVoteMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class AnswerMapper {
    private final AnswerVoteMapper answerVoteMapper;

    public Answer answerPostToAnswer(AnswerDto.Post requestBody) {
        if (requestBody == null) return null;

        Answer answer = new Answer();
        answer.setNickname(requestBody.getNickname());
        answer.setContent(requestBody.getContent());

        return answer;
    }
    public Answer answerPatchToAnswer(AnswerDto.Patch requestBody) {
        if (requestBody == null) return null;

        Answer answer = new Answer();
        answer.setAnswerId(requestBody.getAnswerId());
        answer.setContent(requestBody.getContent());

        return answer;
    }
    public AnswerDto.response answerToAnswerResponse(Answer answer) {
        AnswerDto.response response = new AnswerDto.response(
                answer.getAnswerId(),
                answer.getMember().getMemberId(),
                answer.getQuestion().getQuestionId(),
                answer.getContent(),
                answer.getAnswerVoteList().size(),
                answer.getAnswerVoteList().stream()
                        .map(answerVoteMapper::answerVoteToAnswerVoteResponse)
                        .collect(Collectors.toList()),
                answer.getCreatedAt(),
                answer.getModifiedAt()
        );
        return response;
    }
}
