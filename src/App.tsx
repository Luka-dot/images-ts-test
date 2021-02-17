import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import { Header } from 'semantic-ui-react';
import { Button, Icon } from 'semantic-ui-react';

const App = () => {
  return (
    <div className="App">
      <Header size="huge" >
        Images-app
      </Header>
      <SearchBar />
    <div>
      <Button circular color='facebook' icon='facebook' />
      <Button circular color='twitter' icon='twitter' />
      <Button circular color='linkedin' icon='linkedin' />
      <Button circular color='google plus' icon='google plus' />
    </div>
    </div>
  );
}

export default App;
