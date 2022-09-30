
import Menu from './Menu'
import Accounts from './Accounts'

const Dashbord = () => {

    const account = [
        {
            img : "/logos/facebook.png",
            email : "Medjalal1997@gmail.com",
            pwd : "1201258745",
            phone : "+212612458937",
            time : 'in 8 min'
        },
        {
            img : "/logos/ff.png",
            email : "Medjalal1997@gmail.com",
            pwd : "1201258745",
            phone : "+212612458937",
            time : 'in 8 min'
        },
        {
            img : "/logos/tw.png",
            email : "Medjalal1997@gmail.com",
            pwd : "1201258745",
            phone : "+212612458937",
            time : 'in 8 min'
        }
    ]

    return (
        <div>
            <Menu />
            <main className="px-5 mt-32 max-w-7xl m-auto">
                {
                    account.map(item => <Accounts {...item}/>)
                }
            </main>
        </div>
    )
}

export default Dashbord;