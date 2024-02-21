"use client";

import Button from "@/components/Button";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import EmptyState from "@/modules/EmptyState";


export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Sidebar />
      </div>
      <EmptyState />
    </>
  );
}
