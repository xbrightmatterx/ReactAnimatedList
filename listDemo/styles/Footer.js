import styled from 'styled-components';

const Footer = styled.footer`
  &:before {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 
                0 7px 0 -3px #f6f6f6, 
                0 8px 1px -3px rgba(0, 0, 0, 0.2), 
                0 15px 1px -6px #f6f6f6, 
                0 15px 2px -5px rgba(0, 0, 0, 0.2);
    position: absolute;
    height: 15px;
    bottom: 0;
    content: '';
    right: 0;
    left: 0;
  }
`;

export default Footer