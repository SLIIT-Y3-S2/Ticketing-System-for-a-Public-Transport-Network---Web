import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

//render (<App/>,document.getElementById('app'));
const root  = createRoot(document.getElementById('app'));
root.render(<App/>);