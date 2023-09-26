import { Link } from 'react-router-dom'


export default function Projects() {
    return (
        <div>
            <p>
                Thank you for visiting my page. Featured are some of my best and most enjoyable applications
                from my time in bootcamp and beyond. I first got into the tech field because of my interest in the intersection of
                technology, design, and education. I am passionate about using software development to create web services that make
                learning and communication more effective, enjoyable, and aesthetically pleasing.
            </p>
            <div>
                <h1> Projects</h1>
            </div>
            <section>
                <a href="https://kumoko8.github.io/Front-End-App-DnD-Character-Project/" target="_blank">
                    <img className="image-deco" src='../../DnD.png'></img>
                </a>
            </section>
            <section>
            <a href="https://project-collections-cfb3d3b9c8f8.herokuapp.com/"target="_blank">
                    <img className="image-deco" src='../../placeholder.png'></img>
                </a>
            </section>
            <Link to="/Contact">
                <button >
                    Contact Me
                </button>
            </Link>
            <Link to="/Design">
                <button >
                    Design
                </button>
            </Link>
        </div>
    );





}