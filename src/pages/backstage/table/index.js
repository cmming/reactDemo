import React from 'react';
import {connect} from 'react-redux'
import {Button} from 'antd'
import {injectIntl} from 'react-intl';
import Ctable from '../../../ui/table/index'
import SearchArea from '../../../ui/searchArea/index'
import  { index,destory,initBtn,initData } from '../../../store/modules/tableindex';

@connect(
    state => state.tableindex,
    {index,destory,initBtn,initData}
)
@injectIntl
class TableIndex extends React.Component {

    customAction(scope){
        console.log(scope,'自定义的行为')
    }
    addCustomBtn(scope){
        return <Button type="primary" ghost icon="stop" onClick={()=>{this.customAction(scope)}}> {this.props.intl.formatMessage({id:'tableIndex.columns.Action.'+this.props.table.commonAction.editAction.titleKey})} </Button>;
    }


    render(){
        return (
            <div>
                <SearchArea></SearchArea>
                <Ctable addCustomBtn={scope=>this.addCustomBtn(scope)}>
                    {this.props}
                </Ctable>
            </div>
        )
    }
}

export default TableIndex