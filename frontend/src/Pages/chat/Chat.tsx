//
import Navbar from "../../components/nav/Nav";
import Main from "../../components/chat/Main";
import Side from "../../components/chat/Side";
import "./Chat.scss";

//
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state";

const Chat = () => {
  const utils = useSelector((state: RootState) => state.utils);
  const user = useSelector(
    (state: RootState) => state.persistantReducer.userReducer
  );
  const [allConv, setAllConv] = useState(
    Array<{
      receiver: string;
      last_message_text: string;
      last_message_time: Date;
      new_conv: boolean;
    }>()
  );
  const [openConvName, setOpenConvName] = useState("");
  const [launchChatBool, setLaunchChatBool] = useState(true);

  useEffect(() => {
    if (!allConv.length && launchChatBool) {
      utils.socket.emit("GET_ALL_CONV_INFO", { sender: user.user?.login });
      console.log("send GET_ALL_CONV_INFO to back");
      utils.socket.emit("UPDATE_USER_SOCKET", { login: user.user?.login });
      console.log("send UPDATE_USER_SOCKET to back");
    }
    setLaunchChatBool(false);
  });

  utils.socket.removeListener("get_all_conv_info");
  utils.socket.on(
    "get_all_conv_info",
    (
      data: Array<{
        receiver: string;
        last_message_text: string;
        last_message_time: Date;
        new_conv: boolean;
      }>
    ) => {
      console.log("data", data);
      setAllConv(data);
      console.log("get_all_conv_info recu front");
    }
  );

  utils.socket.removeListener("new_message");
  utils.socket.on(
    "new_message",
    () => {
      console.log("new_message recu front");
      utils.socket.emit("GET_ALL_CONV_INFO", { sender: user.user?.login });
      console.log("send GET_ALL_CONV_INFO to back");
    }
  );

  return (
    <div className="chat">
      <div className="navSpace"></div>
      <Navbar />

      <div className="chatPage">
        <Side
          openConvName={openConvName}
          setOpenConvName={setOpenConvName}
          allConv={allConv}
          setAllConv={setAllConv}
        />
        {openConvName ? (
          <Main
            openConvName={openConvName}
            setOpenConvName={setOpenConvName}
            allConv={allConv}
            setAllConv={setAllConv}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Chat;
