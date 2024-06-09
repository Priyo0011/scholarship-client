import { IoDocumentText } from "react-icons/io5";
import MenuItem from "./MenuItem";
import { FaEye } from "react-icons/fa";

const UserMenu = () => {
  return (
    <>
      <MenuItem
        label="My Application"
        address="my-application"
        icon={IoDocumentText}
      ></MenuItem>
      <MenuItem
        label="My reviews"
        address="my-review"
        icon={FaEye}
      ></MenuItem>
    </>
  );
};

export default UserMenu;
