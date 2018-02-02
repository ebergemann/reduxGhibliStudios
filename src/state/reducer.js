import { ITEMS_FETCH_DATA_SUCCESS,
ITEMS_IS_LOADING,
ITEMS_HAS_ERRORED,
FILMS_FETCH_DATA_SUCCESS,
} from './types'


class Person {
    constructor(
        id,
        name,
        gender,
        films   
    ) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.films = films;
    }
}

class Film {
    constructor(
        id,
        title,
        description
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
}

const initialState = {
    peopleList : [],
    selectedPerson : undefined,
    filmList : [],
    arePeopleLoaded : false,
    areFilmsLoaded : false
}

const reducer = (state = initialState, action) => {
        switch(action.type){
        case 'ITEMS_FETCH_DATA_SUCCESS':
            let newPeopleList = []
            action.payload.forEach((item) => {
                newPeopleList.push(new Person(item.id, item.name, item.gender, item.films))
            })
            return {...state, peopleList: newPeopleList}
        case 'ITEMS_IS_LOADING':
            return {...state, arePeopleLoaded: action.payload }
        case 'FILMS_FETCH_DATA_SUCCESS':
            let newFilmList = []
            // action.payload.forEach((film) => {
                newFilmList.push(new Film(action.payload.id, action.payload.title, action.payload.description))
            // }
        // )
            return {...state, selectedPerson: true, filmList: newFilmList}
        case 'CLEAR_DESCRIPTION': return {...state, selectedPerson: false, filmList: []}
        default:
            return state
    }
}

export default reducer