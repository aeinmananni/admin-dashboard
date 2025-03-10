import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { registerLicense } from "@syncfusion/ej2-base";
import "./i18n";
registerLicense(
  "Mgo+DSMBaFt/QHRqVVhkVFpHaVZdX2NLfUN3T2ZRdVt0ZDU7a15RRnVfQF1kSHpRdkFgX3pcdg==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRBQmpWfFN0RnNYdVt4flBCcDwsT3RfQF5jS35Ud0FhWXtddnJSQA==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxAYVF2R2BJflR1fF9DZEwxOX1dQl9gSXxTcURnW39ac3JcRmY=;MTA4MjcxN0AzMjMwMmUzNDJlMzBRd29wZ2hnL3YwRnQ4SWtseUdkamxXTmpiYlFHVUVKcjZCQm9pT2l5eUVvPQ==;MTA4MjcxOEAzMjMwMmUzNDJlMzBCc0JESWkyNTUzNGhqUUJ4U0VhUzNIY2FWYy9sWGdQV2kveFdpaVN5Ni9nPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmBWd0x0RWFab196cV1MZVhBJAtUQF1hSn5RdkJiXX1edHdSQGNa;MTA4MjcyMEAzMjMwMmUzNDJlMzBUZUM3K0NaL3diTUhhdllHYzdPYXl2UDZ1T3ROV1ZKeWo3TVBGMVBqdE1FPQ==;MTA4MjcyMUAzMjMwMmUzNDJlMzBsRjFpQ2lHeWhtdDEvdzMvaDlFRUUxWHZMb25IMjRUMmpQeUd4blhWOENjPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXnxAYVF2R2BJflR1fF9DZEwxOX1dQl9gSXxTcURnW39ac3xXRGY=;MTA4MjcyM0AzMjMwMmUzNDJlMzBkUFdmMXZQeGhhNUtFcDhqY2FxcUk2UzlBaHUvTGpsTTFweExJVzdURGcwPQ==;MTA4MjcyNEAzMjMwMmUzNDJlMzBWMDl6STg2TjJibGhQZmtJdjZJT3RHMVdubWVPZWdDZWtVVGV6MjhjMFQ0PQ==;MTA4MjcyNUAzMjMwMmUzNDJlMzBUZUM3K0NaL3diTUhhdllHYzdPYXl2UDZ1T3ROV1ZKeWo3TVBGMVBqdE1FPQ=="
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="w-full h-screen transition-all duration-300 overflow-hidden flex flex-col dark:bg-main-dark-bg ">
      <App />
    </div>
  </StrictMode>
);
