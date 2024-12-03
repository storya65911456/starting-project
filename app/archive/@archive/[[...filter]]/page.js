import { NewsList } from '@/components/news-list';
import { getNewsForYear } from '@/lib/news';

export default ({ params }) => {
    const filter = params.filter;
    const news = getNewsForYear(newsYear);

    return <NewsList news={news} />;
};
