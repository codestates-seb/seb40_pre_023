package com.seb40pre023.global.common.auditing;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseTime {
    @CreatedDate // 객체 생성 시간
    private LocalDateTime createdAt;

    @LastModifiedDate // 객체 수정될 때마다 시간 갱신
    private LocalDateTime modifiedAt;
}
