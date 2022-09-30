

const Accounts = ({img, email, pwd, phone, time}) => {
    return (
        <div className="px-5 max-w-7xl mb-5">
            <div className="flex items-center justify-between">
                <div className='flex-none'>
                    <img src={img} />
                </div>
                <div className="flex justify-around flex-auto w-64 text-center">
                    <span>{email}</span>
                    <span>{pwd}</span>
                    <span>{phone}</span>
                    <span>{time}</span>
                </div>
                <div className="flex-none">
                    <button className='bg-[#4F5D75] text-white p-2 w-28 rounded-sm'>
                        DELETE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Accounts;