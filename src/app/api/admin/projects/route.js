import Project from "../../../../models/Project";
import { createCRUDHandlers } from "../../../lib/crudHandler";

const { GET, POST } = createCRUDHandlers(Project);
export { GET, POST };
