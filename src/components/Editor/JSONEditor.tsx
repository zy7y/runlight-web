import { memo, useState } from 'react';
import MonacoEditor, { Monaco } from 'react-monaco-editor';

const options = {
  selectOnLineNumbers: true,
  automaticLayout: true,
};

function JSONEditor() {
  const [editor, setEditor] = useState<Monaco | null>(null);
  const [code, setCode] = useState('');

  function handleEditorMount(editor: Monaco) {
    setEditor(editor);
  }

  function handleEditorChange(value: string) {
    setCode(value);

    if (editor) {
      // 解析 JSON Schema 并验证 JSON 数据
      editor.getAction('editor.action.validateJson').run();
    }
  }

  return (
    <div style={{ height: '100vh' }}>
      <MonacoEditor
        height="100%"
        language="json"
        theme="vs-dark"
        value={code}
        options={options}
        editorDidMount={handleEditorMount}
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default memo(JSONEditor);
