package com.seb40pre023.domain.question.controller;

import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.question.dto.PatchQuestionDto;
import com.seb40pre023.domain.question.dto.PostQuestionDto;
import com.seb40pre023.domain.question.dto.QuestionRes;
import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.domain.question.entity.QuestionTag;
import com.seb40pre023.domain.question.service.QuestionService;
import com.seb40pre023.domain.tag.entity.Tag;
import com.seb40pre023.global.common.dto.MultiResponseDto;
import com.seb40pre023.global.common.dto.PageInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionService questionService;

    @PostMapping("/questions/ask/{memberId}")
    public ResponseEntity postQuestion(@PathVariable Long memberId,
            @RequestBody PostQuestionDto postQuestionDto) {

        Question question = postQuestionDto.toQuestion();
        Question response = questionService.createQuestion(memberId, question);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PatchMapping("/questions/{questionId}/edit")
    public ResponseEntity patchQuestion(@PathVariable Long questionId,
                                        @RequestBody PatchQuestionDto patchQuestionDto) {
        patchQuestionDto.setQuestionId(questionId);

        Question question = patchQuestionDto.toQuestion();
        Question response = questionService.updateQuestion(question);

        return new ResponseEntity( HttpStatus.OK);
    }

    @GetMapping("/questions")
    public ResponseEntity getQuestions(@RequestParam int page,
                                       @RequestParam int size) {


        return new ResponseEntity<>( HttpStatus.OK);
    }

    @GetMapping("/questions/{questionId}")
    public ResponseEntity getQuestion(@PathVariable Long questionId) {


        return new ResponseEntity<>( HttpStatus.OK);
    }

    @DeleteMapping("/questions/{questionId}")
    public String deleteQuestion(@PathVariable Long questionId) {

        return "delete question";
    }

}