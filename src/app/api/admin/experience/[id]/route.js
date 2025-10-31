import Experience from "../../../../../models/Experience";
import { createCRUDHandlers } from "../../../../lib/crudHandler";

const { GET, PUT, DELETE } = createCRUDHandlers(Experience);
export { GET, PUT, DELETE };