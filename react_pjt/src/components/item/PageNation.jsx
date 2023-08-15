import styles from "../../css/common/common.module.css";
import PropTypes from "prop-types";

export default function PageNation({ setPage }) {
  const handlePageShift = (e) => {
    const newValue = e.target.innerText;
    setPage(newValue);
  };
  return (
    <div className={styles.page_shift}>
      <span onClick={handlePageShift}>1</span>
      <span onClick={handlePageShift}>2</span>
      <span onClick={handlePageShift}>3</span>
    </div>
  );
}

PageNation.propTypes = {
  setValue: PropTypes.func.isRequired,
};
