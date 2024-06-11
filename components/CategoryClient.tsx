"use client";
import { useOrderStore } from "@/store/orderStore";
import { Category } from "@prisma/client";
import React, { useEffect, useState } from "react";

const CategoryClient = () => {
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);
  const { addCategory, removeCategory, categories, clear } = useOrderStore(
    (state) => ({
      addCategory: state.addCategory,
      removeCategory: state.removeCategory,
      categories: state.categories,
      clear: state.clear,
    })
  );

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategoriesList(data));
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2>Categories Fetch</h2>
      {categoriesList.map((category) => (
        <div key={category.id}>
          {category.name}
          <button onClick={() => addCategory(category, 1)}>Add</button>
          <button onClick={() => removeCategory(category)}>Remove</button>
        </div>
      ))}
      <div>
        <h2>Categories Store</h2>
        {categories.map((category) => (
          <div key={category.category.id}>
            {category.category.name} - {category.quantity}
          </div>
        ))}
        <button
          onClick={() => {
            clear();
          }}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default CategoryClient;
