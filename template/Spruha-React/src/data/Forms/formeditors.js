import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useQuill } from "react-quilljs";
import fileDownload from "js-file-download";
import TurndownService from "turndown";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

export function QuillEditor() {

  const { quill, quillRef } = useQuill();
  // console.log(quill);
  return (
    <div>
      <div>
        <div style={{ height: "90%" }} ref={quillRef} />
      </div>
    </div>
  );
}
// Modalinedtor
export function Modalineditor() {
  const { quill, quillRef } = useQuill();
  // console.log(quill);
  // console.log(quillRef);
  return (
    <div>
      <div>
        <div style={{ height: "90%" }} ref={quillRef} />
      </div>
    </div>
  );
}

// Editor with button
export function QuillEditorwithbutton() {
  const turndownService = new TurndownService();

  const { quill, quillRef } = useQuill();
  const MutationObserver = () => {
    fileDownload(
      turndownService.turndown(quill.container.firstChild.innerHTML),
      "txtDownload.md"
    );
  };

  return (
    <div>
      <div>
        <div style={{ height: "90%" }} ref={quillRef} />
      </div>
      <Button
        onClick={MutationObserver}
        className="mt-2"
        variant="primary"
      >
        Save as MD file
      </Button>
    </div>
  );
}



//Wrapping
export const Wrappers = () => {

  const [description, setDescription] = useState({
    htmlValue: "<p>fsegfvfrgdzfgzfdzb</p>\n",
    editorState: EditorState.createEmpty()
  });

  const onEditorStateChange = editorValue => {
    const editorStateInHtml = draftToHtml(
      convertToRaw(editorValue.getCurrentContent())
    );

    setDescription({
      htmlValue: editorStateInHtml,
      editorState: editorValue
    });
  };
  function uploadImageCallBack(file) {
    return new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.imgur.com/3/image');
        xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
        const data = new FormData();
        data.append('image', file);
        xhr.send(data);
        xhr.addEventListener('load', () => {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        });
        xhr.addEventListener('error', () => {
          const error = JSON.parse(xhr.responseText);
          reject(error);
        });
      }
    );
  }
  return (
    <Editor
      toolbarHidden={false}
      editorState={description.editorState}
      onEditorStateChange={onEditorStateChange}
      placeholder="Quill is a free, open dfgdfgdghsource WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.
The icons use here as a replacement to default svg icons are from Line Awesome Icons."
      toolbar={{
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
        image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
      }}
    />
  );
};

//inline
const content = {
  entityMap: {},
  blocks: [
    {
      key: "637gr",
      text: "It is a long established faccvbdt that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    }
  ]
};
export class FromInlineEditEditor extends React.Component {
  constructor(props) {
    super(props);
    const contentState = convertFromRaw(content);
    const editorState = EditorState.createWithContent(contentState);
    this.state = {
      contentState,
      editorState
    };
  }

  onContentStateChange = contentState => {
    this.setState({
      contentState
    });
  };

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };

  render() {
    const { editorState } = this.state;
    return (

      <Editor
        editorClassName={"report-editor"}
        editorState={editorState}
        onEditorStateChange={this.onEditorStateChange}
        onContentStateChange={this.onContentStateChange}
      />

    );
  }

};
