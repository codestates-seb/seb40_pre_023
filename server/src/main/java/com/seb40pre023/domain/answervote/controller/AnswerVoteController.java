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

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/votes")
@RequiredArgsConstructor
public class AnswerVoteController {
    private final AnswerVoteService answerVoteService;
    private final AnswerVoteMapper mapper;

    @PostMapping
    public ResponseEntity postVote(@RequestBody AnswerVoteDto.Post requestBody) {
        Long memberId = requestBody.getMemberId();
        Long answerId = requestBody.getAnswerId();
        boolean findAnswerVote = answerVoteService.findAnswerVote(memberId, answerId);
        AnswerVote response;
        int changeValue = requestBody.getVoteValue();
        if (findAnswerVote) {
            response = answerVoteService.updateAnswerVote(memberId, answerId, changeValue);
            return new ResponseEntity(mapper.answerVoteToAnswerVoteResponse(response), HttpStatus.OK);
        }
        else {
            response = answerVoteService.createAnswerVote(mapper.answerVotePostToAnswerVote(requestBody));
            return new ResponseEntity(mapper.answerVoteToAnswerVoteResponse(response), HttpStatus.CREATED);
        }
    }
}
