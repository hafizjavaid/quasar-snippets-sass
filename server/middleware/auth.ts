

export default defineEventHandler(async (event) => {
    // TODO For Stripe, it's not working but it's important
    // if (event.node.req.method !== "GET" && !event.node.req.url?.includes('webhook')) {
    //     const originHeader = getHeader(event, "Origin") ?? null;
    //     const hostHeader = getHeader(event, "Host") ?? null;
    //     if (!originHeader || !hostHeader || !verifyRequestOrigin(originHeader, [hostHeader])) {
    //         return event.node.res.writeHead(403).end();
    //     }
    // }
    // const session = await requireUserSession(event);

    // event.context.session = session;
    // event.context.user = session.user;

});
