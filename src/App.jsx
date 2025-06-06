import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";

import { Navbar } from "./components/Navbar/Navbar";
import SkillsPage from "./components/skills/Skills";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <About/>
      <SkillsPage />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
