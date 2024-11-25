import { useState } from 'react';

const CommentSection = () => {
  const [inputValue, setInputValue] = useState('');
  const [notes, setNotes] = useState([]);
  sessionStorage.setItem('notes', JSON.stringify(notes));
  function addNotes(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page
    if (inputValue.trim()) {
    
      setNotes([...notes, inputValue]); // Add the current inputValue to notes
      setInputValue(''); // Clear the input field
    }
  }

  function deleteNote(index) {
    console.log(index)
    setNotes(notes.filter((note, ind) =>  ind!=index));  
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Comment</h2>
      <div className="w-full max-w-md">
        <form className="flex items-center space-x-3 mb-6" onSubmit={addNotes}>
          <input
            className="w-full bg-white placeholder-gray-400 text-gray-900 text-sm border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            type="text"
            placeholder="Type your comment..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            type="submit"
          >
            Add
          </button>
        </form>

        <ul className="space-y-4">
          {notes.map((note, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="text-gray-700">{note}</div>
              <button
                className="text-red-600 hover:text-red-700 focus:outline-none transition"
                onClick={() => deleteNote(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentSection;
