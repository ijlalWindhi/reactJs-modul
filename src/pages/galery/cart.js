import React, {Component} from "react";  
import {Link} from "react-router-dom";

class Cart extends Component {  
  constructor(){  
    super()
        this.state = {
            cart: [], // untuk menyimpan list cart
            user: "", // untuk menyimpan data nama user
            total: 0, // untuk menyimpan data total belanja
    }
  }  

  initCart = () => {
    // memanggil data cart pada localStorage
    let tempCart = []
    if(localStorage.getItem("cart") !== null){
        tempCart = JSON.parse(localStorage.getItem("cart"))
    }
    

    // memanggil data user pada localStorage
    let userName = localStorage.getItem("user")

    // kalkulasi total harga
    let totalHarga = 0;
    tempCart.map(item => {
        totalHarga += (item.harga * item.jumlahBeli)
    })

    // memasukkan data cart, user, dan total harga pada state
    this.setState({
        cart: tempCart,
        user: userName,
        total: totalHarga
    })
}

    componentDidMount(){
        this.initCart()
    }


  render(){  
    return (  
        <>
                    <div className="ml-10">
                        <h1 className="text-3xl text-center pb-14 underline underline-offset-8 decoration-4 decoration-red-600">Keranjang Belanja</h1>
    
                        <div className="card-body">
                            <h5 className="text-red-500 mb-5 font-bold">
                                Nama User : { this.state.user }
                            </h5>
    
                            <table className="border-collapse border border-slate-400">
                                <thead>
                                    <tr>
                                        <th className="border border-slate-300 bg-gray-200 px-16">Nama Item</th>
                                        <th className="border border-slate-300 bg-gray-200 px-16">Harga</th>
                                        <th className="border border-slate-300 bg-gray-200 px-16">Qty</th>
                                        <th className="border border-slate-300 bg-gray-200 px-16">Total</th>
                                    </tr>
                                </thead>
    
                                <tbody>
                                    { this.state.cart.map( (item, index) => (
                                        <tr key={index}>
                                            <td className="border border-slate-300 text-center">{item.judul}</td>
                                            <td className="border border-slate-300 text-center">Rp {item.harga}</td>
                                            <td className="border border-slate-300 text-center">{item.jumlahBeli}</td>
                                            <td className="border border-slate-300 text-center">
                                                Rp { item.harga * item.jumlahBeli }
                                            </td>
                                        </tr>
                                    ) ) }
                                </tbody>
                            </table>
    
                            <h4 className="text-red-500 mt-5 font-bold">
                                Total Harga: Rp {this.state.total}
                            </h4>

                            <h4 className="mt-10 bg-red-500 py-2 w-20 pl-3 text-white rounded-md"><Link to="/galery">Kembali</Link></h4>
                        </div>
                    </div>
        </>
    );  
  }  
}  
export default Cart;