import { Stack, Button } from "@mui/material";
import PropTypes from "prop-types";
import Input from "./Input";

const FormElement = ({
  handleChange,
  handleSubmit,
  title,
  author,
  publishYear,
}) => {

  return (
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="column" sx={{ m: 4 }} width={250}>
          <Input
            label="Enter Title"
            name="title"
            value={title}
            handleChange={handleChange}
          />
          <Input
            label="Enter Author"
            name="author"
            value={author}
            handleChange={handleChange}
          />
          <Input
            label="Enter Published year"
            name="publishYear"
            type="number"
            value={publishYear}
            handleChange={handleChange}
          />
          <Button
            type="submit"
            size="small"
            variant="contained"
          >
            Submit
          </Button>
        </Stack>
      </form>
  );
};
FormElement.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  publishYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FormElement;
