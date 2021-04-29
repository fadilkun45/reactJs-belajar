import React from 'react'

const makanans = [
    {
    nama: 'soto',
    harga: '3000'
    },
    {
        nama: 'Ayam goreng',
        harga: '6000'
    },
    {
        nama: 'Mie Ayam',
        harga: '10000'
    }

]

// reduce 
const total_bayar = makanans.reduce((total_harga, makanan) => total_harga + makanan.harga, 0);


const map = () => {
    return (
        <div>
            <h2>Map aaaaa</h2>
            <ul>
                {makanans.map((makanans,index ) => (
                <li>{index+1}. {makanans.nama} - harga {makanans.harga}</li>
                ))}
            </ul>

            <h2>map Filter Harga lebih dari 3000</h2>
            <ul>
                {makanans.filter(makanans => makanans.harga > 3000 ).map((makanans,index ) => (
                <li>{index+1}. {makanans.nama} - harga {makanans.harga}</li>
                ))}
            </ul>
            <h1>
                total harga : {total_bayar}
            </h1>
        </div>
    )
}

export default map
