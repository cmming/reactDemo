import React from 'react'
import { Card, Form, Input, Button, Radio, Checkbox, Select, DatePicker, Transfer } from 'antd'
import { injectIntl } from 'react-intl';

const { Option } = Select;


@Form.create()
@injectIntl
class BaseForm extends React.Component {


    // 生成 表单元素
    getFields() {
        // console.log(this.props.children.form)
        const children = [];
        const { getFieldDecorator } = this.props.form;
        this.props.children.form.item.map((val) => {
            // console.log(val)
            let formItemType = val.type
            switch (formItemType) {
                case "Input":
                    children.push(<Form.Item label={val.label} key={val.props}>
                        {getFieldDecorator(val.props, {
                            rules: this.props.children.form.rules[val.props],
                            'initialValue': this.props.children.form.model[val.props]
                        })(<Input allowClear />)}
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
                        })(<Select>
                            {SelectOptions}
                        </Select>)}
                    </Form.Item>)
                    break;
                case "DatePicker":
                    children.push(<Form.Item label={val.label} key={val.props}>
                        {getFieldDecorator(val.props, {
                            rules: this.props.children.form.rules[val.props],
                            // 'initialValue': this.props.children.form.model[val.props]
                        })(<DatePicker
                            allowClear
                        />)}
                    </Form.Item>)
                    break;
                case "DatePicker":
                    children.push(<Form.Item label={val.label} key={val.props}>
                        {getFieldDecorator(val.props, {
                            rules: this.props.children.form.rules[val.props],
                            // 'initialValue': this.props.children.form.model[val.props]
                        })(<DatePicker
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
                // console.log(this.props.children)
                this.props.children.store(values)
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

        // let formList = [{type:'input'}]
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