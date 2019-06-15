import axios from "axios"

export default store => next => action => {
    console.log(action);

    if (action.request) {
        axios({
            url: action.url,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + store.getState().session.token
            },
            method: action.method,
            data: action.payload.data
        })
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