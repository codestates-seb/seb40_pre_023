package com.seb40pre023.global.error.exception;

import lombok.Getter;

public enum ExceptionCode {

    MEMBER_NOT_FOUND(404, "Member Not Found"),
    MEMBER_EXISTS(409, "Member Exists"),
    INVALID_MEMBER_STATUS(400, "Invalid Member Status"),
    INVALID_PASSWORD(404, "Invalid Password"),
    ANSWER_NOT_FOUND(404, "Answer Not Found"),
    QUESTION_NOT_FOUND(404, "Question Not Found"),
    NOT_AUTHORIZED(401, "Not Authorized");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
