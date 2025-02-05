import passport from "passport";
import { Strategy } from "passport-discord";
import { DiscordUser } from "../../models/mongoose/schemas/discord-user";

passport.serializeUser((user, done) => {
  //call serializer once ex. login
  console.log(`Inside serialize user discord`);
  console.log(user);
  done(null, (user as { id: string }).id);
});

passport.deserializeUser(async (id, done) => {
  //any request after serializing, will call this instead
  console.log(`Inside deserializer`);
  console.log(`Deserializing user id ${id}`);

  try {
    const findUser = await DiscordUser.findById(id);
    if (!findUser) throw new Error("Discord User not found");
    return findUser ? done(null, findUser) : done(null, null);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  new Strategy(
    {
      clientID: "1266672667382124620",
      clientSecret: "0XuiO5TSN4pDwth5m3AiFLPinForJKee",
      callbackURL: "http://localhost:3000/api/auth/discord/redirect",
      scope: ["identify"],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("profile: ", profile);
      let findUser;
      try {
        findUser = await DiscordUser.findOne({ discordId: profile.id });
      } catch (error) {
        return done(error, {});
      }

      try {
        if (!findUser) {
          const newUser = new DiscordUser({
            username: profile.username,
            discordId: profile.id,
          });
          const newSavedUser = await newUser.save();
          return done(null, newSavedUser);
        }
        return done(null, findUser);
      } catch (error) {
        console.log(error);
        return done(error, {});
      }
    }
  )
);

export default passport;
