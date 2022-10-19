import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Item = styled.View`
  background-color: #fafafa;
  width: 175px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: -22px;
  margin-left: 14px;
  margin-right: 14px;
  border-radius: 4px;
  padding-top: 22px;
  padding-bottom: 22px;
  align-items: center;
`

export const ItemTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #464646;
`

export const Content = styled.View`
  flex-direction: row;
  border-radius: 4px;
  padding: 5px;
  align-items: center;
  justify-content: center;
` 

  
export const ValueSubTitleSale = styled.Text`
  font-weight: bold;
  border-radius: 4px;
  background-color: #009999;
  padding: 10px;
  color: white;
` 

export const ValueSubTitlePromotion = styled.Text`
  font-weight: bold;
  border-radius: 4px;
  background-color: #009999;
  padding: 10px;
  width: 100px;
  text-align: center;
  color: white
`