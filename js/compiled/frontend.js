var CLOSURE_UNCOMPILED_DEFINES = null;
if(typeof goog == "undefined") document.write('<script src="js/compiled/frontend/goog/base.js"></script>');
document.write('<script src="js/compiled/frontend/cljs_deps.js"></script>');
document.write('<script>if (typeof goog == "undefined") console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?");</script>');

document.write("<script>if (typeof goog != \"undefined\") { goog.require(\"figwheel.connect.frontend_dev\"); }</script>");
document.write('<script>goog.require("sensei.frontend.core");</script>');