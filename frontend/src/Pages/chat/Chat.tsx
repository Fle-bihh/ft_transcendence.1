//
import Navbar from "../../components/nav/Nav";
import Main from "../../components/chat/Main";
import Side from "../../components/chat/Side";
import "./Chat.scss";

//
import { useState, useEffect } from "react";
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
  const [allUsers, setAllUsers] = useState(Array<{ id: number, login: string }>());

  useEffect(() => {
    if (!allConv.length && launchChatBool) {
      utils.socket.emit("GET_ALL_CONV_INFO", { sender: user.user?.login });
      console.log("send GET_ALL_CONV_INFO to back");
      utils.socket.emit("UPDATE_USER_SOCKET", { login: user.user?.login });
      console.log("send UPDATE_USER_SOCKET to back");
      utils.socket.emit("GET_ALL_USERS");
      console.log("send GET_ALL_USERS to back");
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

  utils.socket.removeListener("get_all_users");
  utils.socket.on(
    "get_all_users",
    (
      all_users: Array<{
        id: number;
        login: string;
      }>
    ) => {
      setAllUsers([...all_users]);
      console.log("get_all_users recu front", allUsers);
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
            allUsers={allUsers}
            setAllUsers={setAllUsers}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Chat;
