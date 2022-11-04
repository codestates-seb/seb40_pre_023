package com.seb40pre023.domain.member.mapper;

import com.seb40pre023.domain.member.dto.MemberDto.Login;
import com.seb40pre023.domain.member.dto.MemberDto.Patch;
import com.seb40pre023.domain.member.dto.MemberDto.Post;
import com.seb40pre023.domain.member.dto.MemberDto.Response;
import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.member.entity.Member.MemberBuilder;
import com.seb40pre023.domain.member.entity.Member.Roles;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-04T10:57:48+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostToMember(Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        MemberBuilder member = Member.builder();

        member.email( requestBody.getEmail() );
        member.nickname( requestBody.getNickname() );
        member.password( requestBody.getPassword() );

        return member.build();
    }

    @Override
    public Member memberPatchToMember(Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        MemberBuilder member = Member.builder();

        member.memberId( requestBody.getMemberId() );
        member.nickname( requestBody.getNickname() );
        member.about( requestBody.getAbout() );
        member.img( requestBody.getImg() );
        member.roles( requestBody.getRoles() );

        return member.build();
    }

    @Override
    public Member memberLoginToMember(Login loginDto) {
        if ( loginDto == null ) {
            return null;
        }

        MemberBuilder member = Member.builder();

        member.email( loginDto.getEmail() );
        member.password( loginDto.getPassword() );
        member.roles( loginDto.getRoles() );

        return member.build();
    }

    @Override
    public Response memberToMemberResponse(Member member) {
        if ( member == null ) {
            return null;
        }

        Long memberId = null;
        String email = null;
        String nickname = null;
        String about = null;
        String img = null;
        Roles roles = null;

        memberId = member.getMemberId();
        email = member.getEmail();
        nickname = member.getNickname();
        about = member.getAbout();
        img = member.getImg();
        roles = member.getRoles();

        Response response = new Response( memberId, email, nickname, about, img, roles );

        return response;
    }
}
