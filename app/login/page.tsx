import LoginComponent from "@/components/LoginComponent";
import { getCategories } from "@/prisma/categories";
import Link from "next/link";

export default async function Login() {
  const categories = await getCategories();

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {categories.map((category) => (
        <Link
          href={`/category/${category.id}`}
          key={category.id}>
          {category.name}
        </Link>
      ))}
      <LoginComponent />
    </div>
  );
}
