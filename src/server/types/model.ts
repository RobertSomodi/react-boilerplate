export interface User{
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    role: string
    comparePassword: comparePasswordFunction
}

export type comparePasswordFunction = (candidatePassword: string, cb: (err: any, isMatch: any) => {}) => void;