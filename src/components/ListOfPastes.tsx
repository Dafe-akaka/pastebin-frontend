import React, { useState, useEffect } from "react";
import { Pastes } from "../utils/interface";
import { InputComment } from "./comment/InputComment";

export const ListOfPastes = (): JSX.Element => {
  const [pastes, setPastes] = useState<Pastes[]>([]);

  // delete Pastes function

  const deletePastes = async (id: number) => {
    try {
      const deletePastes = await fetch(`http://localhost:4000/paste/${id}`, {
        method: "DELETE",
      });

      setPastes(pastes.filter((paste) => paste.paste_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getpastes = async () => {
    try {
      const response = await fetch("http://localhost:4000/paste");
      const jsonData = await response.json();
      setPastes(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getpastes();
  }, []);
  return (
    <div>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Paste title</th>
            <th>Paste</th>
            <th>Delete</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {pastes.map((paste) => (
            <tr key={paste.paste_id}>
              <td>{paste.title}</td>
              <td> {paste.paste} </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deletePastes(paste.paste_id)}
                >
                  Delete
                </button>
              </td>
              <td>
                  <InputComment paste={paste} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
