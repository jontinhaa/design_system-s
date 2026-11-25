(function () {
    // Lets use serialize the form data as JSON - https://github.com/douglascrockford/JSON-js  
    var JSON; if (!JSON) { JSON = {} } (function () { function f(a) { return a < 10 ? "0" + a : a } function quote(a) { escapable.lastIndex = 0; return escapable.test(a) ? '"' + a.replace(escapable, function (a) { var b = meta[a]; return typeof b === "string" ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + a + '"' } function str(a, b) { var c, d, e, f, g = gap, h, i = b[a]; if (i && typeof i === "object" && typeof i.toJSON === "function") { i = i.toJSON(a) } if (typeof rep === "function") { i = rep.call(b, a, i) } switch (typeof i) { case "string": return quote(i); case "number": return isFinite(i) ? String(i) : "null"; case "boolean": case "null": return String(i); case "object": if (!i) { return "null" } gap += indent; h = []; if (Object.prototype.toString.apply(i) === "[object Array]") { f = i.length; for (c = 0; c < f; c += 1) { h[c] = str(c, i) || "null" } e = h.length === 0 ? "[]" : gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]" : "[" + h.join(",") + "]"; gap = g; return e } if (rep && typeof rep === "object") { f = rep.length; for (c = 0; c < f; c += 1) { if (typeof rep[c] === "string") { d = rep[c]; e = str(d, i); if (e) { h.push(quote(d) + (gap ? ": " : ":") + e) } } } } else { for (d in i) { if (Object.prototype.hasOwnProperty.call(i, d)) { e = str(d, i); if (e) { h.push(quote(d) + (gap ? ": " : ":") + e) } } } } e = h.length === 0 ? "{}" : gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}" : "{" + h.join(",") + "}"; gap = g; return e } } "use strict"; if (typeof Date.prototype.toJSON !== "function") { Date.prototype.toJSON = function (a) { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }; String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (a) { return this.valueOf() } } var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = { "\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, rep; if (typeof JSON.stringify !== "function") { JSON.stringify = function (a, b, c) { var d; gap = ""; indent = ""; if (typeof c === "number") { for (d = 0; d < c; d += 1) { indent += " " } } else if (typeof c === "string") { indent = c } rep = b; if (b && typeof b !== "function" && (typeof b !== "object" || typeof b.length !== "number")) { throw new Error("JSON.stringify") } return str("", { "": a }) } } if (typeof JSON.parse !== "function") { JSON.parse = function (text, reviver) { function walk(a, b) { var c, d, e = a[b]; if (e && typeof e === "object") { for (c in e) { if (Object.prototype.hasOwnProperty.call(e, c)) { d = walk(e, c); if (d !== undefined) { e[c] = d } else { delete e[c] } } } } return reviver.call(a, b, e) } var j; text = String(text); cx.lastIndex = 0; if (cx.test(text)) { text = text.replace(cx, function (a) { return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) }) } if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) { j = eval("(" + text + ")"); return typeof reviver === "function" ? walk({ "": j }, "") : j } throw new SyntaxError("JSON.parse") } } })();

    window.Bloomerang = {
        version: "2.0",
        ready: function (callback) {
            return Bloomerang._isReady ? callback() : Bloomerang._readyFunctions.push(callback);
        },
        _lang: "en",
        _readyFunctions: [],
        _isReady: false,
        _logs: [],
        _sessionId: "",

        // Sets the API key, verifying that you're using the public one, not the private
        useKey: function (publicKey) {
            if (publicKey.indexOf("pub_") != 0) {
                alert("You need to provide your *PUBLIC* Api Key (the one that starts with 'pub_').\nThe private key is only for server side integrations.");
            }
            else {
                Bloomerang.Api.Key = publicKey;
            }
            return this;
        },

        // Sets the processor id, type and public key
        useProcessor: function (id, type, publicKey, isTestMode, bluePayTPS, restrictBPCredit) {
            isTestMode = (typeof (isTestMode) !== "undefined") && isTestMode;
            
            Bloomerang.Api.ProcessorId = id;
            Bloomerang.Api.ProcessorType = type;
            Bloomerang.Api.ProcessorKey = publicKey;

            // These fields will only be used for BluePay processors. They are ignored for everyone else.
            Bloomerang.Api.ProcessorIsTestMode = isTestMode;
            Bloomerang.Api.ProcessorBluePayTPS = bluePayTPS;
            Bloomerang.Api.ProcessorRestrictBPCredit = restrictBPCredit;
            return this;
        },

        // Sets the form ID for the email signup widget
        useEmailId: function (value) {
            if (Bloomerang.Data.WidgetIds.EmailSignup) {
                return false;
            }
            Bloomerang.Data.WidgetIds.EmailSignup = value;
            return true;
        },

        // Sets the form ID for the interaction widgets
        useInteractionId: function (value) {
            if (Bloomerang.Data.WidgetIds.Interaction) {
                return false;
            }
            Bloomerang.Data.WidgetIds.Interaction = value;
            return true;
        },

        // Sets the form ID for the donation widget
        useDonationId: function (value) {
            if (Bloomerang.Data.WidgetIds.Donation) {
                return false;
            }
            Bloomerang.Data.WidgetIds.Donation = value;
            return true;
        },

        // Language toggles for widgets
        english: function () { Bloomerang._lang = "en"; return this; },
        isEnglish: function () { return Bloomerang._lang == "en"; },
        spanish: function () { Bloomerang._lang = "es"; return this; },
        isSpanish: function () { return Bloomerang._lang == "es"; },

        // Builds up our data items
        Data: {
            // When we submit, this is a reference to the data object we're constructing in _post()
            ServerModel: {},

            Account: {
                Type: "Individual"
            },
            Donation: {
                Date: (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear()
            },
            RecurringDonation: {
                Date: (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear()
            },

            Method: "CreditCard",
            CreditCard: {},
            InKind: {},
            Check: {},
            Eft: {},

            Interaction: {
                Date: (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear()
            },
            
            WidgetIds: {}, // Nothing actually here, but we need an object to which we can attach the Widget Ids of the different form types
            
            // A single location for all PayPal related client-side data
            PayPal: {
                PartnerFeeId: '',
                ProcessorAccountId: '',
                // Funding source is what button the donor click (paypal or venmo)
                FundingSourceSelected: 'paypal',
                IsPayPalVenmoEnabled: false,
                IsPayPalPaymentMethodVaultingEnabled: false,
                IsVenmoSameDayDonationEnabled: false,
                // The options set for the PayPal button before rendering. 
                ButtonsOptions: {},
                // The object that holds the PayPal buttons after they have been initialized by calling _`paypal.Buttons(<options>)`_
                // <br/>This can be re-rendered by using the close() and render() methods. (I can't find any documentation on this)
                // <br/>Source: https://stackoverflow.com/a/63120870 
                // <br/>Demo page: https://developer.paypal.com/demo/checkout/#/pattern/server
                ButtonsObject: {}
            }
        },

        Util: {
            // In case we need to load dynamic content
            AccountingUri: function () { return Bloomerang.Web.Uri + "Content/Scripts/Lib/accounting.min.js" },
            JQueryUri: "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.3.js",
            JQueryValidationUri: "https://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js",
            JQueryValidationExtrasUri: "https://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/additional-methods.min.js",
            StripeUri: "https://js.stripe.com/v3/",
            PayPalUri: function(clientId) {
                return `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&enable-funding=venmo&disable-funding=credit,card,paylater,bancontact,blik,eps,giropay,ideal,mercadopago,mybank,p24,sepa,sofort&locale=en_US`;
            },
            
            // Dynamically load a script URI
            load: function (uri, isLoaded, callback, async, defer) {
                callback = callback || function () { };

                // Check to see if we're already loading a script with this uri
                var script = document.querySelector("script[src='" + uri + "']");
                if (script) {
                    Bloomerang.Util.waitForLoaded(isLoaded, callback);
                    return;
                }

                script = document.createElement("script");
                script.type = "text/javascript";

                if (async) {
                    script.async = true;
                }

                script.src = uri;

                if (defer) {
                    script.defer = true;
                }

                // Must append the script tag before setting onload per
                // http://stackoverflow.com/questions/16230886/trying-to-fire-onload-event-on-script-tag
                document.getElementsByTagName("head")[0].appendChild(script);

                if (script.readyState) {  //IE
                    script.onreadystatechange = function () {
                        if (script.readyState == "loaded" || script.readyState == "complete") {
                            script.onreadystatechange = null;
                            Bloomerang.Util.waitForLoaded(isLoaded, callback);
                        }
                    };
                }
                else {  //Others
                    script.onload = function () { Bloomerang.Util.waitForLoaded(isLoaded, callback); };
                }
            },

            waitForLoaded: function (isLoaded, callback) {
                if (isLoaded()) {
                    callback();
                } else {
                    setTimeout(function () { Bloomerang.Util.waitForLoaded(isLoaded, callback); }, 100);
                }
            },

            isJQueryLoaded: function () {
                return typeof (jQuery) !== "undefined";
            },

            isJQueryValidationLoaded: function () {
                return typeof (jQuery().validate) !== "undefined" && typeof(jQuery.validator) !== "undefined";
            },

            isAccountingLoaded: function () {
                return typeof (accounting) !== "undefined";
            },

            isStripeLoaded: function () {
              return typeof(Stripe) !== "undefined";
            },
            
            isPayPalLoaded: function() {
                return typeof(paypal) !== "undefined";
            },

            requireJQuery: function (callback) {
                if (Bloomerang.Util.isJQueryLoaded()) {
                    var version = jQuery().jquery.split('.');
                    if (parseInt(version[0]) < 1 || (parseInt(version[0]) == 1 && parseInt(version[1]) < 8)) { //jQuery version is less than 1.8, which is what we use
                        Bloomerang.Util.load(Bloomerang.Util.JQueryUri, Bloomerang.Util.isJQueryLoaded, callback);
                    } else if (callback) {
                        callback();
                    }
                } else {
                    Bloomerang.Util.load(Bloomerang.Util.JQueryUri, Bloomerang.Util.isJQueryLoaded, callback);
                }
            },

            requireJQueryValidation: function (callback) {
                Bloomerang.Util.requireJQuery(function () {
                    if (!Bloomerang.Util.isJQueryValidationLoaded()) {
                        Bloomerang.Util.load(Bloomerang.Util.JQueryValidationUri, Bloomerang.Util.isJQueryValidationLoaded, function () {
                            Bloomerang.Util.load(Bloomerang.Util.JQueryValidationExtrasUri, function () { return true; }, callback);
                        });
                    } else if (callback) {
                        callback();
                    }
                });
            },

            getQueryStringValue: function(value) {
                //  Function to get the query string in Javascript taken from here:
                //  http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript 
                if(!Bloomerang.queryString)
                {
                    Bloomerang.queryString = ((a) => {
                        if (a === "") return {};
                        const b = {};
                        for (let i = 0; i < a.length; ++i) {
                            const [key, value] = a[i].split('=', 2);
                            if (key !== '__proto__' && key !== 'constructor' && key !== 'prototype') {
                                b[key] = value ? decodeURIComponent(value.replace(/\+/g, " ")) : "";
                            }
                        }
                        return b;
                    })(window.location.search.slice(1).split('&'));
                }
                return Bloomerang.queryString ? Bloomerang.queryString[value] : null;
            },

            getCookie: function (cookieName) {
                // The browser stores all cookies as a single string with the form "key1=value1; key2=value2; ..."
                // This function splits up the cookies and returns the value for the one we are interested in.
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    while (cookie.charAt(0) === ' ') cookie = cookie.substring(1);
                    if (cookie.indexOf(cookieName) === 0) {
                        return cookie.substring(cookieName.length + 1);
                    }
                };
                return null;
            },

            setAccountCookie: function () {
                if (!Bloomerang.Data.Account.CookieId) {
                    Bloomerang.Data.Account.CookieId = Bloomerang.Util.getCookie('bloomerangConstituent');
                }
                return Bloomerang.Data.Account.CookieId;
            },

            requireAccounting: function (callback) {
                if (!Bloomerang.Util.isAccountingLoaded()) {
                    Bloomerang.Util.load(Bloomerang.Util.AccountingUri(), Bloomerang.Util.isAccountingLoaded, callback);
                } else if (callback) {
                    callback();
                }
            },

            requireStripe: function (callback) {
              if (!Bloomerang.Util.isStripeLoaded()) {
                Bloomerang.Util.load(Bloomerang.Util.StripeUri, Bloomerang.Util.isStripeLoaded, callback);
              } else if (callback) {
                callback();
              }
            },
            
            requirePayPal: function (clientId, callback) {
                if (!Bloomerang.Util.isPayPalLoaded()) {
                    Bloomerang.Util.load(Bloomerang.Util.PayPalUri(clientId), Bloomerang.Util.isPayPalLoaded, callback);
                } else if (callback) {
                    callback();
                }
            },

            requireJQueryValidationAndStripe: function (callback) {
              Bloomerang.Util.requireJQueryValidation(function () {
                Bloomerang.Util.requireStripe(function () {
                  callback();
                });
              });
            },

            getOldIEId: function () {
                return Math.random() * Math.pow(10, 16);
            },

            addLog: function (log) {
              Bloomerang._logs.push(log)
            },
          
            getCorrectState: function(country, state, province) {
              return country === "CA" ? province : state;
            },
          
            getCorrectZipCode: function(country, zipCode, postalCode) {
              return country === "CA" || country === "BM" ? postalCode : zipCode;
            },

            // http://www.markandey.com/2011/10/design-of-cross-domain-post-api-in.html
            crossDomainPost: function (url, data, oldIEIdentifier, successCallback, errorMessage, isBluePay) {
                // Add the iframe with a unique name
                var iframe = document.createElement("iframe");
                document.body.appendChild(iframe);
                iframe.style.display = "none";
                iframe.contentWindow.name = oldIEIdentifier;

                // construct a form with hidden inputs, targeting the iframe
                var form = document.createElement("form");
                form.target = oldIEIdentifier;
                form.action = url;
                form.method = "POST";
                
                // If the request is going to BluePay, we need to send them all the parameters
                if (isBluePay) {
                    // repeat for each parameter
                    for (var key in data) {
                        if (data.hasOwnProperty(key)) {
                            var input = document.createElement("input");
                            input.type = "hidden";
                            input.name = key;
                            input.value = data[key];
                            form.appendChild(input);
                        }
                    }
                }
                else { // if the request is going to Bloomerang, just send one parameter with the JSON-serialized data
                    var dataString = JSON.stringify(data);

                    var input = document.createElement("input");
                    input.type = "hidden";
                    input.name = "jsonData";
                    input.value = dataString;
                    form.appendChild(input);
                }
                
                document.body.appendChild(form);

                var removeListener = function () {
                    if (window.removeEventListener) {
                        window.removeEventListener("message", helperCallback);
                    } else { // less than IE 10
                        window.detachEvent("onmessage", helperCallback);
                    }
                };

                var helperCallback = function (event) {
                    // If the event doesn't start with the old IE Identifier, it's some other event
                    if(event.data.indexOf(oldIEIdentifier) == 0) {
                        var data = jQuery.parseJSON(event.data.substring(oldIEIdentifier.toString().length + 1)); // There's a space between the ID and the actual message
                        clearTimeout(timeout);
                        removeListener();
                        successCallback(data);
                    }
                }

                if (window.addEventListener) {
                    window.addEventListener("message", helperCallback, false);
                } else { // less than IE 10
                    window.attachEvent("onmessage", helperCallback);
                }

                var timeout = setTimeout(function () {
                    removeListener();
                    Bloomerang.Api.OnError({ IsSuccess: false, Message: errorMessage, Id: 0 });
                }, 60000);

                form.submit();
            },

            // Splits a string in a cross-platform way. Depending on where the string is coming from, it might
            // be split with carriage return, line feed, or both!
            splitNewLines: function (stringToSplit) {
                var splitter = null;
                if (stringToSplit.indexOf('\r\n') > 0) {
                    splitter = '\r\n';
                } else if (stringToSplit.indexOf('\r') > 0) {
                    splitter = '\r';
                } else if (stringToSplit.indexOf('\n') > 0) {
                    splitter = '\n';
                }

                if (splitter) {
                    return stringToSplit.split(splitter);
                }
                return [stringToSplit]; // return as an array to match split behavior
            },

            // callback is a function that takes status and response
            // status is undefined
            // if not successful, response is of the form:
            // {
            //   error: {
            //     message: "Something went wrong."
            //   }
            // }
            // if successful, response is of the form:
            // {
            //   key: value,
            //   ...
            // }
            makeSpreedlyToken: function (callback) {
              var oldIEId = Bloomerang.Util.getOldIEId();
              var uri = Bloomerang.Api.Uri + "v1/SpreedlyRedirect?oldIEId=" + oldIEId;

              var data = {
                redirect_url: uri,
                environment_key: Bloomerang.Api.ProcessorKey,
                payment_method_type: 'bank_account'
              };

              if (Bloomerang.Data.Account.Type == "Organization") {
                data["bank_account_holder_type"] = 'business';
                data["full_name"] = Bloomerang.Data.Account.FullName;
              } else {
                data["bank_account_holder_type"] = 'personal';
                data["full_name"] = Bloomerang.Data.Account.FirstName + " " + Bloomerang.Data.Account.LastName;
              }
              var accountType = jQuery("#donation-form .section.movedpayment input[type='radio']:checked").attr("id") ?? jQuery("#donation-form .section.payment input[type='radio']:checked").attr("id");
              
              data["bank_routing_number"] = Bloomerang.Data.Eft.RoutingNumber;
              data["bank_account_number"] = Bloomerang.Data.Eft.AccountNumber;
              data["bank_account_type"] = Bloomerang.Data.Eft.AccountType ? Bloomerang.Data.Eft.AccountType.toLowerCase() : accountType.toLowerCase();
              if (Bloomerang.Data.Account.Address) {
                if (Bloomerang.Data.Account.Address.Street) {
                  var streetSplit = Bloomerang.Util.splitNewLines(Bloomerang.Data.Account.Address.Street);
                  data["address1"] = streetSplit[0];
                  if (streetSplit.length > 1)
                    data["address2"] = streetSplit[1];
                }
                if (Bloomerang.Data.Account.Address.City) {
                  data["city"] = Bloomerang.Data.Account.Address.City;
                }
                if (Bloomerang.Data.Account.Address.State) {
                  data["state"] = Bloomerang.Data.Account.Address.State;
                }
                if (Bloomerang.Data.Account.Address.PostalCode) {
                  data["zip"] = Bloomerang.Data.Account.Address.PostalCode;
                }
                if (Bloomerang.Data.Account.Address.Country) {
                  data["country"] = Bloomerang.Data.Account.Address.Country;
                }
              }
              if (Bloomerang.Data.Account.PrimaryPhone) {
                data["phone_number"] = Bloomerang.Data.Account.PrimaryPhone.Number;
              }


              Bloomerang.Util.crossDomainPost("https://core.spreedly.com/v1/payment_methods",
                  data,
                  oldIEId,
                  function (data) {
                    if (data.token) {
                      callback(undefined, data);
                    } else {
                      var defaultError = 'An error occurred. Please try again later.';
                      callback(undefined, { error: { message: data.error ? data.error : defaultError } });
                    }
                  },
                  "No response received from transaction processor.  Please try again later.",
                  true);
            },

            // callback is a function that takes status and response
            // status is undefined
            // if not successful, response is of the form:
            // {
            //   error: {
            //     message: "Something went wrong."
            //   }
            // }
            // if successful, response is of the form:
            // {
            //   key: value,
            //   ...
            // }
            // where the keys and values are determined by BluePay's specification
            // at http://www.bluepay.com/sites/default/files/documentation/BluePay_bp10emu/BluePay%201-0%20Emulator.txt
            makeBluePayToken: function (isRecurring, callback) {
                var uri = Bloomerang.Api.Uri + "v1/BluePayRedirect";

                var data = {
                    MISSING_URL: uri,
                    APPROVED_URL: uri,
                    DECLINED_URL: uri,
                    RESPONSEVERSION: 9999,
                    TRANSACTION_TYPE: "AUTH",
                    MERCHANT: Bloomerang.Api.ProcessorKey,
                    MODE: Bloomerang.Api.ProcessorIsTestMode ? "TEST" : "LIVE",
                    DUPLICATE_OVERRIDE: 1,
                    TPS_DEF: Bloomerang.Api.ProcessorRestrictBPCredit ? "TRANSACTION_TYPE AMOUNT PAYMENT_TYPE" : "TRANSACTION_TYPE",
                    TAMPER_PROOF_SEAL: Bloomerang.Api.ProcessorBluePayTPS
                };

                if (Bloomerang.Data.Account.Type == "Organization") {
                    data["IS_CORPORATE"] = 1;
                    data["COMPANY_NAME"] = Bloomerang.Data.Account.FullName;
                } else {
                    data["NAME1"] = Bloomerang.Data.Account.FirstName;
                    data["NAME2"] = Bloomerang.Data.Account.LastName;
                }

                if (Bloomerang.Data.Account.Address) {
                    if (Bloomerang.Data.Account.Address.Street) {
                        var streetSplit = Bloomerang.Util.splitNewLines(Bloomerang.Data.Account.Address.Street);
                        data["ADDR1"] = streetSplit[0];
                        if (streetSplit.length > 1)
                            data["ADDR2"] = streetSplit[1];
                    }
                    if (Bloomerang.Data.Account.Address.City) {
                        data["CITY"] = Bloomerang.Data.Account.Address.City;
                    }
                    if (Bloomerang.Data.Account.Address.State) {
                        data["STATE"] = Bloomerang.Data.Account.Address.State;
                    }
                    if (Bloomerang.Data.Account.Address.PostalCode) {
                        data["ZIPCODE"] = Bloomerang.Data.Account.Address.PostalCode;
                    }
                }

                if (Bloomerang.Data.Account.PrimaryPhone) {
                    data["PHONE"] = Bloomerang.Data.Account.PrimaryPhone.Number.replace(/\D/g, '');
                }
                if (Bloomerang.Data.Account.PrimaryEmail) {
                    data["EMAIL"] = Bloomerang.Data.Account.PrimaryEmail.Value;
                }

                if (Bloomerang.Data.Method == "Eft") { // credit cards should now go through Spreedly
                    data["PAYMENT_TYPE"] = "ACH";
                    data["AMOUNT"] = 0; // for EFTs auth for the amount doesn't work, so just auth 0
                    data["ACH_ROUTING"] = Bloomerang.Data.Eft.RoutingNumber;
                    data["ACH_ACCOUNT"] = Bloomerang.Data.Eft.AccountNumber;
                    data["ACH_ACCOUNT_TYPE"] = Bloomerang.Data.Eft.AccountType.substring(0, 1);
                }

                var oldIEId = Bloomerang.Util.getOldIEId();
                data.oldIEId = oldIEId;

                Bloomerang.Util.crossDomainPost("https://secure.bluepay.com/interfaces/bp10emu",
                    data,
                    oldIEId,
                    function (data) {
                        if (data.Result == "APPROVED") {
                            callback(undefined, data);
                        } else {
                            callback(undefined, { error: { message: data.MESSAGE } });
                        }
                    },
                    "No response received from transaction processor.  Please try again later.",
                    true);
            },

            makeStripeCreditCardToken: function (donationData, callback) {
                var additionalData = {};
                if (Bloomerang.Data.Account.Type === "Organization") {
                    additionalData.name = Bloomerang.Data.Account.FullName;
                } else {
                    additionalData.name = Bloomerang.Data.Account.FirstName + " " + Bloomerang.Data.Account.LastName;
                }

                if (Bloomerang.Data.Account.Address) {
                    additionalData.address = {};

                    if (Bloomerang.Data.Account.Address.Street) {
                        var streetSplit = Bloomerang.Util.splitNewLines(Bloomerang.Data.Account.Address.Street);
                        additionalData.address.line1 = streetSplit[0];
                        if (streetSplit.length > 1)
                            additionalData.address.line2 = streetSplit[1];
                    }
                    if (Bloomerang.Data.Account.Address.City) {
                        additionalData.address.city = Bloomerang.Data.Account.Address.City;
                    }
                    if (Bloomerang.Data.Account.Address.State) {
                        additionalData.address.state = Bloomerang.Data.Account.Address.State;
                    }
                    if (Bloomerang.Data.Account.Address.PostalCode) {
                        additionalData.address.postal_code = Bloomerang.Data.Account.Address.PostalCode;
                    }
                    if (Bloomerang.Data.Account.Address.Country) {
                        additionalData.address.country = Bloomerang.Data.Account.Address.Country;
                    }
                }

                // process Stripe Card Element
                const paymentMethodData = {
                    type: "card",
                    card: Bloomerang.Util.StripeCard,
                    billing_details: additionalData
                };
                Bloomerang.Util.Stripe.createPaymentMethod(paymentMethodData).then(callback);
            },

            // We only call this for self-hosted forms
            createInitialIntentForSelfHosted: function(isWidgetEventReg) {
                
                Bloomerang.Api._post(
                    "v1/StripePaymentElement/CreateInitialPaymentIntentForSelfHosted",
                    { Logs: [] },
                    ((response) => {
                        Bloomerang.StripePaymentElement = {
                            PaymentIntentId: response.Data.PaymentIntentId,
                            ClientSecret: response.Data.ClientSecret,
                            CustomerId: response.Data.CustomerId
                        };
                        this.mountStripePaymentElements(isWidgetEventReg);
                    })  /* success */,
                    undefined /* error */,
                    true /* onSubmitCalled */);
            },
            
            // We're creating two elements here
            // One for each: one-time & recurring
            mountStripePaymentElements: function(isWidgetEventReg) {

                //console.log('Intent and Customer created', response);
                
                Bloomerang.UsePaymentElement = true;
                Bloomerang.StripePaymentElement = {
                    ...Bloomerang.StripePaymentElement,
                    Elements: null,
                    ElementsDisplay: null,
                    RecurringElements: null,
                    RecurringElementsDisplay: null,
                    RecurringPaymentIntentId: null,
                    RecurringClientSecret: null,
                    RecurringCustomerId: null,
                    RecurringPaymentMethodToken: null
                }

                // Create an instances of the stripe payment element for one time donation
                // PID-186: deferred-intent mode (mode/amount) instead of clientSecret mode, so the
                // wallet sheet (Apple/Google Pay) can be opened by a synchronous elements.submit()
                // inside the click gesture. The PaymentIntent is created at submit time via
                // CreateDonationIntentAndCustomer. Mirrors the recurring Elements config below
                // (without setupFutureUsage/manual paymentMethodCreation, which are recurring-only).
                let options = {
                    mode: 'payment',
                    excludedPaymentMethodTypes: ['us_bank_account'], // PID-484: ACH is collected by the Checking and Savings inputs, not the Element
                    currency: 'usd',
                    amount: 100,
                    appearance: {
                        theme: 'stripe',
                        variables: {
                            colorText: '#272D30',
                            fontSizeBase: "14px",
                            fontFamily: "'Century Gothic', verdana, sans-serif"
                        }
                    }
                };
                if (Bloomerang.donationFormStripeOnBehalfOfFlag) {
                    options.onBehalfOf = Bloomerang.StripePaymentElement?.StripeAccountId ?? Bloomerang.StripeAccountId;
                }
                Bloomerang.StripePaymentElement.Elements = Bloomerang.Util.Stripe.elements(options);
                // Create the payment element for one time donation
                Bloomerang.Util.StripeCard = Bloomerang.StripePaymentElement.Elements.create('payment',
                    {
                        layout: 'tabs',
                        fields: {
                            billingDetails: {
                                address: {
                                    country: 'never',
                                    postalCode: 'never'
                                }
                            }
                        }
                    });
                
                if(!isWidgetEventReg) {
                    // Create an instances of the stripe payment element for recurring donation
                    let recurringOptions = {
                        mode: 'payment',
                        excludedPaymentMethodTypes: ['us_bank_account'], // PID-484: ACH is collected by the Checking and Savings inputs, not the Element
                        currency: 'usd',
                        amount: 100,
                        appearance: {
                            theme: 'stripe',
                            variables: {
                                colorText: '#272D30',
                                fontSizeBase: "14px",
                                fontFamily: "'Century Gothic', verdana, sans-serif"
                            }
                        },
                        setupFutureUsage: 'off_session',
                        paymentMethodCreation: 'manual',
                    };
                    if (Bloomerang.donationFormStripeOnBehalfOfFlag) {
                        recurringOptions.onBehalfOf = Bloomerang.StripePaymentElement?.StripeAccountId ?? Bloomerang.StripeAccountId;
                    }
                    Bloomerang.StripePaymentElement.RecurringElements = Bloomerang.Util.Stripe.elements(recurringOptions);
                    // Create the payment element for recurring donation
                    Bloomerang.Util.RecurringStripeCard = Bloomerang.StripePaymentElement.RecurringElements.create('payment',
                        {
                            layout: 'tabs',
                            fields: {
                                billingDetails: {
                                    address: {
                                        country: 'never',
                                        postalCode: 'never'
                                    }
                                }
                            }
                        });
                }

                // Mount the one-time donation payment element
                Bloomerang.Util.StripeCard.mount('#card-element');

                // PID-186: track the form context + the amount the one-time element was last mounted
                // with, so we can re-mount with the correct amount when the donor changes it. The
                // Apple/Google Pay sheet caches its amount at mount; elements.update() refreshes the
                // card UI but NOT the wallet sheet — only a re-mount does (see payments-ui).
                Bloomerang.StripePaymentElement.IsWidgetEventReg = isWidgetEventReg;
                Bloomerang.StripePaymentElement.OneTimeAmountAtLastMount = 100;
                Bloomerang.StripePaymentElement.RecurringAmountAtLastMount = 100;

                // PID-566: snapshot the just-mounted state and start the (one-shot) destroy
                // watchdog so a second Bloomerang widget or org-authored custom JS on the same
                // page can't leave the donation form with an invisibly-destroyed Payment
                // Element. StripeCard is what's actually on #card-element at this point — the
                // membership/recurring-toggle branches below immediately switch to
                // RecurringStripeCard and refresh the snapshot themselves.
                Bloomerang.Util.snapshotAndWatchPaymentElement(isWidgetEventReg, Bloomerang.Util.StripeCard);

                // Handle real-time validation errors
                Bloomerang.Util.StripeCardIsValid = false;
                Bloomerang.Util.RecurringStripeCardIsValid = isWidgetEventReg === true; // We set this to avoid showing validation for recurring payment element when form is event reg

                Bloomerang.Util.attachOneTimeDonationCardListener(isWidgetEventReg);

                if(!isWidgetEventReg && !!!document.querySelector("#membership-form")) {
                    // Register event listeners for recurring payment elements when form is not event reg.
                    // PID-566: this whole block (and its snapshotPaymentElement(false, …) refreshes
                    // below) is gated on !isWidgetEventReg, so the literal `false` is the correct mode
                    // here — it cannot clobber an event-reg widget's flag because it never runs for one.
                    Bloomerang.Util.attachRecurringDonationCardListener();

                    // Mounting & unmounting of correct payment element based on type of donation
                    // PID-566: mountStripePaymentElements can run again on watchdog recovery, so bind
                    // the #recurring change handler at most once. Without this guard each recovery
                    // stacks another listener, and on the next toggle both fire — the second
                    // unmount/remounts what the first just swapped, throwing Stripe's "already
                    // mounted" error. The #recurring DOM node is not re-created by recovery, so the
                    // original listener stays valid across re-mounts.
                    if(document.querySelector('#recurring') !== null && !Bloomerang.Util._recurringToggleBound) {
                        Bloomerang.Util._recurringToggleBound = true;
                        document.querySelector('#recurring').addEventListener('change', function (event) {
                            if (event.target.checked) {
                                // Clear donation elements' values then unmount
                                Bloomerang.Util.StripeCard.clear();
                                Bloomerang.Util.StripeCard.unmount();
                                Bloomerang.Util.StripeCardIsValid = true;

                                // Mount recurring elements'
                                Bloomerang.Util.RecurringStripeCard.mount('#card-element');
                                // PID-566: the recurring card is now what's on #card-element;
                                // update the snapshot so the destroy-watchdog (if still active)
                                // doesn't mistake the intentionally-unmounted StripeCard for a
                                // shared-context clobber and re-mount over the donor's input.
                                Bloomerang.Util.snapshotPaymentElement(false, Bloomerang.Util.RecurringStripeCard);
                            } else {
                                // Clear recurring elements' values then unmount
                                Bloomerang.Util.RecurringStripeCard.clear();
                                Bloomerang.Util.RecurringStripeCard.unmount();
                                Bloomerang.Util.RecurringStripeCardIsValid = true;

                                // Mount donation elements'
                                Bloomerang.Util.StripeCard.mount('#card-element');
                                // PID-566: back to the one-time card on #card-element; refresh
                                // snapshot so the watchdog (if still active) tracks the right one.
                                Bloomerang.Util.snapshotPaymentElement(false, Bloomerang.Util.StripeCard);
                            }
                            // PID-186: the newly-mounted element still has its previous mount-time
                            // amount, so the Apple/Google Pay sheet would be stale. Refresh it.
                            Bloomerang.Util.onDonationAmountChanged();
                        });
                    }
                }

                if(!!document.querySelector("#membership-form")) {
                    // Register event listeners for membership elements when form is not event reg.
                    // PID-566: membership forms are never event-reg, so the snapshotPaymentElement(false, …)
                    // below is the correct mode and cannot overwrite an event-reg widget's flag.

                    Bloomerang.Util.RecurringStripeCard.addEventListener('change', function (event) {
                        // It's a membership, validate the payment element
                        Bloomerang.Util.StripeCardIsValid = true;
                        let displayError = document.getElementById('card-errors');
                        if (event.error) {
                            displayError.textContent = event.error.message;
                        } else {
                            displayError.textContent = '';
                        }
                        if (event.complete) {
                            Bloomerang.Util.RecurringStripeCardIsValid = true;
                        } else {
                            Bloomerang.Util.RecurringStripeCardIsValid = false;
                        }
                    });
                    
                    // Clear normal donation elements' values then unmount
                    Bloomerang.Util.StripeCard.clear();
                    Bloomerang.Util.StripeCard.unmount();
                    Bloomerang.Util.StripeCardIsValid = true;
                    Bloomerang.Util.RecurringStripeCard.mount('#card-element');
                    // PID-566: membership form uses the recurring card on #card-element; refresh
                    // the snapshot so the destroy-watchdog checks the right one instead of the
                    // intentionally-unmounted (legitimately destroyed) StripeCard.
                    Bloomerang.Util.snapshotPaymentElement(false, Bloomerang.Util.RecurringStripeCard);
                }
            },

            // PID-186: attach the one-time Payment Element 'change' listener. Extracted from
            // mountStripePaymentElements so it can be re-attached after a re-mount.
            attachOneTimeDonationCardListener: function(isWidgetEventReg) {
                Bloomerang.Util.StripeCard.addEventListener('change', function (event) {
                    if(!isWidgetEventReg && !!!document.querySelector("#membership-form")) {
                        // It's a one-time donation, validate the payment element
                        if(document.querySelector("#donation-form #recurring").checked === false) {
                            Bloomerang.Util.RecurringStripeCardIsValid = true;
                            var displayError = document.getElementById('card-errors');
                            if (event.error) {
                                displayError.textContent = event.error.message;
                            } else {
                                displayError.textContent = '';
                            }
                            if (event.complete) {
                                Bloomerang.Util.StripeCardIsValid = true;
                            } else {
                                Bloomerang.Util.StripeCardIsValid = false;
                            }
                        }
                        else {
                            Bloomerang.Util.StripeCardIsValid = true;
                        }
                    }
                    // We're not listening for any recurring related events since this is an event registration form
                    else {
                        var displayError = document.getElementById('card-errors');
                        if (event.error) {
                            displayError.textContent = event.error.message;
                        } else {
                            displayError.textContent = '';
                        }
                        if (event.complete) {
                            Bloomerang.Util.StripeCardIsValid = true;
                        } else {
                            Bloomerang.Util.StripeCardIsValid = false;
                        }
                    }
                });
            },

            // PID-186: attach the recurring Payment Element 'change' listener. Extracted from
            // mountStripePaymentElements so it can be re-attached after a re-mount.
            attachRecurringDonationCardListener: function() {
                Bloomerang.Util.RecurringStripeCard.addEventListener('change', function (event) {
                    // It's a recurring donation, validate the payment element
                    if (document.querySelector("#donation-form #recurring").checked === true) {
                        Bloomerang.Util.StripeCardIsValid = true;
                        let displayError = document.getElementById('card-errors');
                        if (event.error) {
                            displayError.textContent = event.error.message;
                        } else {
                            displayError.textContent = '';
                        }
                        if (event.complete) {
                            Bloomerang.Util.RecurringStripeCardIsValid = true;
                        } else {
                            Bloomerang.Util.RecurringStripeCardIsValid = false;
                        }
                    }
                    else {
                        Bloomerang.Util.RecurringStripeCardIsValid = true;
                    }
                });
            },

            // PID-186: debounced trigger called from the donation amount/fee change handlers
            // (updateDonateButtonText) so rapid changes collapse into a single re-mount. Dispatches
            // to the element that's currently mounted (one-time or recurring).
            onDonationAmountChanged: function() {
                clearTimeout(Bloomerang._oneTimeRemountDebounce);
                Bloomerang._oneTimeRemountDebounce = setTimeout(function() {
                    if (Bloomerang.Util.isRecurringDonation && Bloomerang.Util.isRecurringDonation()) {
                        Bloomerang.Util.remountRecurringDonationElement();
                    } else {
                        Bloomerang.Util.remountOneTimeDonationElement();
                    }
                }, 400);
            },

            // PID-186: re-create + re-mount the one-time Payment Element with the current amount so
            // the Apple/Google Pay sheet shows the right total (the wallet caches its amount at
            // mount; update() doesn't refresh it). Scoped to the one-time donation element only —
            // recurring, membership, and event registration are handled separately. No-op if the
            // amount is unchanged, below the Stripe minimum, or the one-time element isn't active.
            remountOneTimeDonationElement: function() {
                if (!Bloomerang.UsePaymentElement || !Bloomerang.StripePaymentElement || !Bloomerang.StripePaymentElement.Elements) return;
                if (Bloomerang.StripePaymentElement.IsWidgetEventReg) return; // event reg uses its own amount fns
                if (!!document.querySelector("#membership-form")) return;
                if (Bloomerang.Util.isRecurringDonation && Bloomerang.Util.isRecurringDonation()) return; // recurring element is the active one

                var amount = (Bloomerang.Util.getDonationAmount && Bloomerang.Util.getDonationAmount()) || 0;
                var impact = (Bloomerang.Util.getDonationTrueImpactAmount && Bloomerang.Util.getDonationTrueImpactAmount()) || 0;
                var amountCents = Math.round((amount + impact) * 100);
                if (!amountCents || amountCents < 50) return; // no amount yet / below Stripe minimum
                if (amountCents === Bloomerang.StripePaymentElement.OneTimeAmountAtLastMount) return; // already current

                var options = {
                    mode: 'payment',
                    excludedPaymentMethodTypes: ['us_bank_account'], // PID-484: ACH is collected by the Checking and Savings inputs, not the Element
                    currency: 'usd',
                    amount: amountCents,
                    appearance: {
                        theme: 'stripe',
                        variables: {
                            colorText: '#272D30',
                            fontSizeBase: "14px",
                            fontFamily: "'Century Gothic', verdana, sans-serif"
                        }
                    }
                };
                if (Bloomerang.donationFormStripeOnBehalfOfFlag) {
                    options.onBehalfOf = Bloomerang.StripePaymentElement?.StripeAccountId ?? Bloomerang.StripeAccountId;
                }

                try { Bloomerang.Util.StripeCard.unmount(); } catch (e) {}
                Bloomerang.StripePaymentElement.Elements = Bloomerang.Util.Stripe.elements(options);
                Bloomerang.Util.StripeCard = Bloomerang.StripePaymentElement.Elements.create('payment', {
                    layout: 'tabs',
                    fields: {
                        billingDetails: {
                            address: {
                                country: 'never',
                                postalCode: 'never'
                            }
                        }
                    }
                });
                Bloomerang.Util.attachOneTimeDonationCardListener(false);
                Bloomerang.Util.StripeCard.mount('#card-element');
                Bloomerang.StripePaymentElement.OneTimeAmountAtLastMount = amountCents;

                // PID-566: refresh the snapshot (activeCard is the new StripeCard) without
                // re-arming the watchdog — this remount is a legitimate amount-change, and
                // we don't want to reopen a false-positive window after the donor has started
                // interacting with the form.
                Bloomerang.Util.snapshotPaymentElement(false, Bloomerang.Util.StripeCard);
            },

            // PID-186: recurring counterpart of remountOneTimeDonationElement. Same wallet-amount
            // caching gap, but re-creates the recurring Elements (which carry setupFutureUsage +
            // manual paymentMethodCreation) and re-attaches the recurring 'change' listener. Only
            // runs when the recurring element is the active one. Amount source matches the charge
            // (Donation.xml sets RecurringDonation.Amount = getDonationAmount() + true impact).
            remountRecurringDonationElement: function() {
                if (!Bloomerang.UsePaymentElement || !Bloomerang.StripePaymentElement || !Bloomerang.StripePaymentElement.RecurringElements) return;
                if (Bloomerang.StripePaymentElement.IsWidgetEventReg) return; // recurring element isn't created for event reg
                if (!!document.querySelector("#membership-form")) return;
                if (!(Bloomerang.Util.isRecurringDonation && Bloomerang.Util.isRecurringDonation())) return; // one-time element is the active one

                var amount = (Bloomerang.Util.getDonationAmount && Bloomerang.Util.getDonationAmount()) || 0;
                var impact = (Bloomerang.Util.getDonationTrueImpactAmount && Bloomerang.Util.getDonationTrueImpactAmount()) || 0;
                var amountCents = Math.round((amount + impact) * 100);
                if (!amountCents || amountCents < 50) return; // no amount yet / below Stripe minimum
                if (amountCents === Bloomerang.StripePaymentElement.RecurringAmountAtLastMount) return; // already current

                var options = {
                    mode: 'payment',
                    excludedPaymentMethodTypes: ['us_bank_account'], // PID-484: ACH is collected by the Checking and Savings inputs, not the Element
                    currency: 'usd',
                    amount: amountCents,
                    appearance: {
                        theme: 'stripe',
                        variables: {
                            colorText: '#272D30',
                            fontSizeBase: "14px",
                            fontFamily: "'Century Gothic', verdana, sans-serif"
                        }
                    },
                    setupFutureUsage: 'off_session',
                    paymentMethodCreation: 'manual'
                };
                if (Bloomerang.donationFormStripeOnBehalfOfFlag) {
                    options.onBehalfOf = Bloomerang.StripePaymentElement?.StripeAccountId ?? Bloomerang.StripeAccountId;
                }

                try { Bloomerang.Util.RecurringStripeCard.unmount(); } catch (e) {}
                Bloomerang.StripePaymentElement.RecurringElements = Bloomerang.Util.Stripe.elements(options);
                Bloomerang.Util.RecurringStripeCard = Bloomerang.StripePaymentElement.RecurringElements.create('payment', {
                    layout: 'tabs',
                    fields: {
                        billingDetails: {
                            address: {
                                country: 'never',
                                postalCode: 'never'
                            }
                        }
                    }
                });
                Bloomerang.Util.attachRecurringDonationCardListener();
                Bloomerang.Util.RecurringStripeCard.mount('#card-element');
                Bloomerang.StripePaymentElement.RecurringAmountAtLastMount = amountCents;

                // PID-566: refresh the snapshot (activeCard is the new RecurringStripeCard)
                // without re-arming the watchdog — see remountOneTimeDonationElement for why.
                Bloomerang.Util.snapshotPaymentElement(false, Bloomerang.Util.RecurringStripeCard);
            },

            // PID-186: debounced trigger called from updateRegisterButtonText (event registration)
            // so rapid changes collapse into a single re-mount.
            onEventRegistrationAmountChanged: function() {
                clearTimeout(Bloomerang._eventRegRemountDebounce);
                Bloomerang._eventRegRemountDebounce = setTimeout(function() {
                    Bloomerang.Util.remountEventRegistrationElement();
                }, 400);
            },

            // PID-186: event-registration counterpart of remountOneTimeDonationElement. Event reg uses
            // the same one-time Payment Element (mounted with isWidgetEventReg=true) but a different
            // amount source, and the donation re-mount intentionally skips it — so it gets its own
            // re-mount here. One-time options (no setupFutureUsage/paymentMethodCreation). Amount
            // matches the charge (EventRegistration.xml sets Donation.Amount = getRegistrationAmount()
            // + true impact). Only runs on an event reg form.
            remountEventRegistrationElement: function() {
                if (!Bloomerang.UsePaymentElement || !Bloomerang.StripePaymentElement || !Bloomerang.StripePaymentElement.Elements) return;
                if (!Bloomerang.StripePaymentElement.IsWidgetEventReg) return; // only the event reg one-time element

                var amount = (Bloomerang.Util.getRegistrationAmount && Bloomerang.Util.getRegistrationAmount()) || 0;
                var impact = (Bloomerang.Util.getRegistrationTrueImpactAmount && Bloomerang.Util.getRegistrationTrueImpactAmount()) || 0;
                var amountCents = Math.round((amount + impact) * 100);
                if (!amountCents || amountCents < 50) return; // no amount yet / below Stripe minimum
                if (amountCents === Bloomerang.StripePaymentElement.OneTimeAmountAtLastMount) return; // already current

                var options = {
                    mode: 'payment',
                    excludedPaymentMethodTypes: ['us_bank_account'], // PID-484: ACH is collected by the Checking and Savings inputs, not the Element
                    currency: 'usd',
                    amount: amountCents,
                    appearance: {
                        theme: 'stripe',
                        variables: {
                            colorText: '#272D30',
                            fontSizeBase: "14px",
                            fontFamily: "'Century Gothic', verdana, sans-serif"
                        }
                    }
                };
                if (Bloomerang.donationFormStripeOnBehalfOfFlag) {
                    options.onBehalfOf = Bloomerang.StripePaymentElement?.StripeAccountId ?? Bloomerang.StripeAccountId;
                }

                try { Bloomerang.Util.StripeCard.unmount(); } catch (e) {}
                Bloomerang.StripePaymentElement.Elements = Bloomerang.Util.Stripe.elements(options);
                Bloomerang.Util.StripeCard = Bloomerang.StripePaymentElement.Elements.create('payment', {
                    layout: 'tabs',
                    fields: {
                        billingDetails: {
                            address: {
                                country: 'never',
                                postalCode: 'never'
                            }
                        }
                    }
                });
                Bloomerang.Util.attachOneTimeDonationCardListener(true);
                Bloomerang.Util.StripeCard.mount('#card-element');
                Bloomerang.StripePaymentElement.OneTimeAmountAtLastMount = amountCents;

                // PID-566: refresh the snapshot (event-reg mount, activeCard is the new
                // StripeCard) without re-arming the watchdog — see remountOneTimeDonationElement.
                Bloomerang.Util.snapshotPaymentElement(true, Bloomerang.Util.StripeCard);
            },

            getOrSetSessionId: function() {
                if (!Bloomerang._sessionId) {
                    Bloomerang._sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
                }
                return Bloomerang._sessionId;
            },

            waitForPostMessage: function(expectedType, onSuccess, onError, timeoutEnabled = true, timeoutDuration = 60000) {
                const handler = event => {
                    if (event.data?.type === expectedType) {
                        if (timeout && timeoutEnabled) {
                            clearTimeout(timeout);
                        }
                        window.removeEventListener('message', handler);
                        if (event.data.payload.status.toString().toUpperCase() === "ERROR")
                            onError(event.data.payload);
                        else
                            onSuccess(event.data.payload);
                    }
                };

                window.addEventListener('message', handler);

                let timeout;
                if (timeoutEnabled) {
                    timeout = setTimeout(() => {
                        window.removeEventListener('message', handler);
                        if (typeof onError === 'function') {
                            onError({ IsSuccess: false, Message: 'Timeout waiting for message', Id: 0 });
                        }
                    }, timeoutDuration);
                }
            },

            sendIframeMessage: function(iframeRef, message, options = {}) {
                const { responseType, onSuccess, onError } = options;
                const errorMessage = '[OnePayCheckout] Iframe not ready for communication';

                if (!iframeRef?.contentWindow) {
                    console.error(errorMessage);
                    return false;
                }

                if (typeof onSuccess === 'function') {
                    if (!responseType) {
                        throw new Error('[OnePayCheckout] responseType is required when using onSuccess');
                    }

                    this.waitForPostMessage(
                      responseType,
                      payload => {
                          onSuccess(payload);
                      },
                      error => {
                          console.error(`[OnePayCheckout] Error for responseType "${responseType}":`, error);
                          if (typeof onError === 'function') onError(error);
                      },
                      !this.isPaymentMethodWalletPay() //disable timeout if wallet pay is used
                    );
                }

                try {
                    iframeRef.contentWindow.postMessage(message, iframeRef.src);
                } catch (err) {
                    throw new Error(`[OnePayCheckout] Failed to send message: ${err}`);
                }

                return true;
            },

            isPaymentMethodWalletPay: function() {
                return Bloomerang.Data.Method === "GooglePay" || Bloomerang.Data.Method === "ApplePay";
            },

            calculateTrueImpactForOnePay: function(amount) {
                const feeDetails = Bloomerang?.OnePayPaymentElement?.TransactionFeeDetails;
                const transactionFeeFormula = Bloomerang?.OnePayPaymentElement?.TransactionFeeFormula;
                
                if (!feeDetails || !transactionFeeFormula) return 0;

                const jsonFeeDetails = JSON.parse(feeDetails);
                let baseFee;
                let rate;

                if (Array.isArray(jsonFeeDetails.Methods))
                {
                    // PID-85 V2: fee details are a per-method rate list. Select the row by payment-method
                    // type and, when known, the card-brand subtype. The 1Pay iframe reports the method type
                    // (card/us_bank_account) via PAYMENT_UPDATE but does not yet surface the card brand, so
                    // Bloomerang.Data.CardBrand is normally null and we fall back to the type-level (null
                    // subtype) row. Full per-brand pricing (e.g. AmericanExpress) requires payments-ui to
                    // include the brand in PAYMENT_UPDATE; until then card transactions use the default rate.
                    const methodType = (Bloomerang.Data.Method === 'ACH') ? 'ACH' : 'CreditCard';
                    const brandSubtype = Bloomerang.Data.CardBrand || null;
                    const methods = jsonFeeDetails.Methods;
                    const row = methods.find(m => m.MethodType === methodType && m.MethodSubtype === brandSubtype)
                        || methods.find(m => m.MethodType === methodType && (m.MethodSubtype === null || m.MethodSubtype === ''));
                    if (!row) {
                        console.error('[OnePayCheckout] No V2 fee rate found for method', methodType);
                        return 0;
                    }
                    baseFee = row.BaseFee;
                    rate = row.Rate;
                }
                else
                {
                    baseFee = jsonFeeDetails.BaseFee;
                    rate = jsonFeeDetails.Rate;

                    if(!Bloomerang.OnePayPaymentElement.IsCrmOnly)
                    {
                        baseFee = jsonFeeDetails.NonCrmBaseFeeNoP2P;
                        rate = jsonFeeDetails.NonCrmRateNoP2P;
                    }
                    else if (Bloomerang.Data.Method === 'ACH')
                    {
                        baseFee = jsonFeeDetails.CrmBaseFeeAch;
                        rate = jsonFeeDetails.CrmRateAch;
                    }
                    else // If not ACH, then it must be a Credit Card
                    {
                        baseFee = jsonFeeDetails.CrmBaseFeeCard;
                        rate = jsonFeeDetails.CrmRateCard;
                    }
                }

                // Only allow formulas with allowed variable names and math operators
                const allowedPattern = /^[\d\s\.\+\-\*\/\(\)baseFeeamountrate]+$/i;
                if (!allowedPattern.test(transactionFeeFormula)) {
                    console.error('[OnePayCheckout] Invalid transaction fee formula');
                    return 0;
                }
                let feeTotal = 0;
                try {
                    // Create a function with baseFee, amount, rate as arguments
                    const feeFunc = new Function('baseFee', 'amount', 'rate', `return ${transactionFeeFormula};`);
                    feeTotal = feeFunc(baseFee, amount, rate);
                } catch (e) {
                    console.error('[OnePayCheckout] Error evaluating transaction fee formula:', e);
                    feeTotal = 0;
                }
                return feeTotal;
            },

            setFeeDetails: function(transactionType) {
                const feeDetails = Bloomerang?.OnePayPaymentElement?.TransactionFeeDetails;
                if (!feeDetails) return;

                switch (transactionType) {
                    case 'card':
                        Bloomerang.Data.Method = "CreditCard";
                        break;
                    case 'us_bank_account':
                        Bloomerang.Data.Method = "ACH";
                        break;
                    case 'google_pay':
                        Bloomerang.Data.Method = "GooglePay";
                        break;
                    case 'apple_pay':
                        Bloomerang.Data.Method = "ApplePay";
                        break;
                }
                
                const formType = Bloomerang.OnePayPaymentElement.FormType;
                switch (formType) {
                    case 'Donation':
                        Bloomerang.Util.calculateDonationTrueImpact();
                        Bloomerang.Util.updateDonateButtonText();
                        break;
                    case 'EventRegistration':
                        Bloomerang.Util.calculateRegistrationTrueImpact();
                        Bloomerang.Util.updateRegisterButtonText();
                        break;
                }
            },

            mountOnePayCheckout: function(onePayCheckOutSourceUrl) {
                Bloomerang.UseOnePayCheckout = true;
                this.setIsOnePayElementLoading(true);
                this.updatePaymentsFrameMargin();
                window.addEventListener('resize', () => this.updatePaymentsFrameMargin());
                window.addEventListener('DOMContentLoaded', () => this.updatePaymentsFrameMargin());
                this.getOnePayFormConfiguration().then(() => {
                    const iframeRef = document.getElementById('payments-iframe');
                    if (!iframeRef) {
                        console.error('[OnePayCheckout] Payments iframe not found');
                        return;
                    }
                    iframeRef.src = onePayCheckOutSourceUrl;
                    iframeRef.addEventListener('load', () => this.handleIframeLoad(iframeRef));
                    window.addEventListener('message', this.handleOnePayMessage.bind(this, iframeRef));
                    this.setupEmailFieldListener(iframeRef);
                    this.setupPaymentMode(iframeRef);
                }).catch(error => {
                    console.error('Failed to get OnePay form configuration:', error);
                    Bloomerang.Api.OnError({IsSuccess: false, Message: error.message, Id: 0});
                });
            },

            // ============================================================================
            // PID-145: In-page UMD mount path. Replaces mountOnePayCheckout when the
            // UseOnePayCheckoutUmd LD flag is on. Mounts @bloomerang/one-pay-checkout
            // (UMD, drop-in mode) into the wrapper <div id="payments-ui-iframe"> via a
            // Job-A bridge — no iframe, no postMessage. The legacy mountOnePayCheckout
            // above stays untouched as the flag-off rollback path.
            //
            // Asset chain (Q#3 namespace strategy): React 17.0.2 and ReactDOM are vendored
            // as window.BloomerangReact / window.BloomerangReactDOM so customer-embed pages
            // that already define a different window.React are not stomped. The OnePay UMD
            // and bridge use these namespaced globals exclusively.
            // ============================================================================

            // PID-128 amount-deferral workaround + Stripe minimum-charge floor.
            // The @bloomerang/one-pay-checkout wrapper hard-defers Elements creation
            // in payment mode until amount > 0 (Stripe deferred-mode rejects amount:0).
            // 1¢ un-defers the wrapper but Stripe Elements then throws
            // `validation_error: No valid payment method types` because no Stripe
            // payment method accepts <$0.50 USD. payments-ui hits the same problem and
            // uses 50 cents as the floor (CheckoutPage.tsx:1605 `safeElementsAmount || 50`).
            // We match: mount with 50¢, donor's real amount overrides via T7's
            // updateAmount before submit. The placeholder never reaches Stripe as a
            // charge — PaymentIntent is created at confirm-time with the current amount.
            ONE_PAY_AMOUNT_PLACEHOLDER_CENTS: 50,

            BloomerangReactUri: function () { return Bloomerang.Web.Uri + "Content/Scripts/Api/onepay/bloomerang-react.production.min.js"; },
            BloomerangReactDomUri: function () { return Bloomerang.Web.Uri + "Content/Scripts/Api/onepay/bloomerang-react-dom.production.min.js"; },
            OnePayCheckoutUmdUri: function () { return Bloomerang.Web.Uri + "Content/Scripts/Api/onepay/one_pay_checkout.umd.js?v=0.6.1"; },
            OnePayCheckoutBridgeUri: function () { return Bloomerang.Web.Uri + "Content/Scripts/Api/onepay/one-pay-checkout-bridge.js"; },

            isBloomerangReactLoaded: function () { return typeof window.BloomerangReact !== "undefined"; },
            isBloomerangReactDomLoaded: function () { return typeof window.BloomerangReactDOM !== "undefined"; },
            isOnePayCheckoutUmdLoaded: function () { return typeof window.BloomerangOnePayCheckout !== "undefined" && typeof window.BloomerangOnePayCheckout.OnePayCheckout !== "undefined"; },
            isOnePayCheckoutBridgeLoaded: function () { return typeof window.BloomerangOnePayBridge !== "undefined" && typeof window.BloomerangOnePayBridge.OnePayCheckout !== "undefined"; },

            mountOnePayCheckoutUmd: function (bffBaseUrl) {
                Bloomerang.UseOnePayCheckoutUmd = true;
                this.setIsOnePayElementLoadingUmd(true);
                var self = this;
                this.getOnePayFormConfiguration().then(function () {
                    var container = document.getElementById('payments-ui-iframe');
                    if (!container) {
                        // PID-145 (Dustin review): without the mount container we can't render
                        // anything. Reset the spinner so the donor sees an error surface rather
                        // than a stuck spinner, and route through Api.OnError so the host gets
                        // a structured failure signal.
                        console.error('[OnePayCheckout] UMD mount container not found');
                        self.setIsOnePayElementLoadingUmd(false);
                        Bloomerang.Api.OnError({
                            IsSuccess: false,
                            Message: 'Payment form failed to initialize. Please refresh and try again.',
                            Id: 0
                        });
                        return;
                    }
                    // Sequential load chain: React → ReactDOM → OnePay UMD → bridge → render.
                    // Each step uses the namespaced isLoaded check so a partial earlier load
                    // (e.g. cached on revisit) is recognized and reused.
                    self.load(self.BloomerangReactUri(), self.isBloomerangReactLoaded, function () {
                        self.load(self.BloomerangReactDomUri(), self.isBloomerangReactDomLoaded, function () {
                            self.load(self.OnePayCheckoutUmdUri(), self.isOnePayCheckoutUmdLoaded, function () {
                                self.load(self.OnePayCheckoutBridgeUri(), self.isOnePayCheckoutBridgeLoaded, function () {
                                    self._mountOnePayCheckoutUmdAfterLoad(bffBaseUrl, container);
                                });
                            });
                        });
                    });
                }).catch(function (error) {
                    console.error('Failed to get OnePay form configuration:', error);
                    Bloomerang.Api.OnError({ IsSuccess: false, Message: error.message, Id: 0 });
                });
            },

            _mountOnePayCheckoutUmdAfterLoad: function (bffBaseUrl, container) {
                var self = this;
                var emailField = document.getElementById('email-address');
                // Build the mount props. stripeOptions carries the legacy STRIPE_THEME variables
                // + accordion paymentElementOptions layout + us_bank_account.verification_method.
                // paymentMethodOptions can ONLY arrive as a host prop — the BFF
                // /configuration/values self-fetch returns pk/account/isTest only.
                var props = {
                    bffBaseUrl: bffBaseUrl,
                    formId: Bloomerang.OnePayPaymentElement.OnePayFormId,
                    formApiKey: Bloomerang.OnePayPaymentElement.OnePayFormApiKey,
                    isCrmOnly: Bloomerang.OnePayPaymentElement.IsCrmOnly,
                    currency: 'usd', // OnePayPaymentElement has no Currency field; hardcode (see :1360-1367)
                    paymentMode: 'payment',
                    // PID-128 amount-deferral workaround: the wrapper defers Elements mount in
                    // payment mode until amount > 0 (Stripe deferred-mode rejects amount:0).
                    // The legacy iframe rendered Elements at $0 — pass a 50¢ placeholder
                    // (Stripe USD minimum, ONE_PAY_AMOUNT_PLACEHOLDER_CENTS) so Elements
                    // mount immediately; donor's real amount overrides via T7's
                    // sendOnePayAmount → updateAmount before submit. The placeholder never
                    // reaches Stripe as a charge — PaymentIntent is created at confirm-time
                    // with whatever the amount is THEN.
                    amount: Bloomerang.Util.ONE_PAY_AMOUNT_PLACEHOLDER_CENTS,
                    totalAmount: Bloomerang.Util.ONE_PAY_AMOUNT_PLACEHOLDER_CENTS,
                    // Link suppression lives in paymentElementOptions.wallets.link
                    // ('never') — see _buildOnePayUmdStripeOptions. PaymentElement
                    // does respect it (re-verified on qa5 after toggling); the
                    // earlier claim that ECE removal alone suppressed Link was
                    // wrong.
                    email: (emailField && emailField.value) || undefined, // seeded; refreshed via re-render (T7)
                    stripeOptions: this._buildOnePayUmdStripeOptions(),
                    onHandleReady: function (handle) {
                        Bloomerang.Util._onePayHandle = handle;
                        // PID-145 (Brady review): replay stashed amount-state captured before the
                        // handle was ready. Otherwise a default donation level or pre-filled amount
                        // firing sendOnePayTotalAmount during the UMD load gap would leave Elements
                        // at the 50¢ placeholder until the donor's next input.
                        if (Bloomerang.Util._amountStateTotal !== undefined || Bloomerang.Util._amountStateBase !== undefined) {
                            Bloomerang.Util._scheduleAmountFlush();
                        }
                    },
                    onPaymentResponse: function (response) { self.handleOnePayBridgeResponse(response); },
                    onError: function (error) { self.handleOnePayBridgeError(error); },
                    onCancel: function () { self.handleOnePayBridgeCancel(); },
                    // 2026-06-11 review: the wrapper sends {type:'change', payload:{complete, value, empty}};
                    // handlePaymentUpdate(:1016) reads payload.value.type. Unwrap or setFeeDetails never runs.
                    onPaymentElementUpdate: function (e) { self.handlePaymentUpdate(e && e.payload); },
                    onLoad: function () { self.handleOnePayUmdLoad(); }
                };

                this._onePayUmdContainer = container;
                this._onePayUmdProps = props;
                this._onePayReady = false;
                this._onePayInFlight = false;
                this.renderOnePayCheckoutUmd();
                this.setupEmailFieldListenerUmd();
                // T7: createUpdatePaymentModeMessage now branches internally — when the UMD
                // flag is on it calls _onePayHandle.updatePaymentMode and ignores iframeRef.
                // Passing null is safe.
                this.setupPaymentMode(null);
            },

            // Port of the legacy createOnePayTheme(:1244) into the wrapper's stripeOptions
            // prop shape. The wrapper expects appearance + stripeElementOptions; the legacy
            // STRIPE_THEME message used a different nested shape (it went through postMessage,
            // not props). Without this port the form looks visibly different (wrapper defaults
            // to tabs layout + different fonts/radius) and ACH instant-verification silently
            // changes behavior.
            _buildOnePayUmdStripeOptions: function () {
                return {
                    appearance: {
                        theme: 'stripe',
                        variables: {
                            colorPrimary: '#4a90e2',
                            colorBackground: '#ffffff',
                            colorText: '#333333',
                            colorDanger: '#df1b41',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            spacingUnit: '4px',
                            borderRadius: '4px'
                        },
                        paymentElementOptions: {
                            layout: {
                                type: 'accordion',
                                defaultCollapsed: false,
                                radios: false,
                                spacedAccordionItems: true
                            },
                            // Link-only suppression. Dropping the whole wallets block
                            // brought back the "Secure, fast checkout with Link" upsell;
                            // PaymentElement DOES respect `wallets.link: 'never'`
                            // (re-confirmed on qa5 after the diff). We don't pass
                            // `applePay`/`googlePay` here because explicit `'auto'` was
                            // observed to actually suppress GPay vs. omitting the keys
                            // entirely (still under investigation — staging with NO
                            // wallets config renders GPay on the same browser+account).
                            wallets: { link: 'never' }
                        }
                    },
                    stripeElementOptions: {
                        paymentMethodOptions: {
                            us_bank_account: { verification_method: 'instant_or_skip' }
                        }
                    }
                };
            },

            // Re-render the bridge into the SAME container with merged props. React reconciles
            // in place (same component type + container) — this is NOT a remount; Stripe
            // Elements state survives. Used at mount and by setupEmailFieldListenerUmd
            // (email is a prop, not a handle method — there is no updateEmail on
            // OnePayCheckoutHandle, and mount-time-only would leave it permanently empty
            // since mount runs before the donor types).
            renderOnePayCheckoutUmd: function (overrides) {
                if (overrides) {
                    this._onePayUmdProps = Object.assign({}, this._onePayUmdProps, overrides);
                }
                var element = window.BloomerangReact.createElement(
                    window.BloomerangOnePayBridge.OnePayCheckout,
                    this._onePayUmdProps
                );
                window.BloomerangReactDOM.render(element, this._onePayUmdContainer);
            },

            // onLoad: fires once the wrapper finishes mounting Stripe Elements. Toggles the
            // loading indicator off and flips the readiness push signal (T8 uses this to
            // gate the submit button, not handle.isReady() which updates in a post-commit
            // useEffect and can be stale within the same tick).
            handleOnePayUmdLoad: function () {
                this.setIsOnePayElementLoadingUmd(false);
                this._onePayReady = true;
            },

            // UMD analog of setIsOnePayElementLoading (:1173) — that one references a
            // payments-iframe element which doesn't exist when the flag is on.
            //
            // Under PID-145's spinner arrangement, #loading-indicator is a CHILD of
            // #payments-ui-iframe (so ReactDOM.render replaces the spinner naturally
            // when the UMD mounts). Toggling `hidden` on the parent would also hide
            // the child spinner, defeating the loading UX. Only toggle the spinner
            // itself; the parent stays visible so the spinner remains onscreen
            // during the pre-mount fetch. Post-mount, the spinner element is gone
            // (React replaced it), so the null-check short-circuits.
            setIsOnePayElementLoadingUmd: function (isLoading) {
                var loadingIndicator = document.getElementById('loading-indicator');
                if (!loadingIndicator) return;
                if (isLoading) {
                    loadingIndicator.classList.remove('hidden');
                } else {
                    loadingIndicator.classList.add('hidden');
                }
            },

            // Email update via re-render (no updateEmail handle method exists). On change,
            // the bridge re-renders with the new email prop — React reconciles in place,
            // Stripe Elements state survives.
            setupEmailFieldListenerUmd: function () {
                var self = this;
                var emailField = document.getElementById('email-address');
                if (!emailField) return;
                emailField.addEventListener('change', function () {
                    self.renderOnePayCheckoutUmd({ email: emailField.value });
                });
            },

            // PID-145 (T8): response handler. 'success' AND 'processing' both complete.
            // 'processing' is the ACH outcome — debit settles over days but the wrapper's
            // payload still carries transactionId (per INTEGRATORS.md and the wrapper source
            // at OnePayCheckout.tsx:882). Treating 'processing' as failure would error every
            // ACH donation post-charge. Branching on response.type first (not response.error)
            // is the source-of-truth rule from INTEGRATORS.md:66 — response.error is
            // best-effort detail and may be absent on a non-succeeded outcome.
            handleOnePayBridgeResponse: function (response) {
                var pending = this._onePayPendingCheckout;
                this._onePayPendingCheckout = null;
                this._onePayInFlight = false;

                if (!response || (response.type !== 'success' && response.type !== 'processing')) {
                    return this.handleOnePayBridgeError((response && response.error) || new Error('Payment did not complete. Please try again.'));
                }
                if (!pending) {
                    console.warn('[OnePayCheckout] response with no pending checkout');
                    return;
                }
                // PID-145 (Dustin review): defense-in-depth guard on the wrapper contract.
                // INTEGRATORS.md says response.payload.transactionId is always set on
                // success/processing, but a violation would have createOnePayTempTransactionData
                // deref undefined.transactionId AFTER we already cleared _onePayInFlight/pending —
                // throwing past pending.callback and hanging the form WITH THE CHARGE ALREADY MOVED.
                // Route a malformed payload through pending.callback so the host surfaces an
                // error and the form recovers. Log loudly so support can reconcile against the
                // Stripe Dashboard.
                var responsePayload = response.payload;
                if (!responsePayload || !responsePayload.transactionId) {
                    console.error('[OnePayCheckout] Malformed success/processing response — missing payload or transactionId', response);
                    if (pending.callback) {
                        pending.callback({ error: { message: 'Payment may have completed but could not be recorded. Please contact support before retrying.' } });
                    }
                    return;
                }
                this.createOnePayTempTransactionData(pending.data, responsePayload, pending.callback);
            },

            // PID-145 (T8): error handler. Mirrors the legacy decline-message rewrite at
            // processOnePayCheckout :1580 (bankValidationErrorMessage is function-local
            // there; duplicated here intentionally per plan guidance). Also applies the
            // INTEGRATORS.md fraud-code rule (never surface stolen_card/lost_card/
            // fraudulent/pickup_card to the donor — show a generic decline). The
            // error.code / error.declineCode fields are only populated against the
            // 0.2.0+ vendored UMD (T1) — against earlier builds the branches are inert
            // (safe) since the lookups return undefined.
            handleOnePayBridgeError: function (error) {
                var pending = this._onePayPendingCheckout;
                this._onePayPendingCheckout = null;
                this._onePayInFlight = false;

                Bloomerang.Data.DigitalWallet = "";

                var bankValidationErrorMessage = "The payment method's banking details failed validation. Please check the account and routing numbers provided.";
                var FRAUD_CODES = { stolen_card: 1, lost_card: 1, fraudulent: 1, pickup_card: 1 };

                var callbackError = error;
                if (error && error.declineCode && FRAUD_CODES[error.declineCode]) {
                    callbackError = Object.assign({}, error, { message: 'Your card was declined. Please use a different card.' });
                } else if (error && error.code === 'payment_method_skip_verification_failed' && error.message !== bankValidationErrorMessage) {
                    callbackError = Object.assign({}, error, { message: bankValidationErrorMessage });
                }

                if (pending && pending.callback) {
                    pending.callback({ error: callbackError });
                } else {
                    // Mount-time / pre-submit failure — no callback yet to route through.
                    Bloomerang.Api.OnError({
                        IsSuccess: false,
                        Message: (callbackError && callbackError.message) || 'Payment failed. Please try again.',
                        Code: callbackError && callbackError.code,
                        Id: 0
                    });
                }
                // PID-145 (Dustin review): reset the pre-mount loading indicator on the
                // error path (mirrors handleOnePayBridgeCancel below). Only meaningful if
                // the error fires before React.render() replaces the initial spinner —
                // post-mount the spinner element is gone and this call is a no-op (the
                // wrapper owns its own post-mount loading/error UI).
                this.setIsOnePayElementLoadingUmd(false);
            },

            // PID-145 (T8): cancel handler — donor closed a wallet sheet or Link UI before
            // confirming. Clear pending state; setIsOnePayElementLoadingUmd(false) resets
            // the pre-mount spinner if it's still in the DOM. Post-mount this is a no-op —
            // the wrapper's own cancel UI takes over.
            handleOnePayBridgeCancel: function () {
                this._onePayPendingCheckout = null;
                this._onePayInFlight = false;
                this.setIsOnePayElementLoadingUmd(false);
            },

            handleOnePayMessage: function(iframe, event) {
                const { type, payload } = event.data || {};
                if (!type) return;

                switch (type) {
                    case 'PAYMENT_UPDATE':
                        this.handlePaymentUpdate(payload);
                        break;
                    case 'RESIZE':
                        this.handleResize(payload, iframe);
                        break;
                    default:
                  // Ignore other message types
                }
            },
            
            handlePaymentUpdate: function(payload) {
                const transactionType = payload?.value?.type;
                if (transactionType) {
                    this.setFeeDetails(transactionType);
                }
            },

            handleResize: function(payload, iframe) {
                const MAX_MOBILE_HEIGHT = 650;
                const MOBILE_WIDTH_THRESHOLD = 600;
                if (!payload?.height) return;

                let newHeight = payload.height;
                if (window.innerWidth < MOBILE_WIDTH_THRESHOLD && newHeight > MAX_MOBILE_HEIGHT) {
                    newHeight = MAX_MOBILE_HEIGHT;
                }
                iframe.style.height = `${newHeight}px`;
                iframe.style.width = '100%';
            },
            
            setupEmailFieldListener: function(iframe) {
                const emailField = document.getElementById('email-address');
                if (emailField) {
                    this.updateOnePayEmail(iframe, emailField.value);
                    emailField.addEventListener('change', () => {
                        this.updateOnePayEmail(iframe, emailField.value);
                    });
                }
            },
            
            updateOnePayEmail: function(iframeRef, emailAddress) {
                if (!emailAddress) return;
                let updateMessage = {
                    type: 'EMAIL_UPDATE',
                    payload: {
                        email: emailAddress,
                    },
                    sessionId: this.getOrSetSessionId()
                };
                this.sendIframeMessage(iframeRef, updateMessage);
            },

            // Forwards the donor record (name / email / phone / address) to the OnePay iframe so the
            // payments BE can populate the Stripe Customer panel (PID-17). Sent immediately
            // before START_PAYMENT so the iframe has it in its store before it creates the
            // intent. 1Pay path only — the direct-Stripe.js path builds its own billing_details.
            // Mirrors the account->billing mapping in processStripePaymentElement. Account number
            // isn't collected on the public form, so it's omitted; the payments-ui side drops
            // anything invalid/over-length, so a bad value can't 400.
            sendOnePayBillingDetails: function(iframeRef) {
                const account = Bloomerang.Data.Account;
                if (!account) return;

                const billingDetails = {};

                const name = account.Type === "Organization"
                    ? account.FullName
                    : ((account.FirstName || "") + " " + (account.LastName || "")).trim();
                if (name) billingDetails.name = name;

                const emailField = document.getElementById('email-address');
                if (emailField && emailField.value) billingDetails.email = emailField.value;

                // Phone lives on the account's PrimaryPhone (same source processStripePaymentElement uses),
                // sent as-entered — Stripe stores the Customer phone verbatim.
                if (account.PrimaryPhone && account.PrimaryPhone.Number) billingDetails.phone = account.PrimaryPhone.Number;

                if (account.Address) {
                    const address = {};
                    // Guard the type: this widget's Bloomerang.Util.splitNewLines does not guard
                    // non-strings and would throw on a truthy non-string street.
                    if (typeof account.Address.Street === "string" && account.Address.Street) {
                        const streetSplit = Bloomerang.Util.splitNewLines(account.Address.Street);
                        if (streetSplit && streetSplit.length) {
                            address.line1 = streetSplit[0];
                            if (streetSplit.length > 1) address.line2 = streetSplit[1];
                        }
                    }
                    if (account.Address.City) address.city = account.Address.City;
                    if (account.Address.State) address.state = account.Address.State;
                    if (account.Address.PostalCode) address.postal_code = account.Address.PostalCode;
                    if (account.Address.Country) address.country = account.Address.Country;
                    if (Object.keys(address).length > 0) billingDetails.address = address;
                }

                if (Object.keys(billingDetails).length === 0) return;

                this.sendIframeMessage(iframeRef, {
                    type: 'BILLING_DETAILS_UPDATE',
                    payload: { billingDetails: billingDetails },
                    sessionId: this.getOrSetSessionId()
                });
            },

            setupPaymentMode: function(iframeRef) {
                if (Bloomerang.OnePayPaymentElement.FormType === 'EventRegistration') {
                    this.createUpdatePaymentModeMessage("payment", iframeRef);
                    return; // Event registrations are always one-time payments
                }

                const recurringCheckbox = document.querySelector("#donation-form #recurring");
                const startDateInput = document.querySelector("#donation-form #start-date");

                const handleStartDateChange = (event) => {
                    const startDate = event.target?.value;
                    if (!startDate) return;

                    // We will use payment intent for RD if:
                    // 📌 Selected start date is today for client or behind UTC date today
                    //    - meaning we need to charge right away to avoid waiting next month
                    // We will use setup intent for RD if:
                    // 📌 Selected start date is greater than today (future)
                    const inputDate = new Date(startDate.trim()).toISOString().split('T')[0];
                    const todayDate = new Date().toISOString().split('T')[0];

                    const isPayment = new Date(inputDate) <= new Date(todayDate) || !Bloomerang.Util.isOnePayRecurringDonation();
                    const mode = isPayment ? "payment" : "setup";
                    this.createUpdatePaymentModeMessage(mode, iframeRef);
                };

                recurringCheckbox.addEventListener("change", (event) => {
                    if (event.target.checked) {
                        // Recurring is checked, listen to #start-date changes
                        startDateInput.addEventListener("change", handleStartDateChange);
                        // Check the active value of #start-date immediately
                        handleStartDateChange({ target: startDateInput });
                    } else {
                        // Recurring is unchecked, always set to payment
                        startDateInput.removeEventListener("change", handleStartDateChange);
                        this.createUpdatePaymentModeMessage("payment", iframeRef);
                    }
                });
            },

            sendOnePayTotalAmount: function(amount) {
                // PID-145: on the UMD path, stash the latest total and let the microtask
                // flush drive the wrapper handle. Removes the brittle pairing requirement
                // with sendOnePayAmount — order, repetition, or missing pair members all
                // converge to a consistent state because the flush reads the latest stash.
                if (Bloomerang.UseOnePayCheckoutUmd) {
                    this._amountStateTotal = amount;
                    this._scheduleAmountFlush();
                    return;
                }
                const iframeRef = document.getElementById('payments-iframe');
                if (!iframeRef) {
                    console.error('[OnePayCheckout] Payments iframe not found');
                    return;
                }
                var updateMessage = {
                    type: 'TOTAL_AMOUNT_UPDATE',
                    payload: {
                        totalAmount: amount,
                    },
                    sessionId: this.getOrSetSessionId()
                };
                this.sendIframeMessage(iframeRef, updateMessage);
            },

            sendOnePayAmount: function(amount) {
                // PID-145: on the UMD path, stash the latest base and let the microtask
                // flush apply state. Order-independent with sendOnePayTotalAmount — flush
                // prefers total for Elements display (total-only model preserves the GPay
                // fee fix; wallet modal shows base+fee) and falls back to base if total
                // was never sent.
                if (Bloomerang.UseOnePayCheckoutUmd) {
                    this._amountStateBase = amount;
                    this._scheduleAmountFlush();
                    return;
                }
                const iframeRef = document.getElementById('payments-iframe');
                if (!iframeRef) {
                    console.error('[OnePayCheckout] Payments iframe not found');
                    return;
                }
                var updateMessage = {
                    type: 'AMOUNT_UPDATE',
                    payload: {
                        amount: amount,
                    },
                    sessionId: this.getOrSetSessionId()
                };
                this.sendIframeMessage(iframeRef, updateMessage);
            },

            // PID-145: coalesce sendOnePayTotalAmount + sendOnePayAmount into a single
            // updateAmount/updateTotalAmount handle call on the UMD path. Widget templates
            // emit both calls adjacent on every form-input change; a microtask defers the
            // handle calls until after both have landed, so order, pairing, or missing
            // members no longer matter — the flush always uses the latest stashed values.
            // Legacy iframe path is unaffected (each send* still posts its own message).
            _scheduleAmountFlush: function() {
                if (!Bloomerang.UseOnePayCheckoutUmd) return;
                if (this._amountFlushScheduled) return;
                this._amountFlushScheduled = true;
                var self = this;
                Promise.resolve().then(function() {
                    self._amountFlushScheduled = false;
                    if (!self._onePayHandle || !self._onePayHandle.updateAmount || !self._onePayHandle.updateTotalAmount) return;
                    // Total-only model: Elements display amount = total (drives wallet
                    // modal so it shows what donor actually pays). Fall back to base if
                    // total was never sent. Placeholder when both are 0/undefined so the
                    // wrapper doesn't re-defer Elements.
                    var rawTotal = self._amountStateTotal;
                    var rawBase = self._amountStateBase;
                    var display = (rawTotal !== undefined) ? rawTotal : rawBase;
                    var safeDisplay = (display && display > 0) ? display : Bloomerang.Util.ONE_PAY_AMOUNT_PLACEHOLDER_CENTS;
                    self._onePayHandle.updateAmount(safeDisplay, 'usd');
                    // Symmetric dispatch (Brady review): always update totalAmount with the
                    // same value so the wrapper's effective.amount === effective.totalAmount.
                    // Under the total-only model, that's the right state — fee detail rides
                    // through CreateOnePayTempTransactionData, not the wrapper's separate
                    // feeCoverAmount channel (which is no-op'd on the UMD path). Without this,
                    // a sendOnePayAmount(base) call without a paired sendOnePayTotalAmount
                    // would leave totalAmount at the mount-time placeholder while amount=base,
                    // failing the BFF validator (totalAmount === amount when isFeeCovered=false).
                    self._onePayHandle.updateTotalAmount(safeDisplay);
                });
            },

            sendOnePayIsFeeCovered: function(isFeeCovered) {
                // PID-145 (T7 + amount-display fix): no-op on the UMD path. The wrapper's
                // separate feeCoverAmount + isFeeCovered bookkeeping conflicts with the
                // Elements display amount (Elements.options.amount = effective.amount, the
                // donation portion, not the charged total — GPay/Apple Pay modal would show
                // base instead of base+fee). UMD path uses a total-only model: the host
                // calls sendOnePayTotalAmount with the correct charge amount, which now
                // drives BOTH updateTotalAmount AND updateAmount. Fee detail flows to the
                // BE through the form `data` payload (CreateOnePayTempTransactionData) —
                // the CRM transaction record retains fee info; only the wrapper's
                // PaymentIntent BE record loses the breakdown.
                if (Bloomerang.UseOnePayCheckoutUmd) {
                    return;
                }
                const iframeRef = document.getElementById('payments-iframe');
                if (!iframeRef) {
                    console.error('[OnePayCheckout] Payments iframe not found');
                    return;
                }
                var updateMessage = {
                    type: 'IS_FEE_COVERED_UPDATE',
                    payload: {
                        isFeeCovered: isFeeCovered,
                    },
                    sessionId: this.getOrSetSessionId()
                };
                this.sendIframeMessage(iframeRef, updateMessage);
            },

            sendOnePayFeeCoveredAmount: function(feeCoverAmount) {
                // PID-145 (T7 + amount-display fix): no-op on the UMD path. Same rationale
                // as sendOnePayIsFeeCovered — the wrapper's separate feeCoverAmount channel
                // is unused on UMD; the host folds fee into the total it sends via
                // sendOnePayTotalAmount.
                if (Bloomerang.UseOnePayCheckoutUmd) {
                    return;
                }
                const iframeRef = document.getElementById('payments-iframe');
                if (!iframeRef) {
                    console.error('[OnePayCheckout] Payments iframe not found');
                    return;
                }
                var updateMessage = {
                    type: 'FEE_COVER_AMOUNT_UPDATE',
                    payload: {
                        feeCoverAmount: feeCoverAmount,
                    },
                    sessionId: this.getOrSetSessionId()
                };
                this.sendIframeMessage(iframeRef, updateMessage);
            },

            createUpdatePaymentModeMessage: function(mode, iframeRef) {
                // PID-145 (T7): direct handle call on the UMD path. Caveat F3: switching
                // 'payment' ↔ 'setup' forces a wrapper Elements remount (key = mode:onBehalfOf).
                // Whether an entered amount survives the flip is wrapper-internal — verify
                // during the T7 local-drive (qa env).
                if (Bloomerang.UseOnePayCheckoutUmd) {
                    if (this._onePayHandle && this._onePayHandle.updatePaymentMode) {
                        this._onePayHandle.updatePaymentMode(mode);
                    }
                    return;
                }
                var updateMessage = {
                    type: 'PAYMENT_MODE_UPDATE',
                    payload: {
                        mode: mode,
                    },
                    sessionId: this.getOrSetSessionId()
                };
                this.sendIframeMessage(iframeRef, updateMessage);
            },

            setIsOnePayElementLoading: function(isLoading) {
                const iframeRef = document.getElementById('payments-iframe');
                const loadingIndicator = document.getElementById('loading-indicator');
                const paymentsFrame = document.getElementById('payments-ui-iframe');
                if (isLoading) {
                    loadingIndicator.classList.remove('hidden');
                    paymentsFrame.classList.add('hidden');
                    iframeRef.style.opacity = '0';
                } else {
                    loadingIndicator.classList.add('hidden');
                    paymentsFrame.classList.remove('hidden');
                    iframeRef.style.opacity = '1';
                }
            },

            updatePaymentsFrameMargin: function() {
                const paymentsFrame = document.getElementById('payments-ui-iframe');
                const divBody = document.getElementById('content');
                if (!paymentsFrame || !divBody) return;

                const isMobile = window.innerWidth < 600;

                if (isMobile) {
                    const computedStyle = window.getComputedStyle(divBody);
                    const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;

                    // This is the parent's total content width, INCLUDING padding
                    const parentContentWidth = divBody.clientWidth;

                    // Determine the max frame width
                    const frameWidth = parentContentWidth < 360 ? parentContentWidth : 360;
                    paymentsFrame.style.width = `${frameWidth}px`;

                    // Center the frame visually: start from left padding (the real inner edge)
                    // The (parentContentWidth - frameWidth)/2 centers it in the content box (padded area)
                    // Subtract paddingLeft, because marginLeft is relative to the padded inner edge, not outer
                    const marginLeft = ((parentContentWidth - frameWidth) / 2) - paddingLeft;
                    paymentsFrame.style.marginLeft = `${marginLeft}px`;
                } else {
                    paymentsFrame.style.width = '';
                    paymentsFrame.style.marginLeft = '';
                }
            },

            createHostMessage: function() {
                return {
                    type: 'HOST_INFO',
                    payload: {
                        hostUrl: window.location.origin,
                        hostPath: window.location.pathname,
                        hostSearch: window.location.search,
                        hostHash: window.location.hash
                    },
                    sessionId: this.getOrSetSessionId()
                };
            },

            createFormConfig: function() {
                return {
                    type: 'FORM_CONFIG',
                    payload: {
                        formID: Bloomerang.OnePayPaymentElement.OnePayFormId,
                        formApiKey: Bloomerang.OnePayPaymentElement.OnePayFormApiKey,
                        'isCrmOnly': Bloomerang.OnePayPaymentElement.IsCrmOnly,
                        'currency': 'usd',
                        'storePaymentMethod': true
                    },
                    sessionId: this.getOrSetSessionId()
                };
            },

            createOnePayTheme: function() {
                return {
                    type: 'STRIPE_THEME',
                    payload: {
                        stripeAppearance: {
                            theme: 'stripe',
                            variables: {
                                colorPrimary: '#4a90e2',
                                colorBackground: '#ffffff',
                                colorText: '#333333',
                                colorDanger: '#df1b41',
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                spacingUnit: '4px',
                                borderRadius: '4px',
                            }
                        },
                        paymentElementOptions: {
                            layout: {
                                type: 'accordion',
                                defaultCollapsed: false,
                                radios: false,
                                spacedAccordionItems: true
                            },
                            stripeOptions: {
                                paymentMethodOptions: {
                                    us_bank_account: {
                                        verification_method: 'instant_or_skip',
                                    }
                                }
                            }
                        }
                    },
                    sessionId: this.getOrSetSessionId()
                };
            },
            

            handleIframeLoad: function(iframeRef) {
                if (!iframeRef?.contentWindow) {
                    console.error('[OnePayCheckout] Iframe contentWindow not available');
                    return;
                }

                this.initializeOnePayCheckoutSequence(iframeRef);
            },

            initializeOnePayCheckoutSequence: function(iframeRef) {
                try {
                    const hostMessage = this.createHostMessage();
                    const formConfig = this.createFormConfig();
                    const stripeTheme = this.createOnePayTheme();
                    
                    this.sendIframeMessage(iframeRef, hostMessage);
                    this.sendIframeMessage(iframeRef, stripeTheme);
                    this.sendIframeMessage(iframeRef, formConfig);

                } catch (error) {
                    console.error('[OnePayCheckout] Initialization error:', error);
                } finally {
                    this.setIsOnePayElementLoading(false);
                }
            },
          
            getOnePayTransactionDetails: function() {
                let transactionDetails = {
                    amount: 0,
                    feeAmount: 0
                };
                
                if (Bloomerang.OnePayPaymentElement.FormType === 'EventRegistration') {
                    transactionDetails.amount = Bloomerang.Util.getRegistrationAmount() ?? 0;
                    transactionDetails.feeAmount = Bloomerang.Util.getRegistrationTrueImpactAmount() ?? 0;
                } else {
                    transactionDetails.amount = Bloomerang.Util.getDonationAmount() ?? 0;
                    transactionDetails.feeAmount = Bloomerang.Util.calculateDonationTrueImpact() ?? 0;
                }
                
                if (Bloomerang.Data.Donation.trueImpactUsed)
                    transactionDetails.feeAmount = Math.round(this.calculateTrueImpactForOnePay(transactionDetails.amount) * 100);
                else
                    transactionDetails.feeAmount = 0;
                
                return transactionDetails;
            },

            // PID-221: map the CRM constituent record (Bloomerang.Data.Account) to the
            // one-pay-checkout DonorDetails shape (address*-prefixed keys, 1:1 with the
            // Payments API V2 StripeDonorInfo) for Stripe Customer enrichment. Public forms
            // enter the donor live, so the host pushes this via handle.updateDonor(...) right
            // before startPayment() — mirrors the legacy iframe's billing-details timing.
            // Best-effort: any missing field is omitted; any throw yields undefined so a
            // mapping error can NEVER block checkout. accountNumber is not collected on
            // public forms, so it's omitted. Returns undefined when nothing is populated, so
            // updateDonor(undefined) clears rather than sending an empty donor object.
            buildOnePayDonor: function () {
                try {
                    var account = Bloomerang.Data.Account;
                    if (!account) {
                        return undefined;
                    }
                    var donor = {};

                    if (account.Type === "Organization") {
                        if (account.FullName) {
                            donor.fullName = account.FullName;
                        }
                    } else {
                        var name = ((account.FirstName || "") + " " + (account.LastName || "")).trim();
                        if (name) {
                            donor.fullName = name;
                        }
                    }

                    if (account.PrimaryEmail && account.PrimaryEmail.Value) {
                        donor.email = account.PrimaryEmail.Value;
                    }
                    if (account.PrimaryPhone && account.PrimaryPhone.Number) {
                        donor.phone = account.PrimaryPhone.Number;
                    }

                    if (account.Address) {
                        // Guard the type: Bloomerang.Util.splitNewLines calls .indexOf on its arg
                        // and would throw on a truthy non-string Street. A throw here is caught by
                        // the outer try/catch, which would drop the ENTIRE donor (name/email/phone
                        // too), not just the address — so guard narrowly (mirrors the native-billing
                        // path at buildDonorBilling).
                        if (typeof account.Address.Street === "string" && account.Address.Street) {
                            var streetSplit = Bloomerang.Util.splitNewLines(account.Address.Street);
                            if (streetSplit[0]) {
                                donor.addressLine1 = streetSplit[0];
                            }
                            if (streetSplit.length > 1 && streetSplit[1]) {
                                donor.addressLine2 = streetSplit[1];
                            }
                        }
                        if (account.Address.City) {
                            donor.addressCity = account.Address.City;
                        }
                        if (account.Address.State) {
                            donor.addressState = account.Address.State;
                        }
                        if (account.Address.PostalCode) {
                            donor.addressPostalCode = account.Address.PostalCode;
                        }
                        if (account.Address.Country) {
                            donor.addressCountry = account.Address.Country;
                        }
                    }

                    return Object.keys(donor).length > 0 ? donor : undefined;
                } catch (e) {
                    console.warn('[OnePayCheckout] buildOnePayDonor failed; continuing without donor enrichment.', e);
                    return undefined;
                }
            },

            processOnePayCheckout: function(data, callback) {
                // PID-145 (T8): UMD path takes precedence over the legacy iframe path.
                // The donor's submit click reaches here through Bloomerang.Api → form
                // handlers; we route to the captured OnePayCheckoutHandle and let the
                // bridge callbacks complete the flow.
                if (Bloomerang.UseOnePayCheckoutUmd) {
                    if (this._onePayInFlight) {
                        // F8 in-flight guard: a double-click or stuck submit reaching here
                        // again before the prior payment resolves would double-charge if we
                        // let it through. Drop and log.
                        console.warn('[OnePayCheckout] Submit already in flight; ignoring duplicate.');
                        return;
                    }
                    if (!this._onePayReady) {
                        // F4 primary gate: the push signal from onLoad. handle.isReady()
                        // updates in a post-commit useEffect and can be stale within the
                        // same tick (e.g. donor enters amount → Elements un-defer → clicks).
                        console.error('[OnePayCheckout] Submit before Stripe Elements ready.');
                        if (callback) callback({ error: { message: 'Payment form is still loading. Please try again in a moment.' } });
                        return;
                    }
                    if (!this._onePayHandle || typeof this._onePayHandle.startPayment !== 'function') {
                        console.error('[OnePayCheckout] OnePay handle unavailable at submit.');
                        if (callback) callback({ error: { message: 'Payment form initialization failed. Please refresh and try again.' } });
                        return;
                    }
                    if (this._onePayHandle.isReady && !this._onePayHandle.isReady()) {
                        // Secondary belt-and-suspenders. Should rarely trip given the
                        // onLoad signal already fired.
                        console.warn('[OnePayCheckout] handle.isReady() false despite onLoad fired; aborting.');
                        if (callback) callback({ error: { message: 'Payment form is still loading. Please try again.' } });
                        return;
                    }

                    this._onePayPendingCheckout = { data: data, callback: callback };
                    this._onePayInFlight = true;
                    try {
                        // PID-221: enrich the Stripe Customer with the constituent record.
                        // Public forms enter the donor live, so push it through the handle
                        // immediately before startPayment (the override wins over any donor
                        // prop; undefined clears). Guarded on the method's presence so an
                        // older vendored UMD without updateDonor is a no-op, and wrapped so
                        // enrichment can never block the payment.
                        if (typeof this._onePayHandle.updateDonor === 'function') {
                            try {
                                this._onePayHandle.updateDonor(this.buildOnePayDonor());
                            } catch (donorErr) {
                                console.warn('[OnePayCheckout] updateDonor failed; continuing without donor enrichment.', donorErr);
                            }
                        }
                        this._onePayHandle.startPayment();
                    } catch (e) {
                        this._onePayInFlight = false;
                        this._onePayPendingCheckout = null;
                        console.error('[OnePayCheckout] startPayment threw:', e);
                        if (callback) callback({ error: e });
                    }
                    return;
                }

                if (!Bloomerang.UseOnePayCheckout) {
                    return;
                }

                const bankValidationErrorMessage = "The payment method's banking details failed validation. Please check the account and routing numbers provided.";
                const iframeRef = document.getElementById('payments-iframe');
                const paymentMessage = {
                    type: 'START_PAYMENT',
                    sessionId: this.getOrSetSessionId()
                };

                // Forward donor record before START_PAYMENT so the iframe enriches the Stripe
                // Customer when it creates the intent (postMessage to the same iframe is ordered).
                // Best-effort: a failure here must never block the donation, so swallow any error
                // and let START_PAYMENT proceed (mirrors the React OnePayCheckoutComponent effect).
                try {
                    this.sendOnePayBillingDetails(iframeRef);
                } catch (e) {
                    console.error('[OnePayCheckout] Donor enrichment failed (non-fatal):', e);
                }

                this.sendIframeMessage(iframeRef, paymentMessage, {
                    responseType: 'PAYMENT_RESPONSE',
                    onSuccess: (responsePayload) => {
                        this.createOnePayTempTransactionData(data, responsePayload, callback);
                    },
                    onError: (error) => {
                        Bloomerang.Data.DigitalWallet = "";
                        console.error('No response or error from iframe:', error);
                        const callbackError = error.code === "payment_method_skip_verification_failed" && error.message !== bankValidationErrorMessage
                            ? { ...error, message: bankValidationErrorMessage }
                            : error;
                        callback({ error: callbackError });
                    }
                });
            },
            
            getOnePayFormConfiguration: function() {
                return new Promise((resolve, reject) => {
                  try {
                        if (!Bloomerang.OnePayPaymentElement ||
                          !Bloomerang.OnePayPaymentElement.OnePayFormId ||
                          !Bloomerang.OnePayPaymentElement.OnePayFormApiKey ||
                          !Bloomerang.OnePayPaymentElement.TransactionFeeFormula ||
                          !Bloomerang.OnePayPaymentElement.TransactionFeeDetails ||
                          !Bloomerang.OnePayPaymentElement.FormType ||
                          Bloomerang.OnePayPaymentElement.IsCrmOnly === null ||
                          typeof Bloomerang.OnePayPaymentElement.IsCrmOnly === 'undefined') {
                            Bloomerang.Api._post(
                              "v1/OnePay/FormConfiguration",
                              Bloomerang.Data.WidgetIds.Donation,
                              ((response) => {
                                  if (!response.IsSuccess) {
                                      console.error("[OnePayCheckout] Failed to fetch form configuration:", response.Message);
                                      Bloomerang.Api.OnError({IsSuccess: false, Message: response.Message, Id: 0});
                                      reject();
                                  } else {
                                      Bloomerang.OnePayPaymentElement = {
                                          OnePayFormId: response.result.OnePayFormId,
                                          OnePayFormApiKey: response.result.OnePayFormApiKey,
                                          TransactionFeeDetails: response.result.TransactionFeeDetails,
                                          TransactionFeeFormula: response.result.TransactionFeeFormula,
                                          FormType: response.result.FormType,
                                          IsCrmOnly: response.result.IsCrmOnly
                                      };
                                      resolve();
                                  }
                              })  /* success */,
                              undefined /* error */,
                              true /* onSubmitCalled */);
                        }
                        else {
                            resolve();
                        }
                  } catch (error) {
                      console.error("[OnePayCheckout] Failed to fetch form configuration:", error);
                      Bloomerang.Api.OnError({IsSuccess: false, Message: (error && error.message) || "Failed to fetch form configuration", Id: 0});
                      reject(error); // Reject the promise if an error occurs
                  }
                });
            },

            createOnePayTempTransactionData: function(data, responsePayload, callback) {
                // PID-145 (Dustin review): secondary defense-in-depth guard. Layer 1 lives in
                // handleOnePayBridgeResponse, but this function is ALSO called from the legacy
                // iframe path's processStripePaymentElement (~line 1978) which forwards
                // responsePayload verbatim from a postMessage. Guarding the deref here protects
                // both callers from a malformed payload throwing past the callback.
                if (!responsePayload || !responsePayload.transactionId) {
                    console.error('[OnePayCheckout] createOnePayTempTransactionData called with malformed payload', responsePayload);
                    if (callback) callback({ error: { message: 'Payment may have completed but could not be recorded. Please contact support before retrying.' } });
                    return;
                }
                const widgetId = Bloomerang.Util.isRecurringDonation() ? Bloomerang.Data.RecurringDonation.WidgetId : Bloomerang.Data.Donation.WidgetId;
                const ApiOnePayTempDataModel = {
                    WidgetId: widgetId,
                    OnePayTransactionId: responsePayload.transactionId,
                    Data: JSON.stringify(data)
                };

                Bloomerang.Api._post(
                  "v1/OnePay/CreateOnePayTempTransactionData",
                  ApiOnePayTempDataModel,
                  ((response) => {
                      if(!response.IsSuccess) {
                          callback({error: response.Message});
                      } else {
                          callback({error: null});
                      }
                      window.removeEventListener('resize', () => this.updatePaymentsFrameMargin());
                      window.removeEventListener('DOMContentLoaded', () => this.updatePaymentsFrameMargin());
                  })  /* success */,
                  undefined /* error */,
                  true /* onSubmitCalled */);
            },

            // Where all of PaymentElement stuff are happening
            processStripePaymentElement: function(donationData, callback) {
                if (!Bloomerang.UsePaymentElement && !Bloomerang.StripePaymentElement.Elements) {
                    return;
                }

                // PID-566: submit-time guard for the whole page life. The destroy-watchdog only
                // covers the ~10s window after the initial mount (plus a window re-armed after a
                // failed submit), so an external destroy that happens later — a slow second-widget
                // load chain, the donor clicking another widget, or a prior submit that failed on a
                // transport/confirm path that never re-armed — can leave the active Payment Element
                // destroyed with an empty card field. Catch it here before we try to submit a
                // destroyed/blank element: recover the element and return a re-enter-card error so
                // the donor sees a clear prompt instead of a silent failure. No-op for forms with no
                // snapshot (e.g. self-hosted before useDonationId), matching the watchdog's scope.
                if (Bloomerang.Util.isActivePaymentElementDestroyed &&
                    Bloomerang.Util.isActivePaymentElementDestroyed()) {
                    Bloomerang.Util.recoverPaymentElementIfDestroyed &&
                        Bloomerang.Util.recoverPaymentElementIfDestroyed();
                    callback && callback({ error: { message:
                        'Your payment details need to be re-entered. Please re-enter your card information and try again.' } });
                    return;
                }

                // PID-566: the watchdog is stopped just below for the duration of the
                // submit, and its `watchdogHasEverStarted` latch keeps it from restarting on its own.
                // A failed/cancelled submit leaves the donor on the form, so wrap the caller's
                // callback and re-arm the watchdog on any error result. Success results navigate
                // away, so they intentionally do not re-arm. Preserves the callback's `this`,
                // arguments, and return value.
                var originalCallback = callback;
                callback = function(result) {
                    if (result && result.error) {
                        Bloomerang.Util.rearmPaymentElementWatchdog && Bloomerang.Util.rearmPaymentElementWatchdog();
                    }
                    return originalCallback ? originalCallback.apply(this, arguments) : undefined;
                };

                // PID-186: cancel any pending debounced re-mount before submitting. confirmPayment
                // reads Bloomerang.StripePaymentElement.Elements/RecurringElements late (after the
                // server round-trip), so a re-mount firing mid-submit would swap in a new, blank,
                // un-submit()ed element and break confirmPayment. The form is hidden during
                // processing, so nothing reschedules these. Covers one-time, recurring, and event reg.
                clearTimeout(Bloomerang._oneTimeRemountDebounce);
                clearTimeout(Bloomerang._eventRegRemountDebounce);
                // PID-566: same race hazard for the destroy-watchdog — if a watchdog tick
                // fired between elements.submit() and confirmPayment() it would call
                // mountStripePaymentElements and swap in an un-submit()ed Elements group,
                // breaking the in-flight submit. Cancel any active watchdogs before we start.
                Bloomerang.Util.stopPaymentElementWatchdogs && Bloomerang.Util.stopPaymentElementWatchdogs();

                let additionalData = {};
                additionalData.name = Bloomerang.Data.Account.Type === "Organization" ?
                    Bloomerang.Data.Account.FullName : 
                    Bloomerang.Data.Account.FirstName + " " + Bloomerang.Data.Account.LastName;
                if (Bloomerang.Data.Account.Address) {
                    additionalData.address = {};

                    if (Bloomerang.Data.Account.Address.Street) {
                        var streetSplit = Bloomerang.Util.splitNewLines(Bloomerang.Data.Account.Address.Street);
                        additionalData.address.line1 = streetSplit[0];
                        if (streetSplit.length > 1)
                            additionalData.address.line2 = streetSplit[1];
                    }
                    if (Bloomerang.Data.Account.Address.City) {
                        additionalData.address.city = Bloomerang.Data.Account.Address.City;
                    }
                    if (Bloomerang.Data.Account.Address.State) {
                        additionalData.address.state = Bloomerang.Data.Account.Address.State;
                    }
                    if (Bloomerang.Data.Account.Address.PostalCode) {
                        additionalData.address.postal_code = Bloomerang.Data.Account.Address.PostalCode;
                    }
                    if (Bloomerang.Data.Account.Address.Country) {
                        additionalData.address.country = Bloomerang.Data.Account.Address.Country;
                    }
                }
                
                let confirmDonationPaymentIntent = async (response) => {
                    // PID-186: deferred-intent flow. elements.submit() already ran synchronously in
                    // the click gesture (see the one-time dispatch below) so Apple/Google Pay could
                    // open their sheet; the PaymentIntent was just created here, so we only confirm.
                    // Stash the new client secret so the connection-error retry path in
                    // VerifyConfirmPaymentResponse can re-retrieve the intent.
                    Bloomerang.StripePaymentElement.PaymentIntentId = response.Data.PaymentIntentId;
                    Bloomerang.StripePaymentElement.ClientSecret = response.Data.ClientSecret;

                    // check if we have postal_code set
                    let addressObj = {
                        country: additionalData.address.country,
                        postal_code: additionalData.address.postal_code ?? null
                    };

                    await Bloomerang.Util.Stripe.confirmPayment({
                        elements: Bloomerang.StripePaymentElement.Elements,
                        clientSecret: response.Data.ClientSecret,
                        confirmParams: {
                            return_url: window.location.href,
                            payment_method_data: {
                                billing_details: {
                                    address: addressObj
                                }
                            }
                        },
                        redirect: "if_required"
                    }).then(res => VerifyConfirmPaymentResponse(res, false));
                }
                
                let confirmRecurringPaymentIntent = async (response) => {
                    Bloomerang.StripePaymentElement.RecurringPaymentIntentId = response.Data.PaymentIntentId;
                    Bloomerang.StripePaymentElement.RecurringClientSecret = response.Data.ClientSecret;
                    Bloomerang.StripePaymentElement.RecurringCustomerId = response.Data.CustomerId;
                    
                    // PID-186: RecurringElements.submit() now runs in the click gesture (see the
                    // recurring dispatch below); the intent was just created, so only confirm here.
                    {
                        // check if we have postal_code set
                        let addressObj = {
                            country: additionalData.address.country,
                            postal_code: additionalData.address.postal_code ?? null
                        };
                        
                        await Bloomerang.Util.Stripe.confirmPayment({
                            elements: Bloomerang.StripePaymentElement.RecurringElements,
                            clientSecret: response.Data.ClientSecret,
                            confirmParams: {
                                return_url: window.location.href,
                                payment_method_data: {
                                    billing_details: {
                                        address: addressObj
                                    }
                                }
                            },
                            redirect: "if_required"
                        }).then(res => VerifyConfirmPaymentResponse(res, true));
                    }
                }
                
                let VerifyConfirmPaymentResponse = async(confirmPaymentResponse, isRecurring) => {
                    if (confirmPaymentResponse.error) {
                        if(confirmPaymentResponse.error.type === 'api_connection_error') {
                            // We retrieve the intent and check if it actually went through
                            // We do this double check because there are weird situations with network change errors
                            // that return an error on confirm, but actually go through on Stripe
                            let response = await Bloomerang.Util.Stripe.retrievePaymentIntent(
                                isRecurring ? Bloomerang.StripePaymentElement.RecurringClientSecret : Bloomerang.StripePaymentElement.ClientSecret);

                            // In case we have an actual network error we treat it as such
                            if(response.error) {
                                callback(response.error.type === 'api_connection_error' ?
                                    {error: { message: 'We are experiencing issues connecting to our payments provider. You may have been charged.' }} :
                                    {error: response.error});
                            } else {
                                if(response.paymentIntent.status === 'requires_payment_method' ||
                                    response.paymentIntent.status === 'canceled') {
                                    callback({error: response.paymentIntent.cancellation_reason ?? { message: 'Missing Payment Method' } });
                                    return;
                                }

                                // Means the intent went through
                                if (response.paymentIntent.status === 'succeeded') {
                                    callback({error: null});
                                }
                            }
                        }
                        // We just have a normal error here so handle accordingly
                        else {
                            callback({error: confirmPaymentResponse.error});
                        }
                    }
                    else {
                        if(confirmPaymentResponse.paymentIntent.status === 'requires_payment_method' ||
                            confirmPaymentResponse.paymentIntent.status === 'canceled') {
                            callback({error: confirmPaymentResponse.paymentIntent.cancellation_reason ?? { message: 'Missing Payment Method' } });
                            return;
                        }

                        if (confirmPaymentResponse.paymentIntent && confirmPaymentResponse.paymentIntent.status === 'succeeded')
                            callback({error: null});
                    }
                }
                
                let createPaymentMethodForCustomer = async(response) => {
                    Bloomerang.StripePaymentElement.RecurringCustomerId = response.Data.CustomerId;

                    // PID-186: RecurringElements.submit() now runs in the click gesture (see the
                    // recurring dispatch below); proceed straight to creating the payment method.
                    {
                        // Create payment method
                        if(!Bloomerang.StripePaymentElement.RecurringPaymentMethodToken) {
                            //console.log('Creating Payment Method');

                            // check if we have postal_code set
                            let addressObj = {
                                country: additionalData.address.country,
                                postal_code: additionalData.address.postal_code ?? null
                            };
                            
                            let options = {
                                elements: Bloomerang.StripePaymentElement.RecurringElements,
                                params: {
                                    billing_details: {
                                        address: addressObj
                                    }
                                }
                            };

                            let paymentMethodResponse = await Bloomerang.Util.Stripe.createPaymentMethod(options);
                            if (paymentMethodResponse.error)
                                callback({error: paymentMethodResponse.error});
                            else {
                                //console.log('Attaching payment method to customer', paymentMethodResponse);

                                // We set the correct customer id
                                donationData['StripeCustomerTokenId'] = Bloomerang.StripePaymentElement.RecurringCustomerId;
                                
                                let param = {
                                    DonationData: donationData,
                                    PaymentMethodTokenId: paymentMethodResponse.paymentMethod.id
                                };
                                
                                Bloomerang.Api._post(
                                    "v1/StripePaymentElement/AttachPaymentMethodToCustomer",
                                    param,
                                    ((response) => {
                                        if(!response.IsSuccess) {
                                            callback({error: response.Message});
                                        } else {
                                            callback({error: null});
                                        }
                                    })  /* success */,
                                    undefined /* error */,
                                    true /* onSubmitCalled */);
                            }
                        }
                        // Payment method already created so retry attach
                        else {
                            //console.log('Attaching payment method to customer');

                            Bloomerang.Api._post(
                                "v1/StripePaymentElement/AttachPaymentMethodToCustomer",
                                { PaymentMethodTokenId: paymentMethodResponse.id, CustomerId: Bloomerang.StripePaymentElement.RecurringCustomerId },
                                ((response) => {
                                    if(!response.IsSuccess) {
                                        callback({error: response.Message});
                                    } else {
                                        callback({error: null});
                                    }
                                })  /* success */,
                                undefined /* error */,
                                true /* onSubmitCalled */);
                        }   
                    }
                }
                
                // Check if what type of Donation we're doing
                if(!Bloomerang.Util.isRecurringDonation()) {
                    // PID-186: deferred-intent flow. Set the amount and call elements.submit()
                    // synchronously inside the click gesture so Apple/Google Pay can open their
                    // sheet (this is the fix — submit() must ride the user activation, before any
                    // async). THEN create the PaymentIntent + customer and confirm. Mirrors the
                    // recurring amount/update + submit handling.
                    let newOptions = {
                        amount: parseFloat((donationData['Donation'].Amount * 100).toFixed(2))
                    };
                    // PID-186: bind the wallet to the connected account (matches the server PI's
                    // on_behalf_of). Set here at submit because StripeAccountId isn't populated at mount.
                    if (Bloomerang.donationFormStripeOnBehalfOfFlag)
                        newOptions.onBehalfOf = Bloomerang.StripePaymentElement?.StripeAccountId ?? Bloomerang.StripeAccountId;
                    Bloomerang.StripePaymentElement.Elements.update(newOptions);

                    Bloomerang.StripePaymentElement.Elements.submit().then(function(submitResponse) {
                        if (submitResponse.error) {
                            callback({ error: submitResponse.error });
                            return;
                        }
                        Bloomerang.Api._post(
                            "v1/StripePaymentElement/CreateDonationIntentAndCustomer",
                            donationData,
                            confirmDonationPaymentIntent  /* success */,
                            undefined /* error */,
                            true /* onSubmitCalled */);
                    });
                }
                else {
                    // Update options to reflect new amount
                    let newOptions = {
                        amount: parseFloat((donationData['RecurringDonation'].Amount * 100).toFixed(2))
                    };
                    // PID-186: bind the wallet to the connected account (matches the server PI's on_behalf_of).
                    if (Bloomerang.donationFormStripeOnBehalfOfFlag)
                        newOptions.onBehalfOf = Bloomerang.StripePaymentElement?.StripeAccountId ?? Bloomerang.StripeAccountId;
                    Bloomerang.StripePaymentElement.RecurringElements.update(newOptions);
                    
                    // PID-186: submit() must ride the user gesture so Apple/Google Pay can open
                    // their sheet; call it here (before the async intent/customer calls), then branch.
                    Bloomerang.StripePaymentElement.RecurringElements.submit().then(function(submitResponse) {
                        if (submitResponse.error) {
                            callback({ error: submitResponse.error });
                            return;
                        }

                        let isRDDueToday = Bloomerang.Util.isRecurringInitialPaymentDueToday();
                    
                    if(isRDDueToday) {
                        if(!Bloomerang.StripePaymentElement.RecurringClientSecret ||
                           !Bloomerang.StripePaymentElement.RecurringPaymentIntentId ||
                           !Bloomerang.StripePaymentElement.RecurringCustomerId) {
                            Bloomerang.Api._post(
                                "v1/StripePaymentElement/CreateRecurringPaymentIntentAndCustomer",
                                donationData,
                                confirmRecurringPaymentIntent  /* success */,
                                undefined /* error */,
                                true /* onSubmitCalled */);
                        } 
                        else {
                            Bloomerang.Api._post(
                                "v1/StripePaymentElement/UpdateRecurringIntentAndCustomer",
                                donationData,
                                confirmRecurringPaymentIntent  /* success */,
                                undefined /* error */,
                                true /* onSubmitCalled */);
                        }
                    } 
                    // We're processing a recurring for future date
                    else {
                        
                        if(!Bloomerang.StripePaymentElement.RecurringCustomerId) {
                            // Create the customer
                            Bloomerang.Api._post(
                                "v1/StripePaymentElement/CreateRecurringCustomer",
                                donationData,
                                createPaymentMethodForCustomer  /* success */,
                                undefined /* error */,
                                true /* onSubmitCalled */);
                        }
                        else {
                            let param = {
                                DonationData: donationData,
                                CustomerId: Bloomerang.StripePaymentElement.RecurringCustomerId
                            }
                            
                            // Update the customer
                            Bloomerang.Api._post(
                                "v1/StripePaymentElement/UpdateRecurringCustomer",
                                param,
                                createPaymentMethodForCustomer  /* success */,
                                undefined /* error */,
                                true /* onSubmitCalled */);
                        }
                    }
                    });
                }
            },

            //Helper to calculate paypal/venmo fee amount
            calculatePayPalVenmoFee: function (amount) {
                const transactionFeeRate = Bloomerang.transactionFeeRatePayPal ?? 0.032;
                const transactionFee = Bloomerang.transactionFeePayPal ?? 0.49;
                return (Math.floor((amount * transactionFeeRate + transactionFee) * 100)/100).toFixed(2);
            },
            
            // Mounting the paypal and venmo elements and also
            // Setting up options for each action made on the buttons
            mountPayPalVenmoElements: function() {
                // This variable is set from WidgetJavascriptRenderer.GeneratePayPalScript()
                if(!Bloomerang.Data.PayPal.IsPayPalVenmoEnabled)
                    return;

                Bloomerang.Data.PayPal.ButtonsOptions = Bloomerang.Data.PayPal.IsPayPalPaymentMethodVaultingEnabled ? 
                    Bloomerang.Util.paypalButtonsVaultingOptions() : 
                    Bloomerang.Util.paypalButtonsDefaultOptions();
                
                // We can actually re-render buttons on the fly by using the close() and render() methods, so we assign it to a variable
                // And by doing so: Bloomerang.Util.PayPalButtons.close(); -> paypal.Buttons({options}) -> Bloomerang.Util.PayPalButtons.render('#paypal-button-container');
                Bloomerang.Data.PayPal.ButtonsObject = paypal.Buttons(Bloomerang.Data.PayPal.ButtonsOptions);
                Bloomerang.Data.PayPal.ButtonsObject.render('#paypal-button-container');

                // We'll need to hide it upon rendering since 
                // we're defaulting selection to CC or whether the flag is off
                jQuery("#donation-form #paypal-button-container").hide();
            },
            
            renderOnlyVenmo: function () {
                this.renderOnePayPalButton(false, paypal.FUNDING.VENMO);                
            },
            
            renderOnlyPayPal: function(useFutureRecurringOptions) {
                this.renderOnePayPalButton(useFutureRecurringOptions, paypal.FUNDING.PAYPAL);
            },
            
            renderOnePayPalButton: function(useFutureRecurringOptions, source) {
                if(!Bloomerang.Data.PayPal.IsPayPalVenmoEnabled)
                    return;

                Bloomerang.Data.PayPal.ButtonsObject.close();
                Bloomerang.Data.PayPal.ButtonsOptions = useFutureRecurringOptions ?
                    Bloomerang.Util.paypalButtonsFutureRecurringOptionsWithSource(source) :
                    Bloomerang.Util.paypalButtonsVaultingOptionsWithSource(source);
                Bloomerang.Data.PayPal.ButtonsObject = paypal.Buttons(Bloomerang.Data.PayPal.ButtonsOptions);
                Bloomerang.Data.PayPal.ButtonsObject.render('#paypal-button-container');
            },

            // Build the request body object when creating an order for PayPal
            createPayPalOrderBodyRequest: function() {

                // PayPal only allows up to 2 decimal places
                // RD Amount has always been evaluated as string, parse b4 applying toFixed()
                let amount = (Bloomerang.Util.isRecurringDonation() ? parseFloat(Bloomerang.Data.RecurringDonation?.Amount) : Bloomerang.Data.Donation?.Amount)
                    .toFixed(2);
                
                let feeAmount = Bloomerang.Util.calculatePayPalVenmoFee(amount);
                
                let intent = 'CAPTURE';

                // Check if vaulting is enabled and if it's a recurring donation that starts today
                let isForVaulting = Bloomerang.Data.PayPal.IsPayPalPaymentMethodVaultingEnabled &&
                    Bloomerang.Util.isRecurringDonation() &&
                    Bloomerang.Util.isRecurringInitialPaymentDueToday();
                
                // =========== PayPal Payment Method =========== //
                let payPalPaymentSourceObj = {
                    "paypal": {
                        "experience_context": {
                            "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED",
                            "payment_method_selected": "PAYPAL",
                            "brand_name": "BLOOMERANG",
                            "locale": "en-US",
                            "landing_page": "LOGIN",
                            "user_action": "PAY_NOW"
                        }
                    }
                };
                
                if(isForVaulting) {
                    
                    payPalPaymentSourceObj["paypal"]["attributes"] = {
                        "vault": {
                            "store_in_vault": "ON_SUCCESS",
                            "usage_type": "PLATFORM"
                        }
                    };
                    payPalPaymentSourceObj["paypal"]["experience_context"]["return_url"] = window.location.href;
                    payPalPaymentSourceObj["paypal"]["experience_context"]["cancel_url"] = window.location.href;
                }
                // =========== PayPal Payment Method =========== //

                // =========== Venmo Payment Method =========== //
                let venmoPaymentSourceObj = {
                    "venmo": {
                        "experience_context": {
                            "brand_name": "BLOOMERANG"
                        }
                    }
                };

                // Check if vaulting is enabled and if it's a recurring donation that starts today
                if(isForVaulting) {
                    venmoPaymentSourceObj["venmo"]["attributes"] = {
                        "vault": {
                            "store_in_vault": "ON_SUCCESS",
                            "usage_type": "PLATFORM"
                        }
                    };
                    venmoPaymentSourceObj["venmo"]["experience_context"]["return_url"] = window.location.href;
                    venmoPaymentSourceObj["venmo"]["experience_context"]["cancel_url"] = window.location.href;
                }
                // =========== Venmo Payment Method =========== //

                // Build the request body object to create an order
                return {
                    "purchase_units": [
                        {
                            "amount": {
                                "currency_code": "USD",
                                "value": amount.toString()
                            },
                            "payment_instruction": {
                                "platform_fees": [
                                    {
                                        "amount": {
                                            "currency_code": "USD",
                                            "value": feeAmount.toString()
                                        },
                                        "payee": {
                                            "merchant_id": Bloomerang.Data.PayPal.PartnerFeeId
                                        },
                                    }
                                ],
                            },
                            "payee": {
                                "merchant_id": Bloomerang.Data.PayPal.ProcessorAccountId
                            }
                        }
                    ],
                    "intent": intent,
                    "payment_source": Bloomerang.Data.PayPal.FundingSourceSelected === 'paypal' ?
                        payPalPaymentSourceObj : venmoPaymentSourceObj,
                };
            },
            
            createPayPalTempDataObject: function(paypalOrderId = null) {
                // We will need to grab the donation details to create an order via PayPal's JS SDK
                let donation = {
                    Account: Bloomerang.Data.Account,
                    Donation: Bloomerang.Data.Donation,
                    Method: Bloomerang.Data.PayPal.FundingSourceSelected,
                    InKind: Bloomerang.Data.InKind,
                    Check: Bloomerang.Data.Check,
                    FormLoadId: Bloomerang["formLoad" + Bloomerang.Data.WidgetIds.Donation],
                    WidgetId: Bloomerang.Data.WidgetIds.Donation,
                    FormUrl: window.location.href
                };
                let recurring = {
                    Account: Bloomerang.Data.Account,
                    RecurringDonation: Bloomerang.Data.RecurringDonation,
                    FormLoadId: Bloomerang["formLoad" + Bloomerang.Data.WidgetIds.Donation],
                    WidgetId: Bloomerang.Data.WidgetIds.Donation,
                    Method: Bloomerang.Data.PayPal.FundingSourceSelected,
                    FormUrl: window.location.href
                };

                let amount = (Bloomerang.Util.isRecurringDonation() ?
                    parseFloat(recurring.RecurringDonation?.Amount) : donation.Donation?.Amount).toFixed(2);

                let feeAmount = Bloomerang.Util.calculatePayPalVenmoFee(amount);

                let data = Bloomerang.Util.isRecurringDonation() ? recurring : donation;
                data = {...data, FeeAmount: feeAmount};

                return {
                    TransactionExternalId: paypalOrderId ?? "", // Placeholder to be populated at the backend after order creation
                    Data: JSON.stringify(data)
                };
            },
            
            // PID-577: resolve the Stripe Express ACH migration flag at submit time instead of reading the
            // literal baked in at render time. A self-hosted form is a frozen snapshot of that literal which
            // only the customer can refresh, so a render-time read can never reach it; a runtime read means one
            // deploy covers every form ever published. Endpoint: WebApi/Controllers/v1/StripeExpressAchFlagController.cs.
            resolveStripeExpressAchUsesPaymentIntents: function (done) {
              // Mirror the server-side isBloomerangPayments gate in PaymentScriptRenderer: only the Stripe
              // Express rail used the deprecated Tokens API, and the endpoint has no widget context to
              // apply it. Accept the rails legacy name too - isProcessorStripe notes that StripeConnect
              // is still baked into old self-hosted snippets, which are the forms this fix most needs.
              if (Bloomerang.Api.ProcessorType !== "StripeExpress"
                  && Bloomerang.Api.ProcessorType !== "StripeConnect") {
                done(false);
                return;
              }

              // Memoize per page load. Compared against undefined, NOT for truthiness: false is a valid
              // resolved value and a truthiness guard would refetch on every submit.
              if (Bloomerang.Data.StripeExpressAchUsesPaymentIntentsResolved !== undefined) {
                done(Bloomerang.Data.StripeExpressAchUsesPaymentIntentsResolved);
                return;
              }

              // _post assigns whatever payload it is handed to Bloomerang.Data.ServerModel. A donation is
              // in flight here, so save it and put it back before handing control on.
              var priorServerModel = Bloomerang.Data.ServerModel;

              function settle(achUsesPaymentIntents, resolved) {
                Bloomerang.Data.ServerModel = priorServerModel;
                // Memoize only a real answer from the endpoint. Caching a fallback would pin the rest of the
                // page load to the legacy path, so a submit after a transient blip gets a fresh attempt.
                if (resolved) {
                  Bloomerang.Data.StripeExpressAchUsesPaymentIntentsResolved = achUsesPaymentIntents;
                }
                done(achUsesPaymentIntents);
              }

              Bloomerang.Api._post(
                "v1/StripeExpressAchFlag",
                {},
                function (result) {
                  // _post only routes here when the response carried a truthy IsSuccess, so a
                  // controller-side failure envelope lands in the error handler below, not here.
                  settle(!!(result && result.StripeExpressAchUsesPaymentIntents), true /* resolved */);
                } /* success - MUST be explicit; _post defaults to Api.OnSuccess */,
                function () {
                  // Any failure - transport, timeout, or a falsy IsSuccess from the endpoint - falls back to the
                  // baked literal. That is a degraded path, not a free one: Stripe's 2026-08-06 retirement of legacy
                  // bank_account Tokens has passed, so a false or missing literal sends the donor to createToken,
                  // which may now be rejected. The memo stays unset, so the next submit re-fetches the flag.
                  settle(!!Bloomerang.Data.StripeExpressAchUsesPaymentIntents, false /* resolved */);
                } /* error - MUST be explicit; _post defaults to Api.OnError, which would show a donor a
                     payment error for nothing more than a failed flag read */,
                true /* onSubmitCalled - MUST be true; else _post re-runs OnSubmit mid-submit */,
                undefined /* widgetType - unread here; onSubmitCalled short-circuits the block that uses it */,
                true /* runAsync - the default, passed so timeoutMs lands in the right position */,
                10000 /* timeoutMs - _post defaults to 60s, far too long to stall an ACH donor on a flag read;
                         a timeout lands on the degraded baked-literal fallback above */);
            },

            makeStripeExpressEftToken: function (callback) {
              var accountHolderType, accountHolderName;
              if (Bloomerang.Data.Account.Type == "Organization") {
                accountHolderType = 'company';
                accountHolderName = Bloomerang.Data.Account.FullName;
              } else {
                accountHolderType = 'individual';
                accountHolderName = Bloomerang.Data.Account.FirstName + " " + Bloomerang.Data.Account.LastName;
              }

              // PID-577: branch on the runtime-resolved value rather than the baked literal. Everything below
              // is the unchanged PID-183 logic.
              Bloomerang.Util.resolveStripeExpressAchUsesPaymentIntents(function (achUsesPaymentIntents) {
                if (achUsesPaymentIntents) {
                  // PID-183: collect a modern us_bank_account PaymentMethod (pm_) instead of tokenizing via the
                  // deprecated bank-account Tokens API (createToken below), which Stripe retires on the same
                  // 2026-08-06 deadline as the ACH Charges API. Gated on the same flag as the CRM path (EftStore.js)
                  // and the server-side charge; the server ingests the pm_ through StripeToken.id, same as the card.
                  Bloomerang.Util.Stripe.createPaymentMethod({
                    type: "us_bank_account",
                    us_bank_account: {
                      account_number: Bloomerang.Data.Eft.AccountNumber,
                      routing_number: Bloomerang.Data.Eft.RoutingNumber,
                      account_holder_type: accountHolderType
                    },
                    billing_details: {
                      name: accountHolderName
                    }
                  }).then(callback, function (error) {
                    // PID-183: rejection handler passed as then()'s second arg (NOT a chained .catch) so it fires
                    // only on a hard promise rejection (network blip, Stripe.js not fully loaded) and does not also
                    // catch throws from callback itself (which runs the OnlineDonation POST) - a chained .catch could
                    // re-invoke callback with an error for a donation already in flight. Route the rejection through
                    // callback's existing error branch so the message shows and submit re-enables.
                    callback({ error: { message: (error && error.message) ? error.message : "We couldn't process your bank account. Please try again." } });
                  });
                  return;
                }

                var data = {
                  country: 'US',
                  currency: 'usd'
                };
                data["account_holder_type"] = accountHolderType;
                data["account_holder_name"] = accountHolderName;
                data["routing_number"] = Bloomerang.Data.Eft.RoutingNumber;
                data["account_number"] = Bloomerang.Data.Eft.AccountNumber;
                Bloomerang.Util.Stripe.createToken("bank_account", data).then(callback);
              });
            },

            makeDonation: function (data, isRecurring) {
              /* We need to call OnSubmit before sending the credit card information, because that 
                 function is what populates the Bloomerang.Data.CreditCard object with the card data */

              var submitParameter = { operation: "v1/OnlineDonation", data: data };
              var keepGoing = Bloomerang.Widget.Donation.OnSubmit(submitParameter);
              data.Method = Bloomerang.Data.Method; // If it's EFT, then the method isn't set until the form's OnSubmit is called.

              if (typeof (keepGoing) != "undefined" && !keepGoing) {
                return;
              }

              data["FormUrl"] = window.location.href;

              if (Bloomerang.Data.CaptchaResponse) {
                data["CaptchaResponse"] = Bloomerang.Data.CaptchaResponse;
              }
              
              if (Bloomerang.Data.CaptchaResponseV3) {
                  data["CaptchaResponseV3"] = Bloomerang.Data.CaptchaResponseV3;
              }
              
              if ((Bloomerang.StripePaymentElement?.StripeAccountId ?? Bloomerang.StripeAccountId) && Bloomerang.donationFormStripeOnBehalfOfFlag)
                  data["OnBehalfOfEnabled"] = true;
              else
                  data["OnBehalfOfEnabled"] = false;

              if (Bloomerang.Data.Method == "CreditCard" && Bloomerang.Data.CreditCard.SpreedlyToken) {
                data["SpreedlyToken"] = Bloomerang.Data.CreditCard.SpreedlyToken;
                Bloomerang.Api._post(
                  "v1/OnlineDonation",
                  data,
                  undefined /* success */,
                  undefined /* error */,
                  true /* onSubmitCalled */);
              } 
              else if (Bloomerang.Api.ProcessorType === "BluePay" && Bloomerang.Data.Method == "Eft") {
                Bloomerang.Util.makeBluePayToken(isRecurring,
                  function (status, response) {
                    if (response.error) {
                      Bloomerang.Api.OnError({ IsSuccess: false, Message: response.error.message, Id: 0 });
                    } else {
                      data["BluePayToken"] = response;
                      Bloomerang.Api._post(
                        "v1/OnlineDonation",
                        data,
                        undefined /* success */,
                        undefined /* error */,
                        true /* onSubmitCalled */);
                    }
                  });
              } 
              else if (Bloomerang.Api.ProcessorType === "Spreedly" && Bloomerang.Data.Method == "Eft") {
                Bloomerang.Util.makeSpreedlyToken(
                  function (status, response) {
                    if (response.error) {
                      Bloomerang.Api.OnError({ IsSuccess: false, Message: response.error.message, Id: 0 });
                    } else {
                      data["SpreedlyToken"] = response.token;
                      Bloomerang.Api._post(
                        "v1/OnlineDonation",
                        data,
                        undefined /* success */,
                        undefined /* error */,
                        true /* onSubmitCalled */);
                    }
                  });
              } 
              else if (Bloomerang.Util.isProcessorStripe()) {
                //Stripe only supports donation amounts up to 999,999.99
                if (parseFloat(data.Donation?.Amount ?? data.RecurringDonation?.Amount) >= 1000000) {
                    Bloomerang.Api.OnError({IsSuccess: false, Message: "Amount must be no more than $999,999.99", Id: 0});
                    return;
                }
                //Stripe Metadata has a limit of 500 characters per key/value pair
                if ((data.Donation?.Note.length ?? data.RecurringDonation?.Note.length) > 500) {
                    Bloomerang.Api.OnError({IsSuccess: false, Message: "Comment must be less than 500 characters.", Id: 0});
                    return;
                }  
                
                if (Bloomerang.Data.Method === "CreditCard") {
                    if(Bloomerang.UsePaymentElement) {
                        Bloomerang.Util.processStripePaymentElement(data, (response) => {
                            if (response.error)
                                Bloomerang.Api.OnError({IsSuccess: false, Message: response.error.message, Id: 0});
                            else
                                Bloomerang.Api.OnSuccess({
                                    IsSuccess: true,
                                    Message: "Thank you for your generous donation",
                                    Id: 0
                                });
                        });
                    } else {
                        Bloomerang.Util.makeStripeCreditCardToken(data, (response) => {
                            if (response.error) {
                                Bloomerang.Api.OnError({IsSuccess: false, Message: response.error.message, Id: 0});
                            } else {
                                data["StripeToken"] = response.paymentMethod;
                                Bloomerang.Api._post(
                                    "v1/OnlineDonation",
                                    data,
                                    undefined /* success */,
                                    undefined /* error */,
                                    true /* onSubmitCalled */);
                            }
                        });
                    }
                }
                else if (Bloomerang.Data.Method === "Eft") {
                  Bloomerang.Util.makeStripeExpressEftToken(
                    function (response) {
                      if (response.error) {
                        Bloomerang.Api.OnError({IsSuccess: false, Message: response.error.message, Id: 0});
                      } else {
                        // PID-183: createPaymentMethod resolves { paymentMethod }, legacy createToken resolves
                        // { token }; the server reads StripeToken.id either way.
                        data["StripeToken"] = response.paymentMethod || response.token;
                        data["Eft"] = Bloomerang.Data.Eft;
                        Bloomerang.Api._post(
                          "v1/OnlineDonation",
                          data,
                          undefined /* success */,
                          undefined /* error */,
                          true /* onSubmitCalled */);
                      }
                    }
                  );
                }
              } else if (Bloomerang.Util.isProcessorOnePay()) {
                  //Stripe only supports donation amounts up to 999,999.99
                  if (parseFloat(data.Donation?.Amount ?? data.RecurringDonation?.Amount) >= 1000000) {
                      Bloomerang.Api.OnError({IsSuccess: false, Message: "Amount must be no more than $999,999.99", Id: 0});
                      return;
                  }
                  //Stripe Metadata has a limit of 500 characters per key/value pair
                  if ((data.Donation?.Note?.length ?? data.RecurringDonation?.Note?.length) > 500) {
                      Bloomerang.Api.OnError({IsSuccess: false, Message: "Comment must be less than 500 characters.", Id: 0});
                      return;
                  }

                  Bloomerang.Util.processOnePayCheckout(data, (response) => {
                      if (response.error)
                          Bloomerang.Api.OnError({IsSuccess: false, Message: response.error.message, Id: 0});
                      else
                          Bloomerang.Api.OnSuccess({
                              IsSuccess: true,
                              Message: "Thank you for your generous donation",
                              Id: 0
                          });
                  });
              } else { // not BluePay, or not a credit card payment
                /* We DO NOT want to get credit card numbers.
                So we instead replace them with blank data. This will error out in the API and send
                them an email. Same with EFT. */
                if (Bloomerang.Data.CreditCard && Bloomerang.Data.CreditCard.Number) {
                  Bloomerang.CreditCard
                    .number("0000000000000000")
                    .expirationMonth("01")
                    .expirationYear("01")
                    .securityCode("000");
                }
                if (Bloomerang.Data.Eft && Bloomerang.Data.Eft.accountNumber) {
                  Bloomerang.Eft.accountNumber("000000000")
                    .routingNumber("000000000");
                }

                data["CreditCard"] = Bloomerang.Data.CreditCard;
                data["Eft"] = Bloomerang.Data.Eft;
                Bloomerang.Api._post(
                  "v1/OnlineDonation",
                  data,
                  undefined /* success */,
                  undefined /* error */,
                  true /* onSubmitCalled */,
                  "Donation" /* widgetType */);
              }
            },

            isCountryInEurope: function(countryCode) {
              countryCode = countryCode.toUpperCase();
              return countryCode === "AT" ||
                countryCode === "BE" ||
                countryCode === "BG" ||
                countryCode === "HR" ||
                countryCode === "CY" ||
                countryCode === "CZ" ||
                countryCode === "DK" ||
                countryCode === "EE" ||
                countryCode === "FI" ||
                countryCode === "FR" ||
                countryCode === "DE" ||
                countryCode === "GR" ||
                countryCode === "IT" ||
                countryCode === "LV" ||
                countryCode === "LT" ||
                countryCode === "LU" ||
                countryCode === "MT" ||
                countryCode === "NL" ||
                countryCode === "PL" ||
                countryCode === "PT" ||
                countryCode === "RO" ||
                countryCode === "SK" ||
                countryCode === "SI" ||
                countryCode === "ES" ||
                countryCode === "SE" ||
                countryCode === "GB" ||
                countryCode === "HU" ||
                countryCode === "IE";
            },
            
            isProcessorStripe() {
                return Bloomerang.Api.ProcessorType === "Stripe" || Bloomerang.Api.ProcessorType === "StripeExpress"
                  || Bloomerang.Api.ProcessorType === "StripeConnect"; // StripeConnect could still be passed in by old self-hosted forms
            },

            isProcessorOnePay() {
                return Bloomerang.Api.ProcessorType === "OnePay";
            },

            isRecurringDonation: function() {
                return jQuery(".donation-form #recurring").prop("checked");
            },

            isOnePayRecurringDonation: function() {
                const recurringCheckbox = jQuery("#donation-form #recurring");
                return recurringCheckbox.length > 0 ? recurringCheckbox.prop("checked") : false;
            },
            
            isRecurringInitialPaymentDueToday: function() {

                let isDue = false;

                // StartDate may be undefined when its disabled in the form settings 
                // so fallback to UTC date today which also means we charge right away
                if(!Bloomerang.Data.RecurringDonation.StartDate) {
                    Bloomerang.Data.RecurringDonation.StartDate = new Date().toISOString().split('T')[0];
                    isDue = true;
                }
                else {
                    let utcDateTodayStr = new Date().toISOString().split('T')[0];
                    let rdStartDateStr = Bloomerang.Data.RecurringDonation.StartDate;

                    // We will charge RD initial payment if:
                    // 📌 Selected start date is today for client but behind UTC date today
                    //    - meaning we need to charge right away to avoid waiting next month
                    // 📌 Selected start date is equal to UTC date today
                    isDue =
                        new Date(rdStartDateStr) < new Date(utcDateTodayStr) ||
                        rdStartDateStr === utcDateTodayStr;

                    // In the instance where the selected start date is today for client but ahead of UTC date today
                    // We treat it as future payment and our nightly jobs will pick it up and charge accordingly
                }

                return isDue;
            },
            
            paypalButtonsDefaultOptions: function() {
                return {
                    createOrder: function(data, actions) {
                        // PDX-91: capture is performed server-side with an FSAT to avoid LSAT
                        // permission_denied failures from actions.order.capture(). createOrder is
                        // routed through the backend for the same reason — keeps the auth model
                        // consistent across order create + capture.

                        // OnSubmit populates the donation data we then read into the order body.
                        Bloomerang.Widget.Donation.OnSubmit();

                        let ApiPayPalOrderRequestTempData = {
                            OrderBodyRequest: Bloomerang.Util.createPayPalOrderBodyRequest(),
                            TransactionTempData: Bloomerang.Util.createPayPalTempDataObject(),
                            IsRecurring: Bloomerang.Util.isRecurringDonation()
                        }

                        let uri = Bloomerang.Util.buildUri('v1/paypal/CreateOrder');

                        return fetch(uri, {
                            method: 'POST',
                            body: JSON.stringify(ApiPayPalOrderRequestTempData),
                            headers: {
                                'Content-Type': 'application/json; charset=UTF-8'
                            },
                            mode: 'cors'
                        }).then((response) => {
                            return response.json();
                        }).then((response) => {
                            if(response.IsSuccess)
                                return response.Data;
                            else
                                throw new Error(response.Message);
                        });
                    },
                    onApprove: function(data, actions) {
                        let uri = Bloomerang.Util.buildUri(`v1/paypal/CaptureOrder/${data.orderID}`);

                        return fetch(uri, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json; charset=UTF-8'
                            },
                            mode: 'cors'
                        }).then((response) => {
                            return response.json();
                        }).then((response) => {
                            if(response.IsSuccess)
                                Bloomerang.Api.OnSuccess({
                                    IsSuccess: true,
                                    Message: "Thank you for your generous donation",
                                    Id: 0
                                });
                            else
                                throw new Error(response.Message);
                        });
                    },
                    onCancel: function(data, actions) {
                        Bloomerang.Api.OnError({IsSuccess: false, Message: 'Payment Cancelled', Id: 0});
                    },
                    onError: function(data, actions) {
                        // TODO: We'll have to handle this correctly and show a 'more user friendly' message
                        Bloomerang.Api.OnError({IsSuccess: false, Message: 'Payment Failed', Id: 0});
                    },
                    onClick: function(data, actions) {
                        let formIsValid = jQuery("#donation-form").valid();

                        if(formIsValid) {
                            Bloomerang.Data.PayPal.FundingSourceSelected = data.fundingSource;

                            // Display processing page
                            let processingMessage = jQuery("#donation-processing-container");
                            processingMessage.show();
                            jQuery("#donation-form-container").hide();
                            Bloomerang.scrollToElement(processingMessage);

                            return true;
                        }

                        Bloomerang.scrollToElement(jQuery("#donation-form-container label.error")
                            .not(":hidden")
                            .first()
                            .parent());

                        return false;
                    },
                    onInit: function(data, actions) {
                    },
                    style: {
                        layout: 'vertical',
                        shape: 'pill'
                    }
                };
            },

            paypalButtonsVaultingOptions: function() {
                return {
                    createOrder: function(data, actions) {
                        // We'll need to call submit here to populate the donation data
                        Bloomerang.Widget.Donation.OnSubmit();

                        let ApiPayPalOrderRequestTempData = {
                            OrderBodyRequest: Bloomerang.Util.createPayPalOrderBodyRequest(),
                            TransactionTempData: Bloomerang.Util.createPayPalTempDataObject(),
                            IsRecurring: Bloomerang.Util.isRecurringDonation()
                        }

                        // Build POST uri
                        let uri = Bloomerang.Util.buildUri('v1/paypal/CreateOrder');

                        // console.log('Creating Order');

                        return fetch(uri, {
                            method: 'POST',
                            body: JSON.stringify(ApiPayPalOrderRequestTempData),
                            headers: {
                                'Content-Type': 'application/json; charset=UTF-8'
                            },
                            mode: 'cors'
                        }).then((response) => {
                            return response.json();
                        }).then((response) => {
                            if(response.IsSuccess)
                                return response.Data;
                            else 
                                throw new Error(response.Message);
                        });
                    },
                    onApprove: function(data, actions) {

                        // Build POST uri
                        let uri = Bloomerang.Util.buildUri(`v1/paypal/CaptureOrder/${data.orderID}`);

                        // console.log('Capturing Order');

                        return fetch(uri, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json; charset=UTF-8'
                            },
                            mode: 'cors'
                        }).then((response) => {
                            return response.json();
                        }).then((response) => {
                            if(response.IsSuccess)
                                Bloomerang.Api.OnSuccess({
                                    IsSuccess: true,
                                    Message: "Thank you for your generous donation",
                                    Id: 0
                                });
                            else
                                throw new Error(response.Message);
                        });
                    },
                    onCancel: function(data, actions) {
                        Bloomerang.Api.OnError({IsSuccess: false, Message: 'Payment Cancelled', Id: 0});
                    },
                    onError: function(data, actions) {
                        Bloomerang.Api.OnError({IsSuccess: false, Message: 'Payment Failed', Id: 0});
                    },
                    onClick: function(data, actions) {
                        let formIsValid = jQuery("#donation-form").valid();

                        if(formIsValid) {
                            Bloomerang.Data.PayPal.FundingSourceSelected = data.fundingSource;

                            // Display processing page
                            let processingMessage = jQuery("#donation-processing-container");
                            processingMessage.show();
                            jQuery("#donation-form-container").hide();
                            Bloomerang.scrollToElement(processingMessage);

                            return true;
                        }

                        Bloomerang.scrollToElement(jQuery("#donation-form-container label.error")
                            .not(":hidden")
                            .first()
                            .parent());

                        return false;
                    },
                    onInit: function(data, actions) {
                    },
                    style: {
                        layout: 'vertical',
                        shape: 'pill'
                    }
                };
            },

            paypalButtonsVaultingOptionsWithSource: function(source) {
                return {
                    createOrder: function(data, actions) {
                        // We'll need to call submit here to populate the donation data
                        Bloomerang.Widget.Donation.OnSubmit();

                        let ApiPayPalOrderRequestTempData = {
                            OrderBodyRequest: Bloomerang.Util.createPayPalOrderBodyRequest(),
                            TransactionTempData: Bloomerang.Util.createPayPalTempDataObject(),
                            IsRecurring: Bloomerang.Util.isRecurringDonation()
                        }

                        // Build POST uri
                        let uri = Bloomerang.Util.buildUri('v1/paypal/CreateOrder');

                        return fetch(uri, {
                            method: 'POST',
                            body: JSON.stringify(ApiPayPalOrderRequestTempData),
                            headers: {
                                'Content-Type': 'application/json; charset=UTF-8'
                            },
                            mode: 'cors'
                        }).then((response) => {
                            return response.json();
                        }).then((response) => {
                            if(response.IsSuccess)
                                return response.Data;
                            else
                                throw new Error(response.Message);
                        });
                    },
                    onApprove: function(data, actions) {

                        // Build POST uri
                        let uri = Bloomerang.Util.buildUri(`v1/paypal/CaptureOrder/${data.orderID}`);

                        return fetch(uri, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json; charset=UTF-8'
                            },
                            mode: 'cors'
                        }).then((response) => {
                            return response.json();
                        }).then((response) => {
                            if(response.IsSuccess)
                                Bloomerang.Api.OnSuccess({
                                    IsSuccess: true,
                                    Message: "Thank you for your generous donation",
                                    Id: 0
                                });
                            else
                                throw new Error(response.Message);
                        });
                    },
                    onCancel: function(data, actions) {
                        Bloomerang.Api.OnError({IsSuccess: false, Message: 'Payment Cancelled', Id: 0});
                    },
                    onError: function(data, actions) {
                        Bloomerang.Api.OnError({IsSuccess: false, Message: 'Payment Failed', Id: 0});
                    },
                    onClick: function(data, actions) {
                        let formIsValid = jQuery("#donation-form").valid();

                        if(formIsValid) {
                            Bloomerang.Data.PayPal.FundingSourceSelected = data.fundingSource;

                            // Display processing page
                            let processingMessage = jQuery("#donation-processing-container");
                            processingMessage.show();
                            jQuery("#donation-form-container").hide();
                            Bloomerang.scrollToElement(processingMessage);

                            return true;
                        }

                        Bloomerang.scrollToElement(jQuery("#donation-form-container label.error")
                            .not(":hidden")
                            .first()
                            .parent());

                        return false;
                    },
                    onInit: function(data, actions) {
                    },
                    style: {
                        layout: 'vertical',
                        shape: 'pill'
                    },
                    fundingSource: source
                };
            },

            paypalButtonsFutureRecurringOptions: function() {
                return {
                    createVaultSetupToken: function (data, actions) {
                        // Build POST uri
                        let uri = Bloomerang.Util.buildUri('v1/paypal/CreateVaultSetupToken');

                        // console.log('Creating Vault Setup Token');
                        
                        return fetch(uri, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json; charset=UTF-8'
                            },
                            mode: 'cors'
                        }).then((response) => {
                            return response.json();
                        }).then((response) => {
                            if(response.IsSuccess)
                                return response.Data;
                            else
                                throw new Error(response.Message);
                        });
                    },
                    onApprove: function ({ vaultSetupToken }) {
                        // We'll need to call submit here to populate the donation data
                        Bloomerang.Widget.Donation.OnSubmit();

                        let ApiPayPalOrderRequestTempData = {
                            OrderBodyRequest: Bloomerang.Util.createPayPalOrderBodyRequest(),
                            TransactionTempData: Bloomerang.Util.createPayPalTempDataObject(),
                            IsRecurring: Bloomerang.Util.isRecurringDonation()
                        }
                        
                        // Build POST uri
                        let uri = Bloomerang.Util.buildUri(`v1/paypal/CreateVaultPaymentMethodToken/${vaultSetupToken}`);

                        // console.log('Exchange Vault Setup Token for Payment Method Token');
                        
                        return fetch(uri, {
                            method: 'POST',
                            body: JSON.stringify(ApiPayPalOrderRequestTempData),
                            headers: {
                                'Content-Type': 'application/json; charset=UTF-8'
                            },
                            mode: 'cors'
                        }).then((response) => {
                            return response.json();
                        }).then((response) => {
                            if(response.IsSuccess)
                                Bloomerang.Api.OnSuccess({
                                    IsSuccess: true,
                                    Message: "Thank you for your generous donation",
                                    Id: 0
                                });
                            else
                                throw new Error(response.Message);
                        });
                    },
                    onCancel: function (data, actions) {
                        Bloomerang.Api.OnError({IsSuccess: false, Message: 'Payment Cancelled', Id: 0});
                    },
                    onError: function (data, actions) {
                        Bloomerang.Api.OnError({IsSuccess: false, Message: 'Payment Failed', Id: 0});
                    },
                    onClick: function (data, actions) {
                        let formIsValid = jQuery("#donation-form").valid();

                        if (formIsValid) {
                            // This is more like a global variable to select the appropriate
                            // fundingSource @ createPayPalOrderBodyRequest() method
                            Bloomerang.Data.PayPal.FundingSourceSelected = data.fundingSource;

                            // Display processing page
                            let processingMessage = jQuery("#donation-processing-container");
                            processingMessage.show();
                            jQuery("#donation-form-container").hide();
                            Bloomerang.scrollToElement(processingMessage);

                            return true;
                        }

                        Bloomerang.scrollToElement(jQuery("#donation-form-container label.error")
                            .not(":hidden")
                            .first()
                            .parent());

                        return false;
                    },
                    onInit: function (data, actions) {
                    },
                    style: {
                        layout: 'vertical',
                        shape: 'pill'
                    }
                }
            },

            paypalButtonsFutureRecurringOptionsWithSource: function(source) {
                return {
                    createVaultSetupToken: function (data, actions) {
                        // Build POST uri
                        let uri = Bloomerang.Util.buildUri('v1/paypal/CreateVaultSetupToken');

                        return fetch(uri, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json; charset=UTF-8'
                            },
                            mode: 'cors'
                        }).then((response) => {
                            return response.json();
                        }).then((response) => {
                            if(response.IsSuccess)
                                return response.Data;
                            else
                                throw new Error(response.Message);
                        });
                    },
                    onApprove: function ({ vaultSetupToken }) {
                        // We'll need to call submit here to populate the donation data
                        Bloomerang.Widget.Donation.OnSubmit();

                        let ApiPayPalOrderRequestTempData = {
                            OrderBodyRequest: Bloomerang.Util.createPayPalOrderBodyRequest(),
                            TransactionTempData: Bloomerang.Util.createPayPalTempDataObject(),
                            IsRecurring: Bloomerang.Util.isRecurringDonation()
                        }

                        // Build POST uri
                        let uri = Bloomerang.Util.buildUri(`v1/paypal/CreateVaultPaymentMethodToken/${vaultSetupToken}`);

                        return fetch(uri, {
                            method: 'POST',
                            body: JSON.stringify(ApiPayPalOrderRequestTempData),
                            headers: {
                                'Content-Type': 'application/json; charset=UTF-8'
                            },
                            mode: 'cors'
                        }).then((response) => {
                            return response.json();
                        }).then((response) => {
                            if(response.IsSuccess)
                                Bloomerang.Api.OnSuccess({
                                    IsSuccess: true,
                                    Message: "Thank you for your generous donation",
                                    Id: 0
                                });
                            else
                                throw new Error(response.Message);
                        });
                    },
                    onCancel: function (data, actions) {
                        Bloomerang.Api.OnError({IsSuccess: false, Message: 'Payment Cancelled', Id: 0});
                    },
                    onError: function (data, actions) {
                        Bloomerang.Api.OnError({IsSuccess: false, Message: 'Payment Failed', Id: 0});
                    },
                    onClick: function (data, actions) {
                        let formIsValid = jQuery("#donation-form").valid();

                        if (formIsValid) {
                            // This is more like a global variable to select the appropriate
                            // fundingSource @ createPayPalOrderBodyRequest() method
                            Bloomerang.Data.PayPal.FundingSourceSelected = data.fundingSource;

                            // Display processing page
                            let processingMessage = jQuery("#donation-processing-container");
                            processingMessage.show();
                            jQuery("#donation-form-container").hide();
                            Bloomerang.scrollToElement(processingMessage);

                            return true;
                        }

                        Bloomerang.scrollToElement(jQuery("#donation-form-container label.error")
                            .not(":hidden")
                            .first()
                            .parent());

                        return false;
                    },
                    onInit: function (data, actions) {
                    },
                    style: {
                        layout: 'vertical',
                        shape: 'pill'
                    },
                    fundingSource: source
                }
            },
            
            buildUri: function(resource) {
                return "{URI}/{OPERATION}?ApiKey={KEY}"
                    .replace(/\{URI\}/g, Bloomerang.Api.Uri.replace(/\/$/, ""))
                    .replace(/\{OPERATION\}/g, resource)
                    .replace(/\{KEY\}/g, Bloomerang.Api.Key);
            },
        },

        Web: {
            Uri: window.location.href.indexOf("starwars") >= 0 ? "https://starwars.bloomerang.co/" :
                 window.location.href.indexOf("production") >= 0 ? "https://crm.bloomerang.co/" :
                 window.location.href.indexOf("localhost") >= 0 ? "http://localhost:9090/" :
                 window.location.href.indexOf("qa-develop") >= 0 ? "https://qa-develop-crm.bloomerang.co/" :
                 /qa[0-9]*\.bloomerang\.co/i.test(window.location.href) ? "https://" + /qa[0-9]*\.bloomerang\.co/i.exec(window.location.href)[0] + "/" :
                 window.location.href.indexOf("staging") >= 0 ? "https://staging-crm.bloomerang.co/" :
                 window.location.href.indexOf("file://") >= 0 ? "http://localhost:9090/" :         // keep as last check!!
                 "https://crm.bloomerang.co/"
        },

        // The API operations we've encapsulated
        Api: {
            _Processing: false,
            OnSubmit: function (args) { },
            OnSuccess: function (response) { },
            OnError: function (response) { },

            Key: "",
            Processor: "",
            ProcessorKey: "",
            Uri: window.location.href.indexOf("starwars") >= 0 ? "https://starwars.bloomerang.co/" :
                 window.location.href.indexOf("production") >= 0 ? "https://api.bloomerang.co/" :
                 window.location.href.indexOf("localhost") >= 0 ? "http://localhost:55386/" :
                 window.location.href.indexOf("qa-develop") >= 0 ? "https://qa-develop-api.bloomerang.co/" :
                 /qa[0-9]*\.bloomerang\.co/i.test(window.location.href) ? "https://qa" + /qa([0-9]*)\.bloomerang\.co/i.exec(window.location.href)[1] + "-api.bloomerang.co/" :
                 window.location.href.indexOf("staging") >= 0 ? "https://staging-api.bloomerang.co/" :
                 window.location.href.indexOf("file://") >= 0 ? "http://localhost:55386/" :         // keep as last check!!
                 "https://api.bloomerang.co/",

            // Make an online donation
            donate: function() {
                Bloomerang.Util.setAccountCookie();
                if (Bloomerang.Data.WidgetIds.Donation) {
                    Bloomerang.Data.Donation.WidgetId = Bloomerang.Data.WidgetIds.Donation;
                }

                const data = {
                    Account: Bloomerang.Data.Account,
                    Donation: Bloomerang.Data.Donation,
                    Method: Bloomerang.Data.Method,
                    InKind: Bloomerang.Data.InKind,
                    Check: Bloomerang.Data.Check,
                    FormLoadId: Bloomerang["formLoad" + Bloomerang.Data.Donation.WidgetId]
                };
                
                // We set these to update the correct intent and customer
                if(Bloomerang.UsePaymentElement && Bloomerang.StripePaymentElement.PaymentIntentId && Bloomerang.StripePaymentElement.CustomerId) {
                    data["StripePaymentIntentId"] = Bloomerang.StripePaymentElement.PaymentIntentId;
                    data["StripeCustomerTokenId"] = Bloomerang.StripePaymentElement.CustomerId;
                }

                if(Bloomerang.Util.isProcessorOnePay() && Bloomerang.OnePayPaymentElement.OnePayFormId) {
                    data["WidgetId"] = Bloomerang.Data.Donation.WidgetId;
                }
                
                Bloomerang.Util.makeDonation(data, false);
            },

            recurringDonate: function () {
                Bloomerang.Util.setAccountCookie();
                if (Bloomerang.Data.WidgetIds.Donation) {
                  Bloomerang.Data.RecurringDonation.WidgetId = Bloomerang.Data.WidgetIds.Donation;
                }
                const data = {
                    Account: Bloomerang.Data.Account,
                    RecurringDonation: Bloomerang.Data.RecurringDonation,
                    FormLoadId: Bloomerang["formLoad" + Bloomerang.Data.Donation.WidgetId]
                };

                // We set these to update the correct intent and customer
                if(Bloomerang.UsePaymentElement && Bloomerang.StripePaymentElement.RecurringPaymentIntentId && Bloomerang.StripePaymentElement.RecurringCustomerId) {
                    data["StripePaymentIntentId"] = Bloomerang.StripePaymentElement.RecurringPaymentIntentId;
                    data["StripeCustomerTokenId"] = Bloomerang.StripePaymentElement.RecurringCustomerId;
                }

                if(Bloomerang.Util.isProcessorOnePay() && Bloomerang.OnePayPaymentElement.OnePayFormId) {
                    data["WidgetId"] = Bloomerang.Data.RecurringDonation.WidgetId ?? Bloomerang.Data.Donation.WidgetId;
                }
                
                Bloomerang.Util.makeDonation(data, true);
            },

            joinMailingList: function () {
                Bloomerang.Util.setAccountCookie();
                if (Bloomerang.Data.WidgetIds.EmailSignup) {
                  Bloomerang.Data.Interaction.WidgetId = Bloomerang.Data.WidgetIds.EmailSignup;
                }
                Bloomerang.Api._post("v1/OnlineEmailInteractionRegistration", {
                    CaptchaResponse: Bloomerang.Data.CaptchaResponse,
                    Account: Bloomerang.Data.Account,
                    Interaction: Bloomerang.Data.Interaction,
                    FormUrl: window.location.href,
                    FormLoadId: Bloomerang["formLoad" + Bloomerang.Data.Interaction.WidgetId],
                    OneTimeToken: Bloomerang["oneTimeToken" + Bloomerang.Data.Interaction.WidgetId]
                }, null, null, false, "Email");
            },

            submitInteraction: function () {
                Bloomerang.Util.setAccountCookie();
                if (Bloomerang.Data.WidgetIds.Interaction) {
                  Bloomerang.Data.Interaction.WidgetId = Bloomerang.Data.WidgetIds.Interaction;
                }
                Bloomerang.Api._post("v1/OnlineInteraction", {
                    CaptchaResponse: Bloomerang.Data.CaptchaResponse,
                    Account: Bloomerang.Data.Account,
                    Interaction: Bloomerang.Data.Interaction,
                    FormUrl: window.location.href,
                    FormLoadId: Bloomerang["formLoad" + Bloomerang.Data.Interaction.WidgetId]
                }, null, null, false, "Interaction");
            },
                        
            _post: function (operation, data, success, error, onSubmitCalled, widgetType, runAsync = true, timeoutMs = 60000) {
                // TODO: Remove this when we have figured out the canada state/province issue
                data.Logs = Bloomerang._logs;

                // HACK: Have "global" access to this object until we can turn this into a more clean plugin
                Bloomerang.Data.ServerModel = data;
                success = success ? success : Bloomerang.Api.OnSuccess;
                error = error ? error : Bloomerang.Api.OnError;
                
                // Try our onsubmit handler and if we want to short circuit execution, stop before sending request
                var keepGoing = onSubmitCalled;
                if (!keepGoing) {
                    // If there are multiple widgets on the page, then we only want a post from the email or donation widget to trigger its validation.
                    // So check if that's where it came from before using the default OnSubmit function.
                    var submitParameter = { operation: operation, data: data };

                    if (widgetType == "Email") {
                        keepGoing = Bloomerang.Widget.Email.OnSubmit(submitParameter);
                    }
                    else if (widgetType == "Interaction") {
                        keepGoing = Bloomerang.Widget.Interaction.OnSubmit(submitParameter);
                    }
                    else if (widgetType == "Donation") {
                        keepGoing = Bloomerang.Widget.Donation.OnSubmit(submitParameter);
                    } else {
                        keepGoing = Bloomerang.Api.OnSubmit(submitParameter);
                    }
                }
                if (typeof (keepGoing) != "undefined" && !keepGoing) {
                    return;
                }
                
                // Build POST uri
                var uri = "{URI}/{OPERATION}?ApiKey={KEY}"
                    .replace(/\{URI\}/g, Bloomerang.Api.Uri.replace(/\/$/, ""))
                    .replace(/\{OPERATION\}/g, operation)
                    .replace(/\{KEY\}/g, Bloomerang.Api.Key);

                if (navigator.userAgent.indexOf('MSIE') > 0 && !('withCredentials' in new XMLHttpRequest())) {
                    var oldIEId = Bloomerang.Util.getOldIEId();
                    uri = uri + '&OldIEIdentifier=' + oldIEId;

                    Bloomerang.Util.crossDomainPost(
                        uri,
                        data,
                        oldIEId,
                        function (result) {
                            return result.IsSuccess ? success(result) : error(result);
                        },
                        "Error sending request. Please try again later");
                } else {
                    // Using jQuery.ajax rather than jQuery.getJSON because that was not sending the correct contentType
                    // Using single quotes instead of double quotes because of IE 8 as well
                    jQuery.support.cors = true;   // for IE 8 and other old IE support
                    jQuery.ajax({
                        type: 'POST',
                        contentType: 'application/json; charset=UTF-8',
                        url: uri,
                        data: JSON.stringify(data),
                        timeout: timeoutMs,
                        async: runAsync,
                        success: function (result) {
                            return result.IsSuccess ? success(result) : error(result);
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            var message = textStatus === 'timeout'
                                ? 'Could not connect to Bloomerang. Please try again later.'
                                : textStatus && errorThrown ? 'The request failed with the following error: [' + textStatus + '] [' + errorThrown + '].'
                                : 'Error sending request. Please try again later';
                            error({ IsSuccess: false, Message: message, Id: 0 });
                        }
                   });
                }
            }
        },

        // These objects don't do anything by themselves. However, they are used to attach onSubmit handlers separately for
        // emails and donations. That way, you can have one form of each type on the page and they will submit separately.
        Widget: {
            Email: {},
            Donation: {},
            EventRegistration: {},
            Interaction: {}
        },

        // public API building
        Account: {
            // Account Types
            individual: function () {
                Bloomerang.Data.Account.Type = "Individual";
                return this;
            },
            organization: function () {
                Bloomerang.Data.Account.Type = "Organization";
                return this;
            },
            // Name Info 
            organizationName: function (value) {
                this.organization();
                Bloomerang.Data.Account.FullName = value;
                return this;
            },
            firstName: function (value) {
                Bloomerang.Data.Account.FirstName = value;
                return this;
            },
            middleName: function (value) {
                Bloomerang.Data.Account.Middle = value;
                return this;
            },
            lastName: function (value) {
                Bloomerang.Data.Account.LastName = value;
                return this;
            },
            prefix: function (value) {
                Bloomerang.Data.Account.Prefix = value;
                return this;
            },
            suffix: function (value) {
                Bloomerang.Data.Account.Suffix = value;
                return this;
            },
            informalName: function (value) {
                Bloomerang.Data.Account.InformalName = value;
                return this;
            },
            formalName: function (value) {
                Bloomerang.Data.Account.FormalName = value;
                return this;
            },
            envelopeName: function (value) {
                Bloomerang.Data.Account.EnvelopeName = value;
                return this;
            },
            recognitionName: function (value) {
                Bloomerang.Data.Account.RecognitionName = value;
                return this;
            },
            jobTitle: function (value) {
                Bloomerang.Data.Account.JobTitle = value;
                return this;
            },
            employer: function (value) {
                Bloomerang.Data.Account.Employer = value;
                return this;
            },
            website: function (value) {
                Bloomerang.Data.Account.Website = value;
                return this;
            },
            facebook: function (value) {
                Bloomerang.Data.Account.FacebookId = value;
                return this;
            },
            twitter: function (value) {
                Bloomerang.Data.Account.TwitterId = value;
                return this;
            },
            linkedInId: function (value) {
                Bloomerang.Data.Account.LinkedInId = value;
                return this;
            },
            gender: function (value) {
                if (value != "Male" && value != "Female" && value != "Other") {
                    alert("Gender can only be set to 'Male', 'Female', or 'Other'. '" + value + "' isn't valid.");
                }
                else {
                    Bloomerang.Data.Account.Gender = value;
                }
                return this;
            },
            birthdate: function (value) {
                Bloomerang.Data.Account.Birthdate = value;
                return this;
            },

            cookieId: function(value) {
                Bloomerang.Data.Account.CookieId = value;
                return this;
            },

            // Phone numbers (only supports setting one at a time right now)
            setPhone: function (type, value, ext) {
                if (type && value) {
                    Bloomerang.Data.Account.PrimaryPhone = {
                        TypeName: type,
                        Number: value,
                        Extension: ext || "",
                        IsPrimary: true
                    };
                }
                return this;
            },
            homePhone: function (value, ext) {
                return this.setPhone("Home", value, ext);
            },
            workPhone: function (value, ext) {
                return this.setPhone("Work", value, ext);
            },

            // Email addresses (only supports setting one at a time right now)
            setEmail: function (type, value) {
                if (type && value) {
                    Bloomerang.Data.Account.PrimaryEmail = {
                        TypeName: type,
                        Value: value,
                        IsPrimary: true
                    };
                }
                return this;
            },
            homeEmail: function (value) {
                return this.setEmail("Home", value);
            },
            workEmail: function (value) {
                return this.setEmail("Work", value);
            },

            // Addresses (only supports setting one at a time right now)
            setAddress: function (type, street, city, state, zip, country) {
                Bloomerang.Data.Account.Address = {
                    TypeName: type,
                    Street: street,
                    City: city,
                    State: state,
                    PostalCode: zip,
                    Country: country,
                    IsPrimary: true
                };
                return this;
            },
            homeAddress: function (street, city, state, zip, country) {
                return this.setAddress("Home", street, city, state, zip, country);
            },
            workAddress: function (street, city, state, zip, country) {
                return this.setAddress("Work", street, city, state, zip, country);
            },

            customFreeformField: function (fieldId) {
                Bloomerang.Data.Account.CustomFreeformFields = Bloomerang.Data.Account.CustomFreeformFields || {};
                Bloomerang.Data.Account.CustomFreeformFields[fieldId] = Array.prototype.slice.call(arguments, 1);
                return this;
            },

            customPickField: function (fieldId) {
                Bloomerang.Data.Account.CustomPickFields = Bloomerang.Data.Account.CustomPickFields || {};
                Bloomerang.Data.Account.CustomPickFields[fieldId] = jQuery.isArray(arguments[1])
                    ? arguments[1]
                    : Array.prototype.slice.call(arguments, 1);
                return this;
            },

            clearCustomFields: function () {
                Bloomerang.Data.Account.CustomFields = {};
                Bloomerang.Data.Account.CustomFreeformFields = {};
                Bloomerang.Data.Account.CustomPickFields = {};
            },

            optedInStatus: function(email, mail, phone) {
              Bloomerang.Data.Account.OptedInEmail = email;
              Bloomerang.Data.Account.OptedInMail = mail;
              Bloomerang.Data.Account.OptedInPhone = phone;
            }
        },

        Donation: {
            date: function (value) {
                // DEPRECATED
                // This does nothing, since the server will always use the date of the form submission as the date of the donation.
                return this;
            },
            note: function (value) {
                Bloomerang.Data.Donation.Note = value;
                return this;
            },
            amount: function (value) {
                if (typeof (accounting) === "undefined") {
                    Bloomerang.Data.Donation.Amount = ((value + "") || "").replace(/[\$,]/g, "");
                }
                else { // Use accounting.parse, because BluePay can't handle $ or ,
                    Bloomerang.Data.Donation.Amount = accounting.parse(value);
                }
                return this;
            },
            nonDeductible: function (value) {
                Bloomerang.Data.Donation.NonDeductible = value;
                return this;
            },
            fund: function (name) {
                Bloomerang.Data.Donation.FundName = name;
                return this;
            },
            fundId: function (id) {
                Bloomerang.Data.Donation.Fund = Bloomerang.Data.Donation.Fund || {};
                Bloomerang.Data.Donation.Fund.Id = id;
                return this;
            },
            campaign: function (name) {
                Bloomerang.Data.Donation.CampaignName = name;
                return this;
            },
            appeal: function (name) {
                Bloomerang.Data.Donation.AppealName = name;
                return this;
            },
            tribute: function (name) {
                Bloomerang.Data.Donation.TributeName = name;
                return this;
            },
            tributeType: function (name) {
                Bloomerang.Data.Donation.TributeTypeName = name;
                return this;
            },
            trueImpactEnabled: function(value) {
                Bloomerang.Data.Donation.trueImpactEnabled = value;
                return this;
            },
            trueImpactUsed: function (value) {
                Bloomerang.Data.Donation.trueImpactUsed = value;
                return this;
            },
            customFreeformField: function (fieldId) {
                Bloomerang.Data.Donation.CustomFreeformFields = Bloomerang.Data.Donation.CustomFreeformFields || {};
                Bloomerang.Data.Donation.CustomFreeformFields[fieldId] = Array.prototype.slice.call(arguments, 1);
                return this;
            },
            customPickField: function (fieldId) {
                Bloomerang.Data.Donation.CustomPickFields = Bloomerang.Data.Donation.CustomPickFields || {};
                Bloomerang.Data.Donation.CustomPickFields[fieldId] = jQuery.isArray(arguments[1])
                    ? arguments[1]
                    : Array.prototype.slice.call(arguments, 1);
                return this;
            },
            clearCustomFields: function () {
                Bloomerang.Data.Donation.CustomFreeformFields = {};
                Bloomerang.Data.Donation.CustomPickFields = {};
                return this;
            },
            type: function (value) {
                //Only using this for PayPal and Venmo
                Bloomerang.Data.Method = value;
                return this;
            },
        },

        RecurringDonation: {
            date: function (value) {
                // DEPRECATED
                // This does nothing, since the server will always use the date of the form submission as the date of the donation.
                return this;
            },
            note: function (value) {
                Bloomerang.Data.RecurringDonation.Note = value;
                return this;
            },
            amount: function (value) {
                Bloomerang.Data.RecurringDonation.Amount = ((value + "") || "").replace(/\$/g, "");
                return this;
            },
            nonDeductible: function (value) {
                Bloomerang.Data.RecurringDonation.NonDeductible = value;
                return this;
            },
            fund: function (name) {
                Bloomerang.Data.RecurringDonation.FundName = name;
                return this;
            },
            fundId: function (id) {
                Bloomerang.Data.RecurringDonation.Fund = Bloomerang.Data.RecurringDonation.Fund || {};
                Bloomerang.Data.RecurringDonation.Fund.Id = id;
                return this;
            },
            campaign: function (name) {
                Bloomerang.Data.RecurringDonation.CampaignName = name;
                return this;
            },
            appeal: function (name) {
                Bloomerang.Data.RecurringDonation.AppealName = name;
                return this;
            },
            tribute: function (name) {
                Bloomerang.Data.RecurringDonation.TributeName = name;
                return this;
            },
            tributeType: function (name) {
                Bloomerang.Data.RecurringDonation.TributeTypeName = name;
                return this;
            },
            frequency: function (value) {
                if (value != "Weekly" && value != "Monthly" && value != "Quarterly" && value != "Yearly" && value != "SemiAnnually") {
                    alert("Frequency can only be set to 'Weekly', 'Monthly', 'Quarterly' or 'Yearly'. '" + value + "' isn't valid.");
                }
                else {
                    Bloomerang.Data.RecurringDonation.Frequency = value;
                }
                return this;
            },
            weekly: function () {
                return this.frequency("Weekly");
            },
            monthly: function () {
                return this.frequency("Monthly");
            },
            quarterly: function () {
                return this.frequency("Quarterly");
            },
            yearly: function () {
                return this.frequency("Yearly");
            },
            startDate: function (value) {
                Bloomerang.Data.RecurringDonation.StartDate = value;
                return this;
            },
            trueImpactEnabled: function (value) {
                Bloomerang.Data.RecurringDonation.trueImpactEnabled = value;
                return this;
            },
            trueImpactUsed: function (value) {
                Bloomerang.Data.RecurringDonation.trueImpactUsed = value;
                return this;
            },
            customFreeformField: function (fieldId) {
                Bloomerang.Data.RecurringDonation.CustomFreeformFields = Bloomerang.Data.RecurringDonation.CustomFreeformFields || {};
                Bloomerang.Data.RecurringDonation.CustomFreeformFields[fieldId] = Array.prototype.slice.call(arguments, 1);
                return this;
            },
            customPickField: function (fieldId) {
                Bloomerang.Data.RecurringDonation.CustomPickFields = Bloomerang.Data.RecurringDonation.CustomPickFields || {};
                Bloomerang.Data.RecurringDonation.CustomPickFields[fieldId] = jQuery.isArray(arguments[1])
                    ? arguments[1]
                    : Array.prototype.slice.call(arguments, 1);
                return this;
            },

            clearCustomFields: function () {
                Bloomerang.Data.RecurringDonation.CustomFreeformFields = {};
                Bloomerang.Data.RecurringDonation.CustomPickFields = {};
                return this;
            }
        },

        CreditCard: {
            expirationMonth: function (value) {
                Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method = "CreditCard";
                Bloomerang.Data.CreditCard.ExpMonth = value;
                return this;
            },
            expirationYear: function (value) {
                Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method = "CreditCard";
                Bloomerang.Data.CreditCard.ExpYear = value;
                return this;
            },
            spreedlyToken: function (value) {
                Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method = "CreditCard";
                Bloomerang.Data.CreditCard.SpreedlyToken = value;
            }
        },

        InKind: {
            marketValue: function (val) {
                Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method = "InKind";
                Bloomerang.Data.InKind.MarketValue = ((val + "") || "").replace(/\$/g, "");
                return this;
            },
            description: function (value) {
                Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method = "InKind";
                Bloomerang.Data.InKind.Description = value;
                return this;
            },
            type: function (value) {
                Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method = "InKind";
                Bloomerang.Data.InKind.InKindType =
                    value == "Goods" ? value :
                    value == "Services" ? value : "";

                return this;
            },
            goods: function () {
                return Bloomerang.InKind.type("Goods");
            },
            services: function () {
                return Bloomerang.InKind.type("Services");
            }
        },

        Check: {
            number: function (value) {
                Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method = "Check";
                Bloomerang.Data.Check.Number = value;
                return this;
            },
            date: function (value) {
                Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method = "Check";
                Bloomerang.Data.Check.Date = value;
                return this;
            }
        },

        Eft: {
            type: function (value) {
                Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method = "Eft";
                Bloomerang.Data.Eft.AccountType =
                    value == "Checking" ? value :
                    value == "Savings" ? value : "";

                return this;
            },
            checking: function () {
                return Bloomerang.Eft.type("Checking");
            },
            savings: function () {
                return Bloomerang.Eft.type("Savings");
            },
            accountNumber: function (value) {
                Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method = "Eft";
                Bloomerang.Data.Eft.AccountNumber = value;
                return this;
            },
            routingNumber: function (value) {
                Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method = "Eft";
                Bloomerang.Data.Eft.RoutingNumber = value;
                return this;
            }
        },

        Interaction: {
            date: function (value) {
                Bloomerang.Data.Interaction.Date = value;
                return this;
            },
            subject: function (value) {
                Bloomerang.Data.Interaction.Subject = value;
                return this;
            },
            note: function (value) {
                Bloomerang.Data.Interaction.Note = value;
                return this;
            },
            channel: function (value) {
                Bloomerang.Data.Interaction.Channel = value;
                return this;
            },
            purpose: function (value) {
                Bloomerang.Data.Interaction.Purpose = value;
                return this;
            },
            inbound: function () {
                Bloomerang.Data.Interaction.IsInbound = true;
                return this;
            },
            customFreeformField: function (fieldId) {
                Bloomerang.Data.Interaction.CustomFreeformFields = Bloomerang.Data.Interaction.CustomFreeformFields || {};
                Bloomerang.Data.Interaction.CustomFreeformFields[fieldId] = Array.prototype.slice.call(arguments, 1);
                return this;
            },
            customPickField: function (fieldId) {
                Bloomerang.Data.Interaction.CustomPickFields = Bloomerang.Data.Interaction.CustomPickFields || {};
                Bloomerang.Data.Interaction.CustomPickFields[fieldId] = jQuery.isArray(arguments[1])
                    ? arguments[1]
                    : Array.prototype.slice.call(arguments, 1);
                return this;
            },

            clearCustomFields: function () {
                Bloomerang.Data.Interaction.CustomFreeformFields = {};
                Bloomerang.Data.Interaction.CustomPickFields = {};
                return this;
            }
        },

        captchaResponse: function(captchaResponse) {
            Bloomerang.Data.CaptchaResponse = captchaResponse;
            return this;
        },

        captchaResponseV3: function(captchaResponse) {
            Bloomerang.Data.CaptchaResponseV3 = captchaResponse;
            return this;
        },

        continueFinancialSubmission: function (form) {
            if (form.data("is-submitting-financial")) {
                return false;
            }
            form.data("is-submitting-financial", true);
            return true;
        },
        cancelFinancialSubmission: function (form) {
            form.data("is-submitting-financial", false);
            form.data("is-submitting", false);
            jQuery("#save-notification").hide();
        }
    };

    // PID-566: Defense-in-depth for the shared-global Stripe Payment Element state.
    //
    // window.Bloomerang is a single shared object on hosts that don't iframe-sandbox
    // third-party script (Squarespace Code Block, WordPress raw HTML block, custom-coded
    // sites). When a second Bloomerang widget or org-authored custom widget JS runs on
    // the same page as a donation form, it can leave the donation form's Stripe Payment
    // Element with `_destroyed: true, _parent: null` and the credit-card field rendering
    // empty with no visible error. See PID-566.
    //
    // This block keeps a per-widget snapshot of the mounted state and runs a short,
    // one-shot watchdog after the initial mount that, if the currently-active Payment
    // Element is detected as externally destroyed, re-mounts to restore the visible
    // input. It does NOT try to prevent the mutation (custom JS has direct access to
    // window.Bloomerang either way); it just makes the donation form resilient to it.
    //
    // Correctness notes:
    // * `slot.activeCard` tracks whichever Payment Element is currently mounted on
    //   #card-element (one-time StripeCard OR recurring/membership RecurringStripeCard).
    //   The recurring-checkbox toggle and the membership branch switch the mounted element
    //   to RecurringStripeCard, so isActivePaymentElementDestroyed inspects the recorded
    //   activeCard rather than StripeCard unconditionally. Every mount / remount / toggle
    //   path must refresh the snapshot so activeCard stays accurate.
    // * The watchdog runs for a bounded window (default 10s) after the initial mount.
    //   `watchdogHasEverStarted` keeps legitimate remounts (amount change, toggle) from
    //   reopening that window — but it is NOT permanent: rearmPaymentElementWatchdog
    //   clears the latch after a failed submit so the form is protected again.
    // * stopPaymentElementWatchdogs is called at the top of processStripePaymentElement so
    //   an in-flight submit can never race with a watchdog-triggered recovery that would
    //   swap out `Bloomerang.StripePaymentElement.Elements` between elements.submit() and
    //   Stripe.confirmPayment().
    Bloomerang.PerWidget = Bloomerang.PerWidget || {};

    // Internal: return the state slot for the currently-active donation widget,
    // lazy-creating it. Returns null if no donation widget id has been registered yet
    // (self-hosted forms that call mountStripePaymentElements before useDonationId —
    // see createInitialIntentForSelfHosted — get no protection; that's an acceptable
    // gap since self-hosted deployments aren't the shared-context class PID-566
    // targets).
    Bloomerang.Util.getPaymentElementSlot = function() {
        var widgetId = Bloomerang.Data && Bloomerang.Data.WidgetIds && Bloomerang.Data.WidgetIds.Donation;
        if (widgetId == null) return null;
        var slot = Bloomerang.PerWidget[widgetId] = Bloomerang.PerWidget[widgetId] || {};
        slot._widgetId = widgetId;
        return slot;
    };

    // Snapshot the currently-mounted Payment Element state for the active donation
    // widget. `activeCard` must be the Payment Element that is presently mounted on
    // #card-element — the caller knows this (StripeCard for one-time / event-reg,
    // RecurringStripeCard after the recurring-toggle-on or on membership forms).
    // No-op if no donation widget id has been registered yet.
    Bloomerang.Util.snapshotPaymentElement = function(isWidgetEventReg, activeCard) {
        var slot = Bloomerang.Util.getPaymentElementSlot();
        if (!slot) return;
        slot.StripePaymentElement = Bloomerang.StripePaymentElement;
        slot.StripeCard = Bloomerang.Util.StripeCard;
        slot.RecurringStripeCard = Bloomerang.Util.RecurringStripeCard;
        slot.activeCard = activeCard || Bloomerang.Util.StripeCard;
        slot.IsWidgetEventReg = !!isWidgetEventReg;
        slot.snapshotAt = Date.now();
    };

    // Snapshot + start the (one-shot) destroy-watchdog. Only the INITIAL mount calls
    // this; remount / toggle paths call snapshotPaymentElement to keep activeCard
    // fresh without re-arming the watchdog.
    Bloomerang.Util.snapshotAndWatchPaymentElement = function(isWidgetEventReg, activeCard) {
        Bloomerang.Util.snapshotPaymentElement(isWidgetEventReg, activeCard);
        var slot = Bloomerang.Util.getPaymentElementSlot();
        if (!slot) return;
        Bloomerang.Util.startPaymentElementWatchdog(slot._widgetId);
    };

    // Returns true if the currently-active donation widget's mounted Payment Element
    // has been destroyed by external code. Guards against the recurring-toggle and
    // membership paths where StripeCard is legitimately destroyed by inspecting the
    // specific card recorded as active at last snapshot, not the top-level
    // Bloomerang.Util.StripeCard reference.
    Bloomerang.Util.isActivePaymentElementDestroyed = function() {
        var slot = Bloomerang.Util.getPaymentElementSlot();
        if (!slot || !slot.snapshotAt || !slot.activeCard) return false;
        return slot.activeCard._destroyed === true;
    };

    // If the active Payment Element has been destroyed externally, re-mount to recover
    // the visible input. Returns true when a recovery was actually triggered on this
    // call.
    //
    // Safe to call in a tight poll loop, and NOT limited to one recovery per mount cycle:
    // a successful re-mount installs a fresh, non-destroyed card and
    // refreshes the snapshot, so the `isActivePaymentElementDestroyed()` check above
    // short-circuits every redundant poll until the NEXT genuine external destroy. That is
    // what prevents a loop — not a one-shot latch — so a persistent clobbering script that
    // destroys the element again in the same watchdog window is recovered again, instead of
    // being silently left broken after the first hit.
    Bloomerang.Util.recoverPaymentElementIfDestroyed = function() {
        var slot = Bloomerang.Util.getPaymentElementSlot();
        if (!slot || !slot.snapshotAt) return false;
        if (!Bloomerang.Util.isActivePaymentElementDestroyed()) return false;

        // PID-566: addLog output is sent to the server in data.Logs, so keep the ticket key out
        // of the transmitted text and only in this comment.
        Bloomerang.Util.addLog && Bloomerang.Util.addLog(
            'Payment Element for widget ' + slot._widgetId + ' was destroyed externally; re-mounting.');
        if (typeof window !== 'undefined' && window.console && window.console.warn) {
            window.console.warn('[Bloomerang] Payment Element for widget ' + slot._widgetId +
                ' was destroyed externally (likely by another script on the page). Re-mounting.');
        }

        try {
            // Re-mount in the SAME mode the widget was originally mounted in. slot.IsWidgetEventReg
            // is set true only by the initial event-reg mount (snapshotAndWatchPaymentElement(true,…));
            // the snapshotPaymentElement(false,…) calls in the recurring-toggle, membership, and
            // amount-change remount paths are all guarded to non-event-reg contexts (see those
            // sites), so on an event-reg form the flag stays true and recovery correctly remounts as
            // event reg. The literal `false` at those sites is the correct mode, not a lost flag.
            Bloomerang.Util.mountStripePaymentElements(!!slot.IsWidgetEventReg);

            // mountStripePaymentElements always puts the one-time StripeCard on #card-element for a
            // non-event-reg form. But if the donor had toggled recurring ON before the destroy,
            // #recurring is still checked and the RECURRING element is the one that must be shown —
            // and the one submit() will use, since isRecurringDonation() reads that checkbox. Without
            // re-applying the toggle here, recovery would leave the one-time element mounted while the
            // recurring element is recreated-but-unmounted, and the submit would fail on an incomplete
            // element. Mirror the recurring-toggle-on handler so recovery restores the element that was
            // actually active. Membership and event-reg mount their correct element inside
            // mountStripePaymentElements already, so both are excluded. Read the checkbox via the DOM
            // (same selector the toggle handler binds to) rather than the jQuery-based
            // isRecurringDonation(), so recovery does not depend on jQuery being present.
            var recurringToggle = typeof document !== 'undefined' && document.querySelector('#recurring');
            var isMembershipForm = typeof document !== 'undefined' && !!document.querySelector('#membership-form');
            if (!slot.IsWidgetEventReg && !isMembershipForm &&
                recurringToggle && recurringToggle.checked &&
                Bloomerang.Util.RecurringStripeCard) {
                Bloomerang.Util.StripeCard.clear();
                Bloomerang.Util.StripeCard.unmount();
                Bloomerang.Util.StripeCardIsValid = true;
                Bloomerang.Util.RecurringStripeCard.mount('#card-element');
                Bloomerang.Util.snapshotPaymentElement(false, Bloomerang.Util.RecurringStripeCard);
            }

            // PID-186/PID-566: mountStripePaymentElements re-creates the wallet Elements at the
            // default mount amount (OneTimeAmountAtLastMount/RecurringAmountAtLastMount reset to
            // 100 cents). The Apple/Google Pay sheet caches its amount at mount, so without this
            // refresh a donor who had already entered an amount would see a $1.00 wallet sheet
            // after a recovery. Mirror the toggle handler and trigger the amount-matched remount;
            // both helpers are no-ops when the amount is unchanged and refresh the snapshot.
            if (slot.IsWidgetEventReg) {
                Bloomerang.Util.remountEventRegistrationElement && Bloomerang.Util.remountEventRegistrationElement();
            } else if (Bloomerang.Util.isRecurringDonation && Bloomerang.Util.isRecurringDonation()) {
                Bloomerang.Util.remountRecurringDonationElement && Bloomerang.Util.remountRecurringDonationElement();
            } else {
                Bloomerang.Util.remountOneTimeDonationElement && Bloomerang.Util.remountOneTimeDonationElement();
            }
            return true;
        } catch (e) {
            if (typeof window !== 'undefined' && window.console && window.console.error) {
                window.console.error('[Bloomerang] Payment Element recovery failed:', e);
            }
            return false;
        }
    };

    // Start the self-healing watchdog for the given widget id. Polls every
    // `_paymentElementWatchdogIntervalMs` (default 2s) up to `_paymentElementWatchdogMs`
    // (default 10s) and calls the recovery helper. The `watchdogHasEverStarted` latch keeps
    // a legitimate remount (amount change, toggle) from reopening a false-positive window
    // while the donor interacts with the form; it is cleared only by
    // rearmPaymentElementWatchdog after a failed submit, the one path allowed to reopen it.
    Bloomerang.Util.startPaymentElementWatchdog = function(widgetId) {
        if (widgetId == null) return;
        var slot = Bloomerang.PerWidget[widgetId];
        if (!slot || slot.watchdogHasEverStarted) return;
        slot.watchdogHasEverStarted = true;

        var maxMs = Bloomerang._paymentElementWatchdogMs != null ? Bloomerang._paymentElementWatchdogMs : 10000;
        var intervalMs = Bloomerang._paymentElementWatchdogIntervalMs != null ? Bloomerang._paymentElementWatchdogIntervalMs : 2000;
        var startedAt = Date.now();

        slot.watchdogTimer = setInterval(function() {
            if (Date.now() - startedAt > maxMs) {
                clearInterval(slot.watchdogTimer);
                slot.watchdogTimer = null;
                return;
            }
            Bloomerang.Util.recoverPaymentElementIfDestroyed();
        }, intervalMs);
    };

    // Cancel any active watchdog across every registered widget slot. Called from the
    // top of processStripePaymentElement so an in-flight submit can't race with a
    // watchdog-triggered recovery. Idempotent.
    Bloomerang.Util.stopPaymentElementWatchdogs = function() {
        if (!Bloomerang.PerWidget) return;
        var keys = Object.keys(Bloomerang.PerWidget);
        for (var i = 0; i < keys.length; i++) {
            var slot = Bloomerang.PerWidget[keys[i]];
            if (slot && slot.watchdogTimer) {
                clearInterval(slot.watchdogTimer);
                slot.watchdogTimer = null;
            }
        }
    };

    // Re-arm the destroy-watchdog for the active donation widget after a FAILED
    // submit. processStripePaymentElement stops the watchdog before
    // submitting (so a tick can't swap Elements mid-confirm), and startPaymentElementWatchdog's
    // `watchdogHasEverStarted` latch means it would otherwise never protect the form again for
    // the rest of the page's life. When a submit fails the donor stays on the form, so clear the
    // latch and open a fresh window. Deliberately separate from the mount/remount paths, which
    // must NOT re-arm — only an explicit submit failure reopens the window.
    Bloomerang.Util.rearmPaymentElementWatchdog = function() {
        var slot = Bloomerang.Util.getPaymentElementSlot();
        if (!slot || !slot.snapshotAt) return; // nothing was ever mounted; nothing to protect
        if (slot.watchdogTimer) return;        // already running; don't stack a second timer
        slot.watchdogHasEverStarted = false;   // clear the one-shot latch so start can re-arm
        Bloomerang.Util.startPaymentElementWatchdog(slot._widgetId);
    };

    // Make sure we've got JQuery loaded so that we can make the JSONP call
    Bloomerang.Util.requireJQuery(function () {
        // force recurring donation to have all of the properties of a normal donation (plus its scheduling ones)
        Bloomerang._isReady = true;
        for (var i = 0; i < Bloomerang._readyFunctions.length; i++)
            Bloomerang._readyFunctions[i]();

        Bloomerang._readyFunctions = [];
    });

    Bloomerang.Util.requireAccounting();
})();
