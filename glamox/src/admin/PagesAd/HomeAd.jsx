
import AdminNav from '../Components/AdminNav';
import styles from '../Styles/HomeAd.module.css';

const HomeAd = ()=>{
    
    return <div>

        <div className={styles.heading}>
        <h1>Admin Homepage</h1>
        </div>

        <div>
            <AdminNav/>
        </div>
    </div>
}

export default HomeAd;