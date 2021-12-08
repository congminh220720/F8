import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getMorePostBlogs } from '../../redux/reducers/todoBlog';
import ListBlog from './components/ListBlog';
import '../../assets/font/fontawesome-free-5.15.3-web/css/all.min.css';
import './style.scss';
import './rps.scss';


function Blog(props) {

    const dispatch = useDispatch();
    const { listPostBlogByPage } = useSelector((state) => state.Blogs);

    const [page,setPage] = useState(1);

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setPage(page+1)    
        }
    };

    useEffect(() => {
        dispatch(getMorePostBlogs(page));
    },[page])

    return (
            <div className="grid-pages-stand">
                

                <section className="grid__body__full-width">
                    <section className="blog index-module_row__-AHgh">
                    
                    <section className="blog__suggestions">
                        <h3> CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT </h3>
                        <ul className="blog__suggestions-list">
                            <li className="blog__suggestions-list-item"><a href="">Front-end / Mobile apps</a></li>
                            <li className="blog__suggestions-list-item"><a href="">Back-end / Devops</a></li>
                            <li className="blog__suggestions-list-item"><a href="">UI / UX / Design</a></li>
                            <li className="blog__suggestions-list-item"><a href="">Others</a></li>
                        </ul>
                    </section>
                        
                        <section className="blog__primary">
                            <div className="blog__primary-header">
                                <div className="blog__primary-header-tabs">
                                    <a href="" className="blog__primary-header-tab Blog__header-active" >Phù hợp với bạn</a>
                                </div>
                            </div>
                            { listPostBlogByPage?.map((blog,i) => <ListBlog info={blog}  key={i} /> )}
                        </section>

                        <section className="blog__propose">
                            <div className="blog__propose-box">
                                <div className="blog__propose-layout">
                                    <div className="blog__propose-heading">
                                        <h3>
                                            CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT
                                        </h3>
                                    </div>
                                    <ul className="blog__propose-list">
                                        <li className="blog__propose-list-item"><a href="">Front-end / Mobile apps</a></li>
                                        <li className="blog__propose-list-item"><a href="">Back-end / Devops</a></li>
                                        <li className="blog__propose-list-item"><a href="">UI / UX / Design</a></li>
                                        <li className="blog__propose-list-item"><a href="">Others</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                    </section>
                </section>
            </div>   
    );
}
export default Blog;