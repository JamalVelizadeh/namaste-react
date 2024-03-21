const element = React.createElement(
  "h1",
  { id: "parent", style: { color: "green" } },
  [
    React.createElement("h2", { id: "child" }, "Hello world from React"),
    React.createElement("h3", { style: { color: "red" } }, "Hello Sibling n"),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
