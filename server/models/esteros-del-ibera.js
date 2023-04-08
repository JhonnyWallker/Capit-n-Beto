import { Schema, model } from "mongoose";

const esterosSchema = new Schema(
  {
    fileEsteros: {
      type: String,
    },
    image_url: {
      type: String,
    },
    image_id: {
      type: String,
    },
    titleEsteros: {
      type: String,
      trim: true,
    },
    categoryEsteros: {
      type: String,
      trim: true,
    },
    descriptionEsteros: {
      type: String,
      trim: true,
    },
    contentEsteros: {
      type: String,
      trim: true,
    },

    dateEsteros: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("esteros", esterosSchema);
