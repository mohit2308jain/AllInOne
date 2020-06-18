import React from 'react';

import { Form, Input, Button } from 'reactstrap';

class SearchBar extends React.Component{
    state = {
        searchTerm: ''
    }

    onSubmitTerm = (event) => {
        this.props.onInput(this.state.searchTerm);
    }

    onInputChange = (event) => {
        console.log(event.target.value)
        this.setState({ searchTerm: event.target.value });
    }

    render(){
        return(
            <React.Fragment>
                <Input type="text" onChange={(event) => this.onInputChange(event)} />
                <Button type="submit" onClick={(event) => this.onSubmitTerm(event)} />
            </React.Fragment>
        )
    }
}

export default SearchBar;
