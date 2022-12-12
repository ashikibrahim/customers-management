import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import ModalForm from "../containers/ModalForm";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { BaseUrl } from "../Utils/BaseUrl";
import {UserState} from '../context/userContext'



function Sidebar({ props }) {
const {user,setUser}=UserState()

  let customersData=async (id)=>{
    console.log(id);
    try {
      const response = await axios.get(
        `${BaseUrl}/api/customer/get-customer-info-by-id/${id}`
      );
      if (response.data.success) {
        
        setUser(response?.data?.data);
      }
    } catch (error) {
      
      console.log(error, "catch error");
    }
  }
console.log(user);

  return (
    <div>
      <Card sx={{ minHeight: "100vh", width: "350px" }}>
        <CardContent>
          <div style={{ display: "flex" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontsize: "bolder" }}
            >
              customers
            </Typography>

            <input
              style={{
                width: "100px",
                borderRadius: "10px",
                marginLeft: "10px",
                label: "search",
              }}
            ></input>

            <ModalForm />
          </div>

          <hr />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                marginTop:"5px",
                // m: 1,
                width: 300,
                height: 60,
              },
            }}
          >
        {props?.map((customers)=>(

            <Paper elevation={3}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "5px",
                }}
                onClick={()=>customersData(customers._id)}
              >
                <Avatar alt="Remy Sharp" src={customers.image} />
                <div style={{ marginLeft: "20px" }}>
                  <Typography>{customers.firstname}</Typography>
                  <Typography>{customers.username}</Typography>
                </div>
              </div>
            </Paper>
        ))}
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default Sidebar;
