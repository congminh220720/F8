import videoFeatureApi from '../../api/videoFeatureApi'
import { DEFAULT_KEY, generateCacheTTL, checkCacheValid } from 'redux-cache';
const GET_HOT_VIDEO = 'GET_HOT_VIDEO';


const initialState = {
    [DEFAULT_KEY]: null,
    listHotVideo: null,
}
export const getHotVideo = async (dispatch, getState) => {
    const isCacheValid = checkCacheValid(getState,'hotVideo')
    if(isCacheValid){
        return null;
    }
    let hotVideo = [];
    try {
        const response = await videoFeatureApi.getAllHotVideo()
        if(response){ 
            hotVideo = response.data;
            dispatch({
                type: GET_HOT_VIDEO,
                payload: hotVideo,
              })
        }
    } catch (error) {    
        console.log('Fail to fetch hotVideo list:',error);
    }
}

const coursesReducer = (state = initialState , action ) => {
    switch(action.type){
        case GET_HOT_VIDEO: {
            return {
              ...state,
              [DEFAULT_KEY]: generateCacheTTL(),
              listHotVideo: [...action.payload],
            }
          }

        default: 
            return state;
    }
}



export default coursesReducer;