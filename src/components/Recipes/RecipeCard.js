import React from 'react';

import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, 
    CardImg, CardFooter, Button,Modal, ModalHeader, ModalBody, 
    ModalFooter, ListGroup, ListGroupItem } from 'reactstrap';

const showLabels = (labels) => {

    const healthLabels = labels.map((label) => {
        return(
            <span className="badge badge-light border border-dark m-1">{label}</span>
        )
    })
    return healthLabels;
}

const RecipeCard =({recipe, key, id}) => {
    
    const { label, image, calories, totalTime, ingredients, healthLabels } = recipe.recipe;

    let steps = [];
    ingredients.map((item) => {
        return steps.push(item.text);
    })
    
    const Poster = image;
    let showPoster;
    if(!Poster){
        showPoster = (<h3 style={{color: 'white'}}>Poster Not Available..</h3>);
    }
    else{
        showPoster = (<CardImg top width="320px" height="240px" src={Poster} alt={label} />)
    }
    
    return (
        <div className="d-flex col-12 col-md-6 col-lg-4 my-2">
            <Card className="flex-fill" style={{background: 'black', color: 'white', 
                border: 'solid #23238E 5px', borderRadius: '25px'}}>
                <CardHeader className="h4">{label}</CardHeader>
                {showPoster}
                <CardBody style={{background: '#111'}}>
                    <CardTitle>{showLabels(healthLabels)}</CardTitle>
                    <CardSubtitle>
                        Calories: {calories}
                        <br />Total Time: {totalTime}
                    </CardSubtitle>
                    </CardBody>
                <CardFooter>
                    <ShowModals data={steps} label="Ingredients" />
                </CardFooter>
            </Card>
        </div>
    );
}

export default RecipeCard;

const showLists = (data) => {
    const steps = (
        <ListGroup>
            {
                data.map((item) => {
                    return (<ListGroupItem className="list-group-item">{item}</ListGroupItem>);
                })
            }
        </ListGroup>
    )

    return steps;
}

class ShowModals extends React.Component{

    state = {
        isModalOpen: false
    }

    toggleModal = (event) => {
        this.setState({isModalOpen: !this.state.isModalOpen});
    }

    render(){

        const { data, label } = this.props;
        return(
            <React.Fragment>
                <Button color="primary" className="mr-2" onClick={this.toggleModal}>
                        Show {label}</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} style={{color: 'black'}}>
                    <ModalHeader toggle={this.toggleModal}>{label}</ModalHeader>
                    <ModalBody>
                        {showLists(data)}
                    </ModalBody>
                    <ModalFooter>
                    <Button color="danger" onClick={this.toggleModal}>Close</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}