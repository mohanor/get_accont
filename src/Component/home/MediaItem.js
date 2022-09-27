
const MediaItem = (props) => {

    /*const copy = async () => {
        await navigator.clipboard.writeText(text);
        alert('Text copied');
      }*/
    

    return (
        <div className='flex justify-between items-center mb-6'>
            <div className='flex items-center'>
                <div className='mr-10'>
                    <img src={props.img} className='h-full'/>
                </div>
                <div>
                    <span className='text-lg'>Facebook</span>
                </div>
            </div>
            <div className='text-left'>
                <button className='bg-[#4F5D75] text-white p-2 w-28 rounded-md'>
                    Copie
                </button>
            </div>
        </div>
    )
}


export default MediaItem;