import React from 'react';
import { Tag } from 'antd';
import {FormattedMessage,} from 'react-intl';

class filter extends React.Component{


    static changeTableIndexType(data){
        console.log(data)
        let colorArr={
            "-1": "red",
            "0": "gray",
            "1": "green",
        };
        //TODO defaultMessage 没有生效
        data.render=(val,item)=>{ 
            let text = <FormattedMessage
                        id={"tableIndex.columns."+data.dataIndex+"."+val}  defaultMessage="filter.unknow"
                        />
            let color = colorArr[val]?colorArr[val]:"red"
             return <Tag color={color}>{text}</Tag>
            }
    }
}


export default filter