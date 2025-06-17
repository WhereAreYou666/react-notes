import { Tag } from '../Tag/Tag';
import styles from './Note.module.css';

export const Note = (props) => {
  const { title, content, tags, onDelete } = props;

  return (
    <div className={styles.note}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
          <button className={styles.deleteButton} onClick={onDelete} title="Удалить">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.51-1-1h-51-1 1H5v2h14V4z" />
            </svg>
          </button>
      </div>
      <p className={styles.content}>{content}</p>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
    </div>
  );
}