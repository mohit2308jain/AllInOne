import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';

import { fetchRecipesWithDetails } from '../../redux/Recipes/ActionCreater';

import SearchBar from '../SearchBar';
import RecipeCard from './RecipeCard';

const mapStateToProps = (state) => {
    return {
        recipelist: state.recipelist
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchrecipes: (term) => {
            return dispatch(fetchRecipesWithDetails(term));
        }
    })
}

class RecipeList extends React.Component{

    onSearch = (term) => {
        this.props.fetchrecipes(term);
    }

    render(){
        //console.log(this.props.recipelist.recipes);
        const { isLoading, errMess, searchTerm, recipes } = this.props.recipelist;
        let showCards;
        if(!searchTerm){
            showCards = <h1>Please Enter Dish Name..</h1>
        }
        else if(isLoading){
            showCards = <div>
                <Spinner style={{ width: '5rem', height: '5rem' }} color="danger" type="grow" />
                <h1>Loading...</h1>
                </div>
        }
        else if(errMess){
            showCards = <h3>{errMess}</h3>
        }
        else{
            const recipe = recipes.map((recipe, index) => {
                return (
                    <RecipeCard recipe={recipe} key={index} id={index} />
                )
            })
            showCards = (<div className="row border border-white">
                {recipe}
            </div>)
        } 
        
        return(
            <React.Fragment>
                <div className="container">
                    <SearchBar onInput={(term) => this.onSearch(term)} />
                    <hr className="border border-white"/>
                    {showCards} 
                </div>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);