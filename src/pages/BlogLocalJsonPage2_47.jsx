import { useState, useEffect } from 'react';
import { FaMugHot } from 'react-icons/fa6';
import { FaGlobe } from 'react-icons/fa';
import blogData_47 from '../assets/data/blogData.json';
import Blog2_47 from '../components/Blog2_47';
import Wrapper from '../assets/wrappers/Blog2_47';
import Alert_47 from '../components/Alert_47';

const BlogLocalJsonPage2_47 = () => {
  const [name, setName] = useState('eric');
  const [id, setId] = useState('211410047');
  const [blogs_47, setBlogs_47] = useState(blogData_47);
  const [alert, setAlert] = useState({
    show:false,
    msg:'',
    type:'',
});
const showAlert = (show=false, msg='', type='') => {
    setAlert({show, msg, type});
};
  const removeItem = (id) => {
    showAlert(true,'blog removed','danger');
    setBlogs_47(blogs_47.filter((blog) => blog.id !== id));
  };
  const clearAllBlogs = () => {
    showAlert(true,'clear all blogs','danger');
    setBlogs_47([]);
  };
  const loadAllBlogs = () => {
    showAlert(true,'load all blogs','success');
    setBlogs_47(blogData_47);
  };
  useEffect(() => {
    setBlogs_47(blogData_47);
  }, []);
  return (
    <Wrapper>
      { alert.show &&<Alert_47 alert={alert} showAlert={showAlert}/>}
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from local json 2--{name},{id}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs_47.map((item) => {
            const { id, title, descrip, category, img } = item;
            return (
              <Blog2_47
                key={id}
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={img}
                removeItem={removeItem}
              />
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-8 mt-8">
          <button type='button' className='text-red-700 bg-red-200 hover:.bg-red-300 capitalize px-4 py-2 text-base rounded' 
          onClick={clearAllBlogs}>clear all blogs</button>
          <button type='button' className='text-blue-700 bg-blue-200 hover:.bg-blue-300 capitalize px-4 py-2 text-base rounded ' 
          onClick={loadAllBlogs}>load all blogs</button>
        </div>
      </section>
    </Wrapper>
  );
};

export default BlogLocalJsonPage2_47;
