

const AddProduct = ()=>{

    const handleSubmit=(e)=>{
        e.preventDefault();
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
            <form onSubmit={handleSubmit} style={{
                display:'flex',
                flexDirection:'column',
                gap: 30,
                padding:10,
                border:'1px solid #ddd'
            }}>
                <select id="">
                    <option value="">Select Category</option>
                    <option value="">Makeup</option>
                    <option value="">Hair</option>
                    <option value="">Skin</option>
                </select>
                <div>
                    <input type="text" placeholder="Main Image"/>
                    <input type="text" placeholder="Image2"/>
                    <input type="text" placeholder="Image3"/>
                    <input type="text" placeholder="Image4"/>
                </div>
                <input type="text" placeholder="Title"/>
                <input type="text" placeholder="Brand"/>
                <div>
                    <input type="text" placeholder="MRP"/>
                    <input type="text" placeholder="Price"/>
                </div>
                <div>
                <input type="text" placeholder="Rating"/>
                <input type="text" placeholder="Reviews"/>
                </div>

                <div>
                    <button style={{width:250}}>Add</button>
                </div>
            </form>
        </div>
    </div>
}

export default AddProduct;