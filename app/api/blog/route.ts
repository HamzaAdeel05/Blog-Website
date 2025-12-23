import cloudinary from "@/lib/cloudinary";
import connect from "@/lib/db";
import Blog from "@/lib/modals/blogModel";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    try {
        const { title, content, image } = await request.json();
        await connect();

        // Upload SVG to Cloudinary
        const uploadRes = await cloudinary.uploader.upload(image, {
            folder: "blogs",
            resource_type: "image",
        });

        const newBlog = await Blog.create({
            title,
            content,
            imageUrl: uploadRes.secure_url,
        });

        return NextResponse.json(
            { message: "Blog created successfully", blog: newBlog },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Error in creating Blog:", error);
        return NextResponse.json(
            { message: "Error in creating Blog", error: error.message },
            { status: 500 }
        );
    }
};
export const GET = async () => {
    try {
        await connect();
        const blogs = await Blog.find();
        return NextResponse.json(blogs, { status: 200 });
    } catch (error: any) {
        console.error("Error in fetching Blog:", error);
        return NextResponse.json(
            { message: "Error in fetching Blog", error: error.message },
            { status: 500 }
        );
    }
};
