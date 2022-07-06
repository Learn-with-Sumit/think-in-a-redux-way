// https://github.com/kapouer/express-urlrewrite
declare module "express-urlrewrite" {
    import * as Http from "http";

    let modName: urlRewrite.urlrewrite;
    module urlRewrite {

        interface urlrewrite {
            (from: string, to?: string): expressUrlRewriteInstance
        }

        interface expressUrlRewriteInstance {
            (req: Http.IncomingMessage, res: Http.ServerResponse, cb: () => any): void
        }
    }
    export = modName;
}
