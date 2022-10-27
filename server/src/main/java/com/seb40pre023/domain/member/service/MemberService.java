package com.seb40pre023.domain.member.service;

import com.seb40pre023.domain.member.dto.MemberDto;
import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.global.error.exception.BusinessLogicException;
import com.seb40pre023.global.error.exception.ExceptionCode;
import com.seb40pre023.domain.member.mapper.MemberMapper;
import com.seb40pre023.domain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final MemberMapper mapper;


    //가입한 회원 save 해줌
    public Member createMember(Member member) {
        verifyExistsEmail(member.getEmail());
        Member savedMember = memberRepository.save(member);

        return savedMember;
    }

    public void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

    public Member login(MemberDto.Login loginDto) {
        Member member = mapper.memberLoginToMember(loginDto);
        Member findMember = findVerifiedMemberByEmail(member.getEmail());
        if (!member.getPassword().equals(findMember.getPassword())) {
            throw new BusinessLogicException(ExceptionCode.INVALID_PASSWORD);
        }
        return findMember;
    }

    @Transactional
    public Member findVerifiedMemberByEmail(String email) {
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        return optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    //회원 정보 수정하면 update해서 save 해줌
    @Transactional
    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getNickname())
                .ifPresent(nickname -> findMember.setNickname(nickname));
        Optional.ofNullable(member.getImg())
                .ifPresent(img -> findMember.setImg(img));
        Optional.ofNullable(member.getAbout())
                .ifPresent(about -> findMember.setAbout(about));
        Optional.ofNullable(member.getRoles())
                .ifPresent(roles -> findMember.setRoles(roles));

        return memberRepository.save(findMember);
    }

    public Member findMember(long memberId) {
        return findVerifiedMember(memberId);
    }

    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);

        Member findMember = optionalMember.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

//        if (findMember.getRoles() == Member.Roles.MEMBER_NOT_EXISTS) {
//            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
//        }

        return findMember;
    }

    //멤버 탈퇴
    public void deleteMember(long memberId) {
        Member findMember = findVerifiedMember(memberId);

        memberRepository.delete(findMember);
    }

}
