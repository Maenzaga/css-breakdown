import { useState } from "react";
import styles from "./Grid.module.css";

export function Grid() {
  const [itemCount, setItemCount] = useState(6);
  const [columnGap, setColumnGap] = useState(1);
  const [rowGap, setRowGap] = useState(1);
  const [columns, setColumns] = useState(3);
  const [rows, setRows] = useState("auto");
  const [autoFlow, setAutoFlow] = useState("row");
  const [justifyItems, setJustifyItems] = useState("stretch");
  const [alignItems, setAlignItems] = useState("stretch");
  const [justifyContent, setJustifyContent] = useState("start");
  const [alignContent, setAlignContent] = useState("start");

  const incrementItems = () => setItemCount((prev) => Math.min(prev + 1, 20));
  const decrementItems = () => setItemCount((prev) => Math.max(prev - 1, 1));

  const incrementColumnGap = () =>
    setColumnGap((prev) => Math.min(prev + 0.5, 5));
  const decrementColumnGap = () =>
    setColumnGap((prev) => Math.max(prev - 0.5, 0));

  const incrementRowGap = () => setRowGap((prev) => Math.min(prev + 0.5, 5));
  const decrementRowGap = () => setRowGap((prev) => Math.max(prev - 0.5, 0));

  const incrementColumns = () => setColumns((prev) => Math.min(prev + 1, 8));
  const decrementColumns = () => setColumns((prev) => Math.max(prev - 1, 1));

  const getContainerClass = () => {
    let className = styles.gridContainer;
    className += ` ${
      styles[`columnGap${columnGap.toString().replace(".", "_")}`]
    }`;
    className += ` ${styles[`rowGap${rowGap.toString().replace(".", "_")}`]}`;
    className += ` ${styles[`cols${columns}`]}`;
    className += ` ${styles[`rows_${rows}`]}`;
    className += ` ${styles[`flow_${autoFlow}`]}`;
    className += ` ${styles[`justifyItems_${justifyItems}`]}`;
    className += ` ${styles[`alignItems_${alignItems}`]}`;
    className += ` ${styles[`justifyContent_${justifyContent}`]}`;
    className += ` ${styles[`alignContent_${alignContent}`]}`;
    return className;
  };

  return (
    <div className={styles.gridPage}>
      <aside className={styles.controlPanel}>
        <h2 className={`${styles.title}`}>Grid Controls</h2>

        <div className={styles.explanation}>
          <p>
            <strong>CSS Grid</strong> is a two-dimensional layout system for
            creating complex layouts with rows and columns. Perfect for page
            layouts, image galleries, and dashboard designs. Unlike Flexbox
            (one-dimensional), Grid excels at controlling both axes
            simultaneously.
          </p>
        </div>

        <div className={styles.control}>
          <label>Item Count</label>
          <p className={styles.description}>
            Number of grid items in the container
          </p>
          <div className={styles.counter}>
            <button onClick={decrementItems}>-</button>
            <span>{itemCount}</span>
            <button onClick={incrementItems}>+</button>
          </div>
        </div>

        <div className={styles.control}>
          <label>Columns</label>
          <p className={styles.description}>Number of columns in the grid</p>
          <div className={styles.counter}>
            <button onClick={decrementColumns}>-</button>
            <span>{columns}</span>
            <button onClick={incrementColumns}>+</button>
          </div>
        </div>

        <div className={styles.control}>
          <label>Rows</label>
          <p className={styles.description}>Row sizing behavior</p>
          <select
            value={rows}
            onChange={(e) => setRows(e.target.value)}
            className={styles.select}
          >
            <option value="auto">Auto</option>
            <option value="fixed">Fixed (150px)</option>
            <option value="minmax">Min-Max (100px-1fr)</option>
          </select>
        </div>

        <div className={styles.control}>
          <label>Column Gap</label>
          <p className={styles.description}>
            Horizontal space between grid items
          </p>
          <div className={styles.counter}>
            <button onClick={decrementColumnGap}>-</button>
            <span>{columnGap}rem</span>
            <button onClick={incrementColumnGap}>+</button>
          </div>
        </div>

        <div className={styles.control}>
          <label>Row Gap</label>
          <p className={styles.description}>
            Vertical space between grid items
          </p>
          <div className={styles.counter}>
            <button onClick={decrementRowGap}>-</button>
            <span>{rowGap}rem</span>
            <button onClick={incrementRowGap}>+</button>
          </div>
        </div>

        <div className={styles.control}>
          <label>Auto Flow</label>
          <p className={styles.description}>
            How auto-placed items flow into the grid
          </p>
          <select
            value={autoFlow}
            onChange={(e) => setAutoFlow(e.target.value)}
            className={styles.select}
          >
            <option value="row">Row</option>
            <option value="column">Column</option>
            <option value="row_dense">Row Dense</option>
            <option value="column_dense">Column Dense</option>
          </select>
        </div>

        <div className={styles.control}>
          <label>Justify Items</label>
          <p className={styles.description}>
            Align items horizontally within their cells
          </p>
          <select
            value={justifyItems}
            onChange={(e) => setJustifyItems(e.target.value)}
            className={styles.select}
          >
            <option value="stretch">Stretch</option>
            <option value="start">Start</option>
            <option value="end">End</option>
            <option value="center">Center</option>
          </select>
        </div>

        <div className={styles.control}>
          <label>Align Items</label>
          <p className={styles.description}>
            Align items vertically within their cells
          </p>
          <select
            value={alignItems}
            onChange={(e) => setAlignItems(e.target.value)}
            className={styles.select}
          >
            <option value="stretch">Stretch</option>
            <option value="start">Start</option>
            <option value="end">End</option>
            <option value="center">Center</option>
          </select>
        </div>

        <div className={styles.control}>
          <label>Justify Content</label>
          <p className={styles.description}>
            Align entire grid horizontally in container
          </p>
          <select
            value={justifyContent}
            onChange={(e) => setJustifyContent(e.target.value)}
            className={styles.select}
          >
            <option value="start">Start</option>
            <option value="end">End</option>
            <option value="center">Center</option>
            <option value="space_between">Space Between</option>
            <option value="space_around">Space Around</option>
            <option value="space_evenly">Space Evenly</option>
          </select>
        </div>

        <div className={styles.control}>
          <label>Align Content</label>
          <p className={styles.description}>
            Align entire grid vertically in container
          </p>
          <select
            value={alignContent}
            onChange={(e) => setAlignContent(e.target.value)}
            className={styles.select}
          >
            <option value="start">Start</option>
            <option value="end">End</option>
            <option value="center">Center</option>
            <option value="space_between">Space Between</option>
            <option value="space_around">Space Around</option>
            <option value="space_evenly">Space Evenly</option>
          </select>
        </div>
      </aside>

      <div className={styles.visualization}>
        <div className={getContainerClass()}>
          {Array.from({ length: itemCount }, (_, i) => (
            <div key={i} className={styles.gridItem}>
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
