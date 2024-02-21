import { Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

interface NewBookFormProps {
  dataToEdit?: any;
}

const NewBookForm: React.FC<NewBookFormProps> = ({ dataToEdit }) => {
  const [name, setName] = useState<String>();
  const [author, setAuthor] = useState<String>();
  const [price, setPrice] = useState<String>();

  const navigate = useNavigate();

  const createRecord = async () => {
    if (JSON.stringify(dataToEdit) !== "{}") {
      axios
        .put(`http://localhost:8080/api/update-Book/${dataToEdit.id}`, {
          name: name,
          author: author,
          price: price,
        })
        .then(() => {
          alert("record Updated  successfully");
          setName("");
          setAuthor("");
          setPrice("");
          navigate("/available-books");
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {});
    } else {
      axios
        .post("http://localhost:8080/api/create-book", {
          name: name,
          author: author,
          price: price,
        })
        .then(() => {
          alert("record added successfully");
          setName("");
          setAuthor("");
          setPrice("");
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {});
    }
  };

  useEffect(() => {
    if (JSON.stringify(dataToEdit) !== "{}") {
      // console.log(dataToEdit);
      setName(dataToEdit.name);
      setAuthor(dataToEdit.author);
      setPrice(dataToEdit.price);
    }
  }, []);

  return (
    <>
      <Stack width={"400px"} gap={"20px"}>
        <TextField
          onChange={(event) => {
            setName(event.target.value);
          }}
          id="name"
          placeholder="Name"
          variant="outlined"
          value={name}
        />
        <TextField
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
          id="author"
          placeholder="Author"
          variant="outlined"
          value={author}
        />
        <TextField
          onChange={(event) => {
            setPrice(event.target.value);
          }}
          id="price"
          placeholder="Price"
          variant="outlined"
          value={price}
        />
        <div style={{ textAlign: "center" }}>
          <Button
            onClick={createRecord}
            variant="contained"
            sx={{ width: "100px" }}
          >
            Submit
          </Button>
        </div>
      </Stack>
    </>
  );
};

export default NewBookForm;
