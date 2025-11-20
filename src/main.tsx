// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import I18nProvider from "@/i18n/I18nProvider";
import { ToastProvider } from "@/components/ui/ToastProvider";
import App from "@/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </I18nProvider>
  </React.StrictMode>
);
