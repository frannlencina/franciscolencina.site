import { useEffect, useState } from 'react';

export default function StatusActivity() {

    const PUBLIC_ACTIVITY_URL = import.meta.env.PUBLIC_ACTIVITY_URL;
    const [activity, setActivity] = useState({});

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

        fetchData();

    }, []);

    return (
        <div className='flex flex-col'>
            <span className='text-[#A9B5C1] font-bold relative right-3'>ahora</span>
            <div className='flex bg-[#cbd0cb] px-4 py-2 w-fit rounded-xl text-stone-700 select-none cursor-pointer hover:scale-[1.01] transition-all duration-200 hover:skew-y-2 hover:ring-4 hover:ring-[#A9B5C1]'>

                <span>Estoy en {activity && activity.data && activity.data.activities[0].name}</span>
                <i className="ri-arrow-right-s-line"></i>

            </div>

        </div>
    );
}
