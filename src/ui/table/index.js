import React from 'react';
import {Table,Card} from 'antd'

class Ctable extends React.Component {



    render(){
        console.log(this.props.model,this.props.model.dataSource.length)
        return (
            <Card>
                <Table bordered components={this.components} columns={this.props.model.columns} dataSource={this.props.model.dataSource} />
            </Card>
        )
    }
}

export default Ctable