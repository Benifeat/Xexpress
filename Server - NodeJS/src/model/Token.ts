import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		token: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			expires: 60 * 60,
		},
	},
	{ versionKey: false }
);

export const Token = mongoose.model("Token", TokenSchema);