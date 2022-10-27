package com.seb40pre023.domain.question.controller;

import com.seb40pre023.domain.answer.entity.Answer;
import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.question.dto.ResQuestion;
import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.domain.tag.entity.Tag;
import com.seb40pre023.global.common.dto.MultiResponseDto;
import com.seb40pre023.global.common.dto.PageInfo;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class QuestionController {

    @PostMapping("/questions/ask")
    public ResponseEntity postQuestion() {

        Member member = new Member(1L, "hgd@gmail.com", "홍길동", "저는 홍길동입니다.", "사진");
        Question question = new Question(1L, member, "Test", "테스트입니다.", "unanswered",
                List.of(new Answer(1L, "답변1"), new Answer(2L, "답변2")),
                List.of(new Tag(1L, "java"), new Tag(2L, "javascript")));

        return new ResponseEntity<>(question, HttpStatus.CREATED);
    }

    @PatchMapping("/questions/{questionId}/edit")
    public ResponseEntity patchQuestion(@PathVariable Long questionId) {

        Member member = new Member(1L, "hgd@gmail.com", "홍길동", "저는 홍길동입니다.", "사진");
        ResQuestion question = new ResQuestion(questionId, member, "Test" , "글입니다.", "unanswered",
                List.of(new Tag(1L, "java"), new Tag(2L, "javascript")));

        return new ResponseEntity(question, HttpStatus.OK);
    }

    @GetMapping("/questions")
    public ResponseEntity getQuestions(@RequestParam int page,
                                       @RequestParam int size) {

        List<ResQuestion> questionList = new ArrayList<>();
        for (int i = 1; i < 10; i++) {
            Long questionId = Long.valueOf(i);
            Member member = new Member(Long.valueOf(i), "hgd"+i+"@gmail.com", "홍길동"+i, "저는 홍길동"+i+"입니다.", "사진");
            ResQuestion question = new ResQuestion(questionId, member, "Test" + i, i + "번째 글입니다.", "unanswered",
                     List.of(new Tag(1L, "java"), new Tag(2L, "javascript")));

            questionList.add(question);
        }
        PageInfo pageInfo = new PageInfo(page, size, 10, 10/size);


        return new ResponseEntity<>(new MultiResponseDto<>(questionList, pageInfo), HttpStatus.OK);
    }

    @GetMapping("/questions/{questionId}")
    public ResponseEntity getQuestion(@PathVariable Long questionId) {

        Member member = new Member(1L, "hgd@gmail.com", "홍길동", "저는 홍길동입니다.", "사진");
        Question question = new Question(questionId, member, "Test", "테스트입니다.", "unanswered",
                List.of(new Answer(), new Answer()), List.of(new Tag(1L, "java"), new Tag(2L, "javascript")));

        return new ResponseEntity<>(question, HttpStatus.OK);
    }

    @DeleteMapping("/questions/{questionId}")
    public String deleteQuestion(@PathVariable Long questionId) {

        return "delete question";
    }

}
