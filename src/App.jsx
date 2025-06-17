import { useEffect, useState } from 'react';
import styles from './App.module.css'
import { Header } from './components/Header/Header';
import { NotesList } from './components/NotesList/NotesList';
import { NotesForm } from './components/NotesForm/NotesForm';
import { Search } from './components/Search/Search';
import { TagsList } from './components/TagsList/TagsList';

const LOCAL_STORAGE_KEY = 'notes';

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem(LOCAL_STORAGE_KEY);

    return savedNotes ? JSON.parse(savedNotes) : [];
});

  const [searchQuery, setSearchQuery] = useState('');

  const onAddNote = (note) => {
    setNotes([...notes, note]);
  };
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const filteredNotes = notes.filter(note => note.title.includes(searchQuery) || note.tags.includes(searchQuery));
  const uniqueTags = [...new Set(notes.reduce((acc, note) => acc.concat(note.tags), []))];
  const onTagClick = (tag) => {
    setSearchQuery(tag);
  }

  return (
    <div className={styles.app}>
        <div className={styles.container}>
            <Header notesCount={notes.length} />
            <NotesForm onAddNote={onAddNote} />
            <Search value={searchQuery} onChange={setSearchQuery} />
            <TagsList tags={uniqueTags} onTagClick={onTagClick}/>
            <NotesList notes={filteredNotes} setNotes={setNotes} />
        </div>
    </div>
  );
}

export default App
