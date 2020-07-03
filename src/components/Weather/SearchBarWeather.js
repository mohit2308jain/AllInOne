import React from 'react';

import { Input, Button } from 'reactstrap';

class SearchBar extends React.Component{
    state = {
        searchTerm: ''
    }

    onSubmitTerm = (event) => {
        event.preventDefault();
        this.props.onInput(this.state.searchTerm);
        this.setState({searchTerm: ''});
    }

    onInputChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-4">
                        <Input type="text" value={this.state.searchTerm} onChange={(event) => this.onInputChange(event)} />
                        </div>
                        <div className="col-1 pl-0">
                        <Button color="primary" onClick={(event) => this.onSubmitTerm(event)} className="fa fa-search ml-1 font-weight-bold">   </Button>
                        </div>
                    </div>  
                </div>
            </React.Fragment>
        )
    }
}

export default SearchBar;
