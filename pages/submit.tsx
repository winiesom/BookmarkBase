"use client";
import React, { useState, useEffect } from 'react';
import CustomButton from '../components/CustomButton';

import { SubmitProps } from '@/types';


const Submit = ({ onSubmitLink, editIndex, bookmarks }: SubmitProps) => {
  const [newBookmark, setNewBookmark] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (editIndex !== undefined && bookmarks[editIndex]) {
      setNewBookmark(bookmarks[editIndex]);
    } else {
      setNewBookmark("");
    }
  }, [editIndex, bookmarks]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewBookmark(e.target.value);
    setError('');
    setSuccess(false);
  };

  const validateUrl = (newBookmark: string): boolean => {
    const regex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
    return regex.test(newBookmark);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!newBookmark.trim()) {
      setError('Please enter a URL');
      return;
    } else if (!validateUrl(newBookmark)) {
      setError('Please enter a valid URL');
      return;
    } else if (bookmarks.includes(newBookmark)) {
      setError('Bookmark already exists');
      return;
    }
    onSubmitLink(newBookmark, editIndex);
    setNewBookmark('');
    setSuccess(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError('');
      setSuccess(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [error, success]);

  return (
    <form className="addbookmark" onSubmit={handleSubmit}>

      {/* Error and success messages */}
        {error && (
        <div className={`addbookmark__error ${error && 'slide-in'}`}>
          <div className="font-semibold text-sm text-red-800 mb-1">&#9447; <span className="ml-2">There was an error</span></div>
          <div><span className="opacity-0">&#9447;</span>
            <span className="ml-1 text-xs">&#8226; {error}</span>
          </div>
        </div>
      )}
      {success && (
        <div className={`addbookmark__success ${success && 'slide-in'} bg-green-100 border-green-300 text-green-700`}>
          <div className="font-semibold text-sm mb-3">&#10004; <span className="ml-2">Success</span></div>
          <div><span className="opacity-0">&#9447;</span>
            <span className="ml-1 text-xs">&#8226; Bookmark has been added</span>
          </div>
        </div>
      )}

      {/* Form input */}
      <label htmlFor="newBookmark" className="addbookmark__label">Enter a link</label>
      <div className="addbookmark__input-container">
        <input
          type="text"
          name="newBookmark"
          id="newBookmark"
          autoComplete="newBookmark"
          className="addbookmark__input"
          placeholder="http://example.com"
          value={newBookmark}
          onChange={handleChange}
        />

        {/* Submit button */}
        <CustomButton
          title="&#65291;"
          containerStyles="custom-button"
          type="submit"
          handleClick={handleSubmit}
        />
      </div>
    </form>
  );
}

export default Submit;
