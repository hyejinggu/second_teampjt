import styles from "../../css/common/common.module.css";
import PropTypes from "prop-types";

export default function PageNation({ setValue }) {
  return (
    <div className={styles.page_shift}>
      <span onClick={(e) => setValue(e.target.innerText)}>1</span>
      <span onClick={(e) => setValue(e.target.innerText)}>2</span>
      <span onClick={(e) => setValue(e.target.innerText)}>3</span>
    </div>
  );
}

PageNation.propTypes = {
  setValue: PropTypes.func.isRequired,
};
