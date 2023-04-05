import { Schema, model } from "mongoose";

const leyendasSchema = new Schema(
  {
    titleLegends: {
      type: String,
      trim: true,
    },
    categoryLegends: {
      type: String,
      trim: true,
    },
    descriptionLegends: {
      type: String,
      trim: true,
    },
    contentLegends: {
      type: String,
      trim: true,
    },
    fileLegends: {
      type: String,
      trim: true,
    },
    dateLegends: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("leyendas", leyendasSchema);