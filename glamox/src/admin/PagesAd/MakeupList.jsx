import { useNavigate } from 'react-router-dom';

const MakeupAd = ()=>{
    const navigate = useNavigate();

    return <div>
        <h2>Makeup Admin Page</h2>

        <div style={{
            width:'90%',
            margin:'auto',
            border:'1px solid #ddd',
            height:'100vh',
            marginBottom:'10vh',
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center',
        }}>
            <div style={{
                width:'70%',
                margin:'auto',
                border:'1px solid #ddd',
                height:'80%',
            }}>
                <h4>Product List will be displayed here</h4>
            </div>

            <div style={{
                width:'25%',
                margin:'auto',
                border:'1px solid #ddd',
                height:'80%',
            }}>
                <div style={{marginTop:'10vh'}}>
                    <input type="text" placeholder="Search Products"/>
                </div>
                <br /><br /><br /><br />
                <div style={{width:'80%',margin:'auto',border:'1px solid #ddd'}}>
                    <h4>Total Products: </h4>
                    <h4>In Stock: </h4>
                    <h4>Out of Stock: </h4>
                </div>
                <br /><br /><br /><br />
                <div>
                    <button 
                    onClick={()=> navigate('/add')}>
                        Add Products
                    </button>
                </div>
            </div>
        </div>
    </div>
}
export default MakeupAd;