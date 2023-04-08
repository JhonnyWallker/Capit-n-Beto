import { Schema, model } from "mongoose";

const historiasSchema = new Schema(
  {
    fileHistory: {
      type: String,
    },
    image_url: {
      type: String,
    },
    image_id: {
      type: String,
    },
    titleHistory: {
      type: String,
      trim: true,
    },
    categoryHistory: {
      type: String,
      trim: true,
    },
    descriptionHistory: {
      type: String,
      trim: true,
    },
    contentHistory: {
      type: String,
      trim: true,
    },

    dateHistory: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("historias", historiasSchema);
