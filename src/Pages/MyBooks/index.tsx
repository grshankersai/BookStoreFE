import React, { useEffect, useState } from "react";
import BaseTemplate from "../../Templates/BaseTemplate";
import BasicTable, { Rows } from "../../components/molecules/BasicTable";
import axios from "axios";

const MyBooks = () => {
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

  const [rows, setRows] = useState<Rows[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/get-all-my-books")
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
          <BasicTable rows={rows} tableWithAllButtons={false} />
        </>
      }
    />
  );
};

export default MyBooks;
