package com.seb40pre023.global.security.auth;

import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberDetailsService implements UserDetailsService {
    private final MemberRepository memberRepository;



    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        //UserDetailsService method override
        //email로 repository에서 회원 찾고 꺼내서 return 해줌
        Optional<Member> member = memberRepository.findByEmail(email);
        return new PrincipalDetails(member.get());
//        return memberRepository.findOneWithAuthoritiesByEmail(email)
//                .map(member -> createMember(email, member))
//                .orElseThrow(() -> new UsernameNotFoundException(email + "Not found in DB"));
    }

//    private org.springframework.security.core.userdetails.User createMember(String email, Member member) {
//        if (!member.isActivated()) {
//            throw new RuntimeException(email + " -> 활성화되어 있지 않습니다.");
//        }
//
////        List<GrantedAuthority> grantedAuthorities = member.getAuthorities().stream()
////                .map(authority -> new SimpleGrantedAuthority(authority.getAuthorityName()))
////                .collect(Collectors.toList());
//
//        return new org.springframework.security.core.userdetails.User(member.getEmail(), member.getPassword(), Collection<GrantedAuthority> granted);
//    }
}
