package com.pluralsight.dockerproductionaws.trader;

import com.pluralsight.dockerproductionaws.common.MicroserviceVerticle;
import com.pluralsight.dockerproductionaws.portfolio.PortfolioService;
import io.vertx.core.CompositeFuture;
import io.vertx.core.Future;
import io.vertx.core.eventbus.MessageConsumer;
import io.vertx.core.json.JsonObject;
import io.vertx.servicediscovery.types.EventBusService;
import io.vertx.servicediscovery.types.MessageSource;

/**
 * A compulsive trader...
 */
public class CompulsiveTraderVerticle extends MicroserviceVerticle {

    @Override
    public void start(Future<Void> future) {
        super.start();

        String company = TraderUtils.pickACompany();
        int numberOfShares = TraderUtils.pickANumber();
        System.out.println("Java compulsive trader configured for company " + company + " and shares: " + numberOfShares);

        // We need to retrieve two services, create two futures object that
        // will get the services
        Future<MessageConsumer<JsonObject>> marketFuture = Future.future();
        Future<PortfolioService> portfolioFuture = Future.future();

        // Retrieve the services, use the "special" completed to assign the future
        MessageSource.getConsumer(discovery, new JsonObject().put("name", "market-data"),
                marketFuture.completer());
        EventBusService.getProxy(discovery, PortfolioService.class,
                portfolioFuture.completer());

        // When done (both services retrieved), execute the handler
        CompositeFuture.all(marketFuture, portfolioFuture).setHandler(ar -> {
            if (ar.failed()) {
                future.fail("One of the required service cannot " +
                        "be retrieved: " + ar.cause());
            } else {
                // Our services:
                PortfolioService portfolio = portfolioFuture.result();
                MessageConsumer<JsonObject> marketConsumer = marketFuture.result();

                // Listen the market...
                marketConsumer.handler(message -> {
                    JsonObject quote = message.body();
                    TraderUtils.dumbTradingLogic(company, numberOfShares, portfolio, quote);
                });

                future.complete();
            }
        });
    }
}
