import React, { Component } from 'react';
import CardList from '../components/CardListComponent/CardList';
import SearchBox from '../components/SearchBoxComponent/SearchBox';
import './App.css';
import Scroll from '../components/ScrollComponent/Scroll';
import ErrorBoundary from '../components/ErrorBoundaryComponent/ErrorBoundary';
import {connect} from 'react-redux';
import { setSearchField, updateRobots } from '../redux/actionCreator';

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        updateRobots: (robotsList) => dispatch(updateRobots(robotsList))
    }
}

const mapStateToProps = state => {
    return {
        searchField: state.searchField,
        robots: state.robots
    }
}

class App extends Component {

    componentDidMount = () =>{
        console.log("Inside componentDidMount")
        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
            return response.json();
        }).then(users =>{
            this.props.updateRobots(users);
        });
    }

    render(){
        const filteredRobots = this.props.robots.filter(
            (robot) => {
                return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
            }
        )
        if(this.props.robots.length===0){
            return (
                <h1 className="tc">LOADING...</h1>
            )
        }
        else{
            return(
                <div className="tc">
                    <h1>My Robo Friends</h1>
                    <SearchBox filterFunction={this.props.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={ filteredRobots }/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);