"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import EmptyState from "@/modules/EmptyState";
import Main from "@/modules/Main";
import { useState, useEffect } from "react";

export default function Home() {
  const [boards, setBoards] = useState([]);
  const [currentBoard, setCurrentBoard] = useState({});
  const [currentBoardId, setCurrentBoardId] = useState("");

  async function fetchBoards() {
    const res = await fetch("/api/board");
    const data = await res.json();
    if (data.success) {
      setBoards(data.boards);
    }
  }
  function refreshCurrentBoard() {
    const filtered = boards.filter((board) => board.id === currentBoardId);
    if (filtered) {
      setCurrentBoard(filtered[0]);
    }
  }

  useEffect(() => {
    fetchBoards();
  }, []);

  useEffect(() => {
    refreshCurrentBoard();
  }, [boards]);

  return (
    <>
      <div>
        <Header currentBoard={currentBoard} />
        <Sidebar
          boards={boards}
          currentBoard={currentBoard}
          setCurrentBoard={setCurrentBoard}
          setCurrentBoardId={setCurrentBoardId}
          fetchBoards={fetchBoards}
        />
      </div>
      {boards.length > 0 ? (
        <Main currentBoard={currentBoard} fetchBoards={fetchBoards} />
      ) : (
        <EmptyState />
      )}
    </>
  );
}
