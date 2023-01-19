import axios from "axios";
import { useState } from "react";
import Example from "../Example";


const AddProduct = ()=>{
    const [category, setCategory] = useState('');
    const [mainImg, setMainImg] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [img4, setImg4] = useState('');
    const [title, setTitle] = useState('');
    const [brand, setBrand] = useState('');
    const [mrp, setMrp] = useState('');
    const [price, setPrice] = useState('');
    const [quant, setQuant] = useState('');

    const [display, setDisplay] = useState([]);
    
    const changeCat=(e)=>{
        setCategory(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        setDisplay({
            imgM:mainImg,
            img2:img2,
            im3:img3,
            im4:img4,
            title:title,
            brand:brand,
            mrp:mrp,
            price:price,
            qty:quant,
            stock:true,
        })
        
        // addProd(display)
        console.log(display);
    }

    const addProd= async(res)=>{
        console.log(res);
        
        await axios.post(`https://fine-puce-bison-cap.cyclic.app/${category}`,res).then((r)=>{
            console.log(r.data)
        }).catch((e)=>{
            console.log(e)
        })
    }

    return <div>
        <h1>Add Products</h1>

        <div style={{
            width:'60%',
            margin:'auto',
            display:'flex',
            justifyContent:'center',
            border:'1px solid',
            borderRadius:8,
            padding:10,
        }}>
                 {/*  Input Form Start Here*/}
            <form onSubmit={handleSubmit}
                style={{
                display:'flex',
                flexDirection:'column',
                gap: 30,
                padding:10,
                border:'1px solid #ddd'
            }}>
                <div style={{
                    display:'flex',
                    justifyContent:'space-around',
                    border:'1px solid #ddd',
                    padding:10,
                    }}>
                    <p>Select category</p>
                    <select onChange={changeCat}>
                        <option >Select a category</option>
                        <option value="makeup">Makeup</option>
                        <option value="hair">Hair</option>
                        <option value="skin">Skin</option>
                    </select>
                </div>
                <div>
                    <input type="text" onChange={(e)=>{
                        setMainImg(e.target.value)
                    }} value={mainImg} placeholder="Main Image"/>
                    <input type="text" onChange={(e)=>{
                        setImg2(e.target.value)
                    }} value={img2} placeholder="Image2"/>
                    <input type="text" onChange={(e)=>{
                        setImg3(e.target.value)
                    }} value={img3} placeholder="Image3"/>
                    <input type="text" onChange={(e)=>{
                        setImg4(e.target.value)
                    }} value={img4} placeholder="Image4"/>
                </div>

                <input type="text" onChange={(e)=>{
                    setTitle(e.target.value);
                }} value={title} placeholder="Title"/>

                <div>
                    <input type="text" value={brand}
                    onChange={(e)=>{
                        setBrand(e.target.value);
                    }} placeholder="Brand"/>
                    <input type="text" value={quant}
                    onChange={(e)=>{
                        setQuant(e.target.value);
                    }} placeholder="Quantity"/>
                </div>

                <div>
                    <input type="text" value={mrp}
                    onChange={(e)=>{
                        setMrp(e.target.value)
                    }} placeholder="MRP"/>
                    <input type="text" value={price}
                    onChange={(e)=>{
                        setPrice(e.target.value);
                    }} placeholder="Price"/>
                </div>

                <div>
                    <button type="submit" style={{width:250}}>Add</button>
                </div>
            </form>
        </div>
        <Example />
    </div>
}

export default AddProduct;