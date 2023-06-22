import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from '../Styles/ProdCard.module.css';


const ProdListCard=(
    {id,image1,title,brand,MRP,price,stock,qty}
    )=>{
        const navigate = useNavigate();

        const deleteFunc=()=>{
            axios.delete(`https://wild-ruby-hermit-crab-tam.cyclic.app/makeup/${id}`).then((r)=>{
    
            }).catch((e)=>{console.log(e);})
        }

        const editFunc=()=>{

        }
    return <table style={{width:'100%'}}>
        <tbody>
            <tr>
                <td className={styles.sku}>{id}</td>
                <td className={styles.image}>
                    <img src={image1} alt="img" width={100}/>
                </td>
                <td className={styles.title}>{title}</td>
                <td className={styles.brand}>{brand}</td>
                <td className={styles.mrp}>{MRP}</td>
                <td className={styles.sell}>{price}</td>
                <td className={styles.stock}>&#x2713;</td>
                <td className={styles.qty}>{qty}</td>
                <td className={styles.buttons}>
                    <div className={styles.buttonBox}>
                            <button onClick={editFunc}>Edit</button>
                            <button onClick={deleteFunc}
                            style={{color:'red'}}>Delete</button>
                    </div>
                </td>
            </tr>       
        </tbody>   
    </table>
}

export default ProdListCard;

// style={{border:'1px solid red'}}