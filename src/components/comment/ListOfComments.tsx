import React, { useState, useEffect } from "react";
import { Comments, ListOfCommentProps } from "../../utils/interface";
import { InputComment } from "./InputComment";

export const ListOfComments = ({ paste }: ListOfCommentProps) => {
  const [opinions, setOpinions] = useState<Comments[]>([]);

  const getComments = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/paste/comment/${paste.paste_id}`
      );
      const jsonData = await response.json();
      setOpinions(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  console.log(opinions)

  return (
    <div>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${paste.paste_id}`}
      >
        Comments
      </button>

      <div className="modal" id={`id${paste.paste_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Comments</h4>
              <button
                type="button"
                className="close"
                onClick={() => setOpinions(opinions)}
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <InputComment paste={paste}/>
            </div>
            <div>
                {opinions.map((opinion) => (
                  <div key= {opinion.comment_id}> 
                  <p>{opinion.comment}</p>
                  </div>
                ))}
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};
