import React from 'react';
import { Form, Container, Label } from 'semantic-ui-react'
import './SearchBar-styles.css';

class SearchBar extends React.Component {
    state = { searchText: String };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => void (
        console.log(e.target.value),
        this.setState({ searchText: e.target.value})
    );

    render() {
        return (
            <div className="search-container">
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
                >
                    <input 
                        placeholder="enter your search" 
                        onChange={this.handleChange} 
                        type="text"
                    />
                </Form>
            </div>
        )
    }
}

export default SearchBar;