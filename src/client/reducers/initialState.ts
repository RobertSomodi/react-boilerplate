import * as types from '../types/state';

export  const loginData: types.LoginData = {
    email: "",
    password: ""
}

export const registerData: types.RegisterData = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
}

export const user: types.UserData = {
    userData:{  firstname: "",
            lastname: "",
            email: "",
            id: "",
            jwt: "",
            role: ""},
    isAuthenticated: false
}

