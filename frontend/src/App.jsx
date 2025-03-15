import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Food from './components/Food.jsx'
import Card from './components/Card.jsx'
import Button from './components/Button.jsx'
import Student from './components/Student.jsx'

function App() {
  
    return (
      <>
      <Button></Button>
      <Header></Header>
      <Student name="Spongebob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={42} isStudent={false}></Student>
      <Student name="Squidward" age={50} isStudent={false}></Student>
      <Student name="sandy" age={27} isStudent={true}></Student>
      <Food></Food>
      <Card name="Mclovin"></Card>
      <Card name="Gaopi"></Card>
      <Footer></Footer>
      </>
    );
}

export default App
