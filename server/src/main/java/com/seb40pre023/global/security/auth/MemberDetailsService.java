package com.seb40pre023.global.security.auth;

import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberDetailsService implements UserDetailsService {
    private final MemberRepository memberRepository;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        //UserDetailsService method override
        //email로 repository에서 회원 찾고 꺼내서 return 해줌

        Optional<Member> member = memberRepository.findByEmail(email);
        return new PrincipalDetails(member.get());
    }
}
