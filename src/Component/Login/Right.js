import { useRef } from 'react';
import logo_2 from '../../logo2.svg';
import img_1 from '../../media/left.png'
const Right = () => {

    const ref = useRef(null)
    const ref2 = useRef(null)
    const movebtn = () => {

        const el2 = ref2.current
        console.log(el2.style.backgroundColor)


        if (el2.style.backgroundColor != '#fff')
            el2.style.backgroundColor = '#fff';
        else
            el2.style.backgroundColor = '#4F5D75'
    }

    return (
        <>
            <div className='w-1/2 bg-darkgray p-8 relative' ref={ref2}>
                <img src={logo_2} />
                <img src={img_1} className="absolute right-0 bottom-0" />

            </div>
            <button onClick={movebtn} ref={ref} id='btn' className='z-10 absolute border-white border-2 bg-darkgray text-white w-40 h-16 p-3 text-lg' style={{bottom: '10%', left: '-45px', borderRadius: '2.5rem'}}>Sign Up</button>
        </>

    )
}

export default Right