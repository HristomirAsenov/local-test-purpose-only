import * as prosemirrorModel from "prosemirror-model";
import * as prosemirrorSchemaBasic from "prosemirror-schema-basic";
import * as prosemirrorSchemaList from "prosemirror-schema-list";
import * as prosemirrorView from "prosemirror-view";
import * as prosemirrorState from "prosemirror-state";
import * as prosemirrorExampleSetup from "prosemirror-example-setup";

export const schema = new prosemirrorModel.Schema({
  nodes: prosemirrorSchemaList.addListNodes(
    prosemirrorSchemaBasic.schema.spec.nodes,
    "paragraph block*",
    "block"
  ),
  marks: prosemirrorSchemaBasic.schema.spec.marks,
});

export const createView = (editor: HTMLElement, content: HTMLElement) =>
  new prosemirrorView.EditorView(editor, {
    state: prosemirrorState.EditorState.create({
      doc: prosemirrorModel.DOMParser.fromSchema(schema).parse(content),
      plugins: prosemirrorExampleSetup.exampleSetup({ schema }),
    }),
  });
