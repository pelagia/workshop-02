import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { Content, Header, TextArea, Label, Input } from '../components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding: 5px;
`;
const BaseInfo = styled.section`
  padding: 20px;
  width: 50%;
`;

class App extends Component {
  render() {
    return (
      <Content>
        <Header>My Persona Site</Header>
        <BaseInfo>
          <Wrapper>
            <Label>Name:</Label>
            <Input />
          </Wrapper>
          <Wrapper>
            <Label>Last name:</Label>
            <Input />
          </Wrapper>
          <Wrapper>
            <Label>Write some things for your self</Label>
            <TextArea />
          </Wrapper>
          <Wrapper>
            <Label>Favorite song:</Label>
            <ReactPlayer url="https://www.youtube.com/watch?v=6f0y1Iaorug" />
          </Wrapper>
        </BaseInfo>
      </Content>
    );
  }
}

export default App;
