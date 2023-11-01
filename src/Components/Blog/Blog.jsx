import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    // destructuring 
    const { id, title, cover, reading_time, posted_date, author_img, author, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full h-96 mb-8 rounded-lg' src={cover} alt={`Cover picture of the title ${title}`}></img>
            <div className='flex justify-between mb-4'>
                <div className='flex gap-6'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className='ml-2 text-red-600 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    // if there is no unique key then we'll use maps index as idx as map holds three perimeters (element,id,)
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">{hash}</a> </span>)
                }
            </p>
            <button
                onClick={() => handleMarkAsRead(id, reading_time)}
                className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div >
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;