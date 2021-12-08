import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMorePageHotQuestion } from "../../../redux/reducers/todoHotQuestion";

import Item from "../components/Item";

const icon = <i className="far fa-bookmark"></i>;
const iconkActive = (
  <i className="fas fa-bookmark" style={{ color: "#f05123" }}></i>
);

function HotQuestion(props) {
  const dispatch = useDispatch();
  const { hotListQuestionByPage } = useSelector((state) => state.HotQuestions);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getMorePageHotQuestion(page));
  }, [page]);

  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage(page + 1);
    }
  };

  return (
    <>
      {hotListQuestionByPage?.map((question, index) => (
        <Item questions={question} key={index} icon={icon} />
      ))}
    </>
  );
}
export default HotQuestion;
