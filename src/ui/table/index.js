import React from 'react';
import {Table, Card, Modal, Button, Pagination} from 'antd'
import filter from '../../filter/index'
import {injectIntl} from 'react-intl';
import BaseForm from '@/ui/form'


const confirm = Modal.confirm;

@injectIntl
class Ctable extends React.Component {

    state = {editModalVisible: false,dataModalTitle:this.props.intl.formatMessage({id:"edit.add"})+this.props.intl.formatMessage({id:this.props.children.modelIndex})};


    deleteItem = (data) => {
        console.log(this.props.children.form.model.email)
        this.props.children.form.model = {...this.props.children.form.model,email:"999"}
        this.props.children.form.model = {}
        this.showDeleteConfirm(data)
    }

    editItem = (data) => {
        // console.log(data)
        const eidtMode = this.props.children.edit.mode === 'modal'
        if (eidtMode) {
            this.changeEditModalStatus(true)
            this.setState({
                dataModalTitle: this.props.intl.formatMessage({id:"edit.update"})+this.props.intl.formatMessage({id:this.props.children.modelIndex})
            });
            //修改数据模型中的数据
            let update_key = this.props.children.edit.update_key?this.props.children.edit.update_key:'id'
            this.props.children.detail(data[update_key])

            this.props.children.edit.state = 'update'
        }
    }


    changeEditModalStatus= (status) => {
        this.setState({
            editModalVisible: status,
        });
    }

    showDeleteConfirm = (data) => {
        let self = this
        confirm({
            title: this.props.intl.formatMessage({id: "tableAction.delete.confirm.title"}),
            content: this.props.intl.formatMessage({id: "tableAction.delete.confirm.content"}),
            okText: this.props.intl.formatMessage({id: "tableAction.delete.confirm.okText"}),
            okType: 'danger',
            cancelText: this.props.intl.formatMessage({id: "tableAction.delete.confirm.cancelText"}),
            onOk() {
                //发送删除的请求
                let delete_key = self.props.children.edit.update_key?self.props.children.edit.update_key:'id'
                self.props.children.destory(data[delete_key], self.props.children.table.searchData)

            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    renderAction = (scope) => {
        let deleteBtn, editBtn;
        if (this.props.children.table.commonAction.deleteAction.show) {
            deleteBtn = <Button type="danger" ghost icon="delete" onClick={() => {
                this.deleteItem(scope)
            }}> {this.props.intl.formatMessage({id: 'tableIndex.columns.Action.' + this.props.children.table.commonAction.deleteAction.titleKey})} </Button>;
        }

        if (this.props.children.table.commonAction.editAction.show) {
            editBtn = <Button type="primary" ghost icon="edit" onClick={() => {
                this.editItem(scope)
            }}> {this.props.intl.formatMessage({id: 'tableIndex.columns.Action.' + this.props.children.table.commonAction.editAction.titleKey})} </Button>;
        }
        // this.props.addCustomBtn()
        let addCustomBtnHtml = '';
        if (typeof this.props.addCustomBtn === "function") {
            addCustomBtnHtml = this.props.addCustomBtn(scope)
        }


        return (<div className="tableAction">
                {deleteBtn}
                {editBtn}
                {addCustomBtnHtml}
            </div>
        )
    }

    componentWillMount() {

        // console.log(this.props)
        this.props.children.initBtn({
            titleKey: 'Action',
            key: 'action',
            render: (scope) => {
                return this.renderAction(scope)
            },
        })

        this.props.children.table.columns.map(val => {
            switch (val.filter) {
                case 'changeTableIndexType':
                    filter.changeTableIndexType(val)
                    break;
                default:
                    return ''
            }
            return ''
        })

        this.props.children.index(this.props.children.table.searchData)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.children.table.columns.map(val => {
            val['title'] = this.props.intl.formatMessage({id: this.props.children.table.modelIndex + '.columns.' + val.titleKey})
            return ''
        })
    }

    onChange = (page, page_size) => {
        let searchData = {...this.props.children.table.searchData, page: page, page_size: page_size}
        console.log(searchData)
        //修改请求参数
        this.props.children.setSearchData(searchData)
        //发送列表 将异步操作 变成同步
        // this.props.children.modelIndex(this.props.children.table.searchData)
        //TODO 这种操作不太好 不知如何修改 临时方案
        setTimeout(() => {
            this.props.children.index(this.props.children.table.searchData)
        })
    }

    onShowSizeChange = (current, page_size) => {
        let searchData = {...this.props.children.table.searchData, page: current, page_size: page_size}
        //修改请求参数
        this.props.children.setSearchData(searchData)
        //发送列表 将异步操作 变成同步
        //TODO 这种操作不太好 不知如何修改 临时方案
        setTimeout(() => {
            this.props.children.index(this.props.children.table.searchData)
        })

    }

    showTotal = (total) => {
        return `Total ${total} items`;
    }


    render() {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
            },
        }
        let tableState = this.props.children.table.state
        if (this.props.children.table.state.hasRowSelection) {
            tableState = {...this.props.children.table.state, rowSelection: rowSelection}
        }
        return (
            <Card>
                <Table {...tableState} columns={this.props.children.table.columns}
                       dataSource={this.props.children.table.dataSource.data} pagination={false} rowKey={this.props.children.edit.row_key} />

                <Pagination
                    className="table-pagination"
                    showSizeChanger
                    showQuickJumper
                    //TODO 分页的当前页数 应该使用后台的current_page
                    // defaultCurrent={this.props.children.table.dataSource.current_page}
                    defaultCurrent={this.props.children.table.searchData.page}
                    defaultPageSize={this.props.children.table.searchData.page_size}
                    total={this.props.children.table.dataSource.total}
                    showTotal={(total) => this.showTotal(total)}
                    onChange={(pageNumber, pageSize) => this.onChange(pageNumber, pageSize)}
                    onShowSizeChange={(current, size) => this.onShowSizeChange(current, size)}/>

                <Modal
                    title={this.state.dataModalTitle}
                    visible={this.state.editModalVisible}
                    footer={null}
                    wrapClassName="tableEditFormDialog"
                    onCancel={() => this.changeEditModalStatus(false)}
                >
                    <BaseForm closeModal={() => this.changeEditModalStatus(false)}>{this.props.children}</BaseForm>
                </Modal>
            </Card>

        )
    }
}

export default Ctable