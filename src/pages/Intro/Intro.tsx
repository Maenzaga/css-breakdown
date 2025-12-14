import styles from "./Intro.module.css";

export const Intro = () => {
  return (
    <div id={styles.introContainer}>
      <h1>What is CSS?</h1>

      <p>
        <strong>CSS (Cascading Style Sheets)</strong> is the language used to
        style and layout web pages. While HTML provides structure, CSS controls
        how elements look and behave visually.
      </p>

      <h2>Browser Differences</h2>

      <p>
        Browsers interpret CSS through different{" "}
        <strong>rendering engines</strong> (Blink, WebKit, Gecko). This leads
        to:
      </p>
      <ul>
        <li>
          <strong>Vendor prefixes</strong> needed for experimental features (
          <code>-webkit-</code>, <code>-moz-</code>, <code>-ms-</code>)
          <p>
            Browsers test new CSS features before they're standardized. During
            this experimental phase, properties require vendor-specific
            prefixes. For example, <code>-webkit-transform</code> for
            Chrome/Safari, <code>-moz-transform</code> for Firefox. Once
            standardized, the unprefixed version (<code>transform</code>) works
            everywhere. Modern tooling like Autoprefixer adds these
            automatically.
          </p>
        </li>
        <li>
          <strong>Default styles</strong> vary between browsers (requiring CSS
          resets)
          <p>
            Each browser applies its own default stylesheet (user-agent styles)
            to HTML elements. Margins on headings, button styles, and form
            inputs all differ between Chrome, Firefox, and Safari. CSS resets
            (like Normalize.css or a custom reset) eliminate these
            inconsistencies, giving you a clean, predictable baseline to build
            upon.
          </p>
        </li>
        <li>
          <strong>Feature support</strong> differs — newer properties may not
          work everywhere
          <p>
            Not all browsers support the latest CSS features at the same time.
            Modern properties like <code>container queries</code>,{" "}
            <code>:has()</code>, or <code>subgrid</code> may work in new
            browsers but fail in older versions. Use tools like{" "}
            <a href="https://caniuse.com" target="_blank">
              Can I Use
            </a>{" "}
            to check compatibility, and provide fallbacks or progressive
            enhancement for unsupported features.
          </p>
        </li>
      </ul>

      <p>Always test across browsers or use tools like Autoprefixer.</p>

      <h2>Core Capabilities</h2>

      <h3>Layout</h3>
      <p>
        Position and arrange elements using Flexbox, Grid, positioning, floats,
        and the box model.
      </p>

      <h3>Styling</h3>
      <p>
        Control colors, backgrounds, borders, typography, shadows, filters, and
        opacity.
      </p>

      <h3>Animation</h3>
      <p>
        Create motion with transitions (state changes) and keyframe animations
        (complex sequences).
      </p>

      <hr />

      <p>
        CSS transforms static HTML into interactive, responsive, and visually
        engaging experiences.
      </p>
    </div>
  );
};
