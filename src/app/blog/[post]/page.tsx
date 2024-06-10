// app/blog/[post]/page.tsx
'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { data } from '@/app/data/data';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogPost() {
    const pathname = usePathname();
    const postSlug = pathname.split('/').pop();
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        if (postSlug && typeof postSlug === 'string') {
            const id = parseInt(postSlug.split('-')[0]);
            const foundPost = data.find((post) => post.id === id);
            setPostData(foundPost);
        }
    }, [postSlug]);

    if (!postData) {
        return <div>Post not found</div>;
    }

    return (
        <>
            <Head>
                <title>{postData.title}</title>
                <meta name="description" content={postData.description} />
            </Head>
            <div className="container flex-center">
                <div className="post-card">
                    <h1>{postData.title}</h1>
                    <p>{postData.description}</p>
                    <h4>By: {postData.author}</h4>
                    <p>{postData.date}</p>
                    <Link href="/blog">
                        <button className="return-button">Return back</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
