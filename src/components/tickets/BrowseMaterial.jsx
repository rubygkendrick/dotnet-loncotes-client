import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getMaterials } from "../../data/materialsData";
import { Link } from "react-router-dom";

export default function BrowseMaterial() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    getMaterials().then(setMaterials);
  }, []);

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Available Materials</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {materials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td>
                <Link to={`${m.id}/checkout`}>Checkout</Link>
              </td>
              
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}