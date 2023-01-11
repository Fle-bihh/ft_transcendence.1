//
import "./Main.scss";
import { RootState } from "../../state";

//
import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import BlockIcon from "@mui/icons-material/Block";
import { useSelector } from "react-redux";

const Main = (props: {
  openConvName: string;
  setOpenConvName: Function;
  allConv: Array<{
    receiver: string;
    last_message_text: string;
    last_message_time: Date;
    new_conv: boolean;
  }>;
  setAllConv: Function;
  allUsers: Array<{ id: number, login: string }>;
  setAllUsers: Function;
}) => {
  const [convMessages, setConvMessages] = useState(
    Array<{
      id: number;
      sender: string;
      receiver: string;
      text: string;
      time: Date;
    }>()
  );
  const [inputValue, setInputValue] = useState("");
  const [topInputValue, setTopInputValue] = useState("");
  const utils = useSelector((state: RootState) => state.utils);
  const user = useSelector(
    (state: RootState) => state.persistantReducer.userReducer
  );

  useEffect(() => {
    utils.socket.emit("GET_CONV", {
      sender: user.user?.login,
      receiver: props.openConvName,
    });
    console.log("send GET_CONV to back");
  }, [props.openConvName, props.allConv]);

  useEffect(() => {
    let tmp = document.getElementById("messagesDisplay");
    if (tmp != null) {
      tmp.scrollTop = tmp.scrollHeight;
    }
  }, [convMessages]);

  utils.socket.removeListener("get_conv");
  utils.socket.on(
    "get_conv",
    (
      openConv: Array<{
        id: number;
        sender: string;
        receiver: string;
        text: string;
        time: Date;
      }>
    ) => {
      console.log("get_conv recu front", openConv);
      const sorted = openConv.sort((a, b) => a.id - b.id);
      setConvMessages(sorted);
    }
  );

  return (
    <div className="main">
      <div className="mainTitleContainer">
        {/* Add mute button / block button / game button / profile button */}
        <div className="mainTitle">To :</div>
        {props.openConvName != "New Message" ? (
          <div className="openConvName">{props.openConvName}</div>
        ) : (
          <input
            className="openConvNameInput"
            type="text"
            id="outlined-basic"
            placeholder=""
            value={topInputValue}
            autoComplete={"off"}
            onChange={(event) => {
              setTopInputValue(event.currentTarget.value);
            }}
            autoFocus
            onKeyDown={(event) => {
              if (event.key == "Enter") {
                // utils.socket.emit("GET_ALL_USERS", {});
                // console.log("send GET_ALL_USERS to back");
                if (props.allUsers.find((user) => user.login === topInputValue)) {
                  console.log("in condition");
                  const tmpArray = [...props.allConv];
                  tmpArray.shift();
                  tmpArray.unshift({
                    receiver: topInputValue,
                    last_message_text: "",
                    last_message_time: new Date(),
                    new_conv: false,
                  });
                  props.setAllConv(tmpArray);
                  props.setOpenConvName(topInputValue);
                  setTopInputValue("");
                } else {
                  setTopInputValue("");
                  alert("User not found...");
                }
              }
            }}
          ></input>
        )}
        <div className="buttons">
          <IconButton
            className="startGameButton"
            color="secondary"
            style={{ color: "white", marginRight: "2%" }}
            aria-label="upload picture"
            component="label"
          >
            {/* <input hidden accept="image/*" type="file" /> */}
            <SportsEsportsIcon />
          </IconButton>
          <IconButton
            className="muteButton"
            color="secondary"
            style={{ color: "white", marginRight: "2%" }}
            aria-label="upload picture"
            component="label"
          >
            {/* <input hidden accept="image/*" type="file" /> */}
            <VolumeMuteIcon />
          </IconButton>
          <IconButton
            className="blockButton"
            color="secondary"
            style={{ color: "white", marginRight: "2%" }}
            aria-label="upload picture"
            component="label"
          >
            {/* <input hidden accept="image/*" type="file" /> */}
            <BlockIcon />
          </IconButton>
        </div>
      </div>
      <div className="messagesContainer">
        <div className="messagesDisplay" id="messagesDisplay">
          {convMessages.map((message, index) => {
            if (message.sender == user.user?.login)
              return (
                <div key={index.toString()} className="rightMessages">
                  {message.text}
                </div>
              );
            else
              return (
                <div key={index.toString()} className="leftMessages">
                  {message.text}
                </div>
              );
          })}
          {/* <!-- messages go here --> */}
          {/* <Messages messages={messages} onClick={() => setMobile(false)} loading={loading} /> */}
        </div>
        {props.openConvName != "New Message" ? (
          <div className="messageInput">
            {/* <!-- input field goes here --> */}
            <input
              type="text"
              id="outlined-basic"
              placeholder="NeyMessage"
              value={inputValue}
              autoComplete={"off"}
              onChange={(event) => {
                setInputValue(event.currentTarget.value);
              }}
              autoFocus
              onKeyDown={(event) => {
                if (event.key == "Enter") {
                  utils.socket.emit("ADD_MESSAGE", {
                    sender: user.user?.login,
                    receiver: props.openConvName,
                    text: inputValue,
                  });
                  console.log("send ADD_MESSAGE to back");
                  utils.socket.emit("GET_CONV", {
                    sender: user.user?.login,
                    receiver: props.openConvName,
                  });
                  console.log("send GET_CONV to back");
                  setInputValue("");
                }
              }}
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Main;
