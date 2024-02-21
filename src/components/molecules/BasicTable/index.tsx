import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { useNavigate } from "react-router";

export interface Rows {
  id: number;
  name: String;
  author: String;
  price: String;
}
interface BasicTableProps {
  rows: Rows[];
  tableWithAllButtons: boolean;
}
const BasicTable: React.FC<BasicTableProps> = ({
  rows,
  tableWithAllButtons,
}) => {
  const navigate = useNavigate();
  const addToPersonalList = (row: any) => {
    axios
      .post("http://localhost:8080/api/add-to-my-list", row)
      .then(() => {
        alert("This book has been successfully added to your list");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteMyBook = (id: number) => {
    axios
      .delete(`http://localhost:8080/api/delete-my-list/${id}`)
      .then(() => {
        window.location = window.location;
        alert("Record deleted successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const editAvailableBook = (row: any) => {
    navigate("/register-new-book", { state: { bookData: row } });
  };

  return (
    <>
      <TableContainer sx={{ width: "1000px" }} component={Paper}>
        <Table sx={{ width: "1000px" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Author</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.author}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">
                  {tableWithAllButtons ? (
                    <Stack direction={"row"}>
                      <Button
                        sx={{ height: "40px" }}
                        size="small"
                        variant="outlined"
                        onClick={() => addToPersonalList(row)}
                      >
                        Add to my book
                      </Button>
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => editAvailableBook(row)}
                        aria-label="delete"
                      >
                        <EditIcon />
                      </IconButton>
                    </Stack>
                  ) : (
                    <>
                      <IconButton aria-label="delete">
                        <DeleteIcon onClick={() => deleteMyBook(row.id)} />
                      </IconButton>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BasicTable;
