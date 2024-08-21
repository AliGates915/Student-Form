import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Login.css'; // Import the CSS file

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = (data) => {
    if (login(data.username, data.password)) {
      navigate('/dashboard'); // Navigate to the dashboard on successful login
    } else {
      alert('Invalid credentials'); // Show an alert on failed login
    }
  };

  return (
    
    <div className="app">
      <div className="login-form">
          
        <h1 className="title">Student Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
          <label htmlFor="">Username/Email address<span>*</span></label>
          {errors.username && <p className="error">Username is required</p>}
            <input 
              type="text" 
              placeholder="Username/Email address" 
              {...register('username', { required: true })}
            />
            
          </div>
          <div className="input-container">
            <label htmlFor="">Password<span>*</span></label>
            {errors.password && <p className="error">Password is required</p>}
            <input 
              type="password" 
              placeholder="Password" 
              {...register('password', { required: true })}
            />
            
          </div>

          <div className="button-container">
            <input 
              type="submit" 
              value="Sign In"
            />
          </div>
          <div className="forgot-password">
          Forgot password?
        </div>
        </form>
      
      </div>
    </div>
  );
};

export default Login;
