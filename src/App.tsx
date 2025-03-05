// import PersonalInfo from "./Components/PersonalInformation";
// import { ProgressBar } from "./Components/ProgressBar";
import MultiStepForm from "./Components/MultiStepForm";
import { FormProvider } from "./Context/FormProvider";

const App = () => (
  <FormProvider>
    {/* <ProgressBar /> */}
    {/* <PersonalInfo /> */}
    <MultiStepForm />
  </FormProvider>
);

export default App;
