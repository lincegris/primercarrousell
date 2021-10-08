import logo from './logo.svg';
import Detalles from './Detalles';

function Card(){
    return(
        <div className='container'>
            <img src={logo} className="App-logo" alt="logo" />
            <Detalles />
        </div>
    );
}
export default Card;