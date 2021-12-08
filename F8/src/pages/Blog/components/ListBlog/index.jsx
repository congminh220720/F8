import React from 'react';

const icon = <i className="far fa-bookmark"></i>;
const iconkActive = <i className="fas fa-bookmark" style={{color: "#f05123"}}></i>;

function ListBlog({info}) {

    const { user, slug , title, meta_description, min_read ,thumbnail_cdn} = info

    return (
        <>
            <div className="blog__primary-item">
                <div className="blog__primary-item-header">
                    <div className="blog__primary-item-header__avatar-user">
                        <img src={user.avatar_cdn === "" ? "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg" :user.avatar_cdn } alt="" />
                        <span>{user.name}</span>
                    </div>

                    <div className="blog__primary-item-header-btn">
                        <div className="blog__primary-item-header-btn__save-post">
                        { icon }
                        </div>
                        <div className="blog__primary-item-header-btn__share-social"><i className="fas fa-ellipsis-h"></i></div>
                    </div>
                </div>
                
                <div className="blog__primary-item-info">
                    <div className="blog__primary-item-info-text">
                        <a href={slug} className="blog__primary-item-info-text__heading">
                            <h3>{title}</h3>
                        </a>

                        <p className="blog__primary-item-info-text__desc">
                            {meta_description}
                        </p>

                        <div className="blog__primary-item-info-text__Period">
                            <span className="blog__primary-item-info-text__Period-time" >7 giờ trước</span>
                            <span className="dot">.</span>
                            {min_read} giờ xem
                        </div>

                    </div>
                    <div className="blog__primary-item-info-img">
                        <a href={slug} className="blog__primary-item-info-img-avatar">
                            <img src={thumbnail_cdn} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListBlog;