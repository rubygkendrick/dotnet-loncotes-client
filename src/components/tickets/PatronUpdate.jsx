import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate } from "react-router-dom/dist";
import { getPatron, updatePatron} from "../../data/patronsData";
import { useParams } from "react-router-dom";

export default function PatronUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [relevantPatron, setRelevantPatron] = useState({});
  const [patronAddress, setPatronAddress] = useState("");
  const [patronEmail, setPatronEmail] = useState("");

  useEffect(() => {
    getPatron(id).then(setRelevantPatron);
  
  }, []);
  if (!relevantPatron) {
    return null;
  }


  const submit = () => {
    const newPatron = {
       address: patronAddress,
       email: patronEmail     
    };
    updatePatron(id, newPatron).then(() => {
      navigate("/patrons");
    });
  };

  return (
    <div className="container">
      <h4>Update Info</h4>
      <Form>
        <FormGroup>
          <Label htmlFor="materialName">Email</Label>
          <Input
            type="text"
            placeholder={relevantPatron?.email}
            name="patronEmail"   
            onChange={(e) => {
              setPatronEmail(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="materialName">Address</Label>
          <Input
            type="text"
            placeholder={relevantPatron?.address}
            name="patronEmail"
            onChange={(e) => {
              setPatronAddress(e.target.value);
            }}
          />
        </FormGroup>
  
        <Button onClick={submit}>Submit</Button>
      </Form>
    </div>
  );
}