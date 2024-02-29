"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import EmptyState from "@/modules/EmptyState";
import { useState, useEffect } from "react";

export default function Home() {
  const [boards, setBoards] = useState([]);
  const [currentBoard, setCurrentBoard] = useState({});
  async function fetchBoards() {
    const res = await fetch("/api/board");
    const data = await res.json();
    if (data.success) {
      setBoards(data.boards);
      if (boards.length > 0) {
        setCurrentBoard(data.boards[0]);
      }
    } else {
      console.log(data);
    }
  }

  useEffect(() => {
    fetchBoards();
  }, []);

  return (
    <>
      <div>
        <Header currentBoard={currentBoard} />
        <Sidebar
          boards={boards}
          currentBoard={currentBoard}
          setCurrentBoard={setCurrentBoard}
          fetchBoards={fetchBoards}
        />
      </div>
      {boards.length > 0 ? <></> : <EmptyState />}
    </>
  );
}
