import React from "react";

const Sidebar = () => {
  return (
    <div className="col-md-4">
      <h3>Sidebar</h3>
      <p>This is a sidebar section. Add extra links or information here.</p>
    </div>
  );
};

export const MainContent = () => {
  return (
    <div className="col-md-8">
      <h2>Main Content</h2>
      <p>
        This is the main content section. You can add more details or features
        here.
      </p>
    </div>
  );
};

const Content = () => {
  return (
    <main className="container my-5">
      <div className="row">
        <MainContent />
        <Sidebar />
      </div>
    </main>
  );
};

export default Content;
