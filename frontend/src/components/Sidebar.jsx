import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import ModalForm from "../containers/ModalForm";
import axios from "axios";
import { BaseUrl } from "../Utils/BaseUrl";
import { UserState } from "../context/userContext";

function Sidebar({ props }) {
  const { user, setUser } = UserState();
  const [count, setCount] = useState(1);
  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState(props);

  let customersData = async (id) => {
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
  };

  // sort function
  let sort = () => {
    console.log(count);

    if (count === 1) {
      const sortData = props.sort((a, b) =>
        a.firstname > b.firstname ? 1 : -1
      );
      setUserData(sortData);
      setCount(-1);
    } else {
      const sortData = props.sort((a, b) =>
        a.firstname > b.firstname ? -1 : 1
      );
      setUserData(sortData);
      setCount(1);
    }
  };

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

            <div
              className="container homesearch"
              style={{
                marginLeft: "30px",
                borderRadius: "10px",
                marginTop: "5px",
              }}
            >
              <div className="search-div">
                <input
                  type=""
                  className="search-box"
                  placeholder="Search..."
                  onChange={(e) => setQuery(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "200px" }}>
            <ModalForm />
          </div>
          <div>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                borderRadius: "0px",
                fontWeight: "bold",
                marginLeft: "200px",
              }}
              onClick={sort}
            >
              Sort
            </Button>
          </div>

          <hr />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                marginTop: "5px",
                // m: 1,
                width: 300,
                height: 60,
              },
            }}
          >
            {/* filter and search */}
            {userData ? (
              <>
                {userData
                  ?.filter(
                    (customers) =>
                      customers.firstname.toLowerCase().includes(query) ||
                      customers.username.toLowerCase().includes(query)
                  )
                  .map((customer) => (
                    <Paper elevation={3}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "5px",
                        }}
                        onClick={() => customersData(customer._id)}
                      >
                        <Avatar alt="Remy Sharp" src={customer.image} />
                        <div style={{ marginLeft: "20px" }}>
                          <Typography>{customer.firstname}</Typography>
                          <Typography>{customer.username}</Typography>
                        </div>
                      </div>
                    </Paper>
                  ))}
              </>
            ) : (
              <>
                {props
                  ?.filter(
                    (customers) =>
                      customers.firstname.toLowerCase().includes(query) ||
                      customers.username.toLowerCase().includes(query)
                  )
                  .map((customer) => (
                    <Paper elevation={3}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "5px",
                        }}
                        onClick={() => customersData(customer._id)}
                      >
                        <Avatar alt="Remy Sharp" src={customer.image} />
                        <div style={{ marginLeft: "20px" }}>
                          <Typography>{customer.firstname}</Typography>
                          <Typography>{customer.username}</Typography>
                        </div>
                      </div>
                    </Paper>
                  ))}
              </>
            )}
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default Sidebar;
