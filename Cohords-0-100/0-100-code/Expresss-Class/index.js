// const jwt = require("jsonwebtoken");
// const value = {
//   name: "aman",
//   accno: 123123123,
// };

// sign is generate the jwt token.
// const token = jwt.sign(value, "secretkey");
// the token is (eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW1hbiIsImFjY25vIjoxMjMxMjMxMjMsImlhdCI6MTcxNTk3MTA2NX0.J_KyiI0jaakB7HD90Oj3zJXYZggsr_DkaCZSJEoa7QI)

// console.log(token);

// this token has been generated using this isSecureContext, and hance this token can only be verifyied using this secret.
// this is my chacke book this cant be loose
// const newToken = jwt.sign

// genarate:- this is generateing the jwt token
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);
  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }
  const signature = jwt.sign(
    {
      username,
    },
    jwtPassword
  );
  return signature;
}

const ans = signJwt("aman@g.com", "123123123");
console.log(ans);

// decode:- this is decode the Jwt token this is not simler to verify this can be decode the from another way
// it can be copy as simerl code it is either true or false.

// const jwt = require("jsonwebtoken");

function decodeJwt(token) {
  const decode = jwt.decode(token);
  if (decode) {
    return true;
  } else {
    return false;
  }
}
console.log(
  decodeJwt(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFtYW5AZy5jb20iLCJpYXQiOjE3MTU5NzUxNjh9.RwayCPQHO13d5JU3AB4DQR7gVc-b8Omac6GVUh3jMJw"
  )
);

//  verify:- this is to verify by the server and when verify then it will excute another thing
// const jwtPassword = "secret";
// const jwt = require("jsonwebtoken");

function verifyJwt(token) {
  let anns = true;
  try {
    jwt.verify(token, jwtPassword);
  } catch (error) {
    anns = false;
  }
  return anns;
}
const ansVerify = verifyJwt(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFtYW5AZy5jb20iLCJpYXQiOjE3MTU5NzU0NTZ9.NjZfi0s0PyCyTJDnhH2IeekrSGTvB0oXPxTZMx91FzM"
);
console.log(ansVerify);
