import React , {useState ,useEffect} from "react";
import CardList from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import '../components/index.css';



const state ={
    Robots:[],
    searchfield:""
}

function App() {
    //constructor(){
     //  super()
        //this.state={
          //  Robots:[],
            //searchfield:"",
        //}
    //}

    const [Robots ,setRobots] =useState([])
    const [searchfield ,setsearchfield]=useState('')
    const [count ,setcount]=useState(0)


    //componentDidMount(){
      //  fetch('https://jsonplaceholder.typicode.com/users')
     //   .then(Response=> Response.json())
    //  .then(users =>this.setState({Robots:users}));        
    //}

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=> Response.json())
        //.then(users =>this.setState({Robots:users}));
        .then(users =>setRobots(users));
        console.log(count)
    },[count])


    const onSearchange=(event)=>{
        //this.setState({searchfield : event.target.value})
        setsearchfield(event.target.value)
        }
        //const {Robots ,searchfield}=this.state
        const filterRobots=Robots.filter(Robot=>{
            return Robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !Robots.length ? <h1>loading</h1> : 
       (
        <div className="tc">
        <h1>Robo Friends</h1> 
        <button onclick={()=>setCount(setcount+1)}>Click Me </button>
        <SearchBox searchChange={onSearchange}/>
        <Scroll>
            <ErrorBoundry >
            <CardList Robot={filterRobots}/>
           </ErrorBoundry>
        </Scroll>
        </div>
    );
}
 


export default App;