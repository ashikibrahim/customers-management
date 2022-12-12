import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TextField } from "@mui/material";
import { FaRegPlusSquare, FaRegBookmark, FaTimes } from "react-icons/fa";
import { BaseUrl } from "../Utils/BaseUrl";
import axios from "axios";
import { toast } from "react-hot-toast";

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

function ModalForm() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [email, setEmail] = useState();
  const [city, setCity] = useState();
  const [zipcode, setZipcode] = useState();
  const [image, setImage] = useState();

  console.log(firstname, "pppp");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // api call
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    console.log(firstname);
    let formdata = new FormData();
    formdata.append("firstname", firstname);
    formdata.append("lastname", lastname);
    formdata.append("username", username);
    formdata.append("password", password);
    formdata.append("email", email);
    formdata.append("address", address);
    formdata.append("country", country);
    formdata.append("state", state);
    formdata.append("city", city);
    formdata.append("zipcode", zipcode);
    formdata.append("image", image);

    // formdata.append("image", image);
    // console.log(formdata, "hhhhhhhhhhh");
    try {
      // console.log(formdata);
      // dispatch(showLoading());
      const response = await axios.post(
        `${BaseUrl}/api/customer/register`,
        formdata
      );
      console.log(response.data.success);

      if (response.data.success) {
        handleClose();
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // dispatch(hideLoading());
      toast.error("something went wrong frontend");
    }
  };

  // form hooks

  // tab function

  return (
    <div>
      <Button onClick={handleOpen} sx={{ color: "black", marginLeft: "20px" }}>
        Add
        <FaRegPlusSquare
          sx={{ width: "90px", height: "90px", Color: "black" }}
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box sx={style}>
            <form onSubmit={handleSubmitForm}>
              {/* <TabPanel value={value} index={0}> */}
              <Typography sx={{ fontWeight: "bold" }}>
                Add User | Login Details{" "}
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
                  label="Password"
                  fullWidth
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="standard"
                  sx={{ margin: "5px 0" }}
                />
              </div>

              <div style={{ display: "flex" }}>
                <TextField
                  label="Confirm Password"
                  fullWidth
                  required
                  type="password"
                  name="password2"
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
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  sx={{ margin: "5px 0" }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <TextField
                  label="State"
                  fullWidth
                  type="text"
                  name="state"
                  variant="standard"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                  sx={{ margin: "5px 0", marginRight: "20px" }}
                />
                <TextField
                  label="City"
                  fullWidth
                  type="text"
                  name="city"
                  variant="standard"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
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

                <TextField
                  label="image"
                  fullWidth
                  required
                  type="file"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                  variant="standard"
                  sx={{ margin: "5px 0" }}
                />
              </div>

              {/* <FormControl fullWidth sx={{ m: 1, width: "70ch" }}>
                  <FormLabel htmlFor="outlined-adornment-amount">
                    image
                  </FormLabel>
                  <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    label="Amount"
                    type="file"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </FormControl> */}

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
              {/* </TabPanel> */}
            </form>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export default ModalForm;
