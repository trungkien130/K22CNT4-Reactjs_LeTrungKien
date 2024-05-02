import React, { Component } from 'react'

export default class LTKForm3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentName: "Lê Trung Kiên",
            age: "20",
            course: "Ltc-HTML5",
            gender: true
        }
    }
    ltkHandleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    ltkHandleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.props.onSubmit(this.state)
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Student name</label>
                        <input
                            name='studentName'
                            value={this.state.studentName}
                            onChange={this.ltkHandleChange} />
                    </div>

                    <div>
                        <label>Student age</label>
                        <input
                            name='age'
                            value={this.state.age}
                            onChange={this.ltkHandleChange} />
                    </div>
                    <div>
                        <label>Gender</label>
                        <input type='radio' name='gender' value={true} checked={this.state.gender === true} />Nam
                        <input type='radio' name='gender' value={false} checked={this.state.gender === false} />Nữ

                    </div>

                    <div>
                        <label>Course</label>
                        <select
                            name='course'
                            value={this.state.course}
                            onChange={this.ltkHandleChange}>
                            <option value={"Ltk-Html5"}>Ltk-Html5</option>
                            <option value={"Ltk-CSS3"}>Ltk-CSS3</option>
                            <option value={"Ltk-JS"}>Ltk-JS</option>
                            <option value={"Ltk-RJ"}>Ltk-RJ</option>
                        </select>
                    </div>
                    <button onClick={this.ltkHandleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
