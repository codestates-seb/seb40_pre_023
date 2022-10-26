package com.seb40pre023.domain.answer.controller;

import com.seb40pre023.domain.answer.dto.AnswerPatchDto;
import com.seb40pre023.domain.answer.dto.AnswerPostDto;
import com.seb40pre023.domain.answer.dto.AnswerResponseDto;
import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.answer.mapper.AnswerMapper;
import com.seb40pre023.domain.answer.service.AnswerService;
import com.seb40pre023.domain.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/answers")
@RequiredArgsConstructor
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    @PostMapping
    public ResponseEntity postAnswer(@RequestBody AnswerPostDto answerPostDto) {

        Answer response = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));
        return new ResponseEntity(mapper.answerToAnswerResponseDto(response), HttpStatus.CREATED);

//        Answer answer = new Answer();
//        answer.setContent(answerPostDto.getContent());
//        Answer response = answerService.createAnswer(answer);
//        return new ResponseEntity<>(response, HttpStatus.CREATED);

//        Map<String, String> answer = new HashMap<>();
//        answer.put("content", content);
//        return new ResponseEntity<>(answer, HttpStatus.CREATED);
    }

    @PatchMapping("/{answer-id}/edit")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") long answerId,
                                      @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswerId(answerId);
        Answer response = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));
        return new ResponseEntity(mapper.answerToAnswerResponseDto(response), HttpStatus.OK);

//        answerPatchDto.setAnswerId(answerId);
//        Answer answer = new Answer();
//        answer.setAnswerId(answerPatchDto.getAnswerId());
//        answer.setContent(answerPatchDto.getContent());
//        Answer response = answerService.updateAnswer(answer);
//        return new ResponseEntity<>(response, HttpStatus.OK);

//        Map<String, String> answer = new HashMap<>();
//        answer.put("content", content);
//        return new ResponseEntity<>(answer, HttpStatus.OK);
    }

    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer(@PathVariable("answer-id") long answerId) {
        Answer response = answerService.findAnswer(answerId);

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.OK);
//        Answer answer = new Answer();
//        answer.setAnswerId(answerId);
//        answer.setContent("hello seb40 pre-project");
//        return new ResponseEntity<>(answer, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getAnswers() {
        List<Answer> answers = answerService.findAnswers();
        List<AnswerResponseDto> response =
                answers.stream()
                        .map(answer -> mapper.answerToAnswerResponseDto(answer))
                        .collect(Collectors.toList());
        return new ResponseEntity<>(response, HttpStatus.OK);
//        Answer answer = new Answer();
//        answer.setAnswerId(1L);
//        answer.setContent("hello seb40 pre-project");
//
//        Answer answer2 = new Answer();
//        answer2.setAnswerId(2L);
//        answer2.setContent("2nd Answer");
//        List<Answer> response = List.of(answer, answer2);
//        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") long answerId) {
        answerService.deleteAnswer(answerId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
