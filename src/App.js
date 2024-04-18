import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ErrorPage404 from './components/ErrorPage/ErrorPage404';
import Home from './components/HomePage/Home';
import { ChakraProvider } from '@chakra-ui/react'
import View1 from './components/Group1/View1';
import View2 from './components/Group2/View2';

function App() {
  return (
    <ChakraProvider>
      <Router>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route exact path="/group1" element={<View1 />}></Route>
          <Route exact path="/group2" element={<View2 />}></Route>

          {/* For Error 404 Page when someone enters random url */}
          <Route path="*" element={<ErrorPage404 />}></Route>
        </Routes>

      </Router>
    </ChakraProvider>
  );
}

export default App;

// Tailwind:
// npx tailwindcss -i ./src/index.css -o ./src/tailwind.css --watch