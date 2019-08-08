import React, { useEffect } from "react";
import "./CategoryAdmin.css";
import styled from "styled-components";
import { FoodCategory } from "../../interfaces";
import fb from "firebase";
import firebase from "../../Firebase";

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const AddCategory = styled.main`
  display: flex;
  background-color: gray;
  padding: 0.3em;
  margin: 0.3em;
  border-radius: 0.3em;
`;

const FoodCategoryContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const FoodCategoryView = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #73c699;
  margin: 0.3em;
  padding: 0.5em;
  border-radius: 0.3em;
`;

const CategoryItemText = styled.a`
  color: white;
  padding: 0;
`;

export default () => {
  const collection = firebase.firestore().collection("foodCategories");
  const [categories, setCategories] = React.useState<FoodCategory[]>([]);
  const [newCategoryName, setNewCategoryName] = React.useState("");

  const onCollectionUpdate = (querySnapshot: fb.firestore.QuerySnapshot) => {
    const categs: FoodCategory[] = [];
    querySnapshot.docs.map(doc => {
      const { name, sort } = doc.data();

      categs.push({
        id: doc.id,
        name,
        sort
      });
    });

    setCategories(categs);
  };

  const handleAddCategory = () => {
    collection.add({
      name: newCategoryName,
      sort: (categories.length + 1) * 10
    });

    setNewCategoryName("");
  };

  const handleDeleteCategory = (id: string) => {
    collection.doc(id).delete();
  };

  useEffect(() => {
    collection.onSnapshot(onCollectionUpdate);
  });

  return (
    <Main>
      <AddCategory>
        <input
          type="text"
          className="btn"
          onChange={e => setNewCategoryName(e.currentTarget.value)}
          value={newCategoryName}
          placeholder="new category..."
        />
        <button onClick={handleAddCategory} className="btn">
          Add
        </button>
      </AddCategory>

      <FoodCategoryContainer>
        {categories
          .sort((a, b) => a.sort - b.sort)
          .map(x => (
            <FoodCategoryView key={x.id}>
              <CategoryItemText>{x.name}</CategoryItemText>
              <button
                className="btn"
                onClick={() => handleDeleteCategory(x.id)}
              >
                x
              </button>
            </FoodCategoryView>
          ))}
      </FoodCategoryContainer>
    </Main>
  );
};
