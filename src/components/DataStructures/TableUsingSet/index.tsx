import { useState } from "react";
import { rows } from "../data";

export function TableUsingSet() {
  const [selectedIds, setSelectedIds] = useState(new Set());
  const handleOnChange = (id: string) => {
    const updatedIdToSelect = new Set(selectedIds);
    if (updatedIdToSelect.has(id)) {
      updatedIdToSelect.delete(id);
    } else {
      updatedIdToSelect.add(id);
    }
    setSelectedIds(updatedIdToSelect);
  };

  return (
    <>
      <h3>Table using Set</h3>
      <table>
        <thead>
          <tr>
            <th />
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {rows.map(({ id, name }) => (
            <tr key={id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.has(id)}
                  onChange={() => handleOnChange(id)}
                />
              </td>
              <td>{id}</td>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
