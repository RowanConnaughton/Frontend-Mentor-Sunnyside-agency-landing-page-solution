import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="container w-full overflow-hidden mx-auto">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
