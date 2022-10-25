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
        Member member = new Member("kkkk@gmail.com", "123", "kkkk");

        return new ResponseEntity<>(member, HttpStatus.CREATED);
    }

    @PatchMapping("/members/edit/{memberId}")
    public ResponseEntity patchMember(@PathVariable Long memberId) {
        Member member = new Member("kkkk1@gmail.com", "1234", "kkkk1");

        return new ResponseEntity<>(member, HttpStatus.OK);
    }

    @GetMapping("/members/login")
    public ResponseEntity loginMember() {
        Member member = new Member("kkkk2@gmail.com", "12345", "kkkk2");

        member.setRoles(MEMBER_ADMIN);

        return new ResponseEntity<>("success login", HttpStatus.OK);

    }

    @GetMapping("/members/logout")
    public ResponseEntity logoutMember() {
        Member member = new Member("kkkk2@gmail.com", "12345", "kkkk2");

        member.setRoles(MEMBER_NOT_FOUND);

        return new ResponseEntity<>("success logout", HttpStatus.NO_CONTENT);
    }

}