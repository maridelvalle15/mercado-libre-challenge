import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("./client/config/app");

jest.mock("react-router-dom", () => {
  return {
    useLocation: () => ({ search: "macbook" }),
    useHistory: () => ({}),
    useParams: () => ({ id: "M416" })
  };
});
