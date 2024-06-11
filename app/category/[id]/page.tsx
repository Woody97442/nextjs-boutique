import CategoryClient from "@/components/CategoryClient";
import { getCategoryById } from "@/prisma/categories";
import React from "react";

const CategoryPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  // try {
  //   const category = await getCategoryById(id);
  //   return <div>{category ? category.name : "Category not found"}</div>;
  // } catch (error) {
  //   return <div>Category not found</div>;
  // }
  return (
    <div>
      <CategoryClient />
    </div>
  );
};

export default CategoryPage;
