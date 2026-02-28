
let seedgrowWaData = window.seedgrow_wa_data;

var whatsappCss =
  ".wa__btn_w_img .wa__cs_img_wrap { display: block; } .nta_wa_button .nta-wa-gdpr { color: #6d6d6d; }";
if (window.Shopify.shop === "by-moleton.myshopify.com") {
  whatsappCss += ".wa__stt_online .wa__cs_info .wa__cs_status {display: none;}";
}
if (window.Shopify.shop === "takeanalytics.myshopify.com") {
  whatsappCss += ".wa__btn_popup, .wa__popup_chat_box {z-index: 0;}";
}
if(window.Shopify.shop === 'wig-store-hair-and-beauty-canada.myshopify.com' && window.Shopify.theme.name === 'APR 2022 - with loox || OPT - AUG 10, 2022') {
  whatsappCss += ".nta-woo-products-button{display: inline-block !important;vertical-align: -40px;margin-left: 15px;margin-top: 0 !important;}";
}
if (window.Shopify.shop === "85pluscoffees.myshopify.com") {
  let waWidthButton = document.querySelectorAll(".shopify-payment-button__button")[0].offsetWidth;
  whatsappCss += `.wa__btn_w_icon:nth-of-type(1){margin-top:0;}.wa__button{width:${waWidthButton}px;min-height:48px;}.wa__btn_w_icon .wa__btn_icon img{height: 30px;width:35px;}.wa__button_text_only .wa__btn_txt, .wa__r_button.wa__btn_w_img.wa__button_text_only .wa__btn_txt, .wa__sq_button.wa__btn_w_img.wa__button_text_only .wa__btn_txt{padding-bottom: 16px;padding-top: 16px;}.shopify-payment-button__button--hidden{display:none;}`;
} 
var whatsappHead = document.head || document.getElementsByTagName("head")[0];
var whatsappStyle = document.createElement("style");
whatsappHead.appendChild(whatsappStyle);

whatsappStyle.type = "text/css";
if (whatsappStyle.styleSheet) {
  // This is required for IE8 and below.
  whatsappStyle.styleSheet.cssText = whatsappCss;
} else {
  whatsappStyle.appendChild(document.createTextNode(whatsappCss));
}

const waGetCookie = function (cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
const waCheckGDPR = function (isShowGDPR) {
  if (isShowGDPR === "OFF") {
    return "";
  }
  if (waGetCookie("nta-wa-gdpr") == "accept") {
    return "";
  }
  return "1";
};
const checkTranlations = function (field) {
  let waLocale = window.Shopify.locale;
  if (waLocale === "zh-TW") {
    waLocale = "zh";
  }
  if (
    waLocale !== "en" &&
    seedgrowWaData.translations.enabled &&
    seedgrowWaData.translations.enabled === true &&
    seedgrowWaData.translations[waLocale] &&
    seedgrowWaData.translations[waLocale][field]
  ) {
    return true;
  }
  return false;
};
const translationText = function (field) {
  let waLocale = window.Shopify.locale;
  if (waLocale === "zh-TW") {
    waLocale = "zh";
  }
  return seedgrowWaData.translations[waLocale][field];
};

const changeSingleQuotes = function (text) {
  return text.replaceAll(/\'/gi, "’");
};

const seedgrowWaButtonMobileCheck = function () {
  var check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  if (check === false) {
    var waWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
    if (waWidth < 500) check = true;
  }
  return check;
};

const seedgrowWaInsertAfter = function (newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

document.addEventListener("DOMContentLoaded", function () {
  let waLocale = window.Shopify.locale;
  seedgrowWaData = window.seedgrow_wa_data;
  if (waLocale === "zh-TW") {
    waLocale = "zh";
  }
  if (window.seedgrow_widget_setting) {
    seedgrowWaData.options.styles = window.seedgrow_widget_setting;
  } else {
    seedgrowWaData.options.styles = {
      gdprContent:
        "Please accept our privacy policy first to start a conversation.",
      isShowGDPR: "OFF",
    };
  }
  if (seedgrowWaData.accounts) {
    let showButtonAccount = [];
    seedgrowWaData.accounts.forEach((account, index) => {
      if (account.showButton) {
        showButtonAccount.push(account);
      }
    });
    const waPathName = window.location.pathname;
    // Add button on product page
    if (
      showButtonAccount.length > 0
    ) {
      if(window.Shopify.shop === "andreas-tsantes7.myshopify.com") {
        if( (waPathName === "/" ||
        waPathName === `/${waLocale}` ||
        waPathName === `/${waLocale}/`) ) {
          var buttonPosition = document.querySelectorAll(
            "form.mainProduct[action='/cart/add']"
          );
          if (
            buttonPosition.length === 0 ||
            (waLocale !== "en" &&
              window.Shopify.theme.name === "USP Version - Loop 11/12/2021")
          ) {
            buttonPosition = document.querySelectorAll(
              `form.mainProduct[action='/${waLocale}/cart/add']`
            );
          }
          if (buttonPosition.length > 0) {
            let waButtonStyle = seedgrowWaData.buttonInfo.styles;
            waButtonStyle.label = "Need Help? Chat with us";
            if("gdprContent" in seedgrowWaData.options.styles) {
              seedgrowWaData.options.styles.gdprContent = changeSingleQuotes(
                seedgrowWaData.options.styles.gdprContent
              );
            }
            if("btnLabel" in seedgrowWaData.options.styles) {
              seedgrowWaData.options.styles.btnLabel = changeSingleQuotes(
                seedgrowWaData.options.styles.btnLabel
              );
            }
            if("description" in seedgrowWaData.options.styles) {
              seedgrowWaData.options.styles.description = changeSingleQuotes(
                seedgrowWaData.options.styles.description
              );
            }
            if("responseText" in seedgrowWaData.options.styles) {
              seedgrowWaData.options.styles.responseText = changeSingleQuotes(
                seedgrowWaData.options.styles.responseText
              );
            }
            if("title" in seedgrowWaData.options.styles) {
              seedgrowWaData.options.styles.title = changeSingleQuotes(
                seedgrowWaData.options.styles.title
              );
            }
            showButtonAccount.forEach((account, index) => {
              account.accountName = account.accountName.replaceAll(/\'/gi, "’");
              account.dayOffsText = account.dayOffsText.replaceAll(/\'/gi, "’");
              //Translate Prefilled Message start
              if(checkTranlations(account.accountId) === true) {
                let predefinedText = translationText(account.accountId);
                predefinedText = predefinedText.replaceAll(
                  /\[sgwa_page_title\]/gi,
                  "[njwa_page_title]"
                );
                predefinedText = predefinedText.replaceAll(
                  /\[sgwa_page_url\]/gi,
                  "[njwa_page_url]"
                );
                predefinedText = predefinedText.replaceAll(/\'/gi, "%27");
                account.predefinedText = predefinedText;
              }
              //Translate Prefilled Message end
              account.predefinedText = account.predefinedText.replaceAll(/\'/gi, "’");
              account.willBeBackText = account.willBeBackText.replaceAll(/\'/gi, "’");
              account.title = account.title.replaceAll(/\'/gi, "’");
              const accountInfo = {
                name: account.accountName,
                info: account,
                styles: waButtonStyle,
                avatar: account.avatar,
                options: seedgrowWaData.options,
                gdprStatus: waCheckGDPR(seedgrowWaData.options.styles.isShowGDPR),
                defaultAvatar: seedgrowWaData.defaultAvatarUrl,
              };
              const waButtonAfterAddToCart = document.createElement("div");
              waButtonAfterAddToCart.className = "nta-woo-products-button";
              if (
                index === 0 ||
                (index > 0 && account.isAlwaysAvailable === "OFF")
              ) {
                if (window.Shopify.shop !== "85pluscoffees.myshopify.com") {
                  waButtonAfterAddToCart.style.marginTop = "20px";
                }else {
                  waButtonAfterAddToCart.style.marginLeft = "5px";
                }
              }
              waButtonAfterAddToCart.innerHTML = `<div class="nta_wa_button" data-id='${
                account.accountId
              }' data-info='${JSON.stringify(accountInfo)}'></div>`;
              if (buttonPosition.length === 1) {
                if(window.Shopify.shop === 'wig-store-hair-and-beauty-canada.myshopify.com' && window.Shopify.theme.name === 'APR 2022 - with loox || OPT - AUG 10, 2022') {
                  buttonPosition = document.querySelectorAll(".product-form__controls-group");
                  buttonPosition[1].appendChild(waButtonAfterAddToCart);
                } else if (window.Shopify.shop === 'wig-store-hair-and-beauty-canada.myshopify.com' && window.Shopify.theme.name === 'APR 2022 - with loox || OPT - AUG 22, 2022  ') {
                  buttonPosition = document.querySelectorAll(".product__price");
                  buttonPosition[0].appendChild(waButtonAfterAddToCart);
                } else if (window.Shopify.shop === 'iqoniq-co.myshopify.com') {
                  buttonPosition = document.querySelectorAll(".hup_product-container");
                  seedgrowWaInsertAfter(waButtonAfterAddToCart,buttonPosition[0]);
                } else {
                  buttonPosition[0].appendChild(waButtonAfterAddToCart);
                }
              } else {
                let specialTheme = window.Shopify.theme.id;
                let specialThemeName = window.Shopify.theme.name;
                if (
                  specialTheme === 125958717638 ||
                  specialTheme === 130860744948 ||
                  specialThemeName === "Avone-install-me-shopify2.0" ||
                  specialThemeName === "Avone-install-with-growave" ||
                  specialThemeName === "USP Version - Loop 11/12/2021" ||
                  specialThemeName === "Upload me shella theme 5.0.2" ||
                  specialThemeName === "Funiter home 5" ||
                  specialThemeName === "Funiter JJ[speed3]" ||
                  specialThemeName === "SOBIA HASSAN" ||
                  specialThemeName === "Mondello1962 - nuova identity" ||
                  window.Shopify.shop === "bratariax.myshopify.com" ||
                  (window.Shopify.shop === "zynaheng.myshopify.com" && specialThemeName === "ELLA420 (USF - custom filter)")
                ) {
                  buttonPosition[0].appendChild(waButtonAfterAddToCart);
                } else if (specialThemeName === "Ella-5.1.0-sections-ready") {
                  buttonPosition = document.querySelectorAll("#add-to-cart-form");
                  buttonPosition[0].appendChild(waButtonAfterAddToCart);
                } else {
                  buttonPosition[1].appendChild(waButtonAfterAddToCart);
                }
              }
            });
            document
              .querySelectorAll(".nta_wa_button")
              .forEach(function (element) {
                if (element._isWaButton) return;
                const info = JSON.parse(element.getAttribute("data-info"));
                njtWhatsApp.createButton(element, {
                  ...info,
                  timezone: seedgrowWaData.timezone,
                  i18n: {
                    offline: "Offline",
                    online: "Online",
                  },
                  urlSettings: seedgrowWaData.urlSettings,
                });
              });
          }
        }
      } else if (window.Shopify.shop === "www-seletticonceptstore-com.myshopify.com" && window.Shopify.theme.name === "Flex 3.5 (NEW_Georgia)") {
        if( ( waPathName === "/pages/concierge" ||
        waPathName === `/${waLocale}/pages/concierge` ||
        waPathName === "/pages/about-us" ||
        waPathName === `/${waLocale}/pages/about-us`) ) {
          var buttonPosition = document.querySelectorAll(
            ".page-concierge .shopify-section.rich-text .rich-text__content .buttons"
          );
          if (buttonPosition.length > 0) {
            let waButtonStyle = seedgrowWaData.buttonInfo.styles ?? {
              type: "round"
            };
            waButtonStyle.label =
              checkTranlations("buttonLabel") === false
                ? changeSingleQuotes(waButtonStyle.label)
                : changeSingleQuotes(translationText("buttonLabel"));
            seedgrowWaData.options.styles.gdprContent = changeSingleQuotes(
              seedgrowWaData.options.styles.gdprContent
            );
            if("btnLabel" in seedgrowWaData.options.styles) {
              seedgrowWaData.options.styles.btnLabel = changeSingleQuotes(
                seedgrowWaData.options.styles.btnLabel
              );
            }
            if("description" in seedgrowWaData.options.styles) {
              seedgrowWaData.options.styles.description = changeSingleQuotes(
                seedgrowWaData.options.styles.description
              );
            }
            if("responseText" in seedgrowWaData.options.styles) {
              seedgrowWaData.options.styles.responseText = changeSingleQuotes(
                seedgrowWaData.options.styles.responseText
              );
            }
            if("title" in seedgrowWaData.options.styles) {
              seedgrowWaData.options.styles.title = changeSingleQuotes(
                seedgrowWaData.options.styles.title
              );
            }
            showButtonAccount.forEach((account, index) => {
              account.accountName = account.accountName.replaceAll(/\'/gi, "’");
              account.dayOffsText = account.dayOffsText.replaceAll(/\'/gi, "’");
              //Translate Prefilled Message start
              if(checkTranlations(account.accountId) === true) {
                let predefinedText = translationText(account.accountId);
                predefinedText = predefinedText.replaceAll(
                  /\[sgwa_page_title\]/gi,
                  "[njwa_page_title]"
                );
                predefinedText = predefinedText.replaceAll(
                  /\[sgwa_page_url\]/gi,
                  "[njwa_page_url]"
                );
                predefinedText = predefinedText.replaceAll(/\'/gi, "%27");
                account.predefinedText = predefinedText;
              }
              //Translate Prefilled Message end
              account.predefinedText = account.predefinedText.replaceAll(/\'/gi, "’");
              account.willBeBackText = account.willBeBackText.replaceAll(/\'/gi, "’");
              account.title = account.title.replaceAll(/\'/gi, "’");
              const accountInfo = {
                name: account.accountName,
                info: account,
                styles: waButtonStyle,
                avatar: account.avatar,
                options: seedgrowWaData.options,
                gdprStatus: waCheckGDPR(seedgrowWaData.options.styles.isShowGDPR),
                defaultAvatar: seedgrowWaData.defaultAvatarUrl,
              };
              buttonPosition.forEach(function (button) {
                const waButtonAfterAddToCart = document.createElement("div");
                waButtonAfterAddToCart.className = "nta-woo-products-button";
                if (
                  index === 0 ||
                  (index > 0 && account.isAlwaysAvailable === "OFF")
                ) {
                  if (window.Shopify.shop !== "85pluscoffees.myshopify.com") {
                    waButtonAfterAddToCart.style.marginTop = "20px";
                  }else {
                    waButtonAfterAddToCart.style.marginLeft = "5px";
                  }
                }
                waButtonAfterAddToCart.innerHTML = `<div class="nta_wa_button" data-id='${
                  account.accountId
                }' data-info='${JSON.stringify(accountInfo)}'></div>`;
                let waRemoveElement =  button.querySelector(".button.button--primary");
                if(waRemoveElement) {
                  waRemoveElement.remove();
                }
                button.appendChild(waButtonAfterAddToCart);
              })
            });
            document
              .querySelectorAll(".nta_wa_button")
              .forEach(function (element) {
                if (element._isWaButton) return;
                const info = JSON.parse(element.getAttribute("data-info"));
                njtWhatsApp.createButton(element, {
                  ...info,
                  timezone: seedgrowWaData.timezone,
                  i18n: {
                    offline: "Offline",
                    online: "Online",
                  },
                  urlSettings: seedgrowWaData.urlSettings,
                });
              });
          }
        }
      } else {
        if (waPathName.indexOf("/products") === 0 ||
        waPathName.indexOf(`/${waLocale}-id/products`) === 0 ||
          (waPathName.indexOf("/collections") === 0 &&
            waPathName.indexOf("/products/") > 10) ||
          waPathName.indexOf(`/${waLocale}/products`) === 0 ||
          (waPathName.indexOf(`/${waLocale}/collections`) === 0 &&
            waPathName.indexOf("/products/") > 10)
        ) {
          var buttonPosition = document.querySelectorAll(
            "form.mainProduct[action='/cart/add']"
          );
          if (
            buttonPosition.length === 0 ||
            (waLocale !== "en" &&
              window.Shopify.theme.name === "USP Version - Loop 11/12/2021")
          ) {
            if(waPathName.indexOf(`/${waLocale}-id/products`) === 0) {
              buttonPosition = document.querySelectorAll(
                `form.mainProduct[action='/${waLocale}/cart/add']`
              );
            } else {
              buttonPosition = document.querySelectorAll(
                `form.mainProduct[action='/${waLocale}/cart/add']`
              );
            }
          }
          if (buttonPosition.length > 0) {
            let waButtonStyle = seedgrowWaData.buttonInfo.styles ?? {
              type: "round"
            };
            waButtonStyle.label = "Need Help in Your Order? <br>Chat with Us";
            if("gdprContent" in seedgrowWaData.options.styles) {
              seedgrowWaData.options.styles.gdprContent = changeSingleQuotes(
                seedgrowWaData.options.styles.gdprContent
              );
            }
            if("btnLabel" in seedgrowWaData.options.styles) {
              seedgrowWaData.options.styles.btnLabel = changeSingleQuotes(
                seedgrowWaData.options.styles.btnLabel
              );
            }
            if("description" in seedgrowWaData.options.styles) {
              seedgrowWaData.options.styles.description = changeSingleQuotes(
                seedgrowWaData.options.styles.description
              );
            }
            if("responseText" in seedgrowWaData.options.styles) {
              seedgrowWaData.options.styles.responseText = changeSingleQuotes(
                seedgrowWaData.options.styles.responseText
              );
            }
            if("title" in seedgrowWaData.options.styles) {
              seedgrowWaData.options.styles.title = changeSingleQuotes(
                seedgrowWaData.options.styles.title
              );
            }
            showButtonAccount.forEach((account, index) => {
              account.accountName = account.accountName.replaceAll(/\'/gi, "’");
              account.dayOffsText = account.dayOffsText.replaceAll(/\'/gi, "’");
              //Translate Prefilled Message start
              if(checkTranlations(account.accountId) === true) {
                let predefinedText = translationText(account.accountId);
                predefinedText = predefinedText.replaceAll(
                  /\[sgwa_page_title\]/gi,
                  "[njwa_page_title]"
                );
                predefinedText = predefinedText.replaceAll(
                  /\[sgwa_page_url\]/gi,
                  "[njwa_page_url]"
                );
                predefinedText = predefinedText.replaceAll(/\'/gi, "%27");
                account.predefinedText = predefinedText;
              }
              //Translate Prefilled Message end
              account.predefinedText = account.predefinedText.replaceAll(/\'/gi, "’");
              account.willBeBackText = account.willBeBackText.replaceAll(/\'/gi, "’");
              account.title = account.title.replaceAll(/\'/gi, "’");
              const accountInfo = {
                name: account.accountName,
                info: account,
                styles: waButtonStyle,
                avatar: account.avatar,
                options: seedgrowWaData.options,
                gdprStatus: waCheckGDPR(seedgrowWaData.options.styles.isShowGDPR),
                defaultAvatar: seedgrowWaData.defaultAvatarUrl,
              };
              const waButtonAfterAddToCart = document.createElement("div");
              waButtonAfterAddToCart.className = "nta-woo-products-button";
              if (
                index === 0 ||
                (index > 0 && account.isAlwaysAvailable === "OFF")
              ) {
                if (window.Shopify.shop !== "85pluscoffees.myshopify.com" && window.Shopify.shop !== "suvidhaonline.myshopify.com") {
                  waButtonAfterAddToCart.style.marginTop = "20px";
                }else {
                  waButtonAfterAddToCart.style.marginLeft = "5px";
                }
              }
              waButtonAfterAddToCart.innerHTML = `<div class="nta_wa_button" data-id='${
                account.accountId
              }' data-info='${JSON.stringify(accountInfo)}'></div>`;
              if (buttonPosition.length === 1) {
                if (window.Shopify.shop === 'suvidhaonline.myshopify.com') {
                  buttonPosition = document.querySelectorAll(".variations_button");
                  buttonPosition[0].prepend(waButtonAfterAddToCart);
                } else if (window.Shopify.shop === 'zynaheng.myshopify.com' && waLocale === 'ar') {
                  buttonPosition = document.querySelectorAll(
                    `form[action='/${waLocale}/cart/add']`
                  );
                  buttonPosition[0].appendChild(waButtonAfterAddToCart);
                } else {
                  buttonPosition[0].appendChild(waButtonAfterAddToCart);
                }
              } else {
                let specialTheme = window.Shopify.theme.id;
                let specialThemeName = window.Shopify.theme.name;
                if (
                  specialTheme === 125958717638 ||
                  specialTheme === 130860744948 ||
                  specialThemeName === "Avone-install-me-shopify2.0" ||
                  specialThemeName === "Avone-install-with-growave" ||
                  specialThemeName === "USP Version - Loop 11/12/2021" ||
                  specialThemeName === "Upload me shella theme 5.0.2" ||
                  specialThemeName === "Funiter home 5" ||
                  specialThemeName === "Funiter JJ[speed3]" ||
                  specialThemeName === "SOBIA HASSAN" ||
                  specialThemeName === "Mondello1962 - nuova identity" ||
                  window.Shopify.shop === "bratariax.myshopify.com" ||
                  window.Shopify.shop === "zynaheng.myshopify.com" ||
                  window.Shopify.shop === "fragmantic.myshopify.com"
                ) {
                  buttonPosition[0].appendChild(waButtonAfterAddToCart);
                } else if (specialThemeName === "Ella-5.1.0-sections-ready" || specialThemeName === "Ella-5.0.4-sections-ready") {
                  buttonPosition = document.querySelectorAll("#add-to-cart-form");
                  buttonPosition[0].appendChild(waButtonAfterAddToCart);
                } else if (window.Shopify.shop === "unitec-usa-2152.myshopify.com") {
                  buttonPosition = document.querySelectorAll(".productView-buttons");
                  buttonPosition[0].prepend(waButtonAfterAddToCart);
                } else if (window.Shopify.shop === "toyshop-9901.myshopify.com") {
                  buttonPosition = document.querySelectorAll(".product_single_detail_section");
                  buttonPosition[0].appendChild(waButtonAfterAddToCart);
                } else if (window.Shopify.shop === "bosspakistan.myshopify.com" && specialThemeName === "Boss-Theme") {
                  buttonPosition[7].appendChild(waButtonAfterAddToCart);
                } else if (window.Shopify.shop === "paraperrosygatos-es.myshopify.com" && specialThemeName === "Yotpo Famipet home2 | FIXED") {
                  buttonPosition[0].appendChild(waButtonAfterAddToCart);
                } else if (window.Shopify.shop === "af1d48.myshopify.com" && specialThemeName === "Saab-Theme") {
                  buttonPosition = document.querySelectorAll(".product-form-product-template");
                  buttonPosition[0].appendChild(waButtonAfterAddToCart);
                } else {
                  buttonPosition[1].appendChild(waButtonAfterAddToCart);
                }
              }
            });
            document
              .querySelectorAll(".nta_wa_button")
              .forEach(function (element) {
                if (element._isWaButton) return;
                const info = JSON.parse(element.getAttribute("data-info"));
                njtWhatsApp.createButton(element, {
                  ...info,
                  timezone: seedgrowWaData.timezone,
                  i18n: {
                    offline: "Offline",
                    online: "Online",
                  },
                  urlSettings: seedgrowWaData.urlSettings,
                });
              });
          }
        }
      }  
    }
  }
});
