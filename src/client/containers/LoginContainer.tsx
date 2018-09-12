import * as React from 'react';

import * as PropTypes from 'prop-types';
import { bindActionCreators, compose} from 'redux';
import { connect } from 'react-redux';
import * as _ from "lodash";
import Helmet from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LoginForm from '../components/authentication/LoginForm';

import * as userActions from '../actions/userActions';
import {State} from '../types/state';
import {loginData, user} from '../reducers/initialState';
import {styles} from './loginStyles';

class Login extends React.Component<any, any> {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  public constructor(props, context) {
    super(props, context);
    this.state = {
      errors: {},
      saving: false,
      logging: false,
      loginData: _.assign({}, loginData),
      user: _.assign({}, user)
    };
    this.updateLoginFormState = this.updateLoginFormState.bind(this);
    this.login = this.login.bind(this);
    this.changeForm = this.changeForm.bind(this);
  };

  public updateLoginFormState(event) {
    const field = event.target.name;
    let loginData = _.assign({}, this.state.loginData);
    loginData[field] = event.target.value;
    return this.setState({loginData: loginData});
  }

  public changeForm(event: React.MouseEvent<HTMLAnchorElement>):void {
    event.preventDefault();
    this.context.router.history.push('/register');
  }

  public login(event){
    event.preventDefault();
    this.setState({logging: true});
    this.props.actions.userActions.logIn(this.state.loginData)
      .then((data) => {this.redirect(data)})
      .catch(error => {
        this.setState({logging: false});
      })
  }

  private redirect(role:string) {
    this.setState({logging: false});
    if(role == "guest"){
      this.context.router.history.push('/');
    }
    else{
      this.context.router.history.push('/admin');
    }
    
  }

  public render () {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Helmet title='Login' />
        <main className={classes.layout}>
          <LoginForm
            onChange={this.updateLoginFormState}
            onLogin={this.login}
            logging={this.state.logging}
            loginData={this.state.loginData}
            errors={this.state.errors}
          />
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: State) => ({user: state.user});
const mapDispatchToProps = ( dispatch ) => {
    return {
            actions: {
              userActions: bindActionCreators(userActions,dispatch)
            }
            };
};

export default compose(
                withStyles(styles),
                connect(mapStateToProps, mapDispatchToProps))(Login);