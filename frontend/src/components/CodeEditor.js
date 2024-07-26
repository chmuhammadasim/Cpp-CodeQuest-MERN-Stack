import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-github';

const CodeEditor = ({ code, onCodeChange }) => {
  return (
    <AceEditor
      mode="c_cpp"
      theme="github"
      name="codeEditor"
      value={code}
      onChange={onCodeChange}
      editorProps={{ $blockScrolling: true }}
    />
  );
};

export default CodeEditor;
