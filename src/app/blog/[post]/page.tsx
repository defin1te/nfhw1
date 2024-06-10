'use client';

import { useRouter } from 'next/router';
import { data } from '@/app/data/data';
import Head from 'next/head';
import Link from 'next/link';

interface Params {
    post: string;
}

export default function BlogPost() {
    const router = useRouter(); 
    const { post } = router.query;

    if (!post || typeof post !== 'string') {
        return <div>Post not found</div>;
    }

    const id = parseInt(post.split('-')[0]);
    const postData = data.find(post => post.id === id);

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
