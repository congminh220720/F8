import { DEFAULT_KEY, generateCacheTTL, checkCacheValid } from 'redux-cache';
import questionsApi from '../../api/questionsApi';

const PAGE_HOT_QUESTION ='best';
const GET_QUESTION_HOT = 'GET_QUESTION_HOT';
const GET_MORE_PAGE_HOT_QUESTION = 'GET_MORE_PAGE_HOT_QUESTION';

const initialState = {
    [DEFAULT_KEY]: null,
    listQuestionsHot: null,
    hotListQuestionByPage:null,
}



export const getListQuestionHot = async (dispatch, getState,page) => {
    const isCacheValid = checkCacheValid(getState,'HotQuestions');
    if(isCacheValid){
        return null;
    }
    let questions = [];
    try {
        const params = {
            page:1,
            type:PAGE_HOT_QUESTION,
        }
        const response = await questionsApi.getAll(params);
        if(response){ 
            questions = response.data;
            dispatch({
                type: GET_QUESTION_HOT,
                payload: questions,
              })
        }
    } catch (error) {
        console.log('Fail to fetch questions list:',error);
    }
}

export const getMorePageHotQuestion = (data = 1) =>  async (dispatch, getState,page) => {
    // const isCacheValid = checkCacheValid(getState,'HotQuestions');
    // if(isCacheValid) return null;
    try{
        const { HotQuestions } = getState();
        const { hotListQuestionByPage } = HotQuestions;

        let newList =[];
        const params = {
            type:PAGE_HOT_QUESTION,
            page:data,
        }

        const response = await questionsApi.getAll(params);

        if(hotListQuestionByPage?.length > 0 && data !== 1){
            newList = hotListQuestionByPage?.concat(response.data)
        }else{
            newList = response.data
        }

        dispatch({
            type: GET_MORE_PAGE_HOT_QUESTION,
            payload:newList,
        })

    }catch(error){
        console.log('Fail to fetch questions list:',error);
    }   
}


const HotQuestionsReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_QUESTION_HOT :{
            return {
                ...state,
                [DEFAULT_KEY]: generateCacheTTL(),
                listQuestionsHot: [...action.payload],
            };
        }
        case GET_MORE_PAGE_HOT_QUESTION :{
            return {
                ...state,
                [DEFAULT_KEY]: generateCacheTTL(),
                hotListQuestionByPage: action.payload,
            };
        }
        default : 
            return state;
    }
}


export default HotQuestionsReducer;