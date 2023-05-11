import img1 from './assets/Img/account.svg'
import img2 from './assets/Img/manage.svg'
import img3 from './assets/Img/insure.svg'
import img4 from './assets/Img/eyecam-co.svg'
import bg from './assets/Img/bg-header-desktop.svg'
import './App.css'
import Card from './Components/Card.jsx'

function App() {


  return (
    <>
    <div className="above">
      <img src={bg}/>
    </div>
      <Card
        Img={img1}
        title="photosnap"
        newB="NEW!"
        feature="FEATURE"
        position="Senior Fronted Develop"
      />
      <Card
        Img={img2}
        title="Manage"
        newB="NEW!"
        feature="FEATURE"
        position="Fullstack Develop"
      />
      <Card
        Img={img3}
        title="Account"
        newB="NEW!"
        position="Junior Fronted Develop"
      />
      <Card
        Img={img4}
        title="My Home"
        position="Junior Fronted Develop"
      />
    </>
  )
}

export default App
