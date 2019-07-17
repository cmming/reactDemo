import React from 'react'
import { connect } from 'react-redux'

import BaseForm from '../../../ui/form/index'
import { store } from '../../../store/modules/tableindex';


@connect(
    state => state.tableindex,
    { store }
)
class FormDemo extends React.Component {


    render() {
        return (
            <BaseForm>{this.props}</BaseForm>
        )
    }
}

export default FormDemo