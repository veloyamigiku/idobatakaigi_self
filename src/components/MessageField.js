import React, { useState } from "react";
import { TextField } from '@material-ui/core';

const MessageField = ({ name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false);
  console.log({text});
  return <TextField
    fullWidth={true}
    onChange={(e) => {
      setText(e.target.value);
    }}
    onKeyDown={(e) => {
      //console.log({ key: e.key });
      if (isComposed) return;
      const text = e.target.value;
      if (text === '') {
        return;
      }
      if (e.key === 'Enter') {
        console.log('push message to firebase.');
        setText('');
        e.preventDefault();
      }
    }}
    onCompositionStart={() => {
      //console.log('日本語入力が始まりました');
      setIsComposed(true);
    }}
    onCompositionEnd={() => {
      //console.log('日本語入力が終わりました');
      setIsComposed(false);
    }}
    value={text} />;
};

export default MessageField;
