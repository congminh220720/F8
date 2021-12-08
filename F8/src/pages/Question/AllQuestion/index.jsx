import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMorePageAllQuestion } from "../../../redux/reducers/todoQuestion";
import Item from "../components/Item";

const icon = <i className="far fa-bookmark"></i>;
const iconkActive = (
  <i className="fas fa-bookmark" style={{ color: "#f05123" }}></i>
);

function AllQuestion(props) {
  const dispatch = useDispatch();
  const { allQuestionByPage } = useSelector((state) => state.AllQuestions);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getMorePageAllQuestion(page));
  }, [page]);

  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage(page + 1);
    }
  };

  return (
    <>
      {allQuestionByPage?.map((question, index) => (
        <Item questions={question} key={index} icon={icon} />
      ))}
    </>
  );
}
export default AllQuestion;
