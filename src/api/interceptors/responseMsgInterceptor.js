// 根据响应的数据 弹出相对于的消息
import React from 'react'
import { notification } from 'antd';
import httpStatus from '../../config/statusCode'
import commonConfig from '../../config/commonConfig'
// import { FormattedMessage } from 'react-intl';

const openNotificationWithIcon = (type, description) => {
    notification[type]({
        message: '提示',
        // message: 'Notification Title',
        description: description,
        //TODO 处理弹窗的多语言
        // description: <div><FormattedMessage
        //     id="intl.hello"
        // /></div>,
        duration: commonConfig.notificationDuration
    });
};


class ResponseMsgInterceptorHandle extends React.Component {


    static msg(response) {
        // console.log(this.props.intl.formatMessage({id: 'intl.name'},{name: 'joe'}))
        // console.log(this.props)
        let langId = 'response.' + (httpStatus.getMsg(response.status)) + ('.' + response.config.method)
        // console.log(<FormattedMessage
        //     id="intl.hello"
        // />)
        if (response.status === httpStatus.HTTP_CREATED) {
            openNotificationWithIcon('success', langId)
        } else if (response.status === httpStatus.HTTP_NO_CONTENT) {
            openNotificationWithIcon('success', langId)
        }else if(response.status === httpStatus.HTTP_NO_FOUND){
            openNotificationWithIcon('error', response.statusText)
        }
    }


}

export default ResponseMsgInterceptorHandle