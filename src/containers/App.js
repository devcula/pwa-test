import React, { Component } from 'react';
import {connect} from 'react-redux';
import { setSearchField, updateRobots } from '../redux/actionCreator';
import MainPage from '../components/MainComponent/MainPage';

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        updateRobots: (robotsList) => dispatch(updateRobots(robotsList))
    }
}

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField,
        robots: state.robots
    }
}

class App extends Component {
    render(){
        return <MainPage props={this.props}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);