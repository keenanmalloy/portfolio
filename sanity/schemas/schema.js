// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import skills from "./skills";
import project from "./project";
import social from "./social";

import pageInfo from "./pageInfo";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([skills, project, social, pageInfo]),
});
