import React from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import { Button, Icon } from 'semantic-ui-react';

import SearchBar from './components/SearchBar';
import './App.css';

interface getPicturesInterface {
  pictures: []
}

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (searchText: string): Promise<any> => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: searchText },
      headers: {
        Authorization: 'Client-ID mF9_l8sqk4yVoNy7VWHUp5_0uYozIyt__llA-QGq4XA'
      }
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
