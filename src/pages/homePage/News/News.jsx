import NewsCard from './NewsCard';
const News = () => {
  return (
    <div className='bg-red-700 py-28'>
      <p className='mb-10 ml-10 text-3xl text-white font-bold'>News</p>
      <div className='flex justify-center mx-10 overflow-auto gap-5'>

      <NewsCard></NewsCard>
      </div>
             
    </div>
  );
};

export default News;