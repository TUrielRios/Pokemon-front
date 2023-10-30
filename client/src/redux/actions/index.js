import axios from 'axios';
export const FETCH_POKEMONS = 'FETCH_POKEMONS'
export const GET_BY_NAME = 'GET_BY_NAME'
export const GET_BY_DETAIL = "GET_BY_DETAIL"
export const CLEAR_DETAIL = 'CLEAR_DETAIL'
export const GET_TYPES = "GET_TYPES";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const ORDER_BY_HP = "ORDER_BY_HP";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";

export const fetchPokemons = () => {
    return async (dispatch) => {
        const response = await axios('https://wiki-wlst.onrender.com/pokemons')
        return dispatch({
            type :  FETCH_POKEMONS,
            payload :response.data
        })
    }
}

export const getByName = (name) => {
    return async (dispatch) => {
        try {
            const response = await axios(`https://wiki-wlst.onrender.com/pokemons/?name=${name}`)
            return dispatch ({
                type: GET_BY_NAME ,
                payload: response.data
            })
        } catch (error) {
            console.error('Error al obtener el Pokémon:', error);
        }

    }
}

export const getByDetail = (id) => {
    return async (dispatch) => {
        try {
            const response= await axios (`https://wiki-wlst.onrender.com/pokemons/${id}`)
            return dispatch( {
                type: GET_BY_DETAIL,
                payload: response.data
            }) 
        } catch (error) {
            console.error('Error al obtener el Pokémon:', error);
        }

    }
}

export const clearDetail = () => {
    return {
        type: CLEAR_DETAIL,
    };
};

export const getTypes = () => {
    return async (dispatch) => {
        let info = await axios.get("https://wiki-wlst.onrender.com/types", {});
        return dispatch({ type: GET_TYPES, payload: info.data });
    };
};

export const filterCreated = (payload) => {
    return {
        type: FILTER_CREATED,
        payload,
    };
};

export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload,
    };
};

export const orderByAttack = (payload) => {
    return {
        type: ORDER_BY_ATTACK,
        payload,
    };
};

export const filterByType = (payload) => {
    return {
        type: FILTER_BY_TYPE,
        payload,
    };
};

export const orderByHp = (payload) => {
    return {
        type: ORDER_BY_HP,
        payload,
    };
};

export const createPokemons = (info) => {
    return async () => {
        try {
            const response = await axios.post(
            "https://wiki-wlst.onrender.com/pokemons/create",
            info
            );
            //console.log(response);
            alert("Pokemon created, Good job!");
            return response;
        } catch (error) {
            console.error(error);
            alert(error.response.data.error);
        }
    };
};
