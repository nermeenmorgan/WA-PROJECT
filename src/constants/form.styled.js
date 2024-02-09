
import styled from 'styled-components/native';
export const StyledComponentWrapper = styled.View`
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: 100px;
`;

export const Input = styled.TextInput`
  padding: 20px;
  ${'' /* paddingStart: 10px; */}
  background-color: white;
  border-radius: 22px;
  width: 100%;
  height: 60px;
  margin-bottom: 30px;
  ${'' /* padding-left: 8px; */}
  elevation: 6;
`;
