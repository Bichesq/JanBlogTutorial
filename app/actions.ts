'use client';

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";

export default async function handlesubmission(formdata: FormData) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const title = formdata.get('title') as string
    const content = formdata.get('content') as string
    const image = formdata.get('image') as string

    const post = await prisma.blogPost.create({
        data : {
            title: title,
            content: content,
            imageUrl: image,
            authorId: user.id as string,
            authorName: user.given_name as string
        }
    });    
}