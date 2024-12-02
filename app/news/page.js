import Link from 'next/link';

export default () => {
    return (
        <>
            <h1>News Page</h1>
            <ul>
                <li>
                    <Link href='/news/1'>111111111111</Link>
                </li>
                <li>
                    <Link href='/news/2'>222222222222</Link>
                </li>
                <li>
                    <Link href='/news/3'>333333333333</Link>
                </li>
            </ul>
        </>
    );
};
