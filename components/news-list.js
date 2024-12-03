import Link from 'next/link';
import React from 'react';

export const NewsList = ({ news }) => {
    return (
        <ul className='news-list'>
            {news.map((newsItem) => (
                <li key={newsItem.id}>
                    <Link href={`/news/${newsItem.slug}`}>
                        <img
                            src={`/images/news/${newsItem.image}`}
                            alt={newsItem.title}
                        ></img>
                        <span>{newsItem.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};