import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom/dist";
import { getMaterial } from "../../data/materialsData";
import { createCheckout } from "../../data/checkoutsData";

export default function CheckoutForm() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [patronId, setPatronId] = useState("");
  const[material, setMaterial] = useState({})

  const getAndSetMaterial = () => {
    getMaterial(id).then(setMaterial);
  }

  useEffect(() => {
   getAndSetMaterial()
  }, []);

  const submit = () => {
    const checkout = {
       materialId: id,
       patronId: patronId,  
    };
    createCheckout(checkout).then(() => {
      navigate("/checkouts");
    });
  };

  return (
    <div className="container">
      <h4>Checkout Material</h4>
      <h5>{material.materialName}</h5>
      <Form>
        <FormGroup>
          <Label htmlFor="materialName">Patron Id</Label>
          <Input
            type="text"
            placeholder="Please enter your Id"
            name="patronId"
            onChange={(e) => {
              setPatronId(parseInt(e.target.value));
            }}
          />
        </FormGroup>
        <Button onClick={submit}>Submit</Button>
      </Form>
    </div>
  );
}
