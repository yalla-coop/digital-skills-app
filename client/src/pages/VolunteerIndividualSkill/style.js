import styled from '@emotion/styled';

export const Wrapper = styled.div`
  .ant-skeleton-element {
    display: block !important;
    width: 100% !important;
  }

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    color: ${({ theme }) => theme.colors.teal};
    font-size: 18px;
    font-weight: 900;
    line-height: 26px;
    width: 100%;
    margin-right: ${({ theme: { spacings } }) => spacings[2]};
    svg {
      padding: 0;
      width: 24px;
      color: ${({ theme: { colors } }) => colors.black};
      transition: 0.2s;
      transform: translate(10px, 8px);
    }
  }

  .ant-collapse > .ant-collapse-item-active > .ant-collapse-header > svg {
    transform: translate(10px, 8px) rotate(-180deg) !important;
  }
`;

export const SkillAreasTags = styled.span`
  padding: ${({ theme }) => `${theme.spacings[2]}`};
  margin-right: ${({ theme }) => theme.spacings[3]};
  color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.liteBlue};
  font-weight: 700;
  font-size: 16px;
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacings[2]};
`;

export const InfoCard = styled.div`
  display: flex;
  min-height: 120px;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacings[4]};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.light};
  padding: ${({ theme }) =>
    `${theme.spacings[3]} ${theme.spacings[2]} ${theme.spacings[3]} ${theme.spacings[3]}`};
`;
