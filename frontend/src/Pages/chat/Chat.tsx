//
import Navbar from '../../components/nav/Nav';
import Main from '../../components/chat/Main';
import './Chat.scss'

//
import React, { useState, useEffect } from 'react';
// import { Button, IconButton } from '@mui/material';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import { deepPurple, red } from '@mui/material/colors';
// import { ListItem, List } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import AddIcon from '@mui/icons-material/Add';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
// import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
// import BlockIcon from '@mui/icons-material/Block';
// import Chip from '@mui/material/Chip';
import { useSelector } from 'react-redux';
import { RootState } from '../../state';
import Side from '../../components/chat/Side';

const Chat = () => {
  // const [loading, setLoading] = useState(false);
  // const [mobile, setMobile] = useState(false);

  // const [openConv, setOpenConv] = useState([""]);
  const utils = useSelector((state: RootState) => state.utils);
  const user = useSelector((state: RootState) => state.persistantReducer.userReducer);
  const [allConv, setAllConv] = useState(Array<{ receiver: string, last_message_text: string }>());
  const [openConvName, setOpenConvName] = useState('');
  const [launchChatBool, setLaunchChatBool] = useState(true);


  useEffect(() => {
    if (!allConv.length && launchChatBool)
      utils.socket.emit('GET_ALL_CONV_INFO', { sender: user.user?.login })
    setLaunchChatBool(false)
  })

  utils.socket.on('get_all_conv_info', (data: Array<{ receiver: string, last_message_text: string }>) => {
    setAllConv(data);
    console.log('utils.socket.on(\'get_all_conv_info\'', data)
  })

  return (
    <div className='chat'>

      <div className='navSpace'></div>
      <Navbar />

      <div className="chatPage">
        <Side openConvName={openConvName} setOpenConvName={setOpenConvName} allConv={allConv} />
        {openConvName ?
          <Main openConvName={openConvName} /> : <></>
        }
      </div>
    </div>

  )
}

export default Chat