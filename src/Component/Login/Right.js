
import logo_2 from '../../assets/logo2.svg';
import img_1 from '../../assets/media/left.png';

const Right = () => {
    return (
        <>
            <div className='w-1/2 bg-darkgray p-8 relative'>
                <img src={logo_2} />
                <img src={img_1} className="absolute right-0 bottom-0" />

            </div>
            <button id='btn' className='z-10 absolute border-white border-2 bg-darkgray text-white w-40 h-16 p-3 text-lg' style={{bottom: '10%', left: '-45px', borderRadius: '2.5rem'}}>Sign Up</button>
        </>

    )
}

export default Right