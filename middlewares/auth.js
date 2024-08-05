import { auth, requiredScopes } from "express-oauth2-jwt-bearer";

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: "https://courseflow.local:5111",
  issuerBaseURL: `https://dev-u34p250okl40q646.us.auth0.com`,
});

const checkLearnerScopes = requiredScopes([
  "progress:track",
  "profile:view",
  "profile:edit",
  "courses:view",
  "assignment:submit",
]);
const checkAdminScopes = requiredScopes([
  "assignments:manage",
  "courses:manage",
]);

export { checkJwt, checkLearnerScopes, checkAdminScopes };
