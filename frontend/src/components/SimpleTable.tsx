import {
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    Paper,
  } from "@mui/material";
import useUpdate from "../Hooks/useUpdate";
import { Value } from "../types/util";
import { Link } from "react-router-dom";
import { IoInformationCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";



const SimpleTable= ({data}:{data:Value[]})=> {
    const { mutate } = useUpdate({ method: "delete" });

  return (
    <Paper className="tableroot">
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">TITLE</TableCell>
            <TableCell className="tableCell">AUTHOR</TableCell>
            <TableCell className="tableCell">YEAR</TableCell>
            <TableCell className="tableCell">OPERATION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((n,i) => {
            return (
              <TableRow key={n._id}>
                <TableCell component="th" scope="row" className="TableCell">
                  {i+1}
                </TableCell>
                <TableCell className="tableCell">{n.title}</TableCell>
                <TableCell className="tableCell">{n.author}</TableCell>
                <TableCell className="tableCell">{n.publishYear}</TableCell>
                <TableCell align="right" style={{display: "grid",justifyContent: "center"}}>
              <Link to={`/info/${n._id}`}>
                  <IoInformationCircle style={{ color: "blue" }} />
                </Link>
                <Link to={`/edit/${n._id}`}>
                  <FaEdit style={{ color: "orange" }} />
                </Link>
              <MdDelete
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => mutate(n)}
                />
              </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default SimpleTable;