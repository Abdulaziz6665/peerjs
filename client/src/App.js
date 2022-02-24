import './App.css';
import io from 'socket.io-client'
import { useEffect, useState } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom'
import {Room} from './Room'

function App() {

  const navigate = useNavigate()
  const [socket, setSocket] = useState(null)

  const host = window.location.origin === 'http://localhost:3000' ? 'http://localhost:3001' : window.location.origin
  useEffect(() => {
    const newSocket = io(host)
    setSocket(newSocket);
  }, [host]);

  useEffect(() => {
    if(socket) {
      socket.on('uuid-connect', ({roomId}) => {
        navigate('/' + roomId)
      })
    }
  }, [socket])

  return (
    <div className="App">
      <Routes>
        <Route path='/:room' element={<Room/>}/>
      </Routes>

    </div>
  );
}

export default App;
