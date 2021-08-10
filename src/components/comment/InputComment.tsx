import React, {useState} from "react";
import { InputCommentProps} from "../../utils/interface";

export const InputComment = ({paste}: InputCommentProps): JSX.Element => {
    const [comment, setComment] = useState("");

    const onSubmitComment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // we do not want it to refresh
        try {
          const body = { comment };
    
          const response = await fetch(`http://localhost:4000/paste/comment/${paste.paste_id}`, {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(body),
          });
    
          window.location.href = "/";
          //   console.log(response);
        } catch (err) {
          console.error(err.message);
        }
      };
  return (
    <div>
      <form onSubmit={(e) => onSubmitComment(e)}>
        <input
          placeholder="Add"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
      </form>
    </div>
  );
};
