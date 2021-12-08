import React from 'react';



function ListCourses({info}) {

    const { thumbnail_cdn, slug, title, students_count } = info

    return (
        <>
            <li className="Home__content-list-item">
                    <a  href={slug}>
                        <div className="Home__content-list-item-img" style={{backgroundImage: `url(${thumbnail_cdn})`}}></div>
                    </a>
                    <h3 className="Home__content-list-item__title">
                        <a href={slug}>
                            {title}
                        </a>
                    </h3>
                    <div className="Home__content-list-item__quantity-student">
                        <i class="fas fa-users"></i>
                        <span>{students_count}</span>
                    </div>
                </li>
        </>
    );
}

export default ListCourses;