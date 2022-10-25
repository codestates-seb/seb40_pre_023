package com.seb40pre023.domain.question.controller;

import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.domain.tag.entity.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.util.ArrayList;
import java.util.List;

@RestController
public class QuestionController {

    @PostMapping("/questions/ask")
    public ResponseEntity postQuestion() {

        Question question = new Question(1L, "Test", "테스트입니다.", "unanswered",
                List.of(new Answer(), new Answer()), List.of(new Tag(1L, "java"), new Tag(2L, "javascript")));

        return new ResponseEntity<>(question, HttpStatus.CREATED);
    }

    @PatchMapping("")

    @GetMapping("/questions")
    public ResponseEntity getQuestions(@RequestParam Pageable pageable) {

        List<Question> questionList = new ArrayList<>();
        for (int i = 1; i < 10; i++) {
            Long questionId = Long.valueOf(i);
            Question question = new Question(questionId, "Test"+i, i+"번째 글입니다.", "unanswered",
                    List.of(new Answer(), new Answer()), List.of(new Tag(1L, "java"), new Tag(2L, "javascript")));
        }

        return new ResponseEntity<>(questionList, HttpStatus.OK);
    }

    @GetMapping("/questions/{questionId}")
    public ResponseEntity getQuestion(@PathVariable Long questionId) {

        Question question = new Question(questionId, "Test", "테스트입니다.", "unanswered",
                List.of(new Answer(), new Answer()), List.of(new Tag(1L, "java"), new Tag(2L, "javascript")));

        return new ResponseEntity<>(question, HttpStatus.OK);
    }

    @DeleteMapping("/question/{questionId}")
    public String deleteQuestion(@PathVariable Long questionId) {

        return "delete question";
    }

}
