import styles from "./Bascis.module.css";

export function Basics() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>CSS Basics</h1>

      <section className={styles.section}>
        <h2 className={`${styles.title} ${styles.heading}`}>Units</h2>
        <div className={styles.separator}></div>
        <div id={styles.absoluteUnits}>
          <p>
            Learn about different CSS units like px, em, rem, %, vw, vh, etc.
          </p>
          <h3 className={styles.heading}>Absolute Units</h3>
          <p>Useful for printing, not so much for sizing element's on screen</p>
          <div className={styles.horizontal}>
            <div id={styles.pixels}>
              <p>Pixels (1px)</p>
            </div>
            <div id={styles.points}>
              <p>Points (1pt)</p>
            </div>
            <div id={styles.inches}>
              <p>Inches (1in)</p>
            </div>
            <div id={styles.centimeters}>
              <p>Centimeters (1cm)</p>
            </div>
          </div>
        </div>

        <div id={styles.relativeUnits}>
          <h3 className={styles.heading}>Relative Units</h3>
          <div className={styles.horizontal}>
            <div id={styles.ems}>
              <p>
                Ems (1em) Relative to this element or its parent's font-size
              </p>
            </div>
            <div id={styles.rems}>
              <p>Rems (1rem) Relative to the :root element's font-size</p>
            </div>
            <div id={styles.percentages}>
              <p>Percentages (25% element's height)</p>
            </div>
            <div id={styles.viewportWidth}>
              <p>Viewport Width (1vw) 1% of viewport's width</p>
            </div>
            <div id={styles.viewportHeight}>
              <p>Viewport Height (1vh) 1% of viewport's height</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id={styles.boxmodel}>
        <h2 className={styles.heading}>Box Model</h2>
        <div className={styles.separator}></div>
        <div className={styles.horizontal}>
          <p>
            Understand the CSS box model including content, padding, border, and
            margin.
          </p>
          <div id={styles.boxesContainer}>
            <div id={styles.marginContainer}>
              <p id={styles.margin}>
                <p className="bold">Margin: Transparent</p>
                <div className={styles.separator}></div>
                Space between element and its neighbors, displaces surrounding
                elements in unpredictable ways
              </p>
            </div>
            <p id={styles.border}>
              <p className="bold">Border: Yellow</p>
              <div className={styles.separator}></div>
              Sits between margin and padding, affects element's size
            </p>
            <p id={styles.padding}>
              <p className="bold">Padding: Green</p>
              <div className={styles.separator}></div>
              Space between border and element's content, displaces surrounding
              elements intuitively
            </p>
            <p id={styles.outline}>
              <p className="bold">Outline: Red</p>
              <div className={styles.separator}></div>
              Does not affect element's size
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} id={styles.positioning}>
        <h2 className={styles.heading}>Positioning</h2>
        <div className={styles.separator}></div>
        <p>
          Explore CSS positioning techniques: static, relative, absolute, fixed,
          and sticky (hover over each element to see positioning effect).
        </p>
        <div className={`${styles.horizontal} ${styles.positioningExamples}`}>
          <div id={styles.static}>
            <p className="bold">Static:</p>
            <div className={styles.separator}></div>
            <p>
              Default positioning; elements flow naturally in the document,
              top/left/right/bottom have no effect.
            </p>
          </div>
          <div id={styles.relative}>
            <p className="bold">Relative:</p>
            <div className={styles.separator}></div>
            <p>
              Positioned relative to its normal position; offsets don't affect
              other elements, creates positioning context.
            </p>
          </div>
          <div id={styles.absolute}>
            <span>
              <p className="bold">Absolute:</p>
              <div className={styles.separator}></div>
              Removed from document flow; positioned relative to nearest
              positioned ancestor, doesn't affect sibling layout
            </span>
          </div>
          <div id={styles.fixed}>
            <p className="bold">Fixed:</p>
            <div className={styles.separator}></div>
            <p>
              Removed from document flow; positioned relative to viewport, stays
              in place when scrolling
            </p>
          </div>
          <div id={styles.sticky}>
            <p className="bold">Sticky:</p>
            <div className={styles.separator}></div>
            <p>
              Hybrid of relative and fixed; acts relative until scroll
              threshold, then "sticks" to specified position.
            </p>
            <p>
              Scrolling element needs explicit height and content needs a scroll
              threshold, usually defined with "top" property.
            </p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </section>
    </div>
  );
}
