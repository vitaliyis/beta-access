import {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {getCodeApi} from '../../../api/api';
import {Spinner} from '../../Spinner/Spinner';
import {MyContext} from '../../../App';

export const BetaAccess = () => {
  const {setIsLogged} = useContext(MyContext)
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const onChange = e => {
    setCode(e.target.value)
    setError('')
  }

  const getCode = code => {
    setIsLoading(true)
    getCodeApi(code)
      .then(data => {
        if (data.code === code) {
          setIsLogged(true)
          history.push("/")
        } else {
          setError('The code is invalid. Please try again!')
        }
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  }

  const onSubmit = e => {
    e.preventDefault()
    if (code === '') {
      setError('Input is empty. Please enter something.')
    } else {
        getCode(code)
    }
  }

  if (isLoading) return <Spinner/>

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Beta Access</h1>
      <form className="text-left w-50 mt-5">
        <div className="form-group">
          <label htmlFor="code">Please enter the code</label>
          <input
            type="text"
            className={`form-control ${error ? "is-invalid" : null}`}
            id="code"
            placeholder="code"
            value={code}
            onChange={onChange}
          />
          {error && <div className="invalid-feedback">{error}</div>}
        </div>
        <button
          className="btn btn-primary w-100"
          onClick={onSubmit}
        >Start</button>
      </form>
    </div>
  )
}