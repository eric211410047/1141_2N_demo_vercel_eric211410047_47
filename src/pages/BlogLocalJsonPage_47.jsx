import { useState, useEffect } from 'react';
import { FaMugHot } from 'react-icons/fa6';
import { FaGlobe } from 'react-icons/fa';
import blogData_47 from '../assets/data/blogData.json';
import Blog_47 from '../components/Blog_47';

const BlogNodePage_47 = () => {
  const [name, setName] = useState('eric');
  const [id, setId] = useState('211410047');
  const [blogs_47, setBlogs_47] = useState([]);

  useEffect(() => {
    setBlogs_47(blogData_47);
  }, []);
  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from local json --{name},{id}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs_47.map((item) => {
            const { id, title, descrip, category, img } = item;
            return (
              <Blog_47
                key={id}
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={img}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BlogNodePage_47;
