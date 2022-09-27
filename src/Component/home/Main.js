
import Menu from "./Menu"
import CountUsers from "./CountUsers";
import Content from './Content'

const Main = () => {
    return (
        <>
            <menu className="max-w-7xl m-auto">
                <Menu />
            </menu>
            <main className="px-5 max-w-7xl	 m-auto">
                <CountUsers />
                <Content />
            </main>
        </>
    )
}

export default Main;