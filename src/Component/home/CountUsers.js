import UserItem from "./UserItem";

const CountUsers = () => {
    return (
        <div className="flex w-48 justify-between py-20">
            <UserItem title="Today Users" nbr="20"/>
            <UserItem title="All Users" nbr="300"/>
        </div>
    )
}

export default CountUsers;