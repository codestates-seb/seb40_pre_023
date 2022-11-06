package com.seb40pre023.domain.question.mapper;

import com.seb40pre023.domain.answer.mapper.AnswerMapper;
import com.seb40pre023.domain.member.mapper.MemberMapper;
import com.seb40pre023.domain.question.dto.QuestionDto;
import com.seb40pre023.domain.question.dto.QuestionPatchDto;
import com.seb40pre023.domain.question.dto.QuestionPostDto;
import com.seb40pre023.domain.question.dto.QuestionResDto;
import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.domain.questionvote.dto.QuestionVoteDto;
import com.seb40pre023.domain.questionvote.entity.QuestionVoteCalculator;
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

    public Question questionPostDtoToQuestion(QuestionDto.Post questionPostDto) {
        if (questionPostDto == null) return null;

        Question question = new Question();
        question.setTitle(questionPostDto.getTitle());
        question.setContent(questionPostDto.getContent());
        question.setText(questionPostDto.getText());
        question.setTags(questionPostDto.getTags());

        return question;
    }

    public Question questionPatchDtoToQuestion(QuestionDto.Patch questionPatchDto) {
        if (questionPatchDto == null) return null;

        Question question = new Question();
        question.setQuestionId(questionPatchDto.getQuestionId());
        question.setTitle(questionPatchDto.getTitle());
        question.setContent(questionPatchDto.getContent());
        question.setText(questionPatchDto.getText());
        question.setTags(questionPatchDto.getTags());

        return question;
    }

    public QuestionDto.Response questionToQuestionRes(Question question) {

        QuestionDto.Response questionResDto = new QuestionDto.Response(
                question.getQuestionId(),
                memberMapper.memberToMemberResponse(question.getMember()),
                question.getTitle(),
                question.getContent(),
                question.getText(),
                question.getQuestionStatus(),
                question.getAnswerList().stream()
                        .map(answerMapper::answerToAnswerResponse)
                        .collect(Collectors.toList()),
                question.getTags(),
                new QuestionVoteDto.Response(
                        question.getQuestionVote().getVoteId(),
                        question.getQuestionVote().getVoteStatus(),
                        question.getQuestionVote().getVoteCount()),
                question.getAnswerList().size(),
                question.getViews(),
                question.getCreatedAt(),
                question.getModifiedAt());

        return questionResDto;
    }
    public QuestionDto.SimpleResponse questionToQuestionSimpleRes(Question question) {
        return new QuestionDto.SimpleResponse(
                question.getQuestionId(),
                question.getTitle());
    }

    public List<QuestionDto.Response> questionsToQuestionsResList(List<Question> questions) {

        List<QuestionDto.Response> questionResDtoList = questions.stream()
                .map(question -> questionToQuestionRes(question))
                .collect(Collectors.toList());

        return questionResDtoList;
    }
}
