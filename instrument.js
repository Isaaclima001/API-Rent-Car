// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
const Sentry = require("@sentry/node");

Sentry.init({
  dsn: "https://6b562b381bd9d6bcb98bfd592a08d6a3@o4509867952439296.ingest.us.sentry.io/4509867976294400",

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});