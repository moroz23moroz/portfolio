import { ChangeEvent} from 'react'
import './Form.scss'

export const Form = () => {
  let createText = ''

  const formSubmit = () => {
    console.log(createText);
  }

  const changeText = (event: ChangeEvent<HTMLInputElement>) => {
    createText = event.target.value
  }
  return (
    <div className="form-wrapper">
      <form action="/" onSubmit={formSubmit}>
        <label>
          <input type="text" onInput={changeText} />
          <button></button>
        </label>
      </form>
    </div>
  );
};
