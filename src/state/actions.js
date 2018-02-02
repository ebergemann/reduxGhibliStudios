import axios from 'axios';
import {ITEMS_HAS_ERRORED,ITEMS_IS_LOADING,ITEMS_FETCH_DATA_SUCCESS, FILMS_FETCH_DATA_SUCCESS, CLEAR_DESCRIPTION} from './types';

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        payload: bool
    };
}

export function itemsFetchDataSuccess(items) {
    console.log("inside itemsFetchDataSuccess")
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        payload: items
    };
}

export function filmsFetchDataSuccess(items) {
    console.log("inside filmsFetchDataSuccess")
    return {
        type: 'FILMS_FETCH_DATA_SUCCESS',
        payload: items
    };
}

export function itemsFetchData() {
    return (dispatch, getState, api) => {
        console.log(api);
        dispatch(itemsIsLoading(false));
        
        axios.get(api + '/people')
            .then((response) => {
                
                // if (!response.ok) {
                //     throw Error(response.statusText);
                // }
                dispatch(itemsFetchDataSuccess(response.data))
                
                // return response;
            })
            .then(dispatch(itemsIsLoading(true)))
            // .then((items) => dispatch(itemsFetchDataSuccess(items)))
            //.catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function selectPerson(films){
    return (dispatch, getState, api) => {
        console.log(films);
        // dispatch(filmIsLoading(false));
        
        axios.get(films[0])
            .then((response) => {
                console.log("In select person")
                console.log(response.data)
                // if (!response.ok) {
                //     throw Error(response.statusText);
                // }
                dispatch(filmsFetchDataSuccess(response.data))
                
                // return response;
            })
        //     .then(dispatch(itemsIsLoading(true)))
        //     // .then((items) => dispatch(itemsFetchDataSuccess(items)))
        //     //.catch(() => dispatch(itemsHasErrored(true)));
    };
}