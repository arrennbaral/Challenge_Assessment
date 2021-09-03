
import React,{Component} from 'react'
import './App.css';
import { CardList } from './Components/Cards';


class App extends Component {
  constructor() {
    super();
    this.state = { 
      fruits:[]
     };
  }
  componentDidMount(){
    fetch('http://localhost:4000/get/fruits')
    .then(response=>response.json())
    .then(fruit=>this.setState({fruits:fruit}))
  }
  

  render() {
    console.log(this.fruits)
    return (
      <div className="App">
        <h1>Welcome to Fruits Page</h1>
        <h5>Please click on the IMAGE or the details button for specific details of the fruit</h5>
        <br></br>
        <CardList fruits={this.state.fruits}>
        
        </CardList>
        
          
        
      </div>      
    );
  }
}

export default App;