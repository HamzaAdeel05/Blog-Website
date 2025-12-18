import { ChevronsRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type PageProps = {
    params: {
        name: string;
    };
};

type Category = {
    id: number;
    name: string;
    slug: string;
    title: string;
    description: string;
};

const CategoryPage = async ({ params }: PageProps) => {
    const { name } = await params;

    const categories: Category[] = [
        {
            id: 1,
            name: "Art",
            slug: "art",
            title: "Art & Creativity",
            description: "Discover creative artworks, designs, and artistic inspiration."
        },
        {
            id: 2,
            name: "Food",
            slug: "food",
            title: "Food & Recipes",
            description: "Explore delicious recipes, food stories, and culinary ideas."
        },
        {
            id: 3,
            name: "lifestyle",
            slug: "lifestyle",
            title: "Modern Lifestyle",
            description: "Tips and ideas for a better, healthier, and stylish lifestyle."
        },
        {
            id: 4,
            name: "Movie",
            slug: "movie",
            title: "Movies & Reviews",
            description: "Latest movie news, reviews, and entertainment updates."
        },
        {
            id: 5,
            name: "Music",
            slug: "music",
            title: "Music & Culture",
            description: "Dive into music trends, artists, and playlists."
        },
        {
            id: 6,
            name: "Top",
            slug: "top",
            title: "Top Stories",
            description: "Handpicked top stories and trending topics."
        },
        {
            id: 7,
            name: "Travel",
            slug: "travel",
            title: "Travel & Adventures",
            description: "Travel guides, destinations, and unforgettable journeys."
        }
    ];

    const pageData = categories.find(
        (category) => category.slug === name
    );

    if (!pageData) {
        return <h1>Page not found!</h1>;
    }

    const blogPosts = [
        {
            id: 1,
            title: "FASHION MODEL SHOOT",
            date: "July 22, 2015",
            excerpt: "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam...",
            image: "https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/07/photography_2-700x529.jpg",
            linkText: "READ MORE"
        },
        {
            id: 2,
            title: "GOLDEN SNOW LAND",
            date: "July 22, 2015",
            excerpt: "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam...",
            image: "https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/07/snow-winter-fallen-trees-700x529.jpg",
            linkText: "READ MORE"
        },
        {
            id: 3,
            title: "FAMILY COMES FIRST",
            date: "July 22, 2015",
            excerpt: "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam...",
            image: "https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/07/02-700x529.jpg",
            linkText: "READ MORE"
        },
        {
            id: 4,
            title: "TRAVEL THE WORLD",
            date: "July 22, 2015",
            excerpt: "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam...",
            image: "https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/07/landscape-nature-water-rocks-700x529.jpg",
            linkText: "READ MORE"
        },
        {
            id: 5,
            title: "CITY CENTER BRIDGE",
            date: "July 22, 2015",
            excerpt: "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam...",
            image: "https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/07/15794918936_855690cb09_b1-700x529.jpg",
            linkText: "READ MORE"
        },
        {
            id: 6,
            title: "BIG CITY LIGHT",
            date: "July 22, 2015",
            excerpt: "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam...",
            image: "https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/07/DeathtoStock_NYC11-Custom1-700x529.jpg",
            linkText: "READ MORE"
        }
    ];


    return (
        <div className='py-5'>
            <div className="flex justify-center items-center py-15 bg-gray-100">
                <h1 className='md:text-4xl text-xl font-medium'>{pageData.title}</h1>
            </div>
            <div className="max-w-300 mx-auto my-10 px-5">
                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map((blog) => (
                        <div key={blog.id} className='space-y-3'>
                            <img src={blog.image} alt='d' />
                            <div className="flex justify-center items-center">
                                <div className=" w-fit  ">
                                    <h2>{blog.title}</h2>
                                    <div className="flex justify-center items-center w-full gap-4">
                                        <div className="w-full border h-0 border-[#B38D51] "></div>
                                        <p className=' text-[12px] whitespace-nowrap text-[#B38D51]'>July 22,2015</p>
                                        <div className="w-full border h-0 border-[#B38D51]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className='text-[13px]'>{blog.excerpt}</p>
                                <Link href='/' className='text-[12px] text-[#B38D51]' >Read More</Link>
                            </div>

                        </div>
                    ))}
                </div>
                <div className="flex justify-end items-center pt-6">
                    <Link href='/' className='flex items-center text-[12px] font-medium'>
                        Older posts <ChevronsRight size={15} /></Link>

                </div>

            </div>
        </div>
    );
};

export default CategoryPage;
