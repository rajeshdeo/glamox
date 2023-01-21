
import { useNavigate } from 'react-router-dom';

const HomeAd = ()=>{
    const navigate = useNavigate();

    return <div>
        <h1>Admin Homepage</h1>

        <div style={{
            width:'80%',
            margin:'auto',
            border:'1px solid #ddd',
            padding:10,
            display:'flex',
            justifyContent:'space-around'
        }}>
            <button onClick={()=>navigate('/makeupAd')}>Makeup</button>
            <button onClick={()=>navigate('/skinAd')}>Skin</button>
            <button onClick={()=>navigate('/hairAd')}>Hair</button>
        </div>
    </div>
}

export default HomeAd;