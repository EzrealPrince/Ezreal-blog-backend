import {
    testAction
} from '../controller/webfront/blog'

interface route {
    path: string;
    method: string;
    action: Function;
}
export const AppRoutes: Array<route> = [
    {
        path: "/test",
        method: "get",
        action: testAction
    }, {
        path: "/post1",
        method: "get",
        action: testAction
    },
    // {
    //     path: "/posts",
    //     method: "post",
    //     action: postSaveAction
    // }
];