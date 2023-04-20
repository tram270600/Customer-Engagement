import styles from "./PrimaryButton.module.scss";

// const PrimaryButton = ({ name, color, onClick }) => (
//   <button className={styles.PrimaryButton} onClick={() => onClick()}>
//     {name}
//   </button>
// );

// export default PrimaryButton;

export default function PrimaryButton({ name, color, onClick }) {
  return (
    <>
      <button className={styles.primaryButton} onClick={() => onClick()}>
        {name}
      </button>
    </>
  );
}
