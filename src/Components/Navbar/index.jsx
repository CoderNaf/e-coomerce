import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";


function Navbar (){
    const context = useContext(ShoppingCartContext)
    return(
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-ligth">
            <ul className="flex items-center gap-4">
                <li className="font-bold text-2xl">
                    <NavLink to='/'> 
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'> 
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'> 
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'> 
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'> 
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'> 
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-4">
                <li className="font-bold opacity-40 ">
                    fabiandev@codernaf.com
                </li>
                <li>
                    <NavLink to='/my-orders'> 
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'> 
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sing-in'> 
                        Sing In
                    </NavLink>
                </li>
                🛒 {context.count}
            </ul>
        </nav>      
    )
}

export {Navbar}