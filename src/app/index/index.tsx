'use client';

import Link from "next/link";
import { data } from '@/app/data/data';
import { slugify } from '@/utils/slugify';

export default function BlogList() {
    return (
        <div className="w-full pl-2 pt-4 flex flex-col justify-center">
            {data.map((post, index) => (
                <div className="font-semibold text-xl space-y-2 p-2 w-1/4" key={index} >
                    <div>Made by: {post.author}</div>
                    <div>Date: {post.date}</div>
                    <Link href={`/blog/${post.id}-${slugify(post.title)}`}>
                        <button className="border-2 bg-slate-200 rounded-lg p-0.5">
                            View
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
}
