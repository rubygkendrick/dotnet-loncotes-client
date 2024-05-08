import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaterialList from "./components/tickets/MaterialList";
import MaterialDetails from "./components/tickets/MaterialDetails";
import CreateMaterial from "./components/tickets/CreateMaterial";
import PatronList from "./components/tickets/PatronList";
import PatronDetails from "./components/tickets/PatronDetails";
import PatronUpdate from "./components/tickets/PatronUpdate";
import CheckoutsList from "./components/tickets/CheckoutsList";
import BrowseMaterial from "./components/tickets/BrowseMaterial";
import CheckoutForm from "./components/tickets/CheckoutForm";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="materials">
          <Route index element={<MaterialList />} />
          <Route path=":id" element={<MaterialDetails />} />
          <Route path="create" element={<CreateMaterial />} />
        </Route>
        <Route path="patrons" >
          <Route index element={<PatronList />}></Route>
          <Route path=":id" element={<PatronDetails />} />
          <Route path=":id/update" element={<PatronUpdate />} />
        </Route>
        <Route path="checkouts" element={< CheckoutsList />} />
        <Route path="browse">
          <Route index element={<BrowseMaterial />} />
          <Route path=":id/checkout" element={<CheckoutForm />} />
        </Route>
        <Route path="overdue" element={<>Overdue Materials</>}/>
      </Route>


    </Routes>
  </BrowserRouter>,
);
