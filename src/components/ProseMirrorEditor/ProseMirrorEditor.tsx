
import { schema } from "prosemirror-schema-basic"
import { EditorState } from "prosemirror-state"
import { EditorView } from "prosemirror-view"
import { useRef, useEffect } from "react"
import { plugins } from "./plugins"

import "./styles.css"

const ProseMirrorEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement | null>(null)
  const editorViewRef = useRef<EditorView | null>(null)

  useEffect(() => {
    if (!editorRef.current) return
      const editorState = EditorState.create({
        schema,
        plugins: plugins(),
      })
      editorViewRef.current = new EditorView(editorRef.current, {
        state: editorState,
      })

    return () => {
        editorViewRef.current?.destroy()
    }
  }, [])

  return <div id="prose-mirror-editor" ref={editorRef} />
}

export default ProseMirrorEditor


// const ProseMirrorEditor: React.FC = () => {
//   const editorRef = useRef<HTMLDivElement>(null);
//   const viewRef = useRef<EditorView | null>(null);

//   useEffect(() => {
//     if (!editorRef.current) return;

//     const state = EditorState.create({
//       doc: DOMParser.fromSchema(schema).parse(document.createElement("div")),
//       plugins: [history(), keymap(baseKeymap)],
//     });

//     const view = new EditorView(editorRef.current, {
//       state,
//     });

//     viewRef.current = view;

//     return () => {
//       view.destroy();
//     };
//   }, []);

//   return (
//     <div
//       className="prose-mirror-editor"
//       ref={editorRef}
//     ></div>
//   );
// };

// export default ProseMirrorEditor;
