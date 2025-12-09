import {AppRouter} from "./providers/routes";
import './styles/index.scss'
import './styles/tailwind.css';
import {MessagePopup} from "@/widgets/MessagePopup";

function App() {

  return (
    <div className="App">
      <img
        className="logo"
        src="/public/assets/METALOGY.jpg"
        alt="metalogy-logo"
      />
      <MessagePopup />
      <AppRouter />
    </div>
  )
}

export default App
