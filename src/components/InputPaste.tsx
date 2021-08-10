import React, { useState } from "react";

export const InputPaste = (): JSX.Element => {
  const [paste, setPaste] = useState("");
  const [title, setTitle] = useState("");

  const onSubmitPaste = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // we do not want it to refresh
    try {
      const body = { paste, title };

      const response = await fetch("http://localhost:4000/paste", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body),
      });
        
      window.location.href = "/";
      console.log(response);
      
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="form-group shadow-textarea mt-5">
      <label className="exampleFormControlTextarea6"></label>
      <form onSubmit={(e) => onSubmitPaste(e)}>
        <input
          placeholder="Input Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <textarea
          className="form-control z-depth-1"
          rows={8}
          placeholder="Paste here..."
          value={paste}
          onChange={(e) => setPaste(e.target.value)}
        ></textarea>
        <button className="btn btn-success mt-1 "> Paste</button>
      </form>
    </div>
  );
};
