import styles from "../styles/searchRouteResult.module.scss";
import PrimaryButton from "../components/buttons/PrimaryButton";

export default function SearchRouteResult() {
  const handleSelectRoute = (e) => {
    // console.log(e.currentTarget.id);
    console.log("Hhehe", e);
  };
  const columnData = [
    "From - To",
    "Estimate time",
    "Period",
    "Price",
    "Action",
  ];
  const contentData = [
    {
      id: 1,
      fromTo: "A - B",
      estimateTime: "12 hours",
      period: "02/14/2023 - 02/18/2023",
      price: "23",
    },
    {
      id: 2,
      fromTo: "A - B",
      estimateTime: "12 hours",
      period: "02/14/2023 - 02/18/2023",
      price: "23",
    },
  ];
  return (
    <>
      <div className={styles.routeSectionHeader}>Search Results</div>
      <div className={styles.tableColumnGroupHeader}>
        {columnData.map((item) => {
          return <div className={styles.tableColumnHeader}>{item}</div>;
        })}
      </div>
      <div className={styles.tableData}>
        {contentData.map((content) => {
          return (
            <div key={content.id} className={styles.tableColumnData}>
              <div>{content.fromTo}</div>
              <div>{content.estimateTime}</div>
              <div>{content.period}</div>
              <div>{content.price}</div>
              <div>
                <PrimaryButton
                  key={content.id}
                  name="Select"
                  onClick={(e) => handleSelectRoute(e)}
                ></PrimaryButton>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
