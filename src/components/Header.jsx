import { useState } from "react";
import styles from "@/components/Header.module.scss";
import Button from "./Button";
import DropdownMenu from "./DropdownMenu";
import logoMobile from "@/assets/logo-mobile.svg";
import iconChevronDown from "@/assets/icon-chevron-down.svg";
import iconChevronUp from "@/assets/icon-chevron-up.svg";
import logoDesktop from "@/assets/logo-dark.svg";
import Image from "next/image";
import Modal from "./Modal";

function Header({ currentBoard }) {
  const [isChevronUp, setIsChevronUp] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleChevron = () => {
    setIsChevronUp((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.headerLeft} ${styles.flex}`}>
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
      </div>
      <div className={`${styles.headerRight} ${styles.flex}`}>
        <div className={`${styles.headerBoardName} ${styles.flex}`}>
          <p>{currentBoard?.name}</p>
          <Image
            src={modalOpen ? iconChevronUp : iconChevronDown}
            alt="toggle"
            className={styles.chevronDown}
            onClick={() => {
              toggleChevron();
              setModalOpen((prev) => !prev);
            }}
          />
        </div>
        <div className={`${styles.headerSettings} ${styles.flex}`}>
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
      </div>
      {/* TODO: create modal lol */}
      <Modal open={modalOpen} setOpen={setModalOpen}>
        <form action="">
          <h1>Create me! (ʘ‿ʘ✿)</h1>
        </form>
      </Modal>
    </header>
  );
}

export default Header;
