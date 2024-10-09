import React, { useState } from "react";
import styled from "styled-components";
import { ListItem, initialList } from "./types";
import NestedList from "./NestedList";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const App: React.FC = () => {
  const [list, setList] = useState<ListItem>(initialList);

  const update = () => setList((prevList) => ({ ...prevList }));

  return (
    <AppContainer>
      <h1>Nested List</h1>
      <NestedList item={list} update={update} parent={null} />
    </AppContainer>
  );
};

export default App;
