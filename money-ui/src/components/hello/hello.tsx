import logo from 'components/hello/logo.svg';
import 'components/hello/hello.css';

const Hello = () => {
  return (
    <div className="hello">
      <h1 className="hello-header">
        <img src={logo} className="hello-logo" alt="logo" />
        <div>
          Web Application for money tracking.
          <br/>
          Server URL: {process.env.REACT_APP_SERVER_URL}
          <br/>
          Env: {process.env.NODE_ENV}
        </div>
      </h1>
    </div>)
}

export default Hello;
