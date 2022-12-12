import React from "react";
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

function Sidebar() {
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
                m: 1,
                width: 300,
                height: 60,
              },
            }}
          >
            <Paper elevation={3}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "5px",
                }}
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                <div style={{ marginLeft: "20px" }}>
                  <Typography>customer1</Typography>
                  <Typography>@gmail.com</Typography>
                </div>
              </div>
            </Paper>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default Sidebar;
