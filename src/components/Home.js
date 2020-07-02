import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Home.css';

function Home() {
    return ( 
        <Jumbotron id="home-jumbotron" fluid>
            <Container>
                <h1>Attendance App</h1>
                <p>
                Keep an accurate count of your students. Who was present and who wasn't.
                </p>
            </Container>
        </Jumbotron>
    )
}

export default Home;