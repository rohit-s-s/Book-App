import { Value } from "../types/util";
import { Link } from "react-router-dom";
import useUpdate from "../Hooks/useUpdate";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { IoInformationCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const BasicTable = ({ data }: { data: Value[] }) => {
  const { mutate } = useUpdate({ method: "delete" });

  return (
    <Table style={{ width: 650, margin: "auto", marginTop: "10px" }}>
      <TableHead>
        <TableRow>
          <TableCell style={{ fontWeight: "bold" }}>ID</TableCell>
          <TableCell align="right" style={{ fontWeight: "bold" }}>
            Title
          </TableCell>
          <TableCell align="right" style={{ fontWeight: "bold" }}>
            Author
          </TableCell>
          <TableCell align="right" style={{ fontWeight: "bold" }}>
            Year
          </TableCell>
          <TableCell align="right" style={{ fontWeight: "bold" }}>
            Operation
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((row: Value, index: number) => (
          <TableRow
            key={index + 1}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell align="right">{row.title}</TableCell>
            <TableCell align="right">{row.author}</TableCell>
            <TableCell align="right">{row.publishYear}</TableCell>
            <TableCell
              align="right"
              style={{ display: "grid", justifyContent: "center" }}
            >
              <Link to={`/info/${row._id}`}>
                <IoInformationCircle style={{ color: "blue" }} />
              </Link>
              <Link to={`/edit/${row._id}`}>
                <FaEdit style={{ color: "orange" }} />
              </Link>
              <MdDelete
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => mutate(row)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default BasicTable;
