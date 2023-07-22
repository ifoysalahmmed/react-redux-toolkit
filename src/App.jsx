import React from "react";
import "./App.css";
import CounterView from "./features/counter/CounterView";
import PostsView from "./features/posts/PostsView";

const App = () => {
  return (
    <div>
      <h1>React Toolkit App</h1>
      <CounterView></CounterView>
      <PostsView></PostsView>
    </div>
  );
};

export default App;
