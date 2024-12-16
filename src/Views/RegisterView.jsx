import "./RegisterView.css";
import Header from "../Components/Header";
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStoreContext } from '../Context/context.jsx';

function RegisterView() {
  const {
    setFirst,
    setLast,
    setEmail,
    setPassword,
    setSelected,
    setCurrentGenre
  } = useStoreContext();

  const navigate = useNavigate();

  const firstName = useRef('');
  const lastName = useRef('');
  const email = useRef('');
  const password = useRef('');
  const confirmedPassword = useRef('');

  const genres = [
    { genre: "Sci-Fi", id: 878 },
    { genre: "Thriller", id: 53 },
    { genre: "Adventure", id: 12 },
    { genre: "Family", id: 10751 },
    { genre: "Animation", id: 16 },
    { genre: "Action", id: 28 },
    { genre: "History", id: 36 },
    { genre: "Fantasy", id: 14 },
    { genre: "Horror", id: 27 },
    { genre: "Comedy", id: 35 },
    { genre: "Crime", id: 80 },
    { genre: "Music", id: 10402 },
    { genre: "Mystery", id: 9648 },
    { genre: "War", id: 10752 },
    { genre: "Western", id: 37 }
  ];

  const checkBoxesRef = useRef({});

  function handleSubmit(event) {
    event.preventDefault();

    const selectedGenresIds = Object.keys(checkBoxesRef.current)
      .filter((genreId) => checkBoxesRef.current[genreId].checked)
      .map(Number);

    if (selectedGenresIds.length < 10) {
      alert("You need at least 10 genres!");
      return;
    }

    const selectedGenres = genres.filter((genre) => selectedGenresIds.includes(genre.id));

    if (confirmedPassword.current.value != password.current.value) {
      alert("Your passwords don't match!");
      return;
    }

    setFirst(firstName.current.value);
    setLast(lastName.current.value);
    setEmail(email.current.value);
    setPassword(password.current.value);

    setSelected(selectedGenres);
    setCurrentGenre(selectedGenresIds[0].genre);

    navigate('/login');
  }

  return (
    <div className="register-container">
      <div className="form-container">
        <Header />
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="First Name"
            ref={firstName}
            required />
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Last Name"
            ref={lastName}
            required />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            ref={email}
            required />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            ref={password}
            required
          />
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm Password"
            ref={confirmedPassword}
            required
          />
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <p className="login-link">
          Already have an account? <Link to={`/login`} className="login-link">Login</Link>
        </p>
      </div>
      <div className="genre-selector">
        <h2>Choose Your Favorite Genres</h2>
        <div className="genre-checkboxes">
          {genres.map((item) => {
            return (
              <div key={item.id}>
                <input
                  type='checkbox'
                  id={`genre-${item.id}`}
                  ref={(el) => (checkBoxesRef.current[item.id] = el)}
                />
                <label htmlFor={`genre-${item.id}`}>
                  {item.genre}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RegisterView;