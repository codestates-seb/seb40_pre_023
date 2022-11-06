package com.seb40pre023.domain.question.controller;

import com.seb40pre023.domain.question.dto.QuestionDto;
import com.seb40pre023.domain.question.dto.QuestionPatchDto;
import com.seb40pre023.domain.question.dto.QuestionPostDto;
import com.seb40pre023.domain.question.dto.QuestionResDto;
import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.domain.question.mapper.QuestionMapper;
import com.seb40pre023.domain.question.service.QuestionService;
import com.seb40pre023.domain.questionvote.entity.QuestionVote;
import com.seb40pre023.domain.questionvote.entity.QuestionVoteCalculator;
import com.seb40pre023.global.common.dto.MultiResponseDto;
import com.seb40pre023.global.security.argumentresolver.LoginAccountId;
import com.seb40pre023.global.security.auth.Principal;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    /*
    * 게시물을 생성하는 메서드
    * parameter : 1. 로그인한 계정의 고유 Id
    *             2. @Requestbody - QuestionPostDto
    * return : QuestionResDto (Question 응답 형식)
    * */
    @PostMapping("/questions/ask")
    public ResponseEntity postQuestion(@LoginAccountId Long memberId,
                                       @RequestBody QuestionDto.Post questionPostDto) {

        Question request = mapper.questionPostDtoToQuestion(questionPostDto);
        Question question = questionService.createQuestion(memberId, request);

        return new ResponseEntity<>(mapper.questionToQuestionRes(question), HttpStatus.CREATED);
    }

    /*
    * 게시물을 수정하는 메서드
    * parameter : 1. URI 를 통해 "게시물 Id"
    *             2. @RequestBody - QuestionPatchDto (수정하고자 하는 요청받은 내용)
    * return : QuestionResDto (수정된 게시물 내용을 update)
    * */
    @PatchMapping("/questions/{questionId}/edit")
    public ResponseEntity patchQuestion(@PathVariable Long questionId,
                                        @RequestBody QuestionDto.Patch questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);

        Question question = mapper.questionPatchDtoToQuestion(questionPatchDto);
        Question response = questionService.updateQuestion(question);

        return new ResponseEntity(mapper.questionToQuestionRes(response), HttpStatus.OK);
    }

    /*
    * 질문 리스트를 조회하는 메서드
    * parameter : @Param - page, size (페이지네이션 적용)
    * return : List<QuestionResDto>, Page<Question> (정렬된 Question 을 반환)
    */
    @GetMapping("/questions")
    public ResponseEntity getQuestions(@RequestParam(required = false, defaultValue = "1") int page,
                                       @RequestParam(required = false, defaultValue = "15") int size,
                                       @RequestParam(required = false, defaultValue = "questionId") String tab) {

        Page<Question> pageQuestions = questionService.getQuestions(page - 1, size, tab);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionsResList(questions), pageQuestions), HttpStatus.OK);
    }

    @GetMapping("/questions/{questionId}")
    public ResponseEntity getQuestion(@PathVariable Long questionId) {

        Question question = questionService.getQuestion(questionId);

        return new ResponseEntity<>(mapper.questionToQuestionRes(question), HttpStatus.OK);
    }

    @DeleteMapping("/questions/{questionId}")
    public String deleteQuestion(@LoginAccountId Long memberId,
            @PathVariable Long questionId) {

        questionService.deleteQuestion(memberId, questionId);

        return "delete question";
    }

    @PostMapping("/questions/vote/{questionId}")
    public int postVote(@RequestParam int voteType,
                        @PathVariable Long questionId,
                        @LoginAccountId Long memberId) {

        int voteScore = questionService.voteEvent(voteType, questionId, memberId);

        return voteScore;
    }

    @GetMapping("/questions/search")
    public ResponseEntity searchQuestions(@RequestParam(required = false, defaultValue = "1") int page,
                                          @RequestParam(required = false, defaultValue = "15") int size,
                                          @RequestParam(required = false, defaultValue = "questionId") String tab,
                                          @RequestParam String q) {

        Page<Question> pageQuestions = questionService.searchQuestions(page - 1, size, tab, q);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionsResList(questions), pageQuestions), HttpStatus.OK);
    }
}