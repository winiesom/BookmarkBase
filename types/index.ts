import { MouseEventHandler, FormEvent, FormEventHandler } from 'react';

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    type?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement> | FormEventHandler<HTMLButtonElement>;
    // MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}
