import { useState } from "react";
import styles from "../../css/common/common.module.css";
import PropTypes from "prop-types";

export default function PageNation({ setPage }) {
  const [clickedPage, setClickedPage] = useState(1);

  return (
    <div className={styles.page_shift}>
      {[1, 2, 3].map((pageNumber) => (
        <span
          key={pageNumber}
          className={pageNumber === clickedPage ? styles.clicked_page : ""}
          onClick={() => {
            setPage(pageNumber);
            setClickedPage(pageNumber);
          }}
        >
          {pageNumber}
        </span>
      ))}
    </div>
  );
}

PageNation.propTypes = {
  setValue: PropTypes.func.isRequired,
};
