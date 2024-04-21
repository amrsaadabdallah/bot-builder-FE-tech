import MySelect from "@/components/MySelect";
import MyCalendar from "../components/MyCalendar";
import MyModal from "../components/MyModal";
import RecipesList from "../components/RecipesList";
import UsersAccordion from "../components/UsersAccordion";
import MyInput from "@/components/MyInput";

const Home = () => {
  return (
    <>
      <div className="grid  md:grid-cols-2 gap-5 mb-10">
        <MySelect />
        <MyInput />
      </div>
        <RecipesList />
          <div className="flex items-center gap-10">
            <UsersAccordion />
            <MyModal />
            <MyCalendar />
          </div>
      </>

  )
}

export default Home
