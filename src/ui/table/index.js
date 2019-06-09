import React from 'react';
import {Table,Card,Modal, Skeleton} from 'antd'
// import {injectIntl} from 'react-intl';


const confirm = Modal.confirm;

// @injectIntl
class Ctable extends React.Component {


    deleteItem=(data)=>{
        console.log(data)
        this.showDeleteConfirm(data)
    }

    editItem=(data)=>{
        console.log(data)
    }

    showDeleteConfirm=(data)=> {
        let self = this
        confirm({
            title: this.props.children.intl.formatMessage({id:"tableAction.delete.confirm.title"}),
            content: this.props.children.intl.formatMessage({id:"tableAction.delete.confirm.content"}),
            okText: this.props.children.intl.formatMessage({id:"tableAction.delete.confirm.okText"}),
            okType: 'danger',
            cancelText: this.props.children.intl.formatMessage({id:"tableAction.delete.confirm.cancelText"}),
            onOk() {
                //发送删除的请求
                self.props.children.destory(data.key)

            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    renderAction=(scope)=>{
        let deleteBtn,editBtn;
        if(this.props.children.table.commonAction.deleteAction.show){
            deleteBtn=<a href = "javascript:;" onClick={()=>{this.deleteItem(scope)}}> {this.props.children.intl.formatMessage({id:'tableIndex.columns.Action.'+this.props.children.table.commonAction.deleteAction.titleKey})} </a>;
        }

        if(this.props.children.table.commonAction.editAction.show){
            editBtn=<a href = "javascript:;" onClick={()=>{this.editItem(scope)}}> {this.props.children.intl.formatMessage({id:'tableIndex.columns.Action.'+this.props.children.table.commonAction.editAction.titleKey})} </a>;
        }


        return (<div>
                {deleteBtn}
                {editBtn}
            </div>
            )
    }

    columsFilter(data,filterName){
        console.log(data,filterName)
        return 99
    }

    componentWillMount(){

        // console.log(this.props)
        this.props.children.initBtn({
            titleKey: 'Action',
            key: 'action',
            render: (scope)=>{ return this.renderAction(scope)},
        })

        this.props.children.index()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.children.table.columns.map(val=>{
            val['title'] = this.props.children.intl.formatMessage({id: this.props.children.table.index+'.columns.'+val.titleKey})
            // if(val['filter']){
            //     this.props.children.table.dataSource.map(v=>{
            //         v[val['dataIndex']] = this.columsFilter(v,val['filter'])
            //     })
            // }
        })
    }


    render(){
        return (

                <Card title={"基础表格"}>
                        <Table bordered components={this.components} columns={this.props.children.table.columns} dataSource={this.props.children.table.dataSource} pagination={false}/>
                </Card>

        )
    }
}

export default Ctable