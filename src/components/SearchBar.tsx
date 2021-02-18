import React from 'react';
import { Form, Container, Label } from 'semantic-ui-react'
import './SearchBar-styles.css';

interface onSubmitProp {
    onSubmit(term: string): void;
  }

class SearchBar extends React.Component<onSubmitProp> {
    state = { searchText: '' };

    onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        this.props.onSubmit(this.state.searchText)
    }

    render() {
        return (
            <div className="search-container" data-test="search-bar-container">
                <Label 
                    pointing='below' 
                    color='teal' 
                    size="large"
                >
                Image Search
                </Label>
                <Form 
                    size="large"
                    placeholder="enter your search" 
                    onSubmit={this.onFormSubmit}   
                >
                    <input 
                        placeholder="enter your search" 
                        onChange={e => this.setState({ searchText: e.target.value})} 
                        type="text"
                        value={this.state.searchText}
                        data-test="input-area"
                    />
                </Form>
            </div>
        )
    }
};

export default SearchBar;