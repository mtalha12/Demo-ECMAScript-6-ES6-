import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HelpOutline from '@material-ui/icons/HelpOutline';
import { Search, Close } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Select, { components } from 'react-select';
import { isArray } from 'lodash';
import { Typography } from '@material-ui/core';

import {
    AuthActions,
    GeneralActions,
    ModalActions,
    ProjectActions,
} from './../../../store/actions';
import UserMenu from './../../../components/UserMenu/UserMenu';
import UserNotification from './../../../components/UserMenu/Notifications';
import ErrorSnackBar from '../../../components/ErrorSnackBar';
import {
    checkArrayLength,
    checkKeyInObject,
} from './../../../../src/utils/utils';
import { Modal } from '../../modal';
import config from './../../../config';
import Tooltip from '../../../components/Tooltip';
import { BLACK_FONT } from '../../../common/cssConstants';

const { companyName, dashboardImageUrl } = config;
const styles = (theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        height: '46px',
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        boxShadow: `0px 2px 4px 0px rgba(0, 0, 0, 0.02),
                 0px 0px 2px 0px rgba(0, 0, 0, 0.14),
                 0px 1px 10px 0px rgba(0, 0, 0, 0.01)`,
    },
    appBarXS: {
        flexGrow: 1,
        boxShadow: `0px 2px 4px 0px rgba(0, 0, 0, 0.02),
                 0px 0px 2px 0px rgba(0, 0, 0, 0.14),
                 0px 1px 10px 0px rgba(0, 0, 0, 0.01)`,
    },
    rightContainer: {
        alignItems: 'center',
        // justifyContent: 'space-around',
        display: 'flex',
        [theme.breakpoints.only('sm')]: {
            display: 'contents',
        },
    },
    actionContainer: {
        flex: 2,
    },
    notifay: {
        color: '#fff',
        margin: '-6px 0px 0px 272px',
        backgroundColor: '#FFC107',
        width: 20,
        height: 20,
        position: 'fixed',
        float: 'left',
        zIndex: 1,
        borderRadius: '100%',
    },
    toolbar: {
        minHeight: '48px',
    },
    imageContainer: {
        flex: 4,
        display: 'flex',
        alignItems: 'center',
    },
    medIcon: {
        // fontSize: 28,
        color: '#4A4A4A',
    },
    notificationButton: {
        marginRight: '10px',
    },
    userButton: {
        marginRight: 10,
        marginLeft: 10,
        width: 35,
        height: 35,
    },
    searchInput: {
        marginRight: '40px',
        width: 400,
        '&>div>input': {
            '&::placeholder': {
                color: '#9B9B9B',
                fontWeight: 400,
                fontSize: '14px',
                opacity: 1,
            },
        },
        '&>div:first-of-type': {
            height: '38px',
        },
    },
    headerlogoRectangle: {
        width: '130px',
        cursor: 'pointer',
    },
    headerlogoSquare: {
        width: '80px',
        height: '44px',
        cursor: 'pointer',
    },
    userNameText: {
        marginLeft: 7,
    },
    select: {
        marginRight: '40px',
        width: 400,
        fontSize: '12px',
        alignItems: 'center',
        [theme.breakpoints.only('sm')]: {
            marginLeft: '40px',
        },
        '&>div>div>div:nth-child(2)': {
            fontSize: '14px',
            color: BLACK_FONT,
            fontWeight: 400,
        },
        '&>div:first-of-type': {
            backgroundColor: 'white !important',
            borderWidth: 0,
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0, 0, 0, 0.42)',
            borderRadius: 0,
            outline: 'none',
            '&>div:first-of-type': {
                padding: '2px 8px',
                position: 'relative',
                boxSizing: 'border-box',
                display: '-webkit-inline-box',
                maxHeight: '38px',
                maxWidth: 'calc(100% - 73px)',
                overflow: 'hidden',
                overflowX: 'visible',
                flexDirection: 'column',
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
            },
        },
    },
    selectXS: {
        alignItems: 'center',
        '&>div:first-of-type': {
            backgroundColor: 'white !important',
            borderWidth: 0,
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0, 0, 0, 0.42)',
            borderRadius: 0,
            outline: 'none',
            height: '42px',

            '&>div:first-of-type': {
                padding: '8px 20px',
                position: 'relative',
                boxSizing: 'border-box',
                display: '-webkit-inline-box',
                maxHeight: '38px',
                maxWidth: 'calc(100% - 73px)',
                overflow: 'hidden',
                overflowX: 'visible',
                flexDirection: 'column',
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
            },
        },
    },
    searchScroll: {
        boxSizing: 'border-box',
        display: '-webkit-inline-box',
    },
    childOptionsHolder: {
        paddingLeft: 23,
        boxSizing: 'border-box',
        display: '-webkit-inline-box',
        '&>div:first-of-type': {
            color: '#a2a2a2',
        },
    },
    positionFixed: {
        top: '0',
        left: 'auto',
        right: '0',
        position: 'inherit',
    },
    positionSet: {
        top: '0',
        left: 'auto',
        right: '0',
        position: 'fixed',
    },
    need: {
        margin: 0,
        fontSize: 12,
        color: BLACK_FONT,
    },
    click: {
        margin: 0,
        fontSize: 12,
        color: '#1168CD',
        cursor: 'pointer',
    },
    title: {
        color: BLACK_FONT,
        fontSize: 15,
        marginLeft: 20,
        fontWeight: 400,
        textTransform: 'uppercase',
    },
    clearSearch: {
        cursor: 'pointer',
    }
});

const selectStyle = {
    control: (base, state) => ({
        ...base,
        border: state.isFocused ? 0 : 0,
        borderBottom: 'solid black 1px',
        // This line disable the blue border
        boxShadow: state.isFocused ? 0 : 0,
        '&:hover': {
            border: state.isFocused ? 0 : 0,
            borderBottom: 'solid black 3px',
        },
    }),
};

const ValueContainer = ({ children, ...props }) => (
    <components.ValueContainer {...props}>
        {!!children && (
            <Search style={{ position: 'fixed', marginLeft: -10 }} />
        )}
        {!!children && (
            <div
                style={{
                    paddingLeft: 23,
                    boxSizing: 'border-box',
                    display: '-webkit-inline-box',
                }}
                id="childOptionsHolder"
            >
                {children}
            </div>
        )}
    </components.ValueContainer>
);

let wsData_forTesting = {};

class AppBarBase extends Component {
    state = {
        anchorEl: null,
        isSuccess: false,
        loader: false,
        modalData: null,
        modalName: '',
        snackBarMessage: '',
        snackbarLink: '',
        videoUrl: '',
        query: '',
        selectedValues: [],
    };

    testingFunction_wsData = () => {
        console.log(wsData_forTesting);
    };

    componentDidMount() {
        window.testingFunction_wsData = () => {
            this.testingFunction_wsData();
        };
    }

    componentWillReceiveProps = (nextProps) => {
        const { clearError, clearSuccess, showSnackBar } = this.props;

        const { wsRunningTestSteps, wsRunningCaseData, wsKeys } = nextProps;
        wsData_forTesting = JSON.parse(
            JSON.stringify({ wsRunningTestSteps, wsRunningCaseData, wsKeys }),
        );

        const error =
            nextProps.accountError ||
            nextProps.tagError ||
            nextProps.testStepError ||
            nextProps.userError ||
            nextProps.flowError ||
            nextProps.error ||
            nextProps.scheduleError ||
            nextProps.projectsError;
        const success =
            nextProps.accountSuccess ||
            nextProps.tagSuccess ||
            nextProps.testStepSuccess ||
            nextProps.userSuccess ||
            nextProps.flowSuccess ||
            nextProps.success ||
            nextProps.schduleSuccess ||
            nextProps.projectsSuccess;

        if (error) {
            showSnackBar(error, nextProps.snackbarLink);
            clearError();
        } else if (success) {
            showSnackBar(success, '', true);
            clearSuccess();
        }
        if (nextProps.forceClearQuery) {
            this.setState({ query: '', selectedValues: [] });
        }
    };

    handleMenuOpen = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };
    handleNotificationOpen = (event) => {
        this.setState({ notify: event.currentTarget });
    };
    handleMenuClose = () => {
        this.setState({ anchorEl: null, notify: null });
    };

    routeToSignIn = () => {
        this.props.routeHistory.history.push('/signin');
        // CookieStorage.remove('aut_remember')
        // window.location.reload()
    };
    handleChange = (ev) => {
        const { value } = ev.target;
        this.setState({ query: value }, () => {
            this.props.querySave(value);
        });
    };
    clearSearch = () => {
        this.setState({ query: '' }, () => {
            this.props.querySave('');
        });
    };
    changeSelection = ($event) => {
        const { disabledProjects, projects, showDisabledProjects } = this.props;
        const localProjectsCopy = showDisabledProjects
            ? disabledProjects
            : projects;
        let value = '';
        let selectedValues = $event;
        if (!checkArrayLength(selectedValues)) {
            selectedValues = [];
        } else if (checkArrayLength(localProjectsCopy)) {
            selectedValues.reverse();
            selectedValues.map((selectedValue) => {
                localProjectsCopy.map((project) => {
                    if (checkKeyInObject(project, 'projectName')) {
                        if (project.projectName === selectedValue.label) {
                            value = value != '' ? `${value},` : value;
                            value = `${value}${
                                project.projectName ? project.projectName : ''
                            }`;
                        }
                    }
                });
            });
        }
        this.setState({ selectedValues, query: value }, () => {
            this.props.querySave(value);
        });
    };
    convertToSelectValues = (inputArray = []) => {
        let outputArray = [];
        outputArray = inputArray.map((element) => {
            return {
                value: element.projectId,
                label: element.projectName,
            };
        });
        return outputArray;
    };

    render() {
        const {
            classes,
            location: { pathname },
            history,
            user = {},
            logout,
            querySave,
            notifications,
            isSnackBarOpen,
            isModalVisible,
            requiredFor,
            showRightPanel,
            disabledQuery,
            disabledProjects,
            showDisabledProjects,
            projects,
            title,
        } = this.props;
        const { anchorEl, notify, query, selectedValues } = this.state;
        const count =
            notifications &&
            notifications.data &&
            isArray(notifications.data) &&
            notifications.data.length
                ? notifications.data.filter((check) => check.isRead === false)
                      .length
                : 0;
        const toGoHome = () => {
            if (pathname && pathname != '/dashboard') {
                this.props.history.push('/dashboard', { fromLogo: true });
            }
        };
        const localProjectsCopy = showDisabledProjects
            ? disabledProjects
            : projects;
        const convertedItems = this.convertToSelectValues(localProjectsCopy);

        const userMenu = anchorEl ? (
            <UserMenu
                anchorEl={anchorEl}
                handleMenuClose={this.handleMenuClose}
                history={history}
                user={user}
                logout={logout}
            />
        ) : null;
        const userNotification = notify ? (
            <UserNotification
                anchorEl={notify}
                history={this.props.history}
                handleMenuClose={this.handleMenuClose}
            />
        ) : null;
        return (
            <AppBar
                classes={{
                    positionFixed:
                        requiredFor === 'xs'
                            ? classes.positionFixed
                            : classes.positionSet,
                }}
                className={
                    requiredFor === 'xs' ? classes.appBarXS : classes.appBar
                }
            >
                {!(requiredFor === 'xs') ? (
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.imageContainer}>
                            <Route routeName="home">
                                <img
                                    src={dashboardImageUrl}
                                    onClick={toGoHome}
                                    className={
                                        companyName === 'AutonomIQ'
                                            ? classes['headerlogoRectangle']
                                            : classes.headerlogoSquare
                                    }
                                    alt={`${companyName} logo`}
                                />
                            </Route>
                            <span className={classes.title}>{title}</span>
                        </div>
                        <div
                            className={[
                                classes.rightContainer,
                                classes.actionContainer,
                            ].join(' ')}
                        >
                            {pathname &&
                            pathname !== '/dashboard' &&
                            pathname !== '/plan/projects' ? (
                                <TextField
                                    className={classes.searchInput}
                                    id="contextual-search"
                                    placeholder="Search"
                                    onChange={this.handleChange}
                                    value={query || ''}
                                    disabled={disabledQuery}
                                    // placeholder={"Project Name"}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment
                                                position="start"
                                                style={{
                                                    marginRight: '11px',
                                                    marginLeft: '-2px',
                                                    marginTop: '1px',
                                                }}
                                            >
                                                <Search />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment
                                                position="end"
                                                style={{
                                                    marginRight: '-3px',
                                                }}
                                                className={classes.clearSearch}
                                                onClick={this.clearSearch}
                                            >
                                                <Close />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            ) : pathname === '/plan/projects' ? (
                                <Select
                                    closeMenuOnSelect={false}
                                    value={selectedValues}
                                    id="projectDropdown"
                                    isMulti
                                    options={convertedItems}
                                    className={classes.select}
                                    styles={selectStyle}
                                    onChange={this.changeSelection}
                                    placeholder={'Search'}
                                    components={{ ValueContainer }}
                                    label
                                />
                            ) : pathname === '/dashboard' ? (
                                <div
                                    style={{ display: 'flex', width: '205px' }}
                                >
                                    <p className={classes.need}>Need Help?</p>
                                    <p
                                        className={classes.click}
                                        onClick={() => {
                                            this.props.toggleModal('homeTour');
                                        }}
                                    >
                                        &nbsp;Click to start product tour
                                    </p>
                                </div>
                            ) : (
                                <div className={classes.searchInput} />
                            )}
                            {/*Add Notification Icon for enableing to show the status of newly generated video */}
                            <div className={classes.rightContainer}>
                                <Tooltip data={'Notification'}>
                                    <IconButton
                                        className={classes.userButton}
                                        color="inherit"
                                        onClick={this.handleNotificationOpen}
                                    >
                                        {count ? (
                                            <Badge
                                                badgeContent={count}
                                                color="secondary"
                                            >
                                                <NotificationsIcon
                                                    style={{ color: '#4A4A4A' }}
                                                />
                                            </Badge>
                                        ) : (
                                            <NotificationsIcon
                                                style={{ color: '#4A4A4A' }}
                                            />
                                        )}
                                    </IconButton>
                                </Tooltip>
                                <Tooltip data={'How to'}>
                                    <IconButton
                                        className={classes.userButton}
                                        color="inherit"
                                        href="https://github.com/Autonomiq/Community/wiki"
                                        target="_blank"
                                    >
                                        <HelpOutline
                                            style={{ color: '#4A4A4A' }}
                                        />
                                    </IconButton>
                                </Tooltip>
                                <Button onClick={this.handleMenuOpen}>
                                    <AccountCircle
                                        className={classes.medIcon}
                                    />
                                    <Typography
                                        className={classes.userNameText}
                                    >
                                        {user.name}
                                    </Typography>
                                </Button>
                            </div>
                            {/* <IconButton disabled className={classes.notificationButton} color="inherit" aria-label="Notifications">
                        <Notifications className={classes.medIcon} />
                    </IconButton> */}
                            {/* <IconButton className={classes.userButton} color="inherit" aria-label="user detail" data-rh="User">
                            <AccountCircle className={classes.medIcon} />
                        </IconButton>
                        <IconButton className={classes.notificationButton} color="inherit" aria-label="Notifications" data-rh="Notifications">
                            <Notifications className={classes.medIcon} />
                        </IconButton>
                    */}
                        </div>
                        {userMenu}
                        {userNotification}
                    </Toolbar>
                ) : (
                    <div>
                        <Select
                            closeMenuOnSelect={false}
                            value={selectedValues}
                            id="projectDropdownXS"
                            isMulti
                            options={convertedItems}
                            className={classes.selectXS}
                            styles={selectStyle}
                            onChange={this.changeSelection}
                            placeholder={'Contextual Search'}
                            components={{ ValueContainer }}
                            style={{
                                width: showRightPanel
                                    ? 'calc(100vw - 100px)'
                                    : 'calc(100vw - 50px)',
                            }}
                        />
                    </div>
                )}
                {isSnackBarOpen ? <ErrorSnackBar /> : null}
                {isModalVisible ? <Modal history={history} /> : null}
            </AppBar>
        );
    }
}

AppBarBase.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    querySave: PropTypes.func.isRequired,
    notifications: PropTypes.shape({}).isRequired,
    isModalVisible: PropTypes.bool.isRequired,
    showRightPanel: PropTypes.bool,
};

AppBarBase.defaultProps = {
    user: {
        name: '',
        email: '',
    },
    history: {},
    match: {},
    notifications: {},
    isModalVisible: false,
    showRightPanel: false,
};

const mapStateToProps = (state) => {
    return {
        // account reducer
        accountError: state.accountReducer.error,
        accountSuccess: state.accountReducer.success,
        // auth reducer
        user: state.authReducer.user,
        // block reducer
        flowError: state.flowReducer.error,
        flowSuccess: state.flowReducer.success,
        // general reducer
        forceClearQuery: state.generalReducer.forceClearQuery,
        disabledQuery: state.generalReducer.disabledQuery,
        // modal reducer
        isSnackBarOpen: state.modalReducer.isSnackBarOpen,
        isModalVisible: state.modalReducer.isModalVisible,
        // project reducer
        error: state.projectReducer.error,
        success: state.projectReducer.success,
        snackbarLink: state.projectReducer.snackbarLink,
        isLoading: state.projectReducer.isLoading,
        projects: state.projectReducer.projects,
        notifications: state.projectReducer.nonDeletedNotify,
        wsRunningTestSteps: state.projectReducer.wsRunningTestSteps,
        wsRunningCaseData: state.projectReducer.wsRunningCaseData,
        wsKeys: state.projectReducer.wsKeys,
        // tag reducer
        tagError: state.tagReducer.error,
        tagSuccess: state.tagReducer.success,
        // testStep reducer
        testStepError: state.testStepReducer.error,
        testStepSuccess: state.testStepReducer.success,
        // user reducer
        userError: state.userReducer.error,
        userSuccess: state.userReducer.success,
        // Schedule reducer
        schduleSuccess: state.scheduleReducer.success,
        scheduleError: state.scheduleReducer.error,
        //Projects reducer
        disabledProjects: state.projectsReducer.disabledProjects,
        showDisabledProjects: state.projectsReducer.showDisabledProjects,
        projectsSuccess: state.projectsReducer.success,
        projectsError: state.projectsReducer.error,
        title: state.generalReducer.title,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        querySave: (data) => dispatch(GeneralActions.querySave(data)),
        clearError: () => dispatch(ProjectActions.clearError()),
        clearSuccess: () => dispatch(ProjectActions.clearSuccess()),
        logout: (...args) => dispatch(AuthActions.logout(...args)),
        showSnackBar: (...args) =>
            dispatch(ModalActions.toggleSnackBar(...args)),
        toggleModal: (...args) => dispatch(ModalActions.toggleModal(...args)),
        saveTempCheckedCaseIds: (ids) =>
            dispatch(ProjectActions.saveTempCheckedCaseIds(ids)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(withStyles(styles)(AppBarBase)));
