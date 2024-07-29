// import Link from 'next/link';
// import Card from '../components/Card';

// const BlogList = [
//     {
//         id: 1,
//         title: 'Blog 1',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, perspiciatis commodi? Mollitia numquam aut ipsa at rem id, possimus quisquam sint voluptas blanditiis dolore quidem libero, magnam consectetur in! At.',
//         image: 'https://picsum.photos/200',
//         slug: 'blog-1',
//     },
//     {
//         id: 2,
//         title: 'Blog 2',
//         description: 'Id nihil excepturi soluta accusantium vel iste cumque necessitatibus nisi nesciunt in, perspiciatis ipsum dolores! Facere fuga provident adipisci facilis optio corporis, aperiam tempora eaque, iusto suscipit ducimus, incidunt sequi.',
//         image: 'https://picsum.photos/200',
//         slug: 'blog-2',
//     },
//     {
//         id: 3,
//         title: 'Blog 3',
//         description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, perspiciatis commodi? Mollitia numquam aut ipsa at rem id, possimus quisquam sint voluptas blanditiis dolore quidem libero, magnam consectetur in! At.',
//         image: 'https://picsum.photos/200',
//         slug: 'blog-3',
//     },
// ]

// export default function Blog() {
//   return (
//     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 my-4'>
//       {BlogList.map((blog) => (
//         <Link href={`/blog/${blog.slug}`} key={blog.id}>
//           <Card cardTitle={blog.title} cardDescription={blog.description} cardImageUrl={blog.image} />
//         </Link>
//       ))}
//     </div>
//   );
// }



import Link from 'next/link';
import Card from '../components/Card';

const BlogList = [
    {
        id: 1,
        title: 'Introduction to Next.js',
        description: 'Learn the basics of Next.js and why its a great framework for React applications.',
        image: 'https://picsum.photos/seed/nextjs/200',
        slug: 'intro-to-nextjs',
        category: 'tech',
    },
    {
        id: 2,
        title: 'Exploring Paris',
        description: 'A journey through the City of Light, exploring its culture, cuisine, and hidden gems.',
        image: 'https://picsum.photos/seed/paris/200',
        slug: 'exploring-paris',
        category: 'travel',
    },
    {
        id: 3,
        title: 'The Art of Sushi Making',
        description: 'Dive into the intricate world of sushi preparation and its cultural significance.',
        image: 'https://picsum.photos/seed/sushi/200',
        slug: 'sushi-making',
        category: 'food',
    },
];

export default function Blog() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 my-4'>
      {BlogList.map((blog) => (
        <Link href={`/blog/${blog.category}/${blog.slug}`} key={blog.id}>
          <Card cardTitle={blog.title} cardDescription={blog.description} cardImageUrl={blog.image} />
        </Link>
      ))}
    </div>
  );
}