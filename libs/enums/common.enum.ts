export enum Message {
	SOMETHING_WENT_WRONG = "Something went wrong!",
    NO_DATA_FOUND = "No data found!",
    CREATE_FAILED = "Create failed!",
    UPDATE_FAILED = "Update failed!",
    REMOVE_FAILED = "Remove failed!",
    UPLOAD_FAILED = "Upload failed!",
    BAD_REQUEST = "Bad request!",

    USED_MEMBER_NICK_OR_PHONE = "Already used member nick or phone",
    NO_MEMBER_NICK = "No member with that member nick!",
    BLOCKED_USER = "You have been blocked",
    WRONG_PASSWORD ="Wrong password!",
    NOT_AUTHENTICATED = "Please please login first!",
    TOKEN_NOT_EXIST = "Bearer token is not provided!",
    ONLY_SPECIFIC_ROLES_ALLOWED = 'Allowed for only members with specific roles!',
    NOT_ALLOWED_REQUEST = 'Not Allowed Request!',
    PROVIDE_ALLOWED_FORMAT = 'Please provide only jpg, jpeg or png images!',
    SELF_SUBSCRIPTION_DENIED = 'Self subscription is denied!',
    INSERT_ALL_INPUTS = 'Please provide all inputs',
}

export enum Direction {
	ASC = 'ASC',
	DESC = 'DESC',
}
