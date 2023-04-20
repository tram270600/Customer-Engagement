import styles from "./PrimaryButton.module.scss";

// const PrimaryButton = ({ name, color, onClick }) => (
//   <button className={styles.PrimaryButton} onClick={() => onClick()}>
//     {name}
//   </button>
// );

// export default PrimaryButton;

export default function PrimaryButton({
  name,
  color,
  type = "primary",
  onClick,
}) {
  return (
    <>
      {type === "primary" && (
        <button className={styles.primaryButton} onClick={() => onClick()}>
          {name}
        </button>
      )}
      {type === "secondary" && (
        <button className={styles.secondaryButton} onClick={() => onClick()}>
          {name}
        </button>
      )}
    </>
  );
}
