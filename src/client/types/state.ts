export interface State {
    registerData: RegisterData,
    loginData:LoginData,
    user:UserData
}

export interface RegisterData {
    firstname: string,
    lastname: string,
    email: string,
    password: string
}

export interface LoginData {
    email: string,
    password: string
}

export interface UserData {
    userData: Object,
    isAuthenticated: boolean
}
