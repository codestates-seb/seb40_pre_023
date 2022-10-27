package com.seb40pre023.domain.answervote.controller;

import com.seb40pre023.domain.answervote.dto.AnswerVoteDto;
import com.seb40pre023.domain.answervote.dto.AnswerVotePostDto;
import com.seb40pre023.domain.answervote.dto.AnswerVoteResponseDto;
import com.seb40pre023.domain.answervote.entity.AnswerVote;
import com.seb40pre023.domain.answervote.mapper.AnswerVoteMapper;
import com.seb40pre023.domain.answervote.service.AnswerVoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/votes")
@RequiredArgsConstructor
public class AnswerVoteController {
    private final AnswerVoteService answerVoteService;
    private final AnswerVoteMapper mapper;

    @PostMapping
    public ResponseEntity postVote(@RequestBody AnswerVoteDto.Post requestBody) {
        AnswerVote response = answerVoteService.createAnswerVote(mapper.answerVotePostToAnswerVote(requestBody));

        return new ResponseEntity(mapper.answerVoteToAnswerVoteResponse(response), HttpStatus.CREATED);
    }

//    @PatchMapping("/{answer-id}")
//    public ResponseEntity patchVote(@PathVariable("answer-id") long answerId,
//                                    @RequestBody AnswerVoteDto.Patch requestBody) {
//        requestBody.setAnswerId(answerId);
//        AnswerVote response = answerVoteService.updateAnswerVote(mapper.answerVotePatchToAnswerVote(requestBody));
//
//        return new ResponseEntity(mapper.answerVoteToAnswerVoteResponse(response), HttpStatus.OK);
//    }

}
