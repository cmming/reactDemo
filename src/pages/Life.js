import React from 'react'
import { Button } from 'antd';

export default class Life extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }


    add = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        return <div>
            <Button type="primary" onClick={this.add}>加</Button>
            <p>{this.state.count}</p>
            <Button type="primary" >减</Button>
        </div>
    }
}