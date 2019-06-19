import React from "react";
import { Card, Form, Row, Col, Input, Button, Icon, Radio, Checkbox, Select, DatePicker, Transfer } from 'antd'
import { injectIntl } from 'react-intl';

const { Option } = Select;

@injectIntl
@Form.create()
class SearchArea extends React.Component {

    state = {
        expand: false,
    };

    componentWillMount(){
        this.props.children.searchArea.model = this.props.children.table.searchData
    }

    getFields() {
        // console.log(this.props.intl.formatMessage({id: 'intl.name'},{name: 'joe'}))
        const children = [];
        const { getFieldDecorator } = this.props.form;
        const count = this.state.expand ? this.props.children.searchArea.item.length : 3;
        this.props.children.searchArea.item.map((val, i) => {
            //处理label多语言
            // console.log(this.props.children)
            val.label = this.props.intl.formatMessage({ id: this.props.children.modelIndex + ".searchArea." + val.label_key })
            //处理验证消息的多语言
            if (this.props.children.searchArea.rules[val.props] && this.props.children.searchArea.rules[val.props].length > 0) {
                this.props.children.searchArea.rules[val.props].map(v => {
                    //先去通用的validate 语言包中寻找
                    // v.message = this.props.intl.formatMessage({id: this.props.children.modelIndex+".searchArea.rules."+val.props+"."+v.message_key})
                    v.message = this.props.intl.formatMessage({ id: v.message_key })
                    return ''
                })
            }
            // console.log(val)
            let formItemType = val.type
            switch (formItemType) {
                case "Input":
                    children.push(<Col xs={{ span: 24 }} lg={{ span: 8 }} key={i} style={{ display: i < count ? 'block' : 'none' }}><Form.Item label={val.label} key={val.props}>
                        {getFieldDecorator(val.props, {
                            rules: this.props.children.searchArea.rules[val.props],
                            'initialValue': this.props.children.searchArea.model[val.props]
                        })(<Input allowClear placeholder={val.placeholder ? this.props.intl.formatMessage({ id: this.props.children.modelIndex + ".searchArea." + val.props + ".placeholder" }) : ''} />)}
                    </Form.Item></Col>)
                    break;
                case "Radio":
                    let RadioOptions = []
                    val.options.map(v => {
                        RadioOptions.push(<Radio key={val.props + v.value} value={v.value}>{v.label}</Radio>)
                        return ''
                    })
                    children.push(<Col xs={{ span: 24 }} lg={{ span: 8 }} key={i} style={{ display: i < count ? 'block' : 'none' }}><Form.Item label={val.label} key={val.props}>
                        {getFieldDecorator(val.props, {
                            rules: this.props.children.searchArea.rules[val.props],
                            'initialValue': this.props.children.searchArea.model[val.props]
                        })(<Radio.Group>
                            {RadioOptions}
                        </Radio.Group>)}
                    </Form.Item></Col>)
                    break;
                case "Checkbox":
                    let CheckboxOptions = []
                    val.options.map(v => {
                        CheckboxOptions.push(<Checkbox key={val.props + v.value} value={v.value}>{v.label}</Checkbox>)
                        return ''
                    })
                    children.push(<Col xs={{ span: 24 }} lg={{ span: 8 }} key={i} style={{ display: i < count ? 'block' : 'none' }}><Form.Item label={val.label} key={val.props}>
                        {getFieldDecorator(val.props, {
                            rules: this.props.children.searchArea.rules[val.props],
                            'initialValue': this.props.children.searchArea.model[val.props]
                        })(<Checkbox.Group>
                            {CheckboxOptions}
                        </Checkbox.Group>)}
                    </Form.Item></Col>)
                    break;
                case "Select":
                    let SelectOptions = []
                    val.options.map(v => {
                        SelectOptions.push(<Option key={val.props + v.value} value={v.value}>{v.label}</Option>)
                        return ''
                    })
                    children.push(<Col xs={{ span: 24 }} lg={{ span: 8 }} key={i} style={{ display: i < count ? 'block' : 'none' }}><Form.Item label={val.label} key={val.props}>
                        {getFieldDecorator(val.props, {
                            rules: this.props.children.searchArea.rules[val.props],
                            'initialValue': this.props.children.searchArea.model[val.props]
                        })(<Select placeholder={val.placeholder ? this.props.intl.formatMessage({ id: this.props.children.modelIndex + ".searchArea." + val.props + ".placeholder" }) : ''}>
                            {SelectOptions}
                        </Select>)}
                    </Form.Item></Col>)
                    break;
                case "DatePicker":
                    children.push(<Col xs={{ span: 24 }} lg={{ span: 8 }} key={i} style={{ display: i < count ? 'block' : 'none' }}><Form.Item label={val.label} key={val.props}>
                        {getFieldDecorator(val.props, {
                            rules: this.props.children.searchArea.rules[val.props],
                            // 'initialValue': this.props.children.searchArea.model[val.props]
                        })(<DatePicker
                            format={val.format ? val.format : "YYYY-MM-DD"}
                            onChange={(date, dateString) => {
                                this.props.children.searchArea.model[val.props] = dateString
                                console.log(date, dateString)
                            }}
                            showTime={val.showTime ? val.showTime : false}
                            allowClear
                        />)}
                    </Form.Item></Col>)
                    break;

                case "Transfer":
                    children.push(<Col xs={{ span: 24 }} lg={{ span: 8 }} key={i} style={{ display: i < count ? 'block' : 'none' }}><Form.Item label={val.label} key={val.props}>
                        {getFieldDecorator(val.props, {
                            rules: this.props.children.searchArea.rules[val.props],
                            // 'initialValue': this.props.children.searchArea.model[val.props]
                        })(<Transfer
                            dataSource={val.options}
                            showSearch
                            render={item => item.label}
                            targetKeys={this.props.children.searchArea.model[val.props]}
                            onChange={targetKeys => {
                                this.props.children.searchArea.model[val.props] = targetKeys
                            }}
                        />)}
                    </Form.Item></Col>)
                    break;

                default:
                    break;
            }
            return ''
        })

        return children
    }

    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            values.datePicker = values.datePicker?values.datePicker.format('YYYY-MM-DD'):''
            let searchData = { ...this.props.children.table.searchData, ...values }
            this.props.children.setSearchData(searchData)
            console.log(searchData, 'Received values of form: ', values);
            setTimeout(() => { this.props.children.index(this.props.children.table.searchData) })
            // this.props.children.index({})
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
    };

    render() {
        return (
            <Card className="searchArea">
                <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                    <Row gutter={24}>{this.getFields()}</Row>
                    <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            <Button type="primary" htmlType="submit">
                                Search
                            </Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                                Clear
                            </Button>
                            <span style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                                Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
                            </span>
                        </Col>
                    </Row>
                </Form>
            </Card>
        )
    }
}

export default SearchArea