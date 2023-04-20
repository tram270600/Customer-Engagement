import tickOutline from "../assets/tick-outline.svg";
import styles from "../styles/confirmation.module.scss";
import PrimaryButton from "../components/buttons/PrimaryButton";


export default function Confirmation({onBackToBookClick}) {
  return (
    <>
      <div className={styles.confirmPart}>
        <img src={tickOutline} alt="tick-Outline" />
        <div className={styles.description}>
          Create a booking successfully ! <br /> Booking ID: #15HD62F3
        </div>
        <PrimaryButton
          name="Book another"
          onClick={onBackToBookClick}
        ></PrimaryButton>
      </div>
    </>
  );
}
