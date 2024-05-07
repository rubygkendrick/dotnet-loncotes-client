import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getPatrons } from "../../data/patronsData";
import { Link } from "react-router-dom";


export default function PatronList() {
    const [patrons, setPatrons] = useState([]);

    useEffect(() => {
        getPatrons().then(setPatrons);
    }, []);

    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Patrons</h4>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {patrons.map((p) => (
                        <tr key={`patrons-${p.id}`}>
                            <th scope="row">{p.id}</th>
                            <td>{p.firstName}</td>
                            <td>{p.lastName}</td>
                            <td>{p.isActive ? 'active' : 'inactive'}</td>

                            <td>
                                <Link to={`${p.id}`}>Details</Link>
                            </td>
                            <td>
                                {p.isActive && (
                                    <button onClick={() => deactivatePatron(p.id)}>Deactivate</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
