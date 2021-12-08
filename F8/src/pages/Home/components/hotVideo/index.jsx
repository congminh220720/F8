import React from 'react';


function ListHotVideo({info}) {
    const { thumbnail, title, yt_view_count, yt_like_count, yt_comment_count } = info
    return (
        <>
              <li className="Home__content-list-item">
                    <a  href="">
                        <div className="Home__content-list-item-img" style={{backgroundImage: `url(${thumbnail})`}}></div>
                    </a>
                    <h3 className="Home__content-list-item__title">
                        <a href="">
                            {title}
                        </a>
                    </h3>
                    <div className="Home__content-list-item__info">
                       <p className="Home__content-list-item__info-view">
                            <i className="fas fa-eye"></i>
                            <span>{yt_view_count}</span>

                       </p>
                       <p className="Home__content-list-item__info-like">
                            <i className="fas fa-thumbs-up"></i>
                            <span>{yt_like_count}</span>

                       </p>
                       <p className="Home__content-list-item__info-comments">
                            <i className="fas fa-comment"></i>
                            <span>{yt_comment_count}</span>

                       </p>
                    </div>
                </li>
        </>
    );
}

export default ListHotVideo;