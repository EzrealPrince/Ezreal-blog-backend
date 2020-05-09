import {Request, Response} from "express";
// import {getManager} from "typeorm";

/**
 * Loads all posts from the database.
 */
export async function testAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const post : number = 6;

    // return loaded posts
    response.json(post);
}