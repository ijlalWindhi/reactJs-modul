import React, {Component} from "react";  
import Card from "./card";
import { Link } from "react-router-dom";

class Gallery extends Component {  
  constructor(){  
    super()
        this.state = {
            buku: [
                {
                    isbn:"12345", judul:"Bulan", penulis:"Tere Liye",
                    penerbit:"CV Harapan Kita", harga: 90000,
                    cover:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fmojokstore.com%2Fproduct%2Ftapak-jejak%2F&psig=AOvVaw0YpMssLlUzB_UH7UZSjypg&ust=1648684169172000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjjnqTB7PYCFQAAAAAdAAAAABAD"
                },
                {
                    isbn:"12346", judul:"Anak Badai", penulis:"Tere Liye",
                    penerbit:"CV Nusa Bangsa", harga: 80000,
                    cover:"https://drive.google.com/uc?id=1rJDcCOmsd14NL6DG3Wps_kewZomGcLU-"
                },
                {
                    isbn:"54321", judul:"Bumi", penulis:"Tere Liye",
                    penerbit:"CV Nusa Bangsa", harga: 70000,
                    cover:"https://drive.google.com/uc?id=1e-thvq7lkG1_gw0FqHzRoiAhfhdgpOUj"
                },
            ],
 
            action: "",
            isbn: "",
            judul: "",
            penulis: "",
            penerbit: "",
            harga: 0,
            cover: "",
            user: "",
            selectedItem: null,
        }
        this.state.filterBuku = this.state.buku
  }  
    
    Add = () => {
        this.setState({
            isbn: Math.random(1,10000000),
            judul: "",
            penulis: "",
            penerbit: "",
            cover: "",
            harga: 0,
            action: "insert"
        })
    }


    Save = (event) => {
        event.preventDefault();
        // menampung data state buku
        let tempBuku = this.state.buku

        if (this.state.action === "insert") {
            // menambah data baru
            tempBuku.push({
                isbn: this.state.isbn,
                judul: this.state.judul,
                penulis: this.state.penulis,
                penerbit: this.state.penerbit,
                cover: this.state.cover,
                harga: this.state.harga,
            })
        }else if(this.state.action === "update"){
            // menyimpan perubahan data
            let index = tempBuku.indexOf(this.state.selectedItem)
            tempBuku[index].isbn = this.state.isbn
            tempBuku[index].judul = this.state.judul
            tempBuku[index].penulis = this.state.penulis
            tempBuku[index].penerbit = this.state.penerbit
            tempBuku[index].cover = this.state.cover
            tempBuku[index].harga = this.state.harga
        }

        this.setState({buku : tempBuku})
    }

    Edit = (item) => {
        this.setState({
            isbn: item.isbn,
            judul: item.judul,
            penulis: item.penulis,
            penerbit: item.penerbit,
            cover: item.cover,
            harga: item.harga,
            action: "update",
            selectedItem: item
        })
    }


    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){
            // menghapus data
            let tempBuku = this.state.buku
            // posisi index data yg akan dihapus
            let index = tempBuku.indexOf(item)
 
            // hapus data
            tempBuku.splice(index, 1)
 
            this.setState({buku: tempBuku})
        }
    }

    searching = event => {
        if(event.keyCode === 13){
            // 13 adalah kode untuk tombol enter
 
            let keyword = this.state.keyword.toLowerCase()
            let tempBuku = this.state.buku
            let result = tempBuku.filter(item => {
                return item.judul.toLowerCase().includes(keyword) ||
                item.penulis.toLowerCase().includes(keyword) || 
                item.penerbit.toLowerCase().includes(keyword)
            })
 
            this.setState({filterBuku: result})
        }
    }

    setUser = () => {
        // cek eksistensi dari session storage
        if(localStorage.getItem("user") === null){
            // kondisi jika session storage "user" belum dibuat
            let prompt = window.prompt("Masukkan Nama Anda","")
            if(prompt === null || prompt === ""){
                // jika user tidak mengisikan namanya
                this.setUser()
            }else{
                // jika user telah mengisikan namanya
 
                // simpan nama user ke session storage
                localStorage.setItem("user", prompt)
 
                // simpan nama user ke state.user
                this.setState({user: prompt})
            }
        }else{
            // kondisi saat session storage "user" telah dibuat
 
            // akses nilai dari session storage "user"
            let name = localStorage.getItem("user")
            this.setState({user: name})
        }
    }

    addToCart = (selectedItem) => {
        // membuat sebuah variabel untuk menampung cart sementara
        let tempCart = []
 
        // cek eksistensi dari data cart pada localStorage
        if(localStorage.getItem("cart") !== null){
            tempCart = JSON.parse(localStorage.getItem("cart"))
            // JSON.parse() digunakan untuk mengonversi dari string -> array object
        }
 
        // cek data yang dipilih user ke keranjang belanja
        let existItem = tempCart.find(item => item.isbn === selectedItem.isbn)
 
        if(existItem){
            // jika item yang dipilih ada pada keranjang belanja
            window.alert("Anda telah memilih item ini")
        }else{
            // user diminta memasukkan jumlah item yang dibeli
            let promptJumlah = window.prompt("Masukkan jumlah item yang beli","")
            if(promptJumlah !== null && promptJumlah !== ""){
                // jika user memasukkan jumlah item yg dibeli
 
                // menambahkan properti "jumlahBeli" pada item yang dipilih
                selectedItem.jumlahBeli = promptJumlah
                
                // masukkan item yg dipilih ke dalam cart
                tempCart.push(selectedItem)
 
                // simpan array tempCart ke localStorage
                localStorage.setItem("cart", JSON.stringify(tempCart))
            }
        }
    }


    componentDidMount(){
        this.setUser()
    }

  render(){  
    return (  
        <>
            <div className="container">
                <div className="py-5 px-5 font-semibold">
                    <h1 className="text-3xl text-center pb-14 underline underline-offset-8 decoration-4 decoration-red-600">Galerry Buku</h1>
                    <div className="flex flex-row items-center mb-5">
                        <h4 className="font-medium my-2">
                        Selamat Berbelanja <span className="italic">{ this.state.user }</span>
                        </h4>
                        <h6 className="ml-5 text-white bg-red-500 text-medium py-2 px-5 rounded-md float-right"><Link to="/cart">Keranjang</Link></h6>
                    </div>
                    <input type="text" className="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200 mb-5" placeholder="Pencarian..."
                    value={this.state.keyword}
                    onChange={ev => this.setState({keyword: ev.target.value})}
                    onKeyUp={ev => this.searching(ev)}
                    />

                    <div className=" flex flex-row gap-4 grid grid-cols-4">
                        { this.state.filterBuku.map( (item, index) => (
                            <Card
                            judul={item.judul}
                            penulis={item.penulis}
                            penerbit={item.penerbit}
                            harga={item.harga}
                            cover={item.cover}
                            onEdit={ () => this.Edit(item)}
                            onDrop={ () => this.Drop(item)}
                            onCart={ () => this.addToCart(item)}
                            />
                        )) }
                    </div>
                </div>
 
                <button className="btn btn-success bg-red-500 text-white py-2 px-5 rounded-lg ml-5" onClick={() => this.Add()}>
                    Tambah Data
                </button>
                
                <div className="md:p-12 flex flex-row flex-wrap">
                    <form onSubmit={ev => this.Save(ev)} className="md:w-1/2-screen m-0 p-5 bg-white w-full tw-h-full shadow md:rounded-lg">
                        
                        <div className="text-2xl text-red-500 font-bold text-center">Silahkan Input Buku</div>
                        
                        <div className="flex-col flex py-3">
                        <label className="pb-2 text-gray-700 font-semibold">Judul Buku</label>
                        <input type="text" className="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
                                    value={this.state.judul}
                                    onChange={ ev => this.setState({judul: ev.target.value}) }
                                    required />
                        </div>
                        
                        <div className="flex-col flex py-3">
                        <label className="pb-2 text-gray-700 font-semibold">Penulis Buku</label>
                        <input type="text" className="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
                                    value={this.state.penulis}
                                    onChange={ ev => this.setState({penulis: ev.target.value}) }
                                    required />
                        </div>

                        <div className="flex-col flex py-3">
                        <label className="pb-2 text-gray-700 font-semibold">Harga Buku</label>
                        <input type="number" className="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
                                    value={this.state.harga}
                                    onChange={ ev => this.setState({harga: ev.target.value}) }
                                    required />
                        </div>

                        <div className="flex-col flex py-3">
                        <label className="pb-2 text-gray-700 font-semibold">Penerbit Buku</label>
                        <input type="text" className="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
                                    value={this.state.penerbit}
                                    onChange={ ev => this.setState({penerbit: ev.target.value}) }
                                    required />
                        </div>
                        
                        <div className="flex-col flex py-3">
                        <label className="pb-2 text-gray-700 font-semibold">Cover Buku</label>
                        <input type="url" className="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
                                    value={this.state.cover}
                                    onChange={ ev => this.setState({cover: ev.target.value}) }
                                    required />
                        </div>
                        
                        <div className="mt-2">
                            <button class="p-3 bg-red-500 text-white w-full hover:bg-red-600" type="submit">Submit Form</button>
                        </div>
                    </form>
                </div>

                {/* component modal sbg control manipulasi data */}
                {/* <div className="modal" id="modal_buku">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                Form Buku
                            </div>

                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Judul Buku
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.judul}
                                    onChange={ ev => this.setState({judul: ev.target.value}) }
                                    required />
                                    
                                    Penulis Buku
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.penulis}
                                    onChange={ ev => this.setState({penulis: ev.target.value}) }
                                    required />
                                    
                                    Penerbit Buku
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.penerbit}
                                    onChange={ ev => this.setState({penerbit: ev.target.value}) }
                                    required />
                                    
                                    Harga Buku
                                    <input type="number" className="form-control mb-2"
                                    value={this.state.harga}
                                    onChange={ ev => this.setState({harga: ev.target.value}) }
                                    required />
                                    
                                    Cover Buku
                                    <input type="url" className="form-control mb-2"
                                    value={this.state.cover}
                                    onChange={ ev => this.setState({cover: ev.target.value}) }
                                    required />
 
                                    <button className="btn btn-info btn-block" type="submit">
                                        Simpan
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );  
  }  
}  
export default Gallery;  