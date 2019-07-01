import React, { Component } from 'react';
import CardList from '../CardListComponent/CardList';
import SearchBox from '../SearchBoxComponent/SearchBox';
import './MainPage.css';
import Scroll from '../ScrollComponent/Scroll';
import ErrorBoundary from '../ErrorBoundaryComponent/ErrorBoundary';


class MainPage extends Component {
    
    componentDidMount = () =>{
        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
            return response.json();
        }).then(users =>{
            this.props.updateRobots(users);
        });
    }

    render(){
        const { robots } = this.props;
        const filteredRobots = robots.filter(
            (robot) => {
                return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
            }
        )
        if(robots.length===0){
            return (
                <h1 className="tc">LOADING...</h1>
            )
        }
        else{
            return(
                <div className="tc">
                    <h1>BOT MATES</h1>
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

export default MainPage;