"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import EmptyState from "@/layouts/EmptyState";
import { useState, useEffect } from "react";

export default function Home() {
  const [boards, setBoards] = useState([]);
  const [currentBoard, setCurrentBoard] = useState({});
  async function fetchBoards() {
    const res = await fetch("/api/board");
    if (res.success) {
      setBoards(res.boards);
    }
  }

  useEffect(() => {
    fetchBoards();
    if (boards.length > 0) {
      setCurrentBoard(boards[0]);
    }
  }, []);

  return (
    <>
      <div>
        <Header currentBoard={currentBoard} />
        <Sidebar
          boards={boards}
          currentBoard={currentBoard}
          setCurrentBoard={setCurrentBoard}
          // fetchBoards={fetchBoards}
        />
      </div>
      <EmptyState />
    </>
  );
}
