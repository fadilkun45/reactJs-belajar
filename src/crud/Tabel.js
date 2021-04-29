import React from "react";
import { Table } from "react-bootstrap";

export const Tabel = ({makanans , editData, hapusData}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>nama makanan</th>
          <th>Deskripsi</th>
          <th>harga</th>
          <th>more</th>
        </tr>
      </thead>
      <tbody>
        {makanans.map((makanan, index) => {
          return (
              <tr>
            <td>{index+1}</td>
            <td>{makanan.nama}</td>
            <td>{makanan.deskripsi}</td>
            <td>{makanan.harga}</td>
            <td>
              <button className="btn btn-warning mr-2" onClick={() => editData(makanan.id)}>edit</button>
              <button className="btn btn-danger" onClick={() => hapusData(makanan.id)}>Hapus</button>
            </td>
          </tr>
          )
        })}
        
      </tbody>
    </Table>
  );
};
