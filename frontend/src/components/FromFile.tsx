import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'

export const MarkdownFromFile = ({markdown_file="text.md"}) => {
    const [content, setContent] = useState("");
  
    useEffect(() => {
      fetch(markdown_file)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, []);
    return (
      <div>
        <ReactMarkdown children={content}/>
      </div>
    );
  }
  