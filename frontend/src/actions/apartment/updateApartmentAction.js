import {APARTMENTS_TYPE} from "../../constants/apartmentType";
import axiosAction from "../../axios/axiosConfig";

const updateApartmentAction = (data, id) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: APARTMENTS_TYPE.UPDATE_APARTMENT_REQUEST,
        });

        axiosAction({
            method: 'PUT',
            url: `/apartments/${id}`,
            data,
        }).then(result => {
            dispatch({
                type: APARTMENTS_TYPE.UPDATE_APARTMENT_RECEIVED,
                payload: result.data,
            });

            resolve(result);
        }).catch(err => {
            dispatch({
                type: APARTMENTS_TYPE.UPDATE_APARTMENT_FAILED,
            });
            reject(err);
        });

    });
};

export default updateApartmentAction;