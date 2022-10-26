package com.seb40pre023.domain.answer.mapper;

import com.seb40pre023.domain.answer.dto.AnswerPatchDto;
import com.seb40pre023.domain.answer.dto.AnswerPostDto;
import com.seb40pre023.domain.answer.dto.AnswerResponseDto;
import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.member.entity.Member;
import org.springframework.stereotype.Component;

@Component
public class AnswerMapper {
    public Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        return new Answer(0L, answerPostDto.getContent());
        //return new Answer(0L, answerPostDto.getContent(), new Member());
    }

    public Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto) {
        return new Answer(answerPatchDto.getAnswerId(), answerPatchDto.getContent());
//        return new Answer(answerPatchDto.getAnswerId(), answerPatchDto.getContent(), new Member());
    }

    public AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        return new AnswerResponseDto(answer.getAnswerId(), answer.getContent());
    }
}
