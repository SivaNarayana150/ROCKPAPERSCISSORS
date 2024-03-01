import styled from 'styled-components'

export const PlayingViewBgContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  padding-top: 20px;
  padding-bottom: 20px;
`

export const ScoreBoardContainer = styled.div`
  background-color: transparent;
  border-color: #ffffff;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  width: 60%;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 20vh;
`

export const ScoreBoard = styled.div`
  background-color: #ffffff;
  height: 16vh;
  border-radius: 4px;
  display: flex;
  align-items: center;
  width: 10vw;

  flex-direction: column;
  padding-bottom: 10px;

  @media screen and (max-width: 677px) {
    width: 35%%;
  }
`
export const HeadingsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreBoardTittles = styled.p`
  color: #ffffff;
  font-family: Bree Serif;
  font-weight: 300;
  font-size: 15px;
  margin-bottom: 4px;
`

export const ScoreTextLabel = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 15px;
  margin: 0px;
`

export const Score = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 25px;
  margin-bottom: 10px;
`

export const OptionsContainer = styled.div`
  background-color: transparent;
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  width: 50%;
  justify-content: center;

  align-items: center;
  @media screen and (min-width: 1024px) {
    width: 35%;
  }
  @media screen and (max-width: 677px) {
    width: 95%;
  }
`

export const OptionStyling = styled.img`
  width: 100px;
  height: 100px;
  margin: 13px;
`

export const ListElement = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const OptionButton = styled.button`
  background-color: transparent;
  border: none;
`

export const ChoiceHeading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 25px;
  margin-bottom: 10px;
`

export const PLayAgainAndResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PlayAgainButton = styled.button`
  width: 80px;
  height: 35px;
  color: #223a5f;
  font-family: 'Bree Serif';
  background-color: #ffffff;
  border-radius: 8px;
  border: none;
`
export const RulesButton = styled.button`
  width: 60px;
  height: 35px;
  color: #223a5f;
  font-family: 'Bree Serif';
  background-color: #ffffff;
  border-radius: 6px;
  border: none;
  align-self: flex-end;
  margin-right: 50px;
`
export const PopupContainer = styled.div`
  width: 40%;
  height: 40%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageContainer = styled.img`
  height: 35%;
  width: 35%;
`
