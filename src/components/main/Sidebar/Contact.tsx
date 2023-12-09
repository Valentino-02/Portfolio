import { GoLocation } from "react-icons/go";

export default async function Contact() {
  return (
    <div
      className="py-4 mt-4 rounded-b-lg bg-emerald-100 dark:bg-light-blue "
      style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
    >
      <div className="flex items-center justify-center space-x-2">
        <GoLocation className="mr-2" />
        <span>La Plata, Argentina</span>
      </div>
      <div className="flex items-center justify-center my-2 space-x-2">
        <p>collazo.valentino@gmail.com</p>
      </div>
    </div>
  );
}
