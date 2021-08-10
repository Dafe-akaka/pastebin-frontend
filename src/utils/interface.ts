export interface Pastes {
    paste_id: number;
    title: string;
    paste: string;
}

export interface Comments {
  comment_id : number
  comment: string 
  paste_id: number 
}


export interface InputCommentProps {
  paste: Pastes
}

export interface ListOfCommentProps {
  paste: Pastes
}

export interface CommentProps {
  comment: Comments

}

export interface DeleteCommentProps {
  comments: Comments
  setDeletedComment(deletedComment: string): void
  deletedComment: string

}
