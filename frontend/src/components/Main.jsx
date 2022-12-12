import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import {
  FaEdit,
  FaTrashAlt,
  FaUserAlt,
  FaRegPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";

function Main() {
  return (
    <Card
      sx={{
        minHeight: "100vh",
        width: "1000px",

        margin: "15px",
      }}
    >
      <CardContent>
        <div style={{ display: "flex", margin: "50px" }}>
          <div>
            <Avatar
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
              sx={{ width: 100, height: 100 }}
            />
          </div>

          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <Typography>Mathew Jones</Typography>
            </div>
            <div style={{ display: "flex", paddingTop: "10px" }}>
              <div style={{ display: "flex" }}>
                <FaUserAlt />
                <Typography sx={{ marginLeft: "5px" }}>Matt2233</Typography>
              </div>
              <div style={{ display: "flex", marginLeft: "20px" }}>
                <FaRegPaperPlane />
                <Typography sx={{ marginLeft: "5px" }}>
                  Matt@gmail.com
                </Typography>
              </div>
              <div style={{ display: "flex", marginLeft: "20px" }}>
                <FaPhoneAlt />
                <Typography sx={{ marginLeft: "5px" }}>9539773751</Typography>
              </div>
            </div>
            <div style={{ marginTop: "30px" }}>
              <Button
                variant="outlined"
                color="primary"
                sx={{ borderRadius: "0px", fontWeight: "bold" }}
              >
                <FaEdit /> Edit
              </Button>
              <Button
                variant="outlined"
                color="error"
                sx={{
                  borderRadius: "0px",
                  fontWeight: "bold",
                  marginLeft: "20px",
                }}
              >
                <FaTrashAlt />
                Delete
              </Button>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <Typography
            sx={{
              marginLeft: "30px",
              marginTop: "30px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Personal Details
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "15px",
          }}
        >
          <Paper elevation={0}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px",
                width: "200px",
                height: "70px",
                backgroundColor: "#f7dbb0",
              }}
            >
              <div style={{ marginLeft: "20px" }}>
                <Typography>customer1</Typography>
                <Typography>@gmail.com</Typography>
              </div>
            </div>
          </Paper>
          <Paper elevation={0}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px",
                width: "200px",
                height: "70px",
                backgroundColor: "#f7dbb0",
              }}
            >
              <div style={{ marginLeft: "20px" }}>
                <Typography>customer1</Typography>
                <Typography>@gmail.com</Typography>
              </div>
            </div>
          </Paper>
          <Paper elevation={0}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px",
                width: "200px",
                height: "70px",
                backgroundColor: "#f7dbb0",
              }}
            >
              <div style={{ marginLeft: "20px" }}>
                <Typography>customer1</Typography>
                <Typography>@gmail.com</Typography>
              </div>
            </div>
          </Paper>
          <Paper elevation={0}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px",
                width: "200px",
                height: "70px",
                backgroundColor: "#f7dbb0",
              }}
            >
              <div style={{ marginLeft: "20px" }}>
                <Typography>customer1</Typography>
                <Typography>@gmail.com</Typography>
              </div>
            </div>
          </Paper>
        </div>
        <div>
          <Typography
            sx={{
              marginLeft: "30px",
              marginTop: "30px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Address
          </Typography>
        </div>
        <div style={{ marginTop: "15px" }}>
          <Paper elevation={0} sx={{ width: "500px", backgroundColor: "" }}>
            <div>
              <div
                style={{
                  marginLeft: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#f7dbb0",
                }}
              >
                <Typography>Address line</Typography>
                <Typography>142,Indiranagar,Bangalore</Typography>
              </div>
            </div>
          </Paper>
          <Paper elevation={0} sx={{ width: "500px" }}>
            <div>
              <div
                style={{
                  marginLeft: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#ffff",
                }}
              >
                <Typography>Landmark</Typography>
                <Typography>Oreon mall</Typography>
              </div>
            </div>
          </Paper>
          <Paper elevation={0} sx={{ width: "500px" }}>
            <div>
              <div
                style={{
                  marginLeft: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#f7dbb0",
                }}
              >
                <Typography>City</Typography>
                <Typography>Bangalore</Typography>
              </div>
            </div>
          </Paper>
          <Paper elevation={0} sx={{ width: "500px" }}>
            <div>
              <div
                style={{
                  marginLeft: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#ffff",
                }}
              >
                <Typography>State</Typography>
                <Typography>Karnataka</Typography>
              </div>
            </div>
          </Paper>
        </div>
      </CardContent>
    </Card>
  );
}

export default Main;
