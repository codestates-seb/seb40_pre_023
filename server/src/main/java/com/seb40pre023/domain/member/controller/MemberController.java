package com.seb40pre023.domain.member.controller;


import com.seb40pre023.domain.member.entity.Member;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import static com.seb40pre023.domain.member.entity.Member.Roles.MEMBER_ADMIN;
import static com.seb40pre023.domain.member.entity.Member.Roles.MEMBER_NOT_FOUND;


@RestController
@Validated
@Slf4j
public class MemberController {
    @PostMapping("/members/signup")
    public ResponseEntity postMember() {
        Member member = new Member("kkkk@gmail.com", "kkkk");

        return new ResponseEntity<>(member, HttpStatus.CREATED);
    }

    // 메서드 역할
    @PatchMapping("/members/edit/{memberId}")
    public ResponseEntity patchMember(@PathVariable Long memberId) {

        Member member = new Member(memberId, "kk@gmail.com", "kk", "hello, my name is kk", "img");

        return new ResponseEntity<>(member, HttpStatus.OK);
    }

    @GetMapping("/members/{memberId}")
    public ResponseEntity getMember(@PathVariable Long memberId) {
        Member member = new Member(memberId, "kk@gmail.com", "kk", "hello, my name is kk", "img");

        return new ResponseEntity(member, HttpStatus.OK);
    }

    @GetMapping("/members/login")
    public ResponseEntity loginMember() {
        Member member = new Member("kkkk2@gmail.com", "kkkk2");

        return new ResponseEntity<>("success login", HttpStatus.OK);

    }

    @GetMapping("/members/logout")
    public ResponseEntity logoutMember() {
        Member member = new Member("kkkk2@gmail.com","kkkk2");


        return new ResponseEntity<>("success logout", HttpStatus.NO_CONTENT);
    }

}