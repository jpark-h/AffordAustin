// import './SortBar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';

//Change values to queries
const ChildcareSortBar = ({sendQuery}) => {
    const [isStartTime, setIsStartTime] = useState(false);
    const [isEndTime, setIsEndTime] = useState(false);
    const [isAge, setIsAge] = useState(false);
    const [isAscending, setIsAscending] = useState(false);
    const [startTimeName, setStartTimeName] = useState("# Units");
    const [endTimeName, setEndTimeName] = useState("Unit Type");
    const [ageName, setAgeName] = useState("Zip Code");
    const [query, setQuery] = useState("");

    const handleClick = (e) => {
        const button = e.target.value;
        setFilter(button);
    }

    const setFilter = useCallback((button) => {
        if (button === 'start_time') {
            if (!isStartTime) {
                setIsStartTime(true);
                setIsEndTime(false);
                setIsAge(false);
                setIsAscending(true);
                setQuery("sort ascending by start time");
            } else if (isAscending){
                setIsAscending(false);
                setQuery("sort descending by start time");
            } else {
                setIsStartTime(false);
                setQuery("");
            }
        } else if (button === 'end_time') {
            if (!isEndTime) {
                setIsStartTime(false);
                setIsEndTime(true);
                setIsAge(false);
                setIsAscending(true);
                setQuery("sort ascending by end time");
            } else if (isAscending){
                setIsAscending(false);
                setQuery("sort descending by end time");
            } else {
                setIsEndTime(false);
                setQuery("");
            }
        } else if (button === 'age') {
            if (!isAge) {
                setIsStartTime(false);
                setIsEndTime(false);
                setIsAge(true);
                setIsAscending(true);
                setQuery("sort ascending by age");
            } else if (isAscending){
                setIsAscending(false);
                setQuery("sort descending by age");
            } else {
                setIsAge(false);
                setQuery("");
            }
        }
    }, [isStartTime, isEndTime, isAge, isAscending]);

    useEffect(() => {
        setFilter('');
        setStartTimeName(isStartTime ? (isAscending ? "Start Time ^": "Start Time v") : "Start Time");
        setEndTimeName(isEndTime ? (isAscending ? "End Time ^": "End Time v") : "End Time");
        setAgeName(isAge ? (isAscending ? "Age Group ^": "Age Group v") : "Age Group");
        sendQuery(query);
    }, [setFilter, isStartTime, isEndTime, isAge, isAscending]);

    return (
        <Container>
            <Row className="g-3 justify-content-center" xs='auto'>
                <Col><h3>Sort By:</h3></Col>
                <Col>
                    <ButtonToolbar onClick={e =>{handleClick(e)}}>
                        <Button value='start_time' style={{margin:"0 10px"}}>{startTimeName}</Button>
                        <Button value='end_time' style={{margin:"0 10px"}}>{endTimeName}</Button>
                        <Button value='age' style={{margin:"0 10px"}}>{ageName}</Button>
                    </ButtonToolbar>
                </Col>
            </Row>
        </Container>
    );
}

export default ChildcareSortBar;