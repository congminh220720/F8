import { DEFAULT_KEY, generateCacheTTL, checkCacheValid } from 'redux-cache';
import postBlogApi from '../../api/postBlogApi';

const GET_POST_BLOGS = 'GET_POST_BLOGS';
const GET_MORE_PAGE_POST_BLOGS ='GET_MORE_PAGE_POST_BLOGS';
const initialState = {
    [DEFAULT_KEY]: null,
    listPostBlog:null,
    listPostBlogByPage:null

}

export const getPostBlog = async (dispatch,getState) => {
    // const checkCacheValid = checkCacheValid(getState,'Blogs')
    // if(checkCacheValid){
    //     return null
    // }
    let postBlogs = [];
    try {
        const params = { page: 1 };
        const response = await postBlogApi.getPost(params);
        postBlogs = response.data;
        dispatch({
            type:GET_POST_BLOGS,
            payload:postBlogs
        })
    } catch (error) {
        console.log('Fail to fetch Blogs list:',error);
        
    }
}

export const getMorePostBlogs = (data) => async (dispatch,getState) => {
    try {
        const { Blogs } = getState();
        const { listPostBlogByPage } = Blogs;
        let newList = [];
        const params = { page: data };
        const response = await postBlogApi.getPost(params);
        if(listPostBlogByPage?.length > 0 && data  !== 1 ){
            newList = listPostBlogByPage?.concat(response.data);
        }else{
            newList = response.data;
        }
        dispatch({
            type: GET_MORE_PAGE_POST_BLOGS,
            payload:newList,
        });
    } catch (error) {
        console.log('Fail to fetch Blogs list:',error);
    }
}

const blogsReducer = (state = initialState ,action) => {
    switch(action.type){
        case GET_POST_BLOGS : {
            return {
                ...state,
                [DEFAULT_KEY]:generateCacheTTL(),
                listPostBlog:[...action.payload],
            }
        }
        case GET_MORE_PAGE_POST_BLOGS :{
            return {
                ...state,
                listPostBlogByPage: action.payload,
            };
        }

        default :
            return state ;
    }
}

export default blogsReducer;