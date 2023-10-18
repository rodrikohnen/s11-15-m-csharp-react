import { BsPlusCircleFill } from 'react-icons/bs';
import { useRouter } from "next/navigation";

export default function CardMoreRooms() {
    const router = useRouter()
  return (
    <div className="component m-1 p-12 w-[324px] h-[108px] border rounded-lg shadow-md flex items-center">
      
        <div className='flex space-x-8 items-center'>
        <div className="text-wrapper mb-2 text-primary-50 font-light">
          Agregá una nueva sala
        </div>
     
        <section>
        <div>
        <button 
         onClick={() =>{
            router.push('/rooms/createrooms')
         }}
        >
          <BsPlusCircleFill  className="text-4xl sm:text-4xl"/>
        </button>
        </div>
        </section>
        </div>
      </div>
  );
}

