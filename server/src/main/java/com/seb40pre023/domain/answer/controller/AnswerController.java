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
@CrossOrigin
@RequestMapping("/answers")
public class AnswerController {
    @PostMapping
    public ResponseEntity postAnswer(@RequestBody Answer answer) {

        Answer answer1 = new Answer(1L, answer.getContent());

        return new ResponseEntity<>(answer1, HttpStatus.CREATED);
    }

    @PatchMapping("/{answerId}/edit")
    public ResponseEntity patchAnswer(@PathVariable Long answerId,
                                      @RequestBody Answer answer) {

        Answer ans = new Answer(answerId, answer.getContent());

        return new ResponseEntity<>(ans, HttpStatus.OK);
    }

    @GetMapping("/{answerId}")
    public ResponseEntity getAnswer(@PathVariable Long answerId) {

        Answer answer = new Answer(answerId, "hello seb40 pre-project");

        return new ResponseEntity<>(answer, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getAnswers() {

        Answer answer = new Answer(1L, "hello seb40 pre-project");
        Answer answer2 = new Answer(2L, "welcome to hell");

        List<Answer> response = List.of(answer, answer2);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{answerId}")
    public ResponseEntity deleteAnswer(@PathVariable Long answerId) {

        return new ResponseEntity("delete answer", HttpStatus.NO_CONTENT);
    }

}
