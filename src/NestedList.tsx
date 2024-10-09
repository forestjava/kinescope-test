import React from "react";
import styled from "styled-components";
import { ListItem } from "./types";
import ListItemComponent from "./ListItemComponent";

interface NestedListProps {
  item: ListItem;
  parent: ListItem | null;
  update: () => void;
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-top: 10px;
`;

const NestedList: React.FC<NestedListProps> = ({ item, parent, update }) => {
  return (
    <ListContainer key={item.id}>
      <ListItemComponent parent={parent} item={item} update={update} />
      {item.children.map((child) => (
        <NestedList key={child.id} item={child} parent={item} update={update} />
      ))}
    </ListContainer>
  );
};

export default NestedList;
