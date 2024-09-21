import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const Input = ({ label, type = "text", name ,value,handleChange}) => {

  return (
    <>
      <TextField
        id={name}
        label={label}
        variant="outlined"
        type={type}
        value={value}
        name={name}
        size="small"
        required
        onChange={handleChange}
      />
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  handleChange:PropTypes.func.isRequired
};

export default Input;
