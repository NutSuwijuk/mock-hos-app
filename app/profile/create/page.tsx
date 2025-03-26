import { SubmitButton } from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";


const createProfile = async (formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName");
  //Validate
  //Insert to db
  //return
  console.log("Juk!!!", firstName);
};

const CreateProfile = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitaliza">New User</h1>
      <div className="border p-8 rounded-md">
        <form action={createProfile}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput name="firstName" label="Frist Name" type="text" placeholder="First Name"></FormInput>
            <FormInput name="lastName" label="Last Name" type="text" placeholder="Last Name" />
            <FormInput name="username" label="Username" type="text" placeholder="Username" />
          </div>
          <SubmitButton text="Create Profile" size="lg" ></SubmitButton>
          {/* <Button type="submit" size={"lg"}>
            Create Profile
          </Button> */}
        </form>
      </div>
    </section>
  );
};
export default CreateProfile;
