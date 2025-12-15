import styles from "./Selectors.module.css";
export function Selectors() {
  return (
    <div className={styles.selectorsSection}>
      <h1>CSS Selectors</h1>

      <div className={styles.intro}>
        <p>
          Selectors are how you <strong>target</strong> HTML elements to apply
          styles. Think of them as addresses that tell CSS which elements to
          style.
        </p>
        <p>
          When multiple selectors target the same element, CSS uses{" "}
          <strong>specificity</strong> to determine which styles win. Think of
          it as a scoring system: IDs score highest (100 points),
          classes/pseudo-classes score medium (10 points), and element selectors
          score lowest (1 point). The selector with the highest score gets
          applied. If scores tie, the last one in your CSS wins.
        </p>
        <p>
          The{" "}
          <strong>
            <code>!important</code>
          </strong>{" "}
          flag overrides all specificity rules, forcing a style to apply
          regardless of selector strength. While powerful, it breaks the natural
          cascade and makes debugging difficult—use it sparingly, typically only
          when overriding third-party styles you can't modify.
        </p>
        <p>
          <a href="#quickReference" id={styles.quickReferenceLink}>
            Jump to Quick Reference →
          </a>
        </p>
      </div>

      <div className={styles.selectorBlock}>
        <h2>Basic Selectors</h2>

        <div className={styles.selectorItem}>
          <h3>Element Selector</h3>
          <p className={styles.explanation}>
            Target all elements of a specific type. Use this for baseline
            styles.
          </p>
          <div className={styles.codeExample}>
            <code className={styles.css}>
              {`/* Styles ALL buttons */
            button {
                padding: 1rem;
                border-radius: 0.5rem;
            }`}
            </code>
            <code className={styles.jsx}>
              {`{/* No special syntax needed */}
                <button>Click me</button>`}
            </code>
          </div>
          <p className={styles.practical}>
            <strong>When to use:</strong> Setting default styles for all
            headings, paragraphs, or links across your site.
          </p>
        </div>

        <div className={styles.selectorItem}>
          <h3>Class Selector (.className)</h3>
          <p className={styles.explanation}>
            Target elements by class. Reusable across multiple elements. Your
            most-used selector.
          </p>
          <div className={styles.codeExample}>
            <code className={styles.css}>
              {`/* Targets elements with class="button" */
                .button {
                    background: blue;
                    color: white;
                }

                /* Multiple classes work together */
                .button.primary {
                    background: darkblue;
                }`}
            </code>
            <code className={styles.jsx}>
              {`{/* In JSX, use className instead of class */}
                <button className="button">Normal</button>
                <button className="button primary">Primary</button>

                {/* CSS Modules (recommended) */}
                <button className={styles.button}>Scoped</button>`}
            </code>
          </div>
          <p className={styles.practical}>
            <strong>When to use:</strong> Creating reusable component styles.
            Use CSS Modules to avoid naming conflicts.
          </p>
        </div>

        <div className={styles.selectorItem}>
          <h3>ID Selector (#idName)</h3>
          <p className={styles.explanation}>
            Target a single unique element. IDs must be unique per page. Higher
            specificity than classes.
          </p>
          <div className={styles.codeExample}>
            <code className={styles.css}>
              {`/* Only one element should have id="header" */
                #header {
                    position: fixed;
                    top: 0;
                    width: 100%;
                }`}
            </code>
            <code className={styles.jsx}>
              {`{/* Use id prop in JSX */}
                <header id="header">
                    <nav>...</nav>
                </header>`}
            </code>
          </div>
          <p className={styles.practical}>
            <strong>When to use:</strong> Targeting unique page landmarks
            (header, footer, main navigation) or JavaScript anchors. Prefer
            classes for styling.
          </p>
        </div>
      </div>

      <div className={styles.selectorBlock}>
        <h2>Pseudo-Classes (:state)</h2>
        <p className={styles.blockIntro}>
          Target elements in specific <strong>states</strong> or{" "}
          <strong>positions</strong>. No extra HTML needed.
        </p>

        <div className={styles.selectorItem}>
          <h3>Interactive States</h3>
          <div className={styles.codeExample}>
            <code className={styles.css}>
              {`/* Hover effect */
                .button:hover {
                    background: lightblue;
                    transform: scale(1.05);
                }

                /* When clicked/focused */
                .button:active {
                    transform: scale(0.95);
                }

                /* Keyboard focus */
                .input:focus {
                    outline: 2px solid blue;
                }

                /* Disabled state */
                .button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }`}
            </code>
          </div>
          <p className={styles.practical}>
            <strong>Action:</strong> Add `:hover` to all interactive elements
            for user feedback. Always style `:focus` for accessibility.
          </p>
        </div>

        <div className={styles.selectorItem}>
          <h3>Positional Pseudo-Classes</h3>
          <div className={styles.codeExample}>
            <code className={styles.css}>
              {`/* First child */
                .list-item:first-child {
                    border-top: none;
                }

                /* Last child */
                .list-item:last-child {
                    border-bottom: none;
                }

                /* Every other item (striping) 
                    Options: odd, even, 2n, 2n+1, 3n, etc. */
                .table-row:nth-child(even) {
                    background: #f5f5f5;
                }

                /* Specific position */
                .item:nth-child(3) {
                    color: red;
                }`}
            </code>
          </div>
          <p className={styles.practical}>
            <strong>Action:</strong> Use `:nth-child(even/odd)` for table
            striping. Use `:first-child/:last-child` to remove unwanted
            borders/margins.
          </p>
        </div>
      </div>

      <div className={styles.selectorBlock}>
        <h2>Pseudo-Elements (::element)</h2>
        <p className={styles.blockIntro}>
          Style specific <strong>parts</strong> of an element or insert{" "}
          <strong>generated content</strong>. Uses <code>::</code> (double
          colon).
        </p>

        <div className={styles.selectorItem}>
          <div className={styles.codeExample}>
            <code className={styles.css}>
              {`                /* First letter of paragraph */
                .intro::first-letter {
                    font-size: 2em;
                    font-weight: bold;
                }

                /* First line */
                .paragraph::first-line {
                    font-weight: bold;
                }

                /* Insert content before/after */
                .link::before {
                    content: "🔗 ";
                }

                .external-link::after {
                    content: " ↗";
                }

                /* Decorative elements without HTML */
                .card::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 4px;
                    height: 100%;
                    background: blue;
                }`}
            </code>
          </div>
          <p className={styles.practical}>
            <strong>Action:</strong> Use `::before/::after` to add icons,
            decorative elements, or indicators without cluttering your HTML. Set
            `content: ""` for purely visual elements.
          </p>
        </div>
      </div>

      <div className={styles.selectorBlock}>
        <h2>Combinators (Relationships)</h2>
        <p className={styles.blockIntro}>
          Target elements based on their <strong>relationship</strong> to other
          elements in the DOM tree.
        </p>

        <div className={styles.selectorItem}>
          <h3>Descendant (Space)</h3>
          <div className={styles.codeExample}>
            <code className={styles.css}>
              {`            /* ALL paragraphs inside .card (any level deep) */
            .card p {
                color: gray;
            }`}
            </code>
            <code className={styles.jsx}>
              {`        <div className="card">
            <p>Styled ✓</p>
            <div>
                <p>Also styled ✓</p>
            </div>
        </div>`}
            </code>
          </div>
          <p className={styles.practical}>
            <strong>When to use:</strong> Styling all elements of a type within
            a component, regardless of nesting depth.
          </p>
        </div>

        <div className={styles.selectorItem}>
          <h3>Direct Child ({">"})</h3>
          <div className={styles.codeExample}>
            <code className={styles.css}>
              {`            /* ONLY direct children paragraphs */
            .card > p {
                color: gray;
            }`}
            </code>
            <code className={styles.jsx}>
              {`            <div className="card">
                <p>Styled ✓</p>
                <div>
                    <p>NOT styled ✗</p>
                </div>
            </div>`}
            </code>
          </div>
          <p className={styles.practical}>
            <strong>When to use:</strong> Preventing styles from leaking into
            nested components. More specific than descendant selector.
          </p>
        </div>

        <div className={styles.selectorItem}>
          <h3>Adjacent Sibling (+)</h3>
          <div className={styles.codeExample}>
            <code className={styles.css}>
              {`                /* Paragraph immediately after h2 */
                h2 + p {
                    font-size: 1.2em;
                    color: gray;
                }`}
            </code>
            <code className={styles.jsx}>
              {`                <h2>Title</h2>
                <p>This is styled ✓</p>
                <p>This is NOT ✗</p>`}
            </code>
          </div>
          <p className={styles.practical}>
            <strong>When to use:</strong> Styling the first paragraph after a
            heading differently (intro text). Adding spacing between specific
            adjacent elements.
          </p>
        </div>

        <div className={styles.selectorItem}>
          <h3>General Sibling (~)</h3>
          <div className={styles.codeExample}>
            <code className={styles.css}>
              {`                /* ALL paragraphs after h2 (same parent) */
                h2 ~ p {
                    margin-left: 1rem;
                }`}
            </code>
            <code className={styles.jsx}>
              {`                <h2>Title</h2>
                <p>Styled ✓</p>
                <p>Also styled ✓</p>
                <div>
                    <p>NOT styled (different parent) ✗</p>
                </div>`}
            </code>
          </div>
          <p className={styles.practical}>
            <strong>When to use:</strong> Styling all siblings that follow a
            specific element, like indenting all content after a heading.
          </p>
        </div>
      </div>

      <div className={styles.selectorBlock}>
        <h2>Nested Selectors (CSS Nesting)</h2>
        <p className={styles.blockIntro}>
          Modern CSS allows <strong>nesting</strong> (similar to SCSS). Use{" "}
          <code>&</code> to reference the parent selector.
        </p>

        <div className={styles.selectorItem}>
          <div className={styles.codeExample}>
            <code className={styles.css}>
              {`                /* Traditional way */
                .button { background: blue; }
                .button:hover { background: darkblue; }
                .button.primary { background: green; }
                .button .icon { margin-right: 0.5rem; }

                /* Nested way (modern CSS) */
                .button {
                    background: blue;
                
                    /* & = .button */
                    &:hover {
                        background: darkblue;
                    }
                    
                    /* .button.primary */
                    &.primary {
                        background: green;
                    }
                    
                    /* .button .icon */
                    & .icon {
                        margin-right: 0.5rem;
                    }
                    
                    /* .button > span */
                    & > span {
                        font-weight: bold;
                    }
                }`}
            </code>
          </div>
          <p className={styles.practical}>
            <strong>Action:</strong> Use nesting to keep related styles
            together. The <code>&</code> symbol represents the parent selector.
            Especially useful in CSS Modules where class names are already
            scoped.
          </p>
        </div>
      </div>

      <div className={styles.quickReference} id="quickReference">
        <h2>Quick Reference</h2>
        <table className={styles.referenceTable}>
          <thead>
            <tr>
              <th>Selector</th>
              <th>Targets</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>element</code>
              </td>
              <td>All elements of that type</td>
              <td>
                <code>button</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>.class</code>
              </td>
              <td>Elements with that class</td>
              <td>
                <code>.button</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>#id</code>
              </td>
              <td>Element with that ID</td>
              <td>
                <code>#header</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>:hover</code>
              </td>
              <td>Element being hovered</td>
              <td>
                <code>.link:hover</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>::before</code>
              </td>
              <td>Insert before content</td>
              <td>
                <code>.icon::before</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>A B</code>
              </td>
              <td>B inside A (any depth)</td>
              <td>
                <code>.card p</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>A {">"} B</code>
              </td>
              <td>B directly inside A</td>
              <td>
                <code>.card {">"} p</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>A + B</code>
              </td>
              <td>B immediately after A</td>
              <td>
                <code>h2 + p</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>A ~ B</code>
              </td>
              <td>All B after A (siblings)</td>
              <td>
                <code>h2 ~ p</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>&</code>
              </td>
              <td>Parent selector (nesting)</td>
              <td>
                <code>&:hover</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.bestPractices}>
        <h2>Best Practices</h2>
        <ul>
          <li>
            ✓ <strong>Prefer classes over IDs</strong> for styling (better
            reusability, lower specificity)
          </li>
          <li>
            ✓ <strong>Use CSS Modules</strong> in React to avoid global
            namespace pollution
          </li>
          <li>
            ✓ <strong>Keep selectors shallow</strong> (max 2-3 levels) for
            better performance and maintainability
          </li>
          <li>
            ✓ <strong>Always style :focus</strong> for keyboard navigation
            accessibility
          </li>
          <li>
            ✓ <strong>Use :hover with :focus</strong> so effects work for both
            mouse and keyboard users
          </li>
          <li>
            ✗ <strong>Avoid !important</strong> unless overriding third-party
            styles
          </li>
          <li>
            ✗ <strong>Don't use inline styles</strong> in JSX (use className
            instead)
          </li>
        </ul>
      </div>
    </div>
  );
}
