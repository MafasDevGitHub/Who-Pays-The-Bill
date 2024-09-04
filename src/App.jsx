import { useContext } from 'react';
import { MyContext } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './style/app.css'

import StageOne from './componenets/stageOne';
import StageTwo from './componenets/stageTwo';

const App = () => {
  const context = useContext(MyContext)
  return (
    <div className='wrapper'>
      <div className='center-wrapper'>
        <h1><b>Who Pays The Bill ?</b></h1>
        {context.stage === 1 ?
        <StageOne/>
        :
        <StageTwo/>
        }
      </div>
    </div>
  )
}

export default App;