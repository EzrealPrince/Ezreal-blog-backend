"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blog_1 = require("../controller/webfront/blog");
exports.AppRoutes = [
    {
        path: "/test",
        method: "get",
        action: blog_1.testAction
    }, {
        path: "/post1",
        method: "get",
        action: blog_1.testAction
    },
];
//# sourceMappingURL=index.js.map