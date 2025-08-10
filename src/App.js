import React, { useState, useEffect, useMemo } from 'react';
import './index.css';

const BIBLE_DATA = {
  "Gênesis": {
    "1": {
      "1": "No princípio, criou Deus os céus e a terra.",
      "2": "E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espírito de Deus se movia sobre a face das águas.",
      "3": "E disse Deus: Haja luz. E houve luz."
    }
  }
};

const HISTORICAL_NOTES = {
  "Gênesis": {
    "1": "Notas atualizadas pela Equipe Aliança Cristã"
  }
};

function App() {
  const [selectedBook, setSelectedBook] = useState('Gênesis');
  const [selectedChapter, setSelectedChapter] = useState('1');
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const books = useMemo(() => Object.keys(BIBLE_DATA), []);
  const chapters = useMemo(() => Object.keys(BIBLE_DATA[selectedBook] || {}), [selectedBook]);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="header">
        <h1 className="app-title">Bíblia Aliança Cristã</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </header>

      <div className="navigation-bar">
        <select 
          value={selectedBook}
          onChange={(e) => {
            setSelectedBook(e.target.value);
            setSelectedChapter('1');
          }}
        >
          {books.map(book => (
            <option key={book} value={book}>{book}</option>
          ))}
        </select>

        <select
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
        >
          {chapters.map(chapter => (
            <option key={chapter} value={chapter}>Capítulo {chapter}</option>
          ))}
        </select>
      </div>

      <main className="bible-content" style={{ fontSize: `${fontSize}px` }}>
        {Object.entries(BIBLE_DATA[selectedBook]?.[selectedChapter] || {}).map(([verse, text]) => (
          <div key={verse} className="verse">
            <span className="verse-number">{verse}</span>
            <span className="verse-text">{text}</span>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
