// config

// styles
import { Button } from "@/shared/ui/Button";
import styles from "./App.module.scss";
import { useCallback, useState } from "react";
import { AdminUsers } from "@/entities/admin/ui/AdminUsers/AdminUsers";

const App = () => {
  return (
    <div className={styles.App}>
      <AdminUsers />
    </div>
  );
};

export default App;
