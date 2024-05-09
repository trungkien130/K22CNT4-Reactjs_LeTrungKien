import React, { Component } from 'react'

export default class LtkProductAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            title: '',
            status: 0
        }
    }
    ltkHandleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
    }
    ltkHandleSubmit = (ev) => {
        ev.preventDefault()
        this.props.onSubmmit(this.state)
    }
    render() {
        return (
            <div>
                <h2>Thêm mới sản phẩm</h2>
                <form className='col-md-6'>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                ID
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            name='id'
                            value={this.state.id}
                            onChange={this.ltkHandleChange}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon2">
                                Title
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            name='title'
                            value={this.state.title}
                            onChange={this.ltkHandleChange}
                        />
                    </div>


                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3">
                                Status
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            name='status'
                            value={this.state.status}
                            onChange={this.ltkHandleChange}
                        />
                    </div>
                    <button className='btn btn-success' onClick={this.ltkHandleSubmit}>Ghi lại</button>
                </form>
            </div>
        )
    }
}
