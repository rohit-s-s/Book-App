import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

type Navbar = {
  Title: string;
  destination?: string;
  action?: string;
};

export default function Navbar({
  Title,
  destination = "/",
  action = "Go Back",
}: Navbar) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {Title}
          </Typography>
          <Link to={destination}>
            <Button color="inherit" style={{ color: "white" }}>
              {action}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
