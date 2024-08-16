import { model, Schema } from "mongoose";

interface IDiscordUser {
  username: string;
  discordId: string;
}

const discordUserSchema = new Schema<IDiscordUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  discordId: {
    type: String,
    required: true,
    unique: true,
  },
});

export const DiscordUser = model<IDiscordUser>("User", discordUserSchema);
