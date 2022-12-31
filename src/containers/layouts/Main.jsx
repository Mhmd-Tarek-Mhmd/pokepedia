import React from "react";

function Main({ children }) {
  return (
    <main className="min-h-[calc(100vh-80px)] grid place-items-center dark:bg-[#121212] pt-6">
      <div className="container">{children}</div>
    </main>
  );
}

export default Main;
