// 根据响应的数据 弹出相对于的消息
import React from 'react'
import { notification } from 'antd';
import httpStatus from '../../config/statusCode'
import commonConfig from '../../config/commonConfig'
import locales from '../../locales/index'

const openNotificationWithIcon = (type,description) => {
    // console.log(description)
    notification[type]({
        message: 'Notification Title',
        //TODO 处理弹窗的多语言
        description: description,
        duration:commonConfig.notificationDuration
    });
};

class responseMsgInterceptorHandle extends React.Component {


    static msg(response) {

        console.log(locales)
        let langId = 'response' + ('.' + httpStatus.getMsg(response.status)) + ('.' + response.config.method)
        // console.log(response, langId,<FormattedMessage
        //     id={langId}  
        // />)
        if (response.status === httpStatus.HTTP_CREATED) {
            openNotificationWithIcon('success',langId)
        } else if (response.status === httpStatus.HTTP_NO_CONTENT) {
            openNotificationWithIcon('success',langId)
        }
    }

    

}

export default responseMsgInterceptorHandle