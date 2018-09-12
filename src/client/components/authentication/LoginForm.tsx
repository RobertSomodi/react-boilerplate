import * as React from 'react';
// import { Form, Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap';
import EmailInput from '../common/EmailInput';
import PasswordInput from '../common/PasswordInput';

import { LoginProps } from '../../types/form';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {styles} from './loginStyles';

const LoginForm: React.SFC<LoginProps> = (props) => {
    const {classes} = props;

    return (
        <React.Fragment>
             <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockIcon />
                </Avatar>
                <Typography variant="headline">Sign in</Typography>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input 
                            id="email" 
                            name="email" 
                            autoComplete="email" 
                            autoFocus
                            value={props.loginData.email}
                            onChange={ev => props.onChange(ev)}
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                        name="password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={props.loginData.password}
                        onChange={ev =>props.onChange(ev)}
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="raised"
                        color="primary"
                        className={classes.submit}
                        onClick={ev => props.onLogin(ev)}
                        disabled={props.logging}
                    >
                    Sign in
                    </Button>
                </form>
            </Paper>
        </React.Fragment>
                 
    );
};

export default withStyles(styles)(LoginForm);
