import React from 'react';

import { Form, Input } from 'reactstrap';

class SearchBar extends React.Component{
    state = {
        searchTerm: ''
    }

    onSubmitTerm = (event) => {
        event.preventDefault();
        this.props.onInput(this.state.searchTerm);
    }

    onInputChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <Form onSubmit={(event) => this.onSubmitTerm(event)}>
                        <Input type="text" onChange={(event) => this.onInputChange(event)} />
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}

export default SearchBar;
