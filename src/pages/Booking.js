import styles from "../styles/booking.module.scss";

export default function Booking() {
  return (
    <>
      <div className={styles.maxContent}>
        <div className={styles.pageTitle}>Booking</div>
        <div className={styles.subTitle}>
          Create a booking to ship the parcel
        </div>
        <div className={styles.pageContent}>
          <div className={styles.SectionTitle} Product Info></div>
          <label className={styles.inputField}>
            Name:
            <input
              type="text"
              name="name"
              size="50"
              placeholder="Enter the name"
            />
          </label>
          <div className={styles.groupField}>
            <label className={styles.inputField}>
              Category type:
              <input type="text" name="categoryType" />
            </label>
            <label className={styles.inputField}>
              Weight :
              <input type="text" name="categoryType" />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
