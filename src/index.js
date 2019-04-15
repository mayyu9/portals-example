import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import App from './portal-modal/App';
import * as serviceWorker from './serviceWorker';
//import { Router, Route, Switch } from "react-router";
import {
    BrowserRouter,
    Route,
    Switch,
  } from 'react-router-dom';

/*
import out pages
*/
import PageOne from './portal-router/PageOne';
import PageTwo from './portal-router/PageTwo';
import PageThree from './portal-router/PageThree';

/* import mock music component*/
import MusicPlayer from './portal-router/MusicPlayer';

/**
 * Import out default styles
 */
import './index.css';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={time:new Date().getSeconds() //state variable of parent passed to portal
        }
    }

    componentDidMount(){
        this.startTime();
    }

    startTime = () => {
        /*
        this is simple function, it gets the current time second only and updates it to state 
        */
       let now = new Date();
       let seconds = now.getSeconds();

       this.setState({time: seconds});
       setTimeout(this.startTime, 500);
    }

    render(){
        return(
            <div>
                <MusicPlayer parentState={this.state.time} />
                <BrowserRouter>
                    <Switch>
                        {/*//change the title of the page*/}
                        <Route exact path = "/" render={ () => <PageOne  title="My Home Page"/>} />
                        <Route exact path = "/pg2" component={PageTwo} />
                        <Route exact path = "/pg3" component={PageThree} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
