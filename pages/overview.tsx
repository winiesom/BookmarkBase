"use client";

import React, { useState, useEffect } from 'react';
import BookmarkList from '../components/Bookmark/BookmarkList';
import Submit from './submit';

const Overview: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | undefined>(undefined);

  const handleBookmark = (bookmark: string, index?: number) => {
    if (index !== undefined) {
      const updatedBookmarks = [...bookmarks];
      updatedBookmarks[index] = bookmark;
      setBookmarks(updatedBookmarks);
      setEditIndex(undefined);
    } else {
      setBookmarks(prevBookmarks => [...prevBookmarks, bookmark]);
    }
  };

  const handleEditBookmark = (index: number) => {
    setEditIndex(index);
  };

  const handleDeleteBookmark = (index: number) => {
    setBookmarks(prevBookmarks => {
      const updatedBookmarks = [...prevBookmarks];
      updatedBookmarks.splice(index, 1);
      return updatedBookmarks;
    });
  };

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  return (
    <main className="overflow-hidden" id="bl">
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Bookmarks</h1>
          <p>See all your bookmarks</p>
        </div>

        <div className="home__filters">
          <Submit onSubmitLink={handleBookmark} editIndex={editIndex} bookmarks={bookmarks} />
       
          <BookmarkList bookmarks={bookmarks} onEditBookmark={handleEditBookmark} onDeleteBookmark={handleDeleteBookmark} />
        </div>
      </div>
    </main>
  );
}

export default Overview;
