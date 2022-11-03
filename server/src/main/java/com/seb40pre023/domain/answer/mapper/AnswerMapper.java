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
                answer.getMember().getNickname(),
                answer.getAnswerVoteList().stream()
                        .mapToInt(answerVote -> answerVote.getVoteState())
                        .sum(),
                answer.getAnswerVoteList().stream()
                        .mapToInt(answerVote -> answerVote.getVoteState())
                        .filter(n -> n != 0)
                        .count(),
                answer.getAnswerVoteList().stream()
                        .map(answerVote -> answerVoteMapper.answerVoteToAnswerVoteResponse(answerVote))
                        .filter(answerVote -> answerVote.getVoteState() != 0)
                        .collect(Collectors.toList()),
                answer.getCreatedAt(),
                answer.getModifiedAt()
        );
        return response;
    }
}
