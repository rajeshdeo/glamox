import axios from "axios";
import { useState } from "react";
import AdminNav from "../Components/AdminNav";
import styles from '../Styles/addProduct.module.css';

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
    const [display, setDisplay] = useState('Add Products')

    const handleSubmit=(e)=>{
        e.preventDefault();
        let data = JSON.stringify({
            image1:mainImg,
            image2:img2,
            image3:img3,
            image4:img4,
            title:title,
            brand:brand,
            MRP:mrp,
            price:price,
            rating:4.1,
            review:1256,
            stock:true,
            qty:quant,
        });
        
        addProd(data);
        setMainImg('');
        setImg2('')
        setImg3('')
        setImg4('')
        setTitle('')
        setBrand('')
        setMrp('')
        setPrice('')
        setQuant('')
        console.log(data);
    }

    const addProd= async(res)=>{
        await axios.post(`https://wild-ruby-hermit-crab-tam.cyclic.app/${category}`,res,
        {headers:{"Content-Type" : "application/json"}}).then((r)=>{
            setDisplay(`Product Added Succesfully to ${category}`)
            // console.log(r.response.data)
        }).catch((e)=>{
            setDisplay(`Product Added Succesfully to ${category}`)
            // console.log(e.response.data)
        })
    }

    return <div>
        <div className={styles.heading}>
            <h1>{display}</h1>
        </div>
        <AdminNav/>

        <div className={styles.addContainer}>
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
                    borderRadius:8
                    }}>
                    <p> Category</p>
                    <select className={styles.select} onChange={(e)=>setCategory(e.target.value)}>
                        <option >Select category</option>
                        <option value="makeup">Makeup</option>
                        <option value="hair">Hair</option>
                        <option value="skin">Skin</option>
                    </select>
                </div>

                <div className={styles.imageInputBox}>
                    <input className={styles.input} type="text" onChange={(e)=>{
                        setMainImg(e.target.value)
                    }} value={mainImg} placeholder="Main Image"/>
                    <input className={styles.input} type="text" onChange={(e)=>{
                        setImg2(e.target.value)
                    }} value={img2} placeholder="Image2"/>
                    <input className={styles.input} type="text" onChange={(e)=>{
                        setImg3(e.target.value)
                    }} value={img3} placeholder="Image3"/>
                    <input className={styles.input} type="text" onChange={(e)=>{
                        setImg4(e.target.value)
                    }} value={img4} placeholder="Image4"/>
                </div>

                <input className={styles.input} type="text" onChange={(e)=>{
                    setTitle(e.target.value);
                }} value={title} placeholder="Title"/>

                <div className={styles.imageInputBox}>
                    <input className={styles.input} type="text" value={brand}
                    onChange={(e)=>{
                        setBrand(e.target.value);
                    }} placeholder="Brand"/>
                    <input className={styles.input} type="number" value={quant}
                    onChange={(e)=>{
                        setQuant(e.target.value);
                    }} placeholder="Quantity"/>
                </div>

                <div className={styles.imageInputBox}>
                    <input className={styles.input} type="number" value={mrp}
                    onChange={(e)=>{
                        setMrp(e.target.value)
                    }} placeholder="MRP"/>
                    <input className={styles.input} type="number" value={price}
                    onChange={(e)=>{
                        setPrice(e.target.value);
                    }} placeholder="Price"/>
                </div>

                <div className={styles.sideAddButtonBox}>
                    <button className={styles.sideAddButton}
                    type="submit" style={{width:250}}>Add</button>
                </div>
            </form>
        </div>
    </div>
}

export default AddProduct;