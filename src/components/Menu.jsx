/* eslint-disable no-unused-vars */
import '../styles/styles.css';
import { Table, Container, Button, Accordion } from 'react-bootstrap';
import React, { useState } from 'react';

// To Do ... display all the maths, so show how many pancoins, show how many stars, then do a tally...
// - nice to have, modal at start, to determine amount of teams as well as inputs so you can enter team names and stuff

// - finish the rules section
// Might be easier to add the tally next to the plus minus buttons as a separate column?

// soo i need a seperate function for revenue

function Menu() {
    // counter team 1
    const [counter1, setCounter1] = useState(5);
    // counter team 2
    const [counter2, setCounter2] = useState(5);
    // counter team 3
    const [counter3, setCounter3] = useState(5);

    // star coin state
    const [star1, setStar1] = useState(1);
    const [star2, setStar2] = useState(1);
    const [star3, setStar3] = useState(1);
    console.log(counter1);
    // handles star rating buttons
    let starClick = (e) => {
        let target = e.nativeEvent;
        let teamName = e.target.parentElement.className;
        let operator = e.target.innerText;

        switch (teamName) {
            case 'team1':
                if (operator == '+') {
                    setStar1(star1 + 1);
                } else {
                    setStar1(star1 - 1);
                }
                break;
            case 'team2':
                if (operator == '+') {
                    setStar2(star2 + 1);
                } else {
                    setStar2(star2 - 1);
                }
                break;
            case 'team3':
                if (operator == '+') {
                    setStar3(star3 + 1);
                } else {
                    setStar3(star3 - 1);
                }
                break;
        }
    };

    // handles PanCoins
    let handleClick = (e) => {
        // identify parent element class/name then based on that ....if button clicked, then increment/decrement equivalent in table...boom
        let target = e.nativeEvent;
        let teamName = e.target.parentElement.className;
        let operator = e.target.innerText;

        // depending on which team button has been clicked, increment respect counter

        switch (teamName) {
            case 'team1':
                // if + button pressed
                if (operator == '+') {
                    setCounter1(counter1 + 1);
                } else {
                    setCounter1(counter1 - 1);
                }
                break;
            case 'team2':
                if (operator == '+') {
                    setCounter2(counter2 + 1);
                } else {
                    setCounter2(counter2 - 1);
                }
                break;
            case 'team3':
                if (operator == '+') {
                    setCounter3(counter3 + 1);
                } else {
                    setCounter3(counter3 - 1);
                }
        }
    };

    // show total revenue from star rating multiplier and pancoin amount
    let revenue1 = counter1 * star1;
    let revenue2 = counter2 * star2;
    let revenue3 = counter3 * star3;

    return (
        <div className="menu">
            <Container>
                <h1>PancakeStars</h1>
                <br></br>
                <Table>
                    <thead>
                        <tr>
                            <th>Team Name</th>
                            <th>PanCoins</th>
                            <th>Stars</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Team 1</td>
                            <td className="team1">
                                <Button onClick={handleClick}>+</Button>
                                <Button onClick={handleClick}>-</Button>
                            </td>
                            {/* Star Rating  */}
                            <td className="team1">
                                <Button onClick={starClick}>+</Button>
                                <Button onClick={starClick}>-</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>Team 2</td>
                            <td className="team2">
                                <Button onClick={handleClick}>+</Button>
                                <Button onClick={handleClick}>-</Button>
                            </td>
                            {/* star rating  */}
                            <td className="team2">
                                <Button onClick={starClick}>+</Button>
                                <Button onClick={starClick}>-</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>Team 3</td>
                            <td className="team3">
                                <Button onClick={handleClick}>+</Button>
                                <Button onClick={handleClick}>-</Button>
                            </td>
                            {/* star rating  */}
                            <td className="team3">
                                <Button onClick={starClick}>+</Button>
                                <Button onClick={starClick}>-</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Table>
                    <br></br>
                    <thead>
                        <th>Team 1 PanCoins</th>
                        <th>Team 2 PanCoins</th>
                        <th>Team 3 PanCoins</th>
                    </thead>
                    <tbody>
                        <td id="team1_score">{counter1}</td>
                        <td id="team2_score">{counter2}</td>
                        <td id="team3_score">{counter3}</td>
                    </tbody>
                    <br></br>
                    <thead>
                        <th>Team 1 Stars</th>
                        <th>Team 2 Stars</th>
                        <th>Team 3 Stars</th>
                    </thead>

                    <tbody>
                        <td id="team1_score">{star1}</td>
                        <td id="team2_score">{star2}</td>
                        <td id="team3_score">{star3}</td>
                    </tbody>

                    <br></br>
                    <thead>
                        <th>Team 1 Revenue</th>
                        <th>Team 2 Revenue</th>
                        <th>Team 3 Revenue</th>
                    </thead>
                    <tbody>
                        <td id="team1_score">{revenue1}</td>
                        <td id="team2_score">{revenue2}</td>
                        <td id="team3_score">{revenue3}</td>
                    </tbody>
                </Table>
                <br></br>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>PancakeStars Rules</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    Each team starts with 5 PanCoins to purchase
                                    ingredients.{' '}
                                </li>
                                <li>
                                    Each team starts with a Quality Rating of 1
                                    Star.{' '}
                                </li>
                                <li>
                                    Consider carefully which Pancakes you will
                                    cook first. Simple? Complex?{' '}
                                </li>
                                <li>
                                    Consider carefully the distribution of risk,
                                    um, I mean Pancakes, within your team. Do
                                    you want everyone working on Complex
                                    Pancakes, or should you have some simple
                                    Pancakes in the mix too?{' '}
                                </li>
                                <li>
                                    If your team is broke, and has 0 PanCoins,
                                    the Regulators will undertake a Corporate
                                    Bailout by giving each team an additional 5
                                    PanCoins.
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <br></br>
                *Game created by
                <a
                    href="https://github.com/KathyReid"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {' '}
                    Kathy Reid
                </a>{' '}
                for 3AI Masters of Applied Cybernetics
            </Container>
        </div>
    );
}

export default Menu;
