import Maologo from '../images/logomao.png'
import './Header.css';
export default function Header(){

    return(
        <div>
            <nav className="boxRoot">
                <div className="boxHeader1">
                    <h1>PAMELA</h1>
                    <img src={Maologo}/>
                    <h1>REINERT</h1>
                </div>

                <div className="boxHeader2">
                    <p>Studio</p>
                    <p>Nail</p>
                    <p>Designer</p>
                </div>
            </nav>
        </div>
    );
}