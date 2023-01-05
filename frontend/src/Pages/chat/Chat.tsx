import React, { useState, useEffect } from 'react';
import { Button, IconButton } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple, red } from '@mui/material/colors';
import { ListItem, List } from '@mui/material';
import TextField from '@mui/material/TextField';
import Messages from '../../components/chat/Main/Messages/index';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import BlockIcon from '@mui/icons-material/Block';
import './Chat.scss'

const Chat = (props: { messages: Array<{ id: number, sender: string, receiver: string, text: string, groupText: boolean }>, setMessages: Function }) => {
  const [loading, setLoading] = useState(false);
  const [mobile, setMobile] = useState(false);

  const [inputValue, setInputValue] = useState("");

  return (
    <div className='chat'>


      <div className='navbar'></div>


      <div className="chatPage">
        <div className="side">

          <div className="sideTitleContainer">
            <div className='sideTitle'>Conversations :</div>
            <IconButton color="secondary" style={{color: 'white', marginRight: '2%'}} aria-label="upload picture" component="label">
              {/* <input hidden accept="image/*" type="file" /> */}
              <AddIcon />
            </IconButton>
          </div>

          <div className="startedConv">
            <div className="startedConvItem" >
            <Avatar className='sideAvatar' sx={{ bgcolor: red[900] }}>A</Avatar>
              <div className='startedConvName'>
                Alex
              </div>
              <IconButton className='moreInfoButton' color="secondary" style={{color: 'white', marginRight: '2%'}} aria-label="upload picture" component="label">
              {/* <input hidden accept="image/*" type="file" /> */}
              <MoreVertIcon />
            </IconButton>
            </div>
          </div>

        </div>
        <div className="main">

          <div className='mainTitleContainer'>
            {/* Add mute button / block button / game button / profile button */}
            <div className='mainTitle'>
              <Avatar className='mainAvatar' sx={{ bgcolor: red[900] }}>A</Avatar>
              Alex
            </div>
            <div className='buttons'>
              <IconButton className='startGameButton' color="secondary" style={{color: 'white', marginRight: '2%'}} aria-label="upload picture" component="label">
                {/* <input hidden accept="image/*" type="file" /> */}
                <SportsEsportsIcon />
              </IconButton>
              <IconButton className='muteButton' color="secondary" style={{color: 'white', marginRight: '2%'}} aria-label="upload picture" component="label">
                {/* <input hidden accept="image/*" type="file" /> */}
                <VolumeMuteIcon />
              </IconButton>
              <IconButton className='blockButton' color="secondary" style={{color: 'white', marginRight: '2%'}} aria-label="upload picture" component="label">
                {/* <input hidden accept="image/*" type="file" /> */}
                <BlockIcon />
              </IconButton>
            </div>
          </div>
          <div className='messagesContainer'>
            <div className="messagesDisplay">
              {props.messages.map((messages) => { return (
                <div>
                  {messages.text}
                </div>
              ) })}
              {/* <!-- messages go here --> */}
              {/* <Messages messages={messages} onClick={() => setMobile(false)} loading={loading} /> */}
            </div>
            <div className="messageInput">
              {/* <!-- input field goes here --> */}
              <TextField fullWidth id="outlined-basic" variant="outlined" value={inputValue} onChange={(event) => {setInputValue(event.currentTarget.value)}} />
              <Button variant="contained" onClick={() => {
                props.setMessages([...props.messages, {id: props.messages.length, sender: 'Felix', receiver: 'Alex' , text: inputValue}])
                console.log({id: props.messages.length, sender: 'Felix', receiver: 'Alex' , text: inputValue})
              }}>Send</Button>
            </div>
          </div>

        </div>
        
      </div>


      {/* <Box
          sx={{
            display: 'flex',
            '& > *': {
              m: 1,
            },
          }}
        >
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
          >
            {buttons}
          </ButtonGroup>
        </Box> */}
    </div>

  )
}

// {/* <h2>
//           <Stack direction="row" spacing={2}>
//             <Avatar sx={{ bgcolor: deepPurple[500] }}>F</Avatar>
//             Felix
//           </Stack>
//         </h2>
//         <div className="conversation-list">
//           {/* <!-- conversation list goes here --> */}
//           <List>
//             <ListItem>Alex</ListItem>
//             <ListItem>Mey</ListItem>
//             <ListItem>Leo</ListItem>
//           </List>
//         </div>
//         <div className="conversation-view">
//           <div className="conversation-header">
//             {/* <!-- conversation name goes here --> */}
//             <h2>
//               <Stack direction="row" spacing={2}>
//                 <Avatar sx={{ bgcolor: deepPurple[500] }}>A</Avatar>
//                 Alex
//               </Stack>
//             </h2>
//           </div>
//           <div className="messages">
//             {props.messages.map((messages) => { return (
//               <div>
//                 {messages.text}
//               </div>
//             ) })}
//             {/* <!-- messages go here --> */}
//             {/* <Messages messages={messages} onClick={() => setMobile(false)} loading={loading} /> */}
//           </div>
//           <div className="message-input">
//             {/* <!-- input field goes here --> */}
//             <TextField id="outlined-basic" variant="outlined" value={inputValue} onChange={(event) => {setInputValue(event.currentTarget.value)}} />
//             <Button variant="contained" onClick={() => {
//               props.setMessages([...props.messages, {id: props.messages.length, sender: 'Felix', receiver: 'Alex' , text: inputValue}])
//               console.log({id: props.messages.length, sender: 'Felix', receiver: 'Alex' , text: inputValue})
//             }}>Send</Button>
//           </div>
//         </div> */}

export default Chat