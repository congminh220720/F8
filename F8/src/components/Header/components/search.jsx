import React, { useEffect, useRef, useState } from "react";
import searchApi from "../../../api/searchApi";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/css/OverlayScrollbars.css";

function Search(props) {
  const [tableData, setTableData] = useState(false);
  const [dataRes, setDataRes] = useState();
  const [valueInput, setValueInput] = useState("");
  const typingTimeoutRef = useRef(null);
  const headerRef = useRef(null);

  const onShowTable = (e) => {
    if (e.target.value.length > 0) {
      setTableData(true);
    } else {
      setTableData(false);
    }
  };

  const handleOnChange = (e) => {
    setValueInput(e.target.value);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    if (e.target.value.length >= 2)
      typingTimeoutRef.current = setTimeout(async () => {
        const data = e.target.value;
        // dispatch(getDataRes(data))
        const response = await searchApi.searchData(data);
        setDataRes(response);
      }, 500);
  };

  useEffect(() => {
    let handlerShowTableData = (e) => {
      if (!headerRef.current.contains(e.target)) {
        setTableData(false);
      }
    };
    document.addEventListener("mousedown", handlerShowTableData);
    return () => {
      document.removeEventListener("mousedown", handlerShowTableData);
    };
  });

  return (
    <>
      <div className="head__search" ref={headerRef}>
        <form action="" className="head__search-form">
          <button className="head__search-form-btn">
            <i className="fas fa-search"></i>
          </button>
          <input
            type="text"
            className="head__search-form-input"
            onInput={(e) => onShowTable(e)}
            onChange={(e) => handleOnChange(e)}
            placeholder="Tìm kiếm khóa học, bài viết, video, ..."
          />
        </form>

        <OverlayScrollbarsComponent
          className="head__search__res"
          style={{ display: `${tableData ? "block" : "none"}` }}
          // style={{ display:'block' }}
        >
          <div className="head__search__res-text">
            <i className="fas fa-search"></i>
            <span>Kết quả cho '{valueInput}'</span>
          </div>
          {dataRes?.data?.courses?.length > 0 ? (
            <div className="head__search__res-group-data">
              <div className="head__search__res-group-data-box">
                <div className="head__search__res-group-data-heading">
                  <h4>Khóa Học</h4>
                  <span>Xem thêm</span>
                </div>

                <div className="head__search__res-group-data-content">
                  {dataRes?.data?.courses?.map((res, i) => (
                    <a
                      key={i}
                      className="head__search__res-group-data-content-box"
                    >
                      <img
                        className="head__search__res-group-data-content-img"
                        src={res.thumbnail_cdn}
                        alt=""
                      />
                      <span className="head__search__res-group-data-content-title">
                        {res.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {dataRes?.data?.posts?.length > 0 ? (
            <div className="head__search__res-group-data">
              <div className="head__search__res-group-data-box">
                <div className="head__search__res-group-data-heading">
                  <h4>Bài viết</h4>
                  <span>Xem thêm</span>
                </div>

                <div className="head__search__res-group-data-content">
                  {dataRes?.data?.posts?.map((res, i) => (
                    <a
                      key={i}
                      className="head__search__res-group-data-content-box"
                    >
                      <img
                        className="head__search__res-group-data-content-img"
                        src={res.thumbnail_cdn}
                        alt=""
                      />
                      <span className="head__search__res-group-data-content-title">
                        {res.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {dataRes?.data?.videos?.length > 0 ? (
            <div className="head__search__res-group-data">
              <div className="head__search__res-group-data-box">
                <div className="head__search__res-group-data-heading">
                  <h4>Video</h4>
                  <span>Xem thêm</span>
                </div>

                <div className="head__search__res-group-data-content">
                  {dataRes?.data?.videos?.map((res, i) => (
                    <a
                      key={i}
                      className="head__search__res-group-data-content-box"
                    >
                      <img
                        className="head__search__res-group-data-content-img"
                        src={
                          res.thumbnail_cdn
                            ? res.thumbnail_cdn
                            : "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg"
                        }
                        alt=""
                      />
                      <span className="head__search__res-group-data-content-title">
                        {res.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {dataRes?.data?.questions?.length > 0 ? (
            <div className="head__search__res-group-data">
              <div className="head__search__res-group-data-box">
                <div className="head__search__res-group-data-heading">
                  <h4>câu hỏi</h4>
                  <span>Xem thêm</span>
                </div>

                <div className="head__search__res-group-data-content">
                  {dataRes?.data?.questions?.map((res, i) => (
                    <a
                      key={i}
                      className="head__search__res-group-data-content-box"
                    >
                      <img
                        className="head__search__res-group-data-content-img"
                        src={
                          res.thumbnail_cdn
                            ? res.thumbnail_cdn
                            : "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg"
                        }
                        alt=""
                      />
                      <span className="head__search__res-group-data-content-title">
                        {res.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {dataRes?.data?.use_cases?.length > 0 ? (
            <div className="head__search__res-group-data">
              <div className="head__search__res-group-data-box">
                <div className="head__search__res-group-data-heading">
                  <h4>câu hỏi</h4>
                  <span>use_cases</span>
                </div>

                <div className="head__search__res-group-data-content">
                  {dataRes?.data?.use_cases?.map((res, i) => (
                    <a
                      key={i}
                      className="head__search__res-group-data-content-box"
                    >
                      <img
                        className="head__search__res-group-data-content-img"
                        src={
                          res.thumbnail_cdn
                            ? res.thumbnail_cdn
                            : "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg"
                        }
                        alt=""
                      />
                      <span className="head__search__res-group-data-content-title">
                        {res.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </OverlayScrollbarsComponent>
      </div>
    </>
  );
}

export default Search;
