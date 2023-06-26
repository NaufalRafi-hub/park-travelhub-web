import './styles.css'
export default function Section2sDet(props) {
    const {data} = props 
    console.log (data[0].city[0].place)
    return (
        <div className='bg-grayie'>
            <div className='p-24 flex'>
                <div>
                    <h1 className="italic font-bold w-[160px] mb-20 color-greenie">
                        SELECT CITY
                    </h1>
                
                    {data[0].city.map((item, index) => (
                    <>
                        <h3 className='text-white' key={index}>{item.place}</h3>
                    </>
                    ))}
                </div>
                <h1 className="italic font-bold w-[160px] mb-20 color-greenie">
                    PACKAGES
                </h1>
            </div>
        </div>
        
    )
}