import { useReducer } from "react";
import { rows } from "../data";
import { reducer, type State, type Row } from "./store";

const initialState: State = { rows, history: [] };

export function TableWithStack() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h3>TableWithStack</h3>
      <button
        onClick={() => dispatch({ type: "undo" })}
        disabled={state.history.length === 0}
      >
        Undo Last Action
      </button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {state.rows.map(({ id, name }: Row, index: number) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>
                <button onClick={() => dispatch({ type: "remove", id, index })}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
