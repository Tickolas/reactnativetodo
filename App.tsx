import React from 'react';
import Main from "./src/Main";
import store from "./src/store/store";
import {Provider} from 'react-redux';

const App = ({}) => {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    )
};

export default App;
