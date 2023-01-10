//
import "./Side.scss";
import { RootState } from "../../state";

//
import React, { useState, useEffect } from "react";
import { Button, IconButton } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepPurple, grey, red } from "@mui/material/colors";
import { ListItem, List } from "@mui/material";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import BlockIcon from "@mui/icons-material/Block";
import Chip from "@mui/material/Chip";
import { useSelector } from "react-redux";
import { Socket } from "socket.io-client";

const Side = (props: {
  openConvName: string;
  setOpenConvName: Function;
  allConv: Array<{
    receiver: string;
    last_message_text: string;
    last_message_time: Date;
    new_conv: boolean;
  }>;
  setAllConv: Function;
}) => {
  const [inputValue, setInputValue] = useState("");
  const utils = useSelector((state: RootState) => state.utils);
  const user = useSelector(
    (state: RootState) => state.persistantReducer.userReducer
  );

  return (
    <div className="side">
      <div className="newConvContainer">
        {/* <div className='sideTitle'>New conversation</div> */}
        <input
          className="newConvInput"
          type="text"
          id="outlined-basic"
          placeholder="Research"
          value={inputValue}
          autoComplete={"off"}
          onChange={(event) => {
            setInputValue(event.currentTarget.value);
          }}
          autoFocus
          onKeyDown={(event) => {}}
        />
        <div
          onClick={() => {
            props.setOpenConvName("New Message");

            if (props.allConv.find((conv) => conv.new_conv)) return;

            let tmpArray = [...props.allConv];

            tmpArray.unshift({
              receiver: "New Message",
              last_message_text: "",
              last_message_time: new Date(),
              new_conv: true,
            });

            props.setAllConv(tmpArray);
          }}
        >
          <AddIcon className="newConvButton" />
        </div>
      </div>

      <div className="startedConv">
        {props.allConv.map((convInfo, index) => {
          return (
            <div
              className={
                props.openConvName == convInfo.receiver
                  ? "activeStartedConvItem"
                  : "startedConvItem"
              }
              key={index.toString()}
              onClick={() => {
                props.setOpenConvName(convInfo.receiver);
              }}
            >
              <Avatar className="sideAvatar" sx={{ bgcolor: grey[500] }}>
                {convInfo.receiver[0]}
              </Avatar>
              <div className="startedConvText">
                <div className="startedConvName">{convInfo.receiver}</div>
                <div className="startedConvMessage">
                  {convInfo.last_message_text}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Side;
