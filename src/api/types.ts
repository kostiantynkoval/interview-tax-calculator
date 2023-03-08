export enum ErrorCode {
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
    NOT_FOUND = "NOT_FOUND"
}

export interface ErrorResponseElement {
    code: ErrorCode;
    field: string;
    message: string;
}

export interface SuccessResponseObject {
    rate: number;
    min:number;
    max?: number;
}

export type ErrorResponse = {
    errors: ErrorResponseElement[];
}

export type SuccessResponse = {
    tax_brackets: SuccessResponseObject[];
}

export type Response = ErrorResponse | SuccessResponse;