import React, { useState } from "react";
import { httpLink } from "@trpc/client";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "./server-config/trpc";

import "./index.scss";

const client = new QueryClient(); // QuryClient manages all of the caching in our app

const AppContent = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: web</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
);

const API_URL = "http://localhost:8080/trpc";

const App = () => {
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpLink({
          url: API_URL,
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={client}>
      <QueryClientProvider client={client}>
        <AppContent />
      </QueryClientProvider>
    </trpc.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
