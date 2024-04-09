import './App.css';
import {Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Resume from './components/Resume';
import PdfComponent from './components/PdfComponent';
import PdfComponentSecondModele from './components/PdfComponentSecondModele';
import PdfComponent3 from './components/pdfcomponent3/PdfComponent3';

function App() {
  return (
    <Container fluid className="bg-white p-0">

      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={ <Resume/> } exact></Route>
        <Route path="/preview1" element={<PdfComponent/>}></Route>
        <Route path="/preview2" element={<PdfComponentSecondModele/>}></Route>
        <Route path="/preview3" element={<PdfComponent3/>}></Route>
      </Routes>
      <Footer></Footer>

    </Container>
  );
}

export default App;
