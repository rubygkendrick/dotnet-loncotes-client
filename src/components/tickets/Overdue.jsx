import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

export default function Overdue() {
  const [overdueMaterials, setOverdueMaterials] = useState([]);

  useEffect(() => {
    getOverdueMaterials().then(setOverdueMaterials);
  }, []);

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Overdue Materials</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>PatronId</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {overdueMaterials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td>
                <Link to={`${m.id}`}>Details</Link>
              </td>
              
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
