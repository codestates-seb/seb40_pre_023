package com.seb40pre023.domain.answer.controller;

import com.seb40pre023.domain.answer.dto.AnswerPatchDto;
import com.seb40pre023.domain.answer.dto.AnswerPostDto;
import com.seb40pre023.domain.answer.dto.AnswerResponseDto;
import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.answer.mapper.AnswerMapper;
import com.seb40pre023.domain.answer.service.AnswerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/answers")
@RequiredArgsConstructor
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    //질문글에 답변을 쓸 때 답변 생성
    @PostMapping
    public ResponseEntity postAnswer(@RequestBody AnswerPostDto answerPostDto) {
        Answer response = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));

        return new ResponseEntity(mapper.answerToAnswerResponseDto(response), HttpStatus.CREATED);
    }

    // 질문글에 작성한 답변 내용 수정하기
    @PatchMapping("/{answer-id}/edit")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") Long answerId,
                                      @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswerId(answerId);
        Answer response = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));

        return new ResponseEntity(mapper.answerToAnswerResponseDto(response), HttpStatus.OK);
    }

    // 답변 하나 조회
    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer(@PathVariable("answer-id") Long answerId) {
        Answer response = answerService.findAnswer(answerId);

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.OK);
    }

    // 여러 답변 조회
    @GetMapping
    public ResponseEntity getAnswers() {
        List<Answer> answers = answerService.findAnswers();
        List<AnswerResponseDto> response =
                answers.stream()
                        .map(answer -> mapper.answerToAnswerResponseDto(answer))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 답변 삭제
    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") Long answerId) {
        answerService.deleteAnswer(answerId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
