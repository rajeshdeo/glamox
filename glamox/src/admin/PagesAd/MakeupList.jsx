import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNav from '../Components/AdminNav';
import ProdListCard from '../Components/ProdListCard';
// import styles from '../Styles/ProdCard.module.css';
import styles from '../Styles/tableHeadingAd.module.css'
const MakeupAd = ()=>{
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    

    const getFunc=()=>{
        let res = axios.get('https://fine-puce-bison-cap.cyclic.app/makeup').then((r)=>{
            setData(r.data);
            setLoading(!loading)
            // console.log(r.data);
        }).catch((er)=>{})
    }


    useEffect(()=>{
        getFunc();
    },[])
    
    if(loading===true)
    {
        return (
            <h1 style={{
                textAlign:'center',
                fontSize:50
            }}>
                ...Loading Please Wait
            </h1>
        )
    }
    else
    {

    return <div>
        <div className={styles.heading}>
            <h2>Makeup Admin Page</h2>
        </div>

        <div>
            <AdminNav/>
        </div>

        <div className={styles.tableContainer}>
            <div className={styles.tableBox}>
                <div>
                <table>
                        <thead>
                            <tr className='head_row'>
                                <th className={styles.sku}>ID</th>
                                <th className={styles.image}>Image</th>
                                <th className={styles.title}>Title</th>
                                <th className={styles.brand}>Brand</th>
                                <th className={styles.mrp}>MRP</th>
                                <th className={styles.sell}>Selling Price</th>
                                <th className={styles.stock}>Stock</th>
                                <th className={styles.qty}>Qty</th>
                                <th className={styles.buttons}></th>
                            </tr>
                        </thead>                    
                    </table>
                </div>
                <div>
                    <div style={{width:'100%'}}>
                        {/* {console.log(data)} */}
                        {
                            data.length>0 && data.map((el)=>{
                                return <ProdListCard key={el.id} {...el} />
                            })
                        }
                    </div>
                </div>
            </div>

            <div className={styles.sideContainer}>
                
                <br /><br /><br /><br />

                <div className={styles.sideBox}>
                    <h4>Total Products: {data.length}</h4>
                    <h4>In Stock: {data.filter((el)=>el.stock===true).length}</h4>
                    <h4>Out of Stock: {data.filter((el)=>el.stocktrue).length}</h4>
                </div>
                <br /><br /><br /><br />
                
                <div className={styles.sideAddButtonBox}>
                    <button
                    className={styles.sideAddButton}
                    onClick={()=> navigate('/add')}>
                        Add Products
                    </button>
                </div>
            </div>
        </div>
    </div>

}
}
export default MakeupAd;