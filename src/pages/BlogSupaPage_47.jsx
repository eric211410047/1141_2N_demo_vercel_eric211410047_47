import { useState , useEffect } from "react";
import Blog_47 from "../components/Blog_47";
import { supabase } from "../../db/clientSupabase_47";
import Wrapper from '../assets/wrappers/Blog2_47';

const BlogSupaPage_47 = () => {
  const [name, setName] = useState("eric");
  const [id, setId] = useState(211410047);
  const [blogs_47, setBlogs_47] = useState([]);

  const fetchBlogFromSupaServer =  async () => {
    try {
      let { data, error } = await supabase.from('blog_47').select('*');
      console.log("blogs", data);
      setBlogs_47(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogFromSupaServer();
  }, []);

  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            Blogs From Supabase --{name},{id}
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
    </Wrapper>
  );
}; 

export default BlogSupaPage_47;