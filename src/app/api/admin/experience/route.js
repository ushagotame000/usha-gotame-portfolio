import Experience from "../../../../models/Experience";
import { createCRUDHandlers } from "../../../lib/crudHandler";

const { GET, POST } = createCRUDHandlers(Experience);
export { GET, POST };
