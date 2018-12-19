import React from 'react';
import ReactDOM from 'react-dom';
import { Alberto } from './components/Alberto';
import { Provider } from "react-redux";
import { store } from './redux/store';

const App = () => {
    return (
        <div>
            <Alberto/>
            <Alberto/>
            <Alberto/>
        </div>
    )
}

const AppWithStore = () => <Provider store={store}><App/></Provider>

ReactDOM.render(<AppWithStore/>, document.getElementById('root'));