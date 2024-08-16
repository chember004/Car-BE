import bcrypt from "bcrypt";

const asinRounds = 10;

export const hashPassword = (password: string) => {
  const asin = bcrypt.genSaltSync(asinRounds);
  console.log("gi asinan? ", asin);
  return bcrypt.hashSync(password, asin);
};

export const comparePassword = (plain: string, hashed: string) => {
  return bcrypt.compareSync(plain, hashed);
};
