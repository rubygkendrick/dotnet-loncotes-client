import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getCheckouts, removeCheckout } from "../../data/checkoutsData";
import { useNavigate } from "react-router-dom";



export default function CheckoutsList() {
    const [checkouts, setCheckouts] = useState([]);
    const navigate = useNavigate();

    const getAndResetCheckouts = () => {
        getCheckouts().then(setCheckouts);
    }

    useEffect(() => {
        getAndResetCheckouts();
    }, []);



    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Checkouts</h4>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Material</th>
                        <th>Patron</th>
                        <th>Checkout Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {checkouts.map((c) => (
                        <tr key={`checkouts-${c.id}`}>
                            <th scope="row">{c.id}</th>
                            <td>{c.material.materialName}</td>
                            <td>{c.patron.firstName} {c.patron.lastName}</td>
                            <td>{c.checkoutDate}</td>
                            <td>
                               
                                    <button
                                        onClick={() => removeCheckout(c.id).then(() => {
                                            navigate(getAndResetCheckouts());
                                        })}>Return Item</button>
                                
                            </td>

                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}