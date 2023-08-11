import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #25262c;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80vh;
  width: 70vw;
  padding: 20px;
  background-color: #1b1c22;
`

export const HeadingAndImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 50px;
  font-family: 'roboto';
`
export const Image = styled.img`
  width: 70%;
  height: 70%;
`
export const EditedTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #25262c;
  padding: 5px;
  width: 40vw;
`

export const ToolsTab = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 3px;
  border-bottom: 2px solid #ffffff;
`
export const List = styled.li`
  list-style-type: none;
`

export const ButtonEl = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  color: ${props => props.colorText};
`
export const TextArea = styled.textarea`
  margin-top: 10px;
  height: 100%;
  width: 100%;
  background-color: #25262c;
  font-size: 17px;
  border: none;
  color: #ffffff;
  padding: 5px;
  outline: none;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
