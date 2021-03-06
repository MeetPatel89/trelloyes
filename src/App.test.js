import React from 'react';
import ReactDOM from 'react-dom';
import { createRenderer } from 'react-dom/test-utils';
import App from './App';
import renderer from 'react-test-renderer';




describe('App Compoenet', () => {
    test('Component renders without crashing', () => {
        const main = document.createElement('main');
        ReactDOM.render(<App/>, main);
    
        ReactDOM.unmountComponentAtNode(main);
    })

    test('renders the UI as expected', () => {
        const rendered = renderer 
            .create(<App/>)
            .toJSON();
        expect(rendered).toMatchSnapshot();
    });
});

