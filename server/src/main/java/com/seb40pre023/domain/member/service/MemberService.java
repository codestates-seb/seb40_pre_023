package com.seb40pre023.domain.member.service;

import com.seb40pre023.domain.member.dto.MemberDto;
import com.seb40pre023.domain.member.dto.MemberPostDto;
import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.global.error.exception.BusinessLogicException;
import com.seb40pre023.global.error.exception.ExceptionCode;
import com.seb40pre023.domain.member.mapper.MemberMapper;
import com.seb40pre023.domain.member.repository.MemberRepository;
import com.seb40pre023.global.security.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
<<<<<<< HEAD
import org.springframework.security.core.context.SecurityContextHolder;
=======
>>>>>>> 6d830ed243240ca3442f99fdfd1fb9227d0636dc
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final MemberMapper mapper;

    private final PasswordEncoder passwordEncoder;
    //DBMemberService는 내부에서 데이터를 데이터베이스에 저장하고, 패스워드를 암호화 해야 하므로 DI

    //가입한 회원 save 해줌
    public Member createMember(Member member) {
        verifyExistsEmail(member.getEmail());
        String encryptedPassword = passwordEncoder.encode(member.getPassword()); //패스워드 암호화
        member.setPassword(encryptedPassword); //암호화된 패스워드 password 필드에 다시 할당

        Member savedMember = memberRepository.save(member);

        return savedMember;
    }

    public void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent()) //이미 등록된 회원입니다.
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

<<<<<<< HEAD
//    public Member login(MemberDto.Login loginDto) {
//        Member member = mapper.memberLoginToMember(loginDto);
//        Member findMember = findVerifiedMemberByEmail(member.getEmail());
////        if (!member.getPassword().equals(findMember.getPassword())) {
////            throw new BusinessLogicException(ExceptionCode.INVALID_PASSWORD);
////        } -> password 암호화후 nullpointexception 터져서 주석처리
//        return findMember;
//    }

=======
    public Member login(MemberDto.Login loginDto) {
        Member member = mapper.memberLoginToMember(loginDto);
        Member findMember = findVerifiedMemberByEmail(member.getEmail());
//        if (!member.getPassword().equals(findMember.getPassword())) {
//            throw new BusinessLogicException(ExceptionCode.INVALID_PASSWORD);
//        } -> password 암호화후 nullpointexception 터져서 주석처리
        return findMember;
    }
>>>>>>> 6d830ed243240ca3442f99fdfd1fb9227d0636dc

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

    public Member findMember(Long memberId) {
        return findVerifiedMember(memberId);
    }

    public Member findVerifiedMember(Long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);

        Member findMember = optionalMember.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findMember;
    }

    //멤버 탈퇴
    public void deleteMember(Long memberId) {
        Member findMember = findVerifiedMember(memberId);

        memberRepository.delete(findMember);
    }

}
