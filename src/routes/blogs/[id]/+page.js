export function load({ params }) {
    // return { props: { id: parseInt(params.id) } }


    const blogs = [
        {
            id: 1,
            title: 'The Art of Minimalism',
            description: 'Discover how minimalism can improve your lifestyle and mental clarity.',
            author: 'Subash Pandey',
            authorImage: '/images/authors/subash_pp.jpg',
            authorDescription: 'A lifestyle blogger who writes about simplicity and mental clarity.',
            createdAt: 'March 15, 2025',
            image: '/images/network1.jpg',
            content: `<h2 id="introduction">Introduction</h2><p>Minimalism is not just about aesthetics...</p><h2 id="benefits">Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2 id="content">Content</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Importance</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> `
        },
        {
            id: 2,
            title: 'Mastering Remote Work',
            description: 'Learn the best strategies for staying productive while working remotely.',
            author: 'Suraj Chhetry',
            authorImage: '/images/authors/suraj_pp.jpg',
            authorDescription: 'A lifestyle blogger who writes about simplicity and mental clarity.',
            createdAt: 'March 15, 2025',
            image: '/images/network1.jpg',
            content: `<h2 id="introduction">Introduction</h2><p>Minimalism is not just about aesthetics...</p><h2 id='benefits'>Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Content</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Importance</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> `
        },
        {
            id: 3,
            title: 'Healthy Eating on a Budget',
            description: 'Tips for maintaining a nutritious diet without overspending.',
            author: 'Subash Pandey',
            authorImage: '/images/authors/subash_pp.jpg',
            authorDescription: 'A lifestyle blogger who writes about simplicity and mental clarity.',
            createdAt: 'March 15, 2025',
            image: '/images/network1.jpg',
            content: `<h2 id="introduction">Introduction</h2>
				<p>Minimalism is not just about aesthetics, but also about mental clarity...</p>
				
				<h2 id="benefits">Benefits</h2>
				<p>1. Clarity in thought </p>
				<p>2. Less stress and more focus...</p>
                <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, sapiente! Consequatur omnis atque numquam obcaecati? Consequuntur dolorem facilis libero quisquam tempore, voluptatibus error vero, reiciendis quis numquam perspiciatis dignissimos asperiores mollitia neque iusto consectetur adipisci nostrum odio. Architecto, tempore perspiciatis.
                
                </p>
				
				<h2 id="conclusion">Conclusion</h2>
				<p>Embracing minimalism can improve your lifestyle significantly...</p>`
        },
        {
            id: 4,
            title: 'Exploring the Cosmos',
            description: 'A beginners guide to understanding the vastness of space. Discover how minimalism can improve your lifestyle and mental clarity.',
            author: 'Suraj Chhetry',
            authorImage: '/images/authors/suraj_pp.jpg',
            authorDescription: 'A lifestyle blogger who writes about simplicity and mental clarity.',
            createdAt: 'March 15, 2025',
            image: '/images/network1.jpg',
            content: `<h2 id="introduction">Introduction</h2><p>Minimalism is not just about aesthetics...</p><h2>Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2 id="content">Content</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2  id="importance">Importance</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2  id="benefits">Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> <h2>Benefits</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nostrum, error dignissimos enim voluptas excepturi eligendi quas velit soluta quidem impedit consectetur minima quis veritatis quae voluptatum, neque quos amet? </p> `
        }
    ];


    const blog = blogs.find(b => b.id == parseInt(params.id));
    if (!blog) {
        return { status: 404, error: new Error('Blog not found') };
    }

    return { props: { blog } };



}