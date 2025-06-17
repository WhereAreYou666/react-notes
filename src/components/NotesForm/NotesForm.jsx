import { useState } from "react";
import styles from "./NotesForm.module.css";

export const NotesForm = function NotesForm({ onAddNote }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
    const [error, setError] = useState(null);

    const onSubmit = (event) => {
        event.preventDefault();

        if (!title.trim()) {
            setError('Введите заголовок заметки');
            return;
        } else {
            const note = {
                title,
                content,
                tags: tags.length ? tags.split(',') : [],
                id: Math.random().toString(),
            }
            onAddNote(note);

            setTitle('');
            setContent('');
            setTags('');
        }
    };

    return (
        <form className={styles.notesForm}>
            <input
                type="text"
                placeholder="Заголовок заметки"
                value={title}
                onChange={(event) => {
                    setTitle(event.target.value);
                    if (error) {
                        setError('');
                    }
                }}
                className={styles.inputField}
            />
            {error && <span className={styles.error}>{error}</span>}
            <textarea
            placeholder="Содержание заметки"
            value={content}
                onChange={(event) => {
                    setContent(event.target.value);
                }}
            className={styles.inputField} />
            <input
                type="text"
                placeholder="Теги (через запятую)"
                value={tags}
                onChange={(event) => {
                    setTags(event.target.value);
                }}
                className={styles.inputField}
            />
            <button
            type="submit"
            onClick={onSubmit}
            className={styles.button}>
                Добавить заметку
            </button>
        </form>
    );
};