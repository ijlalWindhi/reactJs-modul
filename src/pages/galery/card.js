import React from "react"
 
class Card extends React.Component{
    render(){
        return (
            <div className="max-w-sm bg-white rounded-none border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                <img src={this.props.cover} className="rounded-none p-1"/>
                <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-base font-medium tracking-tight text-gray-900 dark:text-white">{this.props.judul}</h5>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">{this.props.penulis}</p>
                <span className="mr-1 text-xs font-normal text-gray-400">{this.props.penerbit}</span>
                <span className="text-xs font-normal text-gray-400 ml-4">Rp. {this.props.harga}</span>
                <div>
                    <button onClick={this.props.onEdit} className="inline-flex items-center py-2 px-3 mt-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Edit</button>
                    <button onClick={this.props.onDrop} className="inline-flex items-center py-2 px-3 mt-4 ml-4 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-green-500 dark:focus:ring-red-800">Hapus</button>
                </div>
                <button onClick={this.props.onCart} className="inline-flex items-center py-2 px-3 mt-4 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-yellow-500 dark:focus:ring-red-800">Tambah Keranjang</button>
                </div>
            </div>
        )
    }
}
export default Card;