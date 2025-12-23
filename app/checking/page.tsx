"use client";

import { useState } from "react";

export default function CreateBlog() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!file) return alert("Please select an SVG file");

        setLoading(true);

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = async () => {
            const base64Image = reader.result;

            const res = await fetch("/api/blog", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    content,
                    image: base64Image, // <-- SVG base64
                }),
            });

            setLoading(false);

            if (res.ok) {
                alert("Blog created!");
                setTitle("");
                setContent("");
                setFile(null);
            } else {
                alert("Something went wrong");
            }
        };
    };

    return (
        <div className="max-w-md space-y-4">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 w-full"
            />

            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="border p-2 w-full"
            />

            <input
                type="file"
                
                onChange={(e) => setFile(e.target.files?.[0] || null)}
            />

            <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-black text-white px-4 py-2"
            >
                {loading ? "Uploading..." : "Create Blog"}
            </button>
        </div>
    );
}
