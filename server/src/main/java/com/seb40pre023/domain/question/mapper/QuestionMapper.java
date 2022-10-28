package com.seb40pre023.domain.question.mapper;

import com.seb40pre023.domain.answer.mapper.AnswerMapper;
import com.seb40pre023.domain.member.mapper.MemberMapper;
import com.seb40pre023.domain.question.dto.QuestionPatchDto;
import com.seb40pre023.domain.question.dto.QuestionPostDto;
import com.seb40pre023.domain.question.dto.QuestionResDto;
import com.seb40pre023.domain.question.entity.Question;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class QuestionMapper {
    private final MemberMapper memberMapper;
    private final AnswerMapper answerMapper;

    public Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        if (questionPostDto == null) return null;

        Question question = new Question();
        question.setTitle(questionPostDto.getTitle());
        question.setContent(questionPostDto.getContent());
        question.setTagList(questionPostDto.getTagList());

        return question;
    }

    public Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        if (questionPatchDto == null) return null;

        Question question = new Question();
        question.setQuestionId(questionPatchDto.getQuestionId());
        question.setTitle(questionPatchDto.getTitle());
        question.setContent(questionPatchDto.getContent());
        question.setTagList(questionPatchDto.getTagList());

        return question;
    }

    public QuestionResDto questionToQuestionResDto(Question question) {

        QuestionResDto questionResDto = new QuestionResDto(
                question.getQuestionId(),
                memberMapper.memberToMemberResponse(question.getMember()),
                question.getTitle(),
                question.getContent(),
                question.getStatus(),
                question.getAnswerList().stream()
                        .map(answerMapper::answerToAnswerResponseDto)
                        .collect(Collectors.toList()),
                question.getTagList());

        return questionResDto;
    }

    public List<QuestionResDto> questionsToQuestionsResDtoList(List<Question> questions) {

        List<QuestionResDto> questionResDtoList = questions.stream()
                .map(question -> questionToQuestionResDto(question))
                .collect(Collectors.toList());

        return questionResDtoList;
    }
}
