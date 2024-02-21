import styles from "./styles.module.css";
export default function FlexBox() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item} style={{ height: "140px" }}></div>
        <div className={styles.item} style={{ height: "190px" }}></div>
        <div className={styles.item} style={{ height: "170px" }}></div>
        <div className={styles.item} style={{ height: "120px" }}></div>
        <div className={styles.item} style={{ height: "160px" }}></div>
        <div className={styles.item} style={{ height: "180px" }}></div>
        <div className={styles.item} style={{ height: "140px" }}></div>
        <div className={styles.item} style={{ height: "150px" }}></div>
        <div className={styles.item} style={{ height: "170px" }}></div>
        <div className={styles.item} style={{ height: "170px" }}></div>
        <div className={styles.item} style={{ height: "140px" }}></div>
        <div className={styles.item} style={{ height: "190px" }}></div>
        <div className={styles.item} style={{ height: "170px" }}></div>
        <div className={styles.item} style={{ height: "120px" }}></div>
        <div className={styles.item} style={{ height: "160px" }}></div>
        <div className={styles.item} style={{ height: "180px" }}></div>
        <div className={styles.item} style={{ height: "140px" }}></div>
        <div className={styles.item} style={{ height: "150px" }}></div>
        <div className={styles.item} style={{ height: "170px" }}></div>
        <div className={styles.item} style={{ height: "170px" }}></div>

        <span className={`${styles.item} ${styles.break}`}></span>
        <span className={`${styles.item} ${styles.break}`}></span>
        <span className={`${styles.item} ${styles.break}`}></span>
      </div>
      <h3>
        <a href="https://tobiasahlin.com/blog/masonry-with-css/">
          Read the blog post
        </a>
      </h3>
    </>
  );
}

//https://tobiasahlin.com/blog/common-flexbox-patterns/
