import { RegisterData, LoginData} from './state';
import { EventHandler } from '../../../node_modules/@types/react';
import { WithStyles, StyleRulesCallback } from '@material-ui/core/styles/withStyles';

export interface InputProps {
    name: string,
    label: string,
    placeholder: string,
    value: string | number,
    error?: string,
    onChange: Function
}

export interface SelectProps {
    name: string,
    label: string,
    error?: string,
    value: string,
    onChange: Function,
    options: Array<SelectOption>
}

export interface SelectOption {
    value: string,
    label: string,
    disabled?: boolean,
    selected?: boolean
}

export interface RadioInputProps {
    name: string,
    label: string,
    error?: string,
    onChange: Function,
    options: Array<RadioOption>
}

export interface RadioOption {
    value: string | number | boolean,
    label: string,
    disabled?: boolean
}

export interface SignUpProps {
    onRegister: Function,
    onChange: Function,
    saving: boolean,
    registerData: RegisterData
    errors?: string
}

export interface LoginProps {
    onLogin: Function,
    onChange: Function,
    logging: boolean,
    loginData: LoginData,
    errors?: string,
    classes: {
        layout: string,
        paper: string,
        avatar: string,
        form: string,
        submit: string
    }
}

export interface SwitchFormProps {
    loginForm: boolean,
    changeForm: EventHandler<React.MouseEvent<HTMLAnchorElement>>
}

export interface FormWrapperProps{
    loginForm: boolean
}