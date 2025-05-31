import React , {Component} from "react";
import CardList from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import '../components/index.css';



const state ={
    Robots:[],
    searchfield:""
}

class App extends Component {
    constructor(){
        super()
        this.state={
            Robots:[],
            searchfield:"",
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=> Response.json())
        .then(users =>this.setState({Robots:users}));
        
    }
    onSearchange=(event)=>{
        this.setState({searchfield : event.target.value})
        }

    render() {
        const {Robots ,searchfield}=this.state
        const filterRobots=Robots.filter(Robot=>{
            return Robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !Robots.length ? <h1>loading</h1> : 
       (
        <div className="tc">
        <h1>Robo Friends</h1> 
        <SearchBox searchChange={this.onSearchange}/>
        <Scroll>
            <ErrorBoundry >
            <CardList Robot={filterRobots}/>
           </ErrorBoundry>
        </Scroll>
        </div>
    );
}
 }


export default App;