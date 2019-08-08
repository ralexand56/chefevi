import React, { useEffect } from "react";
import styled from "styled-components";
import { Food, FoodCategory } from "../../../interfaces";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import fb from "firebase";
import firebase from "../../../Firebase";

const AddFoodForm = styled.form`
  padding: 1em;
  border-radius: 0.5em;
  background: #73c699;
  color: white;
  margin: 1em 0;
`;

const TopLine = styled.section`
  display: flex;
`;

const ImageLinkLine = styled.section`
  display: flex;
  justify-content: space-between;
`;

const AddLine = styled.section`
  display: flex;
  justify-content: flex-end;
`;

const CategorySelector = styled(Select)`
  margin: 0 0.5em;
`;

export default () => {
  const collection = firebase.firestore().collection("foodCategories");
  const [categories, setCategories] = React.useState<FoodCategory[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = React.useState("");

  const onCategoryCollectionUpdate = (
    querySnapshot: fb.firestore.QuerySnapshot
  ) => {
    const categs: FoodCategory[] = [];
    querySnapshot.docs.map(doc => {
      const { name, sort } = doc.data();

      if (name !== "All") {
        categs.push({
          id: doc.id,
          name,
          sort
        });
      }
    });

    setCategories(categs);

    setSelectedCategoryId(categs[0].id);
  };

  function handleCategoryChange(event: React.ChangeEvent<{value: unknown}>) {
    setSelectedCategoryId(event.target.value as string);
  }

  useEffect(() => {
    collection.onSnapshot(onCategoryCollectionUpdate);
  }, []);

  return (
    <AddFoodForm>
      <TopLine>
        <TextField placeholder="enter food caption..." label="Caption" />
        <CategorySelector value={selectedCategoryId} onChange={handleCategoryChange}>
          {categories
            .sort((a, b) => a.sort - b.sort)
            .map(x => (
              <MenuItem value={x.id}>{x.name}</MenuItem>
            ))}
        </CategorySelector>
      </TopLine>
      <ImageLinkLine>
        <TextField placeholder="enter image name..." label="Image name" />
        <Fab color="primary" size="small">
          <AddIcon />
        </Fab>
      </ImageLinkLine>
      <AddLine>
      </AddLine>
    </AddFoodForm>
  );
};
