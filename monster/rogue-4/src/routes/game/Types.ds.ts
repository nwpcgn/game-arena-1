export interface Rogue {
    game: Game;
    variables: Variables;
    functions: Functions;
    gui: Gui;
  }
  export interface Game {
    width: number;
    height: number;
    level: number;
    map?: (null)[] | null;
    rooms?: (null)[] | null;
    activeRoom?: null;
    pos: Pos;
  }
  export interface Pos {
    x: number;
    y: number;
  }
  export interface Variables {
    fruits?: (string)[] | null;
  }
  export interface Functions {
  }
  export interface Gui {
    text_element: TextElement;
    minus_button: MinusButtonOrPlusButton;
    plus_button: MinusButtonOrPlusButton;
  }
  export interface TextElement {
    text: string;
    classes: Classes;
  }
  export interface Classes {
    default?: (string)[] | null;
  }
  export interface MinusButtonOrPlusButton {
    type: string;
    text: string;
    classes: Classes1;
  }
  export interface Classes1 {
    default?: (string)[] | null;
    modifiers: Modifiers;
  }
  export interface Modifiers {
    hover?: (string)[] | null;
  }
  