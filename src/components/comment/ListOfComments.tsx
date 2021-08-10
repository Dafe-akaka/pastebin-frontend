import React, { useState, useEffect } from "react";
import { CommentsProps, ListOfCommentProps } from "../../utils/interface";
import { InputComment } from "./InputComment";

export const ListOfComments = ({ paste }: ListOfCommentProps) => {
  const [comments, setComments] = useState<CommentsProps[]>([]);

  const getComments = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/paste/comment/${paste.paste_id}`
      );
      const jsonData = await response.json();
      setComments(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  const deleteComments = async (id: number) => {
    try {
      const deleteComments = await fetch(
        `http://localhost:4000/paste/comment/${id}`,
        {
          method: "DELETE",
        }
      );

      setComments(comments.filter((comment) => comment.comment_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

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
                onClick={() => setComments(comments)}
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <InputComment paste={paste} />
            </div>
            <div>
              {comments.map((comment) => (
                <div
                  className="justify-content-center"
                  key={comment.comment_id}
                >
                  <p className="mb-1">{comment.comment}</p>
                  <button
                    type="button"
                    className="btn btn-danger btn-block"
                    onClick={() => deleteComments(comment.comment_id)}
                  >
                    Delete comment
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
