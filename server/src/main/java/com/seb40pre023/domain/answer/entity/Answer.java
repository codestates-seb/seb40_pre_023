package com.seb40pre023.domain.answer.entity;

import com.seb40pre023.domain.member.entity.Member;
import com.seb40pre023.domain.question.entity.Question;
import com.seb40pre023.domain.vote.entity.Vote;
import com.seb40pre023.global.common.auditing.BaseTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
//@Entity
public class Answer extends BaseTime {
    private long answerId;
    private String content;

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private long answerId;
//
//    @Column(nullable = false)
//    private String content;
//
//    @CreatedDate
//    @Column(name = "created_at", updatable = false)
//    private LocalDateTime createdAt;
//
//    @LastModifiedDate
//    @Column(name = "modified_at")
//    private LocalDateTime modifiedAt;
//
//
//    @ManyToOne
//    @JoinColumn(name = "MEMBER_ID")
//    private Member member;
//
//    @ManyToOne
//    @JoinColumn(name = "MEMBER_ID")
//    private Question question;
//
//    @OneToMany(mappedBy = "member")
//    private List<Vote> votes = new ArrayList<>();
