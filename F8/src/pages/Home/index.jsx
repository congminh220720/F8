import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Link } from "react-router-dom";

import { getAllCourses } from "../../redux/reducers/todoCourses";
import { getPostBlog } from "../../redux/reducers/todoBlog";
import { getHotVideo } from "../../redux/reducers/hotVideo";
import { getSlideShow } from "../../redux/reducers/slideShow";

import SlideShow from "./components/SlideShow/slideShow";
import ListCourses from "./components/listCourses";
import ListHotBlog from "./components/listHotBlog";
import ListHotVideo from "./components/hotVideo";

import config from "../../config";

import "../../assets/font/fontawesome-free-5.15.3-web/css/all.min.css";
import "overlayscrollbars/css/OverlayScrollbars.css";
import "./style.scss";

function Home(props) {
  const dispatch = useDispatch();
  const { allCourses } = useSelector((state) => state.courses);
  const { listPostBlog } = useSelector((state) => state.Blogs);
  const { listHotVideo } = useSelector((state) => state.hotVideo);

  useEffect(() => {
    dispatch(getAllCourses);
    dispatch(getPostBlog);
    dispatch(getHotVideo);
  }, []);

  return (
    <section className="grid__body__full-width">
      <SlideShow />
      <div className="Home__content">
        <div className="Home__content-layout">
          <p className="quantity__student">
            <strong>104.446+</strong> người khác đã học
          </p>
          <div className="Home__content-list">
            <div className="Home__content-list-box">
              <div className="Home__content-list-text">
                <h3 className="Home__content-list-text__heading">
                  Khóa học nỗi bật
                </h3>
                <Link
                  to={config.routes.courses}
                  className="Home__content-list-text__show-more"
                  href=""
                >
                  Xem tất cả <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
              
              <OverlayScrollbarsComponent>
                <ul className="Home__content-list-layout">
                  {allCourses?.map((course, i) => (
                    <ListCourses key={i} info={course} />
                  ))}
                </ul>
              </OverlayScrollbarsComponent>

            </div>

            <div className="Home__content-list-box">
              <div className="Home__content-list-text">
                <h3 className="Home__content-list-text__heading">
                  Bài viết nổi bật
                </h3>
                <Link
                  to={config.routes.blog}
                  className="Home__content-list-text__show-more"
                  href=""
                >
                  Xem tất cả <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
              <OverlayScrollbarsComponent>
                <ul className="Home__content-list-layout">
                  {listPostBlog?.map((blog, i) => (
                    <ListHotBlog key={i} info={blog} />
                  ))}
                </ul>
              </OverlayScrollbarsComponent>
            </div>

            <div className="Home__content-list-box">
              <div className="Home__content-list-text">
                <h3 className="Home__content-list-text__heading">
                  Video nỗi bật
                </h3>
                <a className="Home__content-list-text__show-more" href="">
                  Xem tất cả <i className="fas fa-chevron-right"></i>
                </a>
              </div>

              <OverlayScrollbarsComponent>
                <ul className="Home__content-list-layout">
                  {listHotVideo?.map((video, i) => (
                    <ListHotVideo key={i} info={video} />
                  ))}
                </ul>
              </OverlayScrollbarsComponent>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
