import {USERS_TYPE} from "../../constants/userType";
import axiosAction from "../../axios/axiosConfig";

const updateUserAction = (data, id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: USERS_TYPE.UPDATE_USER_REQUEST,
        });

        axiosAction({
            method: 'PUT',
            url: `/users/${id}`,
            data,
        }).then(result => {
            dispatch({
                type: USERS_TYPE.UPDATE_USER_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: USERS_TYPE.UPDATE_USER_FAILED,
            });
            reject(err);
        });

    });
};

export default updateUserAction;