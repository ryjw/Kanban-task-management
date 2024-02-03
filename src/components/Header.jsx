import styles from "@/components/Header.module.scss";
import Button from "./Button";
import DropdownMenu from "./DropdownMenu";
import logoMobile from "@/assets/logo-mobile.svg";
import iconChevronDown from "@/assets/icon-chevron-down.svg";
import logoDesktop from "@/assets/logo-dark.svg";
import Image from "next/image";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.boardName}>
        <Image
          src={logoDesktop}
          alt="logo desktop"
          className={styles.logoDesktop}
        />
        <Image
          src={logoMobile}
          alt="logo mobile"
          className={styles.logoMobile}
        />
        <p>Platform Launch</p>
        <Image src={iconChevronDown} alt="toggle" />
      </div>
      <div className={styles.btnMenu}>
        <div className={styles.btnMobile}>
          <Button>+</Button>
        </div>
        <div className={styles.btnDesktop}>
          <Button>+ Add New Task</Button>
        </div>
        <DropdownMenu
          options={["Edit Board", "Delete Board"]}
          variant="header"
        />
      </div>
    </header>
  );
}

export default Header;
