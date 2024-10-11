'use client';

import { useMemo, useState } from 'react';
import { IBook, IConfig } from 'types';

import config from '../config/config.example.json';
import styles from '../css/home.module.css';

export const Home = () => {
	const featured = useMemo(() => (config as IConfig).books.filter(book => book.featured) || [], []);
	const [search, setSearch] = useState<string>('');

	const bookSearch = (book: IBook) => {
		if (!search) return 'no-search';

		if (book.title.toLowerCase().includes(search.toLowerCase())) return 'title';
		if (book.author?.toLowerCase().includes(search.toLowerCase())) return 'author';
		if (book.year?.toString().includes(search.toLowerCase())) return 'year';
		if (book.summary?.toLowerCase().includes(search.toLowerCase())) return 'summary';
		if (book.genre?.includes(search.toLowerCase())) return 'genre';
		if (book.tags?.includes(search.toLowerCase())) return 'tag';

		return false;
	};

	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<h1 className={styles.title}>Open Library</h1>
				<input
					type="search"
					placeholder="Search"
					value={search}
					onChange={ev => setSearch(ev.target.value)}
					className={styles.search}
				/>
			</header>

			<main className={styles.bookshelf}>
				{!search && (
					<section className={styles.section}>
						<h2 className={styles.sectionLabel}>Recently Read Books</h2>
						<ul className={styles.bookGroup}>
							{([] as IBook[]).map(book => (
								<li
									key={book.title}
									data-cover={book.cover}
									className={styles.book}
									style={{ backgroundImage: `images/${book.cover}` }}
								>
									<div className={styles.bookTitle}>{book.title}</div>
								</li>
							))}
						</ul>
					</section>
				)}

				{featured.length && !search && (
					<section className={styles.section}>
						<h2 className={styles.sectionLabel}>Featured Books</h2>
						<ul className={styles.bookGroup}>
							{featured.map(book => (
								<li
									key={book.title}
									data-cover={book.cover}
									className={styles.book}
									style={{ backgroundImage: `url('images/${book.cover}')` }}
								>
									<div className={styles.bookTitle}>{book.title}</div>
								</li>
							))}
						</ul>
					</section>
				)}

				<section className={styles.section}>
					<h2 className={styles.sectionLabel}>All Books</h2>
					<ul className={styles.bookGroup}>
						{(config as IConfig).books.filter(bookSearch).map(book => (
							<li
								key={book.title}
								data-cover={book.cover}
								className={styles.book}
								style={{ backgroundImage: `images/${book.cover}` }}
							>
								<div className={styles.bookTitle}>{book.title}</div>
							</li>
						))}
					</ul>
				</section>
			</main>

			<footer className={styles.footer}>
				<blockquote>
					<i>
						“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.” - George R.R.
						Martin
					</i>
				</blockquote>
			</footer>
		</div>
	);
};

export default Home;
