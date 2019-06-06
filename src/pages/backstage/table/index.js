import React from 'react';
import {connect} from 'react-redux'
import Ctable from '../../../ui/table/index'
import  { SET_TABLEINDEX_BTN_ACTION,GET_TABLEINDEX_LIST_ACTION } from '../../../store/modules/tableindex';

@connect(
    state => state.tableindex,
    {SET_TABLEINDEX_BTN_ACTION,GET_TABLEINDEX_LIST_ACTION}
)
class TableIndex extends React.Component {
    //制作是否加载按钮的开关
    componentWillMount(){
        if(!this.props.table.hasHandleColumns){
            this.props.SET_TABLEINDEX_BTN_ACTION({
                title: 'Action',
                key: 'action',
                render: () => <a href = "javascript:;" > Delete </a>,
            })
        }

        this.props.GET_TABLEINDEX_LIST_ACTION()
    }

    render(){
        console.log(this.props.table)
        return (
            <Ctable model={this.props.table}>
            </Ctable>
        )
    }
}

export default TableIndex