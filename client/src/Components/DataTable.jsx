import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoInformationCircle } from "react-icons/io5";
import PropTypes from 'prop-types';  

const DataTable = ({data,mutate}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Published Year</TableCell>
            <TableCell align="right">Operations</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.author}</TableCell>
              <TableCell align="right">{row.publishYear}</TableCell>
              <TableCell style={{display:"flex",justifyContent:"space-around"}}>
                <Link to={`/books/info/${row._id}`}>
                  <IoInformationCircle style={{ color: "blue" }} />
                </Link>
                <Link to={`/books/edit/${row._id}`}>
                  <FaEdit style={{ color: "orange" }} />
                </Link>
                <MdDelete
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => mutate(row?._id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

DataTable.propTypes = {
  data:PropTypes.array.isRequired,
  mutate:PropTypes.func.isRequired
}

export default DataTable;
