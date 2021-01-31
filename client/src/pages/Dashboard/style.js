import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: ${({ theme }) => theme.shadows.light};
`;

export const ColouredSection = styled.div`
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacings[4]} ${theme.spacings[3]}`};
  background-color: ${({ theme, color }) => theme.colors[color] || color};
  width: 100%;

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => `${theme.spacings[3]} ${theme.spacings[2]}`};
  }
`;

export const TellMeMoreButton = styled.button`
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`;

export const ProgressWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings[5]};
`;

export const SkillNumbersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacings[3]};
`;
