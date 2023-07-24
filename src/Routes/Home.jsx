import React from 'react'
import { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal} from '../Components/utils/global.context'

const Home = () => {
  const { users } = useContext(ContextGlobal);
  console.log(users);

  if (!users) {
    return (
      <div>Loading...</div>
    )
  }
  
  return (
    <main>
      <div>
        <h1>Home</h1>
        <div className='card-grid'>
          {users.map(user => (
            <Card key={user.id} user={user}/>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home