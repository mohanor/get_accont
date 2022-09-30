
import MediaItem from "./MediaItem";

const Content = () => {

    const media = [
        {
            img : '/logos/facebook.png',
            name: 'facebook',
            lk : 'facebook link'
        },
        {
            img : '/logos/tw.png',
            name: 'twiter',
            lk : 'twtr line'
        },
        {
            img : '/logos/ff.png',
            name: 'free fire',
            lk : 'free fire link'
        }
    ]


    return (
        <div className="">
            <div className="relative text-gray-600 focus-within:text-gray-400">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                </span>
                <input className="border w-2/3 max-w-md	py-2 text-sm rounded-md pl-10 focus:outline-none" placeholder="Search" />
            </div>
            <div className='mt-12'>
                {
                    media.map(
                        item => <MediaItem {...item}/>
                    )
                }
            </div>
        </div>
    )
}

export default Content;