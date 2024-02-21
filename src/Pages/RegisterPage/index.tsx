import { useEffect } from "react";
import BaseTemplate from "../../Templates/BaseTemplate";
import NewBookForm from "../../components/organisms/NewBookForm";
import { useLocation } from "react-router";

const RegisterPage = () => {
  const location = useLocation();

  return (
    <BaseTemplate
      templateBody={<NewBookForm dataToEdit={location.state.bookData ?? {}} />}
    />
  );
};

export default RegisterPage;
