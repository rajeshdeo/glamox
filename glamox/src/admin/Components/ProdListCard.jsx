import styles from '../Styles/ProdCard.css';

const ProdListCard=(
    {id,image1,title,brand,MRP,price,stock,qty}
    )=>{
        const deleteFunc=()=>{
            console.log('delete');
        }

        const editFunc=()=>{

        }
    return <table style={{width:'100%'}}>
        <tbody>
            <tr>
                <td className='sku'>{id}</td>
                <td className='image'>
                    <img src={image1} alt="img" width={50}/>
                </td>
                <td className='title'>{title}</td>
                <td className='brand'>{brand}</td>
                <td className='mrp'>{MRP}</td>
                <td className='sell'>{price}</td>
                <td className='stock'>&#x2713;</td>
                <td className='qty'>{qty}</td>
                <td className='buttons'>
                    <div style={{
                            display:'flex',
                            alignItems:'center',
                            gap:5,
                            flexDirection:'column',
                            }}>
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