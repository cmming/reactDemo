import React from 'react';
import {connect} from 'react-redux'
import {injectIntl} from 'react-intl';
import Ctable from '../../../ui/table/index'
import  { index,destory,initBtn } from '../../../store/modules/tableindex';

@connect(
    state => state.tableindex,
    {index,destory,initBtn}
)
@injectIntl
class TableIndex extends React.Component {
    //制作是否加载按钮的开关
    // componentWillMount(){
    //     this.props.SET_TABLEINDEX_BTN_ACTION({
    //         titleKey: 'Action',
    //         key: 'action',
    //         render: (scope) => <a onClick={() => this.deleteItem(scope)} href = "javascript:;" > {this.props.intl.formatMessage({id:'tableIndex.columns.Action.Delete'})} </a>,
    //     })
    //
    //     this.props.GET_TABLEINDEX_LIST_ACTION()
    // }

    deleteItem=(data)=>{
        console.log(data)
    }

    render(){
        return (
            <Ctable>
                {this.props}
            </Ctable>
        )
    }
}

export default TableIndex