const { model } = require("mongoose");

module.exports = model("guild", {
  _id: String,
  general: {
    type: Object,
    default: { prefix: ".", blacklistedChannelIds: [] },
  },
});
