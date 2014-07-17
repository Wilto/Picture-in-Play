var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

pageMod.PageMod({
  include: "*",
  contentScriptFile: data.url("pictureinplay.js"),
  attachTo: ["existing", "top"]
});