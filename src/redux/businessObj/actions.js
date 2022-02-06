import axios from 'axios';

export const LOAD_BUSINESS_OBJECT_SUCCESS = "LOAD_BUSINESS_OBJECT_SUCCESS";
export const LOAD_BUSINESS_FAILURE = "LOAD_BUSINESS_FAILURE";

export function loadBusinessObjThunk (business) {
    return (dispatch) => {
        let token = localStorage.getItem("token");
            return axios({
                method: 'post',
                url: `${process.env.REACT_APP_API_SERVER}/obj/business`,
                headers: { Authorization: `Bearer ${token}`},
                data: {
                    business: business
                }
            }).then((response) => {
                console.log(response)
                delete response.data.data
                delete response.data.id
                delete response.data.pharmacy
                dispatch({type: LOAD_BUSINESS_OBJECT_SUCCESS, data: response.data})
            }).catch((err) => {
                console.log(err)
                dispatch({type: LOAD_BUSINESS_FAILURE})
            })
    }
}