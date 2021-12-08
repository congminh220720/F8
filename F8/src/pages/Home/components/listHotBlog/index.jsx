import React from 'react';


function ListHotBlog({info}) {

    const { slug, thumbnail_cdn, title, user , min_read} = info

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
                <div className="Home__content-list-item__author">
                    <a href={slug} className="Home__content-list-item__author__img">
                        <img src={user.avatar_cdn === "" ? "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg" : user.avatar_cdn } alt="" />
                    </a>
                    <a  href={slug} className="Home__content-list-item__author__name">
                            <strong>{user.name}</strong>
                            <span className="postItemDot">.</span>
                            <span>{min_read} giờ xem</span>
                    </a>
                </div>
            </li>
        </>
    );
}
export default ListHotBlog;