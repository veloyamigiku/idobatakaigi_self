import React from "react";
import { IconButton } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import { pushMessage } from "../firebase";

const MessageSubmitButton = ({ name, setText, text }) => {
  console.log('name:' + name);
  return (
    <IconButton
      disabled={text === ''}
      onClick={() => {
        pushMessage({ name: 'れおん', text });
        setText('');
      }}>
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;
