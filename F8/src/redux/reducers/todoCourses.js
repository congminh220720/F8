import coursesApi from '../../api/coursesApi'
import { DEFAULT_KEY, generateCacheTTL, checkCacheValid } from 'redux-cache';
const GET_COURSES = 'GET_COURSES';


const initialState = {
    [DEFAULT_KEY]: null,
    allCourses: null,
}
export const getAllCourses = async (dispatch, getState) => {
    const isCacheValid = checkCacheValid(getState,'courses')
    if(isCacheValid){
        return null;
    }
    let courses = [];
    try {
        const response = await coursesApi.getAll()
        if(response){ 
            courses = response.data;
            dispatch({
                type: GET_COURSES,
                payload: courses,
              })
        }
    } catch (error) {    
        console.log('Fail to fetch courses list:',error);
    }
}

const coursesReducer = (state = initialState , action ) => {
    switch(action.type){
        case GET_COURSES: {
            return {
              ...state,
              [DEFAULT_KEY]: generateCacheTTL(),
              allCourses: [...action.payload],
            }
          }

        default: 
            return state;
    }
}



export default coursesReducer;