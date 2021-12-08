import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoreUnAnwserQuestionPage } from  "../../../redux/reducers/todoUnAnwserQuestion";
import Item from "../components/Item";

const icon = <i className="far fa-bookmark"></i>;
const iconkActive = (
  <i className="fas fa-bookmark" style={{ color: "#f05123" }}></i>
);

function UnAnwserQuestion(props) {
  const dispatch = useDispatch();
  const { ListQuestionUnAnwserByPage } = useSelector(
    (state) => state.questionUnAnwser
  );

  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getMoreUnAnwserQuestionPage(page));
  }, [page]);

  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage(page + 1);
    }
  };

  return (
    <>
      {ListQuestionUnAnwserByPage?.map((question, index) => (
        <Item questions={question} key={index} icon={icon} />
      ))}
    </>
  );
}

export default UnAnwserQuestion;
