import React, { useState } from "react";
import Header from "../components/Header";

import Body from "../components/Body";

import "../assets/sass/base.scss";

const notifications = [
  {
    id: 1,
    name: "congminh nguyen",
    image: "https://fullstack.edu.vn/assets/images/f8_avatar.png",
    firstWord: " Chào mừng",
    message:
      "đã gia nhập F8. Hãy luôn đam mê, kiên trì và theo đuổi mục tiêu tới cùng bạn nhé ❤️",
    time: 8,
  },
  {
    id: 2,
    name: "congminh nguyen",
    image: "https://fullstack.edu.vn/assets/images/f8_avatar.png",
    firstWord: "Chào mừng",
    message:
      "đã gia nhập F8. Hãy luôn đam mê, kiên trì và theo đuổi mục tiêu tới cùng bạn nhé ❤️",
    time: 8,
  },
];

function App(props) {
  const [ListNotifications, setListNotifications] = useState(notifications);

  return (
    <>
      <Header notifications={ListNotifications} />
      <Body />
    </>
  );
}

export default App;
