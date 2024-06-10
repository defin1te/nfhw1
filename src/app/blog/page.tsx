'use client';

import Link from "next/link";
import { data } from '@/app/data/data';
import { slugify } from '@/utils/slugify';

export default function BlogList() {
    return (
        <div className="container flex-column">
            {data.map((post) => (
                <div className="post-card" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>Made by: {post.author}</p>
                    <p>Date: {post.date}</p>
                    <Link href={`/blog/${post.id}-${slugify(post.title)}`}>
                        <button>View</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}
