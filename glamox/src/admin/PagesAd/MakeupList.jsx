import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProdListCard from '../Components/ProdListCard';
import styles from '../Styles/ProdCard.css';

const MakeupAd = ()=>{
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(()=>{
        let res = axios.get('https://fine-puce-bison-cap.cyclic.app/makeup').then((r)=>{
            setData(r.data);
            // console.log(r.data);
        }).catch((er)=>{})
    },[])

    return <div>
        <h2>Makeup Admin Page</h2>

        <div style={{
            width:'95%',
            margin:'auto',
            border:'1px solid #ddd',
            height:'100vh',
            marginBottom:'5vh',
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center',
        }}>
            <div style={{
                width:'73%',
                margin:'auto',
                border:'1px solid #ddd',
                height:'80%',
                overflow:'scroll',
                overflowX:'hidden',
            }}>
                <div>
                <table>
                        <thead>
                            <tr className='head_row'>
                                <th className='sku'>SKU</th>
                                <th className='image'>Image</th>
                                <th className='title'>Title</th>
                                <th className='brand'>Brand</th>
                                <th className='mrp'>MRP</th>
                                <th className='sell'>Selling Price</th>
                                <th className='stock'>Stock</th>
                                <th className='qty'>Qty</th>
                                <th className='buttons'></th>
                            </tr>
                        </thead>                    
                    </table>
                </div>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                }}>
                    
                    <div style={{width:'100%'}}>
                        {/* {console.log(data)} */}
                        {
                            data.length>0 && data.map((el)=>{
                                return <ProdListCard key={el.id} {...el}/>
                            })
                        }
                    </div>
                </div>
            </div>

            <div style={{
                width:'20%',
                margin:'auto',
                border:'1px solid #ddd',
                height:'80%',
            }}>
                <div style={{marginTop:'5vh'}}>
                    <input type="text" placeholder="Search Products"/>
                </div>
                <br /><br /><br /><br />
                <div style={{width:'80%',margin:'auto',border:'1px solid #ddd'}}>
                    <h4>Total Products: {data.length}</h4>
                    <h4>In Stock: {data.filter((el)=>el.stock===true).length}</h4>
                    <h4>Out of Stock: {data.filter((el)=>el.stocktrue).length}</h4>
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