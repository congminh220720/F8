import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { useDispatch, useSelector } from 'react-redux'
import {getAllCourses} from '../../redux/reducers/todoCourses'
import './style.scss';
import './rps.scss';

function Courses(props) {
    const dispatch = useDispatch()
    const { allCourses} = useSelector((state) => state.courses)

    useEffect(() => {
        dispatch(getAllCourses)
    },[]);
  
    function renderCourses(courses){
        return courses?.map((course,i) =>(
            <li key={i} className="Study__Page__courses-item">
                <a href={course.slug}>
                    <div className="Study__Page__courses-item-img" style={{backgroundImage: `url(${course.thumbnail_cdn})`}}></div>
                </a>
                <h3 className="Study__Page__courses-item__title">
                    <a href="">
                    {course.title}
                    </a>
                </h3>
                <div className="Study__Page__courses-item__quantity-student">
                    <i class="fas fa-users"></i>
                    <span>{course.students_count}</span>
                </div>
            </li>
        ))
    }

    return (
        <section className="grid__body__full-width ">

            <div className="Study__Page">
                <h2 className="Study__Page-heading">
                    Khóa học nổi bật
                </h2>

                <div className="Study__Page__courses">
                    <ul className="Study__Page__courses-layout">
                        {renderCourses(allCourses)}
                  
                    </ul>
                </div>
            </div>  

        </section>

    );
}
export default Courses;