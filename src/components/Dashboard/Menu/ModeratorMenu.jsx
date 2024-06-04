import { IoDocumentText} from "react-icons/io5";
import MenuItem from "./MenuItem";
import { FaEye, FaGoogleScholar } from "react-icons/fa6";
import { MdPostAdd } from "react-icons/md";

const ModeratorMenu = () => {
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
        label="All Applied Scholarship"
        address="manage-applied-scholarship"
        icon={IoDocumentText}
      ></MenuItem>
      <MenuItem
        label="All reviews"
        address="manage-reviews"
        icon={FaEye}
      ></MenuItem>
      
      
    </>
  );
};

export default ModeratorMenu;
