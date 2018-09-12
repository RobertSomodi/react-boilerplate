import * as  React from 'react';  
import {connect} from 'react-redux';
import * as _ from 'lodash';
import * as PropTypes from 'prop-types';
import {loginSuccess, authenticate} from '../actions/userActions';

export default function requireAuthentication(Component) {

  class AuthenticatedComponent extends React.Component<any,any> {

    static contextTypes = {
      router: PropTypes.object.isRequired
    };

    componentWillReceiveProps(nextProps) {
      if (!nextProps.user.isAuthenticated) {
        this.props.history.push('/auth/login');
      }
    }

    componentWillMount() {
      if(!this.props.user.isAuthenticated){
             this.props.dispatch(authenticate());
      }
    }

    render() {
      return (
        <div>
          {true
            ? <Component {...this.props}/>
            : null
          }
        </div>
      )

    }
  }

  const mapStateToProps = (state) => ({user: state.user});
  const mapDispatchToProps = (dispatch) => {
    return {dispatch};
  }
 
  return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent)
}