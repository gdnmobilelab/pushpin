'use strict';

//import Subscription from '../../../lib/subscription'

module.exports.handler = function(event, context) {
    context.done(null,{blah: true})
    // Subscription.add(event.topic, event.endpoint)
    // .then(() => {
    //     context.done(null, {
    //         success: true,
    //         endpoint: event.endpoint
    //     });
    // })
    // .catch((err) => {
    //     context.fail(err);
    // })
};

