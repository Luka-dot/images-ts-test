import React from 'react';
import { Search } from 'semantic-ui-react'

class SearchBar extends React.Component {

    render() {
        return (
            <div>
                <Search 
                    size="large"
                    placeholder="enter your search"
                />
            </div>
        )
    }
}

export default SearchBar;