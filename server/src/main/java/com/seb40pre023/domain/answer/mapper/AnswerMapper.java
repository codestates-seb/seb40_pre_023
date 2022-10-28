package com.seb40pre023.domain.answer.mapper;

import com.seb40pre023.domain.answer.dto.AnswerDto;
import com.seb40pre023.domain.answer.dto.AnswerPatchDto;
import com.seb40pre023.domain.answer.dto.AnswerPostDto;
import com.seb40pre023.domain.answer.dto.AnswerResponseDto;
import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.question.entity.Question;
import org.springframework.stereotype.Component;

@Component
public class AnswerMapper {
    public Answer answerPostToAnswer(AnswerDto.Post requestBody) {
        if (requestBody == null) return null;

        Member member = new Member();
        member.setMemberId(requestBody.getMemberId());

        Question question = new Question();
        question.setQuestionId(requestBody.getQuestionId());

        Answer answer = new Answer();
        answer.setContent(requestBody.getContent());
        answer.setMember(member);
        answer.setQuestion(question);

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
        AnswerDto.response response =
                new AnswerDto.response(answer.getAnswerId(),answer.getContent(), answer.getCreatedAt(), answer.getModifiedAt());

        return response;
    }
}