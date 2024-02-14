import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { BookmarkListProps } from '@/types';

const BookmarkList = ({ bookmarks, onEditBookmark, onDeleteBookmark }: BookmarkListProps) => {
  const [page, setPage] = useState<number>(1);
  const rowsPerPage = 5;

  const indexOfLastBookmark = page * rowsPerPage;
  const indexOfFirstBookmark = indexOfLastBookmark - rowsPerPage;
  const currentBookmarks = bookmarks.slice(indexOfFirstBookmark, indexOfLastBookmark);

  // Change page
  const handleChangePage = (pageNumber: number) => {
    setPage(pageNumber);
  }

  const handleEditBookmark = (index: number) => {
    onEditBookmark(index); // Pass the index to the parent component for editing
  };

  const handleDeleteBookmark = (index: number) => {
    onDeleteBookmark(index); // Pass the index to the parent component for deletion
  };

  return (
    <div className="table__border">
      {currentBookmarks.length === 0 ? (
        <p className="text-center text-gray-500">No records found</p>
      ) : (
        <table className="min-w-full">
          <thead className="border-b border-gray-300">
            <tr>
              <th className="tablehead_col">Bookmark</th>
              <th className="tablehead_col">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentBookmarks.map((bookmark, index) => (
              <tr key={index} className="tablebody__tr">
                <td className="tablebody__content">{bookmark}</td>
                <td className="px-6 py-4">
                  <button className="text-indigo-400 hover:text-indigo-900" onClick={() => handleEditBookmark(index)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="text-red-400 hover:text-red-900 ml-2" onClick={() => handleDeleteBookmark(index)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="flex justify-center pt-4">
        <div className="ml-auto">
          <button onClick={() => handleChangePage(page - 1)} disabled={page === 1} className="table__pagination-controls">&#8249;</button>
          {Array.from({ length: Math.ceil(bookmarks.length / rowsPerPage) }, (_, index) => (
            <button key={index} onClick={() => handleChangePage(index + 1)} className={`mx-1 px-4 py-2 rounded-lg ${page === index + 1 ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'}`}>{index + 1}</button>
          ))}
          <button onClick={() => handleChangePage(page + 1)} disabled={page === Math.ceil(bookmarks.length / rowsPerPage)} className="table__pagination-controls">&#8250;</button>
        </div>
      </div>
    </div>
  );
}

export default BookmarkList;
