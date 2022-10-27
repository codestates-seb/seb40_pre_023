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
        if (answerPostDto == null) return null;

        Member member = new Member();
        member.setMemberId(answerPostDto.getMemberId());

        Answer answer = new Answer();
        answer.setContent(answerPostDto.getContent());
        answer.setMember(member);

        return answer;
    }

    public Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto) {
        if (answerPatchDto == null) return null;

        Answer answer = new Answer();
        answer.setAnswerId(answerPatchDto.getAnswerId());
        answer.setContent(answerPatchDto.getContent());

        return answer;
    }

    public AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        AnswerResponseDto response =
                new AnswerResponseDto(answer.getAnswerId(),answer.getContent());

        return response;
    }
}
