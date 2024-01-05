import styles from "../partials/_sidebar.module.scss";
import logo from "../../public/assets/logo.png";
import shape from "../../public/assets/shape.png";
import OpenEye from "../../public/assets/OpenEye.png";
import HideSidebar from "../../public/assets/HideSidebar.png";
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
          <Image src={shape} className={styles.sidebarIcon} />+ Create New Board
        </button>
      </div>
      <div className={styles.sidebarToggle}>
        <div className={styles.HideSidebar}>
          <Image src={HideSidebar} />
        </div>
        <div>
          <Image className={styles.OpenEye} src={OpenEye} />
        </div>
      </div>
    </div>
  );
}
