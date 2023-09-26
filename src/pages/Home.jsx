import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
    <h1>Taylor Golden</h1>
    <Link to="/Projects">
    <button >
      Enter
    </button>
    </Link>
    <p className="read-the-docs">
      Software Developer, Educator, Illustrator, Dad
    </p>
  </div>

);

}

