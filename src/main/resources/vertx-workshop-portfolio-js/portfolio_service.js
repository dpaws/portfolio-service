/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-workshop-portfolio-js/portfolio_service */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JPortfolioService = com.pluralsight.dockerproductionaws.portfolio.PortfolioService;
var Portfolio = com.pluralsight.dockerproductionaws.portfolio.Portfolio;

/**
 @class
*/
var PortfolioService = function(j_val) {

  var j_portfolioService = j_val;
  var that = this;

  /**

   @public
   @param arg0 {function} 
   */
  this.getPortfolio = function(arg0) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_portfolioService["getPortfolio(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        arg0(utils.convReturnDataObject(ar.result()), null);
      } else {
        arg0(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param arg0 {number} 
   @param arg1 {Object} 
   @param arg2 {function} 
   */
  this.buy = function(arg0, arg1, arg2) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] ==='number' && (typeof __args[1] === 'object' && __args[1] != null) && typeof __args[2] === 'function') {
      j_portfolioService["buy(int,io.vertx.core.json.JsonObject,io.vertx.core.Handler)"](arg0, utils.convParamJsonObject(arg1), function(ar) {
      if (ar.succeeded()) {
        arg2(utils.convReturnDataObject(ar.result()), null);
      } else {
        arg2(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param arg0 {number} 
   @param arg1 {Object} 
   @param arg2 {function} 
   */
  this.sell = function(arg0, arg1, arg2) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] ==='number' && (typeof __args[1] === 'object' && __args[1] != null) && typeof __args[2] === 'function') {
      j_portfolioService["sell(int,io.vertx.core.json.JsonObject,io.vertx.core.Handler)"](arg0, utils.convParamJsonObject(arg1), function(ar) {
      if (ar.succeeded()) {
        arg2(utils.convReturnDataObject(ar.result()), null);
      } else {
        arg2(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param arg0 {function} 
   */
  this.evaluate = function(arg0) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_portfolioService["evaluate(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        arg0(ar.result(), null);
      } else {
        arg0(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_portfolioService;
};

// We export the Constructor function
module.exports = PortfolioService;