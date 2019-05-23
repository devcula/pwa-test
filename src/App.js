import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {
    constructor(){
        super();
        this.state={
            robots: robots,
            searchField: ""
        }
    }

    onSearchChange = (event) =>{
        debugger;
        this.setState({
            searchField: event.target.value
        })
        // const filteredRobots = robots.filter(
        //     (robot) => {
        //         return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        //     }
        // )
        // this.setState({
        //     robots: filteredRobots
        // })

        console.log('searchField',this.state.searchField);
        // console.log('filteredRobots', filteredRobots);
        console.log('State robots', this.state.robots);
        console.log('Original robots', robots);
    }

    render(){
        const filteredRobots = robots.filter(
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