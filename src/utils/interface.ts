export interface Pastes {
    paste_id: number;
    title: string;
    paste: string;
}

export interface CommentsProps {
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

