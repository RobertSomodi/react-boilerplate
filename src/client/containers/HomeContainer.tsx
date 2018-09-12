import * as React from 'react';
import {bindActionCreators} from 'redux';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as _ from "lodash";
import Helmet from 'react-helmet';

import Grid from '@material-ui/core/Grid';
import * as types from '../types/state';
import {State} from '../types/state';

class Home extends React.Component<any, any> {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  public constructor(props, context) {
    super(props, context);
  };

  componentWillMount(){
    // console.log(this.props);
    // if(this.props.user.userData.role != 'guest'){
    //   this.context.router.history.push('/admin');
    // }
  }

  componentDidMount(){
  }

  public render () {
    return (
      <div>
        <Helmet title='Home' />
        <Grid 
          container 
          style={{flexGrow: 1}}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={8}>
            asdasdsa
          </Grid>
        </Grid>
        
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({user: state.user});
const mapDispatchToProps = ( dispatch ) => {
    return {
            actions: []
            };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);