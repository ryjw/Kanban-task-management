import styles from "../partials/_sidebar.module.scss";
import { FaEyeSlash } from "react-icons/fa6";
import { BsLayoutTextSidebar } from "react-icons/bs";
import logo from "../../public/assets/logo.png";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div>
        <h1>
          <Image src={logo} /> kanban
        </h1>
        <p> ALL BOARDS (0)</p>
        <button>
          <BsLayoutTextSidebar className={styles.sidebarIcon} /> + Create New
          Board
        </button>
      </div>
      <div className={styles.sidebarToggle}>
        <button>
          <FaEyeSlash className={styles.eyeSlash} />
          Hide Sidebar
        </button>
      </div>
    </div>
  );
}
