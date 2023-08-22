import { Component } from "react";

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      toDoList: [
        "Learning English",
        "Coding in the Shadow",
        "Running on the beach",
      ],
      task: "",
    };
  }

  addTask(){
    let input = document.getElementById("input").value;
    if(input.trim() !==""){
    this.setState((pre) =>({
        toDoList : [...pre.toDoList,input],
        task : ""
    }))}
  }

  render() {
    return (
      <>
        <input value={this.task} id="input"></input>
        <button onClick={() => this.addTask()}>Add</button>
        <ul>
            {
                this.state.toDoList.map((element,index) => {
                    return <li key={index}>{element}</li>
                })
            }
        </ul>
      </>
    );
  }
}
export default ToDoList;
