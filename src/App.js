import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "./App.css";
import Cart from "./components/ShoppingCart";
import DisplayItems from "./components/DisplayItems";
import About from "./components/pages/About";
import Header from "./components/pages/Header";
import Axios from "axios"

class App extends Component {
 
  state = {
    // items: [
    //   {
    //     id: 1,
    //     name: "apple",
    //     price: "1.00",
    //     unit: "$/kg",
    //   },
    //   {
    //     id: 2,
    //     name: "orange",
    //     price: "5.00",
    //     unit: "$/kg",
    //   },
    // ],
    // selections: [
    //   // {
    //   //   id: 1,
    //   //   weight: 0.5,
    //   // }
    // ]
  };

  // Getting state information from external rest API.
  componentDidMount() {
    Axios.get("https://my-json-server.typicode.com/wong-jacob/json/fruitMarket")
      .then(res => this.setState(res.data));
  }

  updateSelections = (id, weight) => {
    // Update the state using the prevState passed in by setState().
    this.setState((prevState, props) => {
      let selection = prevState.selections.find((selection) => selection.id === id);
      if (selection) {
        // Construct the updated state using spread operation
        return { ...prevState, 
                 ...{selections:  prevState.selections.map((selection) =>
                     selection.id === id ? { id, weight: (+weight) } : selection
          )} };
      } else {
        // Construct the updated state using spread operation
        return {...prevState, ...{selections: [ ...prevState.selections, {id, weight: (+weight) } ]}};
      }
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">

            <p>Fruit Market</p>
            <Header/>

            {/* Need render props because of multiple components */}
            <Route exact path="/" render={ props => (
              <React.Fragment>
                <hr />
                <DisplayItems
                  items={this.state.items}
                  selections={this.state.selections}
                  updateSelections={this.updateSelections}
                />
                <hr />
                <Cart items={this.state.items} selections={this.state.selections} />
              </React.Fragment>
              )} />
              <Route path="/about" component={About} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
