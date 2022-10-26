package com.seb40pre023.domain.answer.entity;

import com.seb40pre023.global.common.auditing.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
//@Entity
public class Answer extends BaseTime {
    private long answerId;
    private String content;
}
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
