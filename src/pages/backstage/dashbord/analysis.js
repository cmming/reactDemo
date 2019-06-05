import React from 'react'
import {FormattedMessage,injectIntl} from 'react-intl';
import {Pagination} from 'antd'

@injectIntl
class AnalysisDashborad extends React.Component{

    render() {
        // const {intl} = this.props;
        //
        // let tmp = intl.formatMessage({id: 'intl.name'},{name: 'joe'});

        return  <div>
            this is AnalysisDashborad
            <FormattedMessage
                id="intl.hello"  //这个id对应的就是zh-CN.js中的配置的键值, 该组件的值就是键值对应的value
            />
            <FormattedMessage
                id="intl.name"  //这个id对应的就是zh-CN.js中的配置的键值, 该组件的值就是键值对应的value, 同时会用下面values提供的name对应的值替换掉zh-CN.js中对应的站位name
                values={{name: '变量'}}
            />
            {this.props.intl.formatMessage({id: 'intl.name'},{name: 'joe'})}

            <Pagination defaultCurrent={1} total={50} showSizeChanger />
        </div>
    }
}

export default AnalysisDashborad