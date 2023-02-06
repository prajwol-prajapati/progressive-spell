import { QueryClient, QueryClientProvider } from "react-query";
import "../assets/css/app.css";
import { ReactQueryDevtools } from "react-query/devtools";
import { HomePage } from "../spell/views/spell.view";
import { Layout } from "./components/layout";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { ContextProvider } from "../utils";

const DetailsPage = React.lazy(() => import("../spell/views/spell-detail.view"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingOutlined />}>
        <ContextProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/details/:id" element={<DetailsPage />} />
            </Route>
          </Routes>
        </ContextProvider>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
