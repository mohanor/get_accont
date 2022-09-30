
import Menu from "./Menu"
import CountUsers from "./CountUsers";
import Content from './Content'

const Main = () => {
    return (
        <>
            <Menu />
            <main className="px-5 max-w-7xl	 m-auto">
                <CountUsers />
                <Content />
            </main>
        </>
    )
}

export default Main;