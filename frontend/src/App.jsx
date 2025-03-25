import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Food from './components/Food.jsx'
import Card from './components/Card.jsx'
import Button from './components/Button.jsx'
import Student from './components/Student.jsx'
import Mof from './components/Mof.jsx'
import UserGreeting from './components/UserGreeting.jsx'
import List from './components/List.jsx'
import Button2 from './components/Button2.jsx'
import ProfilePicture from './components/ProfilePicture.jsx'
import MyComponent from './components/MyComponent.jsx'
import Counter from './components/Counter.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  const fruits = [{id: 1, name: "apple", calories: 95},
                  {id: 2, name: "orange", calories: 45},
                  {id: 3, name: "banana", calories: 105},
                  {id: 4, name: "coconut", calories: 159},
                  {id: 5, name: "pineapple", calories: 37}
                  ];

  const vegetables = [{id: 6, name: "potatoes", calories: 110},
                    {id: 7, name: "celery", calories: 15},
                    {id: 8, name: "carrots", calories: 25},
                    {id: 9, name: "corn", calories: 63},
                    {id: 10, name: "broccoli", calories: 50}
                    ];                
  
    return (
      
      <Router>
          <Routes>
            <Route path="/Mof" element={<Mof />}></Route>
          </Routes>

      <UserGreeting isLoggedIn={true} userName="TheBaby"></UserGreeting>

      <Button></Button>
      <Button2></Button2>
      <ProfilePicture></ProfilePicture>
      <Header></Header>
      <MyComponent></MyComponent>
      <Counter></Counter>
      {fruits.length > 0 ? <List items={fruits} category="Fruits"></List> : null}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"></List> : null}
      <Student name="Spongebob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={42} isStudent={false}></Student>
      <Student name="Squidward" age={50} isStudent={false}></Student>
      <Student name="sandy" age={27} isStudent={true}></Student>
      <Food></Food>
      <Card name="Mclovin"></Card>
      <Card name="Gaopi"></Card>
      <Footer></Footer>
      </Router>

    );
}

export default App
