import Link from 'next/link';
import Card from '../components/Card';

const BlogList = [
    {
        id: 1,
        title: 'Blog 1',
        description: 'This is blog 1',
        image: 'https://picsum.photos/200',
    },
    {
        id: 2,
        title: 'Blog 2',
        description: 'This is blog 2',
        image: 'https://picsum.photos/200',
    },
    {
        id: 3,
        title: 'Blog 3',
        description: 'This is blog 3',
        image: 'https://picsum.photos/200',
    },
]
export default function Blog() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 '>
        {BlogList.map((blog) => (
            <Card key={blog.id} cardTitle={blog.title} cardDescription={blog.description} cardImageUrl={blog.image} />
        ))}
    </div>
  );
}
