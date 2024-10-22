import { Button, Form, Alert } from 'react-bootstrap';
import { useContext, useRef, useState } from 'react';
import { MyContext } from '../context';

const StageOne = () => {
  const textInput = useRef();
  const context = useContext(MyContext);
  const [error, setError] = useState([false, '']); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const validate = validateInput(value);

    // Run validation
    // Add to list
    if (validate) {
      setError([false, '']);
      context.addPlayer(value);
      textInput.current.value = '';
    }
  }

  const validateInput = (value) => {
    if (value === '') {
      setError([true, 'sorry you need to add something']);
      return false;
    }
    if (value.length <= 2) {
      setError([true, 'sorry you need at least 3 characters']);
      return false;
    }
    return true;
  }

  return (
    <>
      <Form onSubmit={handleSubmit} className='mt-4'>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Add player name"
            name='player'
            ref={textInput}
          />
        </Form.Group>

        {error[0] &&
          <Alert variant='danger'>
            {error[1]}
          </Alert>
        }

        <Button className='miami' variant='primary' type='submit'>
          Add Player
        </Button>

        {context.player && context.player.length > 0 && (
          <>
            <hr />
            <div>
              <ul className='list-group'>
                {context.player.map((player, idx) => (
                  <li key={idx} className='list-group-item d-flex 
                  justify-content-between 
                  align-items-center list-group-item-action'>
                    {player}
                    <span className='badge badge-danger' onClick={() => context.removePlayer(idx)}>
                      X
                    </span>
                  </li>
                ))}
              </ul>
              <div className='action_button' onClick={()=>context.next()} >
                NEXT
              </div>
            </div>
          </>
        )}
      </Form>
    </>
  )
}

export default StageOne;
