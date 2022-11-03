package com.seb40pre023.domain.answervote.controller;

import com.seb40pre023.domain.answervote.dto.AnswerVoteDto;
import com.seb40pre023.domain.answervote.entity.AnswerVote;
import com.seb40pre023.domain.answervote.mapper.AnswerVoteMapper;
import com.seb40pre023.domain.answervote.service.AnswerVoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/vote")
@RequiredArgsConstructor
@CrossOrigin
public class AnswerVoteController {
    private final AnswerVoteService answerVoteService;
    private final AnswerVoteMapper mapper;

    @PostMapping("/2")
    public ResponseEntity postUpVote(@RequestBody AnswerVoteDto.Post requestBody) {

        // AnswerVote 테이블에 값이 있는지 없는지 찾는 기능
        int voteState = answerVoteService.findAnswerVote(requestBody.getMemberId(), requestBody.getAnswerId());
        requestBody.setVoteState(1);
        AnswerVote answerVote = mapper.answerVotePostToAnswerVote(requestBody);
        AnswerVote response;

        // voteState = 0인 경우 새로 생성
        if (voteState == 0) {
            response = answerVoteService.createAnswerVote(answerVote);
            return new ResponseEntity(mapper.answerVoteToAnswerVoteResponse(response), HttpStatus.CREATED);
        }
        else if (voteState == 1) { // 이미 UP 투표에서 UP을 눌러서 취소하는 경우
            response = answerVoteService.cancelAnswerVote(answerVote);
            return new ResponseEntity(mapper.answerVoteToAnswerVoteResponse(response), HttpStatus.OK);
        }
        else { // DOWN에서 UP으로 바꾸거나, 투표 취소했다가 UP 하는 경우
            response = answerVoteService.updateAnswerVote(answerVote);
            return new ResponseEntity(mapper.answerVoteToAnswerVoteResponse(response), HttpStatus.OK);
        }
    }

    @PostMapping("/3")
    public ResponseEntity postDownVote(@RequestBody AnswerVoteDto.Post requestBody) {

        int voteState = answerVoteService.findAnswerVote(requestBody.getMemberId(), requestBody.getAnswerId());
        requestBody.setVoteState(-1);
        AnswerVote answerVote = mapper.answerVotePostToAnswerVote(requestBody);
        AnswerVote response;

        // voteState = 0인 경우 새로 생성
        if (voteState == 0) {
            response = answerVoteService.createAnswerVote(answerVote);
            return new ResponseEntity(mapper.answerVoteToAnswerVoteResponse(response), HttpStatus.CREATED);
        }
        else if (voteState == -1) { // 이미 DOWN 투표에서 DOWN을 눌러서 취소하는 경우
            response = answerVoteService.cancelAnswerVote(answerVote);
            return new ResponseEntity(mapper.answerVoteToAnswerVoteResponse(response), HttpStatus.OK);
        }
        else { // UP에서 DOWN으로 바꾸거나, 투표 취소했다가 DOWN 하는 경우
            response = answerVoteService.updateAnswerVote(answerVote);
            return new ResponseEntity(mapper.answerVoteToAnswerVoteResponse(response), HttpStatus.OK);
        }
    }
}