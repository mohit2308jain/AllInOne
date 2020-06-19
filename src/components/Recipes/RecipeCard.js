import React from 'react';

import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardImg, CardFooter, Button } from 'reactstrap';

const showLabels = (labels) => {

    const healthLabels = labels.map((label) => {
        return(
            <span className="badge badge-light border border-dark m-1">{label}</span>
        )
    })
    return healthLabels;
}

const RecipeCard =({recipe, key, id}) => {
    
    const { label, image, calories, totalTime, totalWeight, ingredients, ingredientLines, healthLabels } = recipe.recipe;
    const Poster = image;
    let showPoster;
    if(!Poster){
        showPoster = (<h3 style={{color: 'white'}}>Poster Not Available..</h3>);
    }
    else{
        showPoster = (<CardImg top width="320px" height="240px" src={Poster} alt={label} />)
    }
    //console.log("print: ",authors);
    
    return (
        <div className="col-12 col-md-6 col-lg-4 my-2">
            <Card style={{background: 'black', color: 'white', border: 'solid blue 5px'}}>
                <CardHeader className="h1">{label}</CardHeader>
                {showPoster}
                <CardBody>
                    <CardTitle>{showLabels(healthLabels)}</CardTitle>
                    <CardSubtitle>
                        Calries: {calories}
                        <br />Total Time: {totalTime}
                        <br />Total Weight: {totalWeight}
                    </CardSubtitle>
                    </CardBody>
                <CardFooter>
                    </CardFooter>
            </Card>
        </div>
    );
}

export default RecipeCard;