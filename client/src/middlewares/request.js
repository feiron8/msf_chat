import axios from "axios"

export default store => next => action => {
    if (action.request) {
        const instance = axios.create({
            url: action.url,
            baseURL: 'http://localhost:3000/api/',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + store.getState().session.token
            },
            method: action.method,
        });

        axios(instance)
            .then((response) => {
                const endAction = {
                    type: action.type + '_END',
                    payload: {
                        response: response
                    }
                };
                next(endAction);
            });
    }
    next(action);
}