
import axios from 'axios';
import { useEffect, useState } from 'react';
import AdminNav from '../Components/AdminNav';
import styles from '../Styles/HomeAd.module.css';

const HomeAd = ()=>{
    const [total, setTotal] = useState(0);
    const [data, setData] = useState([]);

    const [skin, setSkin] = useState([]);
    const [hair, setHair] = useState([]);


    const getFunc=()=>{
        let res = axios.get('https://fine-puce-bison-cap.cyclic.app/makeup').then((r)=>{
            setData(r.data);
        }).catch((er)=>{})

        let hairD = axios.get('https://fine-puce-bison-cap.cyclic.app/hair').then((r)=>{
            setSkin(r.data);
        }).catch((er)=>{})

        let skinD = axios.get('https://fine-puce-bison-cap.cyclic.app/skin').then((r)=>{
            setHair(r.data);
        }).catch((er)=>{})
    }

    useEffect(()=>{
        getFunc()

        let prods = [...data,...skin,...hair]
        setTotal(prods.length)

    },[])
    
    return <div>

        <div className={styles.heading}>
        <h1>Admin Homepage</h1>
        </div>

        <div>
            <AdminNav/>
        </div>

        <div>
            <div className={styles.DashBox}>
                <div className={styles.DashImgCont}>
                    <div className={styles.DashImgBox}>
                        <h3>Active Offers</h3>
                        <div className={styles.imgDiv}><img src="https://images-static.nykaa.com/uploads/2322f5eb-a8d4-4a4f-ad61-96648f3b6e96.jpg?tr=w-1200,cm-pad_resize" alt="offer" width={'100%'}/></div>
                        <div className={styles.imgDiv}><img src="https://images-static.nykaa.com/uploads/2322f5eb-a8d4-4a4f-ad61-96648f3b6e96.jpg?tr=w-1200,cm-pad_resize" alt="offer" width={'100%'}/></div>
                        <div className={styles.imgDiv}><img src="https://images-static.nykaa.com/uploads/2322f5eb-a8d4-4a4f-ad61-96648f3b6e96.jpg?tr=w-1200,cm-pad_resize" alt="offer" width={'100%'}/></div>
                        <div className={styles.imgDiv}><img src="https://images-static.nykaa.com/uploads/2322f5eb-a8d4-4a4f-ad61-96648f3b6e96.jpg?tr=w-1200,cm-pad_resize" alt="offer" width={'100%'}/></div>
                        <div className={styles.imgDiv}><img src="https://images-static.nykaa.com/uploads/2322f5eb-a8d4-4a4f-ad61-96648f3b6e96.jpg?tr=w-1200,cm-pad_resize" alt="offer" width={'100%'}/></div>
                    </div>
                </div>
                <div className={styles.DashDataCont}>
                    <div className={styles.DashDataBox}>
                        <h2>Inventory</h2>
                            <div style={{height:60}}>

                            </div>
                        <div>
                            <p>Total Products Live: {data.length+skin.length+hair.length}</p>
                            <p>Makeup: {data.length}</p>
                            <p>Hair: {hair.length}</p>
                            <p>Skin: {skin.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default HomeAd;