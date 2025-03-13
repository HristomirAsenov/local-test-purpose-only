import { Plugin } from "prosemirror-state";

import { history } from "prosemirror-history";
import { keymap } from "prosemirror-keymap";
import { baseKeymap } from "prosemirror-commands";

import { createNewBlockQuote, createNewPmBlockQuote } from "./actions";

export const plugins = (): Plugin[] => [
  history(),
  keymap(baseKeymap),
  keymap({
    "Ctrl-Alt-b": createNewBlockQuote,
    "Ctrl-Alt-p": createNewPmBlockQuote,
  }),
];
