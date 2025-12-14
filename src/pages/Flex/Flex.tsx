import { useState } from "react";
import styles from "./Flex.module.css";

export function Flex() {
  const [itemCount, setItemCount] = useState(3);
  const [gap, setGap] = useState(1);
  const [wrap, setWrap] = useState(false);
  const [direction, setDirection] = useState("row");
  const [grow, setGrow] = useState(false);
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");

  const incrementItems = () => setItemCount((prev) => Math.min(prev + 1, 12));
  const decrementItems = () => setItemCount((prev) => Math.max(prev - 1, 1));

  const incrementGap = () => setGap((prev) => Math.min(prev + 0.5, 5));
  const decrementGap = () => setGap((prev) => Math.max(prev - 0.5, 0));

  const getContainerClass = () => {
    let className = styles.flexContainer;
    className += ` ${styles[`gap${gap.toString().replace(".", "_")}`]}`;
    className += ` ${styles[direction]}`;
    className += wrap ? ` ${styles.wrap}` : "";
    className += ` ${styles[justifyContent.replace("-", "_")]}`;
    className += ` ${styles[alignItems.replace("-", "_")]}`;
    return className;
  };

  return (
    <div className={styles.flexPage}>
      <aside className={styles.controlPanel}>
        <h2 className={`${styles.title}`}>Flexbox Controls</h2>

        <div className={styles.explanation}>
          <p>
            <strong>Flexbox</strong> is a one-dimensional layout system for
            distributing space along a row or column. Perfect for navigation
            bars, card layouts, and centering content. Caveat: use Grid for
            two-dimensional layouts.
          </p>
        </div>

        <div className={styles.control}>
          <label>Item Count</label>
          <p className={styles.description}>
            Number of flex items in the container
          </p>
          <div className={styles.counter}>
            <button onClick={decrementItems}>-</button>
            <span>{itemCount}</span>
            <button onClick={incrementItems}>+</button>
          </div>
        </div>

        <div className={styles.control}>
          <label>Gap</label>
          <p className={styles.description}>Space between flex items</p>
          <div className={styles.counter}>
            <button onClick={decrementGap}>-</button>
            <span>{gap}rem</span>
            <button onClick={incrementGap}>+</button>
          </div>
        </div>

        <div className={styles.control}>
          <label>Flex Wrap</label>
          <p className={styles.description}>
            Allow items to wrap onto multiple lines
          </p>
          <div className={styles.toggle}>
            <input
              type="checkbox"
              id="wrap"
              checked={wrap}
              onChange={(e) => setWrap(e.target.checked)}
            />
            <label htmlFor="wrap">Enable Wrap</label>
          </div>
        </div>

        <div className={styles.control}>
          <label>Flex Direction</label>
          <p className={styles.description}>
            Main axis direction (row or column)
          </p>
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            className={styles.select}
          >
            <option value="row">Row</option>
            <option value="row_reverse">Row Reverse</option>
            <option value="column">Column</option>
            <option value="column_reverse">Column Reverse</option>
          </select>
        </div>

        <div className={styles.control}>
          <label>Justify Content</label>
          <p className={styles.description}>Align items along the main axis</p>
          <select
            value={justifyContent}
            onChange={(e) => setJustifyContent(e.target.value)}
            className={styles.select}
          >
            <option value="flex_start">Flex Start</option>
            <option value="flex_end">Flex End</option>
            <option value="center">Center</option>
            <option value="space_between">Space Between</option>
            <option value="space_around">Space Around</option>
            <option value="space_evenly">Space Evenly</option>
          </select>
        </div>

        <div className={styles.control}>
          <label>Align Items</label>
          <p className={styles.description}>Align items along the cross axis</p>
          <select
            value={alignItems}
            onChange={(e) => setAlignItems(e.target.value)}
            className={styles.select}
          >
            <option value="stretch">Stretch</option>
            <option value="flex_start">Flex Start</option>
            <option value="flex_end">Flex End</option>
            <option value="center">Center</option>
            <option value="baseline">Baseline</option>
          </select>
        </div>

        <div className={styles.control}>
          <label>Flex Grow/Shrink</label>
          <p className={styles.description}>
            Allow items to grow/shrink to fill space
          </p>
          <div className={styles.toggle}>
            <input
              type="checkbox"
              id="grow"
              checked={grow}
              onChange={(e) => setGrow(e.target.checked)}
            />
            <label htmlFor="grow">Enable</label>
          </div>
        </div>
      </aside>

      <div className={styles.visualization}>
        <div className={getContainerClass()}>
          {Array.from({ length: itemCount }, (_, i) => (
            <div
              key={i}
              className={`${styles.flexItem} ${grow ? styles.grow : ""}`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
