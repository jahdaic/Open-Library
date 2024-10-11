export type IBook = {
	title: string;
	author?: string;
	year?: number;
	summary?: string;
	genre?: string[];
	cover?: string;
	tags?: string[];
	featured?: boolean;
}

export default IBook;