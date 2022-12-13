import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { FaRegBookmark, FaTimes } from "react-icons/fa";
import { BaseUrl } from "../Utils/BaseUrl";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";

// modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function EditForm() {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(
        `${BaseUrl}/api/customer/get-customer-info-by-id/${id}`
      );
      if (response.data.success) {
        setFirstname(response?.data?.data?.firstname);
        setLastname(response?.data?.data?.lastname);
        setUsername(response?.data?.data?.username);
        setEmail(response?.data?.data?.email);
        setAddress(response?.data?.data?.address[0].address);
        setCountry(response?.data?.data?.address[0].country);
        setState(response?.data?.data?.address[0].state);
        setCity(response?.data?.data?.address[0].city);
        setZipcode(response?.data?.data?.address[0].zipcode);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("something went wrong no response");
      console.log(error, "catch error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFirstname(e.target.firstname.value);
    setLastname(e.target.lastname.value);
    setUsername(e.target.username.value);
    setEmail(e.target.email.value);
    setAddress(e.target.address.value);
    setCountry(e.target.country.value);
    setState(e.target.state.value);
    setCity(e.target.city.value);
    setZipcode(e.target.zipcode.value);

    const obj = {
      firstname,
      lastname,
      username,
      email,
      address,
      country,
      state,
      city,
      zipcode,
    };
    try {
      const response = await axios.post(
        `${BaseUrl}/api/customer/edit-customer/${id}`,
        obj
      );

      if (response.data.success) {
        navigate("/");
        window.location.reload();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("something went wrong frontend");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Typography sx={{ fontWeight: "bold" }}>
              Add User | Edit Details{" "}
            </Typography>
            <div style={{ display: "flex" }}>
              <TextField
                label="First Name"
                fullWidth
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
                name="firstname"
                variant="standard"
                sx={{ margin: "5px 0", marginRight: "20px" }}
              />

              <TextField
                label="Last Name"
                fullWidth
                type="text"
                name="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                variant="standard"
                sx={{ margin: "5px 0" }}
              />
            </div>

            <div style={{ display: "flex" }}>
              <TextField
                label="User Name"
                fullWidth
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                variant="standard"
                sx={{ margin: "5px 0", marginRight: "20px" }}
              />

              <TextField
                label="Email"
                fullWidth
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="standard"
                required
                sx={{ margin: "5px 0" }}
              />
            </div>
            <div style={{ display: "flex" }}>
              <TextField
                label="Addres Line"
                fullWidth
                type="text"
                name="address"
                required
                variant="standard"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                sx={{ margin: "5px 0", marginRight: "20px" }}
              />
              <TextField
                label="Country"
                fullWidth
                type="text"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                variant="standard"
                sx={{ margin: "5px 0" }}
              />
            </div>
            <div style={{ display: "flex" }}>
              <TextField
                label="City"
                fullWidth
                type="text"
                name="city"
                variant="standard"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                sx={{ margin: "5px 0", marginRight: "20px" }}
              />
              <TextField
                label="State"
                fullWidth
                type="text"
                name="state"
                variant="standard"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                sx={{ margin: "5px 0" }}
              />
            </div>
            <div style={{ display: "flex" }}>
              <TextField
                label="Zip code"
                fullWidth
                type="number"
                name="zipcode"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                variant="standard"
                required
                sx={{ margin: "5px 0" }}
              />
            </div>

            <div style={{}}>
              <Button
                variant="outlined"
                color="error"
                sx={{
                  borderRadius: "0px",
                  fontWeight: "bold",
                  margin: "20px",
                }}
              >
                <FaTimes />
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  borderRadius: "0px",
                  fontWeight: "bold",
                  marginLeft: "20px",
                }}
              >
                <FaRegBookmark />
                Save
              </Button>
            </div>
          </form>
        </Box>
      </div>
    </div>
  );
}

export default EditForm;
