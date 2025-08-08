import React from "react";

function Main({ children }) {
  return (
    <main className="pt-6">
      <div className="container">{children}</div>
    </main>
  );
}

export default Main;
