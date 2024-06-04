import { FaEye, FaGoogleScholar } from "react-icons/fa6";
import MenuItem from "./MenuItem";
import { MdManageAccounts, MdPostAdd } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        label="Add Scholarship"
        address="add-scholarship"
        icon={MdPostAdd}
      ></MenuItem>
      <MenuItem
        label="Manage Scholarships"
        address="manage-scholarships"
        icon={FaGoogleScholar}
      ></MenuItem>
      <MenuItem
        label="Applied Application"
        address="manage-applied-scholarship"
        icon={IoDocumentText}
      ></MenuItem>
      <MenuItem
        label="Manage Users"
        address="manage-users"
        icon={MdManageAccounts}
      ></MenuItem>
      <MenuItem
        label="All reviews"
        address="manage-reviews"
        icon={FaEye}
      ></MenuItem>
    </>
  );
};

export default AdminMenu;
