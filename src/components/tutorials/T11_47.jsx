import Wrapper from '../../assets/wrappers/Tutorials_47';
const T11_47 = () => {
  let count = 0;

  const handleClick = () => {
    count++;
    console.log('count', count);
  };

  return (
    <Wrapper>
      <h2>{count}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        increment
      </button>
    </Wrapper>
  );
};

export default T11_47;
