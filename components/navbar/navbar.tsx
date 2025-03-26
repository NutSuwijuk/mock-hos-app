// import Logo from "./Logo"
// import Search from "./Search"


import { DarkMode } from "./darkmode"
import DropdownListMenu from "./DropdownListMenu"
import Logo from "./logo"
import Search from "./search"

const Navbar = () => {
  return (
    <nav>
      <div className="container flex flex-col justify-between py-8 sm:flex-row sm:itme-center gap-4">
        {/* Logo */}
        <Logo></Logo>
        {/* Search */}
        <Search></Search>
        {/* DarkMode & Profile */}
        <div className="flex gap-4">
          <DarkMode/>
          <DropdownListMenu/>
        </div>
      </div>
    </nav>
  )
}
export default Navbar