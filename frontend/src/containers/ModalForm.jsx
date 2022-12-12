import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { TextField } from "@mui/material";
import { FaRegPlusSquare, FaRegBookmark, FaTimes } from "react-icons/fa";

// modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function ModalForm() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [form, setForm] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // tab function
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

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
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Login" sx={{ fontWeight: "bold" }} />
                <Tab label="Profile" sx={{ fontWeight: "bold" }} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Typography sx={{ fontWeight: "bold" }}>
                Add User | Login Details{" "}
              </Typography>
              <form >
                <TextField
                  label="First Name"
                  fullWidth
                  type="text"
                  name="firstname"
                  variant="standard"
                  
                  sx={{ margin: "5px 0" }}
                />
                
                <TextField
                  label="Last Name"
                  fullWidth
                  type="text"
                  name="lastname"
                  variant="standard"
                  // value={formik.values.lastname}
                  // onChange={formik.handleChange("lastname")}
                  // onBlur={formik.handleBlur("lastname")}
                  sx={{ margin: "5px 0" }}
                />
               
                <TextField
                  label="User Name"
                  fullWidth
                  type="text"
                  name="username"
                  variant="standard"
                  // value={formik.values.username}
                  // onChange={formik.handleChange("username")}
                  // onBlur={formik.handleBlur("username")}
                  sx={{ margin: "5px 0" }}
                />
                
                <TextField
                  label="Password"
                  fullWidth
                  type="password"
                  name="password"
                  variant="standard"
                  // value={formik.values.password}
                  // onChange={formik.handleChange("password")}
                  // onBlur={formik.handleBlur("password")}
                  sx={{ margin: "5px 0" }}
                />
                
                <TextField
                  label="Confirm Password"
                  fullWidth
                  type="password"
                  name="password2"
                  variant="standard"
                  // value={formik.values.password2}
                  // onChange={formik.handleChange("password2")}
                  // onBlur={formik.handleBlur("password2")}
                  sx={{ margin: "5px 0" }}
                />
                
                <div style={{}}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="cancel" sx={{ fontWeight: "bold" }} />
                    <Tab label="Proceed" sx={{ fontWeight: "bold" }} />
                  </Tabs>
                </div>
              </form>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography sx={{ fontWeight: "bold" }}>
                Add User | Profile Details{" "}
              </Typography>
              <form>
                <TextField
                  label="Addres Line"
                  fullWidth
                  type="text"
                  name="address"
                  variant="standard"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  sx={{ margin: "5px 0" }}
                />
                <TextField
                  label="Country"
                  fullWidth
                  type="text"
                  name="country"
                  variant="standard"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  sx={{ margin: "5px 0" }}
                />
                <TextField
                  label="State"
                  fullWidth
                  type="text"
                  name="state"
                  variant="standard"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  sx={{ margin: "5px 0" }}
                />
                <TextField
                  label="City"
                  fullWidth
                  type="text"
                  name="city"
                  variant="standard"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  sx={{ margin: "5px 0" }}
                />
                <TextField
                  label="Zip code"
                  fullWidth
                  type="number"
                  name="zipcode"
                  variant="standard"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  sx={{ margin: "5px 0" }}
                />
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
            </TabPanel>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export default ModalForm;
