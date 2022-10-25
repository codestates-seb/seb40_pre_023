package com.seb40pre023.domain.answer.controller;

import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.member.entity.Member;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/answers")
public class AnswerController {
    @PostMapping
    public ResponseEntity postAnswer(@RequestParam("content") String content) {

        Map<String, String> answer = new HashMap<>();
        answer.put("content", content);

        return new ResponseEntity<>(answer, HttpStatus.CREATED);
    }

    @PatchMapping("/{answer-id}/edit")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") long answerId,
                                      @RequestParam("content") String content) {
        Map<String, String> answer = new HashMap<>();
        answer.put("content", content);

        return new ResponseEntity<>(answer, HttpStatus.OK);
    }

    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer(@PathVariable("answer-id") long answerId) {
        Answer answer = new Answer();
        answer.setAnswerId(answerId);
        answer.setContent("hello seb40 pre-project");
        answer.setCreatedAt(LocalDateTime.now());

        return new ResponseEntity<>(answer, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getAnswers() {
        Answer answer = new Answer();
        answer.setAnswerId(1L);
        answer.setContent("hello seb40 pre-project");
        answer.setCreatedAt(LocalDateTime.now());

        Answer answer2 = new Answer();
        answer2.setAnswerId(2L);
        answer2.setContent("2nd Answer");
        answer2.setCreatedAt(LocalDateTime.now());

        List<Answer> response = List.of(answer, answer2);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") long answerId) {
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
