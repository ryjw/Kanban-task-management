import styles from "@/partials/_viewTask.module.scss";
import Checkbox from "@/components/Checkbox";
import Select from "@/components/Select";
import DropdownMenu from "@/components/DropdownMenu";

export default function ViewTask() {
  return (
    <div className={styles.mainContainer}>
      <form>
        <div className={styles.sectionOne}>
          <h1 className={styles.mainTitle}>
            Research pricing points of various competitors and trail different
            business models
          </h1>
          <DropdownMenu />
        </div>
        <p className={styles.description}>
          We know what we're planning to build for version one. Now we need to
          finalise the first pricing model we'll use. Keep iterating the
          subtasks until we have a coherent proposition.
        </p>
        <p className={styles.subTitle}>Subtasks (2 of 3)</p>
        <Checkbox> Research competitor pricing and business models </Checkbox>
        <Checkbox>
          Outline a business model that works for our solution
        </Checkbox>
        <Checkbox>
          Talk to potential customers about our proposed solution and ask for
          fair price expectancy
        </Checkbox>
        <p className={styles.subTitle}>Current Status</p>
        <Select className={styles.selectMenu} />
      </form>
    </div>
  );
}
