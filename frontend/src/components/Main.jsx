import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { FaEdit, FaTrashAlt, FaUserAlt, FaRegPaperPlane } from "react-icons/fa";
import { UserState } from "../context/userContext";
import { BaseUrl } from "../Utils/BaseUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Main() {
  const { user, setUser } = UserState();
  const navigate = useNavigate();
  console.log(user);

  const deleteData = async (id) => {
    try {
      console.log(id);
      const response = await axios.delete(
        `${BaseUrl}/api/customer/delete-customer/${id}`
      );
      if (response) {
        window.location.reload();
      }
    } catch (error) {}
  };

  return (
    <Card
      sx={{
        minHeight: "100vh",
        width: "1000px",

        margin: "15px",
      }}
    >
      {user ? (
        <CardContent>
          <div style={{ display: "flex", margin: "50px" }}>
            <div>
              <Avatar
                alt="Remy Sharp"
                src={user.image}
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
                <Typography>
                  {user.firstname} {user.lastname}
                </Typography>
              </div>
              <div style={{ display: "flex", paddingTop: "10px" }}>
                <div style={{ display: "flex" }}>
                  <FaUserAlt />
                  <Typography sx={{ marginLeft: "5px" }}>
                    {user.username}
                  </Typography>
                </div>
                <div style={{ display: "flex", marginLeft: "20px" }}>
                  <FaRegPaperPlane />
                  <Typography sx={{ marginLeft: "5px" }}>
                    {user.email}
                  </Typography>
                </div>
                <div style={{ display: "flex", marginLeft: "20px" }}>
                  {/* <FaPhoneAlt /> */}
                  {/* <Typography sx={{ marginLeft: "5px" }}>{}</Typography> */}
                </div>
              </div>
              <div style={{ marginTop: "30px" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => navigate(`/edit-customer/${user._id}`)}
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
                  onClick={() => deleteData(user._id)}
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
                  <Typography sx={{ fontWeight: "bold" }}>
                    First Name
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {user?.firstname}
                  </Typography>
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
                  <Typography sx={{ fontWeight: "bold" }}>Last Name</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {user?.lastname}
                  </Typography>
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
                  <Typography sx={{ fontWeight: "bold" }}>User Name</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {user?.username}
                  </Typography>
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
                  <Typography sx={{ fontWeight: "bold" }}>Email</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {user?.email}
                  </Typography>
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
                  <Typography sx={{ fontWeight: "bold" }}>
                    Address Line
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {user?.address[0]?.address}
                  </Typography>
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
                  <Typography sx={{ fontWeight: "bold" }}>City</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {user?.address[0]?.city}
                  </Typography>
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
                  <Typography sx={{ fontWeight: "bold" }}>State</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {user?.address[0]?.state}
                  </Typography>
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
                  <Typography sx={{ fontWeight: "bold" }}>Country</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {user?.address[0]?.country}
                  </Typography>
                </div>
              </div>
            </Paper>
          </div>
        </CardContent>
      ) : (
        <Typography
          variant="h3"
          sx={{
            color: "silver",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "fantasy",
          }}
        >
          Select The User
        </Typography>
      )}
    </Card>
  );
}

export default Main;
