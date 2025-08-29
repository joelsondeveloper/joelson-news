import { HiOutlineClock } from 'react-icons/hi';


const Card = () => {
  return (
    <article className="card min-w-[18rem] max-w-[26rem] grow h-[18rem] bg-white shadow-lg p-8 rounded-lg flex flex-col justify-between"> 
      <span className="tag px-4 rounded-lg bg-azul-500 w-min text-branco-500 text-sm font-semibold">tag</span>
      <h3 className="title text-2xl font-bold">titulo</h3>
      <p className="date flex items-center gap-3 text-gray-500">
        <HiOutlineClock />
        <span className='text-sm font-medium'>data</span>
      </p>
    </article>
  );
};

export default Card;
