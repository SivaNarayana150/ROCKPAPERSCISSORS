import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  PlayingViewBgContainer,
  ScoreBoard,
  ScoreBoardContainer,
  ScoreBoardTittles,
  HeadingsContainer,
  ScoreTextLabel,
  OptionsContainer,
  Score,
  OptionStyling,
  ListElement,
  OptionButton,
  ChoiceHeading,
  PLayAgainAndResultContainer,
  PlayAgainButton,
  RulesButton,
  PopupContainer,
  ImageContainer,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const winViewList = {
  initialResultStateOption: 'INITIAL',
  winResultStateOption: 'WON',
  lostResultStateOption: 'LOSS',
  drawResultStateOption: 'DRAW',
}

class PlayingView extends Component {
  state = {
    score: 0,
    OpponentOption: '',
    yourOption: '',
    resultState: winViewList.initialResultStateOption,
    OpponentImage: '',
    yourImage: '',
    finalResult: '',
  }

  matchTheRandomValueAndGiveResult = (eachChoiceId, activeImage) => {
    const randomNumber = Math.random() * 3
    const ceiledNumber = Math.floor(randomNumber)

    this.setState(
      {
        OpponentOption: choicesList[ceiledNumber].id,
        OpponentImage: choicesList[ceiledNumber].imageUrl,
        yourOption: eachChoiceId,
        yourImage: activeImage,
      },
      () => {
        const {OpponentOption, yourOption} = this.state
        const prevState = {...this.state}

        let newResultState = winViewList.initialResultStateOption
        let newScore = prevState.score
        let newFinalResult = ''

        if (OpponentOption === yourOption) {
          newResultState = winViewList.drawResultStateOption
          newFinalResult = 'IT IS DRAW'
        } else if (
          (OpponentOption === 'ROCK' && yourOption === 'SCISSORS') ||
          (OpponentOption === 'SCISSORS' && yourOption === 'PAPER') ||
          (OpponentOption === 'PAPER' && yourOption === 'ROCK')
        ) {
          newResultState = winViewList.lostResultStateOption
          newScore -= 1
          newFinalResult = 'YOU LOSE'
        } else {
          newResultState = winViewList.winResultStateOption
          newScore += 1
          newFinalResult = 'YOU WON'
        }

        this.setState({
          resultState: newResultState,
          score: newScore,
          finalResult: newFinalResult,
        })
      },
    )
  }

  renderInitialView = () => (
    <OptionsContainer>
      {choicesList.map(eachChoice => (
        <ListElement key={eachChoice.id}>
          <OptionButton
            type="button"
            aria-label="gameButton"
            data-testid={`${eachChoice.id.toLocaleLowerCase()}Button`}
            onClick={() =>
              this.matchTheRandomValueAndGiveResult(
                eachChoice.id,
                eachChoice.imageUrl,
              )
            }
          >
            <OptionStyling alt={eachChoice.id} src={eachChoice.imageUrl} />
          </OptionButton>
        </ListElement>
      ))}
    </OptionsContainer>
  )

  renderWinView = () => {
    const {
      OpponentOption,
      yourOption,
      OpponentImage,
      yourImage,
      finalResult,
    } = this.state

    return (
      <OptionsContainer>
        <ListElement key={yourOption}>
          <ChoiceHeading>YOU</ChoiceHeading>
          <OptionButton
            type="button"
            aria-label="gameButton"
            data-testid={`${yourOption.toLocaleLowerCase()}Button`}
          >
            <OptionStyling alt="your choice" src={yourImage} />
          </OptionButton>
        </ListElement>

        <ListElement key={OpponentOption}>
          <ChoiceHeading>OPPONENT</ChoiceHeading>
          <OptionButton
            type="button"
            aria-label="gameButton"
            data-testid={`${OpponentOption.toLocaleLowerCase()}Button`}
          >
            <OptionStyling alt="opponent choice" src={OpponentImage} />
          </OptionButton>
        </ListElement>
        <br />
        <PLayAgainAndResultContainer>
          <ChoiceHeading>{finalResult}</ChoiceHeading>
          <PlayAgainButton onClick={this.reRenderInitialView} type="button">
            PLAY AGAIN
          </PlayAgainButton>
        </PLayAgainAndResultContainer>
      </OptionsContainer>
    )
  }

  renderLostView = () => {
    const {
      OpponentOption,
      yourOption,
      OpponentImage,
      yourImage,
      finalResult,
    } = this.state

    return (
      <OptionsContainer>
        <ListElement key={yourOption}>
          <ChoiceHeading>YOU</ChoiceHeading>
          <OptionButton
            type="button"
            aria-label="gameButton"
            data-testid={`${yourOption.toLocaleLowerCase()}Button`}
          >
            <OptionStyling alt="your choice" src={yourImage} />
          </OptionButton>
        </ListElement>

        <ListElement key={OpponentOption}>
          <ChoiceHeading>OPPONENT</ChoiceHeading>
          <OptionButton
            type="button"
            aria-label="gameButton"
            data-testid={`${OpponentOption.toLocaleLowerCase()}Button`}
          >
            <OptionStyling alt="opponent choice " src={OpponentImage} />
          </OptionButton>
        </ListElement>
        <br />
        <PLayAgainAndResultContainer>
          <ChoiceHeading>{finalResult}</ChoiceHeading>

          <PlayAgainButton onClick={this.reRenderInitialView} type="button">
            PLAY AGAIN
          </PlayAgainButton>
        </PLayAgainAndResultContainer>
      </OptionsContainer>
    )
  }

  reRenderInitialView = () => {
    this.setState({
      OpponentOption: '',
      yourOption: '',
      resultState: winViewList.initialResultStateOption,
      OpponentImage: '',
      yourImage: '',
    })
  }

  renderDrawView = () => {
    const {
      OpponentOption,
      yourOption,
      OpponentImage,
      yourImage,
      finalResult,
    } = this.state

    return (
      <OptionsContainer>
        <ListElement>
          <ChoiceHeading>YOU</ChoiceHeading>
          <OptionButton
            type="button"
            aria-label="gameButton"
            data-testid={`${yourOption.toLocaleLowerCase()}Button`}
          >
            <OptionStyling alt="your choice" src={yourImage} />
          </OptionButton>
        </ListElement>

        <br />

        <ListElement>
          <ChoiceHeading>OPPONENT</ChoiceHeading>
          <OptionButton
            type="button"
            aria-label="gameButton"
            data-testid={`${OpponentOption.toLocaleLowerCase()}Button`}
          >
            <OptionStyling alt="opponent choice" src={OpponentImage} />
          </OptionButton>
        </ListElement>

        <br />

        <PLayAgainAndResultContainer>
          <ChoiceHeading>{finalResult}</ChoiceHeading>

          <PlayAgainButton type="button" onClick={this.reRenderInitialView}>
            PLAY AGAIN
          </PlayAgainButton>
        </PLayAgainAndResultContainer>
      </OptionsContainer>
    )
  }

  popupRules = () => (
    <PopupContainer>
      <Popup
        trigger={
          <OptionButton aria-label="close" type="button">
            <RiCloseLine />
          </OptionButton>
        }
      >
        {console.log('Trigger')}
        <ImageContainer
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </Popup>
    </PopupContainer>
  )

  renderALLViews = () => {
    const {resultState} = this.state
    switch (resultState) {
      case winViewList.initialResultStateOption:
        return this.renderInitialView()
      case winViewList.drawResultStateOption:
        return this.renderDrawView()
      case winViewList.lostResultStateOption:
        return this.renderLostView()
      case winViewList.winResultStateOption:
        return this.renderWinView()

      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <>
        <PlayingViewBgContainer>
          <ScoreBoardContainer>
            <HeadingsContainer>
              <ScoreBoardTittles>
                Rock <br /> Paper <br /> Scissors
              </ScoreBoardTittles>
            </HeadingsContainer>

            <ScoreBoard>
              <ScoreTextLabel>Score</ScoreTextLabel>

              <Score>{score}</Score>
            </ScoreBoard>
          </ScoreBoardContainer>
          {this.renderALLViews()}

          <RulesButton onClick={this.popupRules}>Rules</RulesButton>
        </PlayingViewBgContainer>
      </>
    )
  }
}
export default PlayingView
