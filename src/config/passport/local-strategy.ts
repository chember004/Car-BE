import passport from "passport";
import * as passportStrategy from "passport-local";
import { User } from "../../models/mongoose/schemas/local-user";
import { comparePassword } from "../../utils/helpers";

passport.serializeUser((user, done) => {
  // Call serializer once e.g. login
  console.log(`Inside serialize user local`);
  console.log(user);
  done(null, (user as { id: string }).id); // Use type assertion
});

passport.deserializeUser(async (id, done) => {
  //any request after serializing, will call this instead
  console.log(`Inside deserializer`);
  console.log(`Deserializing user id ${id}`);

  try {
    const findUser = await User.findById(id);
    if (!findUser) throw new Error("User not found");
    done(null, findUser);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  new passportStrategy.Strategy(
    { usernameField: "email" },
    async (email, password, done) => {
      console.log(`email: ${email}`);
      console.log(`password: ${password}`);
      try {
        const findUser = await User.findOne({ email });
        if (!findUser) throw new Error("User not found");
        if (!comparePassword(password, findUser.password))
          throw new Error("Invalid credentials");
        done(null, findUser);
      } catch (err) {
        done(err, {});
      }
    }
  )
);

export default passport;
