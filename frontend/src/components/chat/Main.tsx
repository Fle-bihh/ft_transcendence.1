//
import '../../pages/chat/Chat.scss'
import { RootState } from '../../state';

//
import React, { useState, useEffect } from 'react';
import { Button, IconButton } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple, red } from '@mui/material/colors';
import { ListItem, List } from '@mui/material';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import BlockIcon from '@mui/icons-material/Block';
import Chip from '@mui/material/Chip';
import { useSelector } from 'react-redux';

const Main = (props: { openConvName: string, new_conv: boolean }) => {
    const [convMessages, setConvMessages] = useState(Array<{ id: number, sender: string, receiver: string, text: string }>());
    const [inputValue, setInputValue] = useState("");
    const utils = useSelector((state: RootState) => state.utils);
    const user = useSelector((state: RootState) => state.persistantReducer.userReducer);

    useEffect(() => {
        utils.socket.emit('GET_CONV', { sender: user.user?.login, receiver: props.openConvName });
        console.log('send GET_CONV to back');

    }, [props.openConvName])

    useEffect(() => {
        let tmp = document.getElementById("messagesDisplay");
        if (tmp != null) {
            tmp.scrollTop = tmp.scrollHeight
        }
    }, [convMessages])

    utils.socket.removeListener('get_conv')
    utils.socket.on('get_conv', (openConv: Array<{ id: number, sender: string, receiver: string, text: string }>) => {
        console.log('get_conv recu front', openConv);
        const sorted = openConv.sort((a, b) => a.id - b.id);
        setConvMessages(sorted);
    })

    return (
        <div className="main">

            <div className='mainTitleContainer'>
                {/* Add mute button / block button / game button / profile button */}
                <div className='mainTitle'>
                    To :
                </div>
                <div className='openConvName'>
                    {props.openConvName}
                </div>
                <div className='buttons'>
                    <IconButton className='startGameButton' color="secondary" style={{ color: 'white', marginRight: '2%' }} aria-label="upload picture" component="label">
                        {/* <input hidden accept="image/*" type="file" /> */}
                        <SportsEsportsIcon />
                    </IconButton>
                    <IconButton className='muteButton' color="secondary" style={{ color: 'white', marginRight: '2%' }} aria-label="upload picture" component="label">
                        {/* <input hidden accept="image/*" type="file" /> */}
                        <VolumeMuteIcon />
                    </IconButton>
                    <IconButton className='blockButton' color="secondary" style={{ color: 'white', marginRight: '2%' }} aria-label="upload picture" component="label">
                        {/* <input hidden accept="image/*" type="file" /> */}
                        <BlockIcon />
                    </IconButton>
                </div>
            </div>
            <div className='messagesContainer'>
                <div className="messagesDisplay" id="messagesDisplay">
                    {
                        convMessages.map((message, index) => {
                            if (message.sender == user.user?.login)
                                return (
                                    <div key={index.toString()} className="rightMessages">{message.text}</div>
                                )
                            else
                                return (
                                    <div key={index.toString()} className="leftMessages">{message.text}</div>
                                )
                        })}
                    {/* <!-- messages go here --> */}
                    {/* <Messages messages={messages} onClick={() => setMobile(false)} loading={loading} /> */}
                </div>
                <div className="messageInput">
                    {/* <!-- input field goes here --> */}
                    <input type='text' id="outlined-basic" placeholder='NeyMessage' value={inputValue} autoComplete={'off'} onChange={(event) => { setInputValue(event.currentTarget.value) }} autoFocus onKeyDown={(event) => {
                        if (event.key == 'Enter') {
                            utils.socket.emit('ADD_MESSAGE', { sender: user.user?.login, receiver: props.openConvName, text: inputValue });
                            console.log('send ADD_MESSAGE to back');
                            // utils.socket.emit('ADD_MESSAGE', { sender: props.openConvName, receiver: user.user?.login, text: inputValue });
                            utils.socket.emit('GET_CONV', { sender: user.user?.login, receiver: props.openConvName });
                            console.log('send GET_CONV to back');
                            setInputValue('')
                        }
                    }} />
                    {/* <Button variant="contained" onClick={() => {

                        
                        // props.setMessages([...props.messages, {id: props.messages.length, sender: user.user?.login, receiver: 'Alex' , text: inputValue}])
                        // console.log({id: props.messages.length, sender: user.user?.login, receiver: 'Alex' , text: inputValue})
                    }}>Send</Button> */}
                </div>
            </div>

        </div>
    )
}

export default Main
