import { useRef, useEffect } from "react";

import "./styles.css";
import "./editor-styles.css";

import { createView } from "./utils";

const ProseMirrorEditor: React.FC = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const editorViewRef = useRef<any | null>(null);

  useEffect(() => {
    if (!editorRef.current || !contentRef.current) return;
    editorViewRef.current = createView(editorRef.current, contentRef.current);
    return () => {
      editorViewRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <div id="prose-mirror-editor" ref={editorRef}></div>
      <div id="prose-mirror-content" ref={contentRef}></div>
    </>
  );
};

export default ProseMirrorEditor;
