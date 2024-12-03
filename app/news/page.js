import { NewsList } from '@/components/news-list';
import { DUMMY_NEWS } from '@/dummy-news';
import Link from 'next/link';

export default () => {
    return (
        <>
            <h1>News Page</h1>
            <NewsList news={DUMMY_NEWS} />
        </>
    );
};
