import React from 'react'
import {Card,Form,Input,Button,Radio,Checkbox,Row,Col,Select} from 'antd'

const { Option } = Select;


@Form.create()
class BaseForm extends React.Component{

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

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
        return(
            <Card>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    {/*input 框封装*/}
                    <Form.Item label="E-mail">
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ],
                            'initialValue':'29@qq.com'
                        })(<Input />)}
                    </Form.Item>
                    {/*单选框*/}
                    <Form.Item label="Radio.Group">
                        {getFieldDecorator('radio-group',{
                            'initialValue':'a'
                        }
                        )(
                            <Radio.Group>
                                <Radio value="a">item 1</Radio>
                                <Radio value="b">item 2</Radio>
                                <Radio value="c">item 3</Radio>
                            </Radio.Group>,
                        )}
                    </Form.Item>

                    {/*多选框*/}

                    <Form.Item label="Checkbox.Group">
                        {getFieldDecorator('checkbox-group', {
                            initialValue: ['A', 'B'],
                        })(
                            <Checkbox.Group style={{ width: '100%' }}>
                                <Row>
                                    <Col span={8}>
                                        <Checkbox value="A">A</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox disabled value="B">
                                            B
                                        </Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="C">C</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="D">D</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="E">E</Checkbox>
                                    </Col>
                                </Row>
                            </Checkbox.Group>,
                        )}
                    </Form.Item>




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