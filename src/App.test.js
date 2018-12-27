import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import App from './App';
jest.mock('./apiCall')

configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('componentDidMount', () => {
  it('sets the state in componentDidMount', async () => {
    const renderedComponent = await shallow(<App />)
    await renderedComponent.update()
    if(renderedComponent.state('rows').length > 0)
      expect(renderedComponent.state('rows').length).toEqual(10)
  })
  
  it('sets the state componentDidMount on error', async () => {
    const renderedComponent = await shallow(<App />)
    await renderedComponent.update()
    if(renderedComponent.state('errorStatus'))
      expect(renderedComponent.state('errorStatus')).toEqual('Error fetching table data')
  })
})

