import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const pages = ["Home", "Available Books", "My Books"];
  const navigate = useNavigate();

  const handleClick = (page: string) => {
    if (page === "Home") {
      navigate("/");
    } else if (page === "Available Books") {
      navigate("/available-books");
    } else if (page === "My Books") {
      navigate("/my-books");
    } else if (page === "Register") {
      navigate("/register-new-book");
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, padding: "0px" }}>
        <AppBar position="static" sx={{ padding: "0px" }}>
          <Toolbar>
            <Typography variant="h6" component="div">
              Book Store
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleClick(page)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Button onClick={() => handleClick("Register")} color="inherit">
              Register New Book
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
