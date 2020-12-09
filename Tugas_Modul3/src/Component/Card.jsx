import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  background-color: #F5F5F5;
  border-radius: 20px;
  box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
  color: #B3B8CD;
  position: relative;
  width: 50%;
  margin: auto;
  margin-top: 150px;
  @media screen and (max-width: 500px) {
    margin: auto;
  }
`
const Image = styled.img`
  border: 1px solid #26619C;
  border-radius: 50%;
  padding: 7px;
  width: 60%;
  height: auto;
  margin: 20px;
`
const Title = styled.h5`
  font-family: sans-serif;
  margin: auto;
  color:#26619C;
  font-size:1vw
`

const ClassSelection = styled.select`
	font-size: 16px;
	font-family: sans-serif;
	font-weight: 700;
	color: #FFFFFF;
	line-height: 1.3;
	padding: .2em 1em;
	width: 23.5%;
	margin: 0;
	border: 1px solid #aaa;
	border-radius: 25px;
	appearance: none;
	background-color: #26619C;
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;
  margin: 30px
`

const Row = styled.div`
  display: table;
  width: 100%;
  table-layout: fixed;
  border-spacing: 0px;
  text-align: center;
`

const Col = styled.div`
  display: table-cell;
  text-align: center;
`

function Card(props) {
  return (
    <div>
      <Image src={props.src} /><br />
      <a>{props.nama}</a><br />
      <a>{props.nim}</a>
    </div>
  )
}


export default function index() {
  return (
    <Row>
      <Col>
        <CardContainer>
          <Title>
            <Card nama="Muhammad Sunan Alit" nim="21120117130080" src="https://www.linkpicture.com/q/Shun.jpg" />
          </Title>
          <ClassSelection>
            <option value="0">Kelas</option>
            <option value="1">A</option>
            <option value="2">B</option>
          </ClassSelection>
        </CardContainer>
      </Col>
      <Col>
        <CardContainer>
          <Title>
            <Card nama="Lisa Ruth Hyarangga" nim="21120117110038" src="https://www.linkpicture.com/q/Lisa.jpg" />
          </Title>
          <ClassSelection>
            <option value="0">Kelas</option>
            <option value="1">A</option>
            <option value="2">B</option>
          </ClassSelection>
        </CardContainer>
      </Col>
    </Row>
  );
}
