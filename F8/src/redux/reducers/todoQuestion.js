import { DEFAULT_KEY, generateCacheTTL, checkCacheValid } from 'redux-cache';
import questionsApi from '../../api/questionsApi';



const GET_QUESTION_ALL = 'GET_QUESTION_ALL';
const GET_MORE_PAGE_ALL_QUESTION = 'GET_MORE_PAGE_ALL_QUESTION';

const PAGE_NOTANSWER ='unanswered';
const PAGE_AllQUESTION = 'all';
const PAGE_HOT_QUESTION='best';
const pages = 1;

const initialState = {
    [DEFAULT_KEY]: null,
    AllQuestionsHot: null,
    allQuestionByPage:null,
}

export const getListQuestionAll = async (dispatch, getState) => {
    const isCacheValid = checkCacheValid(getState,'AllQuestion');
    if(isCacheValid){
        return null;
    }
    let questions = [];
    try {
        const params = {
            page:pages,
            type:PAGE_AllQUESTION,
        }
        const response = await questionsApi.getAll(params);
        if(response){ 
            questions = response.data;
            dispatch({
                type: GET_QUESTION_ALL,
                payload: questions,
              })
        }
    } catch (error) {
        console.log('Fail to fetch questions list:',error);
    }
}

export const getMorePageAllQuestion = (data) =>  async (dispatch, getState,page) => {
    try{
        const { AllQuestions } = getState();
        const { allQuestionByPage } = AllQuestions;

        let newList =[];
        const params = {
            type:PAGE_AllQUESTION,
            page:data,
        }
        const response = await questionsApi.getAll(params);
        if(allQuestionByPage?.length > 0 && data !== 1){
            newList = allQuestionByPage?.concat(response.data)
        }else{
            newList = response.data
        }
        dispatch({
            type: GET_MORE_PAGE_ALL_QUESTION,
            payload:newList,
        })

    }catch(error){
        console.log('Fail to fetch questions list:',error);
    }   
}


const questionsReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_QUESTION_ALL :{
            return {
                ...state,
                [DEFAULT_KEY]: generateCacheTTL(),
                AllQuestionsHot: [...action.payload],
            };
        }
        case GET_MORE_PAGE_ALL_QUESTION :{
            return {
                ...state,
                allQuestionByPage: action.payload,
            };
        }
        default : 
            return state;
    }
}


export default questionsReducer;