import React from 'react';

function HighlightCode({info}) {
    const { title, user, content } = info
    return (
        <>
             <div className="code__primary-item" >
          <a href="" className="code__primary-item-heading">
              <h3>{title}</h3>
          </a>
          
          <div className="code__primary-item-header">
              <a className="code__primary-item-header__infor-user">
                  <img src={user.avatar} alt="" />
                  <span>{user.name}</span>
                  <span className="dot">.</span>
                     ngày trước
              </a>
              
              <div className="code__primary-item-header-btn">
                  <div className="code__primary-item-header-btn__save-post" ><i className="far fa-bookmark"></i></div>
                  <div className="code__primary-item-header-btn__share-social"><i className="fas fa-ellipsis-h"></i></div>
              </div>
  
          </div>
  
        
              <pre className="code__primary-item__Highlight ">
                  <code className="language-javascript">
{content.replace(/```js\n/, '')}   
                  </code>
              </pre>
          </div>
      </>
)
    
}
export default HighlightCode;