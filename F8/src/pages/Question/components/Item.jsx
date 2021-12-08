import React from 'react';
import PropTypes from 'prop-types';


function Item({questions,icon}) {
    const {slug, title, user, Period, comments, comments_count, selected_tags, meta_description} = questions;
    return (
        <div className="question__primary-item">
        <div className="question__primary-item-header">
            <div className="question__primary-item-header-text">Front-end / Mobile Apps</div>
            <div className="question__primary-item-header-btn">
                <div className="question__primary-item-header-btn__save-post">{icon}</div>
                <div className="question__primary-item-header-btn__share-social"><i className="fas fa-ellipsis-h"></i></div>
            </div>
        </div>
        <h2 className="question__primary-item-heading">
            <a href={slug}>{title}</a>
        </h2>
        <div className="question__primary-item-info">

            <div className="question__primary-item-info-user">
                <img src={user.avatar_cdn} alt="" />
                <span className="question__primary-item-info-user-text">
                    Đăng bởi
                    <strong>
                        {user.name}
                    </strong>
                    <span className="dot">.</span>
                    <span>{Period} Ngày trước</span>
                </span>
            </div>

            <div className="question__primary-item-info-answer">
            
            <div className="question__primary-item-info-answer-avatar">
                    {comments.map(avatar => (
                        <img  src={avatar.commentator.avatar} alt="" /> 
                    ))}
                        
            </div>
                    <span className="question__primary-item-info-answer-text">
                    {comments_count > 0 ? comments_count : '' } Câu trả lời
                    </span>

            </div>
        </div>

        <div className="question__primary-item-desc">{meta_description}</div>

        <div className="question__primary-item-footer">
            <div className="question__primary-item-footer-tabs">
            {selected_tags.map(type =>(
                <div className="question__primary-item-footer-tab">{type.name}</div>
            ))}
            </div>

            <div className="question__primary-item-footer-btn">
                <a href={slug}>
                    <span>Chi tiết</span>
                </a>
            </div>
        </div>
    </div>
    );
}

export default Item;