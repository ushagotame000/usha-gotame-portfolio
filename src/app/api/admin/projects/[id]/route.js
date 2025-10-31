import Project from "../../../../../models/Project";
import { createCRUDHandlers } from "../../../../lib/crudHandler";

// const { PUT, DELETE } = createCRUDHandlers(Project);
// export { PUT, DELETE };
const { GET, PUT, DELETE } = createCRUDHandlers(Project);
export { GET, PUT, DELETE };