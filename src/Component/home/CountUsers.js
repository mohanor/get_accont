import UserItem from "./UserItem";

const CountUsers = () => {
    return (
        <div className="flex max-w-xs justify-between py-20">
            <UserItem title="Today Users" nbr="20"/>
            <UserItem title="All Users" nbr="300"/>
        </div>

    )
}

export default CountUsers;