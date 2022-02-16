// import "./Style.css";
import styles from "../appStyle.module.css"

// const Style = ({ primary }) => {
const Style = () => {
  console.log(styles);
  // const className = primary ? "primary" : "secondary";

  return (
    <div>
      {/* <h1 className={className}>Style</h1> */}
      {/* <h1 className="primary size">Style</h1> */}
      <h1 className={styles.info}>Info</h1>
      <h1 className={styles.success}>Success</h1>
      <h1 className={styles.error}>Error</h1>
    </div>
  );
};

export default Style;
