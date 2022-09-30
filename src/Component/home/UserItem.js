

const UserItem = (props) => {
    return (
        <div className="flex flex-col text-center shadow p-8">
            <span className="text-[#BFC0C0] text-lg">{props.title}</span>
            <span className="text-[#EF8354] text-lg">{props.nbr}</span>
        </div>
    )
}

export default UserItem;