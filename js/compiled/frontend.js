var CLOSURE_UNCOMPILED_DEFINES = {};
var CLOSURE_NO_DEPS = true;
if(typeof goog == "undefined") document.write('<script src="js/compiled/frontend/goog/base.js"></script>');
document.write('<script src="js/compiled/frontend/goog/deps.js"></script>');
document.write('<script src="js/compiled/frontend/cljs_deps.js"></script>');
document.write('<script>if (typeof goog == "undefined") console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?");</script>');
document.write('<script>goog.require("figwheel.connect");</script>');
document.write('<script>goog.require("process.env");</script>');
document.write('<script>goog.require("sensei.main.frontend");</script>');

document.write("<script>figwheel.connect.start();</script>");