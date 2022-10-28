package com.seb40pre023.domain.question.controller;

import com.seb40pre023.domain.question.dto.QuestionPatchDto;
import com.seb40pre023.domain.question.dto.QuestionPostDto;
import com.seb40pre023.domain.question.dto.QuestionResDto;
import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.domain.question.mapper.QuestionMapper;
import com.seb40pre023.domain.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    /*
    * 게시물을 생성하는 메서드
    * parameter : 1. 로그인한 계정의 고유 Id
    *             2. @Requestbody - QuestionPostDto
    * return : QuestionResDto (Question 응답 형식)
    * */
    @PostMapping("/questions/ask/{memberId}")
    public ResponseEntity postQuestion(@PathVariable Long memberId,
            @RequestBody QuestionPostDto questionPostDto) {

        Question request = mapper.questionPostDtoToQuestion(questionPostDto);
        Question question = questionService.createQuestion(memberId, request);

        return new ResponseEntity<>(mapper.questionToQuestionResDto(question), HttpStatus.CREATED);
    }

    /*
    * 게시물을 수정하는 메서드
    * parameter : 1. URI 를 통해 "게시물 Id"
    *             2. @RequestBody - QuestionPatchDto (수정하고자 하는 요청받은 내용)
    * return : QuestionResDto (수정된 게시물 내용을 update)
    * */
    @PatchMapping("/questions/{questionId}/edit")
    public ResponseEntity patchQuestion(@PathVariable Long questionId,
                                        @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);

        Question question = mapper.questionPatchDtoToQuestion(questionPatchDto);
        Question response = questionService.updateQuestion(question);

        return new ResponseEntity(mapper.questionToQuestionResDto(response), HttpStatus.OK);
    }

    @GetMapping("/questions")
    public ResponseEntity getQuestions(@RequestParam int page,
                                       @RequestParam int size) {


        return new ResponseEntity<>( HttpStatus.OK);
    }

    @GetMapping("/questions/{questionId}")
    public ResponseEntity getQuestion(@PathVariable Long questionId) {

        Question question = questionService.getQuestion(questionId);

        return new ResponseEntity<>(mapper.questionToQuestionResDto(question), HttpStatus.OK);
    }

    @DeleteMapping("/questions/{questionId}")
    public String deleteQuestion(@PathVariable Long questionId) {

        return "delete question";
    }

}