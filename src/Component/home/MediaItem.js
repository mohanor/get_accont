import { useState } from "react";

const MediaItem = ({img,name, lk}) => {

    const [copied, setCopied] = useState(false);

    const copy = (event) => {
        navigator.clipboard.writeText(event.target.attributes.getNamedItem("data-link").value)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }
    
    return (
        <div className='flex justify-between items-center mb-6'>
            <div className='flex items-center'>
                <div className='mr-10'>
                    <img src={img} className='h-full'/>
                </div>
                <div>
                    <span className='text-lg'>{name}</span>
                </div>
            </div>
            <div className='text-left'>
                <button className='bg-[#4F5D75] text-white p-2 w-28 rounded-md' data-link={lk} onClick={copy}>
                    {copied ? 'Copied' : 'Copie'}
                </button>
            </div>
        </div>
    )
}


export default MediaItem;