// Manual Next.js build runner to bypass CLI output issues.
// Ensure child workers see sane terminal dimensions.
process.stdout.columns = process.stdout.columns || 120;
process.stderr.columns = process.stderr.columns || 120;
process.env.COLUMNS = process.env.COLUMNS || "120";
process.env.FORCE_COLOR = process.env.FORCE_COLOR || "0";

const origRepeat = String.prototype.repeat;
String.prototype.repeat = function repeat(count) {
  if (typeof count === "number" && count < 0) {
    console.trace("String.repeat negative", count, "value:", this.toString());
  }
  return origRepeat.call(this, count);
};
const build = require("next/dist/build").default;

build(process.cwd(), {})
  .then(() => {
    console.log("Manual build finished");
  })
  .catch((err) => {
    console.error("Manual build failed", err);
    process.exit(1);
  });
