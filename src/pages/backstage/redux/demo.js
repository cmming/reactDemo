import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'antd'
import { ADD_NUM,DELETE_NUM } from '../../../store/modules/demo'

@connect(
    state => state.demo,
    { ADD_NUM,DELETE_NUM }
)
class Demo extends React.Component{

    render() {
        return  <div>
            demo  {this.props.number}
            <Button type="primary" onClick={this.props.ADD_NUM}>ADD_NUM</Button>
            <Button type="primary" onClick={this.props.DELETE_NUM}>DELETE_NUM</Button>
        </div>
    }
}

export default Demo