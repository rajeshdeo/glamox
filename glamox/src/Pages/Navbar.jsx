import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Navbar = ()=>{
    const navigate = useNavigate();

    return <div>
        <div style={{
            width:'98%',
            height:50,
            margin:'auto',
            border:'1px solid',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            padding:20,

        }}>
            <div>
                <h1>This is main Navbar</h1>
            </div>

            <div>
                <button onClick={()=>navigate('/admin')}>
                    Admin Login
                </button>
            </div>

        </div>
    </div>
}
export default Navbar;