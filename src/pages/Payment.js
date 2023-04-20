import PrimaryButton from "../components/buttons/PrimaryButton";
import styles from "../styles/payment.module.scss";
export default function Payment({ onCancelBtnClick, onConfirmBtnClick }) {
  const columnData = ["Description", "Hours", "Amount"];

  return (
    <>
      <div className={styles.invoicePaper}>
        <div className={styles.invoiceInfo}> INVOICE </div>
        <div className={styles.rowData}>
          <div className={styles.title}> BILLED TO </div>
          <div className={styles.data}> East India Trading Co. </div>
        </div>
        <div className={styles.rowData}>
          <div className={styles.title}> PAY TO </div>
          <div className={styles.data}>
            <div className={styles.payTo}>
              <span>East India Trading Co.</span>
              <span>123 456 789</span>
              <span>Nørrevej 80, 3070 Snekkersten</span>
            </div>
          </div>
        </div>
        <div className={styles.rowData}>
          <div className={styles.title}> Bank </div>
          <div className={styles.data}> ACBank </div>
        </div>
        <div className={styles.rowData}>
          <div className={styles.title}> Account Number </div>
          <div className={styles.data}> 1234 5678 </div>
        </div>
        <div className={styles.tableColumnGroupHeader}>
          {columnData.map((item) => {
            return <div className={styles.tableColumnHeader}>{item}</div>;
          })}
        </div>
        <div className={styles.tableData}>
          <div className={styles.tableColumnData}>
            <div><b>TOTAL</b></div>
            <div>4 hours</div>
            <div>$ 388</div>
          </div>
        </div>
        <div className={styles.description}>
          Payment is required within 14 business days of invoice date. Please
          send remiitance to eastindia@netcompany.com. <br /> Thank you for your
          business
        </div>
      </div>
      <div className={styles.actionHandleInvoice}>
        <PrimaryButton
          name="CANCEL"
          onClick={onCancelBtnClick}
          type="secondary"
        ></PrimaryButton>
        <PrimaryButton
          name="CONFIRM"
          onClick={onConfirmBtnClick}
        ></PrimaryButton>
      </div>
    </>
  );
}
