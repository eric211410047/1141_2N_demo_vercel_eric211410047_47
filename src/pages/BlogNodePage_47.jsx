import { useState, useEffect } from 'react';
import { FaMugHot } from 'react-icons/fa6';
import { FaGlobe } from 'react-icons/fa';
import blogData_47 from '../assets/data/blogData.json';
import Blog_47 from '../components/Blog_47';
import Wrapper from '../assets/wrappers/Blog2_47';
const api_url = 'http://localhost:5000/api/blog_47';

const BlogNodePage_47 = () => {
  const [name, setName] = useState('eric');
  const [id, setId] = useState('211410047');
  const [blogs_47, setBlogs_47] = useState([]);
  const fetchBlogFromNodeServer = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('blogs', data);
      setBlogs_47(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogFromNodeServer();
  }, []);
  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from Node--{name},{id}　　
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs_47.map((item) => {
            const { id, title, descrip, category, img } = item;
            const imgPath = img.startsWith('/') ? img : `/${img}`;
            return (
              <Blog_47
                key={id}
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={imgPath}
              />
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default BlogNodePage_47;
