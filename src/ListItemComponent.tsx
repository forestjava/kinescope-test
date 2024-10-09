import React, { useState } from "react";
import styled from "styled-components";
import { ListItem } from "./types";

interface ListItemComponentProps {
  parent: ListItem | null;
  item: ListItem;
  update: () => void;
}

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Button = styled.button`
  margin-left: 10px;
`;

const Input = styled.input`
  margin-left: 10px;
`;

const ListItemComponent: React.FC<ListItemComponentProps> = ({
  parent,
  item,
  update,
}) => {
  const [isEditing, setIsEditing] = useState(item.isNew);
  const [editedName, setEditedName] = useState(item.name);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.target.value);
  };

  const handleNameUpdate = () => {
    item.name = editedName;
    item.isNew = false;
    update();
    setIsEditing(false);
  };

  const handleAddChild = () => {
    const newId = Date.now();
    const newItem: ListItem = {
      id: newId,
      name: "",
      children: [],
      isNew: true,
    };
    item.children.push(newItem);
    update();
  };

  const handleDeleteItem = () => {
    if (parent) {
      parent.children = parent.children.filter((child) => child !== item);
      update();
    }
  };

  return (
    <ListItemContainer>
      {isEditing ? (
        <>
          <Input value={editedName} onChange={handleNameChange} />
          <Button onClick={handleNameUpdate}>OK</Button>
        </>
      ) : (
        <>
          <span>{item.name}</span>
          <Button onClick={handleEditToggle}>Edit</Button>
        </>
      )}
      <Button onClick={handleAddChild}>Add Child</Button>
      {parent && <Button onClick={handleDeleteItem}>Delete</Button>}
    </ListItemContainer>
  );
};

export default ListItemComponent;
