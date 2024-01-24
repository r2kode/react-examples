export type Row = {
  name: string;
  id: string;
};

export type State = {
  rows: Row[];
  history: any[];
};

const removeRow = (state: State, action: any) => {
  return state.rows.filter(({ id }) => id !== action.id);
};

const addRowAtOriginalIndex = (state: State) => {
  const undo = state.history[state.history.length - 1];

  return [
    ...state.rows.slice(0, undo.action.index),
    undo.row,
    ...state.rows.slice(undo.action.index),
  ];
};

export const reducer = (state: State, action: any) => {
  switch (action.type) {
    case "remove":
      return {
        rows: removeRow(state, action),
        history: state.history.concat({
          action,
          row: state.rows[action.index],
        }),
      };
    case "undo":
      return {
        rows: addRowAtOriginalIndex(state),
        history: state.history.slice(0, -1),
      };
    default:
      throw new Error();
  }
};
