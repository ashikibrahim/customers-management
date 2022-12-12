import React,{ useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import "../Pages/Home.css";
import { display } from "@mui/system";
import axios from "axios";
import { toast } from "react-hot-toast";
import { BaseUrl } from "../Utils/BaseUrl";

function Home() {
  const [customer,setCustomer]=useState()

  const getData = async () => {
    try {
      const response = await axios.get(
        `${BaseUrl}/api/customer/get-all-customers`
      );
      if (response.data.success) {
        
        setCustomer(response.data.data);
        
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("something went wrong no response");
      console.log(error, "catch error");
    }
  };
  console.log(customer,"lllllllllllllllllllllllll");
  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
           <Sidebar props={customer} />
        {/* ))} */}
       
        <Main />
      </div>
    </div>
  );
}

export default Home;
