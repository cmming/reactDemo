import React from 'react'
import { Card, Form, Input, Button, Radio, Checkbox, Select, DatePicker, Transfer } from 'antd'
import { injectIntl } from 'react-intl';
import moment from 'moment';

const { Option } = Select;

@injectIntl
@Form.create()
class BaseForm extends React.Component {


    // 生成 表单元素
    getFields() {
        // console.log(this.props.intl.formatMessage({id: 'intl.name'},{name: 'joe'}))
        const children = [];
        const { getFieldDecorator } = this.props.form;
        this.props.children.form.item.map((val) => {
            //处理label多语言
            val.label = this.props.intl.formatMessage({ id: this.props.children.modelIndex + ".form." + val.label_key })
            //处理验证消息的多语言
            if (this.props.children.form.rules[val.props] && this.props.children.form.rules[val.props].length > 0) {
                this.props.children.form.rules[val.props].map(v => {
                    //先去通用的validate 语言包中寻找
                    // v.message = this.props.intl.formatMessage({id: this.props.children.modelIndex+".form.rules."+val.props+"."+v.message_key})
                    v.message = this.props.intl.formatMessage({ id: v.message_key })
                    return ''
                })
            }
            // console.log(val)
            let formItemType = val.type
            switch (formItemType) {
                case "Input":
                    children.push(<Form.Item label={val.label} key={val.props}>
                        {getFieldDecorator(val.props, {
                            rules: this.props.children.form.rules[val.props],
                            'initialValue': this.props.children.form.model[val.props]
                        })(<Input allowClear placeholder={val.placeholder ? this.props.intl.formatMessage({ id: this.props.children.modelIndex + ".form." + val.props + ".placeholder" }) : ''} />)}
                    </Form.Item>)
                    break;
                case "Radio":
                    let RadioOptions = []
                    val.options.map(v => {
                        RadioOptions.push(<Radio key={val.props + v.value} value={v.value}>{v.label}</Radio>)
                        return ''
                    })
                    children.push(<Form.Item label={val.label} key={val.props}>
                        {getFieldDecorator(val.props, {
                            rules: this.props.children.form.rules[val.props],
                            'initialValue': this.props.children.form.model[val.props]
                        })(<Radio.Group>
                            {RadioOptions}
                        </Radio.Group>)}
                    </Form.Item>)
                    break;
                case "Checkbox":
                    let CheckboxOptions = []
                    val.options.map(v => {
                        CheckboxOptions.push(<Checkbox key={val.props + v.value} value={v.value}>{v.label}</Checkbox>)
                        return ''
                    })
                    children.push(<Form.Item label={val.label} key={val.props}>
                        {getFieldDecorator(val.props, {
                            rules: this.props.children.form.rules[val.props],
                            'initialValue': this.props.children.form.model[val.props]
                        })(<Checkbox.Group>
                            {CheckboxOptions}
                        </Checkbox.Group>)}
                    </Form.Item>)
                    break;
                case "Select":
                    let SelectOptions = []
                    val.options.map(v => {
                        SelectOptions.push(<Option key={val.props + v.value} value={v.value}>{v.label}</Option>)
                        return ''
                    })
                    children.push(<Form.Item label={val.label} key={val.props}>
                        {getFieldDecorator(val.props, {
                            rules: this.props.children.form.rules[val.props],
                            'initialValue': this.props.children.form.model[val.props]
                        })(<Select placeholder={val.placeholder ? this.props.intl.formatMessage({ id: this.props.children.modelIndex + ".form." + val.props + ".placeholder" }) : ''}>
                            {SelectOptions}
                        </Select>)}
                    </Form.Item>)
                    break;
                case "DatePicker":
                    children.push(<Form.Item label={val.label} key={val.props}>
                        {getFieldDecorator(val.props, {
                            rules: this.props.children.form.rules[val.props],
                            'initialValue': moment(this.props.children.form.model[val.props]!==''?this.props.children.form.model[val.props]:null,val.format?val.format:'YYYY-MM-DD')
                        })(<DatePicker
                            format={val.format ? val.format : "YYYY-MM-DD"}
                            onChange={(date, dateString) => {
                                this.props.children.form.model[val.props] = dateString
                                // console.log(date, dateString)
                            }}
                            showTime={val.showTime ? val.showTime : false}
                            allowClear
                        />)}
                    </Form.Item>)
                    break;

                case "Transfer":
                    children.push(<Form.Item label={val.label} key={val.props}>
                        {getFieldDecorator(val.props, {
                            rules: this.props.children.form.rules[val.props],
                            // 'initialValue': this.props.children.form.model[val.props]
                        })(<Transfer
                            dataSource={val.options}
                            showSearch
                            render={item => item.label}
                            targetKeys={this.props.children.form.model[val.props]}
                            onChange={targetKeys => {
                                this.props.children.form.model[val.props] = targetKeys
                            }}
                        />)}
                    </Form.Item>)
                    break;

                default:
                    break;
            }
            return ''
        })

        return children
    }
    componentDidMount() {
        this.getFields()
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                //将值赋值到 redux 中的表单模型中，然后数据提交
                // console.log(this.props.children.form.model)
                if(this.props.children.edit.state === 'update'){
                    let update_key = this.props.children.edit.update_key?this.props.children.edit.update_key:'id'
                    this.props.children.update(this.props.children.form.model[update_key],this.props.children.form.model)
                    //判断父组件是否为弹框
                    if(this.props.children.edit.mode === 'modal'){
                        this.props.closeModal()
                    }
                }else{
                    this.props.children.store(this.props.children.form.model)
                    //判断父组件是否为弹框
                    if(this.props.children.edit.mode === 'modal'){
                        this.props.closeModal()
                    }
                }
            }
        });
    };

    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            },
        };

        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };

        return (
                <Card>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        {this.getFields()}
                        <Form.Item {...formItemLayoutWithOutLabel}>
                            <Button type="primary" htmlType="submit">
                                Submit
                        </Button>
                        </Form.Item>
                    </Form>
                </Card>
        )
    }

}

export default BaseForm