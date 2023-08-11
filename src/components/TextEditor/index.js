import {Component} from 'react'
import {BsTypeBold, BsTypeItalic, BsTypeUnderline} from 'react-icons/bs'

import {
  MainContainer,
  CardContainer,
  HeadingAndImageContainer,
  Heading,
  Image,
  EditedTabContainer,
  ToolsTab,
  ButtonEl,
  TextArea,
  List,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    bold: false,
    italic: false,
    underline: false,
  }

  onClickBold = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  onClickItalic = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({
      underline: !prevState.underline,
    }))
  }

  render() {
    const {bold, italic, underline} = this.state

    const boldColor = bold ? '#faff00' : '#f1f5f9'
    const italicColor = italic ? '#faff00' : '#f1f5f9'
    const underlineColor = underline ? '#faff00' : '#f1f5f9'

    return (
      <MainContainer>
        <CardContainer>
          <HeadingAndImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </HeadingAndImageContainer>
          <EditedTabContainer>
            <ToolsTab>
              <List>
                <ButtonEl
                  type="button"
                  data-testid="bold"
                  colorText={boldColor}
                  onClick={this.onClickBold}
                >
                  <BsTypeBold size={20} />
                </ButtonEl>
              </List>
              <List>
                <ButtonEl
                  type="button"
                  colorText={italicColor}
                  data-testid="italic"
                  onClick={this.onClickItalic}
                >
                  <BsTypeItalic size={20} />
                </ButtonEl>
              </List>
              <List>
                <ButtonEl
                  type="button"
                  colorText={underlineColor}
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                >
                  <BsTypeUnderline size={20} />
                </ButtonEl>
              </List>
            </ToolsTab>
            <TextArea bold={bold} italic={italic} underline={underline} />
          </EditedTabContainer>
        </CardContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
