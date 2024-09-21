import { Box, Toolbar, Typography, AppBar, Button } from "@mui/material";
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';  

const Header = ({Title, destination="/", btn="Home"}) => {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {Title}
          </Typography>
          <Link to={destination}>
            <Button style={{color:"white"}}>{btn}</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
Header.propTypes = {
  Title:PropTypes.string.isRequired,
  destination:PropTypes.string,
  btn:PropTypes.string
}

export default Header;
