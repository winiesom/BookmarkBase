import { MouseEventHandler, FormEvent, FormEventHandler } from 'react';

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    type?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    // MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface BookmarkListProps {
    bookmarks: string[];
    onEditBookmark: (index: number) => void; // Add prop for handling edit
    onDeleteBookmark: (index: number) => void; // Add prop for handling delete
}

export interface SubmitProps {
    onSubmitLink: (bookmark: string, index?: number) => void;
    editIndex?: number;
    bookmarks: string[];
  }