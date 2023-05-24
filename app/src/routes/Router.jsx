import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { HomePage } from "../pages/HomePage";
import NotFound from "../routes/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
