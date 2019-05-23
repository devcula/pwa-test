import React, { Component } from 'react';
import CardList from './CardListComponent/CardList';
import SearchBox from './SearchBoxComponent/SearchBox';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state={
            robots: [],
            searchField: ""
        }
    }

    onSearchChange = (event) =>{
        // debugger;
        this.setState({
            searchField: event.target.value
        })

        //Below approach failed because setState is an async function and before it executes,
        //the filter function uses the searchField value which is still not changed.

        // const filteredRobots = robots.filter(
        //     (robot) => {
        //         return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        //     }
        // )
        // this.setState({
        //     robots: filteredRobots
        // })

        // console.log('searchField',this.state.searchField);
        // console.log('filteredRobots', filteredRobots);
        // console.log('State robots', this.state.robots);
        // console.log('Original robots', robots);
    }

    componentDidMount = () =>{
        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
            return response.json();
        }).then(users =>{
            this.setState({ robots: users });
        });
    }

    //Use shouldComponentUpdate function to optimize re-rendering process of the component
    shouldComponentUpdate = (props) => {
        if(this.state.searchField !== props.searchField){
            return true;
        }
        return false;
    }

    render(){
        console.log(this.state.robots);
        const filteredRobots = this.state.robots.filter(
            (robot) => {
                return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
            }
        )
        return(
            <div className="tc">
                <h1>My Robo Friends</h1>
                <SearchBox filterFunction={this.onSearchChange}/>
                {/* <CardList robots={ this.state.robots }/> */}
                <CardList robots={ filteredRobots }/>
            </div>
        );
    }
}

export default App;