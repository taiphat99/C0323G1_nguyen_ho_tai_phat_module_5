import { Component } from "react";

class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      studentList: [
        { id: 1, name: "Danny", address: "Quang Tri" },
        { id: 2, name: "Louis", address: "Da Nang" },
        { id: 3, name: "Chunky", address: "Quang Tri" },
      ],
    };
  }
  render() {
    return(   
        <>
        <h1>Student List</h1>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
          {this.state.studentList.map((element, index) => {
            return (
              <tr key={index}>
                <td >{element.id}</td>
                <td>{element.name}</td>
                <td>{element.address}</td>
              </tr>
            )
          })}
        </table>
      </>
      )

  }
}
export default StudentList;
