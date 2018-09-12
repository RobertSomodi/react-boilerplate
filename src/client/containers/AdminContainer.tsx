import * as React from 'react';
import {bindActionCreators, compose} from 'redux';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as _ from "lodash";
import Helmet from 'react-helmet';

import {State} from '../types/state';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

import {styles} from './adminStyles';

class Admin extends React.Component<any, any> {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  public constructor(props, context) {
    super(props, context);
    this.state = {
      open: true
    }
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
  };

  componentWillMount(){
    // if(this.props.user.userData.role == 'guest'){
    //   this.context.router.history.push('/');
    // }
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  

  public render () {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Helmet title='Community' />
        <div className={classes.root}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
          >
            <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden,
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap className={classes.title}>
                Dashboard
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Typography variant="display1" gutterBottom>
              Orders
            </Typography>
            <Typography component="div" className={classes.chartContainer}>
            </Typography>
            <Typography variant="display1" gutterBottom>
              Products
            </Typography>
            <div className={classes.tableContainer}>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: State) => ({user: state.user});
const mapDispatchToProps = ( dispatch ) => {
    return {
      actions: []
            };
};

export default compose(
                withStyles(styles),
                connect(mapStateToProps, mapDispatchToProps))
              (Admin);

