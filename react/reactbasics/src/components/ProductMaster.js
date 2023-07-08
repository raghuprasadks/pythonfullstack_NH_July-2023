import React,{useState,useEffect} from 'react'
import axios from 'axios'

const ProductMaster=()=>{

    const [code,setCode]=useState('')
    const [name,setName]=useState('')
    const [desc,setDesc]=useState('')
    const [supplier,setSupplier]=useState('')
    const [price,setPrice]=useState('')
    const [productlist,setProductlist]=useState([])

    const [isEdit,setIsEdit]=useState(true)
    const [isAdd,setIsAdd]=useState(false)
    const baseUrl='http://127.0.0.1:5000/api/product'
    
    const addProduct=()=>{
       // e.preventDefault();
        const product = {name:name,desc:desc,supplier:supplier,price:price}
        console.log("Add product::",product)

        axios.post(baseUrl,product)
        .then((response) => {
            console.log("response data ",response.data)
            //setProductlist([...productlist,response.data])
            listProduct()
          console.log(productlist);
        })
       
       
       clearData()
    }

    const clearData=()=>{
        setName('')
        setDesc('')
        setSupplier('')
        setPrice('')        
    }

    const listProduct=()=>{
        axios.get(baseUrl).then((response) => {
            setProductlist(response.data);
        });
    }


    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setProductlist(response.data);
        });
      }, []);
    

    const deleteProduct=(code)=>{
        console.log('code',code)
       // const afterdelete = emplist.filter((emp)=>emp.code!=code)
       // setEmplist(afterdelete)
       axios.delete(baseUrl+'/'+code).then((response) => {
        //setProductlist(response.data);
        listProduct()
    });
    }

    const updateProduct=(prodtoupdate)=>{
        console.log('product to update',prodtoupdate)
        //const employeetobeupdated = emplist.filter((emp)=>emp.code!=code)
        //setEmplist(afterdelete)
        //setCode(prodtoupdate.code)
        setName(prodtoupdate.name)
        setDesc(prodtoupdate.desc)
        setSupplier(prodtoupdate.supplier)
        setPrice(prodtoupdate.price)  
        setIsEdit(false) 
        setIsAdd(true)
    }

    const editProduct=()=>{
        /**
        const editedemployee = {code:code,name:name,dept:dept,desg:desg,sal:sal}
        console.log("edit Employee",editedemployee)
        
        const afteredit=emplist.map((emp)=>emp.code==editedemployee.code?editedemployee:emp)
        console.log("after edit",afteredit)
        
        setEmplist(afteredit)
        clearData()
        setIsEdit(true) 
        setIsAdd(false)
         */
    }

    const productlistfordisplay=productlist.map((prod)=><tr key={prod.code}>
        <td>{prod.code}</td>
        <td>{prod.name}</td>
        <td>{prod.desc}</td>
        <td>{prod.supplier}</td>
        <td>{prod.price}</td>
        <td><button onClick={()=>deleteProduct(prod.code)} >Delete</button></td>
        <td><button onClick={()=>updateProduct(prod)}>Update</button></td>

        
    </tr>)
 
    return(
        <div>
        <div className='tblcls'>
            <h1>Add Product</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'></input><br/>
            <input value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder='Enter Description'></input><br/>
            <input value={supplier} onChange={(e)=>setSupplier(e.target.value)} placeholder='Enter Supplier'></input><br/>
            <input value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Price'></input><br/>
            <button onClick={addProduct} disabled={isAdd}>Add Product</button>
            <button onClick={editProduct} disabled={isEdit}>Edit Product</button>


        </div>
        <div className='tblcls'>
            <h1>Product List</h1>
            <table>
                <tr>
                    
                    <th>Name</th>
                    <th>Description</th>
                    <th>Supplier</th>
                    <th>Price</th>
                </tr>
                {productlistfordisplay}
                
            </table>
        </div>
        </div>
    )    

}

export default ProductMaster