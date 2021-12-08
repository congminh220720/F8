import slideShowApi from '../../api/slideShowApi'
import { DEFAULT_KEY, generateCacheTTL, checkCacheValid } from 'redux-cache';
const GET_SLIDESHOW = 'GET_SLIDESHOW';

const initialState = {
    [DEFAULT_KEY]: null,
    ListSlideShow: null,
}
export const getSlideShow = async (dispatch, getState) => {
    const isCacheValid = checkCacheValid(getState,'slideshow')
    if(isCacheValid){
        return null;
    }
    let slideShow = [];
    try {
        const response = await slideShowApi.getAllSlideShow()
        if(response){ 
            slideShow = response.data;
            dispatch({
                type: GET_SLIDESHOW,
                payload: slideShow,
              })
        }
    } catch (error) {    
        console.log('Fail to fetch courses list:',error);
    }
}

const coursesReducer = (state = initialState , action ) => {
    switch(action.type){
        case GET_SLIDESHOW: {
            return {
              ...state,
              [DEFAULT_KEY]: generateCacheTTL(),
              ListSlideShow: [...action.payload],
            }
          }
        default: 
            return state;
    }
}



export default coursesReducer;