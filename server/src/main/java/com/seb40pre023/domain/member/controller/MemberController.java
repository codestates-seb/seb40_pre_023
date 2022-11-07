package com.seb40pre023.domain.member.controller;


import com.seb40pre023.domain.member.dto.MemberDto;
import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.member.mapper.MemberMapper;
import com.seb40pre023.domain.member.service.MemberService;
import com.seb40pre023.domain.question.dto.QuestionDto;
import com.seb40pre023.domain.question.mapper.QuestionMapper;
import com.seb40pre023.global.common.dto.SingleResponseDto;
import org.springframework.beans.factory.annotation.Autowired;
import com.seb40pre023.global.security.argumentresolver.LoginAccountId;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@Validated
@CrossOrigin
public class MemberController {

    private MemberService memberService;
    private MemberMapper mapper;
    private QuestionMapper questionMapper;

    @Autowired
    public MemberController(MemberService memberService, MemberMapper mapper, QuestionMapper questionMapper) {
        this.memberService = memberService;
        this.mapper = mapper;
        this.questionMapper = questionMapper;
    }

    //회원가입
    @PostMapping("/members/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody) {
        Member member = mapper.memberPostToMember(requestBody);
        Member createdMember = memberService.createMember(member);
        MemberDto.Response response = mapper.memberToMemberResponse(createdMember);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }


    //회원 정보 수정
    @PatchMapping("/members/edit")
    public ResponseEntity patchMember(@Valid @RequestBody MemberDto.Patch requestBody,
                                      @LoginAccountId Long memberId) {

        requestBody.setMemberId(memberId);

        Member member =
                memberService.updateMember(mapper.memberPatchToMember(requestBody));

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.memberToMemberResponse(member)), HttpStatus.OK);
    }

    //특정 회원 정보 조회
    @GetMapping("/members/{memberId}")
    public ResponseEntity getMember(@PathVariable Long memberId) {
        Member member = memberService.findMember(memberId);

        return new ResponseEntity(new SingleResponseDto<>(mapper.memberToMemberResponse(member)), HttpStatus.OK);
    }

    @GetMapping("/members/user/{memberId}")
    public ResponseEntity getMyInfo(@PathVariable Long memberId) {

        Member member = memberService.findMember(memberId);
        List<QuestionDto.SimpleResponse> questions = memberService.findQuestions(memberId)
                .stream().map(question -> questionMapper.questionToQuestionSimpleRes(question)).collect(Collectors.toList());

        int answerCount = memberService.findAnswers(memberId);

        MemberDto.MyPageResponse response = mapper.memberToMemberInfoResponse(member);

        response.setQuestionList(questions);
        response.setAnswerCount(answerCount);
        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    //로그아웃
    @GetMapping("/members/logout")
    public ResponseEntity logout(HttpServletRequest request) {
        HttpSession session = request.getSession();

        session.invalidate();

        return new ResponseEntity<>(HttpStatus.OK);
    }

    //회원 탈퇴
    @DeleteMapping("/members")
    public ResponseEntity deleteMember(@LoginAccountId Long memberId) {
        memberService.deleteMember(memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}