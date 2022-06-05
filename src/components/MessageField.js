import React, { useState } from "react";
import { TextField } from '@material-ui/core';

import { pushMessage } from "../firebase";

const MessageField = ({ inputEl, name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false);
  
  return <TextField
    inputRef={inputEl}
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
        pushMessage({name, text });
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
