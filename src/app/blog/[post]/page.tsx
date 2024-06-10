'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Import useParams from next/navigation
import { data } from '@/app/data/data';
import Head from 'next/head';
import Link from 'next/link';

interface Post {
    id: number;
    date: string;
    author: string;
    title: string;
    description: string;
}

export default function BlogPost() {
    const { post } = useParams();
    const [postData, setPostData] = useState<Post | null>(null);

    useEffect(() => {
        if (post && typeof post === 'string') {
            const id = parseInt(post.split('-')[0]);
            const foundPost = data.find(post => post.id === id) || null;
            setPostData(foundPost);
        }
    }, [post]);

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
                <div className='post-card'>
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
