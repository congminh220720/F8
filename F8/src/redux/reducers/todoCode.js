import { DEFAULT_KEY, generateCacheTTL, checkCacheValid } from 'redux-cache';
import codeApi from '../../api/codeApi';

const GET_CODE_BY_PAGE = 'GET_CODE_BY_PAGE';

const initialState = {
    [DEFAULT_KEY]: null,
    listCode:null,
    listCodeByPage:null

}

export const getCodeByPage = (data = 1) =>  async (dispatch, getState,page) => {
    // const isCacheValid = checkCacheValid(getState,'HotQuestions');
    // if(isCacheValid) return null;
    try{
        const { code } = getState();
        const { listCodeByPage } = code;

        let newList =[];
        const params = { page:data }
        const response = await codeApi.getCodeWithPage(params)
        if(listCodeByPage?.length > 0 && data !== 1){
            newList = listCodeByPage?.concat(response.data)
        }else{
            newList = response.data
        }
        dispatch({
            type: GET_CODE_BY_PAGE,
            payload:newList,
        })

    }catch(error){
        console.log('Fail to fetch codeHighlight list:',error);
    }   
}


const codeReducer = (state = initialState ,action) => {
    switch(action.type){
        case GET_CODE_BY_PAGE : {
            return {
                ...state,
                listCodeByPage:[...action.payload],
            }
        }
        default :
            return state ;
    }
}

export default codeReducer;