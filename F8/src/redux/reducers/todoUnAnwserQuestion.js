import { DEFAULT_KEY, generateCacheTTL, checkCacheValid } from 'redux-cache';
import questionsApi from '../../api/questionsApi';

const GET_MORE_PAGE_UNANWSER_QUESTION ='GET_MORE_PAGE_UNANWSER_QUESTION';
const GET_QUESTION_UNANSWER = 'GET_QUESTION_UNANSWER';
const PAGE_NOTANSWER ='unanswered';
const pages = 1;

const initialState = {
    [DEFAULT_KEY]: null,
    listQuestionsUnAnswer: null,
    ListQuestionUnAnwserByPage:null,
}



export const getListQuestionUnAnswer = async (dispatch, getState) => {
    const isCacheValid = checkCacheValid(getState,'questionUnAnwser');
    if(isCacheValid){
        return null;
    }
    let questions = [];
    try {
        const params = {
            page:pages,
            type:PAGE_NOTANSWER,
        }
        const response = await questionsApi.getAll(params);
        if(response){ 
            questions = response.data;
            dispatch({
                type: GET_QUESTION_UNANSWER,
                payload: questions,
              })
        }
    } catch (error) {
        console.log('Fail to fetch questions list:',error);
    }
}

export const getMoreUnAnwserQuestionPage = (data) =>  async (dispatch, getState,) => {
    try{
        const { questionUnAnwser } = getState();
        const { ListQuestionUnAnwserByPage } = questionUnAnwser;

        let newList =[];
        const params = {
            type:PAGE_NOTANSWER,
            page:data,
        }

        const response = await questionsApi.getAll(params);

        if(ListQuestionUnAnwserByPage?.length > 0 && data !== 1){
            newList = ListQuestionUnAnwserByPage?.concat(response.data)
        }else{
            newList = response.data
        }

        dispatch({
            type: GET_MORE_PAGE_UNANWSER_QUESTION,
            payload:newList,
        })

    }catch(error){
        console.log('Fail to fetch questions list:',error);
    }   
}


const UnAnwserQuestionsReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_QUESTION_UNANSWER :{
            return {
                ...state,
                [DEFAULT_KEY]: generateCacheTTL(),
                listQuestionsUnAnswer: [...action.payload],
            };
        }
        case GET_MORE_PAGE_UNANWSER_QUESTION :{
            return {
                ...state,
                ListQuestionUnAnwserByPage: action.payload,
            };
        }
        default : 
            return state;
    }
}


export default UnAnwserQuestionsReducer;