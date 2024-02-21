import React, { useEffect, useState } from "react";
import BaseTemplate from "../../Templates/BaseTemplate";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BasicTable, { Rows } from "../../components/molecules/BasicTable";
import axios from "axios";

const AvailableBooks = () => {
  const [rows, setRows] = useState<Rows[]>([]);

  // const rows = [
  //   {
  //     id: 1,
  //     name: "Panchatantra",
  //     author: "Vishnu Sharma",
  //     price: "500",
  //   },
  //   {
  //     id: 2,
  //     name: "The Sword and Sickle",
  //     author: "Mulk Raj",
  //     price: "300",
  //   },
  //   {
  //     id: 3,
  //     name: "War and Peace",
  //     author: "Leo Tolstoy",
  //     price: "700",
  //   },
  // ];

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/all-books")
      .then((response) => {
        const rows = response.data.map((item: any) => {
          return {
            id: item.id,
            name: item.bookName,
            author: item.author,
            price: item.price,
          };
        });

        setRows(rows ?? []);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <BaseTemplate
      templateBody={
        <>
          <BasicTable rows={rows} tableWithAllButtons={true} />
        </>
      }
    />
  );
};

export default AvailableBooks;
