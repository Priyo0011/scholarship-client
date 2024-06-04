import { IoDocumentText } from "react-icons/io5";
import MenuItem from "./MenuItem";
import { FaEye } from "react-icons/fa";

const UserMenu = () => {
  return (
    <>
      <MenuItem
        label="My Application"
        address="/dashboard"
        icon={IoDocumentText}
      ></MenuItem>
      <MenuItem
        label="My reviews"
        address="my-reviews"
        icon={FaEye}
      ></MenuItem>
    </>
  );
};

export default UserMenu;
