import { useContext } from "react";
import { Link } from "react-router-dom";
import { Krjcontext } from "../App";

export default function Header(){

    const {keranjang}=useContext(Krjcontext);
    
    return(     
        <header className="header">
            <h1 className="title-header">React Store</h1>
            <nav className="navigasi">
                <ul className="container-link">
                <li className="header-link">
                    <Link to="/">Home</Link>
                </li>
                <li className="header-link">
                    <Link to="/about">About</Link>
                </li>
                <li><Link to="/product">Product</Link></li>
                <li>Keranjang ({keranjang.length})</li>
                </ul>
            </nav>
            </header> 
    )
}