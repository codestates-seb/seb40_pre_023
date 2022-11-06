package com.seb40pre023.test;

import com.seb40pre023.domain.member.dto.MemberPostDto;
import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.member.repository.MemberRepository;
import com.seb40pre023.domain.member.service.MemberService;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@Transactional
@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class MemberTest {

    @Autowired
    MemberService memberService;
    @Autowired
    MemberRepository memberRepository;

    @Test
    @Order(1)
    void signup() {
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

    @Test
    @Order(2)
    void findByEmailTest() {
        //given
        Member member = Member.builder()
                .email("g2@gmail.com")
                .nickname("name")
                .password("pwd")
                .build();
        Member savedMember = memberRepository.save(member);

        //when
        Optional<Member> memberFound = memberRepository.findByEmail(member.getEmail());

        //then
        Assertions.assertEquals("g2@gmail.com", savedMember.getEmail());
        Assertions.assertEquals("g2@gmail.com", memberFound.get().getEmail());
    }
}
