import { FaMugHot, FaMugSaucer } from 'react-icons/fa6';
import { FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Blog2_47 = ({id,img,category,title,descrip,removeItem}) => {
  return (
    <article key ={id} className='blog'>
      <img src={img} alt={title} className='img blog-img' />
      <div className='blog-content'>
        <span className='flex'>
          {category}
          {category === 'lifestyle' ? (<FaMugSaucer className='ml-1' color='blue' size={14}/>) : (<FaGlobe className='ml-1'color='blue'size={14}/>)}
        </span>
        <h3>{title}</h3>
        <p>{descrip}</p>
        <div className='flex justify-between item-center'>
          <Link to ='#'>read more</Link>
          <button type='button' className='text-red-700 bg-red-100 capitalize px-2 py-1 hover:bg-red-300 rounded' 
          onClick={() => removeItem(id)}>delete</button>
        </div>
          
      </div>
    </article>
  );
};

export default Blog2_47;
