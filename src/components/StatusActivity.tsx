import { useEffect, useState } from 'react';

export default function StatusActivity() {

    const PUBLIC_ACTIVITY_URL = import.meta.env.PUBLIC_ACTIVITY_URL;
    const [activity, setActivity] = useState({});

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const reponse = await fetch(PUBLIC_ACTIVITY_URL).then((response) =>
                    response.json())
                setActivity(reponse)
            } catch {
                console.log('Error en la solicitud');
            }

        };
        console.log(activity)


        fetchData();

    }, [console.log(activity)]);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup function to reset the overflow when the component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showModal]);


    return (
        <>
            {
                showModal ? 
                <div className='fixed z-20 bg-black bg-opacity-80 left-0 top-0 w-screen h-screen'>
                    <div className='absolute px-6 py-4 z-30 left-[30%] md:left-[40%] top-[30%] m-6  min-w-[200px] bg-[#e9e9e9] rounded-xl shadow-xl'>
                    <h4 className='text-black opacity-80 font-black'>Aplicaciones que estoy utilizando</h4>
                    <div className='flex flex-col gap-2'>
                        {
                            activity.data.activities.map((item, key) => (
                                <div key={key} className=' select-none my-2'>
                                    <p className='font-medium text-blakc opacity-80 hover:text-[#6c9fcf] cursor-pointer'> <i className="ri-map-pin-3-line"></i> {item.name}</p>
                                    <p className='text-xs font-medium text-black opacity-65 ml-4'>{  item.details && <div>detalles:  {item.details}</div>  }</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='opacity-30 text-xs mt-4'>Dicha actividad es rastreada con <a className='font-bold hover:text-[#2b5072]' href="https://api.lanyard.rest/v1/users/634861383401472020" target='_blank'>Lanyard API</a> </div>
                </div>
                </div>
                 : ''
            }
            <div className='relative flex flex-col z-30'>
                <span className='text-[#A9B5C1] font-bold relative right-3'>ahora</span>
                <div onClick={() => { setShowModal(!showModal) }} className='flex bg-[#cbd0cb] px-4 py-2 w-fit rounded-xl text-stone-700 select-none cursor-pointer hover:scale-[1.01] transition-all duration-200 hover:skew-y-2 hover:ring-4 hover:ring-[#A9B5C1]'>

                    <span>Estoy en {activity && activity.data && activity.data.activities[0].name}</span>
                    <i className="ri-arrow-right-s-line"></i>

                </div>

            </div>
        </>
    );
}
