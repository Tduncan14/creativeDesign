import {Link} from 'react-router-dom';
import '../App.css';

const Header = () => {




    return(
        <section className="section-1">
             <nav class="navbar">

                 <Link className="navbar-link" to="/about">Design</Link>
                 <Link className="navbar-link" to="/about">Customers</Link>
                 <Link className="navbar-link" to="/about">Team</Link>
                 <Link className="navbar-link" to="/about">Contact</Link>
             
             </nav>

             <div className="floating-bg"></div>
             <h1 className="section-1-heading">Creative Design</h1>
             <div className="logo">
                 <i className="fas fa-bezier-curve"></i>
             </div>
        </section>
    )



}



export default Header;