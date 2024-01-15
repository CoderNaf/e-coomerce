import { NavLink } from "react-router-dom"

function Navbar (){
    return(
        <nav>
            <ul>
                <li>
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
            <ul>
                <li>
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
                🛒 0
            </ul>
        </nav>      
    )
}

export {Navbar}