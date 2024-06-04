import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './Editor.css';




export default function EditorCode(props) {
  const codeString = props.string;
    const [code, setCode] = useState(codeString);
    const [copied, setCopied] = useState(false);
    return (
      <div className="code-block">
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code => highlight(code, languages.jsx, 'jsx')}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            backgroundColor: '#f5f5f5',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
          <button className="copy-button">{copied ? 'Copied!' : 'Copy'}</button>
        </CopyToClipboard>
      </div>
    );
  }
