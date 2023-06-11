import Posts from '@posts/posts';
import styles from './styles/originals/page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Posts />
    </main>
  );
}
