import React from 'react';

import Locales from './locales/index'
import Router from './router/index'


class App extends React.Component {

    render() {
        return (
            <Locales>
                <Router />
            </Locales>
        )
    }
}

export default App