import { useEffect, useState } from "react"
import Aos from 'aos';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import { useRecoilState } from "recoil"
import { userState } from './atoms/userState';
import { auth } from "./firebase/Firebase";
import LoadingScreen from "./screens/LoadingScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {

  Aos.init()
  const [user, setUser] = useRecoilState(userState)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    
    setLoading(true)

    const unsubscribe = auth.onAuthStateChanged(
      userAuth => {
        if(userAuth){
          setUser({
            uid: userAuth.uid,
            email: userAuth.email
          })
        } 
        else{
          setUser(null)
        }

        setLoading(false)
      }
    )

    return unsubscribe;
  }, [])

  return (
    loading?
    <LoadingScreen />
    :
    <BrowserRouter>
      {
        user?
          <MainScreen />
        :
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/register" exact component={RegisterScreen} />
        </Switch>
      }
    </BrowserRouter>
  );
}

export default App;
