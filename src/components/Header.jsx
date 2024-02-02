import styles from "@/components/Header.module.scss";
import Button from "./Button";
import DropdownMenu from "./DropdownMenu";
import logoMobile from "@/assets/logo-mobile.svg";
import iconChevronDown from "@/assets/icon-chevron-down.svg";
import Image from "next/image";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.boardName}>
        <Image src={logoMobile} alt="logo mobile" />
        <p>Platform Launch</p>
        <Image src={iconChevronDown} alt="toggle" />
      </div>
      <div className={styles.btnMenu}>
        <div>
          <Button>+</Button>
        </div>
        <DropdownMenu />
      </div>
    </header>
  );
}

export default Header;
