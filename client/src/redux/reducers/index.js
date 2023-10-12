import {
    FETCH_POKEMONS,
    GET_BY_NAME,
    GET_BY_DETAIL,
    CLEAR_DETAIL,
    FILTER_CREATED,
    ORDER_BY_NAME,
    ORDER_BY_ATTACK,
    FILTER_BY_TYPE,
    GET_TYPES,
    ORDER_BY_HP  
} from "../actions/index";

const initialState = {allPokemons: [], pokemonsCopy: [], types: [], detail: {}, notFound: false}

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_POKEMONS:
            return {
                ...state, 
                allPokemons : [...action.payload],
                pokemonsCopy : [...action.payload],
                notFound: false,
            }
        case GET_BY_NAME:
            if (action.payload.error) {
                return {
                    ...state,
                    allPokemons: [],
                    notFound: true,
                };
            } else {
                return {
                    ...state,
                    allPokemons: action.payload,
                    notFound: false,
                };
            }
        case GET_BY_DETAIL:
            return {
                ...state,
                detail: [...action.payload]
            }
        case CLEAR_DETAIL:
            return {
                ...state,
                detail: {},
            };

        case GET_TYPES:
            return {
                ...state,
                types: action.payload,
            };
        
        case ORDER_BY_NAME:
            let sortedAll =
                action.payload === "asc"
                ? state.allPokemons.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                    })
                : state.allPokemons.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                    });
            return {
                ...state,
                allPokemons: sortedAll, 
            };

        case ORDER_BY_ATTACK:
            let sortedAttack = [...state.allPokemons];
        
            if (action.payload === "min") {
                sortedAttack.sort((a, b) => a.attack - b.attack);
            }
            if (action.payload === "max") {
                sortedAttack.sort((a, b) => b.attack - a.attack);
            }
            return {
                ...state,
                allPokemons: sortedAttack,
            };

        case FILTER_BY_TYPE:
            let filterType;
            if (action.payload === "All") {
                filterType = state.allPokemons;
            } else {
                filterType = state.allPokemons.filter((e) =>
                e.types.includes(action.payload)
                );
            }
            return {
                ...state,
                allPokemons: filterType,
            };

        case FILTER_CREATED:
            const createdFilter =
                action.payload === "created"
                ? state.allPokemons.filter((e) => e.createdInDb)
                : state.allPokemons.filter((e) => !e.createdInDb);
            return {
                ...state,
                allPokemons: action.payload === "All" ? state.allPokemons : createdFilter,
            };
        
        case ORDER_BY_HP:
            let sortedHp = [...state.allPokemons];

            if (action.payload === "min") {
                sortedHp.sort((a, b) => a.hp - b.hp);
            }
            if (action.payload === "max") {
                sortedHp.sort((a, b) => b.hp - a.hp);
            }
            return {
                ...state,
                allPokemons: sortedHp,
            };

        default:
            return {...state};
    }
}
export default rootReducer;