package com.seb40pre023.test;

import com.seb40pre023.domain.member.dto.MemberDto;
import com.seb40pre023.domain.member.dto.MemberPostDto;
import com.seb40pre023.domain.member.dto.MemberResponseDto;
import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.member.repository.MemberRepository;
import com.seb40pre023.domain.member.service.MemberService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@Transactional
@SpringBootTest
public class MemberServiceTest {

    @Autowired
    MemberService memberService;
    @Autowired
    MemberRepository memberRepository;

    @Test
    void 회원가입() {
        //given
        MemberPostDto memberPostDto = new MemberPostDto(
                "g@gmail.com", "pwd", "g");

        Member member = Member.builder()
                .email(memberPostDto.getEmail())
                .password(memberPostDto.getPassword())
                .nickname(memberPostDto.getNickname())
                .build();
        memberService.createMember(member);

        //when
        Long memberId = memberRepository.findByEmail("g@gmail.com").get().getMemberId();

        //then
        assertThat(memberId).isEqualTo(1);
    }

//    @Test
//    void 중복회원() {
//        //given
//        MemberDto.Response memberResponseDto = new MemberDto.Response(1L, "a@gmail.com", "d", "dd");
//        //when
//        //then
//    }
}
