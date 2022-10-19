import React, { Fragment } from "react";

class App extends React.Component {
  /* The state is a built -in React object that is used to contain data or information about the component.
 A component's state can change over time; whenever it changes, the component re-renders. 
 The state object is initialized in the constructor. 
The state object can store multiple properties
 */
  constructor(props) {
    super(props)
    this.state = { //You create stat object with this.state syntax. You can have all components data inside state object. The data can be whatever, 
      count: 0,
      cars: ["Volvo", "Ford", "BMW"],
      info: {
        id: "12345",
        firstName: "Sebastian",
        lastName: "Dali",
        score: 0
      },
    }
  }

  //count = 0; //If we change this variable, no rerender would occur

  increase = () => {
    /* this.count = this.count + 1;
    console.log(this.count); */
    this.setState({ count: this.state.count + 1 }) //SetState method is used to change the data inside the this.state object. Whenever setState method is used, react will autamtically rerender the component
  }
  decrease = () => {
    this.setState({ count: this.state.count - 1 })
  }
  addNewCar = () => {
    //this.state.cars.push("Audi")
    //Option One
    /*  console.log(this.state.cars);
     const tempCars = this.state.cars;
     tempCars.push("Audi")
     this.setState({ cars: tempCars }) */

    //Option Two
    this.setState({
      cars: [...this.state.cars, "Audi"].sort(), // Folow this set for adding new item to a list, spread operators copys the list and then we add "Audi". 
      count: this.state.cars.length
    })
    //this.setState({cars: ["Volvo", "Ford", "BMW", "Audi"]})
  }
  updateScore = () => {
    //Option one
    /* const tempObj = this.state.info;
    tempObj.score = tempObj.score + 5;
    this.setState({ info: tempObj }) */

    //Option two
    setInterval(() => {
      this.setState({ info: { ...this.state.info, score: this.state.info.score + 5 } })
    }, 1000)
  }
  render() {
    return (
      <Fragment>
        <div>
          <button onClick={this.updateScore}>Update Score</button>
          <h1>{this.state.info.firstName}:{this.state.info.lastName}:{this.state.info.score}</h1>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
        <br></br>
        {this.state.count}
        <br></br>
        <button onClick={this.addNewCar}>Add new car</button>
        {this.state.cars.map((value, index) => {
          return (
            <h1 key={index}>{value}</h1>
          )
        })}

      </Fragment>
    )
  }
}

export default App;