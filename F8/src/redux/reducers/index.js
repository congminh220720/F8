import { combineReducers } from 'redux';
import todoCourses from './todoCourses';
import todoHotQuestion from './todoHotQuestion';
import todoUnAnwserQuestion from './todoUnAnwserQuestion';
import todoQuestion from './todoQuestion';
import todoBlogs from './todoBlog';
import todoCode from './todoCode';
import hotVideo from './hotVideo';
import slideshow from './slideShow';



const rootReducer = combineReducers({
  courses: todoCourses,
  HotQuestions:todoHotQuestion,
  questionUnAnwser:todoUnAnwserQuestion,
  AllQuestions:todoQuestion,
  Blogs:todoBlogs,
  code:todoCode,
  hotVideo:hotVideo,
  slideshow:slideshow,
})

export default rootReducer;