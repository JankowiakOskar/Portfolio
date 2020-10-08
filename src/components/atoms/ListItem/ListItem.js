import React from 'react';
import styled from 'styled-components';

const ListElement = styled.li`
   list-style: none;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   width: 100%;
   color: ${({ theme, color }) => (color ? theme[color] : theme.white)};

   &:before {
      content: '';
      margin-right: 10px;
      width: 22px;
      height: 22px;
      background: url(${({ icon }) => icon});
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
   }
`;

const ListItem = ({ name, iconURL, color, className }) => {
   return (
      <ListElement className={className} color={color} icon={iconURL}>
         {name}
      </ListElement>
   );
};

export default ListItem;
