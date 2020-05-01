//seasons app
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';

//class component better than function component, for now
//when a class extends another class, it is borrowing functionality from another class
class App extends React.Component {
    //this is the first thing called when building our component
    constructor(props){
        //Gotta call this or you'll get an error
        super(props);
        //initializes our state
        this.state = {lat: null, errorMessage: ''};
    }
    //can also set state properties this way insteaad of the entire constructor method above.
    // state = {lat: null, errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=> this.setState({ lat: position.coords.latitude}), (err) => this.setState({errorMessage: err.message})
        ); 
    }

    renderContent(){
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        
        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>        }

        return <LoadingSpinner message = "Please accept location request"/>;

    }

    //we try not to have logic or multiple return statements within render.  putting logic into a helper method, like this example of renderContent cleans this up
    render(){
        return(
            <div className = "border red">
                {this.renderContent()}
            </div>
        );
    }
}

//need to communicate with the DOM
ReactDOM.render(
    
    <App />,
    document.querySelector("#root")

);