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
public class AnswerVoteController {
    private final AnswerVoteService answerVoteService;
    private final AnswerVoteMapper mapper;

    @PostMapping("/2")
    public ResponseEntity postUpVote(@RequestBody AnswerVoteDto.Post requestBody) {
        /*
        voteState는 기존 투표 했는지를 확인해서 -1, 1, 2, 3의 값을 리턴함
        -1 : 투표를 한 적이 없는 상태로 투표 생성
        1 : 투표를 했다가 취소한 경우
        2 : UP 투표를 한 상태
        3 : DOWN 투표를 한 상태
         */
        // AnswerVote 테이블에 값이 있는지 없는지 찾는 기능
        int voteState = answerVoteService.findAnswerVote(requestBody.getMemberId(), requestBody.getAnswerId());
        requestBody.setVoteState(2);
        AnswerVote answerVote = mapper.answerVotePostToAnswerVote(requestBody);
        AnswerVote response;

        // voteState = -1인 경우 새로 생성
        if (voteState == -1) {
            response = answerVoteService.createAnswerVote(requestBody.getMemberId(), requestBody.getAnswerId(), answerVote);
            return new ResponseEntity(mapper.answerVoteToAnswerVoteResponse(response), HttpStatus.CREATED);
        }
        else if (voteState == 2) { // 이미 UP 투표에서 UP을 눌러서 취소하는 경우
            response = answerVoteService.cancelAnswerVote(requestBody.getMemberId(), requestBody.getAnswerId(), answerVote);
            return new ResponseEntity(mapper.answerVoteToAnswerVoteResponse(response), HttpStatus.OK);
        }
        // voteState == 1인경우 투표를 취소했다 다시 하는경우 update 하기 위해
        else { // voteState == 3인 경우 이미 DOWN 투표에서 UP으로 바꾸는 경우
            response = answerVoteService.updateAnswerVote(requestBody.getMemberId(), requestBody.getAnswerId(), answerVote);
            return new ResponseEntity(mapper.answerVoteToAnswerVoteResponse(response), HttpStatus.OK);
        }
    }

    @PostMapping("/3")
    public ResponseEntity postDownVote(@RequestBody AnswerVoteDto.Post requestBody) {
        /*
        voteState는 기존 투표 했는지를 확인해서 -1, 1, 2, 3의 값을 리턴함
        -1 : 투표를 한 적이 없는 상태로 투표 생성
        1 : 투표를 했다가 취소한 경우
        2 : UP 투표를 한 상태
        3 : DOWN 투표를 한 상태
         */
        int voteState = answerVoteService.findAnswerVote(requestBody.getMemberId(), requestBody.getAnswerId());
        requestBody.setVoteState(3);
        AnswerVote answerVote = mapper.answerVotePostToAnswerVote(requestBody);
        AnswerVote response;

        // voteState = -1인 경우 새로 생성
        if (voteState == -1) {
            response = answerVoteService.createAnswerVote(requestBody.getMemberId(), requestBody.getAnswerId(), answerVote);
            return new ResponseEntity(mapper.answerVoteToAnswerVoteResponse(response), HttpStatus.CREATED);
        }
        else if (voteState == 3) { // 이미 DOWN 투표에서 DOWN을 눌러서 취소하는 경우
            response = answerVoteService.cancelAnswerVote(requestBody.getMemberId(), requestBody.getAnswerId(), answerVote);
            return new ResponseEntity(mapper.answerVoteToAnswerVoteResponse(response), HttpStatus.OK);
        }
        // voteState == 1인경우 투표를 취소했다 다시 하는경우 update 하기 위해
        else { // voteState == 2인 경우 이미 UP 투표에서 DOWN으로 바꾸는 경우
            response = answerVoteService.updateAnswerVote(requestBody.getMemberId(), requestBody.getAnswerId(), answerVote);
            return new ResponseEntity(mapper.answerVoteToAnswerVoteResponse(response), HttpStatus.OK);
        }
    }
}
