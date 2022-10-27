package com.seb40pre023.domain.member.mapper;

import com.seb40pre023.domain.member.dto.MemberDto;
import com.seb40pre023.domain.member.entity.Member;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member memberPostToMember(MemberDto.Post requestBody);
    Member memberPatchToMember(MemberDto.Patch requestBody);
    Member memberLoginToMember(MemberDto.Login loginDto);
    MemberDto.Response memberToMemberResponse(Member member);

}