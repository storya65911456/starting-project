import { NewsList } from '@/components/news-list';
import {
    getAvailableNewsMonths,
    getAvailableNewsYears,
    getNewsForYear,
    getNewsForYearAndMonth
} from '@/lib/news';
import Link from 'next/link';

export default ({ params }) => {
    const filter = params.filter;
    const selectYear = filter?.[0];
    const selectMonth = filter?.[1];

    let news;

    let links = getAvailableNewsYears();

    if (selectYear && !selectMonth) {
        news = getNewsForYear(selectYear);
        links = getAvailableNewsMonths(selectYear);
    }

    if (selectYear && selectMonth) {
        news = getNewsForYearAndMonth(selectYear, selectMonth);
        links = [];
    }

    let newsContent = <p>No News</p>;

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />;
    }

    if (
        (selectYear && !getAvailableNewsYears().includes(+selectYear)) ||
        (selectMonth && !getAvailableNewsMonths(selectYear).includes(+selectMonth))
    ) {
        throw new Error('Invalid filter');
    }
    return (
        <>
            <header id='archive-header'>
                <nav>
                    <ul>
                        {links.map((link) => {
                            const href = selectYear
                                ? `/archive/${selectYear}/${link}`
                                : `/archive/${link}`;

                            return (
                                <li key={link}>
                                    <Link href={href}>{link}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
            {newsContent}
        </>
    );
};
