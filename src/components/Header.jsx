import { logo } from "../assets"

const Header = () => {
  return (
    <header className="absolute text-white top-0 left-0 right-0 bg-[#0000]">
        <nav className="flex  items-center py-6 px-3 lg:px-12 justify-between">
            <img src={logo} alt="logo" />
            <ul className="lg:flex space-x-7 hidden">
                <li className="navLink">Home</li>
                <li className="navLink">Marketplace</li>
                <li className="navLink">Creators</li>
                <li className="navLink">Resource</li>
            </ul>
            <button className="border hidden lg:block font-bold lg:text-[20px] rounded-[8px] p-3 border-[#4AED52]">Connect Wallet</button>
        </nav>
    </header>
  )
}

export default Header