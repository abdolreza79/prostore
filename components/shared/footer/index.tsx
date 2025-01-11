import { APP_NAME } from "@/lib/constants";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t p-5">
      <div className="flex items-center justify-center  text-sm">
        {currentYear} {APP_NAME}. All Rights Reserverd
      </div>
    </footer>
  );
}
