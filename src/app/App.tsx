// config

// styles
import { Button } from "@/shared/ui/Button";
import styles from "./App.module.scss";
import { useCallback, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const consoleLog = useCallback(() => {
    console.log("click");
  }, []);

  return (
    <div className={styles.App}>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}> add</button>
      <Button onClick={consoleLog}>Button 1</Button>
    </div>
  );
};

export default App;
