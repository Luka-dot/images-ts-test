import React from 'react';
import { Header } from 'semantic-ui-react';
import { Button, Icon } from 'semantic-ui-react';

import unsplash from './api/unsplash';
import SearchBar from './components/SearchBar';
import './App.css';


class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (searchText: string): Promise<any> => {
    const response = await unsplash.get('/search/photos', {
      params: { query: searchText },  
    });

    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div className="App">
        <Header data-test="header" size="huge" >
          Images-app
        </Header>
        <SearchBar onSubmit={this.onSearchSubmit} data-test="search-bar-component" />
        Found: {this.state.images.length}
      <div>
        <Button circular color='facebook' icon='facebook' />
        <Button circular color='twitter' icon='twitter' />
        <Button circular color='linkedin' icon='linkedin' />
        <Button circular color='google plus' icon='google plus' />
      </div>
      </div>
    );
  }
}

export default App;
