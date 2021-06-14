import React, { isValidElement, cloneElement, Children, useRef, useEffect, useState, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css, useTheme, ThemeProvider, createGlobalStyle } from 'styled-components';
import { space, typography, layout, variant as variant$1, background, border, position, flexbox, grid, color } from 'styled-system';
import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import throttle from 'lodash/throttle';
import { Link as Link$1, NavLink, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) {
    return function (theme) {
        return get(theme, path, fallback);
    };
};

var rotate = keyframes(templateObject_1$Y || (templateObject_1$Y = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled.svg(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"], ["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$Y, templateObject_2$n, templateObject_3$a;

var Icon$1D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$1B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$1A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$X || (templateObject_1$X = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ",
    "\n\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, function (_a) {
    var ellipsis = _a.ellipsis;
    return ellipsis &&
        "white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;";
}, space, typography, layout);
Text.defaultProps = {
    color: "text",
    small: false,
    ellipsis: false,
};
var templateObject_1$X;

var TooltipText = styled(Text)(templateObject_1$W || (templateObject_1$W = __makeTemplateObject(["\n  text-decoration: ", ";\n  text-underline-offset: 0.1em;\n"], ["\n  text-decoration: ", ";\n  text-underline-offset: 0.1em;\n"])), function (_a) {
    var theme = _a.theme;
    return "underline dotted " + theme.colors.textSubtle;
});
var templateObject_1$W;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales$7 = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$4 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var _a$4, _b$2;
var scaleVariants$1 = (_a$4 = {},
    _a$4[scales$7.MD] = {
        height: "48px",
        padding: "0 24px",
    },
    _a$4[scales$7.SM] = {
        height: "32px",
        padding: "0 16px",
    },
    _a$4[scales$7.XS] = {
        height: "20px",
        fontSize: "12px",
        padding: "0 8px",
    },
    _a$4);
var styleVariants$2 = (_b$2 = {},
    _b$2[variants$4.PRIMARY] = {
        backgroundColor: "primary",
        color: "white",
    },
    _b$2[variants$4.SECONDARY] = {
        backgroundColor: "transparent",
        border: "2px solid",
        borderColor: "primary",
        boxShadow: "none",
        color: "primary",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b$2[variants$4.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "primary",
    },
    _b$2[variants$4.SUBTLE] = {
        backgroundColor: "textSubtle",
        color: "backgroundAlt",
    },
    _b$2[variants$4.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b$2[variants$4.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
    },
    _b$2[variants$4.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b$2);

var getDisabledStyles = function (_a) {
    var $isLoading = _a.$isLoading, theme = _a.theme;
    if ($isLoading === true) {
        return "\n      &:disabled,\n      &.kitty-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.kitty-button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton = styled.button(templateObject_1$V || (templateObject_1$V = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 24px;\n  box-shadow: rgba(75, 75, 88 , 0.15) 0px 2px 20px 0px, rgba(14, 14, 19, 0.1) 0px 2px 10px 0px;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.kitty-button--disabled):not(.kitty-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.kitty-button--disabled):not(.kitty-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 24px;\n  box-shadow: rgba(75, 75, 88 , 0.15) 0px 2px 20px 0px, rgba(14, 14, 19, 0.1) 0px 2px 10px 0px;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.kitty-button--disabled):not(.kitty-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.kitty-button--disabled):not(.kitty-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, variant$1({
    prop: "scale",
    variants: scaleVariants$1,
}), variant$1({
    variants: styleVariants$2,
}), layout, space);
var templateObject_1$V;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("kitty-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("kitty-button--disabled");
    }
    return (React.createElement(StyledButton, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React.createElement(React.Fragment, null,
            isValidElement(startIcon) &&
                cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            isValidElement(endIcon) &&
                cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$4.PRIMARY,
    scale: scales$7.MD,
    disabled: false,
};

var IconButton = styled(Button)(templateObject_1$U || (templateObject_1$U = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$U;

var Icon$1z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$1x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$1w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$1v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$1u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" })));
};

var Icon$1t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" })));
};

var Icon$1s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$1r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$1q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("path", { d: "M58.6666 34.1665C58.6666 48.8523 46.7275 59.6665 31.9999 59.6665C17.2723 59.6665 5.33325 48.8523 5.33325 34.1665C5.33325 19.4808 17.2723 8.6665 31.9999 8.6665C46.7275 8.6665 58.6666 19.4808 58.6666 34.1665Z", fill: "#EB8C00" }),
        React.createElement("path", { d: "M58.6666 29.8335C58.6666 44.5192 46.7275 55.3335 31.9999 55.3335C17.2723 55.3335 5.33325 44.5192 5.33325 29.8335C5.33325 15.1477 17.2723 4.3335 31.9999 4.3335C46.7275 4.3335 58.6666 15.1477 58.6666 29.8335Z", fill: "#FFD800" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M50.4313 11.0848C48.0923 9.01961 45.3538 7.36511 42.3351 6.21094L7.60376 40.5648C8.9535 43.3887 10.8247 45.9001 13.0998 48.0105L50.4313 11.0848ZM24.6139 54.2485C22.7419 53.762 20.9537 53.0928 19.2734 52.259L55.1875 16.7354C56.1366 18.2849 56.918 19.9495 57.5084 21.7116L24.6139 54.2485Z", fill: "#FFE971" }),
        React.createElement("path", { d: "M53.6667 29.5002C53.6667 41.2698 44.0409 49.6668 32.1667 49.6668C20.2926 49.6668 10.6667 41.2698 10.6667 29.5002C10.6667 17.7305 20.2926 9.3335 32.1667 9.3335C44.0409 9.3335 53.6667 17.7305 53.6667 29.5002Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M51.6667 20.6615C45.1982 12.2514 33.2898 9.7153 23.8129 15.1469C14.5027 20.483 10.7276 31.6814 14.4875 41.3335C12.0783 38.0902 10.6667 34.0691 10.6667 29.5527C10.6667 17.7524 20.303 9.3335 32.19 9.3335C40.7965 9.33349 48.2231 13.7468 51.6667 20.6615Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M23.4077 30.5L19.8827 34.0117L16.3333 30.5L19.8827 26.9883L23.4077 30.5ZM31.9999 21.9992L38.0708 28.0055L41.6202 24.4938L35.5494 18.5117L31.9999 15L28.4504 18.5117L22.4041 24.4938L25.9536 28.0055L31.9999 21.9992ZM44.1171 26.9883L40.5921 30.5L44.1416 34.0117L47.6666 30.5L44.1171 26.9883ZM31.9999 39.0008L25.9291 32.9945L22.4041 36.5063L28.4749 42.5125L31.9999 46L35.5494 42.4883L41.6202 36.482L38.0708 32.9945L31.9999 39.0008ZM31.9999 34.0117L35.5494 30.5L31.9999 26.9883L28.4504 30.5L31.9999 34.0117Z", fill: "#191326" })));
};

var Icon$1p = function (props) {
    uniqueId("svg");
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip-path", transform: "translate(-0.57 -12.67)" },
                React.createElement("rect", { width: "128", height: "128", fill: "none" }))),
        React.createElement("title", null, "kitty-cards"),
        React.createElement("g", { "clip-path": "url(#clip-path)" },
            React.createElement("g", null,
                React.createElement("rect", { x: "43.62", y: "35.22", width: "80", height: "64", rx: "10.67", transform: "translate(-16.97 93.36) rotate(-60)", fill: "#7645d9" }),
                React.createElement("g", null,
                    React.createElement("g", null,
                        React.createElement("path", { d: "M91.52,56.18s0,0,0,0h0Z", transform: "translate(-0.57 -12.67)", fill: "#6b42d1" }),
                        React.createElement("path", { d: "M93.21,64.5c.3-.58.59-1.2.87-1.83s.46-1.07.67-1.61c1.09-2.85,2.06-6.44.5-7.46-.81-.54-2-.24-3.64.91A21,21,0,0,0,88.69,57c-.45.44-.9.91-1.32,1.38s-.79.9-1.15,1.34l-.14.17L86,60c-.21.27-.42.54-.61.8a11.14,11.14,0,0,0-.86,1.33v0a1,1,0,0,0-.07.15,3.55,3.55,0,0,0,1.2,4.08,5.28,5.28,0,0,0,.85.65,5.9,5.9,0,0,0,1.3.66,2.39,2.39,0,0,0,.32.11l.06,0,.22.06h.11l.19,0h.09l.19,0h.33a4.21,4.21,0,0,0,.5,0h0l.2,0h.06l.23-.06.2-.07h0l.16-.08.07,0,.12-.07h0l0,0a.62.62,0,0,1,.12-.08s0,0,0,0l.15-.11.06,0,.08-.07s0,0,.07-.06l.07-.08,0-.06s0-.06.09-.09,0,0,.06-.09A17,17,0,0,0,93.21,64.5Zm-1.68-8.31h0Z", transform: "translate(-0.57 -12.67)", fill: "#6b42d1" })),
                    React.createElement("path", { d: "M97.37,89.79a11.37,11.37,0,0,1,1.85,1.54,12.63,12.63,0,0,0,1.3-1.79c.19-.32.37-.65.53-1-.6-.41-1.23-.78-1.87-1.13-.83-.44-1.63-.83-2.48-1.2a9,9,0,0,1,2.71.61,12.3,12.3,0,0,1,2,1,15.67,15.67,0,0,0,.86-2.64,19.05,19.05,0,0,0-1.87-.51,22.59,22.59,0,0,0-2.65-.53,8.06,8.06,0,0,1,2.77-.12,12.27,12.27,0,0,1,1.92.36,19.77,19.77,0,0,0,.11-6.25h0c1.92-4.1,4.23-11.55,2-13.07-1.66-1.1-4.41.51-6.41,2a26.19,26.19,0,0,0-4-4.44c-.28.63-.57,1.25-.87,1.83a17,17,0,0,1-1.39,2.3s0,.06-.06.09-.06.07-.09.09l0,.06-.07.08s0,0-.07.06l-.08.07-.06,0-.15.11s0,0,0,0a.62.62,0,0,0-.12.08l0,0h0l-.12.07-.07,0-.16.08h0l-.2.07-.23.06h-.06l-.2,0h0a4.21,4.21,0,0,1-.5,0H89l-.19,0h-.09l-.19,0h-.11l-.22-.06-.06,0a2.39,2.39,0,0,1-.32-.11,5.9,5.9,0,0,1-1.3-.66,5.28,5.28,0,0,1-.85-.65,3.55,3.55,0,0,1-1.2-4.08,1,1,0,0,1,.07-.15v0a11.14,11.14,0,0,1,.86-1.33c.19-.26.4-.53.61-.8l0-.05.14-.17c.36-.44.74-.9,1.15-1.34a25.66,25.66,0,0,0-6.25-1.85c.65-2.5,1.16-6-.63-7.1-2.58-1.64-9.67,5-12.11,8.26h0a20,20,0,0,0-4.9,2.65c.12.11.24.24.36.36A11.49,11.49,0,0,1,65.53,63a9.45,9.45,0,0,1,1,2.58c-.49-.78-1-1.51-1.56-2.22a25.72,25.72,0,0,0-1.74-2l-.42-.43a16.35,16.35,0,0,0-2.24,2.24c.21.1.4.22.6.33a12.61,12.61,0,0,1,2.21,1.7,8.32,8.32,0,0,1,1.69,2.21A26,26,0,0,0,63,65.61a21.38,21.38,0,0,0-2.21-1.49l-.68-.38c-.24.32-.47.67-.68,1a13.51,13.51,0,0,0-1,2.1c.21.05.43.11.64.18a12.91,12.91,0,0,1,2.54,1.16A9.29,9.29,0,0,1,63.7,70a23.74,23.74,0,0,0-2.42-1.21,22.89,22.89,0,0,0-2.49-1l-.65-.19c-2.49,8,3.45,17.15,13.56,23.26s21.1,7.07,27,1.06c-.53-.56-1.1-1.1-1.68-1.62s-1.39-1.17-2.14-1.71A8.53,8.53,0,0,1,97.37,89.79ZM98,69.87a13.87,13.87,0,0,1,1.13-1.17c1.08-1,2.6-2,3.65-1.22.49.37,1,1.24.11,4.48a26.19,26.19,0,0,1-1,2.92,8.9,8.9,0,0,1-.66,1.27.64.64,0,0,1-.88.18,1.35,1.35,0,0,1-.3-.24c-.6-.54-2-2.15-2.17-5.76A.61.61,0,0,1,98,69.87ZM71.68,57.78s0-.06-.05-.08a.64.64,0,0,1-.13-.8l.08-.13c.83-1.26,4-4.47,6-5a1.68,1.68,0,0,1,1.29.12c1.29.77.84,3,.37,4.39a9.15,9.15,0,0,1-.45,1.18.64.64,0,0,1-.38.36C74,59.35,71.78,57.84,71.68,57.78Zm.5,15.57L72,73.18c-1-.91-1-2.83.08-4.46s3.09-2.49,4.33-1.67a2.36,2.36,0,0,1,1,2,4.7,4.7,0,0,1-.82,2.64c-1.13,1.69-3,2.45-4.24,1.73ZM84.9,84.68l-.4.17a.05.05,0,0,1,0,0,4.73,4.73,0,0,1-3.8,0,11.26,11.26,0,0,1-2.4,1.62,3.68,3.68,0,0,1-3.39.29,2,2,0,0,1-.41-.3,4.18,4.18,0,0,1-1.14-2.74,11.35,11.35,0,0,1,.13-2.94,5.19,5.19,0,0,1-.58-.44,5,5,0,0,1-1.48-2.78v0a1.56,1.56,0,0,1,0-.43.59.59,0,0,1,.55-.62.58.58,0,0,1,.62.55l0,.26v0A3.61,3.61,0,0,0,74.36,80a5.27,5.27,0,0,0,3.44.16A3.78,3.78,0,0,1,77,77.74a1.34,1.34,0,0,1,.73-1.29,2,2,0,0,1,1.28,0,7.53,7.53,0,0,1,1.26.55c.77.42,1.72,1.07,1.84,1.83a1.36,1.36,0,0,1-.68,1.33,3.74,3.74,0,0,1-2.47.58,5.32,5.32,0,0,0,1.94,2.87,3.44,3.44,0,0,0,3.19.09h0a0,0,0,0,1,0,0l.32-.14a.58.58,0,1,1,.47,1.07Zm7.83-6.08,0,0a12.88,12.88,0,0,0-1.5-.21,8.87,8.87,0,0,0-1.46,0c-.23,0-.47.07-.7.11l-.34.08a1.21,1.21,0,0,0-.18.05h0a6.13,6.13,0,0,1,.82.49,4.33,4.33,0,0,1,1,.94A5,5,0,0,1,91,81.18a.21.21,0,0,1-.12.27.21.21,0,0,1-.23,0v0c-.15-.15-.27-.3-.42-.43a5.39,5.39,0,0,0-.43-.39A4.93,4.93,0,0,0,88.8,80a5.45,5.45,0,0,0-1-.4,3,3,0,0,0-.54-.12c-.1,0-.18,0-.27,0l-.12,0H86.7a.61.61,0,0,1-.57-.64.58.58,0,0,1,.28-.48A6.49,6.49,0,0,1,88,77.52a5.43,5.43,0,0,1,.84-.2,5.08,5.08,0,0,1,.87,0,5.88,5.88,0,0,1,1.68.24,5.14,5.14,0,0,1,1.52.71.22.22,0,0,1,0,.3A.2.2,0,0,1,92.73,78.6Z", transform: "translate(-0.57 -12.67)", fill: "#8a5fff" }),
                    React.createElement("path", { d: "M101.2,76.15a.64.64,0,0,1-.88.18,1.35,1.35,0,0,1-.3-.24c-.6-.54-2-2.15-2.17-5.76a.61.61,0,0,1,.16-.46,13.87,13.87,0,0,1,1.13-1.17c1.08-1,2.6-2,3.65-1.22.49.37,1,1.24.11,4.48a26.19,26.19,0,0,1-1,2.92A8.9,8.9,0,0,1,101.2,76.15Z", transform: "translate(-0.57 -12.67)", fill: "#6b42d1" }),
                    React.createElement("path", { d: "M78.41,57.85c-4.41,1.5-6.63,0-6.73-.07s0-.06-.05-.08a.64.64,0,0,1-.13-.8l.08-.13c.83-1.26,4-4.47,6-5a1.68,1.68,0,0,1,1.29.12c1.29.77.84,3,.37,4.39a9.15,9.15,0,0,1-.45,1.18A.64.64,0,0,1,78.41,57.85Z", transform: "translate(-0.57 -12.67)", fill: "#6b42d1" }),
                    React.createElement("path", { d: "M66.55,65.53c-.49-.78-1-1.51-1.56-2.22a25.72,25.72,0,0,0-1.74-2l-.42-.43c-.49-.48-1-1-1.53-1.4-.34-.3-.69-.56-1-.85-.17-.16-.37-.28-.54-.42s-.36-.28-.54-.43c.21.06.43.15.66.23s.43.16.64.26a9.67,9.67,0,0,1,1.21.69,11.06,11.06,0,0,1,1.79,1.42c.12.11.24.24.36.36A11.49,11.49,0,0,1,65.53,63,9.45,9.45,0,0,1,66.55,65.53Z", transform: "translate(-0.57 -12.67)", fill: "#6b42d1" }),
                    React.createElement("path", { d: "M65.09,67.34A26,26,0,0,0,63,65.61a21.38,21.38,0,0,0-2.21-1.49l-.68-.38c-.55-.31-1.1-.6-1.68-.87-.41-.2-.82-.36-1.24-.54-.21-.11-.42-.17-.62-.26l-.65-.27c.24,0,.47,0,.69.06a4,4,0,0,1,.69.1,11.38,11.38,0,0,1,3.3,1.14c.21.1.4.22.6.33a12.61,12.61,0,0,1,2.21,1.7A8.32,8.32,0,0,1,65.09,67.34Z", transform: "translate(-0.57 -12.67)", fill: "#6b42d1" }),
                    React.createElement("path", { d: "M63.7,70a23.74,23.74,0,0,0-2.42-1.21,22.89,22.89,0,0,0-2.49-1l-.65-.19c-.63-.19-1.27-.37-1.92-.5-.44-.1-.88-.18-1.33-.26a5.16,5.16,0,0,0-.67-.1c-.22,0-.46-.07-.68-.12.23-.05.45-.07.69-.1a3.93,3.93,0,0,1,.69-.06,9.22,9.22,0,0,1,1.39,0,10.52,10.52,0,0,1,2.09.37c.21.05.43.11.64.18a12.91,12.91,0,0,1,2.54,1.16A9.29,9.29,0,0,1,63.7,70Z", transform: "translate(-0.57 -12.67)", fill: "#6b42d1" }),
                    React.createElement("path", { d: "M107.84,87.66l-.61-.31c-.21-.1-.39-.23-.61-.32-.4-.2-.8-.42-1.21-.59a25,25,0,0,0-2.46-1l-.69-.23a19.05,19.05,0,0,0-1.87-.51,22.59,22.59,0,0,0-2.65-.53,8.06,8.06,0,0,1,2.77-.12,12.27,12.27,0,0,1,1.92.36c.27.07.54.16.81.25a12.1,12.1,0,0,1,2.5,1.23,9.2,9.2,0,0,1,1.12.82c.18.15.35.31.51.47S107.7,87.49,107.84,87.66Z", transform: "translate(-0.57 -12.67)", fill: "#6b42d1" }),
                    React.createElement("path", { d: "M105.56,92.28c-.18-.15-.34-.31-.5-.47s-.32-.33-.49-.47l-1-.89a21.51,21.51,0,0,0-2.11-1.62,3.51,3.51,0,0,0-.4-.27c-.6-.41-1.23-.78-1.87-1.13-.83-.44-1.63-.83-2.48-1.2a9,9,0,0,1,2.71.61,12.3,12.3,0,0,1,2,1c.16.1.33.21.48.32A11.91,11.91,0,0,1,104,90a11.11,11.11,0,0,1,.87,1.08c.13.19.25.39.37.6S105.46,92.07,105.56,92.28Z", transform: "translate(-0.57 -12.67)", fill: "#6b42d1" }),
                    React.createElement("path", { d: "M102.16,96.45a4.82,4.82,0,0,1-.39-.57c-.13-.19-.24-.39-.38-.56-.26-.38-.51-.75-.78-1.1a26,26,0,0,0-1.7-2l-.23-.25c-.53-.56-1.1-1.1-1.68-1.62s-1.39-1.17-2.14-1.71a8.53,8.53,0,0,1,2.51,1.2,11.37,11.37,0,0,1,1.85,1.54l.27.27a12.05,12.05,0,0,1,2.24,3.52c.08.22.16.44.23.66S102.1,96.22,102.16,96.45Z", transform: "translate(-0.57 -12.67)", fill: "#6b42d1" }),
                    React.createElement("path", { d: "M84.9,84.68l-.4.17a.05.05,0,0,1,0,0,4.73,4.73,0,0,1-3.8,0,11.26,11.26,0,0,1-2.4,1.62,3.68,3.68,0,0,1-3.39.29,2,2,0,0,1-.41-.3,4.18,4.18,0,0,1-1.14-2.74,11.35,11.35,0,0,1,.13-2.94,5.19,5.19,0,0,1-.58-.44,5,5,0,0,1-1.48-2.78v0a1.56,1.56,0,0,1,0-.43.59.59,0,0,1,.55-.62.58.58,0,0,1,.62.55l0,.26v0A3.61,3.61,0,0,0,74.36,80a5.27,5.27,0,0,0,3.44.16A3.78,3.78,0,0,1,77,77.74a1.34,1.34,0,0,1,.73-1.29,2,2,0,0,1,1.28,0,7.53,7.53,0,0,1,1.26.55c.77.42,1.72,1.07,1.84,1.83a1.36,1.36,0,0,1-.68,1.33,3.74,3.74,0,0,1-2.47.58,5.32,5.32,0,0,0,1.94,2.87,3.44,3.44,0,0,0,3.19.09h0a0,0,0,0,1,0,0l.32-.14a.58.58,0,1,1,.47,1.07Z", transform: "translate(-0.57 -12.67)", fill: "#6b42d1" }),
                    React.createElement("path", { d: "M92.94,78.52a.2.2,0,0,1-.21.08l0,0a12.88,12.88,0,0,0-1.5-.21,8.87,8.87,0,0,0-1.46,0c-.23,0-.47.07-.7.11l-.34.08a1.21,1.21,0,0,0-.18.05h0a6.13,6.13,0,0,1,.82.49,4.33,4.33,0,0,1,1,.94A5,5,0,0,1,91,81.18a.21.21,0,0,1-.12.27.21.21,0,0,1-.23,0v0c-.15-.15-.27-.3-.42-.43a5.39,5.39,0,0,0-.43-.39A4.93,4.93,0,0,0,88.8,80a5.45,5.45,0,0,0-1-.4,3,3,0,0,0-.54-.12c-.1,0-.18,0-.27,0l-.12,0H86.7a.61.61,0,0,1-.57-.64.58.58,0,0,1,.28-.48A6.49,6.49,0,0,1,88,77.52a5.43,5.43,0,0,1,.84-.2,5.08,5.08,0,0,1,.87,0,5.88,5.88,0,0,1,1.68.24,5.14,5.14,0,0,1,1.52.71A.22.22,0,0,1,92.94,78.52Z", transform: "translate(-0.57 -12.67)", fill: "#6b42d1" }),
                    React.createElement("path", { d: "M76.52,71.68c-1.13,1.69-3,2.45-4.24,1.73l-.1-.06L72,73.18c-1-.91-1-2.83.08-4.46s3.09-2.49,4.33-1.67a2.36,2.36,0,0,1,1,2A4.7,4.7,0,0,1,76.52,71.68Z", transform: "translate(-0.57 -12.67)", fill: "#6b42d1" })),
                React.createElement("path", { d: "M99.33,30.1,85.15,21.91a10.68,10.68,0,0,0-14.58,3.91L41.24,76.62A10.68,10.68,0,0,0,45.15,91.2L53.47,96h35.2A10.67,10.67,0,0,0,99.33,85.33Z", transform: "translate(-0.57 -12.67)", fill: "#452a7a", opacity: "0.7" }),
                React.createElement("path", { d: "M67.47,104.09,86.19,93.28a10.66,10.66,0,0,0,3.9-14.57l-25-43.35L41.24,76.62A10.68,10.68,0,0,0,45.15,91.2Z", transform: "translate(-0.57 -12.67)", fill: "#452a7a" }),
                React.createElement("rect", { x: "31.43", width: "64", height: "80", rx: "10.67", fill: "#9a6aff" }),
                React.createElement("g", null,
                    React.createElement("g", null,
                        React.createElement("path", { d: "M62.81,31.34h0S62.82,31.34,62.81,31.34Z", transform: "translate(-0.57 -12.67)", fill: "#7645d9" }),
                        React.createElement("path", { d: "M68.93,38.28c0-.71-.09-1.45-.17-2.2s-.16-1.26-.25-1.89C68,30.91,67,27,64.92,26.88c-1.06-.06-2,.87-2.94,2.84a24.32,24.32,0,0,0-1.39,4c-.18.67-.34,1.35-.49,2s-.26,1.28-.36,1.89a2,2,0,0,1,0,.24v.07c0,.38-.1.75-.14,1.1a12.22,12.22,0,0,0-.09,1.72v0c0,.06,0,.12,0,.18a3.89,3.89,0,0,0,3.36,3.19,5.91,5.91,0,0,0,1.15.16,6.36,6.36,0,0,0,1.6-.09,2.41,2.41,0,0,0,.35-.07H66l.24-.07.08,0h0l.2-.08.09,0,.19-.09.1,0,.06,0,.1-.06h0l0,0,.45-.3,0,0a2,2,0,0,1,.16-.14v0l0,0,.19-.18a1.22,1.22,0,0,0,.15-.17s0,0,0,0l.11-.16,0-.07.09-.12v0l0-.06.07-.13s0,0,0,0l.08-.18s0,0,0-.07a.73.73,0,0,0,0-.12.41.41,0,0,1,0-.08.43.43,0,0,1,0-.12s0-.06,0-.08a.58.58,0,0,0,0-.14s0-.07,0-.11A19.23,19.23,0,0,0,68.93,38.28Zm-6.11-6.93h0v0Z", transform: "translate(-0.57 -12.67)", fill: "#7645d9" })),
                    React.createElement("path", { d: "M86.63,59.87a12.75,12.75,0,0,1,2.6.45,15.49,15.49,0,0,0,.24-2.4c0-.4,0-.81,0-1.22-.79-.05-1.59-.05-2.38,0-1,0-2,.11-3,.22A9.44,9.44,0,0,1,87,56a12.9,12.9,0,0,1,2.41-.15,16.94,16.94,0,0,0-.62-3c-.69.15-1.37.33-2,.53a26.21,26.21,0,0,0-2.79,1,9.09,9.09,0,0,1,2.55-1.63,12.54,12.54,0,0,1,2-.69,21.29,21.29,0,0,0-3.31-6h0c-.43-4.92-2.31-13.21-5.27-13.4C77.73,32.52,76,35.54,75,38.08a27.75,27.75,0,0,0-6.2-2c.08.75.14,1.49.17,2.2a19.23,19.23,0,0,1-.05,2.93s0,.08,0,.11a.58.58,0,0,1,0,.14s0,0,0,.08a.43.43,0,0,0,0,.12.41.41,0,0,0,0,.08.73.73,0,0,1,0,.12s0,0,0,.07l-.08.18s0,0,0,0l-.07.13,0,.06v0l-.09.12,0,.07-.11.16s0,0,0,0a1.22,1.22,0,0,1-.15.17l-.19.18,0,0v0a2,2,0,0,0-.16.14l0,0-.45.3,0,0h0l-.1.06-.06,0-.1,0-.19.09-.09,0-.2.08h0l-.08,0L66,44.1h-.07a2.41,2.41,0,0,1-.35.07,6.36,6.36,0,0,1-1.6.09,5.91,5.91,0,0,1-1.15-.16,3.89,3.89,0,0,1-3.36-3.19c0-.06,0-.12,0-.18v0A12.22,12.22,0,0,1,59.55,39c0-.35.09-.72.14-1.1v-.07a2,2,0,0,0,0-.24c.1-.61.22-1.25.36-1.89a28.52,28.52,0,0,0-6.9,1.66C52.45,34.65,51,31.09,48.74,31c-3.33-.14-6.38,10-6.93,14.39h0a21.77,21.77,0,0,0-3.19,5.17l.55.14A12.71,12.71,0,0,1,42,51.89a10.5,10.5,0,0,1,2.37,1.88,29.33,29.33,0,0,0-2.68-1.24,26.3,26.3,0,0,0-2.75-1l-.62-.17a16.57,16.57,0,0,0-.89,3.33c.25,0,.49,0,.74,0a14.06,14.06,0,0,1,3,.4A9,9,0,0,1,44,56.28c-1-.22-2-.38-2.92-.5a25.69,25.69,0,0,0-2.9-.2h-.85a11.87,11.87,0,0,0-.08,1.33,14,14,0,0,0,.17,2.53l.7-.17a13.36,13.36,0,0,1,3-.28,9.37,9.37,0,0,1,3,.52,23.7,23.7,0,0,0-2.94.17,23,23,0,0,0-2.88.45l-.72.16c2,8.88,12.6,14.31,25.47,14.57S86.76,70,89,61.17c-.8-.24-1.63-.44-2.47-.61a28.54,28.54,0,0,0-2.94-.45A9.21,9.21,0,0,1,86.63,59.87ZM76.39,40.73A15.65,15.65,0,0,1,76.82,39c.48-1.53,1.35-3.32,2.78-3.14.66.08,1.65.6,2.54,4.17a28.94,28.94,0,0,1,.61,3.32,10.28,10.28,0,0,1,.07,1.56.69.69,0,0,1-.73.64,1.88,1.88,0,0,1-.42-.05c-.86-.19-3-1-5.18-4.26A.67.67,0,0,1,76.39,40.73ZM45,43.66a.21.21,0,0,0-.1,0,.7.7,0,0,1-.55-.69s0-.1,0-.16c.09-1.65,1.38-6.43,3-8a1.84,1.84,0,0,1,1.28-.59c1.64,0,2.41,2.33,2.75,3.94.12.61.19,1.12.22,1.36a.77.77,0,0,1-.17.55C48,43.88,45.09,43.66,45,43.66Zm8.95,14.42a1.63,1.63,0,0,1-.31,0c-1.45-.31-2.48-2.13-2.35-4.25s1.56-4,3.18-3.93a2.54,2.54,0,0,1,2,1.33,5,5,0,0,1,.67,2.95C57,56.36,55.61,58.08,54,58.08Zm18.18,3.76c-.1.13-.18.26-.28.38a.13.13,0,0,1,0,.05,5.1,5.1,0,0,1-3.58,2.08,11.9,11.9,0,0,1-1.38,2.84c-.92,1.36-2,2.11-3,2.12a2.59,2.59,0,0,1-.54,0,4.6,4.6,0,0,1-2.57-2,12.06,12.06,0,0,1-1.47-2.84,6.72,6.72,0,0,1-.8-.1,5.54,5.54,0,0,1-2.9-1.82l0,0a2.1,2.1,0,0,1-.28-.38.65.65,0,0,1,.18-.89.64.64,0,0,1,.89.19l.17.22,0,0a3.9,3.9,0,0,0,3.13,1.48,5.68,5.68,0,0,0,3.33-1.72,4.11,4.11,0,0,1-2.07-1.82,1.45,1.45,0,0,1,0-1.61,2.11,2.11,0,0,1,1.24-.65,6.93,6.93,0,0,1,1.48-.16c1,0,2.21.07,2.73.72a1.46,1.46,0,0,1,.09,1.62,4.05,4.05,0,0,1-2,1.89,5.8,5.8,0,0,0,3.4,1.66,3.78,3.78,0,0,0,3.06-1.65h0a0,0,0,0,1,0,0l.22-.29A.63.63,0,0,1,72,61,.64.64,0,0,1,72.09,61.84Zm4.07-10h0a12.72,12.72,0,0,0-1.52.62,8.38,8.38,0,0,0-1.37.81c-.21.15-.41.33-.61.48l-.28.27s-.1.09-.14.14l0,0a6.14,6.14,0,0,1,1,0,5.28,5.28,0,0,1,1.42.35,4.93,4.93,0,0,1,1.24.71.22.22,0,0,1,0,.32.22.22,0,0,1-.24.09l0,0c-.22-.06-.41-.14-.62-.18s-.41-.1-.62-.13a5.09,5.09,0,0,0-1.23-.07,6.12,6.12,0,0,0-1.2.19,4.79,4.79,0,0,0-.58.18l-.26.11L71,55.8l-.06,0,0,0v0a.65.65,0,0,1-.89-.29.64.64,0,0,1,0-.6,6.86,6.86,0,0,1,1.07-1.56,6.09,6.09,0,0,1,.69-.65,5.66,5.66,0,0,1,.79-.52,6.39,6.39,0,0,1,1.72-.69,5.29,5.29,0,0,1,1.82-.16.23.23,0,0,1,.21.25A.24.24,0,0,1,76.16,51.85Z", transform: "translate(-0.57 -12.67)", fill: "#8a5fff" }),
                    React.createElement("path", { d: "M82.82,44.92a.69.69,0,0,1-.73.64,1.88,1.88,0,0,1-.42-.05c-.86-.19-3-1-5.18-4.26a.67.67,0,0,1-.1-.52A15.65,15.65,0,0,1,76.82,39c.48-1.53,1.35-3.32,2.78-3.14.66.08,1.65.6,2.54,4.17a28.94,28.94,0,0,1,.61,3.32A10.28,10.28,0,0,1,82.82,44.92Z", transform: "translate(-0.57 -12.67)", fill: "#7645d9" }),
                    React.createElement("path", { d: "M51.35,40.07C48,43.88,45.09,43.66,45,43.66a.21.21,0,0,0-.1,0,.7.7,0,0,1-.55-.69s0-.1,0-.16c.09-1.65,1.38-6.43,3-8a1.84,1.84,0,0,1,1.28-.59c1.64,0,2.41,2.33,2.75,3.94.12.61.19,1.12.22,1.36A.77.77,0,0,1,51.35,40.07Z", transform: "translate(-0.57 -12.67)", fill: "#7645d9" }),
                    React.createElement("path", { d: "M44.34,53.77a29.33,29.33,0,0,0-2.68-1.24,26.3,26.3,0,0,0-2.75-1l-.62-.17c-.73-.2-1.46-.36-2.21-.49-.48-.1-1-.16-1.45-.24-.24-.06-.49-.06-.73-.1s-.5-.07-.75-.12l.75-.13a6.16,6.16,0,0,1,.75-.11,12.83,12.83,0,0,1,1.52,0,12,12,0,0,1,2.45.37l.55.14A12.71,12.71,0,0,1,42,51.89,10.5,10.5,0,0,1,44.34,53.77Z", transform: "translate(-0.57 -12.67)", fill: "#7645d9" }),
                    React.createElement("path", { d: "M44,56.28c-1-.22-2-.38-2.92-.5a25.69,25.69,0,0,0-2.9-.2h-.85c-.68,0-1.37,0-2.06.11-.49,0-1,.1-1.46.15-.26,0-.5.07-.73.1l-.75.1c.22-.11.45-.23.67-.32a6.15,6.15,0,0,1,.71-.28,11.78,11.78,0,0,1,3.74-.72c.25,0,.49,0,.74,0a14.06,14.06,0,0,1,3,.4A9,9,0,0,1,44,56.28Z", transform: "translate(-0.57 -12.67)", fill: "#7645d9" }),
                    React.createElement("path", { d: "M44.07,59.52a23.7,23.7,0,0,0-2.94.17,23,23,0,0,0-2.88.45l-.72.16a21.42,21.42,0,0,0-2.08.59c-.47.13-.93.3-1.4.47a5.8,5.8,0,0,0-.69.27,7.21,7.21,0,0,1-.7.25c.19-.17.39-.3.59-.46a6.37,6.37,0,0,1,.62-.44,14.2,14.2,0,0,1,1.32-.73,12.12,12.12,0,0,1,2.18-.8l.7-.17a13.36,13.36,0,0,1,3-.28A9.37,9.37,0,0,1,44.07,59.52Z", transform: "translate(-0.57 -12.67)", fill: "#7645d9" }),
                    React.createElement("path", { d: "M95.36,52.16l-.75,0c-.25,0-.49,0-.75,0-.49,0-1,0-1.46.1a27.12,27.12,0,0,0-2.87.38l-.78.16c-.69.15-1.37.33-2,.53a26.21,26.21,0,0,0-2.79,1,9.09,9.09,0,0,1,2.55-1.63,12.54,12.54,0,0,1,2-.69,8.86,8.86,0,0,1,.89-.21,13.4,13.4,0,0,1,3-.21,10.9,10.9,0,0,1,1.51.17,6,6,0,0,1,.73.17C94.88,52,95.14,52.08,95.36,52.16Z", transform: "translate(-0.57 -12.67)", fill: "#7645d9" }),
                    React.createElement("path", { d: "M95.72,57.75a5.93,5.93,0,0,1-.73-.16c-.24-.06-.48-.13-.72-.17-.47-.1-1-.21-1.43-.3A23.67,23.67,0,0,0,90,56.74l-.52,0c-.79-.05-1.59-.05-2.38,0-1,0-2,.11-3,.22A9.44,9.44,0,0,1,87,56a12.9,12.9,0,0,1,2.41-.15l.64,0a12.21,12.21,0,0,1,3,.59A10.85,10.85,0,0,1,94.4,57a7.31,7.31,0,0,1,.68.35Z", transform: "translate(-0.57 -12.67)", fill: "#7645d9" }),
                    React.createElement("path", { d: "M94.78,63.55a7.13,7.13,0,0,1-.68-.33c-.22-.11-.43-.23-.66-.32-.45-.21-.88-.42-1.33-.61-.89-.39-1.81-.71-2.73-1L89,61.17c-.8-.24-1.63-.44-2.47-.61a28.54,28.54,0,0,0-2.94-.45,9.21,9.21,0,0,1,3-.24,12.75,12.75,0,0,1,2.6.45l.39.11a12.62,12.62,0,0,1,2.78,1.24,9.57,9.57,0,0,1,1.25.86c.2.16.4.33.58.5S94.6,63.36,94.78,63.55Z", transform: "translate(-0.57 -12.67)", fill: "#7645d9" }),
                    React.createElement("path", { d: "M72.09,61.84c-.1.13-.18.26-.28.38a.13.13,0,0,1,0,.05,5.1,5.1,0,0,1-3.58,2.08,11.9,11.9,0,0,1-1.38,2.84c-.92,1.36-2,2.11-3,2.12a2.59,2.59,0,0,1-.54,0,4.6,4.6,0,0,1-2.57-2,12.06,12.06,0,0,1-1.47-2.84,6.72,6.72,0,0,1-.8-.1,5.54,5.54,0,0,1-2.9-1.82l0,0a2.1,2.1,0,0,1-.28-.38.65.65,0,0,1,.18-.89.64.64,0,0,1,.89.19l.17.22,0,0a3.9,3.9,0,0,0,3.13,1.48,5.68,5.68,0,0,0,3.33-1.72,4.11,4.11,0,0,1-2.07-1.82,1.45,1.45,0,0,1,0-1.61,2.11,2.11,0,0,1,1.24-.65,6.93,6.93,0,0,1,1.48-.16c1,0,2.21.07,2.73.72a1.46,1.46,0,0,1,.09,1.62,4.05,4.05,0,0,1-2,1.89,5.8,5.8,0,0,0,3.4,1.66,3.78,3.78,0,0,0,3.06-1.65h0a0,0,0,0,1,0,0l.22-.29A.63.63,0,0,1,72,61,.64.64,0,0,1,72.09,61.84Z", transform: "translate(-0.57 -12.67)", fill: "#7645d9" }),
                    React.createElement("path", { d: "M76.32,51.65a.24.24,0,0,1-.16.2h0a12.72,12.72,0,0,0-1.52.62,8.38,8.38,0,0,0-1.37.81c-.21.15-.41.33-.61.48l-.28.27s-.1.09-.14.14l0,0a6.14,6.14,0,0,1,1,0,5.28,5.28,0,0,1,1.42.35,4.93,4.93,0,0,1,1.24.71.22.22,0,0,1,0,.32.22.22,0,0,1-.24.09l0,0c-.22-.06-.41-.14-.62-.18s-.41-.1-.62-.13a5.09,5.09,0,0,0-1.23-.07,6.12,6.12,0,0,0-1.2.19,4.79,4.79,0,0,0-.58.18l-.26.11L71,55.8l-.06,0,0,0v0a.65.65,0,0,1-.89-.29.64.64,0,0,1,0-.6,6.86,6.86,0,0,1,1.07-1.56,6.09,6.09,0,0,1,.69-.65,5.66,5.66,0,0,1,.79-.52,6.39,6.39,0,0,1,1.72-.69,5.29,5.29,0,0,1,1.82-.16A.23.23,0,0,1,76.32,51.65Z", transform: "translate(-0.57 -12.67)", fill: "#7645d9" }),
                    React.createElement("path", { d: "M57.1,54.15C57,56.36,55.61,58.08,54,58.08h-.13a1.63,1.63,0,0,1-.31,0c-1.45-.31-2.48-2.13-2.35-4.25s1.56-4,3.18-3.93a2.54,2.54,0,0,1,2,1.33A5,5,0,0,1,57.1,54.15Z", transform: "translate(-0.57 -12.67)", fill: "#7645d9" })),
                React.createElement("path", { d: "M42.67,92.67A10.67,10.67,0,0,1,32,82V30.58L46.85,22a10.67,10.67,0,0,1,14.58,3.9L90.76,76.71a10.66,10.66,0,0,1-3.91,14.57l-2.39,1.39Z", transform: "translate(-0.57 -12.67)", fill: "#7645d9", opacity: "0.7" }),
                React.createElement("rect", { x: "12.38", y: "27.22", width: "64", height: "80", rx: "10.67", transform: "translate(-28.23 18.53) rotate(-30)", fill: "#cab3f8" }),
                React.createElement("g", { opacity: "0.7" },
                    React.createElement("g", null,
                        React.createElement("path", { d: "M35.28,53.59h0Z", transform: "translate(-0.57 -12.67)", fill: "#5033aa" }),
                        React.createElement("path", { d: "M43.33,56.29c-.35-.55-.74-1.11-1.15-1.67s-.7-.93-1.06-1.38c-1.92-2.37-4.55-5-6.21-4.16-.87.43-1.21,1.62-1,3.61a21.33,21.33,0,0,0,.71,3.78c.16.61.34,1.23.53,1.83s.39,1.14.59,1.67a1.59,1.59,0,0,1,.07.2l0,.07q.19.48.39.93a10.72,10.72,0,0,0,.72,1.41v0l.09.13a3.54,3.54,0,0,0,4.13,1,5.41,5.41,0,0,0,1-.4,6.37,6.37,0,0,0,1.23-.8l.25-.22.05,0c0-.07.1-.1.16-.17l.05-.06,0,0a1.49,1.49,0,0,0,.12-.14l0-.07.12-.16.06-.08s0,0,0-.05a.26.26,0,0,0,0-.09l0,0v0a4.81,4.81,0,0,0,.22-.46l0,0a1.27,1.27,0,0,0,.06-.18v0l0,0,.06-.23a.78.78,0,0,0,0-.21s0,0,0,0,0-.13,0-.18v-.29a.57.57,0,0,1,0-.14s0,0,0,0a1.54,1.54,0,0,0,0-.19s0,0,0-.06,0-.07,0-.11,0-.05,0-.08a.76.76,0,0,1,0-.11s0-.06,0-.07,0-.08,0-.12a.42.42,0,0,0,0-.1A17,17,0,0,0,43.33,56.29Zm-8-2.7h0Z", transform: "translate(-0.57 -12.67)", fill: "#5033aa" })),
                    React.createElement("path", { d: "M67.31,65.33a12,12,0,0,1,2.26-.83,12.77,12.77,0,0,0-.9-2c-.18-.33-.38-.65-.58-1-.66.32-1.29.68-1.92,1-.79.5-1.53,1-2.27,1.56a8.73,8.73,0,0,1,1.88-2,11.6,11.6,0,0,1,1.85-1.22,15.13,15.13,0,0,0-1.86-2.07c-.48.43-.93.88-1.37,1.36a23.18,23.18,0,0,0-1.79,2,8.49,8.49,0,0,1,1.28-2.46,13.86,13.86,0,0,1,1.28-1.48A19.8,19.8,0,0,0,59.81,55h0c-2.59-3.71-7.89-9.44-10.33-8.24-1.79.89-1.77,4.08-1.44,6.58a26.36,26.36,0,0,0-5.85,1.25c.41.56.8,1.12,1.15,1.67a17,17,0,0,1,1.3,2.36.42.42,0,0,1,0,.1s0,.08,0,.12,0,0,0,.07a.76.76,0,0,0,0,.11s0,.05,0,.08,0,.08,0,.11,0,0,0,.06a1.54,1.54,0,0,1,0,.19s0,0,0,0a.57.57,0,0,0,0,.14V60c0,.05,0,.11,0,.18s0,0,0,0a.78.78,0,0,1,0,.21l-.06.23,0,0v0a1.27,1.27,0,0,1-.06.18l0,0a4.81,4.81,0,0,1-.22.46v0l0,0a.26.26,0,0,1,0,.09s0,0,0,.05l-.06.08-.12.16,0,.07a1.49,1.49,0,0,1-.12.14l0,0-.05.06c-.06.07-.11.1-.16.17l-.05,0-.25.22a6.37,6.37,0,0,1-1.23.8,5.41,5.41,0,0,1-1,.4,3.54,3.54,0,0,1-4.13-1l-.09-.13v0a10.72,10.72,0,0,1-.72-1.41q-.2-.45-.39-.93l0-.07a1.59,1.59,0,0,0-.07-.2c-.2-.53-.4-1.1-.59-1.67a26.48,26.48,0,0,0-4.72,4.48c-1.84-1.81-4.6-4-6.46-3-2.71,1.42-.46,10.9,1.1,14.62h0A19.74,19.74,0,0,0,24.88,80l.49-.13a11.27,11.27,0,0,1,2.78-.35,9.46,9.46,0,0,1,2.74.4,26.55,26.55,0,0,0-2.7.25,25.72,25.72,0,0,0-2.62.49l-.58.16a16.11,16.11,0,0,0,.82,3l.58-.35A12.11,12.11,0,0,1,29,82.42a8.31,8.31,0,0,1,2.76-.35c-.89.28-1.72.59-2.55.94a23.21,23.21,0,0,0-2.4,1.18l-.66.39a11.2,11.2,0,0,0,.54,1.1A12.06,12.06,0,0,0,28,87.61c.15-.16.31-.31.47-.46a12.52,12.52,0,0,1,2.28-1.61,8.75,8.75,0,0,1,2.6-1,23.78,23.78,0,0,0-2.26,1.48A24.23,24.23,0,0,0,29,87.75l-.49.46c5.66,6.15,16.58,5.6,26.93-.11s16.67-14.74,14.4-22.83c-.75.17-1.5.4-2.24.64a26.41,26.41,0,0,0-2.55,1A8.66,8.66,0,0,1,67.31,65.33ZM50.38,54.82c-.11-.33-.3-.91-.45-1.56-.32-1.44-.44-3.26.77-3.77.57-.24,1.59-.28,3.93,2.15a24.68,24.68,0,0,1,2,2.35,8.71,8.71,0,0,1,.77,1.21.64.64,0,0,1-.28.85,1.82,1.82,0,0,1-.36.14c-.76.25-2.84.62-6.07-1A.62.62,0,0,1,50.38,54.82ZM26.75,71.58a.33.33,0,0,0-.1,0,.64.64,0,0,1-.76-.29l-.07-.13c-.67-1.35-1.85-5.75-1.3-7.68a1.7,1.7,0,0,1,.75-1.06c1.31-.73,3,.75,4,1.87.38.43.67.8.8,1a.65.65,0,0,1,.12.52C29.26,70.35,26.84,71.52,26.75,71.58Zm13.72,7.35a1.92,1.92,0,0,1-.25.12c-1.3.42-2.95-.55-3.83-2.3s-.61-3.93.73-4.59a2.32,2.32,0,0,1,2.2.15,4.59,4.59,0,0,1,1.88,2c.91,1.82.63,3.81-.62,4.53Zm16.18-5.35c0,.14,0,.28,0,.43s0,0,0,0a4.73,4.73,0,0,1-1.89,3.31,11.09,11.09,0,0,1,.21,2.88,3.69,3.69,0,0,1-1.45,3.09,2.78,2.78,0,0,1-.46.21,4.22,4.22,0,0,1-2.94-.39,11.34,11.34,0,0,1-2.49-1.59,4.32,4.32,0,0,1-.67.28,4.94,4.94,0,0,1-3.14-.11h0a2,2,0,0,1-.4-.17.59.59,0,0,1-.26-.79.58.58,0,0,1,.79-.26l.24.1h0a3.59,3.59,0,0,0,3.17-.26,5.19,5.19,0,0,0,1.86-2.9A3.79,3.79,0,0,1,46.68,77a1.32,1.32,0,0,1-.74-1.28,1.9,1.9,0,0,1,.68-1.08,6.81,6.81,0,0,1,1.1-.81,3.31,3.31,0,0,1,2.51-.68A1.35,1.35,0,0,1,51,74.35a3.72,3.72,0,0,1-.73,2.44,5.26,5.26,0,0,0,3.45-.25,3.44,3.44,0,0,0,1.68-2.71v0a0,0,0,0,1,0,0c0-.11,0-.23,0-.33a.59.59,0,0,1,.64-.53A.6.6,0,0,1,56.65,73.58ZM55.3,63.76l0,0A11.47,11.47,0,0,0,54.33,65a8.09,8.09,0,0,0-.71,1.28,5.32,5.32,0,0,0-.26.66l-.11.34a.8.8,0,0,0,0,.18h0A5.73,5.73,0,0,1,54,67a4.17,4.17,0,0,1,1.29-.38,4.79,4.79,0,0,1,1.31,0,.21.21,0,0,1,.18.24.22.22,0,0,1-.15.18h0c-.19,0-.39.08-.58.14s-.37.11-.55.18a4.71,4.71,0,0,0-1,.51,5.34,5.34,0,0,0-.87.7,3.76,3.76,0,0,0-.38.41l-.16.21-.07.1,0,0v.06a.61.61,0,0,1-.84.18.6.6,0,0,1-.27-.48,6.11,6.11,0,0,1,.38-2.57,5.56,5.56,0,0,1,.39-.77,5.71,5.71,0,0,1,1-1.34,5.28,5.28,0,0,1,1.37-1,.22.22,0,0,1,.29.11A.2.2,0,0,1,55.3,63.76Z", transform: "translate(-0.57 -12.67)", fill: "#8a5fff" }),
                    React.createElement("path", { d: "M57.41,55.2a.64.64,0,0,1-.28.85,1.82,1.82,0,0,1-.36.14c-.76.25-2.84.62-6.07-1a.62.62,0,0,1-.32-.37c-.11-.33-.3-.91-.45-1.56-.32-1.44-.44-3.26.77-3.77.57-.24,1.59-.28,3.93,2.15a24.68,24.68,0,0,1,2,2.35A8.71,8.71,0,0,1,57.41,55.2Z", transform: "translate(-0.57 -12.67)", fill: "#5033aa" }),
                    React.createElement("path", { d: "M30.17,65.79c-.91,4.56-3.33,5.73-3.42,5.79a.33.33,0,0,0-.1,0,.64.64,0,0,1-.76-.29l-.07-.13c-.67-1.35-1.85-5.75-1.3-7.68a1.7,1.7,0,0,1,.75-1.06c1.31-.73,3,.75,4,1.87.38.43.67.8.8,1A.65.65,0,0,1,30.17,65.79Z", transform: "translate(-0.57 -12.67)", fill: "#5033aa" }),
                    React.createElement("path", { d: "M30.89,79.89a26.55,26.55,0,0,0-2.7.25,25.72,25.72,0,0,0-2.62.49l-.58.16c-.66.18-1.32.38-2,.62-.43.14-.83.31-1.26.47-.22.07-.42.19-.63.26a6.26,6.26,0,0,1-.65.25l.54-.45c.18-.15.35-.29.54-.42a9.13,9.13,0,0,1,1.21-.71A11.14,11.14,0,0,1,24.88,80l.49-.13a11.27,11.27,0,0,1,2.78-.35A9.46,9.46,0,0,1,30.89,79.89Z", transform: "translate(-0.57 -12.67)", fill: "#5033aa" }),
                    React.createElement("path", { d: "M31.73,82.07c-.89.28-1.72.59-2.55.94a23.21,23.21,0,0,0-2.4,1.18l-.66.39a18.79,18.79,0,0,0-1.59,1c-.38.25-.73.53-1.1.8-.19.13-.36.28-.53.41l-.55.42q.18-.28.39-.57a4.43,4.43,0,0,1,.43-.54,10.16,10.16,0,0,1,1-1,11.81,11.81,0,0,1,1.68-1.28l.58-.35A12.11,12.11,0,0,1,29,82.42,8.31,8.31,0,0,1,31.73,82.07Z", transform: "translate(-0.57 -12.67)", fill: "#5033aa" }),
                    React.createElement("path", { d: "M33.31,84.59a23.78,23.78,0,0,0-2.26,1.48A24.23,24.23,0,0,0,29,87.75l-.49.46c-.48.46-1,.92-1.39,1.42-.31.33-.6.67-.89,1-.16.17-.29.35-.43.53s-.28.36-.44.53c.08-.23.17-.43.26-.65a5.11,5.11,0,0,1,.29-.63,11,11,0,0,1,.71-1.19A10.66,10.66,0,0,1,28,87.61c.15-.16.31-.31.47-.46a12.52,12.52,0,0,1,2.28-1.61A8.75,8.75,0,0,1,33.31,84.59Z", transform: "translate(-0.57 -12.67)", fill: "#5033aa" }),
                    React.createElement("path", { d: "M70.71,55.2l-.58.38c-.19.13-.39.22-.58.36-.38.25-.77.49-1.12.75a26.27,26.27,0,0,0-2.11,1.63c-.18.15-.37.31-.55.48-.48.43-.93.88-1.37,1.36a23.18,23.18,0,0,0-1.79,2,8.49,8.49,0,0,1,1.28-2.46,13.86,13.86,0,0,1,1.28-1.48c.2-.2.4-.38.62-.57a12,12,0,0,1,2.31-1.55,8.56,8.56,0,0,1,1.28-.56,5.06,5.06,0,0,1,.66-.21C70.26,55.31,70.49,55.24,70.71,55.2Z", transform: "translate(-0.57 -12.67)", fill: "#5033aa" }),
                    React.createElement("path", { d: "M73.56,59.48a5,5,0,0,1-.66.2c-.21.07-.44.12-.65.2-.42.14-.85.27-1.27.42a24.42,24.42,0,0,0-2.46,1l-.43.21c-.66.32-1.29.68-1.92,1-.79.5-1.53,1-2.27,1.56a8.73,8.73,0,0,1,1.88-2,11.6,11.6,0,0,1,1.85-1.22l.52-.26a11.61,11.61,0,0,1,2.64-.91,10.93,10.93,0,0,1,1.38-.2c.22,0,.46,0,.7,0Z", transform: "translate(-0.57 -12.67)", fill: "#5033aa" }),
                    React.createElement("path", { d: "M75.47,64.52c-.23,0-.46,0-.69,0a4.91,4.91,0,0,0-.67.05c-.46,0-.9.07-1.34.13a25.31,25.31,0,0,0-2.63.44l-.33.08c-.75.17-1.5.4-2.24.64a26.41,26.41,0,0,0-2.55,1,8.66,8.66,0,0,1,2.29-1.58,12,12,0,0,1,2.26-.83l.37-.09a11.38,11.38,0,0,1,2.78-.29,9.41,9.41,0,0,1,1.39.11c.23,0,.46.08.69.13Z", transform: "translate(-0.57 -12.67)", fill: "#5033aa" }),
                    React.createElement("path", { d: "M56.65,73.58c0,.14,0,.28,0,.43s0,0,0,0a4.73,4.73,0,0,1-1.89,3.31,11.09,11.09,0,0,1,.21,2.88,3.69,3.69,0,0,1-1.45,3.09,2.78,2.78,0,0,1-.46.21,4.22,4.22,0,0,1-2.94-.39,11.34,11.34,0,0,1-2.49-1.59,4.32,4.32,0,0,1-.67.28,4.94,4.94,0,0,1-3.14-.11h0a2,2,0,0,1-.4-.17.59.59,0,0,1-.26-.79.58.58,0,0,1,.79-.26l.24.1h0a3.59,3.59,0,0,0,3.17-.26,5.19,5.19,0,0,0,1.86-2.9A3.79,3.79,0,0,1,46.68,77a1.32,1.32,0,0,1-.74-1.28,1.9,1.9,0,0,1,.68-1.08,6.81,6.81,0,0,1,1.1-.81,3.31,3.31,0,0,1,2.51-.68A1.35,1.35,0,0,1,51,74.35a3.72,3.72,0,0,1-.73,2.44,5.26,5.26,0,0,0,3.45-.25,3.44,3.44,0,0,0,1.68-2.71v0a0,0,0,0,1,0,0c0-.11,0-.23,0-.33a.59.59,0,0,1,.64-.53A.6.6,0,0,1,56.65,73.58Z", transform: "translate(-0.57 -12.67)", fill: "#5033aa" }),
                    React.createElement("path", { d: "M55.34,63.54a.2.2,0,0,1,0,.22l0,0A11.47,11.47,0,0,0,54.33,65a8.09,8.09,0,0,0-.71,1.28,5.32,5.32,0,0,0-.26.66l-.11.34a.8.8,0,0,0,0,.18h0A5.73,5.73,0,0,1,54,67a4.17,4.17,0,0,1,1.29-.38,4.79,4.79,0,0,1,1.31,0,.21.21,0,0,1,.18.24.22.22,0,0,1-.15.18h0c-.19,0-.39.08-.58.14s-.37.11-.55.18a4.71,4.71,0,0,0-1,.51,5.34,5.34,0,0,0-.87.7,3.76,3.76,0,0,0-.38.41l-.16.21-.07.1,0,0v.06a.61.61,0,0,1-.84.18.6.6,0,0,1-.27-.48,6.11,6.11,0,0,1,.38-2.57,5.56,5.56,0,0,1,.39-.77,5.71,5.71,0,0,1,1-1.34,5.28,5.28,0,0,1,1.37-1A.22.22,0,0,1,55.34,63.54Z", transform: "translate(-0.57 -12.67)", fill: "#5033aa" }),
                    React.createElement("path", { d: "M41.2,74.34c.91,1.82.63,3.81-.62,4.53l-.11.06a1.92,1.92,0,0,1-.25.12c-1.3.42-2.95-.55-3.83-2.3s-.61-3.93.73-4.59a2.32,2.32,0,0,1,2.2.15A4.59,4.59,0,0,1,41.2,74.34Z", transform: "translate(-0.57 -12.67)", fill: "#5033aa" })),
                React.createElement("g", { opacity: "0.1" },
                    React.createElement("path", { d: "M26.14,99.72,16.48,83l35.6-61.67a10.64,10.64,0,0,1,5.35,4.59l5.66,9.82Z", transform: "translate(-0.57 -12.67)", fill: "#fff" }),
                    React.createElement("path", { d: "M61.87,103.4l-9.24,5.33L78.94,63.17,82,68.5Z", transform: "translate(-0.57 -12.67)", fill: "#fff" }),
                    React.createElement("path", { d: "M48.09,20.57,14.27,79.15l-3.08-5.33,29-50.31L42.85,22A10.65,10.65,0,0,1,48.09,20.57Z", transform: "translate(-0.57 -12.67)", fill: "#fff" }))))));
};

var Icon$1o = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#727177";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("defs", null,
            React.createElement("mask", { id: "mask", x: "5.13", y: "6.67", width: "117.75", height: "131.47", maskUnits: "userSpaceOnUse" },
                React.createElement("g", { id: "mask0" },
                    React.createElement("path", { d: "M121.33,64A57.33,57.33,0,1,1,64,6.67,57.33,57.33,0,0,1,121.33,64Z", fill: "#c4c4c4" })))),
        React.createElement("path", { d: "M128,64A64,64,0,1,1,64,0,64,64,0,0,1,128,64Z", fill: primaryColor }),
        React.createElement("g", { mask: "url(#mask)" },
            React.createElement("g", null,
                React.createElement("path", { d: "M108.25,110.79c0,15.11-20,27.35-44.74,27.35S18.76,125.9,18.76,110.79v-7h89.49Z", fill: primaryColor }),
                React.createElement("g", null,
                    React.createElement("path", { d: "M106,99.73a24.46,24.46,0,0,1,4.81.83,25.59,25.59,0,0,0,.46-4.44c0-.75,0-1.51,0-2.26-1.47-.1-3-.11-4.43-.09-1.88.08-3.69.21-5.55.42a17.47,17.47,0,0,1,5.37-1.67,23.82,23.82,0,0,1,4.47-.28,32.14,32.14,0,0,0-1.15-5.51c-1.28.28-2.53.62-3.79,1A47.82,47.82,0,0,0,101,89.48a17,17,0,0,1,4.73-3,23.85,23.85,0,0,1,3.73-1.29,39.63,39.63,0,0,0-6.13-11.06,0,0,0,0,1,0,0C102.48,65,99,49.59,93.51,49.23c-4-.26-7.22,5.35-9.18,10.06a52.44,52.44,0,0,0-11.5-3.71c.16,1.39.27,2.77.33,4.08a35.46,35.46,0,0,1-.11,5.45c0,.07,0,.15,0,.2s0,.19-.06.26,0,.09,0,.14a1.57,1.57,0,0,0,0,.23,1.16,1.16,0,0,1-.06.15.93.93,0,0,1-.08.22c0,.06,0,.1-.05.12l-.15.35s0,0-.06.08-.1.18-.13.26l-.05.11,0,0c0,.08-.1.15-.15.24l-.08.12-.21.3s0,0-.06.07a2,2,0,0,1-.28.31l-.34.34-.09.06v0c-.11.07-.19.18-.3.25L70.7,69c-.27.21-.56.38-.84.57l-.06,0-.07,0a1.51,1.51,0,0,1-.18.09s-.08.06-.11.06l-.19.08-.35.16-.16.07a3.18,3.18,0,0,1-.37.14l-.06,0s-.09,0-.15.06l-.44.12a.22.22,0,0,1-.13,0,4.51,4.51,0,0,1-.66.13,11.8,11.8,0,0,1-3,.16,11,11,0,0,1-2.14-.29c-4-.86-6-3.45-6.23-5.93,0-.11,0-.21,0-.32v0A23.69,23.69,0,0,1,55.74,61c.08-.65.16-1.34.26-2l0-.13c0-.15.06-.29.08-.44.18-1.13.41-2.32.66-3.51A52.75,52.75,0,0,0,44,58c-1.39-5-4-11.63-8.28-11.79-6.18-.26-11.83,18.62-12.86,26.7h0a40.2,40.2,0,0,0-5.91,9.59c.34.07.67.17,1,.26a24,24,0,0,1,5.2,2.2,18.71,18.71,0,0,1,4.39,3.48c-1.64-.86-3.29-1.62-5-2.3a50.43,50.43,0,0,0-5.1-1.78L16.28,84a32.11,32.11,0,0,0-1.65,6.18q.69,0,1.38,0a25.23,25.23,0,0,1,5.6.74,16.57,16.57,0,0,1,5.17,2.17,54.6,54.6,0,0,0-5.41-.92A46.48,46.48,0,0,0,16,91.78H14.42c-.09.82-.15,1.65-.16,2.47a25.84,25.84,0,0,0,.32,4.7c.43-.12.86-.23,1.3-.33a25.19,25.19,0,0,1,5.62-.52,18.15,18.15,0,0,1,5.52,1,46.45,46.45,0,0,0-5.46.31,45,45,0,0,0-5.34.84l-1.34.31c3.71,16.48,23.38,26.56,47.27,27s44.09-9,48.31-25.4c-1.5-.46-3-.83-4.59-1.15a54.41,54.41,0,0,0-5.46-.83A17.48,17.48,0,0,1,106,99.73ZM87,64.22a29.84,29.84,0,0,1,.8-3.19c.89-2.84,2.51-6.16,5.16-5.83,1.23.15,3.07,1.12,4.71,7.73a49.46,49.46,0,0,1,1.13,6.16A17.49,17.49,0,0,1,98.92,72a1.28,1.28,0,0,1-1.36,1.2,3.17,3.17,0,0,1-.76-.1c-1.6-.34-5.6-1.8-9.63-7.9A1.29,1.29,0,0,1,87,64.22ZM28.67,69.66c-.06-.06-.13-.06-.18-.09a1.3,1.3,0,0,1-1-1.28c0-.09,0-.19,0-.29.18-3,2.58-11.93,5.49-14.77a3.38,3.38,0,0,1,2.38-1.1c3,0,4.46,4.33,5.08,7.31.24,1.13.36,2.07.41,2.53a1.32,1.32,0,0,1-.31,1C34.32,70.05,28.9,69.66,28.67,69.66Zm16.6,26.75a3.66,3.66,0,0,1-.57,0c-2.69-.58-4.6-4-4.37-7.9.27-4.21,2.9-7.48,5.91-7.29A4.71,4.71,0,0,1,50,83.65a9.37,9.37,0,0,1,1.23,5.46c-.26,4.1-2.76,7.31-5.68,7.31Zm33.75,7c-.19.24-.34.48-.53.71a.35.35,0,0,1,0,.08,9.49,9.49,0,0,1-6.65,3.87,21.8,21.8,0,0,1-2.56,5.26c-1.69,2.53-3.66,3.92-5.65,4a4.52,4.52,0,0,1-1-.11,8.49,8.49,0,0,1-4.76-3.66,22.67,22.67,0,0,1-2.75-5.28A8.57,8.57,0,0,1,53.6,108a10.21,10.21,0,0,1-5.4-3.37l-.05-.05a4.41,4.41,0,0,1-.52-.7,1.19,1.19,0,1,1,2-1.31s.1.15.31.41l0,0a7.24,7.24,0,0,0,5.81,2.75c2-.14,4.06-1.2,6.19-3.19a7.61,7.61,0,0,1-3.84-3.37,2.66,2.66,0,0,1,0-3A4,4,0,0,1,60.42,95a13.68,13.68,0,0,1,2.74-.3c1.79,0,4.11.13,5.08,1.33a2.74,2.74,0,0,1,.16,3,7.49,7.49,0,0,1-3.75,3.52c1,.92,3.48,3,6.31,3.07,2.07.08,4-1,5.68-3.06l0,0a0,0,0,0,1,0,0c.13-.18.29-.37.41-.55a1.19,1.19,0,0,1,1.65-.26A1.17,1.17,0,0,1,79,103.39Zm7.56-18.54-.11,0A23.43,23.43,0,0,0,83.65,86a15.91,15.91,0,0,0-2.54,1.51c-.39.27-.76.6-1.13.89l-.52.5a3.19,3.19,0,0,0-.26.26l0,0a12.55,12.55,0,0,1,1.94,0,9.22,9.22,0,0,1,2.64.66,9.67,9.67,0,0,1,2.3,1.3.44.44,0,0,1,.08.61.43.43,0,0,1-.45.15l0,0c-.4-.1-.76-.25-1.16-.33s-.76-.19-1.15-.24a9.62,9.62,0,0,0-2.27-.13,11.24,11.24,0,0,0-2.23.34,9.42,9.42,0,0,0-1.07.34c-.18.08-.34.13-.5.21l-.23.11s-.08,0-.11,0l-.07,0,0,0a1.23,1.23,0,0,1-1.65-1.65,13.58,13.58,0,0,1,2-2.9,9.83,9.83,0,0,1,1.28-1.21,9.93,9.93,0,0,1,1.46-1,11.59,11.59,0,0,1,3.2-1.28,10.3,10.3,0,0,1,3.37-.3.44.44,0,0,1,.39.48A.43.43,0,0,1,86.58,84.85Z", fill: secondaryColor }),
                    React.createElement("g", null,
                        React.createElement("path", { d: "M73.05,65.11c0,.07,0,.15,0,.2a2,2,0,0,1,0,.26,1.06,1.06,0,0,0,0,.14,1.57,1.57,0,0,0,0,.23.66.66,0,0,1-.05.15c0,.09-.06.16-.09.22s0,.1-.05.12l-.15.34s0,.06-.06.09-.1.18-.13.25l-.05.12,0,0-.16.23-.07.13-.21.3s0,0-.06.07a2,2,0,0,1-.28.31l-.34.34-.09.06v0c-.11.08-.19.18-.3.25l-.06.06c-.28.21-.57.38-.85.57l-.06,0-.07,0a1.12,1.12,0,0,1-.18.1s-.08.06-.1.06l-.2.08-.35.16-.16.07a2,2,0,0,1-.37.13l-.06,0a.88.88,0,0,1-.15,0,4.29,4.29,0,0,1-.44.13.22.22,0,0,1-.13,0,5.9,5.9,0,0,1-.66.13,11.83,11.83,0,0,1-3,.16,10.24,10.24,0,0,1-2.14-.29c-4-.86-6-3.45-6.23-5.92,0-.12,0-.22,0-.33v0A23.69,23.69,0,0,1,55.74,61c.07-.66.16-1.34.26-2l0-.13c0-.15.06-.29.08-.44q.27-1.71.66-3.51c.28-1.24.58-2.51.91-3.74a43.89,43.89,0,0,1,2.59-7.35c1.7-3.67,3.48-5.39,5.44-5.28,3.77.21,5.71,7.47,6.67,13.56.18,1.17.33,2.35.46,3.51.16,1.39.28,2.77.33,4.08A35.46,35.46,0,0,1,73.05,65.11Z", fill: primaryColor }),
                        React.createElement("path", { d: "M64.83,71.73c-.32,0-.62,0-.93,0a10.92,10.92,0,0,1-2.3-.31c-4.71-1-6.68-4.26-6.91-6.72v-.19a1.79,1.79,0,0,1,0-.23,23.68,23.68,0,0,1,.17-3.35c.07-.66.15-1.35.26-2.06l0-.19c0-.14.05-.25.07-.36.19-1.21.42-2.41.67-3.59.31-1.38.62-2.66.92-3.79a44.22,44.22,0,0,1,2.65-7.51c1.87-4,3.91-6,6.32-5.8,3.52.19,6,5,7.53,14.34.18,1.23.34,2.42.47,3.55.17,1.54.28,2.89.33,4.15A35.68,35.68,0,0,1,74,65.19l0,.21,0,.21a.56.56,0,0,0,0,.07l-.07.52-.07.11a1.08,1.08,0,0,1-.07.18l-.05.12a1,1,0,0,1-.12.28l0,.1a.54.54,0,0,0,0,.11,1.17,1.17,0,0,1-.15.27l-.27.47a.35.35,0,0,1,0,.08l-.09.15-.28.39,0,0,0,.06,0,0a4.19,4.19,0,0,1-.36.38l-.5.48a2.44,2.44,0,0,1-.3.25l-.06.06c-.25.19-.5.35-.76.51l-.38.22-.12.06a1.23,1.23,0,0,1-.26.13l-.13.06-.24.1-.18.08a2.72,2.72,0,0,1-.43.17l-.06,0a.79.79,0,0,1-.23.08h0a1.91,1.91,0,0,1-.35.11l-.08,0a1,1,0,0,1-.33.09l-.68.12A12.7,12.7,0,0,1,64.83,71.73Zm.7-32.31c-1.48,0-3,1.6-4.44,4.75a43,43,0,0,0-2.53,7.2c-.3,1.12-.6,2.36-.9,3.71-.25,1.15-.47,2.31-.65,3.46,0,.12,0,.26-.07.41l0,.2c-.09.64-.17,1.31-.25,2a22.68,22.68,0,0,0-.15,3.06v.16a2,2,0,0,1,0,.25c.18,1.84,1.73,4.2,5.5,5a10,10,0,0,0,2,.27,10.77,10.77,0,0,0,2.76-.15c.22,0,.41-.07.6-.11l.11,0,.22-.06.11,0,.43-.15.09,0a.74.74,0,0,1,.22-.1l.37-.17.28-.13.12-.07.2-.11c.21-.13.42-.26.63-.42l.11-.09,0,0,0-.06.28-.21.28-.28a1,1,0,0,0,.18-.2l.11-.14.14-.2.26-.4a1.65,1.65,0,0,1,.08-.17l.16-.28a1.19,1.19,0,0,1,.08-.2l.13-.31h0a.83.83,0,0,0,0-.13h0a.61.61,0,0,1,0-.15V65.4l.08-.41h0a34.91,34.91,0,0,0,.1-5.3c0-1.21-.15-2.52-.32-4-.13-1.1-.28-2.27-.46-3.47-1.27-8-3.38-12.65-5.81-12.79Zm8.31,26.45h0Z", fill: secondaryColor })),
                    React.createElement("path", { d: "M98.92,72a1.28,1.28,0,0,1-1.36,1.2,3.17,3.17,0,0,1-.76-.1c-1.6-.34-5.6-1.8-9.63-7.9a1.29,1.29,0,0,1-.18-1,29.84,29.84,0,0,1,.8-3.19c.89-2.84,2.51-6.16,5.16-5.83,1.23.15,3.07,1.12,4.71,7.73a49.46,49.46,0,0,1,1.13,6.16A17.49,17.49,0,0,1,98.92,72Z", fill: primaryColor }),
                    React.createElement("path", { d: "M40.52,63c-6.2,7.07-11.62,6.68-11.85,6.68-.06-.06-.13-.06-.18-.09a1.3,1.3,0,0,1-1-1.28c0-.09,0-.19,0-.29.18-3,2.58-11.93,5.49-14.77a3.38,3.38,0,0,1,2.38-1.1c3,0,4.46,4.33,5.08,7.31.24,1.13.36,2.07.41,2.53A1.32,1.32,0,0,1,40.52,63Z", fill: primaryColor }),
                    React.createElement("path", { d: "M27.51,88.41c-1.64-.86-3.29-1.62-5-2.3a50.43,50.43,0,0,0-5.1-1.78L16.28,84c-1.34-.36-2.71-.66-4.09-.91-.89-.19-1.78-.29-2.69-.44-.45-.11-.92-.11-1.36-.19s-.92-.13-1.39-.21c.44-.1.92-.18,1.39-.26s.91-.16,1.38-.19a22.26,22.26,0,0,1,2.83,0,22.84,22.84,0,0,1,4.56.68c.34.07.67.17,1,.26a24,24,0,0,1,5.2,2.2A18.71,18.71,0,0,1,27.51,88.41Z", fill: primaryColor }),
                    React.createElement("path", { d: "M26.78,93.07a54.6,54.6,0,0,0-5.41-.92A46.48,46.48,0,0,0,16,91.78H14.42c-1.28,0-2.54.07-3.82.2-.92.05-1.81.19-2.72.29-.48,0-.92.13-1.36.18s-.92.13-1.39.18c.41-.21.84-.41,1.26-.6a11.36,11.36,0,0,1,1.3-.52,23.3,23.3,0,0,1,6.94-1.33q.69,0,1.38,0a25.23,25.23,0,0,1,5.6.74A16.57,16.57,0,0,1,26.78,93.07Z", fill: primaryColor }),
                    React.createElement("path", { d: "M27,99.08a46.45,46.45,0,0,0-5.46.31,45,45,0,0,0-5.34.84l-1.34.31c-1.3.31-2.6.65-3.87,1.08-.86.26-1.72.57-2.59.88-.44.14-.86.32-1.28.5a13.33,13.33,0,0,1-1.3.47c.36-.31.73-.57,1.1-.86a11.22,11.22,0,0,1,1.14-.81,24.66,24.66,0,0,1,2.46-1.36,21.74,21.74,0,0,1,4-1.48c.43-.12.86-.23,1.3-.33a25.19,25.19,0,0,1,5.62-.52A18.15,18.15,0,0,1,27,99.08Z", fill: primaryColor }),
                    React.createElement("path", { d: "M122.2,85.43l-1.39.07c-.47,0-.91,0-1.39.06-.91,0-1.83.07-2.72.18a52.12,52.12,0,0,0-5.33.71c-.48.08-1,.18-1.44.28-1.28.28-2.53.62-3.79,1A47.82,47.82,0,0,0,101,89.48a17,17,0,0,1,4.73-3,23.85,23.85,0,0,1,3.73-1.29,15.37,15.37,0,0,1,1.66-.38,24.11,24.11,0,0,1,5.62-.39,20.13,20.13,0,0,1,2.81.31,10.2,10.2,0,0,1,1.35.32C121.31,85.17,121.78,85.27,122.2,85.43Z", fill: primaryColor }),
                    React.createElement("path", { d: "M122.87,95.81a12,12,0,0,1-1.35-.31c-.45-.11-.89-.24-1.34-.32-.88-.18-1.77-.39-2.66-.55a44.63,44.63,0,0,0-5.34-.7c-.32,0-.64-.06-1-.07-1.47-.1-3-.11-4.43-.09-1.88.08-3.69.21-5.55.42a17.47,17.47,0,0,1,5.37-1.67,23.82,23.82,0,0,1,4.47-.28c.39,0,.79,0,1.18.07a23.34,23.34,0,0,1,5.54,1.09,25.85,25.85,0,0,1,2.62,1c.41.19.83.42,1.26.66S122.48,95.55,122.87,95.81Z", fill: primaryColor }),
                    React.createElement("path", { d: "M121.13,106.56a12.28,12.28,0,0,1-1.26-.6c-.42-.21-.81-.44-1.23-.6-.84-.39-1.65-.79-2.48-1.13a53,53,0,0,0-5-1.88c-.22-.07-.44-.14-.65-.19-1.5-.46-3-.83-4.59-1.15a54.41,54.41,0,0,0-5.46-.83,17.48,17.48,0,0,1,5.59-.45,24.46,24.46,0,0,1,4.81.83c.25.06.5.14.74.22a23.14,23.14,0,0,1,5.15,2.3,20,20,0,0,1,2.33,1.59c.37.3.73.61,1.07.92S120.79,106.22,121.13,106.56Z", fill: primaryColor }),
                    React.createElement("path", { d: "M79,103.39c-.19.24-.34.48-.53.71a.35.35,0,0,1,0,.08,9.49,9.49,0,0,1-6.65,3.87,21.8,21.8,0,0,1-2.56,5.26c-1.69,2.53-3.66,3.92-5.65,4a4.52,4.52,0,0,1-1-.11,8.49,8.49,0,0,1-4.76-3.66,22.67,22.67,0,0,1-2.75-5.28A8.57,8.57,0,0,1,53.6,108a10.21,10.21,0,0,1-5.4-3.37l-.05-.05a4.41,4.41,0,0,1-.52-.7,1.19,1.19,0,1,1,2-1.31s.1.15.31.41l0,0a7.24,7.24,0,0,0,5.81,2.75c2-.14,4.06-1.2,6.19-3.19a7.61,7.61,0,0,1-3.84-3.37,2.66,2.66,0,0,1,0-3A4,4,0,0,1,60.42,95a13.68,13.68,0,0,1,2.74-.3c1.79,0,4.11.13,5.08,1.33a2.74,2.74,0,0,1,.16,3,7.49,7.49,0,0,1-3.75,3.52c1,.92,3.48,3,6.31,3.07,2.07.08,4-1,5.68-3.06l0,0a0,0,0,0,1,0,0c.13-.18.29-.37.41-.55a1.19,1.19,0,0,1,1.65-.26A1.17,1.17,0,0,1,79,103.39Z", fill: primaryColor }),
                    React.createElement("path", { d: "M86.86,84.49a.43.43,0,0,1-.28.36l-.11,0A23.43,23.43,0,0,0,83.65,86a15.91,15.91,0,0,0-2.54,1.51c-.39.27-.76.6-1.13.89l-.52.5a3.19,3.19,0,0,0-.26.26l0,0a12.55,12.55,0,0,1,1.94,0,9.22,9.22,0,0,1,2.64.66,9.67,9.67,0,0,1,2.3,1.3.44.44,0,0,1,.08.61.43.43,0,0,1-.45.15l0,0c-.4-.1-.76-.25-1.16-.33s-.76-.19-1.15-.24a9.62,9.62,0,0,0-2.27-.13,11.24,11.24,0,0,0-2.23.34,9.42,9.42,0,0,0-1.07.34c-.18.08-.34.13-.5.21l-.23.11s-.08,0-.11,0l-.07,0,0,0a1.23,1.23,0,0,1-1.65-1.65,13.58,13.58,0,0,1,2-2.9,9.83,9.83,0,0,1,1.28-1.21,9.93,9.93,0,0,1,1.46-1,11.59,11.59,0,0,1,3.2-1.28,10.3,10.3,0,0,1,3.37-.3A.44.44,0,0,1,86.86,84.49Z", fill: primaryColor }),
                    React.createElement("path", { d: "M51.19,89.11c-.26,4.1-2.76,7.31-5.68,7.31h-.24a3.66,3.66,0,0,1-.57,0c-2.69-.58-4.6-4-4.37-7.9.27-4.21,2.9-7.48,5.91-7.29A4.71,4.71,0,0,1,50,83.65,9.37,9.37,0,0,1,51.19,89.11Z", fill: primaryColor })),
                React.createElement("path", { d: "M63.54,28.34v-.7a4.77,4.77,0,0,1,.59-2.46,10,10,0,0,1,1.65-1.94,18.07,18.07,0,0,1,1.87-1.58,7.34,7.34,0,0,0,1.51-1.4,2.66,2.66,0,0,0,.59-1.72,2.15,2.15,0,0,0-1-2,6.65,6.65,0,0,0-3.34-.62,11.72,11.72,0,0,0-3,.4,10.38,10.38,0,0,0-2.57,1v-5A14.46,14.46,0,0,1,63,11.24,19.22,19.22,0,0,1,67,10.83c2.84,0,5,.63,6.5,1.88a6.18,6.18,0,0,1,2.23,5.06,6,6,0,0,1-.84,3.34,12.35,12.35,0,0,1-2.46,2.57c-.9.76-1.66,1.42-2.27,2a2.79,2.79,0,0,0-.92,2.2v.48Zm-.25,6.49V30.58h6.2v4.25Z", fill: secondaryColor }))),
        React.createElement("path", { d: "M128,65.94l-4-.12c0-.61,0-1.21,0-1.82s0-1.21,0-1.82l4-.12c0,.65,0,1.29,0,1.94S128,65.29,128,65.94Zm-.23-7.74-4,.36c-.11-1.21-.26-2.41-.44-3.6l4-.59C127.47,55.63,127.63,56.91,127.74,58.2Zm-1.15-7.64-3.91.84c-.26-1.19-.55-2.36-.87-3.52l3.85-1.07C126,48,126.32,49.3,126.59,50.56Zm-2.07-7.44-3.79,1.3c-.39-1.14-.82-2.27-1.28-3.39l3.69-1.53C123.64,40.69,124.09,41.89,124.52,43.12Zm-3-7.14L118,37.73c-.53-1.09-1.09-2.16-1.69-3.21l3.49-2C120.39,33.67,121,34.82,121.55,36Zm-3.8-6.73-3.36,2.17c-.65-1-1.34-2-2.06-3l3.22-2.37C116.32,27.1,117.05,28.16,117.75,29.25ZM113.17,23l-3.08,2.56c-.77-.93-1.57-1.84-2.4-2.72l2.91-2.74C111.48,21.07,112.34,22,113.17,23Zm-5.3-5.63-2.74,2.91c-.88-.83-1.79-1.63-2.72-2.4L105,14.83C106,15.66,106.93,16.52,107.87,17.4Zm-5.94-4.95-2.37,3.22c-1-.72-2-1.41-3-2.06l2.17-3.36C99.84,11,100.9,11.68,101.93,12.45Zm-6.48-4.2-2,3.48c-1-.6-2.12-1.16-3.21-1.69L92,6.45C93.18,7,94.33,7.61,95.45,8.25Zm-7-3.39L87,8.55c-1.12-.46-2.25-.89-3.39-1.28l1.3-3.79C86.11,3.91,87.31,4.36,88.5,4.86ZM81.19,2.34,80.12,6.19c-1.16-.32-2.33-.61-3.52-.87l.84-3.91C78.7,1.68,80,2,81.19,2.34ZM73.63.72l-.59,4c-1.19-.18-2.39-.33-3.6-.44l.36-4C71.09.37,72.37.53,73.63.72ZM65.94,0C65.29,0,64.65,0,64,0s-1.29,0-1.94,0l.12,4c.61,0,1.21,0,1.82,0s1.21,0,1.82,0ZM58.2.26l.36,4c-1.21.11-2.41.26-3.6.44l-.59-4C55.63.53,56.91.37,58.2.26ZM50.56,1.41l.84,3.91c-1.19.26-2.36.55-3.52.87L46.81,2.34C48,2,49.3,1.68,50.56,1.41ZM43.12,3.48l1.3,3.79c-1.14.39-2.27.82-3.39,1.28L39.5,4.86C40.69,4.36,41.89,3.91,43.12,3.48ZM36,6.45,37.73,10c-1.09.53-2.16,1.09-3.21,1.69l-2-3.48C33.67,7.61,34.82,7,36,6.45Zm-6.73,3.8,2.17,3.36c-1,.65-2,1.34-3,2.06l-2.37-3.22C27.1,11.68,28.16,11,29.25,10.25ZM23,14.83l2.56,3.08c-.93.77-1.84,1.57-2.72,2.4L20.13,17.4C21.07,16.52,22,15.66,23,14.83Zm-5.63,5.3,2.91,2.74c-.83.88-1.63,1.79-2.4,2.72L14.83,23C15.66,22,16.52,21.07,17.4,20.13Zm-4.95,5.94,3.22,2.37c-.72,1-1.41,2-2.06,3l-3.36-2.17C11,28.16,11.68,27.1,12.45,26.07Zm-4.2,6.48,3.48,2c-.6,1-1.16,2.12-1.69,3.21L6.45,36C7,34.82,7.61,33.67,8.25,32.55Zm-3.39,7L8.55,41c-.46,1.12-.89,2.25-1.28,3.39l-3.79-1.3C3.91,41.89,4.36,40.69,4.86,39.5ZM2.34,46.81l3.85,1.07c-.32,1.16-.61,2.33-.87,3.52l-3.91-.84C1.68,49.3,2,48,2.34,46.81ZM.72,54.37l4,.59c-.18,1.19-.33,2.39-.44,3.6l-4-.36C.37,56.91.53,55.63.72,54.37ZM0,62.06c0,.65,0,1.29,0,1.94s0,1.29,0,1.94l4-.12c0-.61,0-1.21,0-1.82s0-1.21,0-1.82ZM.26,69.8l4-.36c.11,1.21.26,2.41.44,3.6l-4,.59C.53,72.37.37,71.09.26,69.8Zm1.15,7.64,3.91-.84c.26,1.19.55,2.36.87,3.52L2.34,81.19C2,80,1.68,78.7,1.41,77.44Zm2.07,7.44,3.79-1.3c.39,1.14.82,2.27,1.28,3.39L4.86,88.5C4.36,87.31,3.91,86.11,3.48,84.88Zm3,7.14L10,90.27c.53,1.09,1.09,2.16,1.69,3.21l-3.48,2C7.61,94.33,7,93.18,6.45,92Zm3.8,6.73,3.36-2.17c.65,1,1.34,2,2.06,3l-3.22,2.37C11.68,100.9,11,99.84,10.25,98.75ZM14.83,105l3.08-2.56c.77.93,1.57,1.84,2.4,2.72l-2.91,2.74C16.52,106.93,15.66,106,14.83,105Zm5.3,5.63,2.74-2.91c.88.83,1.79,1.63,2.72,2.4L23,113.17C22,112.34,21.07,111.48,20.13,110.6Zm5.94,5,2.37-3.22c1,.72,2,1.41,3,2.06l-2.17,3.36C28.16,117.05,27.1,116.32,26.07,115.55Zm6.48,4.21,2-3.49c1,.6,2.12,1.16,3.21,1.69L36,121.55C34.82,121,33.67,120.39,32.55,119.76Zm7,3.38L41,119.45c1.12.46,2.25.89,3.39,1.28l-1.3,3.79C41.89,124.09,40.69,123.64,39.5,123.14Zm7.31,2.52,1.07-3.85c1.16.32,2.33.61,3.52.87l-.84,3.91C49.3,126.32,48,126,46.81,125.66Zm7.56,1.62.59-4c1.19.18,2.39.33,3.6.44l-.36,4C56.91,127.63,55.63,127.47,54.37,127.28Zm7.69.69.12-4c.61,0,1.21,0,1.82,0s1.21,0,1.82,0l.12,4c-.65,0-1.29,0-1.94,0S62.71,128,62.06,128Zm7.74-.23-.36-4c1.21-.11,2.41-.26,3.6-.44l.59,4C72.37,127.47,71.09,127.63,69.8,127.74Zm7.64-1.15-.84-3.91c1.19-.26,2.36-.55,3.52-.87l1.07,3.85C80,126,78.7,126.32,77.44,126.59Zm7.44-2.07-1.3-3.79c1.14-.39,2.27-.82,3.39-1.28l1.53,3.69C87.31,123.64,86.11,124.09,84.88,124.52Zm7.14-3L90.27,118c1.09-.53,2.16-1.09,3.21-1.69l2,3.49C94.33,120.39,93.18,121,92,121.55Zm6.73-3.8-2.17-3.36c1-.65,2-1.34,3-2.06l2.37,3.22C100.9,116.32,99.84,117.05,98.75,117.75Zm6.22-4.58-2.56-3.08c.93-.77,1.84-1.57,2.72-2.4l2.74,2.91C106.93,111.48,106,112.34,105,113.17Zm5.63-5.3-2.91-2.74c.83-.88,1.63-1.79,2.4-2.72l3.08,2.56C112.34,106,111.48,106.93,110.6,107.87Zm5-5.94-3.22-2.37c.72-1,1.41-2,2.06-3l3.36,2.17C117.05,99.84,116.32,100.9,115.55,101.93Zm4.21-6.48-3.49-2c.6-1,1.16-2.12,1.69-3.21L121.55,92C121,93.18,120.39,94.33,119.76,95.45Zm3.38-7L119.45,87c.46-1.12.89-2.25,1.28-3.39l3.79,1.3C124.09,86.11,123.64,87.31,123.14,88.5Zm2.52-7.31-3.85-1.07c.32-1.16.61-2.33.87-3.52l3.91.84C126.32,78.7,126,80,125.66,81.19Zm1.62-7.56-4-.59c.18-1.19.33-2.39.44-3.6l4,.36C127.63,71.09,127.47,72.37,127.28,73.63Z", fill: secondaryColor, "fill-rule": "evenodd" })));
};

var Icon$1n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0967 17.8521L7.87565 20.2891C6.91907 20.8414 5.69589 20.5136 5.1436 19.557L0.999729 12.3796C0.447444 11.4231 0.775193 10.1999 1.73178 9.64759L6.31754 7C6.53486 6.87453 6.76593 6.79448 6.99977 6.75691V6C6.99977 4.89543 7.8952 4 8.99977 4H14.9998C16.1043 4 16.9998 4.89543 16.9998 6V6.73545C17.299 6.75379 17.5986 6.83993 17.8759 7L22.4616 9.64759C23.4182 10.1999 23.746 11.4231 23.1937 12.3796L19.0498 19.557C18.4975 20.5136 17.2743 20.8414 16.3178 20.2891L12.0967 17.8521ZM8.99977 6L14.9998 6L14.9998 7.98154L11.2363 14.5H8.99977L8.99977 6ZM6.99977 14.5L6.99977 8.91551L2.73178 11.3796L6.87565 18.557L10.4386 16.5H8.99977C7.8952 16.5 6.99977 15.6046 6.99977 14.5ZM16.8759 8.73205L21.4616 11.3796L17.3178 18.557L12.732 15.9094L16.8759 8.73205Z" })));
};

var Icon$1m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$1l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" }),
        React.createElement("path", { d: "M11.25 7.72H6.25V9.22H11.25V7.72Z" }),
        React.createElement("path", { d: "M18 15.75H13V17.25H18V15.75Z" }),
        React.createElement("path", { d: "M18 13.25H13V14.75H18V13.25Z" }),
        React.createElement("path", { d: "M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z" }),
        React.createElement("path", { d: "M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z" })));
};

var Icon$1k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$1j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$1i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.00012 16.2L5.50012 12.7C5.11012 12.31 4.49012 12.31 4.10012 12.7C3.71012 13.09 3.71012 13.71 4.10012 14.1L8.29012 18.29C8.68012 18.68 9.31012 18.68 9.70012 18.29L20.3001 7.70001C20.6901 7.31001 20.6901 6.69001 20.3001 6.30001C19.9101 5.91001 19.2901 5.91001 18.9001 6.30001L9.00012 16.2Z" })));
};

var Icon$1h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$1g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$1f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$1e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$1d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$1c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$1b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$1a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$19 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("path", { d: "M68.56,24.22s0,.08,0,.11,0,.09,0,.13,0,.05,0,.08a.43.43,0,0,0,0,.12.26.26,0,0,0,0,.08,1.17,1.17,0,0,1,0,.11.64.64,0,0,1,0,.07,1.42,1.42,0,0,0-.08.18l0,0a.61.61,0,0,0-.07.14l0,0h0l-.09.13,0,.07s-.08.09-.12.15,0,0,0,0l-.15.17-.18.17,0,0v0c-.05,0-.09.09-.15.13l0,0a4.27,4.27,0,0,1-.44.3l0,0h0a.24.24,0,0,1-.1.05l0,0-.1,0-.19.08a.2.2,0,0,0-.08,0l-.2.07h0A.32.32,0,0,1,66,27l-.23.07h-.07a2.17,2.17,0,0,1-.35.07,6,6,0,0,1-1.55.08,5.71,5.71,0,0,1-1.13-.15,3.75,3.75,0,0,1-3.27-3.12c0-.06,0-.11,0-.17v0a13.35,13.35,0,0,1,.09-1.68c0-.35.08-.71.13-1.08l0-.07c0-.08,0-.15,0-.23a34.81,34.81,0,0,1,.83-3.81A21.53,21.53,0,0,1,61.83,13c.89-1.93,1.83-2.84,2.86-2.78,2,.11,3,3.94,3.51,7.14a38.31,38.31,0,0,1,.41,4A18.42,18.42,0,0,1,68.56,24.22Z", transform: "translate(0 -10.22)", fill: "#ffc700" }),
        React.createElement("path", { d: "M67.22,23s0,.06,0,.08,0,.07,0,.1a.43.43,0,0,0,0,.05.19.19,0,0,0,0,.08s0,0,0,.06l0,.08s0,0,0,0l-.06.12s0,0,0,0a.69.69,0,0,0,0,.1l0,0h0a.41.41,0,0,1-.05.09l0,0-.08.11,0,0-.11.12-.12.12,0,0h0l-.11.1,0,0a3.37,3.37,0,0,1-.31.21h0l-.06,0,0,0-.07,0-.14.06,0,0-.14,0h0s0,0-.06,0l-.16,0h0l-.25.05a4.28,4.28,0,0,1-1.09.06,4,4,0,0,1-.8-.11,2.66,2.66,0,0,1-2.31-2.2s0-.08,0-.12v0a8.6,8.6,0,0,1,.06-1.18c0-.25.06-.5.09-.76v-.05l0-.16a25.21,25.21,0,0,1,.59-2.7,16.16,16.16,0,0,1,1-2.73c.63-1.36,1.29-2,2-2,1.4.08,2.12,2.78,2.48,5,.14,1,.25,1.93.29,2.82A14,14,0,0,1,67.22,23Z", transform: "translate(0 -10.22)", fill: "#ffd800" }),
        React.createElement("path", { d: "M71.77,25.12s1.94-7.36,5-7.16,4.66,10.79,4.33,13.29C81.08,31.25,76.42,31.26,71.77,25.12Z", transform: "translate(0 -10.22)", fill: "#ffc700" }),
        React.createElement("path", { d: "M79.12,27.94a.56.56,0,0,1-.6.53,1.21,1.21,0,0,1-.33,0c-.7-.15-2.46-.79-4.23-3.46a.59.59,0,0,1-.08-.43c.19-1,.92-4.16,2.62-4,.54.07,1.34.5,2.07,3.4A16.47,16.47,0,0,1,79.12,27.94Z", transform: "translate(0 -10.22)", fill: "#ffd800" }),
        React.createElement("path", { d: "M55.56,26.16s-1.29-7.5-4.32-7.56S45.66,29,45.77,31.46C45.77,31.46,50.4,31.86,55.56,26.16Z", transform: "translate(0 -10.22)", fill: "#ffc700" }),
        React.createElement("path", { d: "M53.51,25.94c-2.67,3.15-5,3-5.15,3s-.06,0-.08,0a.58.58,0,0,1-.46-.55c0-1.21,1-5.35,2.29-6.66a1.44,1.44,0,0,1,1-.5c1.84,0,2.4,3.55,2.49,4.27A.61.61,0,0,1,53.51,25.94Z", transform: "translate(0 -10.22)", fill: "#ffd800" }),
        React.createElement("path", { d: "M72,52.41a112.7,112.7,0,0,1-8.38-21.53,113.52,113.52,0,0,1-8.11,21A22.42,22.42,0,0,1,40.29,69c-10,3.2-19.92-1.24-23.5-11.48A45,45,0,0,1,8.08,46.24v6.53a123.25,123.25,0,0,0,14,57.6h83.13a123.36,123.36,0,0,0,14-57.6V46.24a44.78,44.78,0,0,1-8.46,11C107.26,67.64,97.31,72.17,87.19,69A22.42,22.42,0,0,1,72,52.41Z", transform: "translate(0 -10.22)", fill: "#ffc700" }),
        React.createElement("path", { d: "M65.55,37.39a104.13,104.13,0,0,0,6.59,15.72A22.17,22.17,0,0,0,81.5,66.79l-4.72,43.53-12.93-.1-33.18.26c-6.89-18.81-9.38-30.6-12.22-49.94C22.62,69,31.6,72.4,40.71,69.49a22.19,22.19,0,0,0,15.1-16.87,105.4,105.4,0,0,0,6.33-15.23Z", transform: "translate(0 -10.22)", fill: "#ffd800", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M57.72,110.27,53.82,58.4A22.28,22.28,0,0,1,41.9,69.08a281.72,281.72,0,0,0,7.91,41.25Zm-13,.1C41.19,94.83,39,83.45,37.53,70.26a18.27,18.27,0,0,1-11.08-1.57c1.72,13.38,4.71,30.28,9.66,41.75Z", transform: "translate(0 -10.22)", fill: "#ffe971", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M56.85,49.11c-.33.68-.68,1.37-1,2A22.2,22.2,0,0,1,40.71,68C30.77,71.2,21,66.8,17.44,56.66l-.57-.56a17.55,17.55,0,0,0,.43,3.29C19.52,69.28,29.48,74.7,40.92,71,51.51,67.67,57.74,58.32,56.85,49.11Z", transform: "translate(0 -10.22)", fill: "#ffe971", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M71.16,49.11c.33.68.68,1.37,1,2A22.2,22.2,0,0,0,87.3,68c9.94,3.18,19.72-1.23,23.27-11.37l.57-.56a17.55,17.55,0,0,1-.43,3.29c-2.22,9.89-12.18,15.31-23.62,11.66C76.5,67.67,70.27,58.32,71.16,49.11Z", transform: "translate(0 -10.22)", fill: "#ffd800", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M84.21,40c0,9.79-9.2,16.51-20.55,16.51S43.12,49.76,43.12,40s9.19-16.5,20.54-16.5S84.21,30.18,84.21,40Z", transform: "translate(0 -10.22)", fill: "#ffc700" }),
        React.createElement("path", { d: "M75,29.74c1.46,5.47-6.11,3.33-14.16,5.49s-13.54,7.8-15,2.32,4.06-11,12.11-13.13S73.5,24.27,75,29.74Z", transform: "translate(0 -10.22)", fill: "#ffd800" }),
        React.createElement("path", { d: "M56.4,52.33C54.77,49.21,61,50.22,68,48.06S79.1,38.69,80.43,43,77,51.91,70.09,54.07,58,55.45,56.4,52.33Z", transform: "translate(0 -10.22)", fill: "#ffaf00" }),
        React.createElement("path", { d: "M66.58,28.19c.7,2.59-3.56,1.76-8.19,3s-7.9,4.09-8.59,1.5,2.58-5.38,7.22-6.62S65.89,25.6,66.58,28.19Z", transform: "translate(0 -10.22)", fill: "#feed8d" }),
        React.createElement("path", { d: "M59.81,40.52c0,3.62-1.62,5-3.61,5s-3.6-1.37-3.6-5,1.61-5,3.6-5S59.81,36.9,59.81,40.52Z", transform: "translate(0 -10.22)", fill: "#feed8d" }),
        React.createElement("path", { d: "M59.81,39.72c0,3.62-1.62,5-3.61,5s-3.6-1.37-3.6-5,1.61-5,3.6-5S59.81,36.1,59.81,39.72Z", transform: "translate(0 -10.22)", fill: "#cc240e" }),
        React.createElement("path", { d: "M58.14,36.84c.25,1.43-1,.87-2.44,1.44s-2.33,2-2.58.61a3.28,3.28,0,0,1,2.08-3.45C56.59,34.87,57.88,35.4,58.14,36.84Z", transform: "translate(0 -10.22)", fill: "#fa7048" }),
        React.createElement("path", { d: "M54.82,43.33c-.28-1,1-.61,2.22-1.34s2-2.87,2.21-1.44A3.56,3.56,0,0,1,57.39,44C56.23,44.73,55.09,44.37,54.82,43.33Z", transform: "translate(0 -10.22)", fill: "#9f0400" }),
        React.createElement("path", { d: "M73.12,40.52c0,3.62-1.61,5-3.6,5s-3.61-1.37-3.61-5,1.61-5,3.61-5S73.12,36.9,73.12,40.52Z", transform: "translate(0 -10.22)", fill: "#feed8d" }),
        React.createElement("path", { d: "M73.12,39.72c0,3.62-1.61,5-3.6,5s-3.61-1.37-3.61-5,1.61-5,3.61-5S73.12,36.1,73.12,39.72Z", transform: "translate(0 -10.22)", fill: "#cc240e" }),
        React.createElement("path", { d: "M71.45,36.84c.25,1.43-1,.87-2.44,1.44s-2.33,2-2.58.61a3.28,3.28,0,0,1,2.08-3.45C69.9,34.87,71.2,35.4,71.45,36.84Z", transform: "translate(0 -10.22)", fill: "#fa7048" }),
        React.createElement("path", { d: "M68.13,43.33c-.27-1,1.06-.61,2.22-1.34s2-2.87,2.22-1.44A3.59,3.59,0,0,1,70.71,44C69.54,44.73,68.4,44.37,68.13,43.33Z", transform: "translate(0 -10.22)", fill: "#9f0400" }),
        React.createElement("path", { d: "M128,49.63c0,5.89-5.19,9.93-11.59,9.93s-11.58-4-11.58-9.93S110,39.7,116.41,39.7,128,43.74,128,49.63Z", transform: "translate(0 -10.22)", fill: "#ffc700" }),
        React.createElement("path", { d: "M122.92,43.62c.83,3.11-3.47,1.89-8,3.12s-7.69,4.43-8.53,1.32,2.31-6.24,6.89-7.47S122.09,40.51,122.92,43.62Z", transform: "translate(0 -10.22)", fill: "#ffd800" }),
        React.createElement("path", { d: "M112.33,57.05c-.92-1.78,2.63-1.2,6.58-2.43s6.32-5.32,7.08-2.89-1.93,5.08-5.88,6.31S113.26,58.82,112.33,57.05Z", transform: "translate(0 -10.22)", fill: "#ffaf00" }),
        React.createElement("path", { d: "M118.15,42.74c.4,1.47-2,1-4.65,1.7s-4.49,2.33-4.88.85,1.46-3,4.1-3.76S117.76,41.26,118.15,42.74Z", transform: "translate(0 -10.22)", fill: "#feed8d" }),
        React.createElement("path", { d: "M23.17,49.63c0,5.89-5.19,9.93-11.58,9.93S0,55.52,0,49.63,5.19,39.7,11.59,39.7,23.17,43.74,23.17,49.63Z", transform: "translate(0 -10.22)", fill: "#ffc700" }),
        React.createElement("path", { d: "M18.09,43.62c.84,3.11-3.47,1.89-8,3.12s-7.69,4.43-8.52,1.32,2.3-6.24,6.88-7.47S17.26,40.51,18.09,43.62Z", transform: "translate(0 -10.22)", fill: "#ffd800" }),
        React.createElement("path", { d: "M7.5,57.05c-.92-1.78,2.63-1.2,6.58-2.43s6.33-5.32,7.08-2.89S19.23,56.81,15.28,58,8.43,58.82,7.5,57.05Z", transform: "translate(0 -10.22)", fill: "#ffaf00" }),
        React.createElement("path", { d: "M13.32,42.74c.4,1.47-2,1-4.65,1.7s-4.49,2.33-4.89.85,1.47-3,4.11-3.76S12.93,41.26,13.32,42.74Z", transform: "translate(0 -10.22)", fill: "#feed8d" }),
        React.createElement("path", { d: "M109.81,112.68c0,5.95-1.35,8.47-46.15,8.47s-46.14-2.52-46.14-8.47,1.35-6.35,46.14-6.35S109.81,106.73,109.81,112.68Z", transform: "translate(0 -10.22)", fill: "#d8d8d8" }),
        React.createElement("path", { d: "M75.38,113.22c-.08,5.69-3.79,6.38-29.42,5.89-18.93-.35-23.91-.84-23.85-4.84s2-5.53,24-5.12C71.74,109.63,75.44,109.22,75.38,113.22Z", transform: "translate(0 -10.22)", fill: "#eff3f5" }),
        React.createElement("path", { d: "M25.57,115.79c-1-1.07-.25-2.58,1-4s2.6-2.21,3.56-1.14.25,2.58-1,4S26.52,116.86,25.57,115.79Z", transform: "translate(0 -10.22)", fill: "#7d7d7d" }),
        React.createElement("path", { d: "M25.37,115.56c-.81-.9-.05-2.35,1.22-3.77s2.55-2.27,3.36-1.36.05,2.35-1.22,3.77S26.17,116.47,25.37,115.56Z", transform: "translate(0 -10.22)", fill: "#373333" }),
        React.createElement("path", { d: "M100,115.79c-1-1.07-.25-2.58,1-4s2.6-2.21,3.56-1.14.24,2.58-1,4S100.91,116.86,100,115.79Z", transform: "translate(0 -10.22)", fill: "#7d7d7d" }),
        React.createElement("path", { d: "M99.77,115.58c-.82-.91-.06-2.37,1.21-3.79s2.56-2.26,3.37-1.35.07,2.37-1.2,3.79S100.59,116.5,99.77,115.58Z", transform: "translate(0 -10.22)", fill: "#373333" }),
        React.createElement("path", { d: "M43.61,116.75c-1.14-1.28-.29-3.06,1.21-4.74s3.09-2.63,4.22-1.36.3,3.06-1.21,4.74S44.75,118,43.61,116.75Z", transform: "translate(0 -10.22)", fill: "#7d7d7d" }),
        React.createElement("path", { d: "M43.3,116.4c-.9-1,0-2.71,1.52-4.39s3-2.72,3.92-1.7,0,2.72-1.52,4.4S44.21,117.42,43.3,116.4Z", transform: "translate(0 -10.22)", fill: "#373333" }),
        React.createElement("path", { d: "M81.89,116.75c-1.14-1.28-.29-3.06,1.21-4.74s3.09-2.63,4.23-1.36.29,3.06-1.21,4.74S83,118,81.89,116.75Z", transform: "translate(0 -10.22)", fill: "#7d7d7d" }),
        React.createElement("path", { d: "M81.63,116.45c-.94-1,0-2.76,1.47-4.44s3-2.7,4-1.65,0,2.76-1.47,4.45S82.57,117.51,81.63,116.45Z", transform: "translate(0 -10.22)", fill: "#373333" }),
        React.createElement("path", { d: "M62.06,117.61c-1.32-1.48-.34-3.55,1.41-5.51s3.59-3,4.91-1.57.34,3.55-1.41,5.5S63.38,119.09,62.06,117.61Z", transform: "translate(0 -10.22)", fill: "#7d7d7d" }),
        React.createElement("path", { d: "M61.8,117.32c-1.12-1.26-.08-3.26,1.67-5.22S67,109,68.12,110.24s.08,3.26-1.67,5.21S62.93,118.58,61.8,117.32Z", transform: "translate(0 -10.22)", fill: "#373333" }),
        React.createElement("path", { d: "M61.57,70.93a3.5,3.5,0,0,1,4.86,0l10,9.79a3.3,3.3,0,0,1,0,4.74l-10,9.78a3.5,3.5,0,0,1-4.86,0l-10-9.78a3.3,3.3,0,0,1,0-4.74Z", transform: "translate(0 -10.22)", fill: "#ffe971" }),
        React.createElement("path", { d: "M63.85,68.18V80.83H51.2a3.28,3.28,0,0,1,1-2.34l9.35-9.35A3.29,3.29,0,0,1,63.85,68.18Z", transform: "translate(0 -10.22)", fill: "#fa7048" }),
        React.createElement("path", { d: "M63.85,93.48V80.83H51.2a3.28,3.28,0,0,0,1,2.34l9.35,9.34A3.26,3.26,0,0,0,63.85,93.48Z", transform: "translate(0 -10.22)", fill: "#cc240e" }),
        React.createElement("path", { d: "M63.85,68.18V80.83H76.5a3.32,3.32,0,0,0-1-2.34l-9.35-9.35A3.32,3.32,0,0,0,63.85,68.18Z", transform: "translate(0 -10.22)", fill: "#cc240e" }),
        React.createElement("path", { d: "M63.85,93.48V80.83H76.5a3.32,3.32,0,0,1-1,2.34l-9.35,9.34A3.28,3.28,0,0,1,63.85,93.48Z", transform: "translate(0 -10.22)", fill: "#9f0400" }),
        React.createElement("path", { d: "M97.2,82.09a1.77,1.77,0,0,1,2.68,0l5.55,6.13a2.26,2.26,0,0,1,0,3l-5.55,6.13a1.77,1.77,0,0,1-2.68,0l-5.55-6.13a2.26,2.26,0,0,1,0-3Z", transform: "translate(0 -10.22)", fill: "#ffe971" }),
        React.createElement("path", { d: "M98.56,80.76v7.35H91.21a1.91,1.91,0,0,1,.56-1.36l5.43-5.43A1.91,1.91,0,0,1,98.56,80.76Z", transform: "translate(0 -10.22)", fill: "#fa7048" }),
        React.createElement("path", { d: "M98.56,95.47V88.11H91.21a1.89,1.89,0,0,0,.56,1.36l5.43,5.44A2,2,0,0,0,98.56,95.47Z", transform: "translate(0 -10.22)", fill: "#cc240e" }),
        React.createElement("path", { d: "M98.56,80.76v7.35h7.36a2,2,0,0,0-.56-1.36l-5.44-5.43A1.87,1.87,0,0,0,98.56,80.76Z", transform: "translate(0 -10.22)", fill: "#cc240e" }),
        React.createElement("path", { d: "M98.56,95.47V88.11h7.36a1.93,1.93,0,0,1-.56,1.36l-5.44,5.44A1.91,1.91,0,0,1,98.56,95.47Z", transform: "translate(0 -10.22)", fill: "#9f0400" }),
        React.createElement("path", { d: "M27,82.09a1.78,1.78,0,0,1,2.69,0l5.54,6.13a2.26,2.26,0,0,1,0,3l-5.54,6.13a1.78,1.78,0,0,1-2.69,0l-5.55-6.13a2.26,2.26,0,0,1,0-3Z", transform: "translate(0 -10.22)", fill: "#ffe971" }),
        React.createElement("path", { d: "M28.48,80.76v7.35H21.12a1.92,1.92,0,0,1,.57-1.36l5.43-5.43A1.91,1.91,0,0,1,28.48,80.76Z", transform: "translate(0 -10.22)", fill: "#fa7048" }),
        React.createElement("path", { d: "M28.48,95.47V88.11H21.12a1.9,1.9,0,0,0,.57,1.36l5.43,5.44A2,2,0,0,0,28.48,95.47Z", transform: "translate(0 -10.22)", fill: "#cc240e" }),
        React.createElement("path", { d: "M28.48,80.76v7.35h7.35a1.91,1.91,0,0,0-.56-1.36l-5.43-5.43A1.91,1.91,0,0,0,28.48,80.76Z", transform: "translate(0 -10.22)", fill: "#cc240e" }),
        React.createElement("path", { d: "M28.48,95.47V88.11h7.35a1.89,1.89,0,0,1-.56,1.36l-5.43,5.44A2,2,0,0,1,28.48,95.47Z", transform: "translate(0 -10.22)", fill: "#9f0400" })));
};

var Icon$18 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$17 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" })));
};

var Icon$16 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M4.68179 7.04592C5.06573 7.78505 5.47899 8.47752 5.91436 9.12605C4.76866 8.20293 3.15483 7.94918 1.72791 8.60664L0.865295 9.00408L0.949991 9.1879C1.87444 11.1943 4.25037 12.0714 6.25678 11.147L7.1194 10.7495C7.7588 11.5306 8.42708 12.2337 9.10661 12.8671C7.54917 12.0868 5.60297 12.3946 4.36752 13.7424L4.07604 14.0604L5.17158 15.0646C6.8001 16.5573 9.33037 16.4472 10.8231 14.8187L11.0984 14.5183C11.8534 15.0744 12.6001 15.5528 13.3138 15.9628C13.5418 16.0939 13.7667 16.218 13.9874 16.3354C12.2933 15.9571 10.485 16.7202 9.6092 18.3189L9.47337 18.5669L10.514 19.137C12.4515 20.1983 14.8825 19.4881 15.9439 17.5507L16.0715 17.3177C16.4836 17.4877 16.862 17.6297 17.1977 17.747C17.6961 17.9213 18.1016 18.0417 18.3855 18.1191L18.8453 18.2339C19.2507 18.3192 19.6484 18.0598 19.7338 17.6545C19.819 17.2494 19.56 16.8519 19.1551 16.7662L19.1524 16.7657C19.1551 16.7662 19.0729 16.7518 18.7802 16.6719C18.527 16.6029 18.1551 16.4928 17.6927 16.3311C17.1224 16.1317 16.416 15.8546 15.6253 15.4802L15.9997 14.8317C17.1043 12.9186 16.4488 10.4722 14.5356 9.36762L13.8989 9.00001L13.4324 9.80801C12.4895 11.4411 12.8291 13.4627 14.1387 14.7066C14.1128 14.6919 14.0869 14.6771 14.0609 14.6622C12.797 13.9361 11.4285 12.9847 10.1078 11.7498L10.5391 11.324C12.1111 9.77192 12.1274 7.23931 10.5753 5.66723L9.93826 5.02195L9.41242 5.5411C8.11055 6.82638 7.87565 8.78411 8.71479 10.3119C7.73795 9.1976 6.82187 7.90232 6.03634 6.39938C7.08943 4.4961 6.42732 2.09216 4.53566 1.00001L3.4039 0.346588L2.82248 1.35364C1.71791 3.26682 2.37341 5.71318 4.28658 6.81775L4.68179 7.04592Z" })));
};

var Icon$15 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M15.3182 7.04592C14.9343 7.78505 14.521 8.47752 14.0856 9.12605C15.2313 8.20293 16.8452 7.94918 18.2721 8.60664L19.1347 9.00408L19.05 9.1879C18.1256 11.1943 15.7496 12.0714 13.7432 11.147L12.8806 10.7495C12.2412 11.5306 11.5729 12.2337 10.8934 12.8671C12.4508 12.0868 14.397 12.3946 15.6325 13.7424L15.924 14.0604L14.8284 15.0646C13.1999 16.5573 10.6696 16.4472 9.17692 14.8187L8.90162 14.5183C8.1466 15.0744 7.39992 15.5528 6.68625 15.9628C6.45816 16.0939 6.23335 16.218 6.01259 16.3354C7.70668 15.9571 9.51501 16.7202 10.3908 18.3189L10.5266 18.5669L9.486 19.137C7.54854 20.1983 5.11749 19.4881 4.05611 17.5507L3.92849 17.3177C3.51637 17.4877 3.13804 17.6297 2.80235 17.747C2.30389 17.9213 1.89839 18.0417 1.61448 18.1191L1.15466 18.2339C0.749332 18.3192 0.351572 18.0598 0.26624 17.6545C0.180958 17.2494 0.440012 16.8519 0.844932 16.7662L0.847556 16.7657C0.844932 16.7662 0.927067 16.7518 1.21981 16.6719C1.47301 16.6029 1.84485 16.4928 2.30733 16.3311C2.87756 16.1317 3.58397 15.8546 4.3747 15.4802L4.0003 14.8317C2.89573 12.9186 3.55123 10.4722 5.4644 9.36762L6.10112 9.00001L6.56763 9.80801C7.51049 11.4411 7.1709 13.4627 5.86133 14.7066C5.88719 14.6919 5.9131 14.6771 5.93906 14.6622C7.20296 13.9361 8.57146 12.9847 9.89223 11.7498L9.46094 11.324C7.88886 9.77192 7.87263 7.23931 9.42468 5.66723L10.0617 5.02195L10.5876 5.5411C11.8895 6.82638 12.1243 8.78411 11.2852 10.3119C12.2621 9.1976 13.1781 7.90232 13.9637 6.39938C12.9106 4.4961 13.5727 2.09216 15.4643 1.00001L16.5961 0.346588L17.1775 1.35364C18.2821 3.26682 17.6266 5.71318 15.7134 6.81775L15.3182 7.04592Z" })));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$13 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M115.38,77.51C115,99.43,91.1,112.26,62,111.69S9.5,97.42,9.92,75.49s24.45-43.7,53.57-43.16S115.8,55.59,115.38,77.51Z", transform: "translate(0 -14.87)", fill: "#fff" }),
            React.createElement("g", { opacity: "0.2" },
                React.createElement("path", { d: "M62.49,111.63C33.38,111.06,10,97.36,10.43,75.44V75C14.76,92.61,36,103.39,61.7,103.9c29.08.54,52.91-12.23,53.42-34.09a33.46,33.46,0,0,1,.8,7.62C115.49,99.35,91.61,112.17,62.49,111.63Z", transform: "translate(0 -14.87)", fill: "#390075" })),
            React.createElement("path", { d: "M44.87,111.18a61.49,61.49,0,0,1-20.79-8.39C13.68,95.91,8.27,86.44,8.5,75.47c.2-11.12,6.23-22.47,16.55-31a58.54,58.54,0,0,1,76.45,1.45c10,9,15.55,20.55,15.33,31.67s-6,20.22-16.64,26.7c-9.86,6-23.45,9.15-38.24,8.87A88.84,88.84,0,0,1,44.87,111.18ZM74.35,35.06a58.81,58.81,0,0,0-10.89-1.28c-29.37-.56-51.75,21.58-52.14,41.77-.32,16,13.05,28.29,33.94,32.87A84.82,84.82,0,0,0,62,110.29c30.22.57,51.58-12.9,52-32.78.2-10.29-5.06-21.07-14.41-29.51A54.75,54.75,0,0,0,74.35,35.06Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("path", { d: "M44.87,111.18a61.49,61.49,0,0,1-20.79-8.39C13.68,95.91,8.27,86.44,8.5,75.47c.2-11.12,6.23-22.47,16.55-31a58.54,58.54,0,0,1,76.45,1.45c10,9,15.55,20.55,15.33,31.67s-6,20.22-16.64,26.7c-9.86,6-23.45,9.15-38.24,8.87A88.84,88.84,0,0,1,44.87,111.18ZM74.35,35.06a58.81,58.81,0,0,0-10.89-1.28c-29.37-.56-51.75,21.58-52.14,41.77-.32,16,13.05,28.29,33.94,32.87A84.82,84.82,0,0,0,62,110.29c30.22.57,51.58-12.9,52-32.78.2-10.29-5.06-21.07-14.41-29.51A54.75,54.75,0,0,0,74.35,35.06Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("path", { d: "M67,48.37a11.77,11.77,0,0,1-2.93.17c-5.57-.28-7.54-3.35-7.76-5.51A25.67,25.67,0,0,0,67,48.37Z", transform: "translate(0 -14.87)", fill: "#fe6dcb" }),
            React.createElement("path", { d: "M66.56,49.74a27,27,0,0,1-11.17-5.63,1.26,1.26,0,0,1-.49-.91,1.58,1.58,0,0,1,0-.37v-.06a38.21,38.21,0,0,1,.57-6.31,1.47,1.47,0,0,1,1-1.14,1.4,1.4,0,0,1,1.45.4A23.83,23.83,0,0,0,72.5,42.29a1.39,1.39,0,0,1,1,.54,1.37,1.37,0,0,1,.29,1.1c-.34,2.14-2,4.75-5.86,5.69a5.32,5.32,0,0,1-.74.14,1.46,1.46,0,0,1-.51,0A.28.28,0,0,1,66.56,49.74Zm.4-1.37Zm-9.27-6A24.13,24.13,0,0,0,67,46.92l.22-.06h0a5.16,5.16,0,0,0,3.1-1.93,26.47,26.47,0,0,1-12.45-5.4C57.75,40.61,57.69,41.58,57.69,42.34Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("path", { d: "M69.35,47.57a7.18,7.18,0,0,1-1.8.69c-.2.05-.39.08-.59.11A25.58,25.58,0,0,1,56.29,43a1.42,1.42,0,0,1,0-.29,37.76,37.76,0,0,1,.54-6,25.32,25.32,0,0,0,12.71,6.66,22.67,22.67,0,0,0,2.84.37A5.4,5.4,0,0,1,69.35,47.57Z", transform: "translate(0 -14.87)", fill: "#33aef1" }),
                React.createElement("path", { d: "M66.81,48.54A26.46,26.46,0,0,1,56.15,43.2l0-.06v-.09c0-.08,0-.17,0-.25v-.06a39.09,39.09,0,0,1,.54-6.08l0-.4.26.28a25.4,25.4,0,0,0,12.62,6.6,25.66,25.66,0,0,0,2.82.37h.2l0,.2a5.72,5.72,0,0,1-3.1,4,8.91,8.91,0,0,1-1.82.68c-.23.06-.43.08-.62.14h-.06S66.84,48.54,66.81,48.54Zm-10.34-5.6A25.66,25.66,0,0,0,66.9,48.17s.06,0,.06,0l.54-.11a7.58,7.58,0,0,0,1.73-.66h0a5.35,5.35,0,0,0,2.87-3.52,23.29,23.29,0,0,1-2.64-.34,25.84,25.84,0,0,1-12.54-6.43,35.47,35.47,0,0,0-.48,5.63v.06S56.47,42.88,56.47,42.94Z", transform: "translate(0 -14.87)", fill: "#390075" })),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M69.35,47.57c.11-1.45.17-2.87.17-4.23a22.67,22.67,0,0,0,2.84.37A5.39,5.39,0,0,1,69.35,47.57Z", transform: "translate(0 -14.87)", fill: "#fff" })),
            React.createElement("path", { d: "M72.36,43.71a22.67,22.67,0,0,1-2.84-.37,25.07,25.07,0,0,1-12.71-6.66A77.66,77.66,0,0,1,58.48,29s2.76,4.52,10.78,7.79c1,.4,2.08.8,3.24,1.17a32.49,32.49,0,0,1-.11,5.66C72.39,43.65,72.39,43.68,72.36,43.71Z", transform: "translate(0 -14.87)", fill: "#fdd800" }),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M72.36,43.71a22.67,22.67,0,0,1-2.84-.37,62.7,62.7,0,0,0-.29-6.57c1,.4,2.08.8,3.24,1.17a31.39,31.39,0,0,1-.11,5.65C72.39,43.65,72.39,43.68,72.36,43.71Z", transform: "translate(0 -14.87)", fill: "#fff" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M72.5,37.94c-1.16-.37-2.25-.74-3.24-1.17C61.24,33.5,58.48,29,58.48,29a48,48,0,0,1,2.73-7.76A21.11,21.11,0,0,0,67.81,28a15.52,15.52,0,0,0,3.87,1.82A78.47,78.47,0,0,1,72.5,37.94Z", transform: "translate(0 -14.87)", fill: "#b177ea" }),
                React.createElement("path", { d: "M72.7,38.19l-.26-.08c-1.1-.34-2.21-.74-3.24-1.17-8-3.27-10.83-7.82-10.86-7.87L58.29,29l0-.09A52.57,52.57,0,0,1,61,21.13l.17-.34.17.34a21.18,21.18,0,0,0,6.52,6.74,15.9,15.9,0,0,0,3.81,1.79l.11,0,0,.11a76.05,76.05,0,0,1,.82,8.11ZM58.68,29c.4.57,3.33,4.66,10.64,7.65.93.4,1.93.74,3,1.08A72.51,72.51,0,0,0,71.48,30a16.7,16.7,0,0,1-3.81-1.79,21.44,21.44,0,0,1-6.46-6.57A53.39,53.39,0,0,0,58.68,29Z", transform: "translate(0 -14.87)", fill: "#390075" })),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M72.5,37.94c-1.16-.37-2.25-.74-3.24-1.17A59.3,59.3,0,0,0,67.78,28a15.52,15.52,0,0,0,3.87,1.82A72.46,72.46,0,0,1,72.5,37.94Z", transform: "translate(0 -14.87)", fill: "#fff" })),
            React.createElement("path", { d: "M71.71,29.66a15.36,15.36,0,0,1-3.87-1.82A20.9,20.9,0,0,1,61.24,21a13.24,13.24,0,0,1,2.67-4.1,2.52,2.52,0,0,1,1.88-.79C68.58,16.24,70.62,22.78,71.71,29.66Z", transform: "translate(0 -14.87)", fill: "#fe6dcb" }),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M72.05,30a15.88,15.88,0,0,1-3.87-1.82,53.41,53.41,0,0,0-3.9-10.92,2.57,2.57,0,0,1,1.88-.8C68.92,16.53,71,23.07,72.05,30Z", transform: "translate(0 -14.87)", fill: "#fff" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M71.42,31s-.06,0-.11,0c-7.28-2.3-11-8.9-11.12-9.18a1.16,1.16,0,0,1,0-1.06c1.79-3.86,3.64-5.68,5.66-5.57,3.92.2,6,8,7,14.53a1.12,1.12,0,0,1-.39,1A1.27,1.27,0,0,1,71.42,31Zm-8.9-9.84A19.6,19.6,0,0,0,70.2,28c-1.42-7.62-3.41-10.52-4.49-10.58C65,17.44,63.89,18.4,62.52,21.16Z", transform: "translate(0 -14.87)", fill: "#390075" }),
                React.createElement("path", { d: "M72.25,39.07l-.09,0c-10.8-3.32-14.5-9.21-14.64-9.43a1.25,1.25,0,0,1-.14-.91,50.33,50.33,0,0,1,2.78-8,1.1,1.1,0,0,1,1-.65,1.19,1.19,0,0,1,1.05.6c0,.05,3.41,6.08,9.81,8.1a1.17,1.17,0,0,1,.79.91,78.37,78.37,0,0,1,.86,8.22,1.09,1.09,0,0,1-.46,1A1.39,1.39,0,0,1,72.25,39.07ZM59.74,28.75c.91,1.2,4.23,5,11.51,7.54-.14-1.82-.34-3.7-.63-5.58a20.61,20.61,0,0,1-9.21-7.08C60.84,25.14,60.28,26.88,59.74,28.75Z", transform: "translate(0 -14.87)", fill: "#390075" }),
                React.createElement("path", { d: "M68.66,44.36A26.28,26.28,0,0,1,56,37.51a1.19,1.19,0,0,1-.28-1,75,75,0,0,1,1.7-7.84,1.11,1.11,0,0,1,.94-.83,1.13,1.13,0,0,1,1.14.54c0,.06,3.47,5.4,13.36,8.45a1.18,1.18,0,0,1,.83,1,37.84,37.84,0,0,1-.12,5.85c0,.09,0,.17,0,.23a1.11,1.11,0,0,1-1.19.88A22.71,22.71,0,0,1,68.66,44.36Zm3.7-.65Zm-14.3-7.39a24.53,24.53,0,0,0,13.28,6.16c0-1,.08-2.3,0-3.66A29.78,29.78,0,0,1,59,31.51C58.65,33.1,58.31,34.75,58.06,36.32Z", transform: "translate(0 -14.87)", fill: "#390075" }),
                React.createElement("path", { d: "M66.62,49.48a26.84,26.84,0,0,1-11.06-5.55,1.05,1.05,0,0,1-.4-.73,1.38,1.38,0,0,1,0-.35V42.8a37.68,37.68,0,0,1,.57-6.26,1.14,1.14,0,0,1,2-.59A24.44,24.44,0,0,0,72.44,42.6a1.17,1.17,0,0,1,.83.43,1.14,1.14,0,0,1,.23.9c-.32,2-2,4.55-5.66,5.46-.26.06-.49.12-.71.15a1.55,1.55,0,0,1-.43,0S66.64,49.48,66.62,49.48ZM67,48.37ZM57.4,42.48A24.65,24.65,0,0,0,67,47.2c.08,0,.19,0,.31-.05h0a5.33,5.33,0,0,0,3.52-2.42A26.28,26.28,0,0,1,57.69,39,23.92,23.92,0,0,0,57.4,42.48Z", transform: "translate(0 -14.87)", fill: "#390075" }),
                React.createElement("path", { d: "M61.61,49.39c-4.41-1-6.25-3.81-6.48-6.22A1.16,1.16,0,0,1,55.75,42a1.12,1.12,0,0,1,1.28.14A24.37,24.37,0,0,0,67.1,47.23l.11,0a1.17,1.17,0,0,1,.91,1.14,1.14,1.14,0,0,1-.94,1.11,13.16,13.16,0,0,1-3.18.17A14.21,14.21,0,0,1,61.61,49.39Z", transform: "translate(0 -14.87)", fill: "#390075" })),
            React.createElement("path", { d: "M61.64,49.65c-4.32-.94-6.51-3.75-6.77-6.45,0-.12,0-.23,0-.35V42.8A26.57,26.57,0,0,1,55,39.33c.08-.71.17-1.45.28-2.22l0-.14c0-.17.06-.31.08-.48a76.39,76.39,0,0,1,1.71-7.88,46.67,46.67,0,0,1,2.81-8c1.85-4,3.79-5.86,5.92-5.74,4.09.23,6.2,8.13,7.25,14.75A78.84,78.84,0,0,1,74,37.88a38.84,38.84,0,0,1-.11,5.91c0,.09,0,.17,0,.23h0c0,.09,0,.2-.06.28a1.3,1.3,0,0,0,0,.15,1.11,1.11,0,0,0,0,.25c0,.06,0,.12-.06.17a1.85,1.85,0,0,1-.09.23c0,.06,0,.11,0,.14s-.12.26-.17.37,0,.06-.06.09a2.41,2.41,0,0,0-.14.28L73,46.1l0,0-.17.26-.08.14-.23.32s0,0-.06.08a3.18,3.18,0,0,1-.31.34l-.06.06-.31.31-.09.06,0,0c-.12.08-.2.2-.32.28l-.08.06c-.29.23-.6.42-.91.62l-.06,0-.08,0-.2.11c-.06,0-.09.06-.12.06l-.2.09c-.14,0-.25.11-.39.17l-.17.08a3.73,3.73,0,0,1-.4.14l-.06,0-.17.06c-.17.06-.31.08-.48.14a.25.25,0,0,1-.14,0c-.26.06-.49.11-.72.14A12.83,12.83,0,0,1,64,50,12,12,0,0,1,61.64,49.65Zm4.12-31.9h-.08c-.46,0-1.68.8-3.19,4.09a47.83,47.83,0,0,0-2.64,7.54c-.68,2.53-1.25,5.14-1.65,7.59a2.66,2.66,0,0,0-.06.45l0,.15c-.11.74-.19,1.45-.25,2.1a21.16,21.16,0,0,0-.17,3.07v.2c.17,1.79,2,4,6.4,4.21A11.23,11.23,0,0,0,66.67,47a3.14,3.14,0,0,0,.51-.12l.09,0a1.12,1.12,0,0,0,.34-.11l.14-.06a1.15,1.15,0,0,0,.29-.11l.08,0a2.64,2.64,0,0,0,.29-.14l.2-.09a.25.25,0,0,1,.11,0l.06,0a.07.07,0,0,1,0,0,7,7,0,0,0,.6-.4.1.1,0,0,1,.06,0l.2-.17h0l0,0a.76.76,0,0,0,.2-.2l0,0c.06-.09.14-.15.2-.23l0-.06s.08-.11.11-.17l0-.06a.36.36,0,0,0,.11-.17l.06-.08a.85.85,0,0,0,.09-.14l0-.06a1.29,1.29,0,0,1,.09-.2l0-.08c0-.06,0-.09.06-.15l0-.08s0-.09,0-.12l0-.08a1.06,1.06,0,0,1,0-.14.11.11,0,0,1,0-.09v0A34.9,34.9,0,0,0,71.05,38a73.64,73.64,0,0,0-.82-7.93C68.89,21.42,66.81,18,65.76,17.75Zm4.95,28.89ZM71,43.42Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("path", { d: "M83.76,44.28s4.81-18.23,12.31-17.75,11.54,26.73,10.72,32.93C106.82,59.46,95.27,59.49,83.76,44.28Z", transform: "translate(0 -14.87)", fill: "#fff" }),
            React.createElement("path", { d: "M83.31,44.16a7.07,7.07,0,0,1,.17-3.89,19.36,19.36,0,0,1,1.36-3.53c.54-1.14,1-2.3,1.65-3.44a34.43,34.43,0,0,1,2-3.33,15.89,15.89,0,0,1,2.7-3,7.4,7.4,0,0,1,4.09-1.82h.91l.35,0c.22,0,.42.09.65.14a2.41,2.41,0,0,1,.6.23,6.91,6.91,0,0,1,1.93,1.31,13.84,13.84,0,0,1,2.45,3.3,36.8,36.8,0,0,1,2.87,7.1c.74,2.42,1.3,4.87,1.79,7.31S107.7,49.48,108,52c.05.63.14,1.25.17,1.88s.17,1.25.22,1.87a7.48,7.48,0,0,1-.08,1.94,3.46,3.46,0,0,1-1,1.9.58.58,0,0,1-.85,0l-.06,0,0-.06a4.71,4.71,0,0,1-.83-1.79,9.62,9.62,0,0,1-.17-1.76,17.77,17.77,0,0,0,0-1.79l-.17-1.8c-.25-2.38-.65-4.8-1.11-7.16a71.21,71.21,0,0,0-1.73-7,36.51,36.51,0,0,0-2.64-6.57,11.28,11.28,0,0,0-1.91-2.62,3.77,3.77,0,0,0-1.11-.74,1.21,1.21,0,0,0-.25-.08c-.09,0-.18-.06-.26-.06L96,28h-.49a4.83,4.83,0,0,0-2.53,1.2,13.51,13.51,0,0,0-2.19,2.47,28.82,28.82,0,0,0-1.79,3,27.61,27.61,0,0,0-1.45,3.24c-.39,1.13-.79,2.27-1.28,3.35a8.59,8.59,0,0,1-2,3.16l0,0a.54.54,0,0,1-.77,0A1.29,1.29,0,0,0,83.31,44.16Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", null,
                    React.createElement("path", { d: "M90.38,43.11S92.09,34,95.3,34.44s5.43,13.65,5.21,16.75C100.51,51.16,95.59,51,90.38,43.11Z", transform: "translate(0 -14.87)", fill: "#fe6dcb" }),
                    React.createElement("path", { d: "M99.85,51.27c-1.5-.34-5.46-1.76-9.64-8.05l0,0,0-.09c0-.37,1.76-9.24,5.11-8.81s5.6,14,5.38,16.94v.2h-.2A1.86,1.86,0,0,0,99.85,51.27Zm-9.27-8.22c4.5,6.74,8.79,7.77,9.76,7.91.14-3.5-2.11-15.7-5-16.32a.23.23,0,0,1-.12,0C92.43,34.27,90.75,42.2,90.58,43.05Z", transform: "translate(0 -14.87)", fill: "#390075" })),
                React.createElement("path", { d: "M99.65,52.46c-1.73-.37-6.08-2-10.46-8.58a1.38,1.38,0,0,1-.2-1.05c.46-2.45,2.28-10.32,6.48-9.81,1.34.17,3.33,1.22,5.12,8.41A40.28,40.28,0,0,1,102,51.27a1.4,1.4,0,0,1-1.48,1.31A3.16,3.16,0,0,1,99.65,52.46ZM91.89,42.8C94.76,47,97.44,48.63,99,49.31a51.16,51.16,0,0,0-1.14-6.85c-1.19-5-2.44-6.49-2.79-6.63C94.31,35.75,92.72,38.87,91.89,42.8Z", transform: "translate(0 -14.87)", fill: "#390075" })),
            React.createElement("path", { d: "M43.56,42.14S40.71,23.49,33.21,23.21,18.91,48.57,19.05,54.8C19.05,54.8,30.51,56,43.56,42.14Z", transform: "translate(0 -14.87)", fill: "#fff" }),
            React.createElement("path", { d: "M43.1,42.2a9.41,9.41,0,0,1-1.7-3.35c-.37-1.14-.63-2.34-.91-3.47A28,28,0,0,0,39.38,32a24.9,24.9,0,0,0-1.48-3.18A13.54,13.54,0,0,0,36,26.11a4.78,4.78,0,0,0-2.39-1.45c-.12,0-.2,0-.31,0l-.15,0H33l-.25,0c-.09,0-.18,0-.29.06a4.3,4.3,0,0,0-1.17.62,11.22,11.22,0,0,0-2.18,2.39,35.29,35.29,0,0,0-3.33,6.23,70.52,70.52,0,0,0-2.47,6.79c-.72,2.31-1.34,4.66-1.88,7-.14.6-.26,1.17-.37,1.77s-.14,1.19-.23,1.79A6.85,6.85,0,0,1,20.44,53a4.78,4.78,0,0,1-1,1.68l0,0a.6.6,0,0,1-.85.06l-.06-.06a3.51,3.51,0,0,1-.8-2,6.2,6.2,0,0,1,.12-1.93c.14-.63.31-1.23.42-1.85s.26-1.23.37-1.85c.54-2.45,1.2-4.86,1.94-7.25s1.59-4.75,2.56-7.08A37.49,37.49,0,0,1,26.73,26a13.1,13.1,0,0,1,2.78-3,6.23,6.23,0,0,1,2.08-1.08,4.61,4.61,0,0,1,.62-.14,4.91,4.91,0,0,1,.66-.06h.34c.11,0,.2,0,.31,0l.6.08A7.66,7.66,0,0,1,38,24.09a14.82,14.82,0,0,1,2.36,3.3A31.26,31.26,0,0,1,42,30.91c.46,1.2.86,2.39,1.28,3.59a18,18,0,0,1,1,3.66,7.29,7.29,0,0,1-.26,3.9.55.55,0,0,1-.71.31.88.88,0,0,1-.17-.17Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", null,
                    React.createElement("path", { d: "M37.39,40.52s-1-9.38-4.58-9.41-7.08,13-7.11,16.18C25.7,47.26,31.05,47.72,37.39,40.52Z", transform: "translate(0 -14.87)", fill: "#fe6dcb" }),
                    React.createElement("path", { d: "M25.5,47.46v-.17c0-2.84,2.7-12.68,5.6-15.52a2.53,2.53,0,0,1,1.71-.86c3.64.06,4.72,9.22,4.78,9.58v.09l-.06.06c-6.31,7.19-11.63,6.85-11.86,6.82Zm7.68-16.12a1.42,1.42,0,0,0-.37,0,2.25,2.25,0,0,0-1.45.74C28.6,34.78,26,44.11,25.9,47.12c1,0,5.77-.37,11.29-6.63C37.08,39.56,36.05,32,33.18,31.34Z", transform: "translate(0 -14.87)", fill: "#390075" })),
                React.createElement("path", { d: "M25.39,48.65a1.41,1.41,0,0,1-1.11-1.39c0-3,2.7-13.19,6-16.38a3.66,3.66,0,0,1,2.59-1.19c4.55.06,5.77,8.9,6,10.69a1.45,1.45,0,0,1-.34,1.11c-6.74,7.68-12.63,7.25-12.88,7.25C25.53,48.68,25.45,48.68,25.39,48.65Zm7.53-16.12h-.11c-.28,0-1.71,1-3.53,6a45.22,45.22,0,0,0-2,7.17c1.79-.4,5-1.68,8.59-5.63C35.4,36.51,34.12,32.79,32.92,32.53Z", transform: "translate(0 -14.87)", fill: "#390075" })),
            React.createElement("path", { d: "M24.34,69.13c-1.79-.94-3.58-1.77-5.4-2.51a55.21,55.21,0,0,0-5.55-1.93,58.42,58.42,0,0,0-5.71-1.34c-1-.2-1.94-.31-2.93-.48-.49-.11-1-.11-1.48-.2s-1-.14-1.51-.23c.49-.11,1-.19,1.51-.28A12.73,12.73,0,0,1,4.78,62a22.45,22.45,0,0,1,3.07,0,26.16,26.16,0,0,1,6.05,1,25.74,25.74,0,0,1,5.66,2.38A20.58,20.58,0,0,1,24.34,69.13Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("path", { d: "M23.54,74.19c-2-.43-3.92-.77-5.88-1a50.31,50.31,0,0,0-5.86-.4A57.4,57.4,0,0,0,5.94,73c-1,.06-2,.2-2.95.31-.52,0-1,.15-1.48.2L0,73.73c.45-.23.91-.45,1.36-.65a11.83,11.83,0,0,1,1.43-.57,27.06,27.06,0,0,1,2.92-.85A27.36,27.36,0,0,1,11.83,71a27.19,27.19,0,0,1,6.08.8A18.35,18.35,0,0,1,23.54,74.19Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("path", { d: "M23.8,80.73a50.3,50.3,0,0,0-5.94.34,48.3,48.3,0,0,0-5.8.91,54.8,54.8,0,0,0-5.66,1.5c-.94.29-1.88.63-2.82,1A11.11,11.11,0,0,0,2.19,85c-.46.17-.94.37-1.42.51.4-.34.79-.62,1.19-.94a14.88,14.88,0,0,1,1.25-.88A25,25,0,0,1,5.89,82.2a26.43,26.43,0,0,1,5.8-2,28.38,28.38,0,0,1,6.11-.57A19.47,19.47,0,0,1,23.8,80.73Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("path", { d: "M104.17,70.29A18.61,18.61,0,0,1,109.32,67a26.72,26.72,0,0,1,5.86-1.82,25.56,25.56,0,0,1,6.11-.42,20.49,20.49,0,0,1,3,.34,11.8,11.8,0,0,1,1.48.34c.48.14,1,.25,1.45.42l-1.51.09c-.51,0-1,0-1.5.06-1,0-2,.08-3,.2a55.38,55.38,0,0,0-5.8.76,48.69,48.69,0,0,0-5.69,1.4A52.5,52.5,0,0,0,104.17,70.29Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("path", { d: "M104.49,75.41a18.94,18.94,0,0,1,5.83-1.82,26.24,26.24,0,0,1,6.14-.23,25.41,25.41,0,0,1,6,1.2,25.06,25.06,0,0,1,2.85,1.1,14.89,14.89,0,0,1,1.36.72c.46.25.88.51,1.31.79a11.8,11.8,0,0,1-1.48-.34c-.48-.11-1-.26-1.45-.34-1-.2-1.93-.43-2.9-.6a52.36,52.36,0,0,0-5.8-.77c-1.93-.17-3.89-.19-5.86-.17S106.51,75.18,104.49,75.41Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("path", { d: "M103.58,81.92a18.77,18.77,0,0,1,6.08-.48,25.78,25.78,0,0,1,6,1.13,25,25,0,0,1,5.6,2.51,19.89,19.89,0,0,1,2.53,1.73c.4.31.8.65,1.17,1s.74.68,1.11,1a14.53,14.53,0,0,1-1.37-.66c-.45-.22-.88-.48-1.34-.65-.91-.43-1.79-.85-2.7-1.22a55.74,55.74,0,0,0-5.48-2,53.85,53.85,0,0,0-5.69-1.45A58.25,58.25,0,0,0,103.58,81.92Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", { opacity: "0.2" },
                    React.createElement("path", { d: "M78.78,85.36c-2.38,3-4.91,3.9-7.22,3.81C67,89,63.32,84.93,63.32,84.93c-3.1,3.07-5.86,4.24-8.13,4.38a9.12,9.12,0,0,1-7.4-3.44c9.13,1.4,13.42-3.47,13.42-3.47l4.13-.08C69.49,88.46,78.5,85.47,78.78,85.36Z", transform: "translate(0 -14.87)", fill: "#390075" })),
                React.createElement("path", { d: "M71.56,89.17a24.21,24.21,0,0,1-2.9,6.28c-1.42,2.11-3.15,3.7-5.09,3.73s-3.78-1.48-5.26-3.56a23.46,23.46,0,0,1-3.12-6.28c2.3-.14,5-1.31,8.13-4.38C63.32,85,67,89,71.56,89.17Z", transform: "translate(0 -14.87)", fill: "#390075" }),
                React.createElement("g", null,
                    React.createElement("path", { d: "M68.66,95.48c-1.42,2.11-3.15,3.7-5.09,3.73s-3.78-1.48-5.26-3.56a5.47,5.47,0,0,1,5.12-3.55A5.4,5.4,0,0,1,68.66,95.48Z", transform: "translate(0 -14.87)", fill: "#fb64c0" }),
                    React.createElement("path", { d: "M62.66,99.26c-1.5-.34-3-1.53-4.49-3.52l-.06-.06,0-.08a5.76,5.76,0,0,1,10.66-.18l0,.09,0,.06c-1.64,2.44-3.44,3.75-5.23,3.81A3.35,3.35,0,0,1,62.66,99.26ZM58.48,95.6c1.17,1.59,3,3.46,5.09,3.41s3.81-2,4.92-3.59a5.32,5.32,0,0,0-5.06-3.21A5.4,5.4,0,0,0,58.48,95.6Z", transform: "translate(0 -14.87)", fill: "#390075" })),
                React.createElement("g", null,
                    React.createElement("path", { d: "M58.74,78.45c.91-1.25,7.62-1.59,8.79-.17s-2.08,5.09-4.3,5.12S57.72,79.84,58.74,78.45Z", transform: "translate(0 -14.87)", fill: "#390075" }),
                    React.createElement("path", { d: "M62.35,84.73a8,8,0,0,1-4.72-3.83,2.88,2.88,0,0,1,0-3.24h0c1-1.34,3.87-1.63,5.49-1.65,1.93-.06,4.46.14,5.52,1.45a3,3,0,0,1,.17,3.27c-.91,2-3.36,4.09-5.52,4.15ZM60,79.25a4.47,4.47,0,0,0,1,1.5A4,4,0,0,0,63.2,82a4,4,0,0,0,2.31-1.45,3.7,3.7,0,0,0,.85-1.43C65.34,78.59,61.24,78.68,60,79.25Zm6.48,0Z", transform: "translate(0 -14.87)", fill: "#390075" }),
                    React.createElement("g", null,
                        React.createElement("ellipse", { cx: "63.2", cy: "78.33", rx: "3.64", ry: "0.97", transform: "translate(-1.45 -13.68) rotate(-1.07)", fill: "#fff" }),
                        React.createElement("path", { d: "M60.73,79.28c-.82-.17-1.36-.46-1.39-.89s.4-.65,1.19-.88a11.27,11.27,0,0,1,2.62-.34,10.46,10.46,0,0,1,2.64.23c.8.2,1.22.48,1.22.82h0c0,.77-1.9,1.2-3.81,1.23A8.86,8.86,0,0,1,60.73,79.28Zm4.83-1.54a10.07,10.07,0,0,0-2.38-.2,12.38,12.38,0,0,0-2.53.31c-.74.2-.94.43-.94.54,0,.29,1.19.77,3.49.72s3.47-.57,3.47-.86c0-.08-.2-.31-.94-.48A.36.36,0,0,1,65.56,77.74Z", transform: "translate(0 -14.87)", fill: "#390075" }))),
                React.createElement("path", { d: "M52.68,90.45a11,11,0,0,1-5.85-3.67l-.06-.06A5.09,5.09,0,0,1,46.2,86a1.29,1.29,0,0,1,2.16-1.42h0s.12.17.34.45l.06.06c.83,1,3.07,3.21,6.31,3,2.33-.17,4.78-1.5,7.31-4a1.35,1.35,0,0,1,.94-.37,1.25,1.25,0,0,1,.91.43s3.38,3.67,7.33,3.81c2.25.09,4.32-1,6.17-3.33l0,0a0,0,0,0,1,0,0c.14-.2.31-.4.45-.6a1.29,1.29,0,0,1,2.08,1.51c-.2.25-.37.51-.57.76,0,0,0,.06-.06.09-2.36,2.9-5.11,4.32-8.21,4.24-3.67-.12-6.74-2.42-8.22-3.73-2.7,2.39-5.37,3.7-8,3.9A12.21,12.21,0,0,1,52.68,90.45Z", transform: "translate(0 -14.87)", fill: "#390075" }),
                React.createElement("path", { d: "M62.44,100.37c-1.79-.4-3.56-1.73-5.18-4A25,25,0,0,1,54,89.74a1.39,1.39,0,0,1,.15-1.11,1.27,1.27,0,0,1,1-.57c2.33-.17,4.78-1.51,7.31-4a1.35,1.35,0,0,1,.94-.37,1.25,1.25,0,0,1,.91.43s3.38,3.67,7.33,3.81a1.2,1.2,0,0,1,1,.54,1.29,1.29,0,0,1,.2,1.11,24.44,24.44,0,0,1-3.07,6.62c-1.85,2.76-4,4.27-6.14,4.3A4.77,4.77,0,0,1,62.44,100.37Zm-5.52-10a20.27,20.27,0,0,0,2.45,4.52c1.42,2,2.92,3.05,4.2,3s2.7-1.14,4-3.16a22.4,22.4,0,0,0,2.25-4.49.11.11,0,0,1-.09,0,15.07,15.07,0,0,1-6.48-3.52A14.94,14.94,0,0,1,56.92,90.36Z", transform: "translate(0 -14.87)", fill: "#390075" })),
            React.createElement("path", { d: "M88.42,65.23a27.76,27.76,0,0,0-3.07,1.25,17.67,17.67,0,0,0-2.76,1.65c-.42.28-.82.65-1.22,1l-.57.54a2.46,2.46,0,0,0-.28.28l-.26.29a12.29,12.29,0,0,0-1.79,2.53L76.65,71l.2-.12a.76.76,0,0,1,.2-.08c.11-.06.26-.09.37-.15a6.43,6.43,0,0,1,.71-.22,8.12,8.12,0,0,1,1.48-.32,11.45,11.45,0,0,1,3-.08,9.73,9.73,0,0,1,2.88.71A10.29,10.29,0,0,1,88,72.11a.45.45,0,0,1,.08.65.46.46,0,0,1-.48.18l-.06,0c-.42-.12-.82-.29-1.25-.37s-.82-.2-1.25-.26a10.25,10.25,0,0,0-2.47-.14,11.61,11.61,0,0,0-2.42.37,8.22,8.22,0,0,0-1.16.37c-.2.08-.37.14-.55.23a2.72,2.72,0,0,0-.25.11c-.06,0-.09,0-.11.06l-.09,0,0,0a1.33,1.33,0,0,1-1.79-1.79,15,15,0,0,1,2.16-3.16,12.28,12.28,0,0,1,1.39-1.3,13,13,0,0,1,1.6-1.06,13.34,13.34,0,0,1,3.47-1.39,11.5,11.5,0,0,1,3.66-.31.47.47,0,0,1,.12.91Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", null,
                    React.createElement("ellipse", { cx: "44.16", cy: "69.57", rx: "8.16", ry: "5.74", transform: "translate(-28.03 94.43) rotate(-86.42)", fill: "#390075" }),
                    React.createElement("path", { d: "M43,77.77c-2.93-.63-5-4.29-4.75-8.59.28-4.58,3.16-8.13,6.42-7.93a5.15,5.15,0,0,1,4,2.7,10.21,10.21,0,0,1,1.34,5.94h0c-.29,4.58-3.16,8.13-6.43,7.94A4.34,4.34,0,0,1,43,77.77Zm2.24-16.09a4,4,0,0,0-.59-.09c-3.07-.2-5.8,3.21-6.06,7.62s2,8.13,5.06,8.3,5.8-3.21,6.06-7.62h0a9.77,9.77,0,0,0-1.31-5.77A4.9,4.9,0,0,0,45.26,61.68Z", transform: "translate(0 -14.87)", fill: "#390075" })),
                React.createElement("g", null,
                    React.createElement("ellipse", { cx: "45.75", cy: "67.76", rx: "2.73", ry: "1.73", transform: "translate(-24.74 94.32) rotate(-86.42)", fill: "#fff" }),
                    React.createElement("path", { d: "M45.38,70.63c-.94-.2-1.62-1.48-1.54-3a4,4,0,0,1,.66-2,1.69,1.69,0,0,1,1.42-.8,1.65,1.65,0,0,1,1.31,1,3.67,3.67,0,0,1,.39,2c-.11,1.6-1,2.85-2.07,2.79C45.49,70.66,45.43,70.63,45.38,70.63Zm.68-5.43c-.06,0-.09,0-.14,0a1.37,1.37,0,0,0-1.14.66,3.68,3.68,0,0,0-.6,1.82c-.08,1.42.54,2.61,1.42,2.67s1.65-1,1.74-2.47h0A3.35,3.35,0,0,0,47,66,1.57,1.57,0,0,0,46.06,65.2Z", transform: "translate(0 -14.87)", fill: "#390075" }))))));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "linear-gradient", x1: "31.99", y1: "119.43", x2: "96.01", y2: "8.57", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { offset: "0", "stop-color": "#7f7afc" }),
                React.createElement("stop", { offset: "1", "stop-color": "#9d91ff" }))),
        React.createElement("title", null, "Untitled-4"),
        React.createElement("circle", { cx: "64", cy: "64", r: "64", fill: "url(#linear-gradient)" }),
        React.createElement("g", null,
            React.createElement("path", { d: "M109.2,75.88c-.38,19.27-21.35,30.55-46.95,30.05S16.1,93.38,16.48,74.1,38,35.67,63.57,36.15,109.57,56.6,109.2,75.88Z", fill: "#fff" }),
            React.createElement("g", { opacity: "0.2" },
                React.createElement("path", { d: "M62.7,105.88c-25.6-.5-46.15-12.56-45.78-31.83v-.37C20.72,89.15,39.38,98.62,62,99.08c25.57.47,46.53-10.75,47-30a28.85,28.85,0,0,1,.7,6.7C109.3,95.07,88.3,106.35,62.7,105.88Z", fill: "#390075" })),
            React.createElement("path", { d: "M47.2,105.47A53.84,53.84,0,0,1,28.93,98.1c-9.15-6-13.9-14.38-13.7-24s5.47-19.75,14.55-27.3A51.48,51.48,0,0,1,97,48.05c8.75,7.92,13.68,18.07,13.47,27.85s-5.25,17.77-14.62,23.47c-8.68,5.28-20.63,8-33.63,7.8A77.58,77.58,0,0,1,47.2,105.47ZM73.12,38.55a51.6,51.6,0,0,0-9.57-1.13c-25.83-.5-45.5,19-45.85,36.73-.27,14,11.48,24.87,29.85,28.9a75,75,0,0,0,14.73,1.65c26.57.5,45.34-11.35,45.7-28.82.17-9.06-4.45-18.53-12.68-26A48.07,48.07,0,0,0,73.12,38.55Z", fill: "#390075" }),
            React.createElement("path", { d: "M47.2,105.47A53.84,53.84,0,0,1,28.93,98.1c-9.15-6-13.9-14.38-13.7-24s5.47-19.75,14.55-27.3A51.48,51.48,0,0,1,97,48.05c8.75,7.92,13.68,18.07,13.47,27.85s-5.25,17.77-14.62,23.47c-8.68,5.28-20.63,8-33.63,7.8A77.58,77.58,0,0,1,47.2,105.47ZM73.12,38.55a51.6,51.6,0,0,0-9.57-1.13c-25.83-.5-45.5,19-45.85,36.73-.27,14,11.48,24.87,29.85,28.9a75,75,0,0,0,14.73,1.65c26.57.5,45.34-11.35,45.7-28.82.17-9.06-4.45-18.53-12.68-26A48.07,48.07,0,0,0,73.12,38.55Z", fill: "#390075" }),
            React.createElement("path", { d: "M66.62,50.25a10.34,10.34,0,0,1-2.57.15c-4.9-.25-6.62-2.95-6.82-4.85A22.48,22.48,0,0,0,66.62,50.25Z", fill: "#fe6dcb" }),
            React.createElement("path", { d: "M66.28,51.45a23.68,23.68,0,0,1-9.83-5,1.08,1.08,0,0,1-.42-.8,1.16,1.16,0,0,1,0-.32v-.05a33.3,33.3,0,0,1,.5-5.55,1.27,1.27,0,0,1,.88-1,1.21,1.21,0,0,1,1.27.34A21,21,0,0,0,71.5,44.9a1.28,1.28,0,0,1,.9.48,1.24,1.24,0,0,1,.25,1c-.3,1.87-1.8,4.17-5.15,5a5.63,5.63,0,0,1-.65.12,1.14,1.14,0,0,1-.45,0C66.35,51.47,66.3,51.47,66.28,51.45Zm.34-1.2ZM58.47,45a21.39,21.39,0,0,0,8.18,4,1.46,1.46,0,0,1,.2,0h0a4.57,4.57,0,0,0,2.72-1.7,23.28,23.28,0,0,1-10.95-4.75C58.53,43.42,58.47,44.28,58.47,45Z", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("path", { d: "M68.72,49.55a6.27,6.27,0,0,1-1.57.6,4.94,4.94,0,0,1-.53.1,22.51,22.51,0,0,1-9.37-4.7.74.74,0,0,1,0-.25A34.68,34.68,0,0,1,57.7,40a22.28,22.28,0,0,0,11.18,5.85,19.38,19.38,0,0,0,2.5.32A4.77,4.77,0,0,1,68.72,49.55Z", fill: "#33aef1" }),
                React.createElement("path", { d: "M66.5,50.4a23.11,23.11,0,0,1-9.38-4.7l0-.05v-.07c0-.08,0-.16,0-.23V45.3A34.68,34.68,0,0,1,57.52,40l0-.35.23.25a22.3,22.3,0,0,0,11.1,5.8,21.77,21.77,0,0,0,2.47.33h.18l0,.17a5,5,0,0,1-2.72,3.53,7.79,7.79,0,0,1-1.6.6c-.2,0-.38.07-.55.12H66.6S66.53,50.4,66.5,50.4Zm-9.1-4.93a22.53,22.53,0,0,0,9.18,4.6s0,0,0,0c.15,0,.3-.05.47-.1a6.94,6.94,0,0,0,1.53-.58h0a4.71,4.71,0,0,0,2.52-3.09,22,22,0,0,1-2.32-.3,22.71,22.71,0,0,1-11-5.65,30.62,30.62,0,0,0-.42,4.95v.05S57.4,45.42,57.4,45.47Z", fill: "#390075" })),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M68.72,49.55c.1-1.28.16-2.53.16-3.72a19.38,19.38,0,0,0,2.5.32A4.76,4.76,0,0,1,68.72,49.55Z", fill: "#fff" })),
            React.createElement("path", { d: "M71.38,46.15a19.38,19.38,0,0,1-2.5-.32A22.11,22.11,0,0,1,57.7,40c.35-2.13.85-4.5,1.47-6.8,0,0,2.43,4,9.48,6.85.88.35,1.82.7,2.85,1a28.77,28.77,0,0,1-.1,5C71.4,46.1,71.4,46.12,71.38,46.15Z", fill: "#fdd800" }),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M71.38,46.15a19.38,19.38,0,0,1-2.5-.32,53.45,53.45,0,0,0-.26-5.78c.88.35,1.83.7,2.85,1a28.82,28.82,0,0,1-.09,5C71.4,46.1,71.4,46.12,71.38,46.15Z", fill: "#fff" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M71.5,41.08c-1-.33-2-.66-2.85-1-7.05-2.88-9.47-6.85-9.47-6.85a40.73,40.73,0,0,1,2.4-6.82,18.71,18.71,0,0,0,5.8,6A13.32,13.32,0,0,0,70.78,34,69.92,69.92,0,0,1,71.5,41.08Z", fill: "#b177ea" }),
                React.createElement("path", { d: "M71.68,41.3l-.23-.08c-1-.3-2-.65-2.85-1-7-2.88-9.52-6.88-9.55-6.93l0-.05,0-.07a44,44,0,0,1,2.4-6.85l.15-.3.15.3a18.51,18.51,0,0,0,5.72,5.92A14,14,0,0,0,70.8,33.8l.1,0,0,.09a67.8,67.8,0,0,1,.72,7.13ZM59.35,33.17c.35.5,2.92,4.1,9.35,6.73.82.35,1.7.65,2.6,1a65.28,65.28,0,0,0-.7-6.75,15,15,0,0,1-3.35-1.58,18.65,18.65,0,0,1-5.67-5.77A46.38,46.38,0,0,0,59.35,33.17Z", fill: "#390075" })),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M71.5,41.08c-1-.33-2-.66-2.85-1a51.57,51.57,0,0,0-1.3-7.7,13.68,13.68,0,0,0,3.4,1.6A63.42,63.42,0,0,1,71.5,41.08Z", fill: "#fff" })),
            React.createElement("path", { d: "M70.8,33.8a13.85,13.85,0,0,1-3.4-1.6,18.28,18.28,0,0,1-5.8-6A11.47,11.47,0,0,1,64,22.6a2.2,2.2,0,0,1,1.65-.7C68.05,22,69.85,27.75,70.8,33.8Z", fill: "#fe6dcb" }),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M71.1,34.05a13.68,13.68,0,0,1-3.4-1.6,47.27,47.27,0,0,0-3.43-9.6,2.25,2.25,0,0,1,1.65-.7C68.35,22.25,70.15,28,71.1,34.05Z", fill: "#fff" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M70.55,35l-.1,0a18.45,18.45,0,0,1-9.77-8.08,1,1,0,0,1,0-.92c1.58-3.4,3.2-5,5-4.9,3.45.17,5.26,7.05,6.16,12.77a1,1,0,0,1-.35.93A1.09,1.09,0,0,1,70.55,35Zm-7.83-8.64a17.4,17.4,0,0,0,6.75,6.05c-1.25-6.71-3-9.26-3.94-9.3C64.93,23.05,63.92,23.9,62.72,26.33Z", fill: "#390075" }),
                React.createElement("path", { d: "M71.28,42.08s-.06,0-.08,0c-9.5-2.93-12.75-8.1-12.87-8.3a1.1,1.1,0,0,1-.13-.8,45.32,45.32,0,0,1,2.45-7,1,1,0,0,1,.88-.57,1,1,0,0,1,.92.52c0,.05,3,5.35,8.63,7.13a1,1,0,0,1,.7.8,69.43,69.43,0,0,1,.75,7.22,1,1,0,0,1-.41.85A1.29,1.29,0,0,1,71.28,42.08ZM60.28,33c.8,1,3.72,4.35,10.12,6.62-.12-1.59-.3-3.24-.55-4.9a18.16,18.16,0,0,1-8.1-6.22C61.25,29.83,60.75,31.35,60.28,33Z", fill: "#390075" }),
                React.createElement("path", { d: "M68.12,46.72A23.23,23.23,0,0,1,57,40.7a1.06,1.06,0,0,1-.25-.85,66.79,66.79,0,0,1,1.5-6.9,1,1,0,0,1,.83-.73,1,1,0,0,1,1,.48s3.05,4.75,11.75,7.42a1.07,1.07,0,0,1,.73.93,34.31,34.31,0,0,1-.1,5.15c0,.07,0,.15,0,.2a1,1,0,0,1-1.05.77A19.8,19.8,0,0,1,68.12,46.72Zm3.26-.57ZM58.8,39.65a21.48,21.48,0,0,0,11.67,5.43,30.75,30.75,0,0,0,0-3.23,26.13,26.13,0,0,1-10.85-6.42C59.33,36.83,59,38.28,58.8,39.65Z", fill: "#390075" }),
                React.createElement("path", { d: "M66.32,51.22a23.74,23.74,0,0,1-9.72-4.87.92.92,0,0,1-.35-.65,1,1,0,0,1,0-.3v0a35.14,35.14,0,0,1,.5-5.5,1,1,0,0,1,1.73-.52,21.46,21.46,0,0,0,13,5.84,1.07,1.07,0,0,1,.72.38,1,1,0,0,1,.2.8c-.27,1.8-1.75,4-5,4.8a5.74,5.74,0,0,1-.63.12.77.77,0,0,1-.37,0S66.35,51.22,66.32,51.22Zm.3-1Zm-8.4-5.17a21.92,21.92,0,0,0,8.43,4.15,1.78,1.78,0,0,1,.28,0h0A4.7,4.7,0,0,0,70,47.05a23.08,23.08,0,0,1-11.55-5A20.39,20.39,0,0,0,58.22,45.08Z", fill: "#390075" }),
                React.createElement("path", { d: "M61.92,51.15c-3.87-.85-5.5-3.35-5.7-5.47a1,1,0,0,1,.55-1,1,1,0,0,1,1.13.12,21.24,21.24,0,0,0,8.85,4.45l.1,0a1,1,0,0,1,.8,1,1,1,0,0,1-.82,1,11.14,11.14,0,0,1-2.8.15A12.21,12.21,0,0,1,61.92,51.15Z", fill: "#390075" })),
            React.createElement("path", { d: "M62,51.38c-3.8-.83-5.72-3.3-6-5.68,0-.1,0-.2,0-.3v0a25,25,0,0,1,.15-3.05c.08-.62.16-1.27.26-1.95l0-.12c0-.15.05-.28.08-.43A65.14,65.14,0,0,1,58,32.88a40.84,40.84,0,0,1,2.47-7c1.63-3.5,3.33-5.15,5.2-5.05,3.6.2,5.45,7.15,6.38,13A70,70,0,0,1,72.78,41a33.73,33.73,0,0,1-.1,5.2c0,.07,0,.15,0,.2h0a1.84,1.84,0,0,0-.05.25.68.68,0,0,0,0,.12,1,1,0,0,0,0,.23,1.31,1.31,0,0,1,0,.15c0,.07,0,.15-.07.2s0,.1-.05.12l-.15.33s0,.05,0,.07-.1.18-.13.25l0,.1,0,0-.15.22-.08.13-.2.27a.35.35,0,0,1,0,.08,2.44,2.44,0,0,1-.27.3l0,0-.28.27-.07,0,0,0c-.1.07-.17.17-.27.25l-.08,0a9.39,9.39,0,0,1-.8.55l-.05,0-.07,0-.18.1s-.07,0-.1,0l-.17.07L68.7,51l-.15.08c-.1,0-.23.07-.35.12l0,0a.88.88,0,0,0-.15,0l-.43.12a.18.18,0,0,1-.12,0,5.74,5.74,0,0,1-.63.12,11.22,11.22,0,0,1-2.82.15A10.92,10.92,0,0,1,62,51.38Zm3.62-28.05H65.5c-.4,0-1.47.7-2.8,3.6a42.47,42.47,0,0,0-2.32,6.62c-.6,2.23-1.1,4.53-1.46,6.68a3,3,0,0,0,0,.4l0,.12c-.1.65-.18,1.28-.23,1.85a20.16,20.16,0,0,0-.15,2.7v.18c.15,1.57,1.73,3.5,5.63,3.7a9.28,9.28,0,0,0,2.28-.13,2.16,2.16,0,0,0,.44-.1l.08,0a1.76,1.76,0,0,0,.3-.1l.12,0a1.09,1.09,0,0,0,.25-.1l.08,0c.1,0,.17-.07.25-.12l.17-.08.1-.05,0,0a.1.1,0,0,1,.06,0c.17-.1.34-.22.52-.35l0,0,.18-.15h0l0,0a1,1,0,0,0,.17-.18l0,0c0-.08.12-.13.17-.2l0,0a1.3,1.3,0,0,1,.1-.15l0-.05a.44.44,0,0,0,.1-.15l0-.08a.41.41,0,0,0,.08-.12l0,0a1.05,1.05,0,0,1,.08-.18l0-.07a.69.69,0,0,0,0-.13l0-.07s0-.08,0-.1l0-.08a1,1,0,0,1,0-.12.09.09,0,0,1,0-.08v0a31.82,31.82,0,0,0,.1-4.78,62.8,62.8,0,0,0-.73-7C68.32,26.55,66.5,23.52,65.57,23.33Zm4.36,25.39Zm.22-2.82Z", fill: "#390075" }),
            React.createElement("path", { d: "M81.4,46.65s4.22-16,10.82-15.6,10.16,23.5,9.43,29C101.68,60,91.53,60,81.4,46.65Z", fill: "#fff" }),
            React.createElement("path", { d: "M81,46.55a6.38,6.38,0,0,1,.15-3.43A18.13,18.13,0,0,1,82.35,40c.47-1,.93-2,1.45-3a28.18,28.18,0,0,1,1.75-2.92,13.42,13.42,0,0,1,2.37-2.65,6.52,6.52,0,0,1,3.6-1.6h.8l.3,0c.2,0,.38.08.58.13a1.56,1.56,0,0,1,.52.2,5.84,5.84,0,0,1,1.7,1.15,12,12,0,0,1,2.15,2.9,31.26,31.26,0,0,1,2.53,6.25,63.2,63.2,0,0,1,1.57,6.42c.43,2.15.78,4.33,1,6.53,0,.55.13,1.1.15,1.65s.15,1.1.2,1.65a6.52,6.52,0,0,1-.07,1.7,3.11,3.11,0,0,1-.9,1.67.53.53,0,0,1-.75,0l0,0,0-.05a4.11,4.11,0,0,1-.72-1.58,8.06,8.06,0,0,1-.15-1.55c0-.52,0-1.05,0-1.57l-.15-1.58c-.22-2.1-.57-4.22-1-6.3a63.17,63.17,0,0,0-1.53-6.17,31.86,31.86,0,0,0-2.32-5.78,9.69,9.69,0,0,0-1.68-2.3,3.23,3.23,0,0,0-1-.65.68.68,0,0,0-.23-.07c-.07,0-.15,0-.22,0l-.13,0H91.7a4.3,4.3,0,0,0-2.23,1,11.31,11.31,0,0,0-1.92,2.18A24.6,24.6,0,0,0,86,38.2a25,25,0,0,0-1.27,2.85c-.35,1-.7,2-1.13,3a7.7,7.7,0,0,1-1.8,2.78l0,0a.48.48,0,0,1-.68,0A.62.62,0,0,0,81,46.55Z", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", null,
                    React.createElement("path", { d: "M87.22,45.62s1.5-8,4.33-7.62,4.77,12,4.57,14.72C96.12,52.7,91.8,52.53,87.22,45.62Z", fill: "#fe6dcb" }),
                    React.createElement("path", { d: "M95.55,52.8c-1.32-.3-4.8-1.55-8.47-7.08l0,0,0-.07c0-.33,1.55-8.13,4.5-7.75s4.93,12.27,4.73,14.9v.17H96.1A1.66,1.66,0,0,0,95.55,52.8ZM87.4,45.58c3.95,5.92,7.72,6.82,8.57,7,.13-3.08-1.85-13.8-4.35-14.35a.13.13,0,0,1-.09,0C89,37.85,87.55,44.83,87.4,45.58Z", fill: "#390075" })),
                React.createElement("path", { d: "M95.38,53.85c-1.53-.33-5.35-1.73-9.2-7.55a1.21,1.21,0,0,1-.18-.92c.4-2.16,2-9.08,5.7-8.63,1.18.15,2.92,1.08,4.5,7.4a35.5,35.5,0,0,1,1.2,8.65A1.23,1.23,0,0,1,96.1,54,2.89,2.89,0,0,1,95.38,53.85Zm-6.83-8.5c2.53,3.65,4.88,5.12,6.28,5.72a46.3,46.3,0,0,0-1-6c-1-4.4-2.15-5.7-2.45-5.83C90.68,39.15,89.28,41.9,88.55,45.35Z", fill: "#390075" })),
            React.createElement("path", { d: "M46.05,44.78s-2.5-16.4-9.1-16.65S24.37,50.43,24.5,55.9C24.5,55.9,34.58,57,46.05,44.78Z", fill: "#fff" }),
            React.createElement("path", { d: "M45.65,44.83a8.34,8.34,0,0,1-1.5-2.95c-.32-1-.55-2.05-.8-3.05a23.6,23.6,0,0,0-1-3,23,23,0,0,0-1.3-2.8,11.93,11.93,0,0,0-1.7-2.37,4.2,4.2,0,0,0-2.1-1.28l-.28,0-.12,0h-.13l-.22,0c-.08,0-.15,0-.25.05a3.71,3.71,0,0,0-1,.55,9.52,9.52,0,0,0-1.92,2.1,31.05,31.05,0,0,0-2.93,5.47,63.52,63.52,0,0,0-2.17,6c-.63,2-1.18,4.1-1.65,6.18-.13.52-.23,1-.33,1.55s-.12,1-.2,1.57a6.61,6.61,0,0,1-.32,1.53,4.25,4.25,0,0,1-.88,1.47l0,0a.53.53,0,0,1-.75,0l0,0a3.06,3.06,0,0,1-.7-1.75,5.36,5.36,0,0,1,.1-1.7c.12-.55.27-1.08.37-1.63s.23-1.07.33-1.62c.47-2.15,1.05-4.28,1.7-6.38s1.4-4.17,2.25-6.22a33.14,33.14,0,0,1,3.17-5.95A11.74,11.74,0,0,1,33.7,28,5.58,5.58,0,0,1,35.53,27a4.9,4.9,0,0,1,.55-.13,5.48,5.48,0,0,1,.57-.05H37c.1,0,.18,0,.28,0l.52.07a6.77,6.77,0,0,1,3.4,2,13.34,13.34,0,0,1,2.08,2.9,30.08,30.08,0,0,1,1.45,3.1c.4,1.05.75,2.1,1.12,3.15a15.77,15.77,0,0,1,.85,3.22,6.44,6.44,0,0,1-.22,3.43.48.48,0,0,1-.63.27.84.84,0,0,1-.15-.14Z", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", null,
                    React.createElement("path", { d: "M40.62,43.35s-.92-8.25-4-8.28S30.37,46.52,30.35,49.3C30.35,49.28,35.05,49.67,40.62,43.35Z", fill: "#fe6dcb" }),
                    React.createElement("path", { d: "M30.17,49.45V49.3c0-2.5,2.38-11.15,4.93-13.65a2.2,2.2,0,0,1,1.5-.75c3.2.05,4.15,8.1,4.2,8.43v.07l0,.05c-5.55,6.33-10.23,6-10.42,6Zm6.75-14.17a1.06,1.06,0,0,0-.32,0,1.94,1.94,0,0,0-1.28.65c-2.42,2.4-4.7,10.6-4.8,13.25.85,0,5.08-.32,9.93-5.82C40.35,42.5,39.45,35.83,36.92,35.28Z", fill: "#390075" })),
                React.createElement("path", { d: "M30.08,50.5a1.23,1.23,0,0,1-1-1.22c0-2.63,2.38-11.6,5.25-14.4a3.12,3.12,0,0,1,2.27-1.05c4,.05,5.08,7.82,5.26,9.39a1.35,1.35,0,0,1-.3,1c-5.93,6.75-11.1,6.37-11.33,6.37C30.2,50.53,30.12,50.53,30.08,50.5ZM36.7,36.33h-.1c-.25,0-1.5.9-3.1,5.27a38.64,38.64,0,0,0-1.72,6.3c1.57-.35,4.37-1.47,7.55-4.95C38.88,39.83,37.75,36.55,36.7,36.33Z", fill: "#390075" })),
            React.createElement("path", { d: "M29.15,68.5C27.57,67.68,26,67,24.4,66.3a50.33,50.33,0,0,0-4.88-1.7,49.46,49.46,0,0,0-5-1.17c-.85-.18-1.7-.28-2.57-.43-.43-.1-.88-.1-1.31-.17s-.87-.13-1.32-.2c.43-.1.88-.18,1.32-.25A12.13,12.13,0,0,1,12,62.2a18.72,18.72,0,0,1,2.7,0,22.44,22.44,0,0,1,5.32.9,22.89,22.89,0,0,1,5,2.1A17.73,17.73,0,0,1,29.15,68.5Z", fill: "#390075" }),
            React.createElement("path", { d: "M28.45,73c-1.75-.38-3.45-.68-5.17-.88a47.06,47.06,0,0,0-5.15-.35c-1.73,0-3.43,0-5.15.2-.88,0-1.73.18-2.6.28-.45,0-.88.12-1.3.18l-1.33.17c.4-.2.8-.4,1.2-.57a9.58,9.58,0,0,1,1.25-.5,21.13,21.13,0,0,1,2.58-.75,24.18,24.18,0,0,1,5.37-.55,23.57,23.57,0,0,1,5.35.7A16,16,0,0,1,28.45,73Z", fill: "#390075" }),
            React.createElement("path", { d: "M28.67,78.7a44.77,44.77,0,0,0-5.22.3,45.13,45.13,0,0,0-5.1.8c-1.68.38-3.35.78-5,1.32-.82.26-1.65.56-2.47.85a12.07,12.07,0,0,0-1.23.48c-.4.15-.82.32-1.25.45.35-.3.7-.55,1.05-.83a11.47,11.47,0,0,1,1.1-.77A22.52,22.52,0,0,1,12.92,80,23.24,23.24,0,0,1,18,78.27a24.84,24.84,0,0,1,5.38-.5A17.18,17.18,0,0,1,28.67,78.7Z", fill: "#390075" }),
            React.createElement("path", { d: "M99.35,69.53a16.15,16.15,0,0,1,4.53-2.88,23.66,23.66,0,0,1,5.15-1.6,23,23,0,0,1,5.37-.37,18.47,18.47,0,0,1,2.68.3,9.44,9.44,0,0,1,1.3.3c.42.12.87.22,1.27.37l-1.32.08c-.45,0-.88,0-1.33,0-.87,0-1.75.07-2.6.17a50.81,50.81,0,0,0-5.1.68,42.87,42.87,0,0,0-5,1.22A45.8,45.8,0,0,0,99.35,69.53Z", fill: "#390075" }),
            React.createElement("path", { d: "M99.62,74a16.47,16.47,0,0,1,5.13-1.6,22.69,22.69,0,0,1,5.4-.2,22.43,22.43,0,0,1,5.3,1,20.88,20.88,0,0,1,2.5,1c.4.18.8.4,1.2.63s.78.45,1.15.7c-.45-.08-.87-.18-1.3-.3s-.85-.23-1.28-.31c-.84-.17-1.69-.37-2.55-.52a44.55,44.55,0,0,0-5.1-.68c-1.69-.15-3.42-.17-5.15-.15S101.4,73.82,99.62,74Z", fill: "#390075" }),
            React.createElement("path", { d: "M98.82,79.75a16.87,16.87,0,0,1,5.35-.43,22.76,22.76,0,0,1,5.3,1,22.08,22.08,0,0,1,4.93,2.2,18.26,18.26,0,0,1,2.22,1.53c.35.27.7.57,1,.87s.65.6,1,.93c-.42-.18-.82-.38-1.19-.57a12.85,12.85,0,0,0-1.18-.58c-.8-.37-1.57-.75-2.37-1.07a47.62,47.62,0,0,0-4.83-1.8,45.75,45.75,0,0,0-5-1.28C102.32,80.2,100.6,79.93,98.82,79.75Z", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", { opacity: "0.2" },
                    React.createElement("path", { d: "M77,82.78c-2.1,2.6-4.33,3.42-6.35,3.34-4-.12-7.25-3.72-7.25-3.72-2.73,2.7-5.15,3.72-7.15,3.85a8,8,0,0,1-6.5-3c8,1.23,11.8-3,11.8-3l3.62-.07C68.85,85.5,76.78,82.88,77,82.78Z", fill: "#390075" })),
                React.createElement("path", { d: "M70.68,86.12a21.75,21.75,0,0,1-2.56,5.53c-1.24,1.85-2.77,3.25-4.47,3.28S60.33,93.62,59,91.8a20.8,20.8,0,0,1-2.75-5.52c2-.13,4.42-1.16,7.15-3.85C63.42,82.43,66.68,86,70.68,86.12Z", fill: "#390075" }),
                React.createElement("g", null,
                    React.createElement("path", { d: "M68.12,91.68c-1.24,1.85-2.77,3.25-4.47,3.27s-3.32-1.3-4.62-3.12a4.81,4.81,0,0,1,4.5-3.13A4.76,4.76,0,0,1,68.12,91.68Z", fill: "#fb64c0" }),
                    React.createElement("path", { d: "M62.85,95a7.25,7.25,0,0,1-4-3.1l0-.05,0-.07a5.06,5.06,0,0,1,9.37-.16l0,.08,0,0c-1.45,2.15-3,3.3-4.6,3.35A3.25,3.25,0,0,1,62.85,95Zm-3.68-3.22c1,1.4,2.63,3,4.48,3S67,93.05,68,91.62a4.69,4.69,0,0,0-4.45-2.82A4.76,4.76,0,0,0,59.17,91.78Z", fill: "#390075" })),
                React.createElement("g", null,
                    React.createElement("path", { d: "M59.4,76.7c.8-1.1,6.7-1.4,7.72-.15S65.3,81,63.35,81.05,58.5,77.93,59.4,76.7Z", fill: "#390075" }),
                    React.createElement("path", { d: "M62.58,82.22a7.06,7.06,0,0,1-4.16-3.37,2.55,2.55,0,0,1,0-2.85h0c.85-1.18,3.4-1.43,4.82-1.45,1.7,0,3.93.13,4.85,1.28a2.59,2.59,0,0,1,.15,2.87c-.8,1.73-2.94,3.6-4.84,3.65C63.1,82.3,62.85,82.28,62.58,82.22ZM60.5,77.4a3.92,3.92,0,0,0,.92,1.32,3.45,3.45,0,0,0,1.91,1.1,3.47,3.47,0,0,0,2-1.27,3.3,3.3,0,0,0,.75-1.25C65.2,76.82,61.6,76.9,60.5,77.4Zm5.7,0Z", fill: "#390075" }),
                    React.createElement("g", null,
                        React.createElement("ellipse", { cx: "63.32", cy: "76.6", rx: "3.2", ry: "0.85", transform: "translate(-1.42 1.19) rotate(-1.07)", fill: "#fff" }),
                        React.createElement("path", { d: "M61.15,77.43c-.72-.15-1.2-.4-1.22-.78s.35-.57,1-.77a9.77,9.77,0,0,1,2.3-.31,9.5,9.5,0,0,1,2.32.2c.7.18,1.07.43,1.07.73h0c0,.67-1.67,1-3.35,1.07A8,8,0,0,1,61.15,77.43Zm4.25-1.36a9.44,9.44,0,0,0-2.1-.17,10.44,10.44,0,0,0-2.22.27c-.65.18-.83.38-.83.48s1,.67,3.08.62,3-.5,3-.75c0-.07-.18-.27-.83-.42A.27.27,0,0,1,65.4,76.07Z", fill: "#390075" }))),
                React.createElement("path", { d: "M54.08,87.25A9.76,9.76,0,0,1,48.92,84l0-.06a3.46,3.46,0,0,1-.5-.67,1.13,1.13,0,0,1,.32-1.58,1.16,1.16,0,0,1,1.58.33h0s.1.15.3.4l0,0a6.94,6.94,0,0,0,5.55,2.62c2-.15,4.21-1.32,6.43-3.52a1.15,1.15,0,0,1,.82-.32,1.1,1.1,0,0,1,.8.37s3,3.23,6.45,3.35c2,.07,3.8-.93,5.43-2.93l0,0a0,0,0,0,1,0,0c.13-.17.28-.35.4-.52a1.13,1.13,0,0,1,1.83,1.32c-.18.23-.33.45-.5.68,0,0,0,0-.06.07-2.07,2.55-4.5,3.8-7.22,3.73-3.22-.1-5.93-2.13-7.22-3.28a12.27,12.27,0,0,1-7.08,3.43A10.66,10.66,0,0,1,54.08,87.25Z", fill: "#390075" }),
                React.createElement("path", { d: "M62.65,96a8.13,8.13,0,0,1-4.55-3.5,22,22,0,0,1-2.9-5.85,1.18,1.18,0,0,1,.13-1,1.14,1.14,0,0,1,.84-.5c2-.15,4.21-1.32,6.43-3.53a1.15,1.15,0,0,1,.82-.32,1.07,1.07,0,0,1,.8.38s3,3.22,6.45,3.35a1.05,1.05,0,0,1,.88.47,1.13,1.13,0,0,1,.17,1A21.7,21.7,0,0,1,69,92.3c-1.63,2.42-3.5,3.75-5.41,3.77A4.15,4.15,0,0,1,62.65,96ZM57.8,87.18a18.31,18.31,0,0,0,2.15,4c1.25,1.73,2.58,2.68,3.7,2.65S66,92.8,67.2,91a19.42,19.42,0,0,0,2-4,.08.08,0,0,1-.08,0A13.3,13.3,0,0,1,63.4,84,13.22,13.22,0,0,1,57.8,87.18Z", fill: "#390075" })),
            React.createElement("path", { d: "M85.5,65.07a25,25,0,0,0-2.7,1.1,15.66,15.66,0,0,0-2.42,1.45c-.38.25-.73.58-1.08.85l-.5.48a2,2,0,0,0-.25.25l-.22.25a10.64,10.64,0,0,0-1.58,2.22l-1.6-1.57.18-.1.17-.08c.1,0,.23-.07.33-.12a5,5,0,0,1,.62-.2,8.13,8.13,0,0,1,1.3-.28,10.08,10.08,0,0,1,2.63-.07,8.72,8.72,0,0,1,2.52.63,9,9,0,0,1,2.2,1.24.4.4,0,0,1,.08.58.42.42,0,0,1-.43.15l0,0c-.37-.1-.72-.25-1.1-.32s-.72-.18-1.1-.22a8.8,8.8,0,0,0-2.17-.13,10.85,10.85,0,0,0-2.13.32,8.06,8.06,0,0,0-1,.33,4.34,4.34,0,0,0-.48.2,2.14,2.14,0,0,0-.22.1s-.08,0-.1.05l-.08,0,0,0a1.16,1.16,0,0,1-1.58-.5,1.19,1.19,0,0,1,0-1.07,13.35,13.35,0,0,1,1.9-2.77,10.46,10.46,0,0,1,1.23-1.16,10.9,10.9,0,0,1,1.4-.92,11.48,11.48,0,0,1,3-1.23,9.93,9.93,0,0,1,3.22-.27.42.42,0,0,1,.38.45.43.43,0,0,1-.28.35Z", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", null,
                    React.createElement("ellipse", { cx: "46.58", cy: "68.89", rx: "7.17", ry: "5.05", transform: "translate(-25.08 111.08) rotate(-86.42)", fill: "#390075" }),
                    React.createElement("path", { d: "M45.58,76.1c-2.58-.55-4.41-3.78-4.18-7.55.25-4,2.78-7.15,5.65-7A4.55,4.55,0,0,1,50.6,64a9,9,0,0,1,1.18,5.22h0c-.25,4-2.78,7.15-5.66,7A4.93,4.93,0,0,1,45.58,76.1Zm2-14.15a3.07,3.07,0,0,0-.53-.07c-2.7-.18-5.1,2.82-5.32,6.69s1.75,7.15,4.45,7.31,5.1-2.83,5.32-6.7h0a8.48,8.48,0,0,0-1.15-5.08A4.26,4.26,0,0,0,47.55,62Z", fill: "#390075" })),
                React.createElement("g", null,
                    React.createElement("ellipse", { cx: "47.98", cy: "67.3", rx: "2.4", ry: "1.52", transform: "translate(-22.19 110.98) rotate(-86.42)", fill: "#fff" }),
                    React.createElement("path", { d: "M47.65,69.82c-.82-.17-1.42-1.3-1.35-2.62a3.4,3.4,0,0,1,.58-1.75,1.47,1.47,0,0,1,1.25-.7,1.44,1.44,0,0,1,1.15.85,3.27,3.27,0,0,1,.35,1.8c-.1,1.4-.9,2.5-1.83,2.45C47.75,69.85,47.7,69.82,47.65,69.82Zm.6-4.77-.13,0a1.18,1.18,0,0,0-1,.57,3.3,3.3,0,0,0-.52,1.6c-.08,1.25.47,2.3,1.25,2.35s1.45-.93,1.53-2.18h0a3,3,0,0,0-.33-1.65A1.33,1.33,0,0,0,48.25,65.05Z", fill: "#390075" }))))));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("path", { d: "M74.49,28.92c0,.09,0,.17,0,.23s0,.2-.06.28a1.3,1.3,0,0,0,0,.15,1.11,1.11,0,0,0-.05.25c0,.06,0,.12-.06.17a1.85,1.85,0,0,1-.09.23c0,.06,0,.11,0,.14s-.12.26-.17.37,0,.06-.06.09a2.41,2.41,0,0,0-.14.28l-.06.12,0,0c0,.09-.11.17-.17.26l-.08.14-.23.32s0,.05-.06.08a3.18,3.18,0,0,1-.31.34l-.37.37-.09.06,0,0c-.12.08-.2.2-.32.28l-.08.06c-.29.23-.6.42-.91.62l-.06,0-.08,0-.2.11c-.06,0-.09.06-.12.06l-.2.09c-.14,0-.25.11-.39.17l-.17.08a3.73,3.73,0,0,1-.4.14l-.06,0-.17.06c-.17.06-.31.08-.48.14a.25.25,0,0,1-.14,0c-.26.06-.49.11-.72.14a12.83,12.83,0,0,1-3.21.17,12,12,0,0,1-2.33-.31C58,33.84,55.78,31,55.52,28.33c0-.12,0-.23,0-.35v-.05a26.57,26.57,0,0,1,.18-3.47c.08-.71.17-1.45.28-2.22l0-.14c0-.17.06-.31.08-.48a76.39,76.39,0,0,1,1.71-7.88,46.67,46.67,0,0,1,2.81-8c1.85-4,3.79-5.86,5.92-5.74,4.09.23,6.2,8.13,7.25,14.75A78.84,78.84,0,0,1,74.6,23,38.84,38.84,0,0,1,74.49,28.92Z", transform: "translate(-0.5 0)", fill: "#f6af5b" }),
        React.createElement("path", { d: "M83.41,31.4s4.8-18.22,12.31-17.74,11.54,26.73,10.72,32.92C106.47,46.58,94.92,46.61,83.41,31.4Z", transform: "translate(-0.5 0)", fill: "#f6af5b" }),
        React.createElement("path", { d: "M101.61,38.4a1.4,1.4,0,0,1-1.48,1.31,3.16,3.16,0,0,1-.83-.12c-1.73-.37-6.08-2-10.46-8.58a1.38,1.38,0,0,1-.2-1.05c.46-2.45,2.28-10.32,6.48-9.81,1.34.17,3.33,1.22,5.12,8.41A40.28,40.28,0,0,1,101.61,38.4Z", transform: "translate(-0.5 0)", fill: "#e17a2f" }),
        React.createElement("path", { d: "M47.2,30.27S44.36,11.62,36.86,11.33,22.55,36.69,22.7,42.92C22.7,42.92,34.15,44.14,47.2,30.27Z", transform: "translate(-0.5 0)", fill: "#f6af5b" }),
        React.createElement("path", { d: "M42.12,29.62c-6.74,7.68-12.63,7.25-12.88,7.25-.06-.06-.14-.06-.2-.09a1.41,1.41,0,0,1-1.11-1.39c0-3,2.7-13.19,6-16.38a3.66,3.66,0,0,1,2.59-1.19c4.55.06,5.77,8.9,6,10.69A1.45,1.45,0,0,1,42.12,29.62Z", transform: "translate(-0.5 0)", fill: "#e17a2f" }),
        React.createElement("path", { d: "M103.76,127.2,60.24,83.69a2.72,2.72,0,0,1,0-3.83L79.37,60.74a2.69,2.69,0,0,1,3.82,0l43.52,43.52a2.7,2.7,0,0,1-1.52,4.58l-12.71,1.85a2.72,2.72,0,0,0-2.29,2.29l-1.84,12.7A2.7,2.7,0,0,1,103.76,127.2Z", transform: "translate(-0.5 0)", fill: "#ae5714" }),
        React.createElement("path", { d: "M24.24,127.2,67.76,83.69a2.72,2.72,0,0,0,0-3.83L48.63,60.74a2.69,2.69,0,0,0-3.82,0L1.29,104.26a2.7,2.7,0,0,0,1.52,4.58l12.71,1.85A2.72,2.72,0,0,1,17.81,113l1.84,12.7A2.7,2.7,0,0,0,24.24,127.2Z", transform: "translate(-0.5 0)", fill: "#ae5714" }),
        React.createElement("ellipse", { cx: "63.38", cy: "72.87", rx: "48.12", ry: "44.47", fill: "#e17a2f" }),
        React.createElement("ellipse", { cx: "63.12", cy: "65.25", rx: "47.94", ry: "44.3", fill: "#f6af5b" }),
        React.createElement("path", { d: "M38.71,27.39,110,76.44a41.64,41.64,0,0,1-3.43,8.47l-75.68-52A48.26,48.26,0,0,1,38.71,27.39ZM22.48,42.48,99,95.13a47.9,47.9,0,0,1-13.82,9.68L16.41,57.49A42,42,0,0,1,22.48,42.48Z", transform: "translate(-0.5 0)", fill: "#f7d29b", "fill-rule": "evenodd" }),
        React.createElement("ellipse", { cx: "63.12", cy: "65.25", rx: "36.63", ry: "33.85", fill: "#e7974d" }),
        React.createElement("path", { d: "M97.18,51.67a33.4,33.4,0,0,0-1.84-3.35c-10.11-16.19-32.52-21.73-50-12.39S21.78,66,31.89,82.17a33.68,33.68,0,0,0,2.23,3.15C26.7,69.72,33,51.14,49.36,42.43S86.27,37.94,97.18,51.67Z", transform: "translate(-0.5 0)", fill: "#e17a2f", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M50,72.78c-5,.23-6.8-3.89-7-9.06s1.21-9.43,6.18-9.66,6.8,3.89,7,9.06S54.92,72.55,50,72.78Z", transform: "translate(-0.5 0)", fill: "#ae5714" }),
        React.createElement("path", { d: "M77.91,72.78c-5,.23-6.8-3.89-7-9.05s1.21-9.44,6.18-9.66,6.8,3.88,7,9S82.88,72.55,77.91,72.78Z", transform: "translate(-0.5 0)", fill: "#ae5714" })));
};

var Icon$10 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("path", { d: "M74.49,28.92c0,.09,0,.17,0,.23s0,.2-.06.28a1.3,1.3,0,0,0,0,.15,1.11,1.11,0,0,0-.05.25c0,.06,0,.12-.06.17a1.85,1.85,0,0,1-.09.23c0,.06,0,.11,0,.14s-.12.26-.17.37,0,.06-.06.09a2.41,2.41,0,0,0-.14.28l-.06.12,0,0c0,.09-.11.17-.17.26l-.08.14-.23.32s0,.05-.06.08a3.18,3.18,0,0,1-.31.34l-.37.37-.09.06,0,0c-.12.08-.2.2-.32.28l-.08.06c-.29.23-.6.42-.91.62l-.06,0-.08,0-.2.11c-.06,0-.09.06-.12.06l-.2.09c-.14,0-.25.11-.39.17l-.17.08a3.73,3.73,0,0,1-.4.14l-.06,0-.17.06c-.17.06-.31.08-.48.14a.25.25,0,0,1-.14,0c-.26.06-.49.11-.72.14a12.83,12.83,0,0,1-3.21.17,12,12,0,0,1-2.33-.31C58,33.84,55.78,31,55.52,28.33c0-.12,0-.23,0-.35v-.05a26.57,26.57,0,0,1,.18-3.47c.08-.71.17-1.45.28-2.22l0-.14c0-.17.06-.31.08-.48a76.39,76.39,0,0,1,1.71-7.88,46.67,46.67,0,0,1,2.81-8c1.85-4,3.79-5.86,5.92-5.74,4.09.23,6.2,8.13,7.25,14.75A78.84,78.84,0,0,1,74.6,23,38.84,38.84,0,0,1,74.49,28.92Z", transform: "translate(-0.5 0)", fill: "#ffd802" }),
        React.createElement("path", { d: "M83.41,31.4s4.8-18.22,12.31-17.74,11.54,26.73,10.72,32.92C106.47,46.58,94.92,46.61,83.41,31.4Z", transform: "translate(-0.5 0)", fill: "#ffd802" }),
        React.createElement("path", { d: "M101.61,38.4a1.4,1.4,0,0,1-1.48,1.31,3.16,3.16,0,0,1-.83-.12c-1.73-.37-6.08-2-10.46-8.58a1.38,1.38,0,0,1-.2-1.05c.46-2.45,2.28-10.32,6.48-9.81,1.34.17,3.33,1.22,5.12,8.41A40.28,40.28,0,0,1,101.61,38.4Z", transform: "translate(-0.5 0)", fill: "#ffaf01" }),
        React.createElement("path", { d: "M47.2,30.27S44.36,11.62,36.86,11.33,22.55,36.69,22.7,42.92C22.7,42.92,34.15,44.14,47.2,30.27Z", transform: "translate(-0.5 0)", fill: "#ffd802" }),
        React.createElement("path", { d: "M42.12,29.62c-6.74,7.68-12.63,7.25-12.88,7.25-.06-.06-.14-.06-.2-.09a1.41,1.41,0,0,1-1.11-1.39c0-3,2.7-13.19,6-16.38a3.66,3.66,0,0,1,2.59-1.19c4.55.06,5.77,8.9,6,10.69A1.45,1.45,0,0,1,42.12,29.62Z", transform: "translate(-0.5 0)", fill: "#ffaf01" }),
        React.createElement("path", { d: "M103.76,127.2,60.24,83.69a2.72,2.72,0,0,1,0-3.83L79.37,60.74a2.69,2.69,0,0,1,3.82,0l43.52,43.52a2.7,2.7,0,0,1-1.52,4.58l-12.71,1.85a2.72,2.72,0,0,0-2.29,2.29l-1.84,12.7A2.7,2.7,0,0,1,103.76,127.2Z", transform: "translate(-0.5 0)", fill: "#eb8c01" }),
        React.createElement("path", { d: "M24.24,127.2,67.76,83.69a2.72,2.72,0,0,0,0-3.83L48.63,60.74a2.69,2.69,0,0,0-3.82,0L1.29,104.26a2.7,2.7,0,0,0,1.52,4.58l12.71,1.85A2.72,2.72,0,0,1,17.81,113l1.84,12.7A2.7,2.7,0,0,0,24.24,127.2Z", transform: "translate(-0.5 0)", fill: "#eb8c01" }),
        React.createElement("ellipse", { cx: "63.38", cy: "72.87", rx: "48.12", ry: "44.47", fill: "#ffaf01" }),
        React.createElement("ellipse", { cx: "63.12", cy: "65.25", rx: "47.94", ry: "44.3", fill: "#ffd802" }),
        React.createElement("path", { d: "M38.71,27.39,110,76.44a41.64,41.64,0,0,1-3.43,8.47l-75.68-52A48.26,48.26,0,0,1,38.71,27.39ZM22.48,42.48,99,95.13a47.9,47.9,0,0,1-13.82,9.68L16.41,57.49A42,42,0,0,1,22.48,42.48Z", transform: "translate(-0.5 0)", fill: "#feed8e", "fill-rule": "evenodd" }),
        React.createElement("ellipse", { cx: "63.12", cy: "65.25", rx: "36.63", ry: "33.85", fill: "#ffc703" }),
        React.createElement("path", { d: "M97.18,51.67a33.4,33.4,0,0,0-1.84-3.35c-10.11-16.19-32.52-21.73-50-12.39S21.78,66,31.89,82.17a33.68,33.68,0,0,0,2.23,3.15C26.7,69.72,33,51.14,49.36,42.43S86.27,37.94,97.18,51.67Z", transform: "translate(-0.5 0)", fill: "#ffaf01", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M50,72.78c-5,.23-6.8-3.89-7-9.06s1.21-9.43,6.18-9.66,6.8,3.89,7,9.06S54.92,72.55,50,72.78Z", transform: "translate(-0.5 0)", fill: "#eb8c01" }),
        React.createElement("path", { d: "M77.91,72.78c-5,.23-6.8-3.89-7-9.05s1.21-9.44,6.18-9.66,6.8,3.88,7,9S82.88,72.55,77.91,72.78Z", transform: "translate(-0.5 0)", fill: "#eb8c01" })));
};

var Icon$$ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("path", { d: "M74.49,28.92c0,.09,0,.17,0,.23s0,.2-.06.28a1.3,1.3,0,0,0,0,.15,1.11,1.11,0,0,0-.05.25c0,.06,0,.12-.06.17a1.85,1.85,0,0,1-.09.23c0,.06,0,.11,0,.14s-.12.26-.17.37,0,.06-.06.09a2.41,2.41,0,0,0-.14.28l-.06.12,0,0c0,.09-.11.17-.17.26l-.08.14-.23.32s0,.05-.06.08a3.18,3.18,0,0,1-.31.34l-.37.37-.09.06,0,0c-.12.08-.2.2-.32.28l-.08.06c-.29.23-.6.42-.91.62l-.06,0-.08,0-.2.11c-.06,0-.09.06-.12.06l-.2.09c-.14,0-.25.11-.39.17l-.17.08a3.73,3.73,0,0,1-.4.14l-.06,0-.17.06c-.17.06-.31.08-.48.14a.25.25,0,0,1-.14,0c-.26.06-.49.11-.72.14a12.83,12.83,0,0,1-3.21.17,12,12,0,0,1-2.33-.31C58,33.84,55.78,31,55.52,28.33c0-.12,0-.23,0-.35v-.05a26.57,26.57,0,0,1,.18-3.47c.08-.71.17-1.45.28-2.22l0-.14c0-.17.06-.31.08-.48a76.39,76.39,0,0,1,1.71-7.88,46.67,46.67,0,0,1,2.81-8c1.85-4,3.79-5.86,5.92-5.74,4.09.23,6.2,8.13,7.25,14.75A78.84,78.84,0,0,1,74.6,23,38.84,38.84,0,0,1,74.49,28.92Z", transform: "translate(-0.5 0)", fill: "#9a6aff" }),
        React.createElement("path", { d: "M83.41,31.4s4.8-18.22,12.31-17.74,11.54,26.73,10.72,32.92C106.47,46.58,94.92,46.61,83.41,31.4Z", transform: "translate(-0.5 0)", fill: "#9a6aff" }),
        React.createElement("path", { d: "M101.61,38.4a1.4,1.4,0,0,1-1.48,1.31,3.16,3.16,0,0,1-.83-.12c-1.73-.37-6.08-2-10.46-8.58a1.38,1.38,0,0,1-.2-1.05c.46-2.45,2.28-10.32,6.48-9.81,1.34.17,3.33,1.22,5.12,8.41A40.28,40.28,0,0,1,101.61,38.4Z", transform: "translate(-0.5 0)", fill: "#7645d9" }),
        React.createElement("path", { d: "M47.2,30.27S44.36,11.62,36.86,11.33,22.55,36.69,22.7,42.92C22.7,42.92,34.15,44.14,47.2,30.27Z", transform: "translate(-0.5 0)", fill: "#9a6aff" }),
        React.createElement("path", { d: "M42.12,29.62c-6.74,7.68-12.63,7.25-12.88,7.25-.06-.06-.14-.06-.2-.09a1.41,1.41,0,0,1-1.11-1.39c0-3,2.7-13.19,6-16.38a3.66,3.66,0,0,1,2.59-1.19c4.55.06,5.77,8.9,6,10.69A1.45,1.45,0,0,1,42.12,29.62Z", transform: "translate(-0.5 0)", fill: "#7645d9" }),
        React.createElement("path", { d: "M103.76,127.2,60.24,83.69a2.72,2.72,0,0,1,0-3.83L79.37,60.74a2.69,2.69,0,0,1,3.82,0l43.52,43.52a2.7,2.7,0,0,1-1.52,4.58l-12.71,1.85a2.72,2.72,0,0,0-2.29,2.29l-1.84,12.7A2.7,2.7,0,0,1,103.76,127.2Z", transform: "translate(-0.5 0)", fill: "#a880fd" }),
        React.createElement("path", { d: "M24.24,127.2,67.76,83.69a2.72,2.72,0,0,0,0-3.83L48.63,60.74a2.69,2.69,0,0,0-3.82,0L1.29,104.26a2.7,2.7,0,0,0,1.52,4.58l12.71,1.85A2.72,2.72,0,0,1,17.81,113l1.84,12.7A2.7,2.7,0,0,0,24.24,127.2Z", transform: "translate(-0.5 0)", fill: "#a880fd" }),
        React.createElement("ellipse", { cx: "63.38", cy: "72.87", rx: "48.12", ry: "44.47", fill: "#7645d9" }),
        React.createElement("ellipse", { cx: "63.12", cy: "65.25", rx: "47.94", ry: "44.3", fill: "#9a6aff" }),
        React.createElement("path", { d: "M38.71,27.39,110,76.44a41.64,41.64,0,0,1-3.43,8.47l-75.68-52A48.26,48.26,0,0,1,38.71,27.39ZM22.48,42.48,99,95.13a47.9,47.9,0,0,1-13.82,9.68L16.41,57.49A42,42,0,0,1,22.48,42.48Z", transform: "translate(-0.5 0)", fill: "#cab3f8", "fill-rule": "evenodd" }),
        React.createElement("ellipse", { cx: "63.12", cy: "65.25", rx: "36.63", ry: "33.85", fill: "#8f5bfd" }),
        React.createElement("path", { d: "M97.18,51.67a33.4,33.4,0,0,0-1.84-3.35c-10.11-16.19-32.52-21.73-50-12.39S21.78,66,31.89,82.17a33.68,33.68,0,0,0,2.23,3.15C26.7,69.72,33,51.14,49.36,42.43S86.27,37.94,97.18,51.67Z", transform: "translate(-0.5 0)", fill: "#7645d9", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M50,72.78c-5,.23-6.8-3.89-7-9.06s1.21-9.43,6.18-9.66,6.8,3.89,7,9.06S54.92,72.55,50,72.78Z", transform: "translate(-0.5 0)", fill: "#462b7a" }),
        React.createElement("path", { d: "M77.91,72.78c-5,.23-6.8-3.89-7-9.05s1.21-9.44,6.18-9.66,6.8,3.88,7,9S82.88,72.55,77.91,72.78Z", transform: "translate(-0.5 0)", fill: "#462b7a" })));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("path", { d: "M74.49,28.92c0,.09,0,.17,0,.23s0,.2-.06.28a1.3,1.3,0,0,0,0,.15,1.11,1.11,0,0,0-.05.25c0,.06,0,.12-.06.17a1.85,1.85,0,0,1-.09.23c0,.06,0,.11,0,.14s-.12.26-.17.37,0,.06-.06.09a2.41,2.41,0,0,0-.14.28l-.06.12,0,0c0,.09-.11.17-.17.26l-.08.14-.23.32s0,.05-.06.08a3.18,3.18,0,0,1-.31.34l-.37.37-.09.06,0,0c-.12.08-.2.2-.32.28l-.08.06c-.29.23-.6.42-.91.62l-.06,0-.08,0-.2.11c-.06,0-.09.06-.12.06l-.2.09c-.14,0-.25.11-.39.17l-.17.08a3.73,3.73,0,0,1-.4.14l-.06,0-.17.06c-.17.06-.31.08-.48.14a.25.25,0,0,1-.14,0c-.26.06-.49.11-.72.14a12.83,12.83,0,0,1-3.21.17,12,12,0,0,1-2.33-.31C58,33.84,55.78,31,55.52,28.33c0-.12,0-.23,0-.35v-.05a26.57,26.57,0,0,1,.18-3.47c.08-.71.17-1.45.28-2.22l0-.14c0-.17.06-.31.08-.48a76.39,76.39,0,0,1,1.71-7.88,46.67,46.67,0,0,1,2.81-8c1.85-4,3.79-5.86,5.92-5.74,4.09.23,6.2,8.13,7.25,14.75A78.84,78.84,0,0,1,74.6,23,38.84,38.84,0,0,1,74.49,28.92Z", transform: "translate(-0.5 0)", fill: "#c0c4c6" }),
        React.createElement("path", { d: "M83.41,31.4s4.8-18.22,12.31-17.74,11.54,26.73,10.72,32.92C106.47,46.58,94.92,46.61,83.41,31.4Z", transform: "translate(-0.5 0)", fill: "#c0c4c6" }),
        React.createElement("path", { d: "M101.61,38.4a1.4,1.4,0,0,1-1.48,1.31,3.16,3.16,0,0,1-.83-.12c-1.73-.37-6.08-2-10.46-8.58a1.38,1.38,0,0,1-.2-1.05c.46-2.45,2.28-10.32,6.48-9.81,1.34.17,3.33,1.22,5.12,8.41A40.28,40.28,0,0,1,101.61,38.4Z", transform: "translate(-0.5 0)", fill: "#969696" }),
        React.createElement("path", { d: "M47.2,30.27S44.36,11.62,36.86,11.33,22.55,36.69,22.7,42.92C22.7,42.92,34.15,44.14,47.2,30.27Z", transform: "translate(-0.5 0)", fill: "#c0c4c6" }),
        React.createElement("path", { d: "M42.12,29.62c-6.74,7.68-12.63,7.25-12.88,7.25-.06-.06-.14-.06-.2-.09a1.41,1.41,0,0,1-1.11-1.39c0-3,2.7-13.19,6-16.38a3.66,3.66,0,0,1,2.59-1.19c4.55.06,5.77,8.9,6,10.69A1.45,1.45,0,0,1,42.12,29.62Z", transform: "translate(-0.5 0)", fill: "#969696" }),
        React.createElement("path", { d: "M103.76,127.2,60.24,83.69a2.72,2.72,0,0,1,0-3.83L79.37,60.74a2.69,2.69,0,0,1,3.82,0l43.52,43.52a2.7,2.7,0,0,1-1.52,4.58l-12.71,1.85a2.72,2.72,0,0,0-2.29,2.29l-1.84,12.7A2.7,2.7,0,0,1,103.76,127.2Z", transform: "translate(-0.5 0)", fill: "#7d7d7d" }),
        React.createElement("path", { d: "M24.24,127.2,67.76,83.69a2.72,2.72,0,0,0,0-3.83L48.63,60.74a2.69,2.69,0,0,0-3.82,0L1.29,104.26a2.7,2.7,0,0,0,1.52,4.58l12.71,1.85A2.72,2.72,0,0,1,17.81,113l1.84,12.7A2.7,2.7,0,0,0,24.24,127.2Z", transform: "translate(-0.5 0)", fill: "#7d7d7d" }),
        React.createElement("ellipse", { cx: "63.38", cy: "72.87", rx: "48.12", ry: "44.47", fill: "#969696" }),
        React.createElement("ellipse", { cx: "63.12", cy: "65.25", rx: "47.94", ry: "44.3", fill: "#c0c4c6" }),
        React.createElement("path", { d: "M38.71,27.39,110,76.44a41.64,41.64,0,0,1-3.43,8.47l-75.68-52A48.26,48.26,0,0,1,38.71,27.39ZM22.48,42.48,99,95.13a47.9,47.9,0,0,1-13.82,9.68L16.41,57.49A42,42,0,0,1,22.48,42.48Z", transform: "translate(-0.5 0)", fill: "#d8d8d8", "fill-rule": "evenodd" }),
        React.createElement("ellipse", { cx: "63.12", cy: "65.25", rx: "36.63", ry: "33.85", fill: "#b2b2b2" }),
        React.createElement("path", { d: "M97.18,51.67a33.4,33.4,0,0,0-1.84-3.35c-10.11-16.19-32.52-21.73-50-12.39S21.78,66,31.89,82.17a33.68,33.68,0,0,0,2.23,3.15C26.7,69.72,33,51.14,49.36,42.43S86.27,37.94,97.18,51.67Z", transform: "translate(-0.5 0)", fill: "#969696", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M50,72.78c-5,.23-6.8-3.89-7-9.06s1.21-9.43,6.18-9.66,6.8,3.89,7,9.06S54.92,72.55,50,72.78Z", transform: "translate(-0.5 0)", fill: "#7d7d7d" }),
        React.createElement("path", { d: "M77.91,72.78c-5,.23-6.8-3.89-7-9.05s1.21-9.44,6.18-9.66,6.8,3.88,7,9S82.88,72.55,77.91,72.78Z", transform: "translate(-0.5 0)", fill: "#7d7d7d" })));
};

var Icon$Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("path", { d: "M74.49,28.92c0,.09,0,.17,0,.23s0,.2-.06.28a1.3,1.3,0,0,0,0,.15,1.11,1.11,0,0,0-.05.25c0,.06,0,.12-.06.17a1.85,1.85,0,0,1-.09.23c0,.06,0,.11,0,.14s-.12.26-.17.37,0,.06-.06.09a2.41,2.41,0,0,0-.14.28l-.06.12,0,0c0,.09-.11.17-.17.26l-.08.14-.23.32s0,.05-.06.08a3.18,3.18,0,0,1-.31.34l-.37.37-.09.06,0,0c-.12.08-.2.2-.32.28l-.08.06c-.29.23-.6.42-.91.62l-.06,0-.08,0-.2.11c-.06,0-.09.06-.12.06l-.2.09c-.14,0-.25.11-.39.17l-.17.08a3.73,3.73,0,0,1-.4.14l-.06,0-.17.06c-.17.06-.31.08-.48.14a.25.25,0,0,1-.14,0c-.26.06-.49.11-.72.14a12.83,12.83,0,0,1-3.21.17,12,12,0,0,1-2.33-.31C58,33.84,55.78,31,55.52,28.33c0-.12,0-.23,0-.35v-.05a26.57,26.57,0,0,1,.18-3.47c.08-.71.17-1.45.28-2.22l0-.14c0-.17.06-.31.08-.48a76.39,76.39,0,0,1,1.71-7.88,46.67,46.67,0,0,1,2.81-8c1.85-4,3.79-5.86,5.92-5.74,4.09.23,6.2,8.13,7.25,14.75A78.84,78.84,0,0,1,74.6,23,38.84,38.84,0,0,1,74.49,28.92Z", transform: "translate(-0.5 0)", fill: "#53dee9" }),
        React.createElement("path", { d: "M83.41,31.4s4.8-18.22,12.31-17.74,11.54,26.73,10.72,32.92C106.47,46.58,94.92,46.61,83.41,31.4Z", transform: "translate(-0.5 0)", fill: "#53dee9" }),
        React.createElement("path", { d: "M101.61,38.4a1.4,1.4,0,0,1-1.48,1.31,3.16,3.16,0,0,1-.83-.12c-1.73-.37-6.08-2-10.46-8.58a1.38,1.38,0,0,1-.2-1.05c.46-2.45,2.28-10.32,6.48-9.81,1.34.17,3.33,1.22,5.12,8.41A40.28,40.28,0,0,1,101.61,38.4Z", transform: "translate(-0.5 0)", fill: "#0198a1" }),
        React.createElement("path", { d: "M47.2,30.27S44.36,11.62,36.86,11.33,22.55,36.69,22.7,42.92C22.7,42.92,34.15,44.14,47.2,30.27Z", transform: "translate(-0.5 0)", fill: "#53dee9" }),
        React.createElement("path", { d: "M42.12,29.62c-6.74,7.68-12.63,7.25-12.88,7.25-.06-.06-.14-.06-.2-.09a1.41,1.41,0,0,1-1.11-1.39c0-3,2.7-13.19,6-16.38a3.66,3.66,0,0,1,2.59-1.19c4.55.06,5.77,8.9,6,10.69A1.45,1.45,0,0,1,42.12,29.62Z", transform: "translate(-0.5 0)", fill: "#0198a1" }),
        React.createElement("path", { d: "M103.76,127.2,60.24,83.69a2.72,2.72,0,0,1,0-3.83L79.37,60.74a2.69,2.69,0,0,1,3.82,0l43.52,43.52a2.7,2.7,0,0,1-1.52,4.58l-12.71,1.85a2.72,2.72,0,0,0-2.29,2.29l-1.84,12.7A2.7,2.7,0,0,1,103.76,127.2Z", transform: "translate(-0.5 0)", fill: "#20c7d4" }),
        React.createElement("path", { d: "M24.24,127.2,67.76,83.69a2.72,2.72,0,0,0,0-3.83L48.63,60.74a2.69,2.69,0,0,0-3.82,0L1.29,104.26a2.7,2.7,0,0,0,1.52,4.58l12.71,1.85A2.72,2.72,0,0,1,17.81,113l1.84,12.7A2.7,2.7,0,0,0,24.24,127.2Z", transform: "translate(-0.5 0)", fill: "#20c7d4" }),
        React.createElement("ellipse", { cx: "63.38", cy: "72.87", rx: "48.12", ry: "44.47", fill: "#0198a1" }),
        React.createElement("ellipse", { cx: "63.12", cy: "65.25", rx: "47.94", ry: "44.3", fill: "#53dee9" }),
        React.createElement("path", { d: "M38.71,27.39,110,76.44a41.64,41.64,0,0,1-3.43,8.47l-75.68-52A48.26,48.26,0,0,1,38.71,27.39ZM22.48,42.48,99,95.13a47.9,47.9,0,0,1-13.82,9.68L16.41,57.49A42,42,0,0,1,22.48,42.48Z", transform: "translate(-0.5 0)", fill: "#84f0f9", "fill-rule": "evenodd" }),
        React.createElement("ellipse", { cx: "63.12", cy: "65.25", rx: "36.63", ry: "33.85", fill: "#20c7d4" }),
        React.createElement("path", { d: "M97.18,51.67a33.4,33.4,0,0,0-1.84-3.35c-10.11-16.19-32.52-21.73-50-12.39S21.78,66,31.89,82.17a33.68,33.68,0,0,0,2.23,3.15C26.7,69.72,33,51.14,49.36,42.43S86.27,37.94,97.18,51.67Z", transform: "translate(-0.5 0)", fill: "#0198a1", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M50,72.78c-5,.23-6.8-3.89-7-9.06s1.21-9.43,6.18-9.66,6.8,3.89,7,9.06S54.92,72.55,50,72.78Z", transform: "translate(-0.5 0)", fill: "#017178" }),
        React.createElement("path", { d: "M77.91,72.78c-5,.23-6.8-3.89-7-9.05s1.21-9.44,6.18-9.66,6.8,3.88,7,9S82.88,72.55,77.91,72.78Z", transform: "translate(-0.5 0)", fill: "#017178" })));
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React.createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React.createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React.createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React.createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React.createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React.createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React.createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React.createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React.createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React.createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React.createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React.createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$W = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#727177";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("defs", null,
            React.createElement("mask", { id: "mask", x: "0", y: "0", width: "128", height: "128", maskUnits: "userSpaceOnUse" },
                React.createElement("g", { id: "A" },
                    React.createElement("path", { d: "M128,64A64,64,0,1,1,64,0,64,64,0,0,1,128,64Z", fill: "#c4c4c4" })))),
        React.createElement("title", null, "kitty-NoProfileAvatar"),
        React.createElement("path", { d: "M128,64A64,64,0,1,1,64,0,64,64,0,0,1,128,64Z", fill: primaryColor }),
        React.createElement("g", { mask: "url(#mask)" },
            React.createElement("g", null,
                React.createElement("path", { d: "M100.51,65.74c0,12.46-16.53,22.57-36.92,22.57S26.66,78.2,26.66,65.74V60h73.85v5.74ZM109.33,121C109.33,105.71,89,93.34,64,93.34S18.67,105.7,18.67,121v7h90.67v-7Z", fill: secondaryColor }),
                React.createElement("g", null,
                    React.createElement("path", { d: "M98.25,66a19.37,19.37,0,0,1,3.92.67,22.31,22.31,0,0,0,.37-3.62c0-.61,0-1.23,0-1.84-1.2-.08-2.41-.09-3.61-.08-1.54.07-3,.17-4.52.34a14.52,14.52,0,0,1,4.37-1.36,19.25,19.25,0,0,1,3.64-.22,25.06,25.06,0,0,0-.93-4.49c-1,.22-2.07.5-3.1.81a37.44,37.44,0,0,0-4.22,1.43A13.85,13.85,0,0,1,98,55.17a19.16,19.16,0,0,1,3-1.05,32.43,32.43,0,0,0-5-9h0c-.65-7.44-3.49-20-8-20.28-3.29-.21-5.89,4.36-7.48,8.21a42.18,42.18,0,0,0-9.38-3c.13,1.13.22,2.25.27,3.33a29,29,0,0,1-.09,4.43c0,.07,0,.13,0,.17a1.29,1.29,0,0,1,0,.21s0,.07,0,.12a1,1,0,0,0,0,.18,1.12,1.12,0,0,0-.05.13.54.54,0,0,1-.07.17c0,.05,0,.08,0,.11l-.12.27s0,0,0,.07-.08.15-.1.21l0,.09,0,0a2.14,2.14,0,0,1-.13.19l-.06.11c0,.06-.11.15-.17.24s0,0-.05.06a1.74,1.74,0,0,1-.23.25l-.28.28-.06,0,0,0c-.09.06-.15.15-.24.21l-.06,0c-.22.17-.45.32-.68.47l0,0,0,0a.79.79,0,0,1-.16.08s-.06.05-.08.05l-.16.07-.29.13-.13.05a2.09,2.09,0,0,1-.3.11l0,0a.69.69,0,0,1-.13.05c-.13,0-.23.06-.36.1a.2.2,0,0,1-.1,0,4.32,4.32,0,0,1-.54.11,9.42,9.42,0,0,1-2.41.13,8.59,8.59,0,0,1-1.75-.24c-3.24-.7-4.88-2.81-5.08-4.83,0-.09,0-.18,0-.27v0a19.5,19.5,0,0,1,.14-2.6c.06-.54.13-1.09.21-1.67l0-.1.06-.36c.15-.93.33-1.89.54-2.86a42.71,42.71,0,0,0-10.44,2.51c-1.14-4.11-3.28-9.48-6.75-9.62-5-.21-9.65,15.19-10.48,21.78h0a32.87,32.87,0,0,0-4.81,7.82l.82.21a19.51,19.51,0,0,1,4.24,1.8,15.31,15.31,0,0,1,3.58,2.83c-1.34-.7-2.68-1.32-4.05-1.87A40.17,40.17,0,0,0,26,53.42l-.94-.25a26.11,26.11,0,0,0-1.35,5c.37,0,.75,0,1.12,0a20.75,20.75,0,0,1,4.57.6,13.72,13.72,0,0,1,4.22,1.77c-1.5-.32-2.94-.58-4.42-.75a38.09,38.09,0,0,0-4.39-.3H23.57c-.07.67-.11,1.35-.13,2a23,23,0,0,0,.26,3.83c.36-.1.71-.19,1.07-.27a20.62,20.62,0,0,1,4.58-.43,14.94,14.94,0,0,1,4.5.79,38,38,0,0,0-4.45.26,37,37,0,0,0-4.36.68L24,66.64C27,80.08,43,88.3,62.49,88.68S98.44,81.38,101.88,68c-1.22-.37-2.47-.67-3.74-.93a43.8,43.8,0,0,0-4.45-.68A13.91,13.91,0,0,1,98.25,66ZM82.75,37a21.56,21.56,0,0,1,.64-2.6c.73-2.32,2-5,4.21-4.76,1,.13,2.5.92,3.84,6.31a39.36,39.36,0,0,1,.92,5,14,14,0,0,1,.11,2.36,1,1,0,0,1-1.11,1,2.7,2.7,0,0,1-.62-.08c-1.3-.28-4.56-1.47-7.85-6.44A1,1,0,0,1,82.75,37ZM35.19,41.46s-.1,0-.14-.06a1.07,1.07,0,0,1-.84-1c0-.07,0-.15,0-.24.15-2.49,2.1-9.73,4.47-12a2.71,2.71,0,0,1,1.94-.89c2.48,0,3.64,3.53,4.15,6,.19.92.29,1.7.33,2.06a1.1,1.1,0,0,1-.25.83C39.8,41.79,35.38,41.46,35.19,41.46ZM48.73,63.28a2.31,2.31,0,0,1-.46-.05c-2.2-.47-3.76-3.21-3.57-6.44.22-3.43,2.37-6.09,4.82-5.94a3.86,3.86,0,0,1,3,2,7.64,7.64,0,0,1,1,4.46c-.21,3.34-2.25,6-4.63,6ZM76.24,69c-.15.19-.27.39-.43.58,0,0,0,0,0,.06a7.74,7.74,0,0,1-5.42,3.16,18.58,18.58,0,0,1-2.08,4.29c-1.39,2.06-3,3.19-4.61,3.21a4,4,0,0,1-.83-.08,6.91,6.91,0,0,1-3.88-3,18.37,18.37,0,0,1-2.24-4.3,7.58,7.58,0,0,1-1.19-.16A8.22,8.22,0,0,1,51.12,70l0,0a2.73,2.73,0,0,1-.42-.57A1,1,0,0,1,50.93,68a1,1,0,0,1,1.34.28s.09.13.26.34c0,0,0,0,0,0a5.9,5.9,0,0,0,4.73,2.24,8.56,8.56,0,0,0,5.05-2.6,6.21,6.21,0,0,1-3.13-2.75,2.15,2.15,0,0,1,0-2.43,3.19,3.19,0,0,1,1.87-1,11.34,11.34,0,0,1,2.24-.25c1.45,0,3.35.11,4.14,1.09a2.23,2.23,0,0,1,.13,2.45,6.13,6.13,0,0,1-3.06,2.87,8.79,8.79,0,0,0,5.14,2.51,5.71,5.71,0,0,0,4.63-2.5l0,0a0,0,0,0,1,0,0c.11-.15.24-.3.34-.45A1,1,0,0,1,76,67.63,1,1,0,0,1,76.24,69Zm6.17-15.12-.09,0a20.49,20.49,0,0,0-2.3.94A12.2,12.2,0,0,0,78,56c-.32.21-.62.48-.92.72l-.42.4a2.28,2.28,0,0,0-.22.22l0,0a9.27,9.27,0,0,1,1.58,0,7.79,7.79,0,0,1,2.15.53A8,8,0,0,1,82,59a.35.35,0,0,1-.3.62l0,0c-.32-.09-.62-.21-.94-.28s-.62-.15-.94-.19A7.7,7.7,0,0,0,77.91,59a9.31,9.31,0,0,0-1.82.28,6.26,6.26,0,0,0-.87.28,3.89,3.89,0,0,0-.41.17l-.19.08-.08,0-.07,0,0,0a1,1,0,0,1-1.34-1.34,10.59,10.59,0,0,1,1.62-2.37,8.84,8.84,0,0,1,1-1A9.09,9.09,0,0,1,77,54.45a9.75,9.75,0,0,1,2.61-1,8.19,8.19,0,0,1,2.75-.24.35.35,0,0,1,.09.68Z", fill: secondaryColor }),
                    React.createElement("g", null,
                        React.createElement("path", { d: "M71.38,37.76c0,.06,0,.12,0,.16a2.09,2.09,0,0,0,0,.21s0,.07,0,.11a1.25,1.25,0,0,0,0,.19.5.5,0,0,1-.05.13l-.07.17a.66.66,0,0,1,0,.11c0,.09-.09.2-.13.27a.1.1,0,0,1,0,.07,1.25,1.25,0,0,0-.1.21l0,.09,0,0c0,.06-.09.12-.13.19l-.06.11c0,.06-.11.15-.17.24s0,0-.05.06a1.74,1.74,0,0,1-.23.25l-.28.28-.07,0v0c-.09.06-.16.15-.25.21l0,0c-.23.17-.46.32-.69.47l0,0-.06,0a1.09,1.09,0,0,1-.15.08.15.15,0,0,1-.08.05l-.16.07a2.36,2.36,0,0,0-.28.12l-.14.06a2.09,2.09,0,0,1-.3.11l0,0a.5.5,0,0,0-.13.05c-.13,0-.23.06-.36.1a.2.2,0,0,1-.11,0,3.45,3.45,0,0,1-.54.11,9.78,9.78,0,0,1-2.4.13,8.59,8.59,0,0,1-1.75-.24c-3.24-.7-4.88-2.81-5.08-4.83,0-.09,0-.18,0-.27v0a17.82,17.82,0,0,1,.12-2.61c.07-.53.13-1.08.21-1.65l0-.12.06-.35c.15-.93.33-1.89.54-2.86s.47-2.05.74-3.06a35.19,35.19,0,0,1,2.11-6c1.38-3,2.84-4.39,4.44-4.3,3.07.17,4.65,6.09,5.44,11.06.14.95.26,1.91.37,2.86.13,1.13.22,2.25.27,3.33A30.52,30.52,0,0,1,71.38,37.76Z", fill: primaryColor }),
                        React.createElement("path", { d: "M64.67,43.15q-.37,0-.75,0a8.9,8.9,0,0,1-1.87-.25c-3.85-.84-5.45-3.48-5.64-5.48v-.15a1.34,1.34,0,0,1,0-.2,18.87,18.87,0,0,1,.13-2.72q.09-.81.21-1.68l0-.15c0-.12,0-.21.05-.3.16-1,.35-2,.55-2.93.25-1.13.51-2.16.76-3.09a36,36,0,0,1,2.15-6.12c1.53-3.29,3.19-4.85,5.16-4.73,2.87.16,4.93,4.09,6.14,11.69.15,1,.27,2,.38,2.89.14,1.26.23,2.36.27,3.39a29.06,29.06,0,0,1-.09,4.53l0,.17,0,.17a.18.18,0,0,1,0,.06l0,.43-.06.09a.53.53,0,0,1-.06.14,1,1,0,0,1,0,.1.88.88,0,0,1-.09.23l0,.08,0,.09a.94.94,0,0,1-.12.22l-.22.38,0,.07-.07.12-.22.32,0,0,0,.05,0,0a2.74,2.74,0,0,1-.29.31l-.41.4-.24.2-.06,0c-.2.15-.4.28-.61.42l-.32.17-.09.06a1,1,0,0,1-.21.1l-.11.05-.2.08-.14.06a1.81,1.81,0,0,1-.35.14l0,0a1.6,1.6,0,0,1-.19.07h0l-.28.09H67.3a1.08,1.08,0,0,1-.27.07c-.19,0-.37.08-.55.1A10.06,10.06,0,0,1,64.67,43.15Zm.58-26.34c-1.21,0-2.43,1.31-3.62,3.88a34,34,0,0,0-2.06,5.87c-.25.9-.5,1.92-.74,3-.2.94-.38,1.89-.53,2.82,0,.1,0,.22-.06.34l0,.15c-.07.53-.14,1.07-.2,1.6A17.25,17.25,0,0,0,57.89,37v.13a1.27,1.27,0,0,1,0,.2c.15,1.51,1.41,3.43,4.49,4.1a7.83,7.83,0,0,0,1.62.22,9.42,9.42,0,0,0,2.24-.12,3.4,3.4,0,0,0,.5-.1l.09,0,.18,0,.09,0,.35-.12.07,0a.75.75,0,0,1,.18-.08L68,41l.23-.11.1-.06.16-.09.51-.34.09-.08h0l0-.05.22-.17.23-.23.15-.16.09-.12.11-.16.21-.32.07-.15.13-.23.07-.15.1-.26h0a.52.52,0,0,0,0-.11h0a.5.5,0,0,0,0-.12v0l.07-.33h0a28.79,28.79,0,0,0,.09-4.32c0-1-.13-2.06-.27-3.28-.09-.9-.22-1.85-.37-2.83-1-6.51-2.76-10.31-4.73-10.42ZM72,38.38Z", fill: secondaryColor })),
                    React.createElement("path", { d: "M92.47,43.36a1,1,0,0,1-1.11,1,2.7,2.7,0,0,1-.62-.08c-1.3-.28-4.56-1.47-7.85-6.44a1,1,0,0,1-.14-.79,21.56,21.56,0,0,1,.64-2.6c.73-2.32,2-5,4.21-4.76,1,.13,2.5.92,3.84,6.31a39.36,39.36,0,0,1,.92,5A14,14,0,0,1,92.47,43.36Z", fill: primaryColor }),
                    React.createElement("path", { d: "M44.86,36c-5.06,5.77-9.48,5.44-9.67,5.44,0,0-.1,0-.14-.06a1.07,1.07,0,0,1-.84-1c0-.07,0-.15,0-.24.15-2.49,2.1-9.73,4.47-12a2.71,2.71,0,0,1,1.94-.89c2.48,0,3.64,3.53,4.15,6,.19.92.29,1.7.33,2.06A1.1,1.1,0,0,1,44.86,36Z", fill: primaryColor }),
                    React.createElement("path", { d: "M34.25,56.75c-1.34-.7-2.68-1.32-4.05-1.87A40.17,40.17,0,0,0,26,53.42l-.94-.25c-1.1-.3-2.21-.55-3.34-.74-.73-.16-1.45-.24-2.2-.37-.36-.08-.75-.08-1.1-.15s-.75-.1-1.14-.17c.37-.09.75-.15,1.14-.21a10.58,10.58,0,0,1,1.13-.15,16,16,0,0,1,2.3,0,18.17,18.17,0,0,1,3.72.55l.82.21a19.51,19.51,0,0,1,4.24,1.8A15.31,15.31,0,0,1,34.25,56.75Z", fill: primaryColor }),
                    React.createElement("path", { d: "M33.66,60.55c-1.5-.32-2.94-.58-4.42-.75a38.09,38.09,0,0,0-4.39-.3H23.57c-1,0-2.07.06-3.11.16-.75,0-1.48.15-2.22.24-.38,0-.75.11-1.11.15L16,60.2c.34-.17.69-.34,1-.48a9.79,9.79,0,0,1,1.06-.43,18.47,18.47,0,0,1,5.66-1.08c.37,0,.75,0,1.12,0a20.75,20.75,0,0,1,4.57.6A13.72,13.72,0,0,1,33.66,60.55Z", fill: primaryColor }),
                    React.createElement("path", { d: "M33.85,65.45a38,38,0,0,0-4.45.26,37,37,0,0,0-4.36.68L24,66.64c-1.06.25-2.12.53-3.15.88-.7.21-1.41.47-2.11.72a9.36,9.36,0,0,0-1,.41c-.35.13-.71.28-1.07.38.29-.25.59-.46.9-.7a8.68,8.68,0,0,1,.93-.66,20.65,20.65,0,0,1,2-1.11,18.31,18.31,0,0,1,3.29-1.2c.36-.1.71-.19,1.07-.27a20.62,20.62,0,0,1,4.58-.43A14.94,14.94,0,0,1,33.85,65.45Z", fill: primaryColor }),
                    React.createElement("path", { d: "M111.45,54.32l-1.13.06c-.39,0-.75,0-1.13,0-.75,0-1.5.06-2.22.15a41.71,41.71,0,0,0-4.35.57q-.59.1-1.17.24c-1,.22-2.07.5-3.1.81a37.44,37.44,0,0,0-4.22,1.43A13.85,13.85,0,0,1,98,55.17a19.16,19.16,0,0,1,3-1.05c.45-.13.9-.22,1.35-.31a19.68,19.68,0,0,1,4.59-.32,15.76,15.76,0,0,1,2.28.26,10,10,0,0,1,1.11.25C110.72,54.11,111.11,54.2,111.45,54.32Z", fill: primaryColor }),
                    React.createElement("path", { d: "M112,62.79a10.52,10.52,0,0,1-1.11-.26c-.36-.08-.72-.19-1.09-.25-.72-.15-1.44-.32-2.17-.45a38.13,38.13,0,0,0-4.35-.58l-.78,0c-1.2-.08-2.41-.09-3.61-.08-1.54.07-3,.17-4.52.34a14.52,14.52,0,0,1,4.37-1.36,19.25,19.25,0,0,1,3.64-.22c.33,0,.65,0,1,0a19.38,19.38,0,0,1,4.51.89,19.79,19.79,0,0,1,2.14.84,9.93,9.93,0,0,1,1,.53C111.36,62.38,111.68,62.58,112,62.79Z", fill: primaryColor }),
                    React.createElement("path", { d: "M110.58,71.55a11,11,0,0,1-1-.49c-.34-.17-.66-.36-1-.49-.69-.32-1.34-.64-2-.92-1.34-.59-2.73-1.08-4.11-1.53l-.53-.16c-1.22-.37-2.47-.67-3.74-.93a43.8,43.8,0,0,0-4.45-.68A13.91,13.91,0,0,1,98.25,66a19.37,19.37,0,0,1,3.92.67q.3.07.6.18a18.62,18.62,0,0,1,4.2,1.87,18.26,18.26,0,0,1,1.9,1.3c.3.24.59.5.87.75S110.3,71.27,110.58,71.55Z", fill: primaryColor }),
                    React.createElement("path", { d: "M76.24,69c-.15.19-.27.39-.43.58,0,0,0,0,0,.06a7.74,7.74,0,0,1-5.42,3.16,18.58,18.58,0,0,1-2.08,4.29c-1.39,2.06-3,3.19-4.61,3.21a4,4,0,0,1-.83-.08,6.91,6.91,0,0,1-3.88-3,18.37,18.37,0,0,1-2.24-4.3,7.58,7.58,0,0,1-1.19-.16A8.22,8.22,0,0,1,51.12,70l0,0a2.73,2.73,0,0,1-.42-.57A1,1,0,0,1,50.93,68a1,1,0,0,1,1.34.28s.09.13.26.34c0,0,0,0,0,0a5.9,5.9,0,0,0,4.73,2.24,8.56,8.56,0,0,0,5.05-2.6,6.21,6.21,0,0,1-3.13-2.75,2.15,2.15,0,0,1,0-2.43,3.19,3.19,0,0,1,1.87-1,11.34,11.34,0,0,1,2.24-.25c1.45,0,3.35.11,4.14,1.09a2.23,2.23,0,0,1,.13,2.45,6.13,6.13,0,0,1-3.06,2.87,8.79,8.79,0,0,0,5.14,2.51,5.71,5.71,0,0,0,4.63-2.5l0,0a0,0,0,0,1,0,0c.11-.15.24-.3.34-.45A1,1,0,0,1,76,67.63,1,1,0,0,1,76.24,69Z", fill: primaryColor }),
                    React.createElement("path", { d: "M82.64,53.55a.35.35,0,0,1-.23.3l-.09,0a20.49,20.49,0,0,0-2.3.94A12.2,12.2,0,0,0,78,56c-.32.21-.62.48-.92.72l-.42.4a2.28,2.28,0,0,0-.22.22l0,0a9.27,9.27,0,0,1,1.58,0,7.79,7.79,0,0,1,2.15.53A8,8,0,0,1,82,59a.35.35,0,0,1-.3.62l0,0c-.32-.09-.62-.21-.94-.28s-.62-.15-.94-.19A7.7,7.7,0,0,0,77.91,59a9.31,9.31,0,0,0-1.82.28,6.26,6.26,0,0,0-.87.28,3.89,3.89,0,0,0-.41.17l-.19.08-.08,0-.07,0,0,0a1,1,0,0,1-1.34-1.34,10.59,10.59,0,0,1,1.62-2.37,8.84,8.84,0,0,1,1-1A9.09,9.09,0,0,1,77,54.45a9.75,9.75,0,0,1,2.61-1,8.19,8.19,0,0,1,2.75-.24A.36.36,0,0,1,82.64,53.55Z", fill: primaryColor }),
                    React.createElement("path", { d: "M53.55,57.33c-.21,3.34-2.25,6-4.63,6h-.19a2.31,2.31,0,0,1-.46-.05c-2.2-.47-3.76-3.21-3.57-6.44.22-3.43,2.37-6.09,4.82-5.94a3.86,3.86,0,0,1,3,2A7.64,7.64,0,0,1,53.55,57.33Z", fill: primaryColor }))))));
};

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M115.38,77.51C115,99.43,91.1,112.26,62,111.69S9.5,97.42,9.92,75.49s24.45-43.7,53.57-43.16S115.8,55.59,115.38,77.51Z", transform: "translate(0 -14.87)", fill: "#fff" }),
            React.createElement("g", { opacity: "0.2" },
                React.createElement("path", { d: "M62.49,111.63C33.38,111.06,10,97.36,10.43,75.44V75C14.76,92.61,36,103.39,61.7,103.9c29.08.54,52.91-12.23,53.42-34.09a33.46,33.46,0,0,1,.8,7.62C115.49,99.35,91.61,112.17,62.49,111.63Z", transform: "translate(0 -14.87)", fill: "#390075" })),
            React.createElement("path", { d: "M44.87,111.18a61.49,61.49,0,0,1-20.79-8.39C13.68,95.91,8.27,86.44,8.5,75.47c.2-11.12,6.23-22.47,16.55-31a58.54,58.54,0,0,1,76.45,1.45c10,9,15.55,20.55,15.33,31.67s-6,20.22-16.64,26.7c-9.86,6-23.45,9.15-38.24,8.87A88.84,88.84,0,0,1,44.87,111.18ZM74.35,35.06a58.81,58.81,0,0,0-10.89-1.28c-29.37-.56-51.75,21.58-52.14,41.77-.32,16,13.05,28.29,33.94,32.87A84.82,84.82,0,0,0,62,110.29c30.22.57,51.58-12.9,52-32.78.2-10.29-5.06-21.07-14.41-29.51A54.75,54.75,0,0,0,74.35,35.06Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("path", { d: "M44.87,111.18a61.49,61.49,0,0,1-20.79-8.39C13.68,95.91,8.27,86.44,8.5,75.47c.2-11.12,6.23-22.47,16.55-31a58.54,58.54,0,0,1,76.45,1.45c10,9,15.55,20.55,15.33,31.67s-6,20.22-16.64,26.7c-9.86,6-23.45,9.15-38.24,8.87A88.84,88.84,0,0,1,44.87,111.18ZM74.35,35.06a58.81,58.81,0,0,0-10.89-1.28c-29.37-.56-51.75,21.58-52.14,41.77-.32,16,13.05,28.29,33.94,32.87A84.82,84.82,0,0,0,62,110.29c30.22.57,51.58-12.9,52-32.78.2-10.29-5.06-21.07-14.41-29.51A54.75,54.75,0,0,0,74.35,35.06Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("path", { d: "M67,48.37a11.77,11.77,0,0,1-2.93.17c-5.57-.28-7.54-3.35-7.76-5.51A25.67,25.67,0,0,0,67,48.37Z", transform: "translate(0 -14.87)", fill: "#fe6dcb" }),
            React.createElement("path", { d: "M66.56,49.74a27,27,0,0,1-11.17-5.63,1.26,1.26,0,0,1-.49-.91,1.58,1.58,0,0,1,0-.37v-.06a38.21,38.21,0,0,1,.57-6.31,1.47,1.47,0,0,1,1-1.14,1.4,1.4,0,0,1,1.45.4A23.83,23.83,0,0,0,72.5,42.29a1.39,1.39,0,0,1,1,.54,1.37,1.37,0,0,1,.29,1.1c-.34,2.14-2,4.75-5.86,5.69a5.32,5.32,0,0,1-.74.14,1.46,1.46,0,0,1-.51,0A.28.28,0,0,1,66.56,49.74Zm.4-1.37Zm-9.27-6A24.13,24.13,0,0,0,67,46.92l.22-.06h0a5.16,5.16,0,0,0,3.1-1.93,26.47,26.47,0,0,1-12.45-5.4C57.75,40.61,57.69,41.58,57.69,42.34Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("path", { d: "M69.35,47.57a7.18,7.18,0,0,1-1.8.69c-.2.05-.39.08-.59.11A25.58,25.58,0,0,1,56.29,43a1.42,1.42,0,0,1,0-.29,37.76,37.76,0,0,1,.54-6,25.32,25.32,0,0,0,12.71,6.66,22.67,22.67,0,0,0,2.84.37A5.4,5.4,0,0,1,69.35,47.57Z", transform: "translate(0 -14.87)", fill: "#33aef1" }),
                React.createElement("path", { d: "M66.81,48.54A26.46,26.46,0,0,1,56.15,43.2l0-.06v-.09c0-.08,0-.17,0-.25v-.06a39.09,39.09,0,0,1,.54-6.08l0-.4.26.28a25.4,25.4,0,0,0,12.62,6.6,25.66,25.66,0,0,0,2.82.37h.2l0,.2a5.72,5.72,0,0,1-3.1,4,8.91,8.91,0,0,1-1.82.68c-.23.06-.43.08-.62.14h-.06S66.84,48.54,66.81,48.54Zm-10.34-5.6A25.66,25.66,0,0,0,66.9,48.17s.06,0,.06,0l.54-.11a7.58,7.58,0,0,0,1.73-.66h0a5.35,5.35,0,0,0,2.87-3.52,23.29,23.29,0,0,1-2.64-.34,25.84,25.84,0,0,1-12.54-6.43,35.47,35.47,0,0,0-.48,5.63v.06S56.47,42.88,56.47,42.94Z", transform: "translate(0 -14.87)", fill: "#390075" })),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M69.35,47.57c.11-1.45.17-2.87.17-4.23a22.67,22.67,0,0,0,2.84.37A5.39,5.39,0,0,1,69.35,47.57Z", transform: "translate(0 -14.87)", fill: "#fff" })),
            React.createElement("path", { d: "M72.36,43.71a22.67,22.67,0,0,1-2.84-.37,25.07,25.07,0,0,1-12.71-6.66A77.66,77.66,0,0,1,58.48,29s2.76,4.52,10.78,7.79c1,.4,2.08.8,3.24,1.17a32.49,32.49,0,0,1-.11,5.66C72.39,43.65,72.39,43.68,72.36,43.71Z", transform: "translate(0 -14.87)", fill: "#fdd800" }),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M72.36,43.71a22.67,22.67,0,0,1-2.84-.37,62.7,62.7,0,0,0-.29-6.57c1,.4,2.08.8,3.24,1.17a31.39,31.39,0,0,1-.11,5.65C72.39,43.65,72.39,43.68,72.36,43.71Z", transform: "translate(0 -14.87)", fill: "#fff" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M72.5,37.94c-1.16-.37-2.25-.74-3.24-1.17C61.24,33.5,58.48,29,58.48,29a48,48,0,0,1,2.73-7.76A21.11,21.11,0,0,0,67.81,28a15.52,15.52,0,0,0,3.87,1.82A78.47,78.47,0,0,1,72.5,37.94Z", transform: "translate(0 -14.87)", fill: "#b177ea" }),
                React.createElement("path", { d: "M72.7,38.19l-.26-.08c-1.1-.34-2.21-.74-3.24-1.17-8-3.27-10.83-7.82-10.86-7.87L58.29,29l0-.09A52.57,52.57,0,0,1,61,21.13l.17-.34.17.34a21.18,21.18,0,0,0,6.52,6.74,15.9,15.9,0,0,0,3.81,1.79l.11,0,0,.11a76.05,76.05,0,0,1,.82,8.11ZM58.68,29c.4.57,3.33,4.66,10.64,7.65.93.4,1.93.74,3,1.08A72.51,72.51,0,0,0,71.48,30a16.7,16.7,0,0,1-3.81-1.79,21.44,21.44,0,0,1-6.46-6.57A53.39,53.39,0,0,0,58.68,29Z", transform: "translate(0 -14.87)", fill: "#390075" })),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M72.5,37.94c-1.16-.37-2.25-.74-3.24-1.17A59.3,59.3,0,0,0,67.78,28a15.52,15.52,0,0,0,3.87,1.82A72.46,72.46,0,0,1,72.5,37.94Z", transform: "translate(0 -14.87)", fill: "#fff" })),
            React.createElement("path", { d: "M71.71,29.66a15.36,15.36,0,0,1-3.87-1.82A20.9,20.9,0,0,1,61.24,21a13.24,13.24,0,0,1,2.67-4.1,2.52,2.52,0,0,1,1.88-.79C68.58,16.24,70.62,22.78,71.71,29.66Z", transform: "translate(0 -14.87)", fill: "#fe6dcb" }),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M72.05,30a15.88,15.88,0,0,1-3.87-1.82,53.41,53.41,0,0,0-3.9-10.92,2.57,2.57,0,0,1,1.88-.8C68.92,16.53,71,23.07,72.05,30Z", transform: "translate(0 -14.87)", fill: "#fff" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M71.42,31s-.06,0-.11,0c-7.28-2.3-11-8.9-11.12-9.18a1.16,1.16,0,0,1,0-1.06c1.79-3.86,3.64-5.68,5.66-5.57,3.92.2,6,8,7,14.53a1.12,1.12,0,0,1-.39,1A1.27,1.27,0,0,1,71.42,31Zm-8.9-9.84A19.6,19.6,0,0,0,70.2,28c-1.42-7.62-3.41-10.52-4.49-10.58C65,17.44,63.89,18.4,62.52,21.16Z", transform: "translate(0 -14.87)", fill: "#390075" }),
                React.createElement("path", { d: "M72.25,39.07l-.09,0c-10.8-3.32-14.5-9.21-14.64-9.43a1.25,1.25,0,0,1-.14-.91,50.33,50.33,0,0,1,2.78-8,1.1,1.1,0,0,1,1-.65,1.19,1.19,0,0,1,1.05.6c0,.05,3.41,6.08,9.81,8.1a1.17,1.17,0,0,1,.79.91,78.37,78.37,0,0,1,.86,8.22,1.09,1.09,0,0,1-.46,1A1.39,1.39,0,0,1,72.25,39.07ZM59.74,28.75c.91,1.2,4.23,5,11.51,7.54-.14-1.82-.34-3.7-.63-5.58a20.61,20.61,0,0,1-9.21-7.08C60.84,25.14,60.28,26.88,59.74,28.75Z", transform: "translate(0 -14.87)", fill: "#390075" }),
                React.createElement("path", { d: "M68.66,44.36A26.28,26.28,0,0,1,56,37.51a1.19,1.19,0,0,1-.28-1,75,75,0,0,1,1.7-7.84,1.11,1.11,0,0,1,.94-.83,1.13,1.13,0,0,1,1.14.54c0,.06,3.47,5.4,13.36,8.45a1.18,1.18,0,0,1,.83,1,37.84,37.84,0,0,1-.12,5.85c0,.09,0,.17,0,.23a1.11,1.11,0,0,1-1.19.88A22.71,22.71,0,0,1,68.66,44.36Zm3.7-.65Zm-14.3-7.39a24.53,24.53,0,0,0,13.28,6.16c0-1,.08-2.3,0-3.66A29.78,29.78,0,0,1,59,31.51C58.65,33.1,58.31,34.75,58.06,36.32Z", transform: "translate(0 -14.87)", fill: "#390075" }),
                React.createElement("path", { d: "M66.62,49.48a26.84,26.84,0,0,1-11.06-5.55,1.05,1.05,0,0,1-.4-.73,1.38,1.38,0,0,1,0-.35V42.8a37.68,37.68,0,0,1,.57-6.26,1.14,1.14,0,0,1,2-.59A24.44,24.44,0,0,0,72.44,42.6a1.17,1.17,0,0,1,.83.43,1.14,1.14,0,0,1,.23.9c-.32,2-2,4.55-5.66,5.46-.26.06-.49.12-.71.15a1.55,1.55,0,0,1-.43,0S66.64,49.48,66.62,49.48ZM67,48.37ZM57.4,42.48A24.65,24.65,0,0,0,67,47.2c.08,0,.19,0,.31-.05h0a5.33,5.33,0,0,0,3.52-2.42A26.28,26.28,0,0,1,57.69,39,23.92,23.92,0,0,0,57.4,42.48Z", transform: "translate(0 -14.87)", fill: "#390075" }),
                React.createElement("path", { d: "M61.61,49.39c-4.41-1-6.25-3.81-6.48-6.22A1.16,1.16,0,0,1,55.75,42a1.12,1.12,0,0,1,1.28.14A24.37,24.37,0,0,0,67.1,47.23l.11,0a1.17,1.17,0,0,1,.91,1.14,1.14,1.14,0,0,1-.94,1.11,13.16,13.16,0,0,1-3.18.17A14.21,14.21,0,0,1,61.61,49.39Z", transform: "translate(0 -14.87)", fill: "#390075" })),
            React.createElement("path", { d: "M61.64,49.65c-4.32-.94-6.51-3.75-6.77-6.45,0-.12,0-.23,0-.35V42.8A26.57,26.57,0,0,1,55,39.33c.08-.71.17-1.45.28-2.22l0-.14c0-.17.06-.31.08-.48a76.39,76.39,0,0,1,1.71-7.88,46.67,46.67,0,0,1,2.81-8c1.85-4,3.79-5.86,5.92-5.74,4.09.23,6.2,8.13,7.25,14.75A78.84,78.84,0,0,1,74,37.88a38.84,38.84,0,0,1-.11,5.91c0,.09,0,.17,0,.23h0c0,.09,0,.2-.06.28a1.3,1.3,0,0,0,0,.15,1.11,1.11,0,0,0,0,.25c0,.06,0,.12-.06.17a1.85,1.85,0,0,1-.09.23c0,.06,0,.11,0,.14s-.12.26-.17.37,0,.06-.06.09a2.41,2.41,0,0,0-.14.28L73,46.1l0,0-.17.26-.08.14-.23.32s0,0-.06.08a3.18,3.18,0,0,1-.31.34l-.06.06-.31.31-.09.06,0,0c-.12.08-.2.2-.32.28l-.08.06c-.29.23-.6.42-.91.62l-.06,0-.08,0-.2.11c-.06,0-.09.06-.12.06l-.2.09c-.14,0-.25.11-.39.17l-.17.08a3.73,3.73,0,0,1-.4.14l-.06,0-.17.06c-.17.06-.31.08-.48.14a.25.25,0,0,1-.14,0c-.26.06-.49.11-.72.14A12.83,12.83,0,0,1,64,50,12,12,0,0,1,61.64,49.65Zm4.12-31.9h-.08c-.46,0-1.68.8-3.19,4.09a47.83,47.83,0,0,0-2.64,7.54c-.68,2.53-1.25,5.14-1.65,7.59a2.66,2.66,0,0,0-.06.45l0,.15c-.11.74-.19,1.45-.25,2.1a21.16,21.16,0,0,0-.17,3.07v.2c.17,1.79,2,4,6.4,4.21A11.23,11.23,0,0,0,66.67,47a3.14,3.14,0,0,0,.51-.12l.09,0a1.12,1.12,0,0,0,.34-.11l.14-.06a1.15,1.15,0,0,0,.29-.11l.08,0a2.64,2.64,0,0,0,.29-.14l.2-.09a.25.25,0,0,1,.11,0l.06,0a.07.07,0,0,1,0,0,7,7,0,0,0,.6-.4.1.1,0,0,1,.06,0l.2-.17h0l0,0a.76.76,0,0,0,.2-.2l0,0c.06-.09.14-.15.2-.23l0-.06s.08-.11.11-.17l0-.06a.36.36,0,0,0,.11-.17l.06-.08a.85.85,0,0,0,.09-.14l0-.06a1.29,1.29,0,0,1,.09-.2l0-.08c0-.06,0-.09.06-.15l0-.08s0-.09,0-.12l0-.08a1.06,1.06,0,0,1,0-.14.11.11,0,0,1,0-.09v0A34.9,34.9,0,0,0,71.05,38a73.64,73.64,0,0,0-.82-7.93C68.89,21.42,66.81,18,65.76,17.75Zm4.95,28.89ZM71,43.42Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("path", { d: "M83.76,44.28s4.81-18.23,12.31-17.75,11.54,26.73,10.72,32.93C106.82,59.46,95.27,59.49,83.76,44.28Z", transform: "translate(0 -14.87)", fill: "#fff" }),
            React.createElement("path", { d: "M83.31,44.16a7.07,7.07,0,0,1,.17-3.89,19.36,19.36,0,0,1,1.36-3.53c.54-1.14,1-2.3,1.65-3.44a34.43,34.43,0,0,1,2-3.33,15.89,15.89,0,0,1,2.7-3,7.4,7.4,0,0,1,4.09-1.82h.91l.35,0c.22,0,.42.09.65.14a2.41,2.41,0,0,1,.6.23,6.91,6.91,0,0,1,1.93,1.31,13.84,13.84,0,0,1,2.45,3.3,36.8,36.8,0,0,1,2.87,7.1c.74,2.42,1.3,4.87,1.79,7.31S107.7,49.48,108,52c.05.63.14,1.25.17,1.88s.17,1.25.22,1.87a7.48,7.48,0,0,1-.08,1.94,3.46,3.46,0,0,1-1,1.9.58.58,0,0,1-.85,0l-.06,0,0-.06a4.71,4.71,0,0,1-.83-1.79,9.62,9.62,0,0,1-.17-1.76,17.77,17.77,0,0,0,0-1.79l-.17-1.8c-.25-2.38-.65-4.8-1.11-7.16a71.21,71.21,0,0,0-1.73-7,36.51,36.51,0,0,0-2.64-6.57,11.28,11.28,0,0,0-1.91-2.62,3.77,3.77,0,0,0-1.11-.74,1.21,1.21,0,0,0-.25-.08c-.09,0-.18-.06-.26-.06L96,28h-.49a4.83,4.83,0,0,0-2.53,1.2,13.51,13.51,0,0,0-2.19,2.47,28.82,28.82,0,0,0-1.79,3,27.61,27.61,0,0,0-1.45,3.24c-.39,1.13-.79,2.27-1.28,3.35a8.59,8.59,0,0,1-2,3.16l0,0a.54.54,0,0,1-.77,0A1.29,1.29,0,0,0,83.31,44.16Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", null,
                    React.createElement("path", { d: "M90.38,43.11S92.09,34,95.3,34.44s5.43,13.65,5.21,16.75C100.51,51.16,95.59,51,90.38,43.11Z", transform: "translate(0 -14.87)", fill: "#fe6dcb" }),
                    React.createElement("path", { d: "M99.85,51.27c-1.5-.34-5.46-1.76-9.64-8.05l0,0,0-.09c0-.37,1.76-9.24,5.11-8.81s5.6,14,5.38,16.94v.2h-.2A1.86,1.86,0,0,0,99.85,51.27Zm-9.27-8.22c4.5,6.74,8.79,7.77,9.76,7.91.14-3.5-2.11-15.7-5-16.32a.23.23,0,0,1-.12,0C92.43,34.27,90.75,42.2,90.58,43.05Z", transform: "translate(0 -14.87)", fill: "#390075" })),
                React.createElement("path", { d: "M99.65,52.46c-1.73-.37-6.08-2-10.46-8.58a1.38,1.38,0,0,1-.2-1.05c.46-2.45,2.28-10.32,6.48-9.81,1.34.17,3.33,1.22,5.12,8.41A40.28,40.28,0,0,1,102,51.27a1.4,1.4,0,0,1-1.48,1.31A3.16,3.16,0,0,1,99.65,52.46ZM91.89,42.8C94.76,47,97.44,48.63,99,49.31a51.16,51.16,0,0,0-1.14-6.85c-1.19-5-2.44-6.49-2.79-6.63C94.31,35.75,92.72,38.87,91.89,42.8Z", transform: "translate(0 -14.87)", fill: "#390075" })),
            React.createElement("path", { d: "M43.56,42.14S40.71,23.49,33.21,23.21,18.91,48.57,19.05,54.8C19.05,54.8,30.51,56,43.56,42.14Z", transform: "translate(0 -14.87)", fill: "#fff" }),
            React.createElement("path", { d: "M43.1,42.2a9.41,9.41,0,0,1-1.7-3.35c-.37-1.14-.63-2.34-.91-3.47A28,28,0,0,0,39.38,32a24.9,24.9,0,0,0-1.48-3.18A13.54,13.54,0,0,0,36,26.11a4.78,4.78,0,0,0-2.39-1.45c-.12,0-.2,0-.31,0l-.15,0H33l-.25,0c-.09,0-.18,0-.29.06a4.3,4.3,0,0,0-1.17.62,11.22,11.22,0,0,0-2.18,2.39,35.29,35.29,0,0,0-3.33,6.23,70.52,70.52,0,0,0-2.47,6.79c-.72,2.31-1.34,4.66-1.88,7-.14.6-.26,1.17-.37,1.77s-.14,1.19-.23,1.79A6.85,6.85,0,0,1,20.44,53a4.78,4.78,0,0,1-1,1.68l0,0a.6.6,0,0,1-.85.06l-.06-.06a3.51,3.51,0,0,1-.8-2,6.2,6.2,0,0,1,.12-1.93c.14-.63.31-1.23.42-1.85s.26-1.23.37-1.85c.54-2.45,1.2-4.86,1.94-7.25s1.59-4.75,2.56-7.08A37.49,37.49,0,0,1,26.73,26a13.1,13.1,0,0,1,2.78-3,6.23,6.23,0,0,1,2.08-1.08,4.61,4.61,0,0,1,.62-.14,4.91,4.91,0,0,1,.66-.06h.34c.11,0,.2,0,.31,0l.6.08A7.66,7.66,0,0,1,38,24.09a14.82,14.82,0,0,1,2.36,3.3A31.26,31.26,0,0,1,42,30.91c.46,1.2.86,2.39,1.28,3.59a18,18,0,0,1,1,3.66,7.29,7.29,0,0,1-.26,3.9.55.55,0,0,1-.71.31.88.88,0,0,1-.17-.17Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", null,
                    React.createElement("path", { d: "M37.39,40.52s-1-9.38-4.58-9.41-7.08,13-7.11,16.18C25.7,47.26,31.05,47.72,37.39,40.52Z", transform: "translate(0 -14.87)", fill: "#fe6dcb" }),
                    React.createElement("path", { d: "M25.5,47.46v-.17c0-2.84,2.7-12.68,5.6-15.52a2.53,2.53,0,0,1,1.71-.86c3.64.06,4.72,9.22,4.78,9.58v.09l-.06.06c-6.31,7.19-11.63,6.85-11.86,6.82Zm7.68-16.12a1.42,1.42,0,0,0-.37,0,2.25,2.25,0,0,0-1.45.74C28.6,34.78,26,44.11,25.9,47.12c1,0,5.77-.37,11.29-6.63C37.08,39.56,36.05,32,33.18,31.34Z", transform: "translate(0 -14.87)", fill: "#390075" })),
                React.createElement("path", { d: "M25.39,48.65a1.41,1.41,0,0,1-1.11-1.39c0-3,2.7-13.19,6-16.38a3.66,3.66,0,0,1,2.59-1.19c4.55.06,5.77,8.9,6,10.69a1.45,1.45,0,0,1-.34,1.11c-6.74,7.68-12.63,7.25-12.88,7.25C25.53,48.68,25.45,48.68,25.39,48.65Zm7.53-16.12h-.11c-.28,0-1.71,1-3.53,6a45.22,45.22,0,0,0-2,7.17c1.79-.4,5-1.68,8.59-5.63C35.4,36.51,34.12,32.79,32.92,32.53Z", transform: "translate(0 -14.87)", fill: "#390075" })),
            React.createElement("path", { d: "M24.34,69.13c-1.79-.94-3.58-1.77-5.4-2.51a55.21,55.21,0,0,0-5.55-1.93,58.42,58.42,0,0,0-5.71-1.34c-1-.2-1.94-.31-2.93-.48-.49-.11-1-.11-1.48-.2s-1-.14-1.51-.23c.49-.11,1-.19,1.51-.28A12.73,12.73,0,0,1,4.78,62a22.45,22.45,0,0,1,3.07,0,26.16,26.16,0,0,1,6.05,1,25.74,25.74,0,0,1,5.66,2.38A20.58,20.58,0,0,1,24.34,69.13Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("path", { d: "M23.54,74.19c-2-.43-3.92-.77-5.88-1a50.31,50.31,0,0,0-5.86-.4A57.4,57.4,0,0,0,5.94,73c-1,.06-2,.2-2.95.31-.52,0-1,.15-1.48.2L0,73.73c.45-.23.91-.45,1.36-.65a11.83,11.83,0,0,1,1.43-.57,27.06,27.06,0,0,1,2.92-.85A27.36,27.36,0,0,1,11.83,71a27.19,27.19,0,0,1,6.08.8A18.35,18.35,0,0,1,23.54,74.19Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("path", { d: "M23.8,80.73a50.3,50.3,0,0,0-5.94.34,48.3,48.3,0,0,0-5.8.91,54.8,54.8,0,0,0-5.66,1.5c-.94.29-1.88.63-2.82,1A11.11,11.11,0,0,0,2.19,85c-.46.17-.94.37-1.42.51.4-.34.79-.62,1.19-.94a14.88,14.88,0,0,1,1.25-.88A25,25,0,0,1,5.89,82.2a26.43,26.43,0,0,1,5.8-2,28.38,28.38,0,0,1,6.11-.57A19.47,19.47,0,0,1,23.8,80.73Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("path", { d: "M104.17,70.29A18.61,18.61,0,0,1,109.32,67a26.72,26.72,0,0,1,5.86-1.82,25.56,25.56,0,0,1,6.11-.42,20.49,20.49,0,0,1,3,.34,11.8,11.8,0,0,1,1.48.34c.48.14,1,.25,1.45.42l-1.51.09c-.51,0-1,0-1.5.06-1,0-2,.08-3,.2a55.38,55.38,0,0,0-5.8.76,48.69,48.69,0,0,0-5.69,1.4A52.5,52.5,0,0,0,104.17,70.29Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("path", { d: "M104.49,75.41a18.94,18.94,0,0,1,5.83-1.82,26.24,26.24,0,0,1,6.14-.23,25.41,25.41,0,0,1,6,1.2,25.06,25.06,0,0,1,2.85,1.1,14.89,14.89,0,0,1,1.36.72c.46.25.88.51,1.31.79a11.8,11.8,0,0,1-1.48-.34c-.48-.11-1-.26-1.45-.34-1-.2-1.93-.43-2.9-.6a52.36,52.36,0,0,0-5.8-.77c-1.93-.17-3.89-.19-5.86-.17S106.51,75.18,104.49,75.41Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("path", { d: "M103.58,81.92a18.77,18.77,0,0,1,6.08-.48,25.78,25.78,0,0,1,6,1.13,25,25,0,0,1,5.6,2.51,19.89,19.89,0,0,1,2.53,1.73c.4.31.8.65,1.17,1s.74.68,1.11,1a14.53,14.53,0,0,1-1.37-.66c-.45-.22-.88-.48-1.34-.65-.91-.43-1.79-.85-2.7-1.22a55.74,55.74,0,0,0-5.48-2,53.85,53.85,0,0,0-5.69-1.45A58.25,58.25,0,0,0,103.58,81.92Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", { opacity: "0.2" },
                    React.createElement("path", { d: "M78.78,85.36c-2.38,3-4.91,3.9-7.22,3.81C67,89,63.32,84.93,63.32,84.93c-3.1,3.07-5.86,4.24-8.13,4.38a9.12,9.12,0,0,1-7.4-3.44c9.13,1.4,13.42-3.47,13.42-3.47l4.13-.08C69.49,88.46,78.5,85.47,78.78,85.36Z", transform: "translate(0 -14.87)", fill: "#390075" })),
                React.createElement("path", { d: "M71.56,89.17a24.21,24.21,0,0,1-2.9,6.28c-1.42,2.11-3.15,3.7-5.09,3.73s-3.78-1.48-5.26-3.56a23.46,23.46,0,0,1-3.12-6.28c2.3-.14,5-1.31,8.13-4.38C63.32,85,67,89,71.56,89.17Z", transform: "translate(0 -14.87)", fill: "#390075" }),
                React.createElement("g", null,
                    React.createElement("path", { d: "M68.66,95.48c-1.42,2.11-3.15,3.7-5.09,3.73s-3.78-1.48-5.26-3.56a5.47,5.47,0,0,1,5.12-3.55A5.4,5.4,0,0,1,68.66,95.48Z", transform: "translate(0 -14.87)", fill: "#fb64c0" }),
                    React.createElement("path", { d: "M62.66,99.26c-1.5-.34-3-1.53-4.49-3.52l-.06-.06,0-.08a5.76,5.76,0,0,1,10.66-.18l0,.09,0,.06c-1.64,2.44-3.44,3.75-5.23,3.81A3.35,3.35,0,0,1,62.66,99.26ZM58.48,95.6c1.17,1.59,3,3.46,5.09,3.41s3.81-2,4.92-3.59a5.32,5.32,0,0,0-5.06-3.21A5.4,5.4,0,0,0,58.48,95.6Z", transform: "translate(0 -14.87)", fill: "#390075" })),
                React.createElement("g", null,
                    React.createElement("path", { d: "M58.74,78.45c.91-1.25,7.62-1.59,8.79-.17s-2.08,5.09-4.3,5.12S57.72,79.84,58.74,78.45Z", transform: "translate(0 -14.87)", fill: "#390075" }),
                    React.createElement("path", { d: "M62.35,84.73a8,8,0,0,1-4.72-3.83,2.88,2.88,0,0,1,0-3.24h0c1-1.34,3.87-1.63,5.49-1.65,1.93-.06,4.46.14,5.52,1.45a3,3,0,0,1,.17,3.27c-.91,2-3.36,4.09-5.52,4.15ZM60,79.25a4.47,4.47,0,0,0,1,1.5A4,4,0,0,0,63.2,82a4,4,0,0,0,2.31-1.45,3.7,3.7,0,0,0,.85-1.43C65.34,78.59,61.24,78.68,60,79.25Zm6.48,0Z", transform: "translate(0 -14.87)", fill: "#390075" }),
                    React.createElement("g", null,
                        React.createElement("ellipse", { cx: "63.2", cy: "78.33", rx: "3.64", ry: "0.97", transform: "translate(-1.45 -13.68) rotate(-1.07)", fill: "#fff" }),
                        React.createElement("path", { d: "M60.73,79.28c-.82-.17-1.36-.46-1.39-.89s.4-.65,1.19-.88a11.27,11.27,0,0,1,2.62-.34,10.46,10.46,0,0,1,2.64.23c.8.2,1.22.48,1.22.82h0c0,.77-1.9,1.2-3.81,1.23A8.86,8.86,0,0,1,60.73,79.28Zm4.83-1.54a10.07,10.07,0,0,0-2.38-.2,12.38,12.38,0,0,0-2.53.31c-.74.2-.94.43-.94.54,0,.29,1.19.77,3.49.72s3.47-.57,3.47-.86c0-.08-.2-.31-.94-.48A.36.36,0,0,1,65.56,77.74Z", transform: "translate(0 -14.87)", fill: "#390075" }))),
                React.createElement("path", { d: "M52.68,90.45a11,11,0,0,1-5.85-3.67l-.06-.06A5.09,5.09,0,0,1,46.2,86a1.29,1.29,0,0,1,2.16-1.42h0s.12.17.34.45l.06.06c.83,1,3.07,3.21,6.31,3,2.33-.17,4.78-1.5,7.31-4a1.35,1.35,0,0,1,.94-.37,1.25,1.25,0,0,1,.91.43s3.38,3.67,7.33,3.81c2.25.09,4.32-1,6.17-3.33l0,0a0,0,0,0,1,0,0c.14-.2.31-.4.45-.6a1.29,1.29,0,0,1,2.08,1.51c-.2.25-.37.51-.57.76,0,0,0,.06-.06.09-2.36,2.9-5.11,4.32-8.21,4.24-3.67-.12-6.74-2.42-8.22-3.73-2.7,2.39-5.37,3.7-8,3.9A12.21,12.21,0,0,1,52.68,90.45Z", transform: "translate(0 -14.87)", fill: "#390075" }),
                React.createElement("path", { d: "M62.44,100.37c-1.79-.4-3.56-1.73-5.18-4A25,25,0,0,1,54,89.74a1.39,1.39,0,0,1,.15-1.11,1.27,1.27,0,0,1,1-.57c2.33-.17,4.78-1.51,7.31-4a1.35,1.35,0,0,1,.94-.37,1.25,1.25,0,0,1,.91.43s3.38,3.67,7.33,3.81a1.2,1.2,0,0,1,1,.54,1.29,1.29,0,0,1,.2,1.11,24.44,24.44,0,0,1-3.07,6.62c-1.85,2.76-4,4.27-6.14,4.3A4.77,4.77,0,0,1,62.44,100.37Zm-5.52-10a20.27,20.27,0,0,0,2.45,4.52c1.42,2,2.92,3.05,4.2,3s2.7-1.14,4-3.16a22.4,22.4,0,0,0,2.25-4.49.11.11,0,0,1-.09,0,15.07,15.07,0,0,1-6.48-3.52A14.94,14.94,0,0,1,56.92,90.36Z", transform: "translate(0 -14.87)", fill: "#390075" })),
            React.createElement("path", { d: "M88.42,65.23a27.76,27.76,0,0,0-3.07,1.25,17.67,17.67,0,0,0-2.76,1.65c-.42.28-.82.65-1.22,1l-.57.54a2.46,2.46,0,0,0-.28.28l-.26.29a12.29,12.29,0,0,0-1.79,2.53L76.65,71l.2-.12a.76.76,0,0,1,.2-.08c.11-.06.26-.09.37-.15a6.43,6.43,0,0,1,.71-.22,8.12,8.12,0,0,1,1.48-.32,11.45,11.45,0,0,1,3-.08,9.73,9.73,0,0,1,2.88.71A10.29,10.29,0,0,1,88,72.11a.45.45,0,0,1,.08.65.46.46,0,0,1-.48.18l-.06,0c-.42-.12-.82-.29-1.25-.37s-.82-.2-1.25-.26a10.25,10.25,0,0,0-2.47-.14,11.61,11.61,0,0,0-2.42.37,8.22,8.22,0,0,0-1.16.37c-.2.08-.37.14-.55.23a2.72,2.72,0,0,0-.25.11c-.06,0-.09,0-.11.06l-.09,0,0,0a1.33,1.33,0,0,1-1.79-1.79,15,15,0,0,1,2.16-3.16,12.28,12.28,0,0,1,1.39-1.3,13,13,0,0,1,1.6-1.06,13.34,13.34,0,0,1,3.47-1.39,11.5,11.5,0,0,1,3.66-.31.47.47,0,0,1,.12.91Z", transform: "translate(0 -14.87)", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", null,
                    React.createElement("ellipse", { cx: "44.16", cy: "69.57", rx: "8.16", ry: "5.74", transform: "translate(-28.03 94.43) rotate(-86.42)", fill: "#390075" }),
                    React.createElement("path", { d: "M43,77.77c-2.93-.63-5-4.29-4.75-8.59.28-4.58,3.16-8.13,6.42-7.93a5.15,5.15,0,0,1,4,2.7,10.21,10.21,0,0,1,1.34,5.94h0c-.29,4.58-3.16,8.13-6.43,7.94A4.34,4.34,0,0,1,43,77.77Zm2.24-16.09a4,4,0,0,0-.59-.09c-3.07-.2-5.8,3.21-6.06,7.62s2,8.13,5.06,8.3,5.8-3.21,6.06-7.62h0a9.77,9.77,0,0,0-1.31-5.77A4.9,4.9,0,0,0,45.26,61.68Z", transform: "translate(0 -14.87)", fill: "#390075" })),
                React.createElement("g", null,
                    React.createElement("ellipse", { cx: "45.75", cy: "67.76", rx: "2.73", ry: "1.73", transform: "translate(-24.74 94.32) rotate(-86.42)", fill: "#fff" }),
                    React.createElement("path", { d: "M45.38,70.63c-.94-.2-1.62-1.48-1.54-3a4,4,0,0,1,.66-2,1.69,1.69,0,0,1,1.42-.8,1.65,1.65,0,0,1,1.31,1,3.67,3.67,0,0,1,.39,2c-.11,1.6-1,2.85-2.07,2.79C45.49,70.66,45.43,70.63,45.38,70.63Zm.68-5.43c-.06,0-.09,0-.14,0a1.37,1.37,0,0,0-1.14.66,3.68,3.68,0,0,0-.6,1.82c-.08,1.42.54,2.61,1.42,2.67s1.65-1,1.74-2.47h0A3.35,3.35,0,0,0,47,66,1.57,1.57,0,0,0,46.06,65.2Z", transform: "translate(0 -14.87)", fill: "#390075" }))))));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "linear-gradient", x1: "31.99", y1: "119.43", x2: "96.01", y2: "8.57", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { offset: "0", "stop-color": "#7f7afc" }),
                React.createElement("stop", { offset: "1", "stop-color": "#9d91ff" }))),
        React.createElement("title", null, "Untitled-4"),
        React.createElement("circle", { cx: "64", cy: "64", r: "64", fill: "url(#linear-gradient)" }),
        React.createElement("g", null,
            React.createElement("path", { d: "M109.2,75.88c-.38,19.27-21.35,30.55-46.95,30.05S16.1,93.38,16.48,74.1,38,35.67,63.57,36.15,109.57,56.6,109.2,75.88Z", fill: "#fff" }),
            React.createElement("g", { opacity: "0.2" },
                React.createElement("path", { d: "M62.7,105.88c-25.6-.5-46.15-12.56-45.78-31.83v-.37C20.72,89.15,39.38,98.62,62,99.08c25.57.47,46.53-10.75,47-30a28.85,28.85,0,0,1,.7,6.7C109.3,95.07,88.3,106.35,62.7,105.88Z", fill: "#390075" })),
            React.createElement("path", { d: "M47.2,105.47A53.84,53.84,0,0,1,28.93,98.1c-9.15-6-13.9-14.38-13.7-24s5.47-19.75,14.55-27.3A51.48,51.48,0,0,1,97,48.05c8.75,7.92,13.68,18.07,13.47,27.85s-5.25,17.77-14.62,23.47c-8.68,5.28-20.63,8-33.63,7.8A77.58,77.58,0,0,1,47.2,105.47ZM73.12,38.55a51.6,51.6,0,0,0-9.57-1.13c-25.83-.5-45.5,19-45.85,36.73-.27,14,11.48,24.87,29.85,28.9a75,75,0,0,0,14.73,1.65c26.57.5,45.34-11.35,45.7-28.82.17-9.06-4.45-18.53-12.68-26A48.07,48.07,0,0,0,73.12,38.55Z", fill: "#390075" }),
            React.createElement("path", { d: "M47.2,105.47A53.84,53.84,0,0,1,28.93,98.1c-9.15-6-13.9-14.38-13.7-24s5.47-19.75,14.55-27.3A51.48,51.48,0,0,1,97,48.05c8.75,7.92,13.68,18.07,13.47,27.85s-5.25,17.77-14.62,23.47c-8.68,5.28-20.63,8-33.63,7.8A77.58,77.58,0,0,1,47.2,105.47ZM73.12,38.55a51.6,51.6,0,0,0-9.57-1.13c-25.83-.5-45.5,19-45.85,36.73-.27,14,11.48,24.87,29.85,28.9a75,75,0,0,0,14.73,1.65c26.57.5,45.34-11.35,45.7-28.82.17-9.06-4.45-18.53-12.68-26A48.07,48.07,0,0,0,73.12,38.55Z", fill: "#390075" }),
            React.createElement("path", { d: "M66.62,50.25a10.34,10.34,0,0,1-2.57.15c-4.9-.25-6.62-2.95-6.82-4.85A22.48,22.48,0,0,0,66.62,50.25Z", fill: "#fe6dcb" }),
            React.createElement("path", { d: "M66.28,51.45a23.68,23.68,0,0,1-9.83-5,1.08,1.08,0,0,1-.42-.8,1.16,1.16,0,0,1,0-.32v-.05a33.3,33.3,0,0,1,.5-5.55,1.27,1.27,0,0,1,.88-1,1.21,1.21,0,0,1,1.27.34A21,21,0,0,0,71.5,44.9a1.28,1.28,0,0,1,.9.48,1.24,1.24,0,0,1,.25,1c-.3,1.87-1.8,4.17-5.15,5a5.63,5.63,0,0,1-.65.12,1.14,1.14,0,0,1-.45,0C66.35,51.47,66.3,51.47,66.28,51.45Zm.34-1.2ZM58.47,45a21.39,21.39,0,0,0,8.18,4,1.46,1.46,0,0,1,.2,0h0a4.57,4.57,0,0,0,2.72-1.7,23.28,23.28,0,0,1-10.95-4.75C58.53,43.42,58.47,44.28,58.47,45Z", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("path", { d: "M68.72,49.55a6.27,6.27,0,0,1-1.57.6,4.94,4.94,0,0,1-.53.1,22.51,22.51,0,0,1-9.37-4.7.74.74,0,0,1,0-.25A34.68,34.68,0,0,1,57.7,40a22.28,22.28,0,0,0,11.18,5.85,19.38,19.38,0,0,0,2.5.32A4.77,4.77,0,0,1,68.72,49.55Z", fill: "#33aef1" }),
                React.createElement("path", { d: "M66.5,50.4a23.11,23.11,0,0,1-9.38-4.7l0-.05v-.07c0-.08,0-.16,0-.23V45.3A34.68,34.68,0,0,1,57.52,40l0-.35.23.25a22.3,22.3,0,0,0,11.1,5.8,21.77,21.77,0,0,0,2.47.33h.18l0,.17a5,5,0,0,1-2.72,3.53,7.79,7.79,0,0,1-1.6.6c-.2,0-.38.07-.55.12H66.6S66.53,50.4,66.5,50.4Zm-9.1-4.93a22.53,22.53,0,0,0,9.18,4.6s0,0,0,0c.15,0,.3-.05.47-.1a6.94,6.94,0,0,0,1.53-.58h0a4.71,4.71,0,0,0,2.52-3.09,22,22,0,0,1-2.32-.3,22.71,22.71,0,0,1-11-5.65,30.62,30.62,0,0,0-.42,4.95v.05S57.4,45.42,57.4,45.47Z", fill: "#390075" })),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M68.72,49.55c.1-1.28.16-2.53.16-3.72a19.38,19.38,0,0,0,2.5.32A4.76,4.76,0,0,1,68.72,49.55Z", fill: "#fff" })),
            React.createElement("path", { d: "M71.38,46.15a19.38,19.38,0,0,1-2.5-.32A22.11,22.11,0,0,1,57.7,40c.35-2.13.85-4.5,1.47-6.8,0,0,2.43,4,9.48,6.85.88.35,1.82.7,2.85,1a28.77,28.77,0,0,1-.1,5C71.4,46.1,71.4,46.12,71.38,46.15Z", fill: "#fdd800" }),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M71.38,46.15a19.38,19.38,0,0,1-2.5-.32,53.45,53.45,0,0,0-.26-5.78c.88.35,1.83.7,2.85,1a28.82,28.82,0,0,1-.09,5C71.4,46.1,71.4,46.12,71.38,46.15Z", fill: "#fff" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M71.5,41.08c-1-.33-2-.66-2.85-1-7.05-2.88-9.47-6.85-9.47-6.85a40.73,40.73,0,0,1,2.4-6.82,18.71,18.71,0,0,0,5.8,6A13.32,13.32,0,0,0,70.78,34,69.92,69.92,0,0,1,71.5,41.08Z", fill: "#b177ea" }),
                React.createElement("path", { d: "M71.68,41.3l-.23-.08c-1-.3-2-.65-2.85-1-7-2.88-9.52-6.88-9.55-6.93l0-.05,0-.07a44,44,0,0,1,2.4-6.85l.15-.3.15.3a18.51,18.51,0,0,0,5.72,5.92A14,14,0,0,0,70.8,33.8l.1,0,0,.09a67.8,67.8,0,0,1,.72,7.13ZM59.35,33.17c.35.5,2.92,4.1,9.35,6.73.82.35,1.7.65,2.6,1a65.28,65.28,0,0,0-.7-6.75,15,15,0,0,1-3.35-1.58,18.65,18.65,0,0,1-5.67-5.77A46.38,46.38,0,0,0,59.35,33.17Z", fill: "#390075" })),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M71.5,41.08c-1-.33-2-.66-2.85-1a51.57,51.57,0,0,0-1.3-7.7,13.68,13.68,0,0,0,3.4,1.6A63.42,63.42,0,0,1,71.5,41.08Z", fill: "#fff" })),
            React.createElement("path", { d: "M70.8,33.8a13.85,13.85,0,0,1-3.4-1.6,18.28,18.28,0,0,1-5.8-6A11.47,11.47,0,0,1,64,22.6a2.2,2.2,0,0,1,1.65-.7C68.05,22,69.85,27.75,70.8,33.8Z", fill: "#fe6dcb" }),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M71.1,34.05a13.68,13.68,0,0,1-3.4-1.6,47.27,47.27,0,0,0-3.43-9.6,2.25,2.25,0,0,1,1.65-.7C68.35,22.25,70.15,28,71.1,34.05Z", fill: "#fff" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M70.55,35l-.1,0a18.45,18.45,0,0,1-9.77-8.08,1,1,0,0,1,0-.92c1.58-3.4,3.2-5,5-4.9,3.45.17,5.26,7.05,6.16,12.77a1,1,0,0,1-.35.93A1.09,1.09,0,0,1,70.55,35Zm-7.83-8.64a17.4,17.4,0,0,0,6.75,6.05c-1.25-6.71-3-9.26-3.94-9.3C64.93,23.05,63.92,23.9,62.72,26.33Z", fill: "#390075" }),
                React.createElement("path", { d: "M71.28,42.08s-.06,0-.08,0c-9.5-2.93-12.75-8.1-12.87-8.3a1.1,1.1,0,0,1-.13-.8,45.32,45.32,0,0,1,2.45-7,1,1,0,0,1,.88-.57,1,1,0,0,1,.92.52c0,.05,3,5.35,8.63,7.13a1,1,0,0,1,.7.8,69.43,69.43,0,0,1,.75,7.22,1,1,0,0,1-.41.85A1.29,1.29,0,0,1,71.28,42.08ZM60.28,33c.8,1,3.72,4.35,10.12,6.62-.12-1.59-.3-3.24-.55-4.9a18.16,18.16,0,0,1-8.1-6.22C61.25,29.83,60.75,31.35,60.28,33Z", fill: "#390075" }),
                React.createElement("path", { d: "M68.12,46.72A23.23,23.23,0,0,1,57,40.7a1.06,1.06,0,0,1-.25-.85,66.79,66.79,0,0,1,1.5-6.9,1,1,0,0,1,.83-.73,1,1,0,0,1,1,.48s3.05,4.75,11.75,7.42a1.07,1.07,0,0,1,.73.93,34.31,34.31,0,0,1-.1,5.15c0,.07,0,.15,0,.2a1,1,0,0,1-1.05.77A19.8,19.8,0,0,1,68.12,46.72Zm3.26-.57ZM58.8,39.65a21.48,21.48,0,0,0,11.67,5.43,30.75,30.75,0,0,0,0-3.23,26.13,26.13,0,0,1-10.85-6.42C59.33,36.83,59,38.28,58.8,39.65Z", fill: "#390075" }),
                React.createElement("path", { d: "M66.32,51.22a23.74,23.74,0,0,1-9.72-4.87.92.92,0,0,1-.35-.65,1,1,0,0,1,0-.3v0a35.14,35.14,0,0,1,.5-5.5,1,1,0,0,1,1.73-.52,21.46,21.46,0,0,0,13,5.84,1.07,1.07,0,0,1,.72.38,1,1,0,0,1,.2.8c-.27,1.8-1.75,4-5,4.8a5.74,5.74,0,0,1-.63.12.77.77,0,0,1-.37,0S66.35,51.22,66.32,51.22Zm.3-1Zm-8.4-5.17a21.92,21.92,0,0,0,8.43,4.15,1.78,1.78,0,0,1,.28,0h0A4.7,4.7,0,0,0,70,47.05a23.08,23.08,0,0,1-11.55-5A20.39,20.39,0,0,0,58.22,45.08Z", fill: "#390075" }),
                React.createElement("path", { d: "M61.92,51.15c-3.87-.85-5.5-3.35-5.7-5.47a1,1,0,0,1,.55-1,1,1,0,0,1,1.13.12,21.24,21.24,0,0,0,8.85,4.45l.1,0a1,1,0,0,1,.8,1,1,1,0,0,1-.82,1,11.14,11.14,0,0,1-2.8.15A12.21,12.21,0,0,1,61.92,51.15Z", fill: "#390075" })),
            React.createElement("path", { d: "M62,51.38c-3.8-.83-5.72-3.3-6-5.68,0-.1,0-.2,0-.3v0a25,25,0,0,1,.15-3.05c.08-.62.16-1.27.26-1.95l0-.12c0-.15.05-.28.08-.43A65.14,65.14,0,0,1,58,32.88a40.84,40.84,0,0,1,2.47-7c1.63-3.5,3.33-5.15,5.2-5.05,3.6.2,5.45,7.15,6.38,13A70,70,0,0,1,72.78,41a33.73,33.73,0,0,1-.1,5.2c0,.07,0,.15,0,.2h0a1.84,1.84,0,0,0-.05.25.68.68,0,0,0,0,.12,1,1,0,0,0,0,.23,1.31,1.31,0,0,1,0,.15c0,.07,0,.15-.07.2s0,.1-.05.12l-.15.33s0,.05,0,.07-.1.18-.13.25l0,.1,0,0-.15.22-.08.13-.2.27a.35.35,0,0,1,0,.08,2.44,2.44,0,0,1-.27.3l0,0-.28.27-.07,0,0,0c-.1.07-.17.17-.27.25l-.08,0a9.39,9.39,0,0,1-.8.55l-.05,0-.07,0-.18.1s-.07,0-.1,0l-.17.07L68.7,51l-.15.08c-.1,0-.23.07-.35.12l0,0a.88.88,0,0,0-.15,0l-.43.12a.18.18,0,0,1-.12,0,5.74,5.74,0,0,1-.63.12,11.22,11.22,0,0,1-2.82.15A10.92,10.92,0,0,1,62,51.38Zm3.62-28.05H65.5c-.4,0-1.47.7-2.8,3.6a42.47,42.47,0,0,0-2.32,6.62c-.6,2.23-1.1,4.53-1.46,6.68a3,3,0,0,0,0,.4l0,.12c-.1.65-.18,1.28-.23,1.85a20.16,20.16,0,0,0-.15,2.7v.18c.15,1.57,1.73,3.5,5.63,3.7a9.28,9.28,0,0,0,2.28-.13,2.16,2.16,0,0,0,.44-.1l.08,0a1.76,1.76,0,0,0,.3-.1l.12,0a1.09,1.09,0,0,0,.25-.1l.08,0c.1,0,.17-.07.25-.12l.17-.08.1-.05,0,0a.1.1,0,0,1,.06,0c.17-.1.34-.22.52-.35l0,0,.18-.15h0l0,0a1,1,0,0,0,.17-.18l0,0c0-.08.12-.13.17-.2l0,0a1.3,1.3,0,0,1,.1-.15l0-.05a.44.44,0,0,0,.1-.15l0-.08a.41.41,0,0,0,.08-.12l0,0a1.05,1.05,0,0,1,.08-.18l0-.07a.69.69,0,0,0,0-.13l0-.07s0-.08,0-.1l0-.08a1,1,0,0,1,0-.12.09.09,0,0,1,0-.08v0a31.82,31.82,0,0,0,.1-4.78,62.8,62.8,0,0,0-.73-7C68.32,26.55,66.5,23.52,65.57,23.33Zm4.36,25.39Zm.22-2.82Z", fill: "#390075" }),
            React.createElement("path", { d: "M81.4,46.65s4.22-16,10.82-15.6,10.16,23.5,9.43,29C101.68,60,91.53,60,81.4,46.65Z", fill: "#fff" }),
            React.createElement("path", { d: "M81,46.55a6.38,6.38,0,0,1,.15-3.43A18.13,18.13,0,0,1,82.35,40c.47-1,.93-2,1.45-3a28.18,28.18,0,0,1,1.75-2.92,13.42,13.42,0,0,1,2.37-2.65,6.52,6.52,0,0,1,3.6-1.6h.8l.3,0c.2,0,.38.08.58.13a1.56,1.56,0,0,1,.52.2,5.84,5.84,0,0,1,1.7,1.15,12,12,0,0,1,2.15,2.9,31.26,31.26,0,0,1,2.53,6.25,63.2,63.2,0,0,1,1.57,6.42c.43,2.15.78,4.33,1,6.53,0,.55.13,1.1.15,1.65s.15,1.1.2,1.65a6.52,6.52,0,0,1-.07,1.7,3.11,3.11,0,0,1-.9,1.67.53.53,0,0,1-.75,0l0,0,0-.05a4.11,4.11,0,0,1-.72-1.58,8.06,8.06,0,0,1-.15-1.55c0-.52,0-1.05,0-1.57l-.15-1.58c-.22-2.1-.57-4.22-1-6.3a63.17,63.17,0,0,0-1.53-6.17,31.86,31.86,0,0,0-2.32-5.78,9.69,9.69,0,0,0-1.68-2.3,3.23,3.23,0,0,0-1-.65.68.68,0,0,0-.23-.07c-.07,0-.15,0-.22,0l-.13,0H91.7a4.3,4.3,0,0,0-2.23,1,11.31,11.31,0,0,0-1.92,2.18A24.6,24.6,0,0,0,86,38.2a25,25,0,0,0-1.27,2.85c-.35,1-.7,2-1.13,3a7.7,7.7,0,0,1-1.8,2.78l0,0a.48.48,0,0,1-.68,0A.62.62,0,0,0,81,46.55Z", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", null,
                    React.createElement("path", { d: "M87.22,45.62s1.5-8,4.33-7.62,4.77,12,4.57,14.72C96.12,52.7,91.8,52.53,87.22,45.62Z", fill: "#fe6dcb" }),
                    React.createElement("path", { d: "M95.55,52.8c-1.32-.3-4.8-1.55-8.47-7.08l0,0,0-.07c0-.33,1.55-8.13,4.5-7.75s4.93,12.27,4.73,14.9v.17H96.1A1.66,1.66,0,0,0,95.55,52.8ZM87.4,45.58c3.95,5.92,7.72,6.82,8.57,7,.13-3.08-1.85-13.8-4.35-14.35a.13.13,0,0,1-.09,0C89,37.85,87.55,44.83,87.4,45.58Z", fill: "#390075" })),
                React.createElement("path", { d: "M95.38,53.85c-1.53-.33-5.35-1.73-9.2-7.55a1.21,1.21,0,0,1-.18-.92c.4-2.16,2-9.08,5.7-8.63,1.18.15,2.92,1.08,4.5,7.4a35.5,35.5,0,0,1,1.2,8.65A1.23,1.23,0,0,1,96.1,54,2.89,2.89,0,0,1,95.38,53.85Zm-6.83-8.5c2.53,3.65,4.88,5.12,6.28,5.72a46.3,46.3,0,0,0-1-6c-1-4.4-2.15-5.7-2.45-5.83C90.68,39.15,89.28,41.9,88.55,45.35Z", fill: "#390075" })),
            React.createElement("path", { d: "M46.05,44.78s-2.5-16.4-9.1-16.65S24.37,50.43,24.5,55.9C24.5,55.9,34.58,57,46.05,44.78Z", fill: "#fff" }),
            React.createElement("path", { d: "M45.65,44.83a8.34,8.34,0,0,1-1.5-2.95c-.32-1-.55-2.05-.8-3.05a23.6,23.6,0,0,0-1-3,23,23,0,0,0-1.3-2.8,11.93,11.93,0,0,0-1.7-2.37,4.2,4.2,0,0,0-2.1-1.28l-.28,0-.12,0h-.13l-.22,0c-.08,0-.15,0-.25.05a3.71,3.71,0,0,0-1,.55,9.52,9.52,0,0,0-1.92,2.1,31.05,31.05,0,0,0-2.93,5.47,63.52,63.52,0,0,0-2.17,6c-.63,2-1.18,4.1-1.65,6.18-.13.52-.23,1-.33,1.55s-.12,1-.2,1.57a6.61,6.61,0,0,1-.32,1.53,4.25,4.25,0,0,1-.88,1.47l0,0a.53.53,0,0,1-.75,0l0,0a3.06,3.06,0,0,1-.7-1.75,5.36,5.36,0,0,1,.1-1.7c.12-.55.27-1.08.37-1.63s.23-1.07.33-1.62c.47-2.15,1.05-4.28,1.7-6.38s1.4-4.17,2.25-6.22a33.14,33.14,0,0,1,3.17-5.95A11.74,11.74,0,0,1,33.7,28,5.58,5.58,0,0,1,35.53,27a4.9,4.9,0,0,1,.55-.13,5.48,5.48,0,0,1,.57-.05H37c.1,0,.18,0,.28,0l.52.07a6.77,6.77,0,0,1,3.4,2,13.34,13.34,0,0,1,2.08,2.9,30.08,30.08,0,0,1,1.45,3.1c.4,1.05.75,2.1,1.12,3.15a15.77,15.77,0,0,1,.85,3.22,6.44,6.44,0,0,1-.22,3.43.48.48,0,0,1-.63.27.84.84,0,0,1-.15-.14Z", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", null,
                    React.createElement("path", { d: "M40.62,43.35s-.92-8.25-4-8.28S30.37,46.52,30.35,49.3C30.35,49.28,35.05,49.67,40.62,43.35Z", fill: "#fe6dcb" }),
                    React.createElement("path", { d: "M30.17,49.45V49.3c0-2.5,2.38-11.15,4.93-13.65a2.2,2.2,0,0,1,1.5-.75c3.2.05,4.15,8.1,4.2,8.43v.07l0,.05c-5.55,6.33-10.23,6-10.42,6Zm6.75-14.17a1.06,1.06,0,0,0-.32,0,1.94,1.94,0,0,0-1.28.65c-2.42,2.4-4.7,10.6-4.8,13.25.85,0,5.08-.32,9.93-5.82C40.35,42.5,39.45,35.83,36.92,35.28Z", fill: "#390075" })),
                React.createElement("path", { d: "M30.08,50.5a1.23,1.23,0,0,1-1-1.22c0-2.63,2.38-11.6,5.25-14.4a3.12,3.12,0,0,1,2.27-1.05c4,.05,5.08,7.82,5.26,9.39a1.35,1.35,0,0,1-.3,1c-5.93,6.75-11.1,6.37-11.33,6.37C30.2,50.53,30.12,50.53,30.08,50.5ZM36.7,36.33h-.1c-.25,0-1.5.9-3.1,5.27a38.64,38.64,0,0,0-1.72,6.3c1.57-.35,4.37-1.47,7.55-4.95C38.88,39.83,37.75,36.55,36.7,36.33Z", fill: "#390075" })),
            React.createElement("path", { d: "M29.15,68.5C27.57,67.68,26,67,24.4,66.3a50.33,50.33,0,0,0-4.88-1.7,49.46,49.46,0,0,0-5-1.17c-.85-.18-1.7-.28-2.57-.43-.43-.1-.88-.1-1.31-.17s-.87-.13-1.32-.2c.43-.1.88-.18,1.32-.25A12.13,12.13,0,0,1,12,62.2a18.72,18.72,0,0,1,2.7,0,22.44,22.44,0,0,1,5.32.9,22.89,22.89,0,0,1,5,2.1A17.73,17.73,0,0,1,29.15,68.5Z", fill: "#390075" }),
            React.createElement("path", { d: "M28.45,73c-1.75-.38-3.45-.68-5.17-.88a47.06,47.06,0,0,0-5.15-.35c-1.73,0-3.43,0-5.15.2-.88,0-1.73.18-2.6.28-.45,0-.88.12-1.3.18l-1.33.17c.4-.2.8-.4,1.2-.57a9.58,9.58,0,0,1,1.25-.5,21.13,21.13,0,0,1,2.58-.75,24.18,24.18,0,0,1,5.37-.55,23.57,23.57,0,0,1,5.35.7A16,16,0,0,1,28.45,73Z", fill: "#390075" }),
            React.createElement("path", { d: "M28.67,78.7a44.77,44.77,0,0,0-5.22.3,45.13,45.13,0,0,0-5.1.8c-1.68.38-3.35.78-5,1.32-.82.26-1.65.56-2.47.85a12.07,12.07,0,0,0-1.23.48c-.4.15-.82.32-1.25.45.35-.3.7-.55,1.05-.83a11.47,11.47,0,0,1,1.1-.77A22.52,22.52,0,0,1,12.92,80,23.24,23.24,0,0,1,18,78.27a24.84,24.84,0,0,1,5.38-.5A17.18,17.18,0,0,1,28.67,78.7Z", fill: "#390075" }),
            React.createElement("path", { d: "M99.35,69.53a16.15,16.15,0,0,1,4.53-2.88,23.66,23.66,0,0,1,5.15-1.6,23,23,0,0,1,5.37-.37,18.47,18.47,0,0,1,2.68.3,9.44,9.44,0,0,1,1.3.3c.42.12.87.22,1.27.37l-1.32.08c-.45,0-.88,0-1.33,0-.87,0-1.75.07-2.6.17a50.81,50.81,0,0,0-5.1.68,42.87,42.87,0,0,0-5,1.22A45.8,45.8,0,0,0,99.35,69.53Z", fill: "#390075" }),
            React.createElement("path", { d: "M99.62,74a16.47,16.47,0,0,1,5.13-1.6,22.69,22.69,0,0,1,5.4-.2,22.43,22.43,0,0,1,5.3,1,20.88,20.88,0,0,1,2.5,1c.4.18.8.4,1.2.63s.78.45,1.15.7c-.45-.08-.87-.18-1.3-.3s-.85-.23-1.28-.31c-.84-.17-1.69-.37-2.55-.52a44.55,44.55,0,0,0-5.1-.68c-1.69-.15-3.42-.17-5.15-.15S101.4,73.82,99.62,74Z", fill: "#390075" }),
            React.createElement("path", { d: "M98.82,79.75a16.87,16.87,0,0,1,5.35-.43,22.76,22.76,0,0,1,5.3,1,22.08,22.08,0,0,1,4.93,2.2,18.26,18.26,0,0,1,2.22,1.53c.35.27.7.57,1,.87s.65.6,1,.93c-.42-.18-.82-.38-1.19-.57a12.85,12.85,0,0,0-1.18-.58c-.8-.37-1.57-.75-2.37-1.07a47.62,47.62,0,0,0-4.83-1.8,45.75,45.75,0,0,0-5-1.28C102.32,80.2,100.6,79.93,98.82,79.75Z", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", { opacity: "0.2" },
                    React.createElement("path", { d: "M77,82.78c-2.1,2.6-4.33,3.42-6.35,3.34-4-.12-7.25-3.72-7.25-3.72-2.73,2.7-5.15,3.72-7.15,3.85a8,8,0,0,1-6.5-3c8,1.23,11.8-3,11.8-3l3.62-.07C68.85,85.5,76.78,82.88,77,82.78Z", fill: "#390075" })),
                React.createElement("path", { d: "M70.68,86.12a21.75,21.75,0,0,1-2.56,5.53c-1.24,1.85-2.77,3.25-4.47,3.28S60.33,93.62,59,91.8a20.8,20.8,0,0,1-2.75-5.52c2-.13,4.42-1.16,7.15-3.85C63.42,82.43,66.68,86,70.68,86.12Z", fill: "#390075" }),
                React.createElement("g", null,
                    React.createElement("path", { d: "M68.12,91.68c-1.24,1.85-2.77,3.25-4.47,3.27s-3.32-1.3-4.62-3.12a4.81,4.81,0,0,1,4.5-3.13A4.76,4.76,0,0,1,68.12,91.68Z", fill: "#fb64c0" }),
                    React.createElement("path", { d: "M62.85,95a7.25,7.25,0,0,1-4-3.1l0-.05,0-.07a5.06,5.06,0,0,1,9.37-.16l0,.08,0,0c-1.45,2.15-3,3.3-4.6,3.35A3.25,3.25,0,0,1,62.85,95Zm-3.68-3.22c1,1.4,2.63,3,4.48,3S67,93.05,68,91.62a4.69,4.69,0,0,0-4.45-2.82A4.76,4.76,0,0,0,59.17,91.78Z", fill: "#390075" })),
                React.createElement("g", null,
                    React.createElement("path", { d: "M59.4,76.7c.8-1.1,6.7-1.4,7.72-.15S65.3,81,63.35,81.05,58.5,77.93,59.4,76.7Z", fill: "#390075" }),
                    React.createElement("path", { d: "M62.58,82.22a7.06,7.06,0,0,1-4.16-3.37,2.55,2.55,0,0,1,0-2.85h0c.85-1.18,3.4-1.43,4.82-1.45,1.7,0,3.93.13,4.85,1.28a2.59,2.59,0,0,1,.15,2.87c-.8,1.73-2.94,3.6-4.84,3.65C63.1,82.3,62.85,82.28,62.58,82.22ZM60.5,77.4a3.92,3.92,0,0,0,.92,1.32,3.45,3.45,0,0,0,1.91,1.1,3.47,3.47,0,0,0,2-1.27,3.3,3.3,0,0,0,.75-1.25C65.2,76.82,61.6,76.9,60.5,77.4Zm5.7,0Z", fill: "#390075" }),
                    React.createElement("g", null,
                        React.createElement("ellipse", { cx: "63.32", cy: "76.6", rx: "3.2", ry: "0.85", transform: "translate(-1.42 1.19) rotate(-1.07)", fill: "#fff" }),
                        React.createElement("path", { d: "M61.15,77.43c-.72-.15-1.2-.4-1.22-.78s.35-.57,1-.77a9.77,9.77,0,0,1,2.3-.31,9.5,9.5,0,0,1,2.32.2c.7.18,1.07.43,1.07.73h0c0,.67-1.67,1-3.35,1.07A8,8,0,0,1,61.15,77.43Zm4.25-1.36a9.44,9.44,0,0,0-2.1-.17,10.44,10.44,0,0,0-2.22.27c-.65.18-.83.38-.83.48s1,.67,3.08.62,3-.5,3-.75c0-.07-.18-.27-.83-.42A.27.27,0,0,1,65.4,76.07Z", fill: "#390075" }))),
                React.createElement("path", { d: "M54.08,87.25A9.76,9.76,0,0,1,48.92,84l0-.06a3.46,3.46,0,0,1-.5-.67,1.13,1.13,0,0,1,.32-1.58,1.16,1.16,0,0,1,1.58.33h0s.1.15.3.4l0,0a6.94,6.94,0,0,0,5.55,2.62c2-.15,4.21-1.32,6.43-3.52a1.15,1.15,0,0,1,.82-.32,1.1,1.1,0,0,1,.8.37s3,3.23,6.45,3.35c2,.07,3.8-.93,5.43-2.93l0,0a0,0,0,0,1,0,0c.13-.17.28-.35.4-.52a1.13,1.13,0,0,1,1.83,1.32c-.18.23-.33.45-.5.68,0,0,0,0-.06.07-2.07,2.55-4.5,3.8-7.22,3.73-3.22-.1-5.93-2.13-7.22-3.28a12.27,12.27,0,0,1-7.08,3.43A10.66,10.66,0,0,1,54.08,87.25Z", fill: "#390075" }),
                React.createElement("path", { d: "M62.65,96a8.13,8.13,0,0,1-4.55-3.5,22,22,0,0,1-2.9-5.85,1.18,1.18,0,0,1,.13-1,1.14,1.14,0,0,1,.84-.5c2-.15,4.21-1.32,6.43-3.53a1.15,1.15,0,0,1,.82-.32,1.07,1.07,0,0,1,.8.38s3,3.22,6.45,3.35a1.05,1.05,0,0,1,.88.47,1.13,1.13,0,0,1,.17,1A21.7,21.7,0,0,1,69,92.3c-1.63,2.42-3.5,3.75-5.41,3.77A4.15,4.15,0,0,1,62.65,96ZM57.8,87.18a18.31,18.31,0,0,0,2.15,4c1.25,1.73,2.58,2.68,3.7,2.65S66,92.8,67.2,91a19.42,19.42,0,0,0,2-4,.08.08,0,0,1-.08,0A13.3,13.3,0,0,1,63.4,84,13.22,13.22,0,0,1,57.8,87.18Z", fill: "#390075" })),
            React.createElement("path", { d: "M85.5,65.07a25,25,0,0,0-2.7,1.1,15.66,15.66,0,0,0-2.42,1.45c-.38.25-.73.58-1.08.85l-.5.48a2,2,0,0,0-.25.25l-.22.25a10.64,10.64,0,0,0-1.58,2.22l-1.6-1.57.18-.1.17-.08c.1,0,.23-.07.33-.12a5,5,0,0,1,.62-.2,8.13,8.13,0,0,1,1.3-.28,10.08,10.08,0,0,1,2.63-.07,8.72,8.72,0,0,1,2.52.63,9,9,0,0,1,2.2,1.24.4.4,0,0,1,.08.58.42.42,0,0,1-.43.15l0,0c-.37-.1-.72-.25-1.1-.32s-.72-.18-1.1-.22a8.8,8.8,0,0,0-2.17-.13,10.85,10.85,0,0,0-2.13.32,8.06,8.06,0,0,0-1,.33,4.34,4.34,0,0,0-.48.2,2.14,2.14,0,0,0-.22.1s-.08,0-.1.05l-.08,0,0,0a1.16,1.16,0,0,1-1.58-.5,1.19,1.19,0,0,1,0-1.07,13.35,13.35,0,0,1,1.9-2.77,10.46,10.46,0,0,1,1.23-1.16,10.9,10.9,0,0,1,1.4-.92,11.48,11.48,0,0,1,3-1.23,9.93,9.93,0,0,1,3.22-.27.42.42,0,0,1,.38.45.43.43,0,0,1-.28.35Z", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", null,
                    React.createElement("ellipse", { cx: "46.58", cy: "68.89", rx: "7.17", ry: "5.05", transform: "translate(-25.08 111.08) rotate(-86.42)", fill: "#390075" }),
                    React.createElement("path", { d: "M45.58,76.1c-2.58-.55-4.41-3.78-4.18-7.55.25-4,2.78-7.15,5.65-7A4.55,4.55,0,0,1,50.6,64a9,9,0,0,1,1.18,5.22h0c-.25,4-2.78,7.15-5.66,7A4.93,4.93,0,0,1,45.58,76.1Zm2-14.15a3.07,3.07,0,0,0-.53-.07c-2.7-.18-5.1,2.82-5.32,6.69s1.75,7.15,4.45,7.31,5.1-2.83,5.32-6.7h0a8.48,8.48,0,0,0-1.15-5.08A4.26,4.26,0,0,0,47.55,62Z", fill: "#390075" })),
                React.createElement("g", null,
                    React.createElement("ellipse", { cx: "47.98", cy: "67.3", rx: "2.4", ry: "1.52", transform: "translate(-22.19 110.98) rotate(-86.42)", fill: "#fff" }),
                    React.createElement("path", { d: "M47.65,69.82c-.82-.17-1.42-1.3-1.35-2.62a3.4,3.4,0,0,1,.58-1.75,1.47,1.47,0,0,1,1.25-.7,1.44,1.44,0,0,1,1.15.85,3.27,3.27,0,0,1,.35,1.8c-.1,1.4-.9,2.5-1.83,2.45C47.75,69.85,47.7,69.82,47.65,69.82Zm.6-4.77-.13,0a1.18,1.18,0,0,0-1,.57,3.3,3.3,0,0,0-.52,1.6c-.08,1.25.47,2.3,1.25,2.35s1.45-.93,1.53-2.18h0a3,3,0,0,0-.33-1.65A1.33,1.33,0,0,0,48.25,65.05Z", fill: "#390075" }))))));
};

var Icon$S = function (props) {
    var id = uniqueId("svg");
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("g", { clipPath: "url(#" + id + ")" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.4825 9.78846C44.9985 10.9575 44.934 12.0841 44.3506 13.0946C43.7672 14.105 42.8238 14.7242 41.5534 14.8619C40.2449 15.0037 38.5223 14.6345 36.5148 13.4755C34.5072 12.3164 33.3262 11.0092 32.7948 9.80511C32.2788 8.63603 32.3433 7.50943 32.9267 6.49898C33.5101 5.48854 34.4535 4.86941 35.7239 4.73171C37.0324 4.5899 38.755 4.95904 40.7625 6.1181C42.7701 7.27716 43.9511 8.58438 44.4825 9.78846ZM46.7339 8.79481C45.9315 6.97669 44.3045 5.3214 41.993 3.98688C39.6815 2.65235 37.4345 2.07098 35.4588 2.28512C33.445 2.50338 31.7896 3.54667 30.7955 5.26852C29.8014 6.99038 29.7255 8.94565 30.5434 10.7988C31.3458 12.6169 32.9728 14.2722 35.2843 15.6067C37.5958 16.9412 39.8428 17.5226 41.8185 17.3085C43.8323 17.0902 45.4877 16.0469 46.4818 14.325C47.4759 12.6032 47.5518 10.6479 46.7339 8.79481Z", fill: "#FFAF00" }),
            React.createElement("path", { d: "M39.2061 12.466C39.4779 11.9952 39.3166 11.3932 38.8458 11.1213L37.3879 10.2796C36.9171 10.0078 36.315 10.1691 36.0432 10.6399L33.7667 14.5829C33.4949 15.0537 33.6562 15.6558 34.127 15.9276L35.5849 16.7693C36.0557 17.0411 36.6577 16.8798 36.9296 16.409L39.2061 12.466Z", fill: "#EB8C00" }),
            React.createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L36.9885 6.30023C36.5177 6.02841 35.9156 6.18972 35.6438 6.66054L34.4249 8.77169C34.1531 9.2425 34.3144 9.84453 34.7852 10.1164L40.2885 13.2937C40.7593 13.5655 41.3614 13.4042 41.6332 12.9334L42.8521 10.8222Z", fill: "#FFAF00" }),
            React.createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L38.2605 7.03465C37.7897 6.76282 37.1877 6.92413 36.9159 7.39495L35.9418 9.08208C35.67 9.5529 35.8313 10.1549 36.3021 10.4268L40.5333 12.8697C41.0041 13.1415 41.6062 12.9802 41.878 12.5093L42.8521 10.8222Z", fill: "#FFD800" }),
            React.createElement("path", { d: "M42.2502 9.90623C42.3862 9.67082 42.3055 9.3698 42.0701 9.23389L41.2265 8.74685C40.9911 8.61094 40.6901 8.6916 40.5542 8.92701L39.0879 11.4666C38.952 11.702 39.0327 12.0031 39.2681 12.139L40.1117 12.626C40.3471 12.7619 40.6481 12.6813 40.784 12.4458L42.2502 9.90623Z", fill: "#FFE971" }),
            React.createElement("path", { d: "M14.4276 37.9808C19.0474 45.9826 29.0239 48.079 37.1341 43.3966C45.2442 38.7142 48.4169 29.0261 43.7971 21.0244C39.1773 13.0227 29.2008 10.9262 21.0907 15.6086C12.9805 20.291 9.80785 29.9791 14.4276 37.9808Z", fill: "#EB8C00" }),
            React.createElement("path", { d: "M12.9928 35.4957C17.6126 43.4975 27.5891 45.5939 35.6993 40.9115C43.8094 36.2291 46.9821 26.541 42.3623 18.5393C37.7425 10.5375 27.766 8.4411 19.6558 13.1235C11.5457 17.8059 8.37303 27.494 12.9928 35.4957Z", fill: "#FFD800" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7043 22.6394C12.3316 20.7707 13.3072 19.0005 14.5942 17.4155L44.4474 25.2401C44.6009 27.2114 44.3704 29.1765 43.7923 31.0497L11.7043 22.6394ZM39.463 38.0997C40.3335 37.2422 41.1005 36.3113 41.7564 35.3244L10.887 27.2335C10.8573 28.381 10.9556 29.5386 11.1892 30.6891L39.463 38.0997Z", fill: "#FFE971" }),
            React.createElement("path", { d: "M15.0259 34.3218C19.0448 41.2826 27.6684 43.1382 34.6556 39.1041C41.6428 35.07 44.3477 26.674 40.3288 19.7131C36.31 12.7523 27.6863 10.8967 20.6991 14.9308C13.7119 18.9649 11.0071 27.3609 15.0259 34.3218Z", fill: "#FFC700" }),
            React.createElement("path", { d: "M16.5423 33.2959C20.044 39.3611 27.4985 40.8267 33.6123 37.2969C39.7261 33.7671 42.1841 26.5785 38.6824 20.5134C35.1806 14.4482 27.7262 12.9826 21.6123 16.5124C15.4985 20.0422 13.0406 27.2308 16.5423 33.2959Z", fill: "white" }),
            React.createElement("path", { d: "M19.6485 19.4094C18.7716 20.2171 20.1105 20.7851 21.1076 20.1316C22.9645 18.9145 25.1882 18.2126 27.5811 18.2248C31.0292 18.2423 34.1409 19.7388 36.319 22.1137C37.0584 22.9199 38.4114 22.545 37.8645 21.5976C34.5623 15.878 27.6235 14.4433 21.9702 17.7072C21.1156 18.2006 20.3393 18.7732 19.6485 19.4094Z", fill: "#E7E8E8" }),
            React.createElement("path", { d: "M34.6395 35.043C35.5545 34.2788 34.2368 33.6843 33.2067 34.2845C31.5603 35.2437 29.6432 35.7884 27.5946 35.7783C24.3428 35.7623 21.4084 34.3516 19.3546 32.1127C18.6572 31.3525 17.381 31.706 17.8968 32.5993C21.0104 37.9921 27.5541 39.344 32.8862 36.2656C33.5169 35.9014 34.1025 35.4916 34.6395 35.043Z", fill: "#E7E8E8" }),
            React.createElement("path", { d: "M32.5972 20.6118C32.801 20.2587 32.6801 19.8071 32.3269 19.6033L32.0205 19.4263C31.6673 19.2225 31.2158 19.3434 31.0119 19.6966L28.0893 24.7587C27.8854 25.1118 28.0064 25.5633 28.3595 25.7672L28.666 25.9442C29.0191 26.148 29.4707 26.027 29.6745 25.6739L32.5972 20.6118Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M21.2036 27.5233C20.8098 27.6288 20.576 28.0336 20.6816 28.4275L20.7784 28.789C20.884 29.1828 21.2888 29.4166 21.6826 29.311L26.2569 28.0854C26.6507 27.9798 26.8844 27.575 26.7789 27.1812L26.682 26.8197C26.5765 26.4258 26.1717 26.1921 25.7778 26.2976L21.2036 27.5233Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M25.4809 25.6151C26.244 24.2934 27.8023 23.9359 29.053 24.658C30.3037 25.3801 30.7732 26.9084 30.0101 28.23C29.247 29.5517 27.6887 29.9093 26.438 29.1872C25.1873 28.4651 24.7178 26.9368 25.4809 25.6151Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M17.0126 14.6084C16.4241 14.2686 15.5801 14.6286 15.1275 15.4126L10.989 22.5807C10.5364 23.3647 10.6466 24.2756 11.2351 24.6154L11.8085 24.9464C12.397 25.2862 13.241 24.9262 13.6936 24.1422L17.8321 16.9741C18.2847 16.1901 18.1745 15.2792 17.586 14.9394L17.0126 14.6084Z", fill: "#EB8C00" }),
            React.createElement("path", { d: "M1.87053 28.4667C-1.14632 26.725 -0.193534 19.9443 3.7222 13.162C7.63794 6.37974 13.0338 2.16425 16.0507 3.90603C19.0675 5.64781 18.1147 12.4285 14.199 19.2108C10.2833 25.993 4.88739 30.2085 1.87053 28.4667Z", fill: "#FFC700" }),
            React.createElement("path", { d: "M3.24974 28.6111C0.902471 27.273 2.13775 21.219 5.79373 14.9665C9.44971 8.71396 14.1419 4.63067 16.4892 5.96878C18.8365 7.30688 17.6012 13.3609 13.9452 19.6134C10.2892 25.8659 5.59701 29.9492 3.24974 28.6111Z", fill: "#FFD800" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.32523 23.3938C2.57644 22.2148 2.99217 20.9038 3.55715 19.5196L17.6473 7.92463C17.7625 8.75342 17.6984 9.77478 17.4703 10.9308L2.32523 23.3938ZM15.6081 16.3772C15.9949 15.5396 16.3319 14.7209 16.6159 13.9331L2.04567 25.923C2.0571 26.4661 2.12846 26.9487 2.26274 27.3591L15.6081 16.3772Z", fill: "#FFE971" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: id },
                React.createElement("rect", { width: "48", height: "48", fill: "white", transform: "matrix(-1 0 0 1 48 0)" })))));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$Q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.99984 5.89661V6.27661C8.16984 5.94661 7.27984 5.77661 6.38984 5.77661C4.96985 5.77661 3.54985 6.20661 2.33985 7.06661C1.82985 7.42661 1.76985 8.15661 2.20985 8.59661L4.77985 11.1666H5.88984V12.2766C6.74984 13.1366 7.86984 13.5866 8.99984 13.6366V15.8966H6.99985C6.44984 15.8966 5.99985 16.3466 5.99985 16.8966V18.8966C5.99985 19.9966 6.89985 20.8966 7.99984 20.8966H17.9998C19.6598 20.8966 20.9998 19.5566 20.9998 17.8966V5.89661C20.9998 5.34661 20.5498 4.89661 19.9998 4.89661H9.99984C9.44984 4.89661 8.99984 5.34661 8.99984 5.89661ZM7.88984 11.3066V9.15661H5.60984L4.56985 8.11661C5.13985 7.89661 5.75985 7.77661 6.38984 7.77661C7.72984 7.77661 8.97985 8.29661 9.92984 9.23661L11.3398 10.6466L11.1398 10.8466C10.6298 11.3566 9.94984 11.6466 9.21984 11.6466C8.74985 11.6466 8.28984 11.5266 7.88984 11.3066ZM18.9998 17.8966C18.9998 18.4466 18.5498 18.8966 17.9998 18.8966C17.4498 18.8966 16.9998 18.4466 16.9998 17.8966V16.8966C16.9998 16.3466 16.5498 15.8966 15.9998 15.8966H10.9998V13.3066C11.5698 13.0766 12.0998 12.7366 12.5598 12.2766L12.7598 12.0766L15.5898 14.8966H16.9998V13.4866L10.9998 7.51661V6.89661H18.9998V17.8966Z" })));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M43.76,68.88l-5.15,17.8A24.76,24.76,0,0,1,22.45,87.8c-4.12-1.23-5.61-3.52-.87-4.92-8.93-2.6-11.57-9.26-3.39-7.81-12.32-7.33-11.3-15.95-1-10.8-6.45-7.62-5.46-16.55-.42-17.09a4.45,4.45,0,0,1,3.76,1.5A104.33,104.33,0,0,0,29,57.1c3.05,2.72,6.27,5.29,9.59,7.78Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("path", { d: "M38.44,65.11a10.06,10.06,0,0,1-3.16-1.62,31.91,31.91,0,0,1-2.73-2.19L29.88,59c-.89-.77-1.76-1.54-2.63-2.33q-2.59-2.36-5-4.88c-.81-.84-1.61-1.71-2.39-2.57a3.58,3.58,0,0,0-2.45-1.2,2.29,2.29,0,0,0-.69,0l-.33.07-.33.1A3.42,3.42,0,0,0,14.9,49a4.39,4.39,0,0,0-.79,1.2l-.15.34c0,.12-.07.24-.12.36s-.12.5-.18.75a10,10,0,0,0,0,3.19A14.06,14.06,0,0,0,14.43,58a19.31,19.31,0,0,0,3.39,5.7l.55.63.58.61c.19.2.41.38.61.57l.32.27.33.27c.21.17.42.36.63.55l.61.58a5.55,5.55,0,0,1,1,1.46h0a.34.34,0,0,1-.17.45.45.45,0,0,1-.16,0,4.61,4.61,0,0,1-.94-.21l-.43-.17-.4-.22c-.26-.15-.51-.32-.75-.49s-.47-.39-.69-.59-.43-.42-.64-.64L18,66.49c-.11-.11-.22-.21-.32-.32l-.62-.66c-.2-.22-.39-.45-.59-.68a21.1,21.1,0,0,1-3.7-6.21,16.47,16.47,0,0,1-.91-3.56,12.05,12.05,0,0,1,.06-3.74,7.62,7.62,0,0,1,.24-.94c.05-.16.09-.31.15-.47l.19-.45a6.25,6.25,0,0,1,1.13-1.69,4.87,4.87,0,0,1,1.76-1.16l.51-.17.51-.09a4.12,4.12,0,0,1,1-.06,5.39,5.39,0,0,1,3.65,1.78c.78.86,1.56,1.7,2.36,2.53q2.4,2.48,5,4.8c.85.78,1.71,1.54,2.59,2.29s1.75,1.5,2.67,2.2L35.07,61c.45.36.9.72,1.34,1.1s.87.75,1.27,1.18a8.22,8.22,0,0,1,1.11,1.41h0a.31.31,0,0,1-.11.43A.26.26,0,0,1,38.44,65.11Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M16.76,65.06a15.83,15.83,0,0,0-3.29-1.27,6.67,6.67,0,0,0-1.63-.2,2.4,2.4,0,0,0-1.28.33,1.12,1.12,0,0,0-.47.93,3.55,3.55,0,0,0,.27,1.44,10.41,10.41,0,0,0,1.84,2.88,18.32,18.32,0,0,0,2.59,2.46c.93.75,1.95,1.41,3,2.08,2,1.32,4.14,2.54,6.23,3.94a.29.29,0,0,1,.08.41.31.31,0,0,1-.31.13,22.61,22.61,0,0,1-7-2.9A26.46,26.46,0,0,1,13.66,73a23.68,23.68,0,0,1-2.79-2.7,12,12,0,0,1-2.15-3.39,5.15,5.15,0,0,1-.38-2.19,3,3,0,0,1,.33-1.24,2.77,2.77,0,0,1,.88-1A3.61,3.61,0,0,1,10.69,62a5.53,5.53,0,0,1,1.12-.14,8.69,8.69,0,0,1,2.07.25,17.66,17.66,0,0,1,3.66,1.4.88.88,0,0,1-.78,1.58Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M18.51,76.23a14.4,14.4,0,0,0-2.39-.36,5.87,5.87,0,0,0-1.12,0,3.39,3.39,0,0,0-.48.1,1.28,1.28,0,0,0-.37.16.59.59,0,0,0-.18.17.43.43,0,0,0-.05.19,1.15,1.15,0,0,0,.05.33,3,3,0,0,0,.18.42A6.38,6.38,0,0,0,15.63,79a12.38,12.38,0,0,0,2,1.34c.72.38,1.47.7,2.23,1l2.29.93c.77.32,1.55.63,2.35,1h0a.31.31,0,0,1,.14.41.32.32,0,0,1-.24.17A11.59,11.59,0,0,1,19.15,83a15.81,15.81,0,0,1-2.4-1.2A16.91,16.91,0,0,1,14.5,80.3a8.19,8.19,0,0,1-1.89-2.17,3.23,3.23,0,0,1-.44-1.69,2,2,0,0,1,.31-1,2.19,2.19,0,0,1,.72-.73,3.8,3.8,0,0,1,1.57-.53,7.8,7.8,0,0,1,1.44,0,15.71,15.71,0,0,1,2.69.4.88.88,0,0,1-.39,1.71Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M28.84,89.52c-4.36,0-8.16-1-9.91-2.43a2.43,2.43,0,0,1-1.14-2.4c.23-1.15,1.38-2,3.55-2.65a.88.88,0,0,1,.49,1.69c-2.16.64-2.31,1.27-2.31,1.29s.12.39.5.7c2.27,1.8,10.75,3.49,18.23.16a.88.88,0,0,1,.72,1.6A25.16,25.16,0,0,1,28.84,89.52Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M9.35,66.3v0c.54,2.68,4,6,8.66,8.74a43.9,43.9,0,0,0,5,2.52l4.37,1.68c.74,4.28-13.36-1-11.78-3.93a4.66,4.66,0,0,0-2.32.73c-.82.66-.29,1.63.91,2.65h0a28.23,28.23,0,0,0,9.6,4.72,26.09,26.09,0,0,0,4,.46c1.69,0,.59,3.81-8.12,0a1.69,1.69,0,0,1-.27-.11c-4.39,3,8.67,7.54,19.1,2.9l5.15-17.8-5.15-4c-2.59-1.94-5.11-3.93-7.55-6l-.83-.1a22.22,22.22,0,0,1,4.43,8.87,2.51,2.51,0,0,1-3.8,2.63c-7.85-5-13.94-11.79-16.54-22a10.27,10.27,0,0,0-1.34,8,15.48,15.48,0,0,0,1.93,4.81h0a26.65,26.65,0,0,0,4.55,5.56L25,71.08c1.93,6.83-13.82-3-13.88-8.32A3.17,3.17,0,0,0,9.35,66.3Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("path", { d: "M84.24,68.88l5.15,17.8a24.76,24.76,0,0,0,16.16,1.12c4.12-1.23,5.61-3.52.87-4.92,8.93-2.6,11.57-9.26,3.39-7.81,12.32-7.33,11.3-15.95,1-10.8,6.45-7.62,5.46-16.55.42-17.09a4.45,4.45,0,0,0-3.76,1.5A104.33,104.33,0,0,1,99,57.1c-3,2.72-6.27,5.29-9.59,7.78Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("path", { d: "M89.21,64.64a8.22,8.22,0,0,1,1.11-1.41c.4-.43.84-.8,1.27-1.18s.89-.74,1.34-1.1l1.37-1.06c.92-.7,1.8-1.45,2.67-2.2s1.74-1.51,2.59-2.29q2.56-2.32,5-4.8c.8-.83,1.58-1.67,2.36-2.53a5.39,5.39,0,0,1,3.65-1.78,4.12,4.12,0,0,1,1,.06l.51.09.51.17a4.87,4.87,0,0,1,1.76,1.16,6.25,6.25,0,0,1,1.13,1.69l.19.45c.06.16.1.31.15.47a7.62,7.62,0,0,1,.24.94,12.05,12.05,0,0,1,.06,3.74,16.47,16.47,0,0,1-.91,3.56,21.1,21.1,0,0,1-3.7,6.21c-.2.23-.39.46-.59.68l-.62.66-.32.32-.31.32c-.21.22-.42.44-.64.64s-.45.4-.69.59-.49.34-.75.49l-.4.22-.43.17a4.61,4.61,0,0,1-.94.21.35.35,0,0,1-.36-.31.47.47,0,0,1,0-.17h0a5.55,5.55,0,0,1,1-1.46l.61-.58c.21-.19.42-.38.63-.55l.33-.27.32-.27c.2-.19.42-.37.61-.57l.58-.61.55-.63a19.31,19.31,0,0,0,3.39-5.7,14.06,14.06,0,0,0,.81-3.17,10,10,0,0,0,0-3.19c-.06-.25-.1-.51-.18-.75s-.08-.24-.12-.36l-.15-.34a4.39,4.39,0,0,0-.79-1.2,3.42,3.42,0,0,0-1.12-.74l-.33-.1-.33-.07a2.29,2.29,0,0,0-.69,0,3.58,3.58,0,0,0-2.45,1.2c-.78.86-1.58,1.73-2.39,2.57q-2.45,2.52-5,4.88c-.87.79-1.74,1.56-2.63,2.33L95.45,61.3a31.91,31.91,0,0,1-2.73,2.19,10.06,10.06,0,0,1-3.16,1.62.3.3,0,0,1-.38-.22.29.29,0,0,1,0-.24Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M110.46,63.48a17.66,17.66,0,0,1,3.66-1.4,8.69,8.69,0,0,1,2.07-.25,5.53,5.53,0,0,1,1.12.14,3.61,3.61,0,0,1,1.14.51,2.77,2.77,0,0,1,.88,1,3,3,0,0,1,.33,1.24,5.15,5.15,0,0,1-.38,2.19,12,12,0,0,1-2.15,3.39,23.68,23.68,0,0,1-2.79,2.7,26.46,26.46,0,0,1-3.09,2.28,22.61,22.61,0,0,1-7,2.9.31.31,0,0,1-.36-.23.3.3,0,0,1,.13-.31c2.09-1.4,4.2-2.62,6.23-3.94,1-.67,2-1.33,3-2.08a18.32,18.32,0,0,0,2.59-2.46,10.41,10.41,0,0,0,1.84-2.88,3.55,3.55,0,0,0,.27-1.44,1.12,1.12,0,0,0-.47-.93,2.4,2.4,0,0,0-1.28-.33,6.67,6.67,0,0,0-1.63.2,15.83,15.83,0,0,0-3.29,1.27h0a.88.88,0,0,1-.78-1.58Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M109.1,74.52a15.71,15.71,0,0,1,2.69-.4,7.8,7.8,0,0,1,1.44,0,3.8,3.8,0,0,1,1.57.53,2.19,2.19,0,0,1,.72.73,2,2,0,0,1,.31,1,3.23,3.23,0,0,1-.44,1.69,8.19,8.19,0,0,1-1.89,2.17,16.91,16.91,0,0,1-2.25,1.54,15.81,15.81,0,0,1-2.4,1.2,11.59,11.59,0,0,1-5.24.79.3.3,0,0,1-.27-.34.32.32,0,0,1,.17-.24h0c.8-.39,1.58-.7,2.35-1l2.29-.93c.76-.31,1.51-.63,2.23-1a12.38,12.38,0,0,0,2-1.34,6.38,6.38,0,0,0,1.48-1.67,3,3,0,0,0,.18-.42,1.15,1.15,0,0,0,0-.33.43.43,0,0,0,0-.19.59.59,0,0,0-.18-.17,1.28,1.28,0,0,0-.37-.16,3.39,3.39,0,0,0-.48-.1,5.87,5.87,0,0,0-1.12,0,14.4,14.4,0,0,0-2.39.36h0a.88.88,0,1,1-.39-1.71Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M99.16,89.52a25,25,0,0,1-10.13-2,.88.88,0,1,1,.72-1.6c7.48,3.33,16,1.64,18.23-.16.38-.31.53-.57.5-.7s-.15-.65-2.31-1.29a.88.88,0,0,1,.49-1.69c2.17.64,3.32,1.5,3.55,2.65a2.43,2.43,0,0,1-1.14,2.4C107.32,88.48,103.52,89.52,99.16,89.52Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M118.65,66.3v0c-.54,2.68-4,6-8.66,8.74a43.9,43.9,0,0,1-5,2.52l-4.37,1.68c-.74,4.28,13.36-1,11.78-3.93a4.66,4.66,0,0,1,2.32.73c.82.66.29,1.63-.91,2.65h0a28.23,28.23,0,0,1-9.6,4.72,26.09,26.09,0,0,1-4,.46c-1.69,0-.59,3.81,8.12,0a1.69,1.69,0,0,0,.27-.11c4.39,3-8.67,7.54-19.1,2.9l-5.15-17.8,5.15-4c2.59-1.94,5.11-3.93,7.55-6l.83-.1a22.22,22.22,0,0,0-4.43,8.87,2.51,2.51,0,0,0,3.8,2.63c7.85-5,13.94-11.79,16.54-22a10.27,10.27,0,0,1,1.34,8,15.48,15.48,0,0,1-1.93,4.81h0a26.65,26.65,0,0,1-4.55,5.56L103,71.08c-1.93,6.83,13.82-3,13.88-8.32A3.17,3.17,0,0,1,118.65,66.3Z", transform: "translate(-8.33)", fill: "#000072" }))),
            React.createElement("g", null,
                React.createElement("path", { d: "M89.1,119.51a17.85,17.85,0,0,1-7.33.91A6.8,6.8,0,0,1,77,117.85l-.18-.23-.15-.22a2.9,2.9,0,0,1-.19-.29c0-.07-.09-.15-.14-.23-.15-.25-.28-.51-.41-.78s-.17-.36-.24-.55-.08-.18-.11-.27-.08-.19-.11-.29-.1-.28-.15-.42-.17-.49-.24-.74l-.09-.3-.16-.58c-.13-.51-.25-1-.37-1.52,0-.1,0-.2-.07-.3a33.34,33.34,0,0,0-1-3.82l-.07-.19-.09-.22a4.68,4.68,0,0,0-.2-.45l-.09-.18c-.1-.19-.2-.36-.31-.53l-.07-.12-.08-.11-.12-.16a3.7,3.7,0,0,0-1.07-.94,26.22,26.22,0,0,1,3.42-1.78,12.54,12.54,0,0,1,3.52,1C86.49,107.43,79.7,119.09,89.1,119.51Z", transform: "translate(-8.33)", fill: "#37cef7" }),
                React.createElement("path", { d: "M89.34,119.52s0,.08,0,.11a11.27,11.27,0,0,1-4.86,6,11,11,0,0,1-4.21,1.4c-6.6.82-14.32-3.59-16.43-9.92a10.68,10.68,0,0,1-.56-3.62,21,21,0,0,1,6.94-8.35h0c.36-.26.74-.51,1.12-.75a3.7,3.7,0,0,1,1.07.94l.12.16.08.11.07.12c.11.17.21.34.31.53l.09.18a4.68,4.68,0,0,1,.2.45l.09.22.07.19a33.34,33.34,0,0,1,1,3.82c0,.1,0,.2.07.3.12.51.24,1,.37,1.52l.16.58.09.3c.07.25.15.5.24.74s.09.28.15.42.07.19.11.29.07.18.11.27.16.37.24.55.26.53.41.78c.05.08.09.16.14.23a2.9,2.9,0,0,0,.19.29l.15.22.18.23a6.8,6.8,0,0,0,4.73,2.57,17.85,17.85,0,0,0,7.33-.91Z", transform: "translate(-8.33)", fill: "#f962bb" }),
                React.createElement("path", { d: "M89.55,119.38c-.08.08-.16.17-.25.25a11.77,11.77,0,0,1-7.75,3.56c-5.78.29-11.44-3.8-13.64-8.89a11.08,11.08,0,0,1-1-4.64l3.24-4.5h0l.69-1a2.46,2.46,0,0,1,.43.21,3.7,3.7,0,0,1,1.07.94l.12.16.08.11.07.12c.11.17.21.34.31.53l.09.18a4.68,4.68,0,0,1,.2.45l.09.22.07.19a33.34,33.34,0,0,1,1,3.82c0,.1,0,.2.07.3.12.51.24,1,.37,1.52l.16.58.09.3c.07.25.15.5.24.74s.09.28.15.42.07.19.11.29.07.18.11.27a5.38,5.38,0,0,0,.24.55c.13.27.26.53.41.78.05.08.09.16.14.23a2.9,2.9,0,0,0,.19.29l.15.22.18.23a6.8,6.8,0,0,0,4.73,2.57,17.85,17.85,0,0,0,7.33-.91Z", transform: "translate(-8.33)", fill: "#ffb531" }),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M89.1,119.51l.45-.13c-.08.08-.16.17-.25.25a11.27,11.27,0,0,1-4.86,6,11,11,0,0,1-4.21,1.4,16.37,16.37,0,0,0,1.32-3.86,11.7,11.7,0,0,0,.22-2.77,7.62,7.62,0,0,0-6.9-7.47,12.21,12.21,0,0,0-7,1.35,18.93,18.93,0,0,0-4.11,2.83,10.68,10.68,0,0,1-.56-3.62,21,21,0,0,1,6.94-8.35h0l.69-1a2.46,2.46,0,0,1,.43.21,26.22,26.22,0,0,1,3.42-1.78,12.54,12.54,0,0,1,3.52,1C86.49,107.43,79.7,119.09,89.1,119.51Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("path", { d: "M89.34,120.37h0c-5.87-.14-6.47-4.27-7-7.92-.6-4.13-1.16-8-7.72-9a.85.85,0,0,1-.72-1,.84.84,0,0,1,1-.72c7.82,1.12,8.57,6.28,9.17,10.42.53,3.69.92,6.35,5.35,6.46a.85.85,0,0,1,0,1.7Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M80.71,124.07a13.13,13.13,0,0,1-5-1c-5.6-2.34-9.59-8-9.47-13.37a.74.74,0,0,1,.74-.73h0a.75.75,0,0,1,.73.76c-.1,4.74,3.58,9.88,8.55,12a10.62,10.62,0,0,0,9.75-.55c-3.32.63-5.87.38-7.73-.75-3-1.8-3.61-5.43-4.18-8.63-.51-2.86-1-5.33-2.75-6a.74.74,0,1,1,.56-1.38c2.56,1,3.09,4,3.66,7.17s1.11,6.17,3.49,7.61c2.06,1.26,5.3,1.17,9.9-.26A.75.75,0,0,1,89.7,120,12.4,12.4,0,0,1,80.71,124.07Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M78.62,128a15.41,15.41,0,0,1-2.91-.28C69,126.46,62.24,120.8,62.39,113.5a.85.85,0,1,1,1.7,0c-.13,6.4,6,11.39,11.94,12.51s10.53-1.44,12.51-6.81a.85.85,0,1,1,1.6.59,12.11,12.11,0,0,1-6,7A12.59,12.59,0,0,1,78.62,128Z", transform: "translate(-8.33)", fill: "#390075" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M93.73,83.07a29.71,29.71,0,0,1-27.89,29.67c-.61,0-1.22.06-1.84.06A29.73,29.73,0,1,1,93.73,83.07Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("path", { d: "M80.16,108a29.6,29.6,0,0,1-14.32,4.71A9.38,9.38,0,0,1,80.16,108Z", transform: "translate(-8.33)", fill: "#fb64c0" }),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M88.15,83.63a24.16,24.16,0,0,0-44-13.74h0a24.17,24.17,0,0,0,11.37,36.35,7.78,7.78,0,0,1-7.58.07,8.6,8.6,0,0,0,9.37,1.2,2.83,2.83,0,0,1,1.81-.23,24.16,24.16,0,0,0,9.78,0,2.83,2.83,0,0,1,1.81.23,8.6,8.6,0,0,0,9.37-1.2,7.78,7.78,0,0,1-7.58-.07A24.15,24.15,0,0,0,88.15,83.63Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M80.16,105.92a29.6,29.6,0,0,1-14.32,4.71c-.61,0-1.22.06-1.84.06A29.74,29.74,0,0,1,34.29,82c0,.35,0,.7,0,1A29.73,29.73,0,0,0,64,112.8c.62,0,1.23,0,1.84-.06A29.71,29.71,0,0,0,93.73,83.07c0-.35,0-.7,0-1A29.69,29.69,0,0,1,80.16,105.92Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("path", { d: "M64,113.64A30.57,30.57,0,1,1,94.57,83.07,30.6,30.6,0,0,1,64,113.64Zm0-59.45A28.89,28.89,0,1,0,92.88,83.07,28.91,28.91,0,0,0,64,54.19Z", transform: "translate(-8.33)", fill: "#390075" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M96.15,42.36c-.25,14.83-15,23.51-32.94,23.14S30.83,55.82,31.08,41s15.1-29.56,33.06-29.19S96.4,27.53,96.15,42.36Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("g", { opacity: "0.2" },
                    React.createElement("path", { d: "M63.5,65.45c-18-.38-32.37-9.68-32.12-24.49v-.27C34,52.61,47.13,59.89,63,60.24c17.94.37,32.65-8.28,32.94-23.07a23.16,23.16,0,0,1,.48,5.17C96.19,57.12,81.48,65.82,63.5,65.45Z", transform: "translate(-8.33)", fill: "#390075" })),
                React.createElement("path", { d: "M52.63,65.12a36.31,36.31,0,0,1-12.82-5.66C33.4,54.8,30.06,48.42,30.2,41S34,25.81,40.4,20a33.78,33.78,0,0,1,47.18,1C93.72,27,97.17,34.83,97,42.36S93.35,56.05,86.78,60.43c-6.09,4.07-14.46,6.19-23.6,6A49.12,49.12,0,0,1,52.63,65.12ZM70.82,13.64a31.94,31.94,0,0,0-6.7-.87C46,12.39,32.2,27.38,32,41c-.19,10.8,8,19.15,20.94,22.24a49,49,0,0,0,10.32,1.27c18.64.4,31.82-8.72,32.05-22.18.12-7-3.11-14.24-8.89-20A32.77,32.77,0,0,0,70.82,13.64Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M52.63,65.12a36.31,36.31,0,0,1-12.82-5.66C33.4,54.8,30.06,48.42,30.2,41S34,25.81,40.4,20a33.78,33.78,0,0,1,47.18,1C93.72,27,97.17,34.83,97,42.36S93.35,56.05,86.78,60.43c-6.09,4.07-14.46,6.19-23.6,6A49.12,49.12,0,0,1,52.63,65.12ZM70.82,13.64a31.94,31.94,0,0,0-6.7-.87C46,12.39,32.2,27.38,32,41c-.19,10.8,8,19.15,20.94,22.24a49,49,0,0,0,10.32,1.27c18.64.4,31.82-8.72,32.05-22.18.12-7-3.11-14.24-8.89-20A32.77,32.77,0,0,0,70.82,13.64Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M66.28,22.64a6.91,6.91,0,0,1-1.8.1c-3.43-.2-4.66-2.27-4.77-3.71A14.9,14.9,0,0,0,66.28,22.64Z", transform: "translate(-8.33)", fill: "#fe6dcb" }),
                React.createElement("path", { d: "M66,23.56a16,16,0,0,1-6.89-3.79,1,1,0,0,1-.3-.6c0-.07,0-.17,0-.24v0a27.73,27.73,0,0,1,.34-4.29.93.93,0,0,1,.61-.77.83.83,0,0,1,.89.27,14.22,14.22,0,0,0,9,4.44,1,1,0,0,1,.64.35.93.93,0,0,1,.18.75,4.72,4.72,0,0,1-3.61,3.84c-.16.05-.32.07-.46.1a.86.86,0,0,1-.32,0A.06.06,0,0,1,66,23.56Zm.25-.92Zm-5.73-4.06a14.38,14.38,0,0,0,5.73,3.09l.13,0h0a3.17,3.17,0,0,0,1.91-1.32,15.79,15.79,0,0,1-7.68-3.64C60.59,17.4,60.55,18.05,60.55,18.58Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("g", null,
                    React.createElement("path", { d: "M67.75,22.12a4.51,4.51,0,0,1-1.11.45,2.29,2.29,0,0,1-.36.07A15.66,15.66,0,0,1,59.68,19a.65.65,0,0,0,0-.2A25.22,25.22,0,0,1,60,14.74a15.34,15.34,0,0,0,7.84,4.48,12.29,12.29,0,0,0,1.75.25A3.62,3.62,0,0,1,67.75,22.12Z", transform: "translate(-8.33)", fill: "#33aef1" }),
                    React.createElement("path", { d: "M66.18,22.76a15.43,15.43,0,0,1-6.57-3.64l0,0v-.05a.5.5,0,0,0,0-.17v-.05a24.84,24.84,0,0,1,.34-4.12l0-.27.16.2a15.46,15.46,0,0,0,7.78,4.46,15.51,15.51,0,0,0,1.72.25h.14l0,.15a3.9,3.9,0,0,1-1.91,2.72,5.05,5.05,0,0,1-1.14.47,3.61,3.61,0,0,1-.38.1h0S66.21,22.76,66.18,22.76ZM59.8,19a15.54,15.54,0,0,0,6.43,3.54h0l.34-.08A3.91,3.91,0,0,0,67.69,22h0a3.72,3.72,0,0,0,1.77-2.37,12.07,12.07,0,0,1-1.64-.25A15.68,15.68,0,0,1,60.07,15a23.53,23.53,0,0,0-.3,3.81v0S59.8,19,59.8,19Z", transform: "translate(-8.33)", fill: "#390075" })),
                React.createElement("g", { opacity: "0.6" },
                    React.createElement("path", { d: "M67.75,22.12c.07-1,.09-1.95.12-2.87a13.65,13.65,0,0,0,1.75.25A3.76,3.76,0,0,1,67.75,22.12Z", transform: "translate(-8.33)", fill: "#fff" })),
                React.createElement("path", { d: "M69.59,19.5a13.91,13.91,0,0,1-1.75-.25A15.32,15.32,0,0,1,60,14.76c.23-1.64.59-3.46,1-5.23,0,0,1.71,3.06,6.64,5.28a16.66,16.66,0,0,0,2,.77,24.31,24.31,0,0,1-.07,3.84S69.62,19.47,69.59,19.5Z", transform: "translate(-8.33)", fill: "#fdd800" }),
                React.createElement("g", { opacity: "0.6" },
                    React.createElement("path", { d: "M69.59,19.5a13.91,13.91,0,0,1-1.75-.25,42.17,42.17,0,0,0-.16-4.44,16.2,16.2,0,0,0,2,.77,27,27,0,0,1-.07,3.84A.09.09,0,0,1,69.59,19.5Z", transform: "translate(-8.33)", fill: "#fff" })),
                React.createElement("g", null,
                    React.createElement("path", { d: "M69.69,15.58a20.13,20.13,0,0,1-2-.77c-4.93-2.22-6.63-5.28-6.63-5.28a34.69,34.69,0,0,1,1.68-5.26A13.67,13.67,0,0,0,66.8,8.88a9.12,9.12,0,0,0,2.39,1.22C69.44,12,69.62,13.91,69.69,15.58Z", transform: "translate(-8.33)", fill: "#b177ea" }),
                    React.createElement("path", { d: "M69.8,15.76l-.16,0c-.68-.23-1.36-.5-2-.77C62.73,12.72,61,9.65,60.93,9.6l0,0,0-.05a35.89,35.89,0,0,1,1.69-5.28L62.71,4l.11.23a13.93,13.93,0,0,0,4,4.56A9.36,9.36,0,0,0,69.21,10l.07,0,0,.07a53.28,53.28,0,0,1,.52,5.48ZM61.16,9.5c.23.4,2.05,3.14,6.57,5.19.59.27,1.21.5,1.82.72-.07-1.65-.25-3.44-.5-5.19A9.19,9.19,0,0,1,66.71,9a14.4,14.4,0,0,1-4-4.43A38,38,0,0,0,61.16,9.5Z", transform: "translate(-8.33)", fill: "#390075" })),
                React.createElement("g", { opacity: "0.6" },
                    React.createElement("path", { d: "M69.69,15.58a20.13,20.13,0,0,1-2-.77,45.59,45.59,0,0,0-.9-5.91,8.91,8.91,0,0,0,2.38,1.22A52.87,52.87,0,0,1,69.69,15.58Z", transform: "translate(-8.33)", fill: "#fff" })),
                React.createElement("path", { d: "M69.19,10A9.79,9.79,0,0,1,66.8,8.75a13.67,13.67,0,0,1-4.07-4.61,8.54,8.54,0,0,1,1.66-2.77A1.56,1.56,0,0,1,65.55.83C67.28.93,68.53,5.34,69.19,10Z", transform: "translate(-8.33)", fill: "#fe6dcb" }),
                React.createElement("g", { opacity: "0.6" },
                    React.createElement("path", { d: "M69.39,10.17A9.6,9.6,0,0,1,67,9a36.82,36.82,0,0,0-2.41-7.38A1.57,1.57,0,0,1,65.75,1C67.48,1.1,68.73,5.51,69.39,10.17Z", transform: "translate(-8.33)", fill: "#fff" })),
                React.createElement("g", null,
                    React.createElement("path", { d: "M69,10.87a.08.08,0,0,1-.07,0c-4.48-1.55-6.78-6-6.87-6.21a.85.85,0,0,1,0-.7C63.18,1.32,64.32.1,65.55.18,68,.3,69.23,5.59,69.87,10a.84.84,0,0,1-.23.72A.7.7,0,0,1,69,10.87ZM63.52,4.24A12.75,12.75,0,0,0,68.25,8.9c-.88-5.16-2.11-7.1-2.77-7.15C65.09,1.7,64.37,2.37,63.52,4.24Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("path", { d: "M69.53,16.36s0,0-.07,0c-6.66-2.24-9-6.23-9-6.38a.89.89,0,0,1-.09-.6A36.8,36.8,0,0,1,62.05,4a.68.68,0,0,1,.61-.45.71.71,0,0,1,.64.4c0,.05,2.11,4.11,6,5.48a.74.74,0,0,1,.48.63,51.64,51.64,0,0,1,.52,5.55.85.85,0,0,1-.27.65A.64.64,0,0,1,69.53,16.36Zm-7.71-7a15.65,15.65,0,0,0,7.09,5.11c-.09-1.22-.2-2.52-.38-3.79a13.11,13.11,0,0,1-5.69-4.79C62.5,6.93,62.14,8.11,61.82,9.38Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("path", { d: "M67.32,19.92a15.83,15.83,0,0,1-7.82-4.63.75.75,0,0,1-.18-.65c.25-1.72.61-3.54,1-5.31a.75.75,0,0,1,.6-.58.67.67,0,0,1,.7.38s2.14,3.66,8.25,5.71a.75.75,0,0,1,.5.69,25.91,25.91,0,0,1-.07,4c0,.05,0,.1,0,.15a.72.72,0,0,1-.75.6A10.8,10.8,0,0,1,67.32,19.92Zm2.27-.42Zm-8.82-5A14.68,14.68,0,0,0,69,18.65c0-.7,0-1.54,0-2.49a18.12,18.12,0,0,1-7.62-4.94C61.14,12.32,60.93,13.42,60.77,14.49Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("path", { d: "M66.05,23.39a16,16,0,0,1-6.82-3.77.75.75,0,0,1-.25-.5c0-.07,0-.14,0-.22v0a25.9,25.9,0,0,1,.34-4.24.75.75,0,0,1,.5-.63.68.68,0,0,1,.72.23,14.44,14.44,0,0,0,9.12,4.49.65.65,0,0,1,.5.3.83.83,0,0,1,.14.59,4.58,4.58,0,0,1-3.48,3.69,2.89,2.89,0,0,1-.43.1.36.36,0,0,1-.25,0Zm.23-.75Zm-5.89-4a14.74,14.74,0,0,0,5.91,3.19,1.21,1.21,0,0,0,.18-.05h0a3.3,3.3,0,0,0,2.16-1.62,15.89,15.89,0,0,1-8.12-3.86C60.43,17.23,60.39,18,60.39,18.65Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("path", { d: "M63,23.34a4.84,4.84,0,0,1-4-4.22.8.8,0,0,1,.38-.77.68.68,0,0,1,.8.1,15,15,0,0,0,6.21,3.44.06.06,0,0,1,.06,0,.75.75,0,0,1,.57.77.74.74,0,0,1-.59.75,7.49,7.49,0,0,1-2,.12A11.38,11.38,0,0,1,63,23.34Z", transform: "translate(-8.33)", fill: "#390075" })),
                React.createElement("path", { d: "M63,23.51a5.1,5.1,0,0,1-4.18-4.36c0-.08,0-.15,0-.22v0a16.76,16.76,0,0,1,.11-2.34q.08-.72.18-1.5l0-.1c0-.1,0-.22,0-.32.25-1.72.61-3.57,1.05-5.34a38.23,38.23,0,0,1,1.72-5.41c1.14-2.69,2.32-4,3.64-3.89C68.09.15,69.39,5.51,70,10c.27,1.89.45,3.81.52,5.55a27.51,27.51,0,0,1-.07,4c0,.05,0,.1,0,.18h0a.53.53,0,0,1,0,.2.56.56,0,0,0,0,.1.69.69,0,0,1,0,.17.56.56,0,0,1,0,.1.42.42,0,0,0,0,.15s0,.08,0,.1-.07.18-.09.25,0,.05,0,.07-.07.13-.09.2l0,.08,0,0c0,.05-.07.13-.09.18l-.05.1a1.74,1.74,0,0,1-.13.2s0,0,0,.05a1.74,1.74,0,0,1-.18.22.12.12,0,0,0,0,.05,1.23,1.23,0,0,1-.19.2l0,.05h0c-.07.08-.14.13-.21.2l0,.05a4.65,4.65,0,0,1-.57.42.07.07,0,0,1,0,0l0,0a.35.35,0,0,0-.11.08s0,0-.07.05l-.12.05-.25.12a.54.54,0,0,1-.11.05,1.45,1.45,0,0,1-.25.1h0a.12.12,0,0,1-.09,0,2.64,2.64,0,0,0-.3.1l-.09,0a2.52,2.52,0,0,1-.46.1,7,7,0,0,1-2,.13A10.68,10.68,0,0,1,63,23.51ZM65.53,1.92h0c-.3,0-1,.55-2,2.77A35.43,35.43,0,0,0,61.91,9.8a49,49,0,0,0-1,5.14c0,.1,0,.2,0,.32l0,.1c-.07.5-.11,1-.16,1.42a18.79,18.79,0,0,0-.11,2.07h0V19c.11,1.22,1.2,2.69,3.95,2.84a6.34,6.34,0,0,0,1.6-.1l.31-.07.07,0,.23-.07.09,0,.18-.07.07,0a.35.35,0,0,0,.18-.1l.12-.05s0,0,.06,0l0,0,0,0a2,2,0,0,0,.37-.27l0,0a.42.42,0,0,0,.11-.13h0l0,0,.11-.13,0,0a.79.79,0,0,0,.12-.15l0,0a1,1,0,0,0,.07-.12l0-.05c0-.05,0-.08.07-.13l0-.05s0-.07,0-.1a.08.08,0,0,0,0-.05l.07-.15,0,0a.56.56,0,0,0,0-.1l0-.05s0-.05,0-.07l0-.05s0-.08,0-.1v-.08a29.18,29.18,0,0,0,.07-3.66c-.07-1.7-.25-3.54-.5-5.36C67.46,4.42,66.18,2.07,65.53,1.92Zm3,19.55Zm.18-2.17Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M76.64,19.87s3-12.34,7.6-12S91.35,26,90.85,30.14C90.85,30.14,83.74,30.14,76.64,19.87Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("path", { d: "M76.35,19.8a5.24,5.24,0,0,1,.09-2.62,14.42,14.42,0,0,1,.84-2.39c.34-.78.66-1.55,1-2.32a22.35,22.35,0,0,1,1.23-2.25,11.41,11.41,0,0,1,1.66-2,4.71,4.71,0,0,1,2.52-1.25h.55l.2,0a1.48,1.48,0,0,1,.39.1,1.84,1.84,0,0,1,.36.15,4.57,4.57,0,0,1,1.21.87,9.53,9.53,0,0,1,1.52,2.24,27.73,27.73,0,0,1,1.77,4.82c.46,1.62.82,3.29,1.12,4.93s.54,3.34.7,5c0,.43.09.85.12,1.27s.09.85.13,1.28a4.65,4.65,0,0,1,0,1.29,2.44,2.44,0,0,1-.62,1.27.36.36,0,0,1-.52,0s0,0,0-.05l0,0a3.54,3.54,0,0,1-.5-1.2,7,7,0,0,1-.12-1.19c0-.4,0-.83,0-1.23s-.07-.82-.11-1.22q-.24-2.43-.69-4.86c-.29-1.59-.63-3.19-1.07-4.76a25.18,25.18,0,0,0-1.63-4.44,7.69,7.69,0,0,0-1.18-1.77,2.5,2.5,0,0,0-.69-.5l-.16-.07-.15,0h-.39a2.77,2.77,0,0,0-1.55.8,8.76,8.76,0,0,0-1.36,1.67,17.75,17.75,0,0,0-1.11,2,17.43,17.43,0,0,0-.91,2.19c-.25.78-.48,1.53-.8,2.27A6.53,6.53,0,0,1,76.87,20h0a.31.31,0,0,1-.48,0A.54.54,0,0,0,76.35,19.8Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("g", null,
                    React.createElement("g", null,
                        React.createElement("path", { d: "M80.71,19.07s1.05-6.13,3-5.85S87.1,22.44,87,24.53C87,24.53,83.92,24.39,80.71,19.07Z", transform: "translate(-8.33)", fill: "#fe6dcb" }),
                        React.createElement("path", { d: "M86.55,24.58c-.93-.22-3.36-1.19-5.93-5.46l0-.05v0c0-.25,1.09-6.24,3.16-6s3.45,9.45,3.32,11.46v.13H87A1.29,1.29,0,0,1,86.55,24.58Zm-5.7-5.53c2.77,4.56,5.43,5.24,6,5.34.09-2.37-1.3-10.63-3.07-11h-.07C82,13.12,80.94,18.45,80.85,19.05Z", transform: "translate(-8.33)", fill: "#390075" })),
                    React.createElement("path", { d: "M86.44,25.41c-1.07-.25-3.75-1.32-6.46-5.81a1,1,0,0,1-.13-.7c.27-1.64,1.41-7,4-6.63.82.1,2.05.82,3.16,5.71a30.65,30.65,0,0,1,.84,6.65.91.91,0,0,1-.91.9C86.9,25.48,86.71,25.48,86.44,25.41Zm-4.8-6.53c1.78,2.79,3.41,3.93,4.41,4.38a36.42,36.42,0,0,0-.7-4.63c-.75-3.39-1.52-4.39-1.73-4.47C83.14,14.09,82.17,16.23,81.64,18.88Z", transform: "translate(-8.33)", fill: "#390075" })),
                React.createElement("path", { d: "M51.84,18.43S50.09,5.81,45.45,5.61,36.63,22.76,36.72,27C36.7,27,43.77,27.83,51.84,18.43Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("path", { d: "M51.54,18.48a6.1,6.1,0,0,1-1-2.27c-.23-.77-.39-1.57-.57-2.35a19.49,19.49,0,0,0-.68-2.29,20.84,20.84,0,0,0-.91-2.14,8.27,8.27,0,0,0-1.18-1.82,2.92,2.92,0,0,0-1.48-1l-.21,0-.09,0h-.09l-.16,0s-.11,0-.18,0a2.31,2.31,0,0,0-.73.42A7.92,7.92,0,0,0,42.88,8.7a23.18,23.18,0,0,0-2,4.22c-.57,1.49-1.07,3-1.53,4.61s-.84,3.14-1.16,4.74c-.09.39-.16.79-.22,1.19s-.1.8-.14,1.2a6.38,6.38,0,0,1-.23,1.17A3.23,3.23,0,0,1,37,27l0,0a.35.35,0,0,1-.53,0l0-.05a2.5,2.5,0,0,1-.5-1.35,4.6,4.6,0,0,1,.07-1.29c.06-.43.18-.83.25-1.25s.15-.82.22-1.25c.34-1.64.73-3.29,1.18-4.91s1-3.22,1.6-4.79A26.1,26.1,0,0,1,41.4,7.56a8.77,8.77,0,0,1,1.73-2,4.36,4.36,0,0,1,1.28-.75,1.51,1.51,0,0,1,.38-.09,1.92,1.92,0,0,1,.41,0h.21l.18,0,.36.05a4.65,4.65,0,0,1,2.39,1.52,10.19,10.19,0,0,1,1.45,2.22,18.07,18.07,0,0,1,1,2.37c.3.8.53,1.62.8,2.42a14.46,14.46,0,0,1,.59,2.46A5.48,5.48,0,0,1,52,18.3a.34.34,0,0,1-.43.23s0,0-.05-.05Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("g", null,
                    React.createElement("g", null,
                        React.createElement("path", { d: "M48,17.33S47.36,11,45.2,11s-4.36,8.8-4.39,10.94C40.81,21.89,44.11,22.22,48,17.33Z", transform: "translate(-8.33)", fill: "#fe6dcb" }),
                        React.createElement("path", { d: "M40.7,22v-.13c0-1.92,1.66-8.57,3.46-10.49a1.51,1.51,0,0,1,1.06-.58c2.25,0,2.91,6.24,2.94,6.48v.05l0,0C44.2,22.29,40.93,22,40.79,22Zm4.73-10.9a.82.82,0,0,0-.23,0,1.34,1.34,0,0,0-.89.5C42.61,13.44,41,19.75,41,21.79c.61,0,3.57-.25,7-4.49C47.84,16.68,47.2,11.55,45.43,11.12Z", transform: "translate(-8.33)", fill: "#390075" })),
                    React.createElement("path", { d: "M40.63,22.84a1,1,0,0,1-.68-.95c0-2,1.66-8.92,3.68-11.09A2.18,2.18,0,0,1,45.22,10c2.8,0,3.57,6,3.69,7.23a1.06,1.06,0,0,1-.21.74c-4.16,5.19-7.8,4.91-7.93,4.89S40.68,22.84,40.63,22.84Zm4.64-10.92H45.2c-.18,0-1.07.7-2.18,4a34,34,0,0,0-1.21,4.84A10.74,10.74,0,0,0,47.11,17C46.79,14.61,46,12.09,45.27,11.92Z", transform: "translate(-8.33)", fill: "#390075" })),
                React.createElement("path", { d: "M40,36.68A31.81,31.81,0,0,0,36.63,35a28.13,28.13,0,0,0-3.41-1.3,34.86,34.86,0,0,0-3.52-.89c-.59-.15-1.21-.23-1.8-.33-.3-.07-.61-.07-.91-.12s-.61-.08-.93-.15A8.51,8.51,0,0,1,27,32c.32,0,.61-.1.93-.12a14.9,14.9,0,0,1,1.89,0,13.59,13.59,0,0,1,3.73.7A14.13,14.13,0,0,1,37,34.18,11.44,11.44,0,0,1,40,36.68Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M39.47,40.09a31.76,31.76,0,0,0-3.64-.67c-1.2-.15-2.41-.25-3.61-.28s-2.41,0-3.62.15c-.61.05-1.2.13-1.81.2-.32,0-.62.1-.91.15s-.62.1-.94.13l.85-.45c.29-.15.56-.28.86-.4a14.23,14.23,0,0,1,1.82-.57,14.5,14.5,0,0,1,3.77-.43,13.55,13.55,0,0,1,3.75.55A12.43,12.43,0,0,1,39.47,40.09Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M39.63,44.53a30,30,0,0,0-3.68.22,28.67,28.67,0,0,0-3.57.63,27.86,27.86,0,0,0-3.5,1,18,18,0,0,0-1.73.65c-.3.1-.57.25-.86.35s-.6.25-.89.34c.23-.22.48-.42.73-.64a8.84,8.84,0,0,1,.77-.6,15.55,15.55,0,0,1,1.66-1,15.32,15.32,0,0,1,3.59-1.32,13.68,13.68,0,0,1,3.78-.37A11.63,11.63,0,0,1,39.63,44.53Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M89.21,37.47a11.57,11.57,0,0,1,3.19-2.22A16.06,16.06,0,0,1,96,34a14.63,14.63,0,0,1,3.78-.3,12,12,0,0,1,1.88.22,8.06,8.06,0,0,1,.91.23c.3.1.62.17.91.27-.32,0-.64,0-.93,0s-.61,0-.93,0c-.62.05-1.23.05-1.82.12a33,33,0,0,0-3.59.53,24.52,24.52,0,0,0-3.53.94C91.53,36.53,90.37,37,89.21,37.47Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M89.42,40.94A10.68,10.68,0,0,1,93,39.72a14.45,14.45,0,0,1,3.77-.15,15.2,15.2,0,0,1,5.46,1.54c.3.13.57.33.84.48l.8.52-.91-.22a8.65,8.65,0,0,0-.91-.23c-.59-.15-1.18-.3-1.8-.4a33,33,0,0,0-3.59-.52,24.2,24.2,0,0,0-3.61-.1A35.23,35.23,0,0,0,89.42,40.94Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M88.87,45.33A11.32,11.32,0,0,1,92.62,45a14.59,14.59,0,0,1,3.73.78,15,15,0,0,1,3.46,1.69,14.84,14.84,0,0,1,1.57,1.17,9,9,0,0,1,.7.68c.23.22.46.47.68.72l-.84-.45c-.27-.15-.54-.32-.82-.45-.56-.27-1.09-.57-1.66-.82A30.28,30.28,0,0,0,96.06,47a32.5,32.5,0,0,0-3.5-1C91.31,45.68,90.1,45.48,88.87,45.33Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("g", null,
                    React.createElement("g", { opacity: "0.2" },
                        React.createElement("path", { d: "M73.55,47.67c-1.48,2-3,2.64-4.46,2.57-2.81-.1-5.09-2.87-5.09-2.87-1.91,2.07-3.61,2.87-5,3A5.47,5.47,0,0,1,54.41,48c5.64.93,8.27-2.34,8.27-2.34l2.55,0C67.84,49.76,73.39,47.74,73.55,47.67Z", transform: "translate(-8.33)", fill: "#390075" })),
                    React.createElement("path", { d: "M69.12,50.26a18,18,0,0,1-1.78,4.27C66.48,56,65.39,57,64.21,57s-2.32-1-3.25-2.41A16.37,16.37,0,0,1,59,50.36c1.41-.1,3.12-.89,5-3C64,47.4,66.3,50.14,69.12,50.26Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("g", null,
                        React.createElement("path", { d: "M67.32,54.5C66.46,55.92,65.37,57,64.18,57s-2.31-1-3.25-2.42a3.34,3.34,0,0,1,6.39-.1Z", transform: "translate(-8.33)", fill: "#fb64c0" }),
                        React.createElement("path", { d: "M63.62,57.07a5.19,5.19,0,0,1-2.78-2.39l0,0,0-.05a3.59,3.59,0,0,1,3.25-2.5,3.53,3.53,0,0,1,3.34,2.37l0,0,0,0c-1,1.67-2.13,2.54-3.22,2.57A1.63,1.63,0,0,1,63.62,57.07ZM61.05,54.6c.72,1.07,1.84,2.34,3.13,2.32s2.35-1.32,3-2.42a3.25,3.25,0,0,0-6.16.1Z", transform: "translate(-8.33)", fill: "#390075" })),
                    React.createElement("g", null,
                        React.createElement("path", { d: "M61.18,43c.57-.85,4.71-1.07,5.44-.1S65.34,46.35,64,46.37,60.57,43.93,61.18,43Z", transform: "translate(-8.33)", fill: "#390075" }),
                        React.createElement("path", { d: "M63.43,47.25a5,5,0,0,1-2.91-2.6,2.11,2.11,0,0,1,0-2.19h0c.61-.9,2.39-1.1,3.39-1.12,1.2,0,2.75.1,3.41,1a2.06,2.06,0,0,1,.09,2.19c-.57,1.33-2.07,2.77-3.41,2.8A5.35,5.35,0,0,1,63.43,47.25ZM62,43.53a3.3,3.3,0,0,0,.63,1,2.32,2.32,0,0,0,1.34.85,2.48,2.48,0,0,0,1.44-1,2.07,2.07,0,0,0,.52-1A7,7,0,0,0,62,43.53Zm4,0Z", transform: "translate(-8.33)", fill: "#390075" }),
                        React.createElement("g", null,
                            React.createElement("ellipse", { cx: "63.93", cy: "42.91", rx: "2.25", ry: "0.65", transform: "translate(-9.2 1.34) rotate(-1.19)", fill: "#fff" }),
                            React.createElement("path", { d: "M62.43,43.56c-.5-.13-.84-.33-.84-.6s.25-.45.73-.6a6.14,6.14,0,0,1,1.61-.22,5.23,5.23,0,0,1,1.62.17c.5.12.75.32.75.57h0c0,.5-1.18.8-2.34.83A7.15,7.15,0,0,1,62.43,43.56Zm3-1.05a5.58,5.58,0,0,0-1.48-.13,5.46,5.46,0,0,0-1.56.23c-.46.15-.57.3-.57.35s.75.52,2.16.5,2.13-.4,2.13-.58-.11-.2-.59-.32C65.48,42.53,65.43,42.53,65.41,42.51Z", transform: "translate(-8.33)", fill: "#390075" }))),
                    React.createElement("path", { d: "M57.48,51.11a7,7,0,0,1-3.62-2.47l0,0a5.92,5.92,0,0,0-.37-.5.9.9,0,0,1,.23-1.19.73.73,0,0,1,1.09.25h0a3.05,3.05,0,0,0,.21.3s0,0,0,0a4.77,4.77,0,0,0,3.89,2c1.43-.1,3-1,4.52-2.72a.73.73,0,0,1,.57-.25.81.81,0,0,1,.57.27s2.09,2.5,4.52,2.57a4.55,4.55,0,0,0,3.8-2.24l0,0,0,0,.28-.4a.74.74,0,0,1,1.11-.2.93.93,0,0,1,.18,1.22,3.52,3.52,0,0,1-.36.5l-.05.05c-1.45,2-3.16,2.94-5.07,2.87a8.34,8.34,0,0,1-5.07-2.52,8.19,8.19,0,0,1-5,2.64A7.41,7.41,0,0,1,57.48,51.11Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("path", { d: "M63.48,57.82a5.77,5.77,0,0,1-3.18-2.7,17.39,17.39,0,0,1-2-4.48.94.94,0,0,1,.09-.75.72.72,0,0,1,.62-.37c1.43-.1,2.95-1,4.52-2.72a.73.73,0,0,1,.57-.25.81.81,0,0,1,.57.27s2.09,2.5,4.52,2.57a.72.72,0,0,1,.61.37,1,1,0,0,1,.12.75A17.63,17.63,0,0,1,68,55c-1.14,1.87-2.45,2.87-3.8,2.89A3.39,3.39,0,0,1,63.48,57.82Zm-3.41-6.76a15.65,15.65,0,0,0,1.5,3.07c.89,1.34,1.8,2.07,2.59,2s1.66-.77,2.5-2.14a16.17,16.17,0,0,0,1.39-3h0a9.27,9.27,0,0,1-4-2.37A9.4,9.4,0,0,1,60.07,51.06Z", transform: "translate(-8.33)", fill: "#390075" })),
                React.createElement("path", { d: "M79.51,34.06a15.33,15.33,0,0,0-1.89.85A10.28,10.28,0,0,0,75.91,36c-.27.2-.5.45-.75.65l-.34.37a.59.59,0,0,1-.18.17l-.16.2a10.59,10.59,0,0,0-1.11,1.7L72.25,37.9l.14-.08s.07,0,.11,0a2.29,2.29,0,0,0,.23-.1l.46-.15a5.26,5.26,0,0,1,.91-.22,6.3,6.3,0,0,1,1.84,0,6.1,6.1,0,0,1,1.77.47,5.88,5.88,0,0,1,1.55,1,.3.3,0,0,1,.06.42.26.26,0,0,1-.29.12h0c-.28-.07-.53-.17-.78-.25a4.25,4.25,0,0,0-.77-.17,6.61,6.61,0,0,0-3,.15,5.41,5.41,0,0,0-.71.25l-.34.15-.16.07s0,0-.07.05l0,0,0,0a.8.8,0,0,1-1.12-.4,1,1,0,0,1,0-.84,8.84,8.84,0,0,1,1.34-2.12,7.23,7.23,0,0,1,.87-.88,11.05,11.05,0,0,1,1-.72,8.15,8.15,0,0,1,2.14-.95,5.91,5.91,0,0,1,2.25-.2.31.31,0,0,1,.25.35.33.33,0,0,1-.18.28Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("g", null,
                    React.createElement("g", null,
                        React.createElement("ellipse", { cx: "52.21", cy: "36.98", rx: "5.51", ry: "3.55", transform: "translate(4.4 87.32) rotate(-87.2)", fill: "#390075" }),
                        React.createElement("path", { d: "M51.5,42.53c-1.8-.42-3.09-2.91-2.91-5.8.18-3.1,1.95-5.51,3.95-5.36A3.17,3.17,0,0,1,55,33.21a7.39,7.39,0,0,1,.82,4h0c-.18,3.1-2,5.51-4,5.36A1.52,1.52,0,0,1,51.5,42.53Zm1.39-10.89a1.64,1.64,0,0,0-.37-.05c-1.89-.12-3.57,2.19-3.75,5.16s1.23,5.49,3.14,5.63,3.57-2.19,3.75-5.16h0a7.13,7.13,0,0,0-.8-3.88A3.17,3.17,0,0,0,52.89,31.64Z", transform: "translate(-8.33)", fill: "#390075" })),
                    React.createElement("g", null,
                        React.createElement("ellipse", { cx: "53.18", cy: "35.76", rx: "1.84", ry: "1.07", transform: "translate(6.41 87.04) rotate(-87.07)", fill: "#fff" }),
                        React.createElement("path", { d: "M53,37.7c-.59-.15-1-1-.93-2a2.69,2.69,0,0,1,.41-1.35,1,1,0,0,1,.86-.52,1,1,0,0,1,.8.65,3,3,0,0,1,.25,1.39c-.07,1.08-.64,1.92-1.27,1.87ZM53.36,34a.15.15,0,0,1-.09,0,.81.81,0,0,0-.7.45,2.51,2.51,0,0,0-.37,1.22c0,1,.34,1.77.87,1.79s1-.72,1.07-1.67h0a2.58,2.58,0,0,0-.23-1.27A.86.86,0,0,0,53.36,34Z", transform: "translate(-8.33)", fill: "#390075" })))),
            React.createElement("g", null,
                React.createElement("circle", { cx: "55.73", cy: "83.65", r: "23.13", fill: "#f3ba2f" }),
                React.createElement("path", { d: "M58.44,81.34l5.61-5.61,5.62,5.61,3.27-3.26-8.89-8.89-8.88,8.88ZM49.6,83.65l3.27-3.27,3.26,3.27-3.26,3.26ZM58.44,86l5.61,5.62L69.67,86l3.27,3.26L64.05,98.1l-8.88-8.88h0ZM72,83.65l3.27-3.27,3.27,3.27-3.27,3.26Zm-4.6,0h0L64.05,87l-3.31-3.31h0l.58-.58.28-.28,2.45-2.45,3.32,3.31Z", transform: "translate(-8.33)", fill: "#fff" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M49.33,85.79c-2.66,4.1-7.85,2.84-11.37-1.62a17.49,17.49,0,0,1-3.56-10,16.85,16.85,0,0,1,.6-5.5,15.93,15.93,0,0,1,6.13-8.51c.37-.27.54-.15.79.23a8.39,8.39,0,0,0,1.89,1.82c.53.4,1.18.85,2,1.34a19.66,19.66,0,0,0-2.46,4.92,5,5,0,0,0,.48,1l.05.09a8.78,8.78,0,0,0,2.1,2.32h0a11.82,11.82,0,0,0,3.25,1.78C52.84,75,52,77.23,51.37,78.25a1.15,1.15,0,0,0,0,1.19C54.22,84.53,49.33,85.79,49.33,85.79Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("path", { d: "M43.81,62.22A9.43,9.43,0,0,1,35,68.68a15.93,15.93,0,0,1,6.13-8.51c.37-.27.54-.15.79.23A8.39,8.39,0,0,0,43.81,62.22Z", transform: "translate(-8.33)", fill: "#fb64c0" }),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M49.29,85.86c-1.95,2.92-5.21,3-8.18,1.19a.23.23,0,0,1,.22-.41,4.2,4.2,0,0,0,5.23-1.36A4.37,4.37,0,0,1,48,84.06c2.31-1.2,1.55-3.18.78-4.38a1.69,1.69,0,0,1-.07-1.75,2.22,2.22,0,0,0,.2-.45,1.4,1.4,0,0,0-.76-1.71,7.72,7.72,0,0,1-4.84-6.18.23.23,0,0,1,.43-.13h0l.05.09a7.4,7.4,0,0,0,2.1,2.32h0a11.82,11.82,0,0,0,3.25,1.78C52.84,75,52,77.23,51.37,78.25a1.15,1.15,0,0,0,0,1.19C54,84.15,50,85.58,49.41,85.76A.23.23,0,0,0,49.29,85.86Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("path", { d: "M42.43,60.31a16.78,16.78,0,0,0-2,1.5c-.31.26-.6.56-.9.84l-.42.45-.21.23-.19.24a14.56,14.56,0,0,0-2.48,4.21,17.23,17.23,0,0,0,1.37,14.27,13.3,13.3,0,0,0,3.17,3.66,9,9,0,0,0,2,1.2,5.47,5.47,0,0,0,2.18.46,4,4,0,0,0,2-.53,4.84,4.84,0,0,0,1.56-1.53.86.86,0,0,1,.48-.36h0l.12,0,.13-.05.28-.11a4.54,4.54,0,0,0,.53-.3,2.82,2.82,0,0,0,.81-.76,2.33,2.33,0,0,0,.39-1,3.19,3.19,0,0,0-.07-1.14,5.25,5.25,0,0,0-.43-1.2,5.58,5.58,0,0,0-.31-.59l-.1-.19a1.48,1.48,0,0,1-.13-.35,1.44,1.44,0,0,1,0-.77,1.66,1.66,0,0,1,.14-.37,1,1,0,0,1,.1-.15l0-.07c.06-.08.1-.16.16-.25A3.43,3.43,0,0,0,51,77.1a1.68,1.68,0,0,0,.06-1,2.76,2.76,0,0,0-1.56-1.52l-.61-.28-.7-.31c-.23-.1-.45-.24-.68-.36a5.45,5.45,0,0,1-.66-.39,10.72,10.72,0,0,1-2.33-2A5.86,5.86,0,0,1,43.66,70a3,3,0,0,1-.14-.36,2,2,0,0,1-.12-.37,2.49,2.49,0,0,1-.08-.77c.34.39.66.74,1,1.08s.62.69,1,1a9.87,9.87,0,0,0,2.26,1.58,4.43,4.43,0,0,0,.62.3c.21.09.41.2.63.27l.65.24.74.29c.24.12.49.24.73.38a5.31,5.31,0,0,1,.7.5,3.26,3.26,0,0,1,1.05,1.57,3.34,3.34,0,0,1-.05,1.91,5.46,5.46,0,0,1-.35.82c-.07.12-.14.25-.22.37l-.06.09h0a0,0,0,0,0,0,0,.06.06,0,0,0,0,0v0h0l0,0,.05.09c.13.23.26.46.38.7A7.49,7.49,0,0,1,53,81.18a4.9,4.9,0,0,1,.1,1.76,3.91,3.91,0,0,1-.66,1.72,4.71,4.71,0,0,1-1.28,1.24,5.52,5.52,0,0,1-.75.42l-.39.17-.2.07-.24.08.52-.38A6.45,6.45,0,0,1,48,88.36a5.91,5.91,0,0,1-2.93.81,7.57,7.57,0,0,1-2.89-.58,10.49,10.49,0,0,1-2.45-1.43,13.19,13.19,0,0,1-2-1.92A16.87,16.87,0,0,1,36.05,83a18.4,18.4,0,0,1-2-5.07,19,19,0,0,1-.45-2.7,24.75,24.75,0,0,1-.08-2.73,16.58,16.58,0,0,1,1.09-5.37,16.38,16.38,0,0,1,2.82-4.7l.22-.26.24-.25.47-.5c.33-.31.66-.64,1-.92a17.3,17.3,0,0,1,2.2-1.62Z", transform: "translate(-8.33)", fill: "#390075" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M93.6,74.18a17.69,17.69,0,0,1-3.17,9.47l-.39.52c-3.52,4.46-8.71,5.72-11.37,1.62,0,0-4.89-1.26-2-6.35a1.15,1.15,0,0,0,0-1.19c-.64-1-1.47-3.23,2.17-4.58a11.82,11.82,0,0,0,3.25-1.78h0a8.78,8.78,0,0,0,2.1-2.32l0-.09a5,5,0,0,0,.48-1,19.66,19.66,0,0,0-2.46-4.92,13.45,13.45,0,0,0,3.85-3.16c.25-.38.42-.5.79-.23a16.13,16.13,0,0,1,5.79,7.47A16.63,16.63,0,0,1,93.6,74.18Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("path", { d: "M93.6,74.18a17.69,17.69,0,0,1-3.17,9.47,10,10,0,0,1,2.23-16A16.63,16.63,0,0,1,93.6,74.18Z", transform: "translate(-8.33)", fill: "#fb64c0" }),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M78.71,85.86c2,2.92,5.21,3,8.18,1.19a.23.23,0,0,0-.22-.41,4.2,4.2,0,0,1-5.23-1.36A4.37,4.37,0,0,0,80,84.06c-2.31-1.2-1.55-3.18-.78-4.38a1.69,1.69,0,0,0,.07-1.75,2.22,2.22,0,0,1-.2-.45,1.4,1.4,0,0,1,.76-1.71,7.72,7.72,0,0,0,4.84-6.18.23.23,0,0,0-.43-.13h0l0,.09a7.4,7.4,0,0,1-2.1,2.32h0a11.82,11.82,0,0,1-3.25,1.78C75.16,75,76,77.23,76.63,78.25a1.15,1.15,0,0,1,0,1.19C74,84.15,78,85.58,78.59,85.76A.23.23,0,0,1,78.71,85.86Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("path", { d: "M86.47,58.88a17.3,17.3,0,0,1,2.2,1.62c.35.28.68.61,1,.92l.47.5.24.25.22.26a16.38,16.38,0,0,1,2.82,4.7,16.58,16.58,0,0,1,1.09,5.37,24.75,24.75,0,0,1-.08,2.73,19,19,0,0,1-.45,2.7A18.4,18.4,0,0,1,92,83a16.87,16.87,0,0,1-1.6,2.24,13.19,13.19,0,0,1-2,1.92,10.49,10.49,0,0,1-2.45,1.43,7.57,7.57,0,0,1-2.89.58,5.91,5.91,0,0,1-2.93-.81,6.45,6.45,0,0,1-2.12-2.1l.52.38-.24-.08-.2-.07-.39-.17a5.52,5.52,0,0,1-.75-.42,4.71,4.71,0,0,1-1.28-1.24,3.91,3.91,0,0,1-.66-1.72,4.9,4.9,0,0,1,.1-1.76,7.49,7.49,0,0,1,.56-1.55c.12-.24.25-.47.38-.7l0-.09,0,0h0v0a.06.06,0,0,0,0,0,0,0,0,0,0,0,0h0L76,78.8c-.08-.12-.15-.25-.22-.37a5.46,5.46,0,0,1-.35-.82,3.34,3.34,0,0,1,0-1.91,3.26,3.26,0,0,1,1-1.57,5.31,5.31,0,0,1,.7-.5c.24-.14.49-.26.73-.38l.74-.29.65-.24c.22-.07.42-.18.63-.27a4.43,4.43,0,0,0,.62-.3,9.87,9.87,0,0,0,2.26-1.58c.33-.32.64-.66,1-1s.64-.69,1-1.08a2.49,2.49,0,0,1-.08.77,2,2,0,0,1-.12.37,3,3,0,0,1-.14.36,5.86,5.86,0,0,1-.86,1.28,10.72,10.72,0,0,1-2.33,2,5.45,5.45,0,0,1-.66.39c-.23.12-.45.26-.68.36l-.7.31-.61.28a2.76,2.76,0,0,0-1.56,1.52,1.68,1.68,0,0,0,.06,1,3.43,3.43,0,0,0,.23.52c.06.09.1.17.16.25l0,.07a1,1,0,0,1,.1.15,1.66,1.66,0,0,1,.14.37,1.44,1.44,0,0,1,0,.77,1.48,1.48,0,0,1-.13.35l-.1.19a5.58,5.58,0,0,0-.31.59,5.25,5.25,0,0,0-.43,1.2,3.19,3.19,0,0,0-.07,1.14,2.33,2.33,0,0,0,.39,1,2.82,2.82,0,0,0,.81.76,4.54,4.54,0,0,0,.53.3l.28.11.13.05.12,0h0a.84.84,0,0,1,.48.36A4.84,4.84,0,0,0,81,86.84a4,4,0,0,0,2,.53,5.47,5.47,0,0,0,2.18-.46,9,9,0,0,0,2-1.2,13.3,13.3,0,0,0,3.17-3.66,17.23,17.23,0,0,0,1.37-14.27,14.56,14.56,0,0,0-2.48-4.21l-.19-.24-.21-.23-.42-.45c-.3-.28-.59-.58-.9-.84a16.78,16.78,0,0,0-2-1.5Z", transform: "translate(-8.33)", fill: "#390075" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M87.8,91.93l-4,9.55a1.66,1.66,0,0,1-2.19.87c.77,2.35-4.21,8.77-11.68,2.08s-2-10.33-2-10.33c.91-4,5.12-3.28,5.12-3.28,3.14-2.2,5.78,1.44,5.78,1.44a11.3,11.3,0,0,1,1.78-.84A8,8,0,0,1,87.8,91.93Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("circle", { cx: "67.01", cy: "101.13", r: "3.42", fill: "#ffc2de" }),
                React.createElement("circle", { cx: "67.68", cy: "94.88", r: "1.84", fill: "#ffc2de" }),
                React.createElement("circle", { cx: "63.6", cy: "95.72", r: "1.84", fill: "#ffc2de" }),
                React.createElement("circle", { cx: "61.39", cy: "99.28", r: "1.84", fill: "#ffc2de" }),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M80.07,95.72a8.4,8.4,0,0,0-1.29-3.46,11.3,11.3,0,0,1,1.78-.84A6,6,0,0,1,80.07,95.72Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M81.59,102.35s-5.71,7.53-15.6-4.13c0,0,1.1,7,9.67,9.14C75.66,107.36,80.61,108.05,81.59,102.35Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("path", { d: "M87.8,91.93a11.32,11.32,0,0,0-2.28-.48,8.67,8.67,0,0,0-2.22,0l-.54.1-.27.05-.26.08-.53.14-.52.19-.25.1-.25.11-.5.23-1,.52a.89.89,0,0,1-1-.18l-.05-.06h0l-.21-.25-.25-.27c-.18-.17-.36-.33-.55-.48a4.17,4.17,0,0,0-1.2-.66A2.46,2.46,0,0,0,74.66,91a3,3,0,0,0-1.17.51h0a.87.87,0,0,1-.62.14h-.14l-.18,0h-.36a4.39,4.39,0,0,0-.72.07,3.66,3.66,0,0,0-1.29.45,2.9,2.9,0,0,0-.52.38,3.28,3.28,0,0,0-.42.5,3.79,3.79,0,0,0-.53,1.27h0l-.35.51,0,0-.06,0-.13.12c-.08.08-.17.16-.25.25a4.65,4.65,0,0,0-.42.57,3.67,3.67,0,0,0-.51,1.29,4.5,4.5,0,0,0,.47,2.79,11,11,0,0,0,1.82,2.6c.18.21.38.4.57.6s.4.39.59.58c.41.37.82.73,1.26,1.06.21.17.44.31.66.47s.45.28.68.42a8.79,8.79,0,0,0,1.43.66c.25.09.5.14.75.21a6.5,6.5,0,0,0,.75.12,5.44,5.44,0,0,0,1.51-.07A5,5,0,0,0,80,105.09a9.21,9.21,0,0,0,1.27-1.93,3.34,3.34,0,0,0,.28-.81,1.53,1.53,0,0,1,.38.9,2.7,2.7,0,0,1-.08,1,4.54,4.54,0,0,1-.93,1.66,6.24,6.24,0,0,1-3.22,2,6.91,6.91,0,0,1-3.8-.14,9.77,9.77,0,0,1-1.74-.71c-.26-.15-.54-.29-.8-.46s-.52-.32-.76-.51A17.27,17.27,0,0,1,69.22,105l-.66-.6c-.21-.22-.43-.43-.63-.65a12.41,12.41,0,0,1-1.18-1.41,10.42,10.42,0,0,1-1-1.61,7,7,0,0,1-.62-1.87,5.39,5.39,0,0,1,0-2,5.15,5.15,0,0,1,.79-1.9,6.06,6.06,0,0,1,.63-.79c.12-.12.24-.24.37-.35l.2-.17.11-.08.13-.09-.36.51h0a5.85,5.85,0,0,1,.77-1.83,5.6,5.6,0,0,1,.67-.79,4.85,4.85,0,0,1,.82-.61A5.51,5.51,0,0,1,71.18,90a7.79,7.79,0,0,1,1-.09h.73l.27,0-.62.14a4.68,4.68,0,0,1,1.85-.8,4.3,4.3,0,0,1,2,.16,5.49,5.49,0,0,1,1.7.93,7,7,0,0,1,.71.62c.11.1.21.22.32.33a4.43,4.43,0,0,1,.31.39h0l-1.1-.24c.38-.19.75-.39,1.14-.55l.59-.23.3-.1c.1,0,.21-.06.31-.09l.62-.15c.21-.05.42-.07.63-.11l.32,0a1.67,1.67,0,0,1,.32,0c.21,0,.42,0,.63,0a8.33,8.33,0,0,1,2.49.42A5.06,5.06,0,0,1,87.8,91.93Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("g", null,
                    React.createElement("path", { d: "M79.51,91.83c.08.17.13.32.19.48l.15.47a8.35,8.35,0,0,1,.2,1,6.61,6.61,0,0,1,.08,1,5.32,5.32,0,0,1-.06,1c-.09-.14-.16-.28-.24-.42s-.16-.27-.25-.4-.33-.53-.5-.78l-.52-.74L78.3,93l-.25-.33Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("path", { d: "M73.67,90.31c.07.2.1.38.15.57s.07.37.09.56a6.92,6.92,0,0,1,.1,1.1,7.28,7.28,0,0,0-.82-.67l-.43-.29c-.15-.09-.3-.19-.43-.25Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("path", { d: "M68.59,93.65a3.2,3.2,0,0,0,.09.49c0,.17.08.34.13.51a5.68,5.68,0,0,0,.39,1,6.41,6.41,0,0,1-1-.47l-.5-.29-.5-.34Z", transform: "translate(-8.33)", fill: "#390075" }))),
            React.createElement("g", null,
                React.createElement("path", { d: "M40.2,91.93l4,9.55a1.66,1.66,0,0,0,2.19.87c-.77,2.35,4.21,8.77,11.68,2.08s2-10.33,2-10.33c-.91-4-5.12-3.28-5.12-3.28-3.14-2.2-5.78,1.44-5.78,1.44a11.3,11.3,0,0,0-1.78-.84A8,8,0,0,0,40.2,91.93Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("circle", { cx: "44.33", cy: "101.13", r: "3.42", fill: "#ffc2de" }),
                React.createElement("circle", { cx: "43.66", cy: "94.88", r: "1.84", fill: "#ffc2de" }),
                React.createElement("circle", { cx: "47.75", cy: "95.72", r: "1.84", fill: "#ffc2de" }),
                React.createElement("circle", { cx: "49.95", cy: "99.28", r: "1.84", fill: "#ffc2de" }),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M47.93,95.72a8.4,8.4,0,0,1,1.29-3.46,11.3,11.3,0,0,0-1.78-.84A6,6,0,0,0,47.93,95.72Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M46.41,102.35s5.71,7.53,15.6-4.13c0,0-1.1,7-9.67,9.14C52.34,107.36,47.39,108.05,46.41,102.35Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("path", { d: "M40.2,91.93a5.06,5.06,0,0,1,2.09-1.31,8.33,8.33,0,0,1,2.49-.42c.21,0,.42,0,.63,0a1.67,1.67,0,0,1,.32,0l.32,0c.21,0,.42.06.63.11l.62.15c.1,0,.21,0,.31.09l.3.1.59.23c.39.16.76.36,1.14.55l-1.1.24h0a4.43,4.43,0,0,1,.31-.39c.11-.11.21-.23.32-.33a7,7,0,0,1,.71-.62,5.49,5.49,0,0,1,1.7-.93,4.3,4.3,0,0,1,2.05-.16,4.68,4.68,0,0,1,1.85.8L54.86,90l.27,0h.73a7.79,7.79,0,0,1,1,.09,5.51,5.51,0,0,1,1.87.66,4.85,4.85,0,0,1,.82.61,5.6,5.6,0,0,1,.67.79A5.85,5.85,0,0,1,61,93.91h0l-.36-.51.13.09.11.08.2.17c.13.11.25.23.37.35a6.06,6.06,0,0,1,.63.79,5.15,5.15,0,0,1,.79,1.9,5.39,5.39,0,0,1,0,2,7,7,0,0,1-.62,1.87,10.42,10.42,0,0,1-1,1.61,12.41,12.41,0,0,1-1.18,1.41c-.2.22-.42.43-.63.65l-.66.6a17.27,17.27,0,0,1-1.42,1.14c-.24.19-.51.34-.76.51s-.54.31-.8.46a9.77,9.77,0,0,1-1.74.71,6.91,6.91,0,0,1-3.8.14,6.24,6.24,0,0,1-3.22-2,4.54,4.54,0,0,1-.93-1.66,2.7,2.7,0,0,1-.08-1,1.53,1.53,0,0,1,.38-.9,3.34,3.34,0,0,0,.28.81A9.21,9.21,0,0,0,48,105.09a5,5,0,0,0,2.62,1.47,5.44,5.44,0,0,0,1.51.07,6.5,6.5,0,0,0,.75-.12c.25-.07.5-.12.75-.21a8.79,8.79,0,0,0,1.43-.66c.23-.14.46-.27.68-.42s.45-.3.66-.47c.44-.33.85-.69,1.26-1.06.19-.19.4-.38.59-.58s.39-.39.57-.6a11,11,0,0,0,1.82-2.6,4.5,4.5,0,0,0,.47-2.79,3.67,3.67,0,0,0-.51-1.29,4.65,4.65,0,0,0-.42-.57c-.08-.09-.17-.17-.25-.25l-.13-.12-.06,0-.05,0-.35-.51h0A3.79,3.79,0,0,0,58.77,93a3.28,3.28,0,0,0-.42-.5,2.9,2.9,0,0,0-.52-.38,3.66,3.66,0,0,0-1.29-.45,4.39,4.39,0,0,0-.72-.07h-.36l-.18,0h-.14a.83.83,0,0,1-.62-.14h0A3,3,0,0,0,53.34,91a2.46,2.46,0,0,0-1.23.09,4.17,4.17,0,0,0-1.2.66c-.19.15-.37.31-.55.48l-.25.27-.21.25h0l0,0A.89.89,0,0,1,48.8,93l-1-.52-.5-.23-.25-.11-.25-.1-.52-.19-.53-.14-.26-.08-.27-.05-.54-.1a8.67,8.67,0,0,0-2.22,0A11.32,11.32,0,0,0,40.2,91.93Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("g", null,
                    React.createElement("path", { d: "M50,92.69,49.7,93l-.26.36-.52.74c-.17.25-.33.51-.5.78s-.17.26-.25.4-.15.28-.24.42a5.32,5.32,0,0,1-.06-1,6.61,6.61,0,0,1,.08-1,8.35,8.35,0,0,1,.2-1l.15-.47c.06-.16.11-.31.19-.48Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("path", { d: "M55.67,91.33c-.13.06-.28.16-.43.25l-.43.29a7.28,7.28,0,0,0-.82.67,6.92,6.92,0,0,1,.1-1.1c0-.19.06-.37.09-.56s.08-.37.15-.57Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("path", { d: "M60.84,94.56l-.5.34-.5.29a6.41,6.41,0,0,1-1,.47,5.68,5.68,0,0,0,.39-1c.05-.17.09-.34.13-.51a3.2,3.2,0,0,0,.09-.49Z", transform: "translate(-8.33)", fill: "#390075" }))))));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};

var Icon$K = function (props) {
    var id = uniqueId("svg");
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("g", { clipPath: "url(#" + id + ")" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43.1934 10.6907C44.0412 9.92381 45.4 10.3246 45.6959 11.4288C45.9144 12.2444 45.4304 13.0827 44.6148 13.3012L38.4955 14.9409L43.1934 10.6907ZM49.112 10.5134C48.1317 6.85481 43.6295 5.52698 40.8207 8.06806L31.0187 16.9358C29.5584 18.2569 30.8604 20.6481 32.7625 20.1385L45.5302 16.7174C48.2324 15.9933 49.8361 13.2157 49.112 10.5134Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.1886 8.0841C29.8078 6.90274 28.3125 6.54189 27.4349 7.41956C26.7866 8.06782 26.7866 9.11885 27.4349 9.7671L32.2987 14.6309L30.1886 8.0841ZM24.7196 4.70427C27.6276 1.79628 32.5818 2.99187 33.8434 6.90609L38.2461 20.5658C38.902 22.6007 36.3796 24.1424 34.8677 22.6306L24.7196 12.4824C22.5717 10.3345 22.5717 6.85214 24.7196 4.70427Z", fill: "#7645D9" }),
            React.createElement("path", { opacity: "0.6", d: "M7.27624 34.0431C7.01094 35.0539 5.57594 35.054 5.31064 34.0431L4.51492 31.0112C4.42182 30.6565 4.14478 30.3794 3.79005 30.2863L0.758148 29.4906C-0.252715 29.2253 -0.252717 27.7903 0.758146 27.525L3.79005 26.7293C4.14478 26.6362 4.42182 26.3591 4.51492 26.0044L5.31064 22.9725C5.57594 21.9616 7.01094 21.9616 7.27624 22.9725L8.07196 26.0044C8.16506 26.3591 8.44209 26.6362 8.79682 26.7293L11.8287 27.525C12.8396 27.7903 12.8396 29.2253 11.8287 29.4906L8.79683 30.2863C8.44209 30.3794 8.16506 30.6565 8.07196 31.0112L7.27624 34.0431Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M9.62029 11.6637C9.62344 12.2763 8.81089 12.494 8.5073 11.9619L7.59673 10.3659C7.4902 10.1791 7.2913 10.0643 7.07631 10.0654L5.23882 10.0748C4.62619 10.078 4.40847 9.26545 4.9406 8.96185L6.53663 8.05128C6.72337 7.94475 6.8382 7.74585 6.8371 7.53087L6.82766 5.69337C6.82451 5.08074 7.63705 4.86302 7.94064 5.39515L8.85121 6.99119C8.95775 7.17792 9.15664 7.29275 9.37163 7.29165L11.2091 7.28221C11.8218 7.27906 12.0395 8.0916 11.5073 8.39519L9.91131 9.30576C9.72458 9.4123 9.60974 9.6112 9.61085 9.82618L9.62029 11.6637Z", fill: "#53DEE9" }),
            React.createElement("path", { opacity: "0.8", d: "M53.8712 15.7857C53.2964 15.6348 53.2964 14.8189 53.8712 14.6681L56.9643 13.8563C57.166 13.8033 57.3235 13.6458 57.3764 13.4441L58.1882 10.351C58.3391 9.77623 59.155 9.77623 59.3058 10.351L60.1176 13.4441C60.1706 13.6458 60.3281 13.8033 60.5298 13.8563L63.6229 14.6681C64.1977 14.8189 64.1977 15.6348 63.6229 15.7857L60.5298 16.5975C60.3281 16.6504 60.1706 16.8079 60.1176 17.0096L59.3058 20.1027C59.155 20.6775 58.3391 20.6775 58.1882 20.1027L57.3764 17.0096C57.3235 16.8079 57.166 16.6504 56.9643 16.5975L53.8712 15.7857Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M51.0823 29.9055C50.3505 27.1742 47.543 25.5533 44.8116 26.2851L17.6112 33.5735C14.8798 34.3053 13.2589 37.1128 13.9908 39.8441L18.546 56.8444C19.2778 59.5758 22.0853 61.1967 24.8167 60.4648L52.0171 53.1765C54.7485 52.4446 56.3694 49.6371 55.6375 46.9058L51.0823 29.9055Z", fill: "url(#paint0_linear_won)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.2737 36.0462L45.4742 28.7579C46.8399 28.392 48.2436 29.2024 48.6095 30.5681L53.1648 47.5684C53.5307 48.934 52.7202 50.3378 51.3546 50.7037L24.1541 57.9921C22.7884 58.358 21.3847 57.5475 21.0187 56.1819L16.4635 39.1816C16.0976 37.8159 16.9081 36.4122 18.2737 36.0462ZM44.8116 26.2851C47.543 25.5533 50.3505 27.1742 51.0823 29.9055L55.6375 46.9058C56.3694 49.6371 54.7485 52.4446 52.0171 53.1765L24.8167 60.4648C22.0853 61.1967 19.2778 59.5758 18.546 56.8444L13.9908 39.8441C13.2589 37.1128 14.8798 34.3053 17.6112 33.5735L44.8116 26.2851Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M35.2297 28.8525L27.1932 31.0059L34.3987 57.8973L42.4352 55.7439L35.2297 28.8525Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M54.5173 42.4023L52.3639 34.3658L15.1113 44.3476L17.2647 52.3841L54.5173 42.4023Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9264 46.3239L31.8613 48.485L32.1926 49.7213L40.2577 47.5603L39.9264 46.3239ZM29.7019 40.4262L37.767 38.2651L37.4358 37.0287L29.3707 39.1898L29.7019 40.4262Z", fill: "#7645D9" })),
            React.createElement("path", { d: "M54.8306 24.9448C55.3795 22.8962 54.1638 20.7906 52.1153 20.2417L17.4965 10.9657C15.448 10.4168 13.3424 11.6324 12.7935 13.681L11.8824 17.081C11.3335 19.1295 12.5492 21.2351 14.5977 21.784L49.2165 31.0601C51.265 31.609 53.3706 30.3933 53.9195 28.3448L54.8306 24.9448Z", fill: "url(#paint1_linear_won)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8339 13.4384L51.4527 22.7145C52.1355 22.8975 52.5408 23.5993 52.3578 24.2822L51.4468 27.6822C51.2638 28.3651 50.5619 28.7703 49.8791 28.5873L15.2603 19.3113C14.5775 19.1283 14.1722 18.4264 14.3552 17.7436L15.2662 14.3435C15.4492 13.6607 16.1511 13.2555 16.8339 13.4384ZM52.1153 20.2417C54.1638 20.7906 55.3795 22.8962 54.8306 24.9448L53.9195 28.3448C53.3706 30.3933 51.265 31.609 49.2165 31.0601L14.5977 21.784C12.5492 21.2351 11.3335 19.1295 11.8824 17.081L12.7935 13.681C13.3424 11.6324 15.448 10.4168 17.4965 10.9657L52.1153 20.2417Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M38.8242 16.6804L30.7877 14.527L27.8889 25.3454L35.9254 27.4988L38.8242 16.6804Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.4257 18.0799L30.4256 15.8399L30.7455 14.3999L38.8813 16.6573L38.4257 18.0799Z", fill: "#7645D9" }))),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear_won", x1: "31.2114", y1: "29.9293", x2: "38.4169", y2: "56.8207", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("linearGradient", { id: "paint1_linear_won", x1: "34.8059", y1: "15.6037", x2: "31.9071", y2: "26.4221", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("clipPath", { id: id },
                React.createElement("rect", { width: "64", height: "64", fill: "white" })))));
};

var Icon$J = function (props) {
    uniqueId("svg");
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip-path", transform: "translate(-3.08 -7.7)" },
                React.createElement("rect", { width: "128", height: "128", fill: "none" }))),
        React.createElement("title", null, "kitty-teamplayer"),
        React.createElement("g", { "clip-path": "url(#clip-path)" },
            React.createElement("g", null,
                React.createElement("g", null,
                    React.createElement("path", { d: "M57.66,21.83a.53.53,0,0,1,0,.12c0,.05,0,.11,0,.15a.26.26,0,0,0,0,.09.57.57,0,0,0,0,.13s0,.07,0,.1,0,.1,0,.13a.17.17,0,0,1,0,.08c0,.07,0,.15,0,.22l0,0c0,.07,0,.12,0,.17v.07h0a1.42,1.42,0,0,1-.05.16l0,.08c0,.06,0,.12-.08.2s0,0,0,.05a.75.75,0,0,1-.12.21l-.14.25,0,0v0c-.05.05-.08.13-.13.18l0,.05-.4.44,0,0,0,0-.09.08-.05.05-.09.07a2.31,2.31,0,0,0-.19.14l-.07.06a1.32,1.32,0,0,1-.2.12l0,0-.08.05a1.88,1.88,0,0,0-.24.14l-.07,0a3.64,3.64,0,0,1-.36.16,6.25,6.25,0,0,1-1.65.5,6.39,6.39,0,0,1-1.26.14c-2.38.06-3.88-1.13-4.37-2.51a1.89,1.89,0,0,0-.06-.18v0a13.17,13.17,0,0,1-.35-1.84c0-.38-.1-.78-.14-1.2v-.07c0-.1,0-.17,0-.27A38.57,38.57,0,0,1,47,16a25,25,0,0,1,.44-4.54c.46-2.32,1.24-3.55,2.37-3.76,2.16-.4,4.28,3.46,5.67,6.79a40.91,40.91,0,0,1,1.5,4.2A21,21,0,0,1,57.66,21.83Z", transform: "translate(-3.08 -7.7)", fill: "#017178" }),
                    React.createElement("path", { d: "M62.91,21.81S63.09,11.67,67.08,11s9.45,12.5,9.81,15.85C76.91,26.8,70.87,28.29,62.91,21.81Z", transform: "translate(-3.08 -7.7)", fill: "#1fc7d4" }),
                    React.createElement("path", { d: "M73.32,23.14a.76.76,0,0,1-.61.88,2,2,0,0,1-.45,0c-1,0-3.43-.25-6.56-3.15a.71.71,0,0,1-.24-.52c-.07-1.34-.13-5.69,2.13-6,.73-.08,1.9.21,3.76,3.74A22,22,0,0,1,73.32,23.14Z", transform: "translate(-3.08 -7.7)", fill: "#017178" }),
                    React.createElement("path", { d: "M41.61,25.84s-3.87-9.39-7.83-8.58-4.23,15.09-3.36,18.33C30.42,35.59,36.56,34.76,41.61,25.84Z", transform: "translate(-3.08 -7.7)", fill: "#1fc7d4" }),
                    React.createElement("path", { d: "M38.87,26.14c-2.54,4.88-5.68,5.41-5.81,5.44s-.08,0-.11,0a.75.75,0,0,1-.76-.58c-.37-1.57-.28-7.25,1-9.33a2,2,0,0,1,1.2-1c2.38-.55,4.15,3.92,4.49,4.83A.79.79,0,0,1,38.87,26.14Z", transform: "translate(-3.08 -7.7)", fill: "#017178" })),
                React.createElement("path", { d: "M85.72,39.54c1.91,13.34-9.66,24.33-25.55,26.6s-30.06-5-32-18.4,9.67-24.32,25.56-26.59S83.82,26.2,85.72,39.54Z", transform: "translate(-3.08 -7.7)", fill: "#1fc7d4" }),
                React.createElement("path", { d: "M35.06,60.11c6,5.14,15.24,7.43,25.11,6,14.24-2,25-11.07,25.72-22.53-3,8.41-12,15.53-23.81,18.69C51.87,65,42,64.15,35.06,60.11Z", transform: "translate(-3.08 -7.7)", fill: "#0098a1", "fill-rule": "evenodd" }),
                React.createElement("path", { d: "M54.44,44c.87,3.63-.42,5.39-2.41,5.87s-3.94-.51-4.81-4.14.42-5.38,2.41-5.86S53.57,40.36,54.44,44Z", transform: "translate(-3.08 -7.7)", fill: "#017178" }),
                React.createElement("path", { d: "M71.89,42c.13,3.73-1.48,5.2-3.53,5.27s-3.77-1.28-3.9-5S66,37.07,68,37,71.76,38.29,71.89,42Z", transform: "translate(-3.08 -7.7)", fill: "#017178" }),
                React.createElement("path", { d: "M60.65,49a1.31,1.31,0,0,0-1.12,1.47,4.66,4.66,0,0,0,5.34,3.83A5,5,0,0,0,68,52.7,1.3,1.3,0,1,0,66,51a2.43,2.43,0,0,1-1.48.76,2.05,2.05,0,0,1-2.42-1.58A1.31,1.31,0,0,0,60.65,49Z", transform: "translate(-3.08 -7.7)", fill: "#017178", "fill-rule": "evenodd" }),
                React.createElement("path", { d: "M60.65,49a1.31,1.31,0,0,0-1.12,1.47,2.06,2.06,0,0,1-1.94,2.14,2.38,2.38,0,0,1-1.65-.37,1.3,1.3,0,1,0-1.47,2.15,4.9,4.9,0,0,0,3.46.81,4.67,4.67,0,0,0,4.19-5.07A1.31,1.31,0,0,0,60.65,49Z", transform: "translate(-3.08 -7.7)", fill: "#017178", "fill-rule": "evenodd" }),
                React.createElement("g", null,
                    React.createElement("path", { d: "M28,75.06s0,.09,0,.12,0,.1.05.15,0,0,0,.07a.4.4,0,0,0,0,.13s0,.07,0,.1a.69.69,0,0,1,0,.13.12.12,0,0,1,0,.08,1.64,1.64,0,0,1,0,.22s0,0,0,.06a.76.76,0,0,0,0,.16v.08h0c0,.06,0,.11,0,.17v.09c0,.06,0,.13,0,.21s0,0,0,0a1.14,1.14,0,0,1,0,.24l-.07.28,0,0v0c0,.07,0,.15-.07.21l0,0a5.36,5.36,0,0,1-.26.54l0,0,0,0-.07.1s0,0,0,.06l-.07.1-.13.18-.06.09a1.14,1.14,0,0,1-.15.17l0,0-.06.07c-.06.08-.12.12-.18.2a.13.13,0,0,1-.06.05l-.3.26a7.05,7.05,0,0,1-1.44,1A7.13,7.13,0,0,1,24,81.1c-2.27.73-4.05,0-4.9-1.17,0-.05-.08-.09-.11-.15v0a14.1,14.1,0,0,1-.86-1.67L17.6,77l0-.08c0-.08-.06-.16-.1-.24a41.59,41.59,0,0,1-1.34-4.13,24.69,24.69,0,0,1-.86-4.48c-.22-2.35.17-3.75,1.2-4.27,2-1,5.09,2.1,7.37,4.89a41.72,41.72,0,0,1,2.63,3.61A21.17,21.17,0,0,1,28,75.06Z", transform: "translate(-3.08 -7.7)", fill: "#452a7a" }),
                    React.createElement("path", { d: "M33.78,73.6s-2.71-9.78.91-11.59,12.62,9.3,13.91,12.41C48.62,74.41,43.26,77.55,33.78,73.6Z", transform: "translate(-3.08 -7.7)", fill: "#9a6aff" }),
                    React.createElement("path", { d: "M44.14,71.92a.75.75,0,0,1-.34,1,1.91,1.91,0,0,1-.41.17c-.91.29-3.36.74-7.2-1.16a.75.75,0,0,1-.37-.43c-.45-1.26-1.74-5.42.35-6.32.67-.28,1.88-.33,4.66,2.52A22.12,22.12,0,0,1,44.14,71.92Z", transform: "translate(-3.08 -7.7)", fill: "#452a7a" }),
                    React.createElement("path", { d: "M14.5,83.51s-6.38-7.9-9.94-6,.22,15.67,2,18.53C6.54,96,12.2,93.5,14.5,83.51Z", transform: "translate(-3.08 -7.7)", fill: "#9a6aff" }),
                    React.createElement("path", { d: "M12,84.59c-1.05,5.39-3.91,6.79-4,6.86s-.08,0-.12,0a.76.76,0,0,1-.89-.34c-.8-1.4-2.32-6.87-1.67-9.24a2,2,0,0,1,.88-1.25c2.14-1.21,5.1,2.57,5.68,3.35A.81.81,0,0,1,12,84.59Z", transform: "translate(-3.08 -7.7)", fill: "#452a7a" })),
                React.createElement("path", { d: "M60.8,83.68c5.76,12.18-2,26.1-16.55,32.95s-30.21,4.06-36-8.12,2-26.1,16.55-33S55,71.49,60.8,83.68Z", transform: "translate(-3.08 -7.7)", fill: "#9a6aff" }),
                React.createElement("path", { d: "M61.67,98.48c-3.09,5.7-8.58,10.74-15.67,14.09-14.5,6.86-30.21,4.06-36-8.12a19.76,19.76,0,0,1-.87-14.81c-3.23,6-3.83,12.64-.88,18.87,5.76,12.18,21.46,15,36,8.12C53,112.5,59.29,105.81,61.67,98.48Z", transform: "translate(-3.08 -7.7)", fill: "#7645d9", "fill-rule": "evenodd" }),
                React.createElement("path", { d: "M41.59,90.84a1.3,1.3,0,0,1,1.82.31,6,6,0,0,1-1.74,8.29,1.31,1.31,0,0,1-1.51-2.13,3.4,3.4,0,0,0,1.12-4.65A1.3,1.3,0,0,1,41.59,90.84Z", transform: "translate(-3.08 -7.7)", fill: "#452a7a", "fill-rule": "evenodd" }),
                React.createElement("path", { d: "M41.59,90.84a1.3,1.3,0,0,1,1.82.31,3.39,3.39,0,0,0,4.75.49,1.31,1.31,0,1,1,1.51,2.13,6,6,0,0,1-8.39-1.11A1.3,1.3,0,0,1,41.59,90.84Z", transform: "translate(-3.08 -7.7)", fill: "#452a7a", "fill-rule": "evenodd" }),
                React.createElement("path", { d: "M33.62,90.33c2.6,2.68,2.4,4.85.93,6.28s-3.65,1.57-6.25-1.1-2.39-4.84-.92-6.28S31,87.66,33.62,90.33Z", transform: "translate(-3.08 -7.7)", fill: "#452a7a" }),
                React.createElement("path", { d: "M48.36,80.55c2.13,3.06,1.58,5.17-.1,6.34s-3.86,1-6-2.09-1.58-5.16.1-6.34S46.22,77.49,48.36,80.55Z", transform: "translate(-3.08 -7.7)", fill: "#452a7a" }),
                React.createElement("g", null,
                    React.createElement("path", { d: "M105.51,65a.83.83,0,0,1,0,.12s0,.1,0,.14a.41.41,0,0,1,0,.08.5.5,0,0,0,0,.13s0,.06,0,.08l-.07.12s0,0,0,.07-.08.13-.12.18,0,0,0,0l-.1.14,0,.06h0l-.11.12-.05.07a2.11,2.11,0,0,0-.15.15l0,0c0,.05-.13.1-.19.15l-.23.17,0,0,0,0c-.07,0-.12.09-.19.12l0,0a5.2,5.2,0,0,1-.53.26h-.08l-.12,0-.07,0-.11,0-.22.06-.1,0-.23,0h0l-.1,0-.26,0h-.47a6.66,6.66,0,0,1-1.73-.18,6.11,6.11,0,0,1-1.21-.36c-2.22-.86-3.15-2.54-3.06-4,0-.06,0-.12,0-.18v0a13,13,0,0,1,.39-1.83c.1-.37.21-.76.33-1.16l0-.07a2.41,2.41,0,0,0,.08-.25,41.43,41.43,0,0,1,1.57-4,25.76,25.76,0,0,1,2.16-4c1.32-2,2.51-2.8,3.63-2.55,2.16.46,2.62,4.84,2.62,8.45a42.38,42.38,0,0,1-.24,4.45A20.52,20.52,0,0,1,105.51,65Z", transform: "translate(-3.08 -7.7)", fill: "#ae5714" }),
                    React.createElement("path", { d: "M110.74,66.11s4.09-9.29,8-8.4,3.9,15.17,2.94,18.4C121.73,76.11,115.59,75.16,110.74,66.11Z", transform: "translate(-3.08 -7.7)", fill: "#ffc700" }),
                    React.createElement("path", { d: "M119.84,71.35a.75.75,0,0,1-.9.57,1.38,1.38,0,0,1-.43-.13c-.89-.34-3.07-1.55-4.85-5.44a.71.71,0,0,1,0-.57c.45-1.27,2.07-5.3,4.26-4.68.7.21,1.67.93,2,4.9A22,22,0,0,1,119.84,71.35Z", transform: "translate(-3.08 -7.7)", fill: "#ae5714" }),
                    React.createElement("path", { d: "M89.55,61.61s0-10.16-3.92-10.94S75.9,63,75.45,66.28C75.45,66.28,81.44,67.89,89.55,61.61Z", transform: "translate(-3.08 -7.7)", fill: "#ffc700" }),
                    React.createElement("path", { d: "M86.89,60.83c-4.22,3.52-7.32,2.8-7.45,2.78a.3.3,0,0,0-.1-.07.75.75,0,0,1-.47-.83c.26-1.58,2.54-6.79,4.54-8.21a2,2,0,0,1,1.48-.42c2.41.42,2.32,5.22,2.28,6.19A.76.76,0,0,1,86.89,60.83Z", transform: "translate(-3.08 -7.7)", fill: "#ae5714" })),
                React.createElement("path", { d: "M67.6,77.66c-2.82,13.18,8,24.94,23.66,28.29s30.34-3,33.16-16.14-8-24.93-23.66-28.29S70.42,64.48,67.6,77.66Z", transform: "translate(-3.08 -7.7)", fill: "#ffc700" }),
                React.createElement("path", { d: "M95,83.33a1.31,1.31,0,0,0-1.62.89,6,6,0,0,0,4.35,7.27A1.31,1.31,0,0,0,98.43,89a3.38,3.38,0,0,1-2.57-4A1.31,1.31,0,0,0,95,83.33Z", transform: "translate(-3.08 -7.7)", fill: "#ae5714", "fill-rule": "evenodd" }),
                React.createElement("path", { d: "M95,83.33a1.31,1.31,0,0,0-1.62.89,3.4,3.4,0,0,1-4.34,2,1.31,1.31,0,0,0-.73,2.51A6,6,0,0,0,95.86,85,1.31,1.31,0,0,0,95,83.33Z", transform: "translate(-3.08 -7.7)", fill: "#ae5714", "fill-rule": "evenodd" }),
                React.createElement("path", { d: "M89.7,77.42C88.92,81.06,87,82.1,85,81.67s-3.34-2.16-2.56-5.81,2.71-4.68,4.71-4.25S90.48,73.77,89.7,77.42Z", transform: "translate(-3.08 -7.7)", fill: "#ae5714" }),
                React.createElement("path", { d: "M108.71,83.38c-1.34,3.48-3.4,4.2-5.31,3.47s-3-2.65-1.63-6.13,3.39-4.21,5.31-3.48S110,79.89,108.71,83.38Z", transform: "translate(-3.08 -7.7)", fill: "#ae5714" }),
                React.createElement("path", { d: "M69.34,90.91c4.09,5.12,10.45,9.15,18.1,11.2,15.65,4.19,30.77-1.47,34.31-14.69A20.11,20.11,0,0,0,120,72.49c4.28,5.35,6.07,11.91,4.26,18.67-3.54,13.22-18.65,18.88-34.31,14.68C80.49,103.32,73,97.79,69.34,90.91Z", transform: "translate(-3.08 -7.7)", fill: "#eb8c00", "fill-rule": "evenodd" })))));
};

var Icon$I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 16" }, props),
        React.createElement("path", { d: "M10.0002 7.33L15.0002 14H3.00018L8.00018 7.33V2H10.0002V7.33ZM12.9602 0H5.04018C4.62018 0 4.39018 0.48 4.65018 0.81L6.00018 2.5V6.67L0.200175 14.4C-0.289825 15.06 0.180175 16 1.00018 16H17.0002C17.8202 16 18.2902 15.06 17.8002 14.4L12.0002 6.67V2.5L13.3502 0.81C13.6102 0.48 13.3802 0 12.9602 0Z" })));
};

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("path", { d: "M122.14,45.84a3.76,3.76,0,0,1,.42,4.8A292.37,292.37,0,0,1,52.84,121L50.7,122.5a4,4,0,0,1-5.08-.42L36,112.45A15,15,0,0,0,14.75,91.2L5.89,82.35a3.85,3.85,0,0,1,.49-5.86L8.52,75a285,285,0,0,0,68-68.63,3.65,3.65,0,0,1,5.58-.49l9,9A15,15,0,0,0,112.39,36.1Z", transform: "translate(0 0)", fill: "#e2d7ff" }),
        React.createElement("path", { d: "M126.4,48.5,92,92.07l-44.5,33.69-8.56-8.62-3.09-3.74,3.09-4.47L40,104.46l-.59-4.76-1.79-4.47-3-3.58-3.58-2.38L27.2,88.08H22.44l-5.07,1.79-3,2.68L7.25,83.91l11.62-1.74a212.59,212.59,0,0,0,99-42.29Z", transform: "translate(0 0)", fill: "#b19cff" }),
        React.createElement("path", { d: "M31.66,112.87a4.74,4.74,0,0,1,1.4-3.37l0,0A10.26,10.26,0,1,0,18.56,95h0a4.74,4.74,0,0,1-6.74,0L2.52,85.72A8.63,8.63,0,0,1,3.61,72.61l2.14-1.53L8.52,75,6.38,76.49a3.85,3.85,0,0,0-.49,5.86l9.28,9.27,0,0,0,0a15,15,0,0,1,21.26,21.25l0,0,0,0,9.2,9.2a4,4,0,0,0,5.08.42L52.84,121a292.37,292.37,0,0,0,69.72-70.34,3.76,3.76,0,0,0-.42-4.8l-9.67-9.67-.1.11-.11.11A15,15,0,0,1,91,15.13l.11-.1.11-.11L82.13,5.84a3.65,3.65,0,0,0-5.58.49A285,285,0,0,1,8.52,75L5.75,71.08A280.26,280.26,0,0,0,72.65,3.59,8.41,8.41,0,0,1,85.5,2.47l9.09,9.08a4.77,4.77,0,0,1,0,6.77l-.07.08A10.26,10.26,0,0,0,109,32.91l.08-.07a4.76,4.76,0,0,1,6.77,0l9.67,9.66a8.51,8.51,0,0,1,.95,10.9A297,297,0,0,1,55.6,124.86l-2.13,1.52a8.71,8.71,0,0,1-11.22-.93l-9.2-9.2A4.8,4.8,0,0,1,31.66,112.87Z", transform: "translate(0 0)", fill: "#452a7a", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M64,22.49l2.11,2.1A2.38,2.38,0,0,1,62.76,28l-2.11-2.1A2.38,2.38,0,1,1,64,22.49Z", transform: "translate(0 0)", fill: "#452a7a", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M72.87,31.33,75,33.44a2.38,2.38,0,0,1-3.37,3.37L69.5,34.7a2.38,2.38,0,0,1,3.37-3.37Z", transform: "translate(0 0)", fill: "#452a7a", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M83.82,45.66a2.38,2.38,0,0,1-3.37,0l-2.52-2.53a2.38,2.38,0,0,1,3.37-3.37l2.52,2.53A2.38,2.38,0,0,1,83.82,45.66Z", transform: "translate(0 0)", fill: "#452a7a", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M92.67,54.5a2.38,2.38,0,0,1-3.37,0L86.77,52a2.38,2.38,0,0,1,3.37-3.37l2.53,2.52A2.38,2.38,0,0,1,92.67,54.5Z", transform: "translate(0 0)", fill: "#452a7a", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M99,57.45l2.1,2.11a2.38,2.38,0,1,1-3.37,3.37l-2.1-2.11A2.38,2.38,0,0,1,99,57.45Z", transform: "translate(0 0)", fill: "#452a7a", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M107.83,66.3l2.11,2.1a2.38,2.38,0,1,1-3.37,3.37l-2.11-2.1a2.38,2.38,0,0,1,3.37-3.37Z", transform: "translate(0 0)", fill: "#452a7a", "fill-rule": "evenodd" }),
        React.createElement("g", null,
            React.createElement("path", { d: "M81.18,64.4a10.71,10.71,0,0,1,1.92-1.35,12.43,12.43,0,0,0-1.36-1.67q-.37-.39-.78-.75c-.54.47-1,1-1.54,1.47-.61.67-1.18,1.33-1.74,2a8.4,8.4,0,0,1,1.25-2.39,11.52,11.52,0,0,1,1.43-1.62,15.71,15.71,0,0,0-2.26-1.48c-.35.53-.66,1.07-1,1.63A23.48,23.48,0,0,0,76,62.63,8,8,0,0,1,76.56,60a11.62,11.62,0,0,1,.83-1.7,19.26,19.26,0,0,0-5.84-1.68h0c-3.38-2.83-9.8-6.89-11.79-5.14-1.46,1.29-.63,4.28.3,6.55a25,25,0,0,0-5.17,2.64c.53.42,1,.85,1.5,1.28a16.62,16.62,0,0,1,1.81,1.89l.07.08s.05.07.06.11l0,0a.61.61,0,0,0,.07.1l0,.07a.42.42,0,0,1,0,.1.09.09,0,0,1,0,.06,1.15,1.15,0,0,1,.06.17s0,0,0,0a1.09,1.09,0,0,0,0,.14l0,0v0l0,.13,0,.07,0,.17s0,0,0,0a.66.66,0,0,1,0,.2v.28h0a1.11,1.11,0,0,1,0,.19v0c0,.17-.06.32-.09.48v0l0,0s0,.07,0,.09,0,.05,0,.06l0,.09c0,.06,0,.11-.07.18l0,.07a1.3,1.3,0,0,1-.08.17v0l0,.07-.11.2s0,0,0,0a3.16,3.16,0,0,1-.18.27,5.83,5.83,0,0,1-1,1.06,5.28,5.28,0,0,1-.82.63,3.46,3.46,0,0,1-4.14.1l-.12-.1v0a11.27,11.27,0,0,1-1-1.14l-.61-.78,0-.05-.13-.18c-.32-.45-.65-.92-1-1.42a25.2,25.2,0,0,0-3.31,5.41c-2.19-1.24-5.33-2.59-6.83-1.2-2.19,2,2.31,10.36,4.71,13.46h0A19.25,19.25,0,0,0,45,88.83c.14-.09.29-.17.44-.25a11.7,11.7,0,0,1,2.51-1,8.63,8.63,0,0,1,2.68-.31c-.85.26-1.67.57-2.47.9a25.18,25.18,0,0,0-2.34,1.13l-.51.29a15.64,15.64,0,0,0,1.55,2.67c.14-.17.3-.33.45-.49a12.47,12.47,0,0,1,2.16-1.65,8.28,8.28,0,0,1,2.5-1,26.13,26.13,0,0,0-2.16,1.53,22.63,22.63,0,0,0-2,1.71l-.52.53c.24.31.51.61.78.9a12.5,12.5,0,0,0,1.71,1.49c.11-.19.21-.37.33-.56a12.3,12.3,0,0,1,1.74-2.09A8.74,8.74,0,0,1,54.09,91a22.86,22.86,0,0,0-1.75,2,22,22,0,0,0-1.53,2.1c-.12.18-.24.37-.35.56,6.87,4.35,17,1.08,25.27-6.89s12-18,7.79-25.07c-.66.35-1.31.75-2,1.17a25,25,0,0,0-2.14,1.57A8.35,8.35,0,0,1,81.18,64.4ZM62.64,58.79a12.86,12.86,0,0,1-.82-1.36c-.66-1.27-1.24-3-.23-3.74.47-.37,1.43-.66,4.24,1a24.27,24.27,0,0,1,2.47,1.71,7.92,7.92,0,0,1,1,.94.62.62,0,0,1,0,.87,1.53,1.53,0,0,1-.3.23c-.65.42-2.51,1.29-6,.58A.55.55,0,0,1,62.64,58.79Zm-18,21.69a.32.32,0,0,0-.09,0,.62.62,0,0,1-.78-.09.94.94,0,0,0-.1-.1c-1-1.1-3.18-4.94-3.16-6.89A1.65,1.65,0,0,1,41,72.25c1-1,3,0,4.22.75.46.31.83.58,1,.72a.67.67,0,0,1,.24.45C46.7,78.69,44.72,80.4,44.64,80.48Zm14.75,3.45a1.73,1.73,0,0,1-.21.17c-1.11.72-2.91.23-4.17-1.2s-1.56-3.53-.47-4.49A2.3,2.3,0,0,1,56.65,78a4.52,4.52,0,0,1,2.27,1.44c1.31,1.49,1.55,3.43.56,4.42Zm13.86-9.11c0,.15,0,.28.06.43s0,0,0,0a4.57,4.57,0,0,1-.95,3.58,10.4,10.4,0,0,1,.92,2.66,3.55,3.55,0,0,1-.58,3.26,2,2,0,0,1-.38.31,4,4,0,0,1-2.86.37,10.25,10.25,0,0,1-2.73-.86,4.81,4.81,0,0,1-.57.44,4.92,4.92,0,0,1-3,.69h0a1.65,1.65,0,0,1-.42-.06A.57.57,0,1,1,63,84.55l.25,0h0a3.45,3.45,0,0,0,2.9-1,5,5,0,0,0,1-3.2,3.61,3.61,0,0,1-2.46.16c-.8-.25-1-.73-1-1a1.86,1.86,0,0,1,.37-1.19,6.75,6.75,0,0,1,.83-1c.59-.62,1.44-1.35,2.18-1.27a1.33,1.33,0,0,1,1.08,1,3.63,3.63,0,0,1-.08,2.47,5.13,5.13,0,0,0,3.19-1.1,3.38,3.38,0,0,0,.89-3v0a0,0,0,0,1,0,0,3.31,3.31,0,0,1,0-.33.57.57,0,0,1,.47-.65A.57.57,0,0,1,73.25,74.82ZM69.51,66l0,0a10.61,10.61,0,0,0-.57,1.36,7.55,7.55,0,0,0-.35,1.38c0,.22-.06.46-.08.68v.35a1.07,1.07,0,0,0,0,.18h0a5.89,5.89,0,0,1,.67-.65,4.8,4.8,0,0,1,2.35-1,.2.2,0,0,1,.23.18.19.19,0,0,1-.1.2h0c-.17.1-.34.17-.5.28a3.82,3.82,0,0,0-.47.31,4.08,4.08,0,0,0-.82.73,5.06,5.06,0,0,0-.65.87c-.09.15-.16.31-.24.48a1.54,1.54,0,0,0-.1.24l0,.12s0,0,0,0v.06a.59.59,0,0,1-.74.38.56.56,0,0,1-.38-.38,6.17,6.17,0,0,1-.31-1.66,4.85,4.85,0,0,1,0-.85,5.68,5.68,0,0,1,.17-.82,5.6,5.6,0,0,1,.65-1.53,5,5,0,0,1,1-1.24.21.21,0,0,1,.29,0A.2.2,0,0,1,69.51,66Z", transform: "translate(0 0)", fill: "#452a7a" }),
            React.createElement("g", null,
                React.createElement("path", { d: "M58.19,63.83l.06.08s.06.07.07.11l0,0a.31.31,0,0,0,.07.09l0,.07,0,.11s0,0,0,.06a1.15,1.15,0,0,1,.06.17s0,0,0,0a.59.59,0,0,0,0,.13v.08l0,.13,0,.07,0,.17s0,0,0,0a1.27,1.27,0,0,1,0,.2v.28h0a1.11,1.11,0,0,1,0,.19v0c0,.17-.06.32-.09.48v0l0,0s0,.07,0,.09,0,.05,0,.06l0,.09c0,.06,0,.11-.07.17l0,.08a1.3,1.3,0,0,1-.08.17v0l0,.07a1.28,1.28,0,0,1-.11.2.09.09,0,0,1,0,0,3.16,3.16,0,0,1-.18.27,5.83,5.83,0,0,1-1,1.06,5.28,5.28,0,0,1-.82.63,3.46,3.46,0,0,1-4.14.1l-.11-.1,0,0a10.27,10.27,0,0,1-1-1.14l-.61-.78,0-.05-.13-.18c-.32-.45-.65-.92-1-1.42s-.65-1-1-1.58a21.54,21.54,0,0,1-1.62-3.38c-.67-1.82-.65-3,.06-3.65,1.35-1.21,4.48.61,6.88,2.35.46.34.91.68,1.35,1s1,.85,1.5,1.28A16.62,16.62,0,0,1,58.19,63.83Z", transform: "translate(0 0)", fill: "#9a6aff" }),
                React.createElement("path", { d: "M57.65,68.88q-.16.16-.33.3a5.4,5.4,0,0,1-.89.68,3.87,3.87,0,0,1-4.64.06l-.06,0-.09-.08a11.85,11.85,0,0,1-1.08-1.19c-.2-.25-.41-.52-.61-.79l-.05-.08a.85.85,0,0,0-.11-.14c-.34-.48-.67-1-1-1.46s-.69-1.11-1-1.6a21.32,21.32,0,0,1-1.66-3.45c-.73-2-.69-3.36.18-4.13,1.26-1.13,3.77-.35,7.44,2.32.48.36.94.71,1.36,1,.59.46,1.09.89,1.53,1.3a16.54,16.54,0,0,1,1.85,1.93.27.27,0,0,1,.07.08l0,.08,0,0,.16.2V64a.39.39,0,0,1,0,.09l0,.06a.4.4,0,0,1,.06.13l0,0,0,0a.83.83,0,0,1,0,.15l.07.25v.12a2.23,2.23,0,0,1,0,.23v.08a2.08,2.08,0,0,1,0,.25v.33c0,.08,0,.14,0,.19v0c0,.15-.05.29-.08.43l-.06.21s0,0,0,.06a.58.58,0,0,1,0,.13l0,.06,0,.12,0,.09a2,2,0,0,1-.09.2v0a.58.58,0,0,1,0,.11h0c0,.07-.06.11-.08.15a.05.05,0,0,0,0,0,.85.85,0,0,1-.09.14l-.18.27A6.8,6.8,0,0,1,57.65,68.88ZM46.9,57.65c-.51.5-.47,1.56.1,3.13a20.8,20.8,0,0,0,1.59,3.31c.28.48.6,1,1,1.57s.63.94,1,1.39l.12.17.05.08.58.75a12.47,12.47,0,0,0,1,1.09l.06,0,.09.08c.69.57,2,.84,3.58-.16a4.35,4.35,0,0,0,.76-.59,5.55,5.55,0,0,0,.89-1,2.79,2.79,0,0,0,.17-.25l0-.05,0-.09,0-.05.09-.2a.08.08,0,0,0,0,0l.05-.11a1.13,1.13,0,0,1,.07-.18l0-.14s0,0,0-.06l0-.11c0-.12.05-.23.07-.36v-.07h0l0,0,0-.16v-.32a.64.64,0,0,1,0-.09.36.36,0,0,0,0-.11l0-.22a.3.3,0,0,1,0-.09l-.05-.15,0-.1-.07-.14h0l0-.05h0l0-.06,0,0-.11-.17h0a16.86,16.86,0,0,0-1.77-1.83c-.43-.4-.91-.81-1.48-1.26-.41-.33-.86-.68-1.33-1-3.15-2.28-5.46-3.15-6.33-2.37Zm11.82,6.17Z", transform: "translate(0 0)", fill: "#452a7a" })),
            React.createElement("path", { d: "M69.33,57.37a.62.62,0,0,1,0,.87,1.53,1.53,0,0,1-.3.23c-.65.42-2.51,1.29-6,.58a.55.55,0,0,1-.38-.26,12.86,12.86,0,0,1-.82-1.36c-.66-1.27-1.24-3-.23-3.74.47-.37,1.43-.66,4.24,1a24.27,24.27,0,0,1,2.47,1.71A7.92,7.92,0,0,1,69.33,57.37Z", transform: "translate(0 0)", fill: "#9a6aff" }),
            React.createElement("path", { d: "M46.41,74.17c.29,4.52-1.69,6.23-1.77,6.31a.32.32,0,0,0-.09,0,.62.62,0,0,1-.78-.09.94.94,0,0,0-.1-.1c-1-1.1-3.18-4.94-3.16-6.89A1.65,1.65,0,0,1,41,72.25c1-1,3,0,4.22.75.46.31.83.58,1,.72A.67.67,0,0,1,46.41,74.17Z", transform: "translate(0 0)", fill: "#9a6aff" }),
            React.createElement("path", { d: "M50.63,87.25c-.85.26-1.67.57-2.47.9a25.18,25.18,0,0,0-2.34,1.13l-.51.29c-.58.34-1.14.7-1.7,1.08-.36.24-.7.51-1.07.77-.18.11-.34.28-.52.4l-.55.4c.12-.19.26-.38.39-.56a5.47,5.47,0,0,1,.41-.54,10.84,10.84,0,0,1,.95-1A11.56,11.56,0,0,1,45,88.83c.14-.09.29-.17.44-.25a11.7,11.7,0,0,1,2.51-1A8.63,8.63,0,0,1,50.63,87.25Z", transform: "translate(0 0)", fill: "#9a6aff" }),
            React.createElement("path", { d: "M52,89.08a26.13,26.13,0,0,0-2.16,1.53,22.63,22.63,0,0,0-2,1.71l-.52.53c-.43.44-.84.89-1.24,1.37-.29.33-.55.68-.82,1-.15.17-.27.36-.4.53s-.27.35-.41.53c.07-.21.14-.43.22-.63a4.85,4.85,0,0,1,.27-.62,11.47,11.47,0,0,1,.65-1.19,10.84,10.84,0,0,1,1.26-1.62c.14-.17.3-.33.45-.49a12.47,12.47,0,0,1,2.16-1.65A8.28,8.28,0,0,1,52,89.08Z", transform: "translate(0 0)", fill: "#9a6aff" }),
            React.createElement("path", { d: "M54.09,91a22.86,22.86,0,0,0-1.75,2,22,22,0,0,0-1.53,2.1c-.12.18-.24.37-.35.56-.34.55-.66,1.11-1,1.68-.2.38-.39.78-.58,1.18a3.61,3.61,0,0,0-.26.61c-.09.19-.18.41-.29.6,0-.23,0-.44.08-.66a4.94,4.94,0,0,1,.12-.67,9.65,9.65,0,0,1,.37-1.3,10.28,10.28,0,0,1,.87-1.87c.11-.19.21-.37.33-.56a12.3,12.3,0,0,1,1.74-2.09A8.74,8.74,0,0,1,54.09,91Z", transform: "translate(0 0)", fill: "#9a6aff" }),
            React.createElement("path", { d: "M81.82,54l-.44.5c-.15.17-.31.31-.46.49-.29.33-.59.65-.86,1a23.82,23.82,0,0,0-1.57,2.06c-.14.19-.27.38-.39.58-.35.53-.66,1.07-1,1.63A23.48,23.48,0,0,0,76,62.63,8,8,0,0,1,76.56,60a11.62,11.62,0,0,1,.83-1.7,7.42,7.42,0,0,1,.44-.7,11.14,11.14,0,0,1,1.78-2,9.62,9.62,0,0,1,1.06-.85,4.15,4.15,0,0,1,.57-.35C81.43,54.24,81.63,54.11,81.82,54Z", transform: "translate(0 0)", fill: "#9a6aff" }),
            React.createElement("path", { d: "M85.58,57.33a4.73,4.73,0,0,1-.56.35c-.19.12-.39.22-.56.35-.37.24-.74.47-1.1.72a21.07,21.07,0,0,0-2,1.58c-.12.1-.24.19-.35.3-.54.47-1,1-1.54,1.47-.61.67-1.18,1.33-1.74,2a8.4,8.4,0,0,1,1.25-2.39,11.52,11.52,0,0,1,1.43-1.62l.42-.37A11.47,11.47,0,0,1,83,58.23a11.34,11.34,0,0,1,1.24-.54,5.52,5.52,0,0,1,.65-.2A5.13,5.13,0,0,1,85.58,57.33Z", transform: "translate(0 0)", fill: "#9a6aff" }),
            React.createElement("path", { d: "M88.65,61.58a5.39,5.39,0,0,1-.64.22c-.21.07-.42.13-.62.21-.42.16-.83.3-1.23.47a24.88,24.88,0,0,0-2.35,1.07,2.69,2.69,0,0,0-.29.16c-.66.35-1.31.75-2,1.17a25,25,0,0,0-2.14,1.57,8.35,8.35,0,0,1,1.75-2,10.71,10.71,0,0,1,1.92-1.35,2,2,0,0,1,.32-.18,10.73,10.73,0,0,1,2.54-1,8.43,8.43,0,0,1,1.33-.25c.23,0,.46,0,.68,0Z", transform: "translate(0 0)", fill: "#9a6aff" }),
            React.createElement("path", { d: "M73.25,74.82c0,.15,0,.28.06.43s0,0,0,0a4.57,4.57,0,0,1-.95,3.58,10.4,10.4,0,0,1,.92,2.66,3.55,3.55,0,0,1-.58,3.26,2,2,0,0,1-.38.31,4,4,0,0,1-2.86.37,10.25,10.25,0,0,1-2.73-.86,4.81,4.81,0,0,1-.57.44,4.92,4.92,0,0,1-3,.69h0a1.65,1.65,0,0,1-.42-.06A.57.57,0,1,1,63,84.55l.25,0h0a3.45,3.45,0,0,0,2.9-1,5,5,0,0,0,1-3.2,3.61,3.61,0,0,1-2.46.16c-.8-.25-1-.73-1-1a1.86,1.86,0,0,1,.37-1.19,6.75,6.75,0,0,1,.83-1c.59-.62,1.44-1.35,2.18-1.27a1.33,1.33,0,0,1,1.08,1,3.63,3.63,0,0,1-.08,2.47,5.13,5.13,0,0,0,3.19-1.1,3.38,3.38,0,0,0,.89-3v0a0,0,0,0,1,0,0,3.31,3.31,0,0,1,0-.33.57.57,0,0,1,.47-.65A.57.57,0,0,1,73.25,74.82Z", transform: "translate(0 0)", fill: "#9a6aff" }),
            React.createElement("path", { d: "M69.48,65.73a.2.2,0,0,1,0,.22l0,0a10.61,10.61,0,0,0-.57,1.36,7.55,7.55,0,0,0-.35,1.38c0,.22-.06.46-.08.68v.35a1.07,1.07,0,0,0,0,.18h0a5.89,5.89,0,0,1,.67-.65,4.8,4.8,0,0,1,2.35-1,.2.2,0,0,1,.23.18.19.19,0,0,1-.1.2h0c-.17.1-.34.17-.5.28a3.82,3.82,0,0,0-.47.31,4.08,4.08,0,0,0-.82.73,5.06,5.06,0,0,0-.65.87c-.09.15-.16.31-.24.48a1.54,1.54,0,0,0-.1.24l0,.12s0,0,0,0v.06a.59.59,0,0,1-.74.38.56.56,0,0,1-.38-.38,6.17,6.17,0,0,1-.31-1.66,4.85,4.85,0,0,1,0-.85,5.68,5.68,0,0,1,.17-.82,5.6,5.6,0,0,1,.65-1.53,5,5,0,0,1,1-1.24A.21.21,0,0,1,69.48,65.73Z", transform: "translate(0 0)", fill: "#9a6aff" }),
            React.createElement("path", { d: "M58.92,79.43c1.31,1.49,1.55,3.43.56,4.42l-.09.08a1.73,1.73,0,0,1-.21.17c-1.11.72-2.91.23-4.17-1.2s-1.56-3.53-.47-4.49A2.3,2.3,0,0,1,56.65,78,4.52,4.52,0,0,1,58.92,79.43Z", transform: "translate(0 0)", fill: "#9a6aff" }))));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "linear-gradient", x1: "64", y1: "130", x2: "64", y2: "2", gradientTransform: "matrix(1, 0, 0, -1, 0, 130)", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { offset: "0", "stop-color": "#9d91ff" }),
                React.createElement("stop", { offset: "1", "stop-color": "#7f7afc" }))),
        React.createElement("circle", { cx: "64", cy: "64", r: "64", fill: "url(#linear-gradient)" }),
        React.createElement("path", { d: "M104.17,50.61a2.61,2.61,0,0,1,.29,3.34A203.68,203.68,0,0,1,55.84,103l-1.49,1.06a2.75,2.75,0,0,1-3.54-.29L44.1,97.06A10.48,10.48,0,0,0,29.28,82.24l-6.17-6.18A2.68,2.68,0,0,1,23.45,72l1.49-1.06A198.78,198.78,0,0,0,72.38,23.05a2.55,2.55,0,0,1,3.89-.34L82.55,29A10.48,10.48,0,0,0,97.37,43.81Z", fill: "#e2d7ff" }),
        React.createElement("path", { d: "M107.14,52.46l-24,30.39-31,23.49-6-6L44,97.72l2.16-3.12.75-3.12-.42-3.32-1.24-3.11-2.08-2.5-2.49-1.66L38,80.06H34.65l-3.54,1.25L29,83.18l-5-6,8.11-1.21a148.22,148.22,0,0,0,69-29.49Z", fill: "#b19cff" }),
        React.createElement("path", { d: "M41.07,97.35a3.34,3.34,0,0,1,1-2.35h0A7.16,7.16,0,0,0,31.94,84.86v0a3.33,3.33,0,0,1-2.35,1,3.29,3.29,0,0,1-2.35-1l-6.47-6.47a6,6,0,0,1,.76-9.14L23,68.21l1.93,2.71L23.45,72a2.69,2.69,0,0,0-.34,4.09l6.47,6.46v0h0A10.48,10.48,0,0,1,44.43,97.32l0,0h0l6.41,6.42a2.75,2.75,0,0,0,3.54.29L55.84,103a203.68,203.68,0,0,0,48.62-49,2.61,2.61,0,0,0-.29-3.34l-6.74-6.74-.08.07-.07.08A10.48,10.48,0,0,1,82.46,29.2l.07-.08.08-.07-6.34-6.34a2.55,2.55,0,0,0-3.89.34A198.78,198.78,0,0,1,24.94,70.92L23,68.21A195.4,195.4,0,0,0,69.66,21.15a5.87,5.87,0,0,1,9-.79L85,26.7a3.32,3.32,0,0,1,0,4.72l-.05,0A7.16,7.16,0,0,0,95,41.59l0-.05a3.32,3.32,0,0,1,4.73,0l6.74,6.74a5.94,5.94,0,0,1,.66,7.6,207.19,207.19,0,0,1-49.41,49.85l-1.49,1.06a6.07,6.07,0,0,1-7.82-.65L42.05,99.7A3.3,3.3,0,0,1,41.07,97.35Z", fill: "#452a7a", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M63.64,34.32l1.47,1.47a1.66,1.66,0,1,1-2.35,2.35l-1.47-1.47a1.66,1.66,0,0,1,2.35-2.35Z", fill: "#452a7a", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M69.81,40.49,71.28,42a1.66,1.66,0,1,1-2.35,2.35l-1.47-1.47a1.66,1.66,0,1,1,2.35-2.35Z", fill: "#452a7a", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M77.45,50.48a1.66,1.66,0,0,1-2.35,0l-1.76-1.76a1.66,1.66,0,0,1,2.35-2.35l1.76,1.76A1.66,1.66,0,0,1,77.45,50.48Z", fill: "#452a7a", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M83.62,56.65a1.66,1.66,0,0,1-2.35,0l-1.76-1.76a1.66,1.66,0,0,1,2.35-2.35l1.76,1.76A1.66,1.66,0,0,1,83.62,56.65Z", fill: "#452a7a", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M88,58.7l1.47,1.47a1.66,1.66,0,0,1-2.35,2.35l-1.47-1.47A1.66,1.66,0,0,1,88,58.7Z", fill: "#452a7a", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M94.19,64.87l1.47,1.47a1.66,1.66,0,0,1-2.35,2.35l-1.47-1.47a1.66,1.66,0,0,1,2.35-2.35Z", fill: "#452a7a", "fill-rule": "evenodd" }),
        React.createElement("g", null,
            React.createElement("path", { d: "M75.61,63.55A7.92,7.92,0,0,1,77,62.6a9.28,9.28,0,0,0-1-1.16l-.55-.52c-.37.32-.72.67-1.07,1s-.82.92-1.22,1.41A5.94,5.94,0,0,1,74,61.69a8.1,8.1,0,0,1,1-1.12,10.68,10.68,0,0,0-1.57-1c-.24.37-.46.75-.67,1.14A17.84,17.84,0,0,0,72,62.31a5.79,5.79,0,0,1,.41-1.83A7.69,7.69,0,0,1,73,59.29a13,13,0,0,0-4.08-1.17h0c-2.35-2-6.83-4.81-8.21-3.59-1,.9-.45,3,.21,4.57a17.56,17.56,0,0,0-3.61,1.84c.36.3.72.6,1,.9a10.65,10.65,0,0,1,1.27,1.31.21.21,0,0,1,0,.06l.05.07s0,0,0,0a.25.25,0,0,0,0,.07s0,0,0,0a.25.25,0,0,1,0,.07s0,0,0,0a1.17,1.17,0,0,0,0,.11v0a.92.92,0,0,1,0,.09l0,0h0a.29.29,0,0,0,0,.09v0a.6.6,0,0,0,0,.12v0a.66.66,0,0,1,0,.14v.2h0a.57.57,0,0,0,0,.13v0c0,.11,0,.22-.06.34h0v0s0,0,0,.07a0,0,0,0,0,0,0l0,.07s0,.08,0,.12a.17.17,0,0,0,0,0l-.06.12v0s0,0,0,0a1,1,0,0,1-.08.14s0,0,0,0a1.57,1.57,0,0,1-.12.19,4.16,4.16,0,0,1-.67.74,3.41,3.41,0,0,1-.58.44,2.4,2.4,0,0,1-2.88.07.27.27,0,0,1-.08-.07h0a7.6,7.6,0,0,1-.72-.8q-.21-.25-.42-.54l0,0L54,65.58c-.23-.31-.46-.65-.68-1A17.6,17.6,0,0,0,51,68.36c-1.52-.87-3.71-1.81-4.76-.83-1.52,1.4,1.61,7.22,3.29,9.38h0a13.38,13.38,0,0,0,.87,3.68c.1-.07.2-.12.3-.18a7.72,7.72,0,0,1,1.76-.71,6.18,6.18,0,0,1,1.87-.22c-.6.19-1.17.4-1.73.63s-1.1.5-1.63.79l-.35.2A11,11,0,0,0,51.67,83c.1-.12.21-.23.32-.34a8.41,8.41,0,0,1,1.5-1.15,5.56,5.56,0,0,1,1.75-.71c-.53.34-1,.69-1.51,1.07A15.24,15.24,0,0,0,52.37,83l-.37.37a6.57,6.57,0,0,0,.55.62,8.86,8.86,0,0,0,1.19,1c.07-.13.15-.26.23-.38a8.46,8.46,0,0,1,1.21-1.46,6.11,6.11,0,0,1,1.54-1.08A15.54,15.54,0,0,0,55.5,83.5,13.65,13.65,0,0,0,54.43,85l-.24.39c4.78,3,11.84.76,17.62-4.8S80.14,68,77.24,63.07c-.46.24-.91.52-1.36.81A17.31,17.31,0,0,0,74.39,65,5.94,5.94,0,0,1,75.61,63.55ZM62.68,59.64a9.36,9.36,0,0,1-.57-1c-.47-.89-.87-2.06-.16-2.61.33-.25,1-.46,3,.72A16.89,16.89,0,0,1,66.63,58a5.55,5.55,0,0,1,.72.66.43.43,0,0,1,0,.6,1.08,1.08,0,0,1-.21.16,5.5,5.5,0,0,1-4.15.41A.42.42,0,0,1,62.68,59.64ZM50.13,74.76s0,0-.06,0a.44.44,0,0,1-.55-.06l-.07-.07c-.68-.77-2.22-3.44-2.2-4.81a1.13,1.13,0,0,1,.31-.82c.73-.71,2.08,0,2.94.53a8.22,8.22,0,0,1,.69.5.44.44,0,0,1,.17.31C51.57,73.51,50.19,74.7,50.13,74.76Zm10.29,2.41-.15.12a2.4,2.4,0,0,1-2.91-.84c-.94-1.06-1.09-2.46-.33-3.13A1.58,1.58,0,0,1,58.5,73a3.12,3.12,0,0,1,1.59,1c.91,1,1.08,2.39.38,3.08Zm9.66-6.35c0,.1,0,.19,0,.29s0,0,0,0a3.19,3.19,0,0,1-.67,2.5,7.19,7.19,0,0,1,.65,1.85,2.48,2.48,0,0,1-.41,2.28,1.4,1.4,0,0,1-.26.21,2.81,2.81,0,0,1-2,.26,7.19,7.19,0,0,1-1.9-.6,2.87,2.87,0,0,1-.4.31,3.45,3.45,0,0,1-2.07.48h0a1.2,1.2,0,0,1-.29,0,.4.4,0,0,1,.16-.78l.17,0h0a2.39,2.39,0,0,0,2-.72,3.61,3.61,0,0,0,.71-2.23,2.47,2.47,0,0,1-1.71.11.88.88,0,0,1-.71-.7,1.33,1.33,0,0,1,.25-.83,5.17,5.17,0,0,1,.58-.72c.41-.44,1-1,1.52-.89a.89.89,0,0,1,.75.67,2.52,2.52,0,0,1,0,1.73,3.6,3.6,0,0,0,2.22-.77,2.32,2.32,0,0,0,.62-2.07h0v0a2.08,2.08,0,0,0,0-.23.4.4,0,0,1,.79-.12Zm-2.61-6.19,0,0a8.55,8.55,0,0,0-.4.94,5.62,5.62,0,0,0-.24,1c0,.16,0,.32-.06.48v.24a.56.56,0,0,0,0,.13h0A4,4,0,0,1,67.2,67a3.12,3.12,0,0,1,.78-.47,3.32,3.32,0,0,1,.86-.23.13.13,0,0,1,.16.12.13.13,0,0,1-.07.14h0c-.12.07-.25.12-.36.19l-.33.22a3.06,3.06,0,0,0-.57.51,4,4,0,0,0-.45.61c-.06.1-.11.21-.17.33s-.05.11-.07.17l0,.08s0,0,0,0v0h0a.4.4,0,0,1-.51.27.45.45,0,0,1-.27-.27,4.48,4.48,0,0,1-.21-1.16,3.9,3.9,0,0,1,0-.59c0-.19.06-.39.12-.58a4.15,4.15,0,0,1,.46-1.06,3.35,3.35,0,0,1,.73-.87.14.14,0,0,1,.2,0A.16.16,0,0,1,67.47,64.63Z", fill: "#452a7a" }),
            React.createElement("g", null,
                React.createElement("path", { d: "M59.58,63.15a.21.21,0,0,1,0,.06l.05.07s0,0,0,0,0,0,0,.06l0,0a.16.16,0,0,1,0,.08s0,0,0,0a.61.61,0,0,1,0,.12v0a.92.92,0,0,1,0,.09l0,0h0s0,.06,0,.09l0,0a.6.6,0,0,0,0,.12s0,0,0,0a.61.61,0,0,1,0,.14v.2h0s0,.09,0,.13v0c0,.11,0,.22-.06.33v0s0,0,0,.07,0,0,0,0l0,.07s0,.08,0,.12a.14.14,0,0,0,0,.06l-.06.11v0s0,0,0,0a.64.64,0,0,1-.08.14s0,0,0,0a1.18,1.18,0,0,1-.13.18,3.74,3.74,0,0,1-.66.74,3.29,3.29,0,0,1-.58.44,2.4,2.4,0,0,1-2.88.07s-.06,0-.08-.07h0a7.6,7.6,0,0,1-.72-.8q-.21-.25-.42-.54l0,0L54,65.58c-.23-.31-.46-.64-.68-1s-.46-.73-.67-1.1a14.12,14.12,0,0,1-1.13-2.36c-.47-1.27-.46-2.11,0-2.54.94-.85,3.12.42,4.8,1.63l.94.72c.36.3.72.6,1,.89A11.38,11.38,0,0,1,59.58,63.15Z", fill: "#9a6aff" }),
                React.createElement("path", { d: "M59.2,66.67a2.19,2.19,0,0,1-.23.21,3.83,3.83,0,0,1-.62.48,2.7,2.7,0,0,1-3.23,0l0,0-.06,0a9.15,9.15,0,0,1-.75-.83c-.14-.18-.29-.36-.43-.55l0-.06a.36.36,0,0,0-.07-.1c-.24-.33-.47-.67-.69-1s-.48-.78-.68-1.12a14.35,14.35,0,0,1-1.15-2.41c-.52-1.4-.49-2.34.12-2.87.88-.79,2.63-.25,5.19,1.61l1,.73c.41.33.75.62,1.06.91A12.93,12.93,0,0,1,59.82,63l0,.06,0,.06v0l.11.14v0l0,.06v0a.39.39,0,0,1,0,.09v0l0,0,0,.1,0,.17v0l0,.06c0,.06,0,.11,0,.16h0v0h0a1.09,1.09,0,0,1,0,.18v.23a.45.45,0,0,1,0,.13v0l-.06.3,0,.14v0s0,0,0,.09l0,0s0,.06,0,.08l0,.07-.06.14h0a.34.34,0,0,1,0,.08h0a.54.54,0,0,1-.06.11v0a.44.44,0,0,1-.06.1c0,.07-.09.13-.13.19A4.51,4.51,0,0,1,59.2,66.67Zm-7.5-7.83c-.35.35-.32,1.09.08,2.18a13.91,13.91,0,0,0,1.1,2.31c.2.34.42.7.67,1.09s.44.66.67,1l.08.12,0,0,.41.52a6.68,6.68,0,0,0,.69.76l0,0,.06,0a2.09,2.09,0,0,0,2.5-.11,3,3,0,0,0,.53-.41,3.66,3.66,0,0,0,.62-.68,1.88,1.88,0,0,0,.12-.18l0,0,0-.06a.05.05,0,0,0,0,0l.07-.14s0,0,0,0a.49.49,0,0,0,0-.07c0-.06,0-.09.05-.13l0-.09a.07.07,0,0,1,0,0l0-.07a2.21,2.21,0,0,0,0-.25v0h0v0l0-.11v-.23s0,0,0-.06,0-.05,0-.08l0-.15,0-.06,0-.11,0-.06,0-.11h0l0,0h0l0,0h0l-.08-.12h0a13.65,13.65,0,0,0-1.23-1.28c-.3-.27-.64-.56-1-.87s-.6-.48-.93-.72c-2.19-1.59-3.8-2.2-4.41-1.65ZM60,63.15Z", fill: "#452a7a" })),
            React.createElement("path", { d: "M67.35,58.65a.43.43,0,0,1,0,.6,1.08,1.08,0,0,1-.21.16,5.5,5.5,0,0,1-4.15.41.42.42,0,0,1-.27-.18,9.36,9.36,0,0,1-.57-1c-.47-.89-.87-2.06-.16-2.61.33-.25,1-.46,3,.72A16.89,16.89,0,0,1,66.63,58,5.55,5.55,0,0,1,67.35,58.65Z", fill: "#9a6aff" }),
            React.createElement("path", { d: "M51.36,70.36c.21,3.15-1.17,4.34-1.23,4.4s0,0-.06,0a.44.44,0,0,1-.55-.06l-.07-.07c-.68-.77-2.22-3.44-2.2-4.81a1.13,1.13,0,0,1,.31-.82c.73-.71,2.08,0,2.94.53a8.22,8.22,0,0,1,.69.5A.44.44,0,0,1,51.36,70.36Z", fill: "#9a6aff" }),
            React.createElement("path", { d: "M54.31,79.48c-.6.19-1.17.4-1.73.63s-1.1.5-1.63.79l-.35.2c-.41.23-.8.49-1.19.76s-.49.35-.74.53-.25.19-.37.28-.25.19-.38.28c.08-.13.18-.26.27-.39s.18-.26.28-.38a6.06,6.06,0,0,1,.67-.67,7,7,0,0,1,1.24-.92c.1-.07.2-.12.3-.18a7.72,7.72,0,0,1,1.76-.71A6.18,6.18,0,0,1,54.31,79.48Z", fill: "#9a6aff" }),
            React.createElement("path", { d: "M55.24,80.76c-.53.34-1,.69-1.51,1.07A15.24,15.24,0,0,0,52.37,83l-.37.37c-.3.31-.59.62-.86,1s-.38.48-.58.72-.18.25-.27.36l-.29.37c0-.14.1-.29.16-.44a3.93,3.93,0,0,1,.18-.43c.14-.28.28-.56.45-.83A8.77,8.77,0,0,1,51.67,83c.1-.12.21-.23.32-.34a8.41,8.41,0,0,1,1.5-1.15A5.56,5.56,0,0,1,55.24,80.76Z", fill: "#9a6aff" }),
            React.createElement("path", { d: "M56.72,82.13A15.54,15.54,0,0,0,55.5,83.5,13.65,13.65,0,0,0,54.43,85l-.24.39c-.24.39-.47.77-.67,1.18s-.27.54-.4.82a3.79,3.79,0,0,0-.18.42c-.07.14-.13.29-.2.42,0-.16,0-.3,0-.46s.05-.32.08-.46a6.8,6.8,0,0,1,.26-.91,7.8,7.8,0,0,1,.61-1.31c.07-.13.15-.26.23-.38a8.46,8.46,0,0,1,1.21-1.46A6.11,6.11,0,0,1,56.72,82.13Z", fill: "#9a6aff" }),
            React.createElement("path", { d: "M76.06,56.31l-.31.35c-.11.12-.22.22-.32.34s-.42.46-.6.69a16.62,16.62,0,0,0-1.1,1.44l-.27.4c-.24.37-.46.75-.67,1.14A17.84,17.84,0,0,0,72,62.31a5.79,5.79,0,0,1,.41-1.83A7.69,7.69,0,0,1,73,59.29a4.94,4.94,0,0,1,.3-.49,8,8,0,0,1,1.24-1.42,5.8,5.8,0,0,1,.74-.59,2.42,2.42,0,0,1,.4-.25Z", fill: "#9a6aff" }),
            React.createElement("path", { d: "M78.68,58.62a3.26,3.26,0,0,1-.4.24l-.39.25-.76.5a12.91,12.91,0,0,0-1.43,1.1l-.25.21c-.37.32-.72.67-1.07,1s-.82.92-1.22,1.41A5.94,5.94,0,0,1,74,61.69a8.1,8.1,0,0,1,1-1.12l.3-.27a7.55,7.55,0,0,1,1.57-1,7.4,7.4,0,0,1,.87-.38,3,3,0,0,1,.45-.14A4.35,4.35,0,0,1,78.68,58.62Z", fill: "#9a6aff" }),
            React.createElement("path", { d: "M80.81,61.58l-.44.16a3.12,3.12,0,0,0-.43.15c-.29.1-.58.2-.86.32a16.18,16.18,0,0,0-1.64.75l-.2.11c-.46.24-.91.52-1.36.81A17.31,17.31,0,0,0,74.39,65a5.94,5.94,0,0,1,1.22-1.43A7.92,7.92,0,0,1,77,62.6l.22-.12a7.76,7.76,0,0,1,1.77-.67,7.27,7.27,0,0,1,.93-.18l.47,0Z", fill: "#9a6aff" }),
            React.createElement("path", { d: "M70.08,70.82c0,.1,0,.19,0,.29s0,0,0,0a3.19,3.19,0,0,1-.67,2.5,7.19,7.19,0,0,1,.65,1.85,2.48,2.48,0,0,1-.41,2.28,1.4,1.4,0,0,1-.26.21,2.81,2.81,0,0,1-2,.26,7.19,7.19,0,0,1-1.9-.6,2.87,2.87,0,0,1-.4.31,3.45,3.45,0,0,1-2.07.48h0a1.2,1.2,0,0,1-.29,0,.4.4,0,0,1,.16-.78l.17,0h0a2.39,2.39,0,0,0,2-.72,3.61,3.61,0,0,0,.71-2.23,2.47,2.47,0,0,1-1.71.11.88.88,0,0,1-.71-.7,1.33,1.33,0,0,1,.25-.83,5.17,5.17,0,0,1,.58-.72c.41-.44,1-1,1.52-.89a.89.89,0,0,1,.75.67,2.52,2.52,0,0,1,0,1.73,3.6,3.6,0,0,0,2.22-.77,2.32,2.32,0,0,0,.62-2.07h0v0a2.08,2.08,0,0,0,0-.23.4.4,0,0,1,.79-.12Z", fill: "#9a6aff" }),
            React.createElement("path", { d: "M67.45,64.47a.16.16,0,0,1,0,.16l0,0a8.55,8.55,0,0,0-.4.94,5.62,5.62,0,0,0-.24,1c0,.16,0,.32-.06.48v.24a.56.56,0,0,0,0,.13h0A4,4,0,0,1,67.2,67a3.12,3.12,0,0,1,.78-.47,3.32,3.32,0,0,1,.86-.23.13.13,0,0,1,.16.12.13.13,0,0,1-.07.14h0c-.12.07-.25.12-.36.19l-.33.22a3.06,3.06,0,0,0-.57.51,4,4,0,0,0-.45.61c-.06.1-.11.21-.17.33s-.05.11-.07.17l0,.08s0,0,0,0v0h0a.4.4,0,0,1-.51.27.45.45,0,0,1-.27-.27,4.48,4.48,0,0,1-.21-1.16,3.9,3.9,0,0,1,0-.59c0-.19.06-.39.12-.58a4.15,4.15,0,0,1,.46-1.06,3.35,3.35,0,0,1,.73-.87A.14.14,0,0,1,67.45,64.47Z", fill: "#9a6aff" }),
            React.createElement("path", { d: "M60.09,74c.91,1,1.08,2.39.38,3.08l0,.06-.15.12a2.4,2.4,0,0,1-2.91-.84c-.94-1.06-1.09-2.46-.33-3.13A1.58,1.58,0,0,1,58.5,73,3.12,3.12,0,0,1,60.09,74Z", fill: "#9a6aff" })),
        React.createElement("path", { d: "M107.23,91.44a1.33,1.33,0,0,1-2.56,0l-1.85-7.06a1.32,1.32,0,0,0-.94-.94l-7.06-1.86a1.32,1.32,0,0,1,0-2.55l7.06-1.85a1.32,1.32,0,0,0,.94-.94l1.85-7.06a1.32,1.32,0,0,1,2.56,0l1.85,7.06a1.32,1.32,0,0,0,.94.94L117.08,79a1.32,1.32,0,0,1,0,2.55L110,83.44a1.32,1.32,0,0,0-.94.94Z", fill: "#7645d9" }),
        React.createElement("path", { d: "M43.78,21.2a.93.93,0,0,1,1.79,0l1.3,4.95a.94.94,0,0,0,.66.66l4.95,1.3a.93.93,0,0,1,0,1.79l-4.95,1.3a.94.94,0,0,0-.66.66l-1.3,5a.93.93,0,0,1-1.79,0l-1.3-5a.9.9,0,0,0-.66-.66l-5-1.3a.93.93,0,0,1,0-1.79l5-1.3a.9.9,0,0,0,.66-.66Z", fill: "#7645d9" }),
        React.createElement("path", { d: "M27.6,103.23a.6.6,0,0,1-1.16,0L25.6,100a.6.6,0,0,0-.43-.43L22,98.75a.6.6,0,0,1,0-1.16l3.21-.84a.6.6,0,0,0,.43-.43l.84-3.21a.6.6,0,0,1,1.16,0l.85,3.21a.59.59,0,0,0,.42.43l3.21.84a.6.6,0,0,1,0,1.16l-3.21.84a.59.59,0,0,0-.42.43Z", fill: "#7645d9" })));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" })));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("path", { d: "M72.36,35.35c0,.08,0,.16,0,.21s0,.19,0,.26,0,.09,0,.14a1,1,0,0,0,0,.24,1.42,1.42,0,0,0,0,.16,1.71,1.71,0,0,1-.07.21c0,.06,0,.11,0,.13s-.09.25-.13.35,0,.06,0,.09a1.33,1.33,0,0,0-.11.26l0,.11,0,0-.13.24-.07.13a2.63,2.63,0,0,1-.18.3s0,0,0,.08-.16.21-.25.32l-.28.34-.08.06v0c-.09.07-.16.18-.25.26l-.06.06c-.23.21-.47.39-.72.58l0,0-.07,0-.15.11s-.07,0-.1,0l-.15.09a2.29,2.29,0,0,0-.31.16.42.42,0,0,0-.13.07,2.22,2.22,0,0,1-.31.13l0,0s-.09,0-.13.06-.25.07-.38.13a.17.17,0,0,1-.11,0c-.2,0-.38.1-.56.13a8.52,8.52,0,0,1-2.51.16,8.75,8.75,0,0,1-1.83-.29,6.82,6.82,0,0,1-5.29-6.05c0-.11,0-.21,0-.32v0c0-.91,0-2,.14-3.25.07-.67.14-1.36.22-2.08l0-.13c0-.16,0-.29.06-.45.31-2.37.78-4.93,1.34-7.38a49.16,49.16,0,0,1,2.2-7.48c1.44-3.73,3-5.49,4.63-5.38,3.2.21,4.85,7.61,5.67,13.81.33,2.62.58,5.28.67,7.73A45.27,45.27,0,0,1,72.36,35.35Z", transform: "translate(0 -8.26)", fill: "#ffd800" }),
        React.createElement("path", { d: "M78.2,32.39s3.28-14.9,8.41-14.5,7.88,21.85,7.32,26.92C94,44.81,86.06,44.83,78.2,32.39Z", transform: "translate(0 -8.26)", fill: "#ffd800" }),
        React.createElement("path", { d: "M90.63,38.11a1,1,0,0,1-1,1.07,1.84,1.84,0,0,1-.57-.1c-1.18-.3-4.15-1.6-7.14-7a1.33,1.33,0,0,1-.14-.86c.31-2,1.56-8.44,4.43-8,.91.14,2.27,1,3.49,6.88A39.61,39.61,0,0,1,90.63,38.11Z", transform: "translate(0 -8.26)", fill: "#feed8d" }),
        React.createElement("path", { d: "M50.74,32.65S48.8,17.4,43.67,17.17,33.9,37.9,34,43C34,43,41.83,44,50.74,32.65Z", transform: "translate(0 -8.26)", fill: "#ffd800" }),
        React.createElement("path", { d: "M47.27,32.12C42.66,38.39,38.64,38,38.47,38s-.1,0-.14-.07a1.13,1.13,0,0,1-.76-1.14c0-2.43,1.85-10.78,4.08-13.39a2.31,2.31,0,0,1,1.77-1c3.11.05,3.94,7.27,4.08,8.74A1.39,1.39,0,0,1,47.27,32.12Z", transform: "translate(0 -8.26)", fill: "#feed8d" }),
        React.createElement("path", { d: "M20.7,46.84H69.6v48.5H36.28c-4.75,0-8,0-11-.67A28,28,0,0,1,8.67,83.75c-1.82-2.51-3.11-5.51-5-9.87-.08-.2-.17-.4-.25-.59l-.06-.15c-.92-2.14-1.71-4-2.26-5.48a16.41,16.41,0,0,1-1.11-5A15.3,15.3,0,0,1,9.72,47.89a16.1,16.1,0,0,1,5.06-1C16.39,46.84,18.37,46.84,20.7,46.84ZM15.42,58.1a7,7,0,0,0-1.62.21,4.1,4.1,0,0,0-2.6,4,6.48,6.48,0,0,0,.44,1.57c.43,1.17,1.08,2.7,2.08,5,2.23,5.17,3,6.94,4,8.32a16.74,16.74,0,0,0,9.94,6.55c1.67.38,3.61.41,9.24.41H58.4V58H20.86C18.33,58,16.67,58,15.42,58.1Z", transform: "translate(0 -8.26)", fill: "#ffd800", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M112.58,58.1c-1.25-.07-2.91-.07-5.44-.07H69.6V84.15H91.08c5.63,0,7.57,0,9.24-.41a16.74,16.74,0,0,0,9.94-6.55c1-1.38,1.79-3.15,4-8.32,1-2.33,1.65-3.86,2.08-5a6.48,6.48,0,0,0,.44-1.57,4.1,4.1,0,0,0-2.6-4A7,7,0,0,0,112.58,58.1Zm.64-11.17a16.1,16.1,0,0,1,5.06,1A15.3,15.3,0,0,1,128,62.63a16.41,16.41,0,0,1-1.11,5c-.55,1.51-1.34,3.34-2.26,5.48l-.06.15c-.08.19-.17.39-.25.59-1.87,4.35-3.16,7.36-5,9.87a28,28,0,0,1-16.57,10.92c-3,.67-6.29.67-11,.67H58.4V46.84h48.9C109.63,46.84,111.61,46.84,113.22,46.93Z", transform: "translate(0 -8.26)", fill: "#ffd800", "fill-rule": "evenodd" }),
        React.createElement("path", { d: "M37.61,58H16.51a12,12,0,0,1,0-11.19h21.1a12,12,0,0,1,0,11.19Z", transform: "translate(0 -8.26)", fill: "#ffaf00" }),
        React.createElement("path", { d: "M39.66,84.15,44.23,95l-.75.31H30.07L25.3,84c1.53.17,3.7.19,7.94.19Z", transform: "translate(0 -8.26)", fill: "#ffaf00" }),
        React.createElement("path", { d: "M90.39,58h21.1a12,12,0,0,0,0-11.19H90.39a12,12,0,0,0,0,11.19Z", transform: "translate(0 -8.26)", fill: "#eb8c00" }),
        React.createElement("path", { d: "M88.34,84.15,83.78,95l.74.31H97.93L102.7,84c-1.53.17-3.7.19-7.94.19Z", transform: "translate(0 -8.26)", fill: "#eb8c00" }),
        React.createElement("path", { d: "M54.66,92.67a9.4,9.4,0,1,1,18.69,0l-2.13,20.09a6,6,0,0,1-5.94,5.34H62.72a6,6,0,0,1-5.93-5.34Z", transform: "translate(0 -8.26)", fill: "#eb8c00" }),
        React.createElement("path", { d: "M42.36,122A10.63,10.63,0,0,1,53,111.39H75A10.63,10.63,0,0,1,85.64,122a3.54,3.54,0,0,1-3.54,3.54H45.9A3.54,3.54,0,0,1,42.36,122Z", transform: "translate(0 -8.26)", fill: "#ffd800" }),
        React.createElement("path", { d: "M30.47,81c-5.92-15.4-8.88-23.11-7.85-29.32a23.16,23.16,0,0,1,11.1-16.16c5.42-3.18,13.71-3.18,30.28-3.18s24.86,0,30.28,3.18a23.17,23.17,0,0,1,11.11,16.16c1,6.21-1.94,13.92-7.86,29.32-3,7.82-4.5,11.74-7,14.69a23.12,23.12,0,0,1-10.24,7c-3.64,1.25-7.86,1.25-16.31,1.25s-12.66,0-16.31-1.25a23.12,23.12,0,0,1-10.24-7C35,92.69,33.48,88.77,30.47,81Z", transform: "translate(0 -8.26)", fill: "#ffd800" }),
        React.createElement("path", { d: "M96.25,40.45c1.49,5.5-.06,12.43-3.16,26.29l-1.48,6.57C89.9,81,89,84.79,87.3,87.83A23.13,23.13,0,0,1,74.09,98.41c-3.35,1-7.27,1-15.11,1-6.55,0-9.82,0-12.74-.78a23.09,23.09,0,0,1-11.31-6.94,20.59,20.59,0,0,0,2.52,3.91,23.14,23.14,0,0,0,10.24,7c3.64,1.24,7.87,1.24,16.31,1.24s12.67,0,16.31-1.24a23.14,23.14,0,0,0,10.24-7c2.47-3,4-6.86,7-14.69,5.92-15.4,8.88-23.11,7.85-29.32a23.09,23.09,0,0,0-11.1-16.15h0A22.69,22.69,0,0,1,96.25,40.45Z", transform: "translate(0 -8.26)", fill: "#ffaf00" }),
        React.createElement("path", { d: "M109.93,38.57a1.58,1.58,0,0,1-3.06,0l-2.23-8.49A1.58,1.58,0,0,0,103.51,29L95,26.73a1.59,1.59,0,0,1,0-3.07l8.48-2.22a1.58,1.58,0,0,0,1.13-1.13l2.23-8.48a1.58,1.58,0,0,1,3.06,0l2.23,8.48a1.59,1.59,0,0,0,1.13,1.13l8.48,2.22a1.59,1.59,0,0,1,0,3.07L113.29,29a1.59,1.59,0,0,0-1.13,1.13Z", transform: "translate(0 -8.26)", fill: "#feed8d" }),
        React.createElement("path", { d: "M16.05,18.09a1,1,0,0,1,1.88,0l1.37,5.22A1,1,0,0,0,20,24l5.22,1.37a1,1,0,0,1,0,1.89L20,28.63a1,1,0,0,0-.7.69l-1.37,5.22a1,1,0,0,1-1.88,0l-1.37-5.22a1,1,0,0,0-.7-.69L8.76,27.26a1,1,0,0,1,0-1.89L14,24a1,1,0,0,0,.7-.69Z", transform: "translate(0 -8.26)", fill: "#feed8d" }),
        React.createElement("path", { d: "M21.17,119a.85.85,0,0,1-1.65,0l-1.2-4.57a.86.86,0,0,0-.61-.61l-4.56-1.2a.85.85,0,0,1,0-1.65l4.56-1.2a.84.84,0,0,0,.61-.6l1.2-4.57a.85.85,0,0,1,1.65,0l1.2,4.57a.84.84,0,0,0,.61.6l4.57,1.2a.86.86,0,0,1,0,1.65L23,113.78a.86.86,0,0,0-.61.61Z", transform: "translate(0 -8.26)", fill: "#feed8d" }),
        React.createElement("path", { d: "M38,41.14a4.07,4.07,0,0,1,.13,5.75l-.67.71a8.45,8.45,0,0,0-2.34,5.83v1.48a4.07,4.07,0,1,1-8.13,0V53.43A16.54,16.54,0,0,1,31.53,42l.67-.7A4.06,4.06,0,0,1,38,41.14Z", transform: "translate(0 -8.26)", fill: "#feed8d", "fill-rule": "evenodd" }),
        React.createElement("g", null,
            React.createElement("path", { d: "M81.23,72.71a9.45,9.45,0,0,1,2,.33,10.57,10.57,0,0,0,.18-1.81c0-.3,0-.61,0-.92-.6,0-1.2,0-1.8,0-.77,0-1.51.09-2.26.17a7.28,7.28,0,0,1,2.18-.68,10.06,10.06,0,0,1,1.82-.11,12.55,12.55,0,0,0-.46-2.24c-.53.11-1,.25-1.55.4a18.1,18.1,0,0,0-2.11.72A6.74,6.74,0,0,1,81.1,67.3a9.12,9.12,0,0,1,1.52-.53,16.62,16.62,0,0,0-2.5-4.51h0c-.33-3.72-1.75-10-4-10.14-1.64-.11-2.94,2.18-3.74,4.1a20.75,20.75,0,0,0-4.69-1.51c.07.56.11,1.12.14,1.66a13.85,13.85,0,0,1,0,2.22s0,.06,0,.08,0,.08,0,.11a.35.35,0,0,0,0,.06.24.24,0,0,0,0,.09l0,.06a.19.19,0,0,1,0,.09s0,0,0,.05l-.06.14,0,0,0,.11,0,0h0l-.06.1,0,0-.09.12,0,0a.71.71,0,0,1-.12.13L67,60l0,0h0l-.12.11,0,0-.34.23h0a.15.15,0,0,1-.08,0l0,0-.08,0-.14.07-.07,0a.52.52,0,0,1-.15.06h0l-.06,0-.18.05h-.05l-.27.06a5.25,5.25,0,0,1-1.21.06,3.89,3.89,0,0,1-.87-.12,2.92,2.92,0,0,1-2.54-2.41s0-.09,0-.14h0a10.41,10.41,0,0,1,.06-1.3c0-.27.07-.55.11-.84v0l0-.18c.08-.46.17-.94.27-1.43a21.42,21.42,0,0,0-5.22,1.26c-.57-2.06-1.64-4.75-3.37-4.81-2.52-.11-4.83,7.59-5.24,10.88h0a16.47,16.47,0,0,0-2.4,3.91l.41.1a10.39,10.39,0,0,1,2.12.9,7.67,7.67,0,0,1,1.79,1.42c-.67-.35-1.34-.66-2-.94a21.33,21.33,0,0,0-2.08-.73l-.47-.12A12.69,12.69,0,0,0,44,68.82a5.15,5.15,0,0,1,.56,0,10.33,10.33,0,0,1,2.28.3,6.87,6.87,0,0,1,2.11.89c-.75-.16-1.47-.29-2.21-.38a20.14,20.14,0,0,0-2.19-.15h-.64c0,.33-.06.67-.07,1A12,12,0,0,0,44,72.39l.54-.13A10.28,10.28,0,0,1,46.78,72a7.56,7.56,0,0,1,2.25.4,18.06,18.06,0,0,0-2.23.13,17.65,17.65,0,0,0-2.18.34l-.54.12c1.51,6.72,9.53,10.83,19.27,11S81.32,80.4,83,73.69c-.61-.18-1.23-.33-1.87-.46a20.3,20.3,0,0,0-2.23-.34A6.77,6.77,0,0,1,81.23,72.71ZM73.48,58.23a9.53,9.53,0,0,1,.32-1.3c.36-1.16,1-2.51,2.1-2.38.51.06,1.25.46,1.92,3.15a19.14,19.14,0,0,1,.46,2.51,6.61,6.61,0,0,1,.06,1.18.52.52,0,0,1-.56.49,1.38,1.38,0,0,1-.31,0c-.65-.14-2.28-.73-3.92-3.22A.49.49,0,0,1,73.48,58.23ZM49.7,60.44s-.05,0-.07,0a.53.53,0,0,1-.42-.52v-.12c.08-1.25,1-4.87,2.24-6a1.36,1.36,0,0,1,1-.45c1.24,0,1.82,1.77,2.07,3a10.43,10.43,0,0,1,.17,1,.55.55,0,0,1-.13.41C52,60.61,49.79,60.44,49.7,60.44Zm6.77,10.91-.23,0c-1.1-.24-1.88-1.61-1.79-3.22s1.19-3,2.41-3a1.93,1.93,0,0,1,1.52,1,3.9,3.9,0,0,1,.5,2.23c-.11,1.67-1.13,3-2.32,3ZM70.22,74.2c-.07.09-.13.19-.21.29l0,0a3.88,3.88,0,0,1-2.71,1.58,9.67,9.67,0,0,1-1,2.14,3.06,3.06,0,0,1-2.31,1.61,2,2,0,0,1-.41,0,3.43,3.43,0,0,1-1.94-1.5,8.9,8.9,0,0,1-1.12-2.15,2.89,2.89,0,0,1-.6-.08,4.08,4.08,0,0,1-2.2-1.37l0,0a1.56,1.56,0,0,1-.21-.29.48.48,0,0,1,.81-.53l.13.17,0,0a3,3,0,0,0,2.36,1.12,4.29,4.29,0,0,0,2.53-1.3,3.12,3.12,0,0,1-1.57-1.38,1.06,1.06,0,0,1,0-1.21,1.58,1.58,0,0,1,.93-.5,5.35,5.35,0,0,1,1.12-.12,2.73,2.73,0,0,1,2.07.54,1.13,1.13,0,0,1,.07,1.23,3.1,3.1,0,0,1-1.53,1.43,4.4,4.4,0,0,0,2.57,1.26,2.86,2.86,0,0,0,2.31-1.25h0a0,0,0,0,1,0,0c.06-.08.12-.15.17-.23a.49.49,0,0,1,.68-.1A.48.48,0,0,1,70.22,74.2Zm3.09-7.56h0a10.64,10.64,0,0,0-1.15.47,6.26,6.26,0,0,0-1,.62,5.19,5.19,0,0,0-.46.36l-.21.2a.38.38,0,0,0-.11.11h0a4.18,4.18,0,0,1,.79,0,3.9,3.9,0,0,1,1.07.26,3.82,3.82,0,0,1,.94.54.16.16,0,0,1,0,.24.16.16,0,0,1-.18.07h0a4.19,4.19,0,0,0-.47-.14,3.94,3.94,0,0,0-.47-.1,4.09,4.09,0,0,0-.92,0,4,4,0,0,0-.91.14,2.49,2.49,0,0,0-.44.14l-.2.08-.1,0s0,0,0,0l0,0h0a.49.49,0,0,1-.67-.22.45.45,0,0,1,0-.45,5,5,0,0,1,.81-1.19,4.06,4.06,0,0,1,.52-.49,3.76,3.76,0,0,1,.59-.39,4.6,4.6,0,0,1,1.31-.52,3.92,3.92,0,0,1,1.37-.12.17.17,0,0,1,.16.19A.18.18,0,0,1,73.31,66.64Z", transform: "translate(0 -8.26)", fill: "#ffaf00" }),
            React.createElement("path", { d: "M68.17,58.62s0,.06,0,.09v.08a0,0,0,0,1,0,0l0,.22,0,0,0,.07a.17.17,0,0,0,0,.05.34.34,0,0,1,0,.11l0,0s0,0,0,0a.24.24,0,0,1-.06.11l-.11.19s0,0,0,0l0,.07L67.6,60h0l0,0v0l-.14.16-.21.19-.12.1,0,0a2.73,2.73,0,0,1-.3.21l-.16.09,0,0-.1,0-.06,0-.09,0-.08,0-.17.07h0l-.09,0a.51.51,0,0,1-.14,0h0l-.13,0-.28.05a5.47,5.47,0,0,1-.9.08h-.38a5.46,5.46,0,0,1-.94-.13,3.3,3.3,0,0,1-2.82-2.74v-.18a9.41,9.41,0,0,1,.06-1.36c0-.27.07-.55.11-.84V56l0-.15c.08-.49.17-1,.27-1.46s.25-1.08.38-1.54a17.68,17.68,0,0,1,1.08-3.06c.76-1.65,1.6-2.43,2.58-2.37,1.43.08,2.46,2.05,3.07,5.85.07.5.13,1,.18,1.44.07.63.12,1.19.14,1.7A15.92,15.92,0,0,1,68.17,58.62Z", transform: "translate(0 -8.26)", fill: "#ed8103" }),
            React.createElement("path", { d: "M78.34,61.39a.52.52,0,0,1-.56.49,1.38,1.38,0,0,1-.31,0c-.65-.14-2.28-.73-3.92-3.22a.49.49,0,0,1-.07-.39,9.53,9.53,0,0,1,.32-1.3c.36-1.16,1-2.51,2.1-2.38.51.06,1.25.46,1.92,3.15a19.14,19.14,0,0,1,.46,2.51A6.61,6.61,0,0,1,78.34,61.39Z", transform: "translate(0 -8.26)", fill: "#ed8103" }),
            React.createElement("path", { d: "M54.53,57.72c-2.53,2.89-4.74,2.72-4.83,2.72s-.05,0-.07,0a.53.53,0,0,1-.42-.52v-.12c.08-1.25,1-4.87,2.24-6a1.36,1.36,0,0,1,1-.45c1.24,0,1.82,1.77,2.07,3a10.43,10.43,0,0,1,.17,1A.55.55,0,0,1,54.53,57.72Z", transform: "translate(0 -8.26)", fill: "#ed8103" }),
            React.createElement("path", { d: "M49.23,68.09c-.67-.35-1.34-.66-2-.94a21.33,21.33,0,0,0-2.08-.73l-.47-.12A15.52,15.52,0,0,0,43,65.93c-.36-.08-.72-.12-1.1-.19-.18,0-.37,0-.55-.07s-.37,0-.57-.09l.57-.1a5.21,5.21,0,0,1,.57-.08,8.81,8.81,0,0,1,1.15,0,9.2,9.2,0,0,1,1.86.28l.41.1a10.39,10.39,0,0,1,2.12.9A7.67,7.67,0,0,1,49.23,68.09Z", transform: "translate(0 -8.26)", fill: "#ffaf00" }),
            React.createElement("path", { d: "M48.93,70c-.75-.16-1.47-.29-2.21-.38a20.14,20.14,0,0,0-2.19-.15h-.64c-.52,0-1,0-1.56.08-.37,0-.74.07-1.11.12-.19,0-.37,0-.55.07l-.57.07.52-.24a4.87,4.87,0,0,1,.53-.21,8.17,8.17,0,0,1,1.1-.32A9.1,9.1,0,0,1,44,68.82a5.15,5.15,0,0,1,.56,0,10.33,10.33,0,0,1,2.28.3A6.87,6.87,0,0,1,48.93,70Z", transform: "translate(0 -8.26)", fill: "#ffaf00" }),
            React.createElement("path", { d: "M49,72.44a18.06,18.06,0,0,0-2.23.13,17.65,17.65,0,0,0-2.18.34l-.54.12c-.53.13-1.06.27-1.58.44-.35.11-.7.24-1,.36a4.71,4.71,0,0,0-.52.21c-.18.06-.36.14-.54.19.15-.13.3-.23.45-.35a3.63,3.63,0,0,1,.47-.33,8.21,8.21,0,0,1,1-.56,9,9,0,0,1,1.64-.6l.54-.13A10.28,10.28,0,0,1,46.78,72,7.56,7.56,0,0,1,49,72.44Z", transform: "translate(0 -8.26)", fill: "#ffaf00" }),
            React.createElement("path", { d: "M87.83,66.87l-.57,0c-.19,0-.37,0-.56,0-.38,0-.75,0-1.11.07a19.69,19.69,0,0,0-2.18.29c-.19,0-.39.07-.58.12-.53.11-1,.25-1.55.4a18.1,18.1,0,0,0-2.11.72A6.74,6.74,0,0,1,81.1,67.3a9.12,9.12,0,0,1,1.52-.53c.22-.06.45-.11.67-.15a9.86,9.86,0,0,1,2.3-.16,7.37,7.37,0,0,1,1.14.13,4.88,4.88,0,0,1,.55.12C87.46,66.77,87.66,66.81,87.83,66.87Z", transform: "translate(0 -8.26)", fill: "#ffaf00" }),
            React.createElement("path", { d: "M88.1,71.11,87.55,71a4.9,4.9,0,0,0-.55-.13c-.36-.07-.72-.16-1.08-.22a18.09,18.09,0,0,0-2.18-.29l-.39,0c-.6,0-1.2,0-1.8,0-.77,0-1.51.09-2.26.17a7.28,7.28,0,0,1,2.18-.68,10.06,10.06,0,0,1,1.82-.11c.17,0,.33,0,.49,0a9.64,9.64,0,0,1,2.25.44,9.15,9.15,0,0,1,1.07.42,4.19,4.19,0,0,1,.51.27A4.94,4.94,0,0,1,88.1,71.11Z", transform: "translate(0 -8.26)", fill: "#ffaf00" }),
            React.createElement("path", { d: "M87.39,75.49c-.18-.08-.35-.16-.51-.25s-.33-.18-.5-.24c-.35-.16-.67-.32-1-.46-.67-.3-1.36-.54-2-.77L83,73.69c-.61-.18-1.23-.33-1.87-.46a20.3,20.3,0,0,0-2.23-.34,6.77,6.77,0,0,1,2.29-.18,9.45,9.45,0,0,1,2,.33l.3.09a9.43,9.43,0,0,1,2.1.94,8.41,8.41,0,0,1,1,.65l.43.37Z", transform: "translate(0 -8.26)", fill: "#ffaf00" }),
            React.createElement("path", { d: "M70.22,74.2c-.07.09-.13.19-.21.29l0,0a3.88,3.88,0,0,1-2.71,1.58,9.67,9.67,0,0,1-1,2.14,3.06,3.06,0,0,1-2.31,1.61,2,2,0,0,1-.41,0,3.43,3.43,0,0,1-1.94-1.5,8.9,8.9,0,0,1-1.12-2.15,2.89,2.89,0,0,1-.6-.08,4.08,4.08,0,0,1-2.2-1.37l0,0a1.56,1.56,0,0,1-.21-.29.48.48,0,0,1,.81-.53l.13.17,0,0a3,3,0,0,0,2.36,1.12,4.29,4.29,0,0,0,2.53-1.3,3.12,3.12,0,0,1-1.57-1.38,1.06,1.06,0,0,1,0-1.21,1.58,1.58,0,0,1,.93-.5,5.35,5.35,0,0,1,1.12-.12,2.73,2.73,0,0,1,2.07.54,1.13,1.13,0,0,1,.07,1.23,3.1,3.1,0,0,1-1.53,1.43,4.4,4.4,0,0,0,2.57,1.26,2.86,2.86,0,0,0,2.31-1.25h0a0,0,0,0,1,0,0c.06-.08.12-.15.17-.23a.49.49,0,0,1,.68-.1A.48.48,0,0,1,70.22,74.2Z", transform: "translate(0 -8.26)", fill: "#ed8103" }),
            React.createElement("path", { d: "M73.42,66.49a.18.18,0,0,1-.11.15h0a10.64,10.64,0,0,0-1.15.47,6.26,6.26,0,0,0-1,.62,5.19,5.19,0,0,0-.46.36l-.21.2a.38.38,0,0,0-.11.11h0a4.18,4.18,0,0,1,.79,0,3.9,3.9,0,0,1,1.07.26,3.82,3.82,0,0,1,.94.54.16.16,0,0,1,0,.24.16.16,0,0,1-.18.07h0a4.19,4.19,0,0,0-.47-.14,3.94,3.94,0,0,0-.47-.1,4.09,4.09,0,0,0-.92,0,4,4,0,0,0-.91.14,2.49,2.49,0,0,0-.44.14l-.2.08-.1,0s0,0,0,0l0,0h0a.49.49,0,0,1-.67-.22.45.45,0,0,1,0-.45,5,5,0,0,1,.81-1.19,4.06,4.06,0,0,1,.52-.49,3.76,3.76,0,0,1,.59-.39,4.6,4.6,0,0,1,1.31-.52,3.92,3.92,0,0,1,1.37-.12A.17.17,0,0,1,73.42,66.49Z", transform: "translate(0 -8.26)", fill: "#ed8103" }),
            React.createElement("path", { d: "M58.88,68.38c-.11,1.67-1.13,3-2.32,3h-.09l-.23,0c-1.1-.24-1.88-1.61-1.79-3.22s1.19-3,2.41-3a1.93,1.93,0,0,1,1.52,1A3.9,3.9,0,0,1,58.88,68.38Z", transform: "translate(0 -8.26)", fill: "#ed8103" }))));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        React.createElement("path", { d: "M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" })));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8382 2.20573L16.12 6.82916L21.2222 7.57057C22.9037 7.81489 23.5751 9.88123 22.3584 11.0672L18.6663 14.6661L19.5379 19.7477C19.8251 21.4224 18.0674 22.6995 16.5635 21.9088L11.9998 19.5096L7.43624 21.9088C5.93232 22.6995 4.17457 21.4224 4.4618 19.7477L5.33337 14.6661L1.64134 11.0672C0.424631 9.88125 1.09601 7.8149 2.77747 7.57057L7.87974 6.82916L10.1615 2.20573C10.9135 0.682081 13.0862 0.682068 13.8382 2.20573Z" })));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.17726 8.2193C9.10443 8.36687 8.96365 8.46916 8.80079 8.49282L3.49187 9.26425C3.08176 9.32385 2.918 9.82783 3.21476 10.1171L7.05633 13.8617C7.17418 13.9766 7.22795 14.1421 7.20013 14.3043L6.29326 19.5917C6.22321 20.0002 6.65192 20.3117 7.01873 20.1188L11.7672 17.6224C11.9128 17.5458 12.0869 17.5458 12.2325 17.6224L16.981 20.1188C17.3478 20.3117 17.7765 20.0002 17.7064 19.5917L16.7996 14.3043C16.7718 14.1421 16.8255 13.9766 16.9434 13.8617L20.7849 10.1171C21.0817 9.82783 20.9179 9.32385 20.5078 9.26425L15.1989 8.49282C15.0361 8.46916 14.8953 8.36687 14.8224 8.2193L12.4482 3.4086C12.2648 3.03698 11.7349 3.03698 11.5515 3.4086L9.17726 8.2193ZM16.2669 6.62701L14.2417 2.52347C13.3247 0.665354 10.675 0.665354 9.75801 2.52347L7.73279 6.62701L3.20427 7.28504C1.15372 7.583 0.334945 10.1029 1.81874 11.5493L5.09561 14.7434L4.32204 19.2537C3.97177 21.2959 6.11535 22.8533 7.94942 21.8891L11.9999 19.7597L16.0503 21.8891C17.8844 22.8533 20.0279 21.2959 19.6777 19.2537L18.9041 14.7434L22.181 11.5493C23.6648 10.1029 22.846 7.583 20.7954 7.28504L16.2669 6.62701Z" })));
};

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6.49999C14.76 6.49999 17 8.73999 17 11.5C17 12.01 16.9 12.5 16.76 12.96L19.82 16.02C21.21 14.79 22.31 13.25 23 11.49C21.27 7.10999 17 3.99999 12 3.99999C10.73 3.99999 9.51 4.19999 8.36 4.56999L10.53 6.73999C11 6.59999 11.49 6.49999 12 6.49999ZM2.71 3.15999C2.32 3.54999 2.32 4.17999 2.71 4.56999L4.68 6.53999C3.06 7.82999 1.77 9.52999 1 11.5C2.73 15.89 7 19 12 19C13.52 19 14.97 18.7 16.31 18.18L19.03 20.9C19.42 21.29 20.05 21.29 20.44 20.9C20.83 20.51 20.83 19.88 20.44 19.49L4.13 3.15999C3.74 2.76999 3.1 2.76999 2.71 3.15999ZM12 16.5C9.24 16.5 7 14.26 7 11.5C7 10.73 7.18 9.99999 7.49 9.35999L9.06 10.93C9.03 11.11 9 11.3 9 11.5C9 13.16 10.34 14.5 12 14.5C12.2 14.5 12.38 14.47 12.57 14.43L14.14 16C13.49 16.32 12.77 16.5 12 16.5ZM14.97 11.17C14.82 9.76999 13.72 8.67999 12.33 8.52999L14.97 11.17Z" })));
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 16.5C9.24 16.5 7 14.26 7 11.5C7 8.74 9.24 6.5 12 6.5C14.76 6.5 17 8.74 17 11.5C17 14.26 14.76 16.5 12 16.5ZM12 8.5C10.34 8.5 9 9.84 9 11.5C9 13.16 10.34 14.5 12 14.5C13.66 14.5 15 13.16 15 11.5C15 9.84 13.66 8.5 12 8.5Z" })));
};

var Icon$v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3.63 3.63C3.24 4.02 3.24 4.65 3.63 5.04L7.29 8.7L7 9H4C3.45 9 3 9.45 3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V13.41L16.18 17.59C15.69 17.96 15.16 18.27 14.58 18.5C14.22 18.65 14 19.03 14 19.42C14 20.14 14.73 20.6 15.39 20.33C16.19 20 16.94 19.56 17.61 19.02L18.95 20.36C19.34 20.75 19.97 20.75 20.36 20.36C20.75 19.97 20.75 19.34 20.36 18.95L5.05 3.63C4.66 3.24 4.03 3.24 3.63 3.63ZM19 12C19 12.82 18.85 13.61 18.59 14.34L20.12 15.87C20.68 14.7 21 13.39 21 12C21 8.17 18.6 4.89 15.22 3.6C14.63 3.37 14 3.83 14 4.46V4.65C14 5.03 14.25 5.36 14.61 5.5C17.18 6.54 19 9.06 19 12ZM10.29 5.71L10.12 5.88L12 7.76V6.41C12 5.52 10.92 5.08 10.29 5.71ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V9.76L16.48 12.24C16.49 12.16 16.5 12.08 16.5 12Z" })));
};

var Icon$u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V6.41C12 5.52 10.92 5.07 10.29 5.7L7 9H4C3.45 9 3 9.45 3 10ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 4.45V4.65C14 5.03 14.25 5.36 14.6 5.5C17.18 6.53 19 9.06 19 12C19 14.94 17.18 17.47 14.6 18.5C14.24 18.64 14 18.97 14 19.35V19.55C14 20.18 14.63 20.62 15.21 20.4C18.6 19.11 21 15.84 21 12C21 8.16 18.6 4.89 15.21 3.6C14.63 3.37 14 3.82 14 4.45Z" })));
};

var Icon$t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M2 21.8966H12C12.55 21.8966 13 22.3466 13 22.8966C13 23.4466 12.55 23.8966 12 23.8966H2C1.45 23.8966 1 23.4466 1 22.8966C1 22.3466 1.45 21.8966 2 21.8966ZM5.24 8.96661L8.07 6.13661L20.8 18.8666C21.58 19.6466 21.58 20.9166 20.8 21.6966C20.02 22.4766 18.75 22.4766 17.97 21.6966L5.24 8.96661ZM13.73 3.30661L16.56 6.13661C17.34 6.91661 17.34 8.18661 16.56 8.96661L15.14 10.3866L9.49 4.72661L10.9 3.31661C11.68 2.52661 12.95 2.52661 13.73 3.30661ZM3.83 10.3766L9.49 16.0366L8.08 17.4466C7.3 18.2266 6.03 18.2266 5.25 17.4466L2.42 14.6166C1.64 13.8366 1.64 12.5666 2.42 11.7866L3.83 10.3766Z" })));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M17.65 6.35C16.02 4.72 13.71 3.78 11.17 4.04C7.50002 4.41 4.48002 7.39 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.44 8.26002 6 12 6C13.66 6 15.14 6.69 16.22 7.78L14.71 9.29C14.08 9.92 14.52 11 15.41 11H19C19.55 11 20 10.55 20 10V6.41C20 5.52 18.92 5.07 18.29 5.7L17.65 6.35Z" })));
};

var ExpandableButton = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React.createElement(IconButton, { "aria-label": "Hide or show expandable content", onClick: onClick },
        children,
        expanded ? React.createElement(Icon$1e, { color: "invertedContrast" }) : React.createElement(Icon$1h, { color: "invertedContrast" })));
};
ExpandableButton.defaultProps = {
    expanded: false,
};
var ExpandableLabel = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React.createElement(Button, { variant: "text", "aria-label": "Hide or show expandable content", onClick: onClick, endIcon: expanded ? React.createElement(Icon$1e, { color: "primary" }) : React.createElement(Icon$1h, { color: "primary" }) }, children));
};
ExpandableLabel.defaultProps = {
    expanded: false,
};

var Box = styled.div(templateObject_1$T || (templateObject_1$T = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), background, border, layout, position, space);
var templateObject_1$T;

var Flex = styled(Box)(templateObject_1$S || (templateObject_1$S = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), flexbox);
var templateObject_1$S;

var variants$3 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$3.INFO : _b;
    switch (variant) {
        case variants$3.DANGER:
            return theme.colors.failure;
        case variants$3.WARNING:
            return theme.colors.warning;
        case variants$3.SUCCESS:
            return theme.colors.success;
        case variants$3.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$3.INFO; }
    switch (variant) {
        case variants$3.DANGER:
            return Icon$1B;
        case variants$3.WARNING:
            return Icon$1C;
        case variants$3.SUCCESS:
            return Icon$1D;
        case variants$3.INFO:
        default:
            return Icon$1A;
    }
};
var IconLabel = styled.div(templateObject_1$R || (templateObject_1$R = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled.div(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, null,
        React.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React.createElement(Icon, { color: "currentColor", width: "24px" })),
        React.createElement(Details, { hasHandler: !!onClick },
            React.createElement(Text, { bold: true }, title),
            typeof children === "string" ? React.createElement(Text, { as: "p" }, children) : children),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$1d, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$R, templateObject_2$m, templateObject_3$9, templateObject_4$7;

var scales$6 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$6.MD : _b;
    switch (scale) {
        case scales$6.SM:
            return "32px";
        case scales$6.LG:
            return "48px";
        case scales$6.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled.input(templateObject_1$Q || (templateObject_1$Q = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input$1.defaultProps = {
    scale: scales$6.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$Q;

var StyledBalanceInput = styled(Box)(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
}, function (_a) {
    var theme = _a.theme, isWarning = _a.isWarning;
    return theme.shadows[isWarning ? "warning" : "inset"];
});
var StyledInput$1 = styled(Input$1)(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: right;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"], ["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: right;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var templateObject_1$P, templateObject_2$l;

var BalanceInput = function (_a) {
    var value = _a.value, _b = _a.placeholder, placeholder = _b === void 0 ? "0.0" : _b, onUserInput = _a.onUserInput, currencyValue = _a.currencyValue, inputProps = _a.inputProps, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, _d = _a.decimals, decimals = _d === void 0 ? 18 : _d, props = __rest(_a, ["value", "placeholder", "onUserInput", "currencyValue", "inputProps", "isWarning", "decimals"]);
    var handleOnChange = function (e) {
        if (e.currentTarget.validity.valid) {
            onUserInput(e.currentTarget.value.replace(/,/g, "."));
        }
    };
    return (React.createElement(StyledBalanceInput, __assign({ isWarning: isWarning }, props),
        React.createElement(StyledInput$1, __assign({ pattern: "^[0-9]*[.,]?[0-9]{0," + decimals + "}$", inputMode: "decimal", min: "0", value: value, onChange: handleOnChange, placeholder: placeholder }, inputProps)),
        currencyValue && (React.createElement(Text, { fontSize: "12px", textAlign: "right", color: "textSubtle" }, currencyValue))));
};

var Grid = styled(Box)(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  display: grid;\n  ", "\n  ", "\n"], ["\n  display: grid;\n  ", "\n  ", "\n"])), flexbox, grid);
var templateObject_1$O;

var Separator = styled.div(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum), [item]);
        }
        return __spreadArray(__spreadArray([], accum), [
            React.createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React.createElement(Icon$1f, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React.createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$N, templateObject_2$k;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$4.SUBTLE ? "input" : "tertiary"];
};
var getBorderColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$4.SUBTLE ? "inputSecondary" : "disabled"];
};
var StyledButtonMenu = styled.div(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n  border: 1px solid ", ";\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n  ", "\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n  border: 1px solid ", ";\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n  ", "\n"])), getBackgroundColor, getBorderColor, space);
var ButtonMenu$1 = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$7.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$4.PRIMARY : _d, onItemClick = _a.onItemClick, children = _a.children, props = __rest(_a, ["activeIndex", "scale", "variant", "onItemClick", "children"]);
    return (React.createElement(StyledButtonMenu, __assign({ variant: variant }, props), Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
        });
    })));
};
var templateObject_1$M;

var InactiveButton = styled(Button)(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (variant === variants$4.PRIMARY ? theme.colors.primary : theme.colors.textSubtle);
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$4.PRIMARY : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return React.createElement(InactiveButton, __assign({ forwardedAs: as, variant: "tertiary" }, props));
    }
    return React.createElement(Button, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$L;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled.div(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.card;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$K;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React.createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled.div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$J;

var CardHeader = styled.div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  background: ", ";\n  ", "\n"], ["\n  background: ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return theme.card.cardHeaderBackground[variant];
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$I;

var CardFooter = styled.div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$H;

var StyledCardRibbon = styled.div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  z-index: 1;\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ", ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  z-index: 1;\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ",
    ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return (ribbonPosition === "right" ? 0 : "auto");
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return ribbonPosition === "right"
        ? "translateX(30%) translateY(0%) rotate(45deg)"
        : "translateX(0%) translateY(200%) rotate(-45deg)";
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text, ribbonPosition = _a.ribbonPosition, props = __rest(_a, ["variantColor", "text", "ribbonPosition"]);
    return (React.createElement(StyledCardRibbon, __assign({ variantColor: variantColor, ribbonPosition: ribbonPosition }, props),
        React.createElement("div", { title: text }, text)));
};
CardRibbon.defaultProps = {
    ribbonPosition: "right",
};
var templateObject_1$G;

var scales$5 = {
    SM: "sm",
    MD: "md",
};

var getScale$2 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$5.SM:
            return "24px";
        case scales$5.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$2, getScale$2, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales$5.MD,
};
var templateObject_1$F;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 400px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 400px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$4 = styled.div(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React.createElement(Container$4, null,
        target,
        React.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$E, templateObject_2$j;

var bunnyFall = keyframes(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled.div(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return position + "vw";
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return duration + "s";
}, function (_a) {
    var iterations = _a.iterations;
    return (Number.isFinite(iterations) ? String(iterations) : "infinite");
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.3 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 2.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 3.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 5.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 8 + "s";
});
var FallingBunnies = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var bunnies = __spreadArray([], Array(count)).map(function (_, index) { return (React.createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React.createElement(Icon$13, { width: size, height: size }))); });
    return React.createElement("div", null, bunnies);
};
var templateObject_1$D, templateObject_2$i;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var scales$4 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$3;
var style = (_a$3 = {},
    _a$3[scales$4.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$3[scales$4.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$3[scales$4.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$3[scales$4.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$3);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var scale = _a.scale;
    return style[scale || scales$4.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var scale = _a.scale;
    return style[scale || scales$4.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$C;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper$3 = styled.div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, space);
var templateObject_1$B;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React.createElement(Wrapper$3, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React.createElement(Wrapper$3, __assign({ ref: imgRef }, otherProps), isLoaded ? React.createElement(StyledImage, { src: src, alt: alt }) : React.createElement(Placeholder, null)));
};
var templateObject_1$A, templateObject_2$h;

var GridLayout$1 = styled(Grid)(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$z;

var GridLayout = styled(GridLayout$1)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$y;

var StyledLink$1 = styled(Text)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React.createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$x;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        React.createElement(Icon$V, { color: "primary", ml: "4px" })));
};

var variants$2 = {
    warning: {
        background: "#FFB23719",
        borderColor: "warning",
    },
    danger: {
        background: "#ED4B9E19",
        borderColor: "failure",
    },
};

var Icons$4 = {
    warning: Icon$s,
    danger: Icon$1C,
};
var MessageContainer = styled.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  background-color: gray;\n  padding: 16px;\n  border-radius: 16px;\n  border: solid 1px;\n\n  svg {\n    align-self: flex-start;\n  }\n\n  ", "\n  ", "\n"], ["\n  display: flex;\n  background-color: gray;\n  padding: 16px;\n  border-radius: 16px;\n  border: solid 1px;\n\n  svg {\n    align-self: flex-start;\n  }\n\n  ", "\n  ",
    "\n"])), space, variant$1({
    variants: variants$2,
}));
var Message = function (_a) {
    var children = _a.children, variant = _a.variant, props = __rest(_a, ["children", "variant"]);
    var Icon = Icons$4[variant];
    return (React.createElement(MessageContainer, __assign({ variant: variant }, props),
        React.createElement(Icon, { color: variants$2[variant].borderColor, width: "24px", mr: "12px", style: { alignSelf: "center" } }),
        children));
};
var templateObject_1$w;

var NotificationDotRoot = styled.span(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot = styled.span(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? "inline-flex" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var NotificationDot = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, children = _a.children, props = __rest(_a, ["show", "children"]);
    return (React.createElement(NotificationDotRoot, null,
        Children.map(children, function (child) { return cloneElement(child, props); }),
        React.createElement(Dot, { show: show })));
};
var templateObject_1$v, templateObject_2$g;

var variants$1 = {
    ROUND: "round",
    FLAT: "flat",
};
var scales$3 = {
    MD: "md",
    SM: "sm",
};

var _a$2, _b$1;
var styleVariants$1 = (_a$2 = {},
    _a$2[variants$1.ROUND] = {
        borderRadius: "32px",
    },
    _a$2[variants$1.FLAT] = {
        borderRadius: 0,
    },
    _a$2);
var styleScales = (_b$1 = {},
    _b$1[scales$3.MD] = {
        height: "16px",
    },
    _b$1[scales$3.SM] = {
        height: "8px",
    },
    _b$1);

var Bar = styled.div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 100%;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 100%;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ",
    "\n  ",
    "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, Bar, function (_a) {
    var variant = _a.variant;
    return (variant === variants$1.FLAT ? "0" : "32px");
}, function (_a) {
    var variant = _a.variant;
    return (variant === variants$1.FLAT ? "0" : "32px");
}, variant$1({
    variants: styleVariants$1,
}), variant$1({
    prop: "scale",
    variants: styleScales,
}), space);
var templateObject_1$u, templateObject_2$f;

var ProgressBunnyWrapper = styled.div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$t;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants$1.ROUND : _b, _c = _a.scale, scale = _c === void 0 ? scales$3.MD : _c, _d = _a.primaryStep, primaryStep = _d === void 0 ? 0 : _d, _e = _a.secondaryStep, secondaryStep = _e === void 0 ? null : _e, _f = _a.showProgressBunny, showProgressBunny = _f === void 0 ? false : _f;
    return (React.createElement(StyledProgress, { variant: variant, scale: scale },
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React.createElement(Icon$M, null))),
        React.createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React.createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$s;

var bunnyHeadMain = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%2024%2032%22%20style%3D%22enable-background%3Anew%200%200%2024%2032%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%20.st0%7Bfill%3A%23B165FF%3B%7D%20.st1%7Bfill%3Aurl%28%23SVGID_1_%29%3B%7D%20.st2%7Bfill%3A%23FE6DCB%3B%7D%20.st3%7Bfill%3A%2333AEF1%3B%7D%20.st4%7Bfill%3A%23FDD800%3B%7D%20.st5%7Bfill%3A%23B177EA%3B%7D%20.st6%7Bfill%3Aurl%28%23SVGID_2_%29%3B%7D%20.st7%7Bfill%3Aurl%28%23SVGID_3_%29%3B%7D%20.st8%7Bfill%3A%23390075%3B%7D%20.st9%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Crect%20x%3D%220.9%22%20y%3D%2218.7%22%20class%3D%22st0%22%20width%3D%2214.6%22%20height%3D%229.4%22%2F%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M8.1%2C23.5c-1.2%2C1.2%2C0.2%2C3%2C1.9%2C4.8c1.7%2C1.7%2C3.6%2C3.1%2C4.8%2C1.9c1.2-1.2%2C0.6-3.8-1.2-5.5C11.9%2C23%2C9.3%2C22.4%2C8.1%2C23.5z%20%22%2F%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M13.3%2C21.8c-1.2%2C1.2%2C0.2%2C3%2C1.9%2C4.8c1.7%2C1.7%2C3.6%2C3.1%2C4.8%2C1.9c1.2-1.2%2C0.6-3.8-1.2-5.5%20C17.1%2C21.3%2C14.5%2C20.7%2C13.3%2C21.8z%22%2F%3E%3Cg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22SVGID_1_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%2211.5534%22%20y1%3D%2221.9682%22%20x2%3D%2211.5534%22%20y2%3D%227.059%22%20gradientTransform%3D%22matrix%280.9962%20-8.715574e-02%208.715574e-02%200.9962%20-1.0709%201.1497%29%22%3E%20%20%20%20%3Cstop%20%20offset%3D%220%22%20style%3D%22stop-color%3A%23B16EFF%22%2F%3E%20%20%20%20%3Cstop%20%20offset%3D%221%22%20style%3D%22stop-color%3A%23BB80FF%22%2F%3E%20%20%20%3C%2FlinearGradient%3E%20%20%20%3Cpath%20class%3D%22st1%22%20d%3D%22M21.7%2C14.8c0.3%2C4.1-4%2C6.9-9.4%2C7.3S2.2%2C20.2%2C1.9%2C16.1c-0.3-4.1%2C3.9-8.6%2C9.3-9C16.7%2C6.8%2C21.4%2C10.7%2C21.7%2C14.8z%22%20%20%20%20%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st2%22%20d%3D%22M12.1%2C10.1c-0.2%2C0-0.3%2C0.1-0.5%2C0.1c-1%2C0-1.5-0.5-1.5-0.9C10.3%2C9.5%2C11.1%2C10%2C12.1%2C10.1z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st3%22%20d%3D%22M12.6%2C9.9c-0.1%2C0.1-0.2%2C0.1-0.3%2C0.2c0%2C0-0.1%2C0-0.1%2C0c-1-0.1-1.8-0.6-2.1-0.8c0%2C0%2C0%2C0%2C0-0.1%20%20%20%20c0-0.3%2C0-0.7%2C0-1.1c0%2C0%2C1%2C0.9%2C2.5%2C1c0.2%2C0%2C0.3%2C0%2C0.5%2C0C13%2C9.4%2C12.9%2C9.7%2C12.6%2C9.9z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st4%22%20d%3D%22M13.1%2C9.1c-0.2%2C0-0.4%2C0-0.5%2C0C11%2C9%2C10%2C8.1%2C10%2C8.1c0-0.5%2C0.1-1%2C0.2-1.5c0%2C0%2C0.6%2C0.8%2C2.1%2C1.3%20%20%20%20C12.5%2C8%2C12.8%2C8%2C13%2C8.1C13%2C8.5%2C13.1%2C8.8%2C13.1%2C9.1C13.1%2C9.1%2C13.1%2C9.1%2C13.1%2C9.1z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st5%22%20d%3D%22M13%2C8.1c-0.2%2C0-0.4-0.1-0.6-0.2c-1.6-0.5-2.1-1.3-2.1-1.3c0.1-0.5%2C0.2-1.1%2C0.4-1.5c0%2C0%2C0.5%2C0.7%2C1.3%2C1.2%20%20%20%20c0.2%2C0.1%2C0.5%2C0.2%2C0.8%2C0.3C12.8%2C7.1%2C12.9%2C7.6%2C13%2C8.1z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st2%22%20d%3D%22M12.7%2C6.5c-0.3-0.1-0.5-0.2-0.8-0.3c-0.9-0.4-1.3-1.2-1.3-1.2c0.1-0.4%2C0.3-0.6%2C0.4-0.8%20%20%20%20c0.1-0.1%2C0.2-0.2%2C0.3-0.2C11.9%2C4.1%2C12.4%2C5.3%2C12.7%2C6.5z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22SVGID_2_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%2217.6928%22%20y1%3D%2212.149%22%20x2%3D%2217.6928%22%20y2%3D%225.9652%22%20gradientTransform%3D%22matrix%280.9962%20-8.715574e-02%208.715574e-02%200.9962%20-1.0709%201.1497%29%22%3E%20%20%20%20%3Cstop%20%20offset%3D%220%22%20style%3D%22stop-color%3A%23B16EFF%22%2F%3E%20%20%20%20%3Cstop%20%20offset%3D%221%22%20style%3D%22stop-color%3A%23BB80FF%22%2F%3E%20%20%20%3C%2FlinearGradient%3E%20%20%20%3Cpath%20class%3D%22st6%22%20d%3D%22M15.2%2C9.1c0%2C0%2C0.6-3.5%2C2-3.5c1.4%2C0%2C2.6%2C4.8%2C2.5%2C6C19.8%2C11.5%2C17.6%2C11.7%2C15.2%2C9.1z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cg%3E%20%20%20%20%3Cpath%20class%3D%22st2%22%20d%3D%22M16.4%2C8.7c0%2C0%2C0.2-1.7%2C0.8-1.7c0.6%2C0%2C1.2%2C2.5%2C1.3%2C3C18.4%2C10.1%2C17.5%2C10.1%2C16.4%2C8.7z%22%2F%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22SVGID_3_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%225.6656%22%20y1%3D%2211.2753%22%20x2%3D%225.6656%22%20y2%3D%225.3368%22%20gradientTransform%3D%22matrix%280.9962%20-8.715574e-02%208.715574e-02%200.9962%20-1.0709%201.1497%29%22%3E%20%20%20%20%3Cstop%20%20offset%3D%220%22%20style%3D%22stop-color%3A%23B16EFF%22%2F%3E%20%20%20%20%3Cstop%20%20offset%3D%221%22%20style%3D%22stop-color%3A%23BB80FF%22%2F%3E%20%20%20%3C%2FlinearGradient%3E%20%20%20%3Cpath%20class%3D%22st7%22%20d%3D%22M7.6%2C9.3c0%2C0-0.8-3.4-2.2-3.4C4%2C6%2C3.1%2C10.9%2C3.3%2C12.1C3.3%2C12.1%2C5.4%2C12.1%2C7.6%2C9.3z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cg%3E%20%20%20%20%3Cpath%20class%3D%22st2%22%20d%3D%22M6.5%2C9.1c0%2C0-0.4-1.7-1-1.7C4.8%2C7.5%2C4.3%2C10%2C4.4%2C10.6C4.4%2C10.6%2C5.4%2C10.6%2C6.5%2C9.1z%22%2F%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M4.5%2C14.7c-0.4-0.1-0.7-0.3-1.1-0.4c-0.3-0.1-0.7-0.2-1.1-0.3s-0.7-0.1-1.1-0.2c-0.2%2C0-0.4%2C0-0.6%2C0%20%20%20%20c-0.1%2C0-0.2%2C0-0.3%2C0c-0.1%2C0-0.2%2C0-0.3%2C0c0.1%2C0%2C0.2-0.1%2C0.3-0.1s0.2%2C0%2C0.3-0.1c0.2%2C0%2C0.4-0.1%2C0.6-0.1c0.4%2C0%2C0.8%2C0%2C1.1%2C0.1%20%20%20%20c0.4%2C0.1%2C0.7%2C0.2%2C1.1%2C0.4C3.9%2C14.2%2C4.2%2C14.4%2C4.5%2C14.7z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M4.4%2C15.6c-0.4-0.1-0.8-0.1-1.1-0.1c-0.4%2C0-0.7%2C0-1.1%2C0c-0.4%2C0-0.7%2C0.1-1.1%2C0.1c-0.2%2C0-0.4%2C0.1-0.5%2C0.1%20%20%20%20c-0.1%2C0-0.2%2C0-0.3%2C0.1s-0.2%2C0-0.3%2C0.1c0.1%2C0%2C0.2-0.1%2C0.2-0.1c0.1%2C0%2C0.2-0.1%2C0.3-0.1c0.2-0.1%2C0.4-0.2%2C0.5-0.2%20%20%20%20c0.4-0.1%2C0.7-0.2%2C1.1-0.2c0.4%2C0%2C0.8%2C0%2C1.2%2C0.1C3.7%2C15.4%2C4.1%2C15.5%2C4.4%2C15.6z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M4.6%2C16.9c-0.4%2C0-0.7%2C0.1-1.1%2C0.2c-0.4%2C0.1-0.7%2C0.2-1.1%2C0.3c-0.4%2C0.1-0.7%2C0.2-1%2C0.4%20%20%20%20c-0.2%2C0.1-0.3%2C0.1-0.5%2C0.2c-0.1%2C0-0.2%2C0.1-0.3%2C0.1c-0.1%2C0-0.2%2C0.1-0.3%2C0.1c0.1-0.1%2C0.1-0.1%2C0.2-0.2c0.1-0.1%2C0.1-0.1%2C0.2-0.2%20%20%20%20c0.2-0.1%2C0.3-0.2%2C0.5-0.3c0.3-0.2%2C0.7-0.3%2C1.1-0.5c0.4-0.1%2C0.7-0.2%2C1.1-0.2C3.8%2C16.7%2C4.2%2C16.8%2C4.6%2C16.9z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M19.4%2C13.6c0.3-0.3%2C0.6-0.5%2C0.9-0.7c0.3-0.2%2C0.7-0.3%2C1.1-0.4c0.4-0.1%2C0.8-0.2%2C1.1-0.2c0.2%2C0%2C0.4%2C0%2C0.6%2C0%20%20%20%20c0.1%2C0%2C0.2%2C0%2C0.3%2C0c0.1%2C0%2C0.2%2C0%2C0.3%2C0.1c-0.1%2C0-0.2%2C0-0.3%2C0c-0.1%2C0-0.2%2C0-0.3%2C0c-0.2%2C0-0.4%2C0-0.5%2C0.1c-0.4%2C0.1-0.7%2C0.1-1.1%2C0.2%20%20%20%20c-0.4%2C0.1-0.7%2C0.2-1%2C0.4C20.1%2C13.3%2C19.8%2C13.4%2C19.4%2C13.6z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M19.6%2C14.5c0.3-0.2%2C0.7-0.3%2C1.1-0.4C21%2C14%2C21.4%2C14%2C21.8%2C14c0.4%2C0%2C0.8%2C0%2C1.1%2C0.1c0.2%2C0%2C0.4%2C0.1%2C0.5%2C0.2%20%20%20%20c0.1%2C0%2C0.2%2C0.1%2C0.3%2C0.1c0.1%2C0%2C0.2%2C0.1%2C0.3%2C0.1c-0.1%2C0-0.2%2C0-0.3%2C0c-0.1%2C0-0.2%2C0-0.3%2C0c-0.2%2C0-0.4-0.1-0.6-0.1c-0.4%2C0-0.7%2C0-1.1%2C0%20%20%20%20s-0.7%2C0-1.1%2C0.1C20.3%2C14.4%2C20%2C14.5%2C19.6%2C14.5z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M19.5%2C15.8c0.4-0.1%2C0.7-0.2%2C1.1-0.2c0.4%2C0%2C0.8%2C0%2C1.1%2C0.1c0.4%2C0.1%2C0.7%2C0.2%2C1.1%2C0.4c0.2%2C0.1%2C0.3%2C0.2%2C0.5%2C0.3%20%20%20%20c0.1%2C0%2C0.2%2C0.1%2C0.2%2C0.2c0.1%2C0.1%2C0.1%2C0.1%2C0.2%2C0.2c-0.1%2C0-0.2-0.1-0.3-0.1c-0.1%2C0-0.2-0.1-0.3-0.1c-0.2-0.1-0.3-0.1-0.5-0.2%20%20%20%20c-0.4-0.1-0.7-0.2-1.1-0.3c-0.4-0.1-0.7-0.1-1.1-0.2C20.3%2C15.8%2C19.9%2C15.8%2C19.5%2C15.8z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cg%3E%20%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M13.4%2C18.1c-0.1%2C0.4-0.2%2C0.8-0.4%2C1.1c-0.2%2C0.4-0.4%2C0.7-0.8%2C0.7c-0.3%2C0-0.6-0.2-0.9-0.6%20%20%20%20%20c-0.2-0.3-0.5-0.7-0.6-1.1c0.4-0.1%2C0.8-0.3%2C1.2-0.9C12%2C17.5%2C12.6%2C18.1%2C13.4%2C18.1z%22%2F%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%3E%20%20%20%3Cg%3E%20%20%20%20%3Cg%3E%20%20%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M11.1%2C16.4c0.1-0.2%2C1.2-0.4%2C1.4-0.1c0.2%2C0.2-0.3%2C0.9-0.6%2C1C11.6%2C17.2%2C11%2C16.7%2C11.1%2C16.4z%22%2F%3E%20%20%20%20%3C%2Fg%3E%20%20%20%3C%2Fg%3E%20%20%20%3Cg%3E%20%20%20%20%3Cg%3E%20%20%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M11.8%2C17.5c-0.3%2C0-0.6-0.3-0.8-0.6c-0.2-0.3-0.1-0.5-0.1-0.6l0%2C0c0.1-0.2%2C0.6-0.3%2C0.9-0.4%20%20%20%20%20%20c0.3%2C0%2C0.7%2C0%2C0.9%2C0.2c0.1%2C0.1%2C0.2%2C0.3%2C0.1%2C0.6c-0.1%2C0.4-0.5%2C0.8-0.8%2C0.8C11.9%2C17.5%2C11.9%2C17.5%2C11.8%2C17.5z%20M11.3%2C16.5%20%20%20%20%20%20c0%2C0.1%2C0.1%2C0.1%2C0.2%2C0.3c0.1%2C0.1%2C0.3%2C0.2%2C0.4%2C0.2c0.1%2C0%2C0.2-0.1%2C0.3-0.3c0.1-0.1%2C0.1-0.2%2C0.1-0.3C12.2%2C16.3%2C11.5%2C16.4%2C11.3%2C16.5%20%20%20%20%20%20z%20M12.4%2C16.4L12.4%2C16.4L12.4%2C16.4z%22%2F%3E%20%20%20%20%3C%2Fg%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%3E%20%20%20%3Cg%3E%20%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M10.4%2C18.6c-0.5-0.1-0.8-0.4-1-0.6c0%2C0%2C0%2C0%2C0%2C0c-0.1-0.1-0.1-0.1-0.1-0.1c-0.1-0.1-0.1-0.2%2C0-0.3%20%20%20%20%20c0.1-0.1%2C0.2-0.1%2C0.3%2C0l0%2C0c0%2C0%2C0%2C0%2C0.1%2C0.1c0%2C0%2C0%2C0%2C0%2C0c0.1%2C0.2%2C0.5%2C0.5%2C1.1%2C0.4c0.4-0.1%2C0.7-0.3%2C1.1-0.8c0%2C0%2C0.1-0.1%2C0.1-0.1%20%20%20%20%20c0.1%2C0%2C0.1%2C0%2C0.2%2C0.1c0%2C0%2C0.6%2C0.6%2C1.2%2C0.6c0.4%2C0%2C0.7-0.2%2C0.9-0.7l0%2C0c0%2C0%2C0%2C0%2C0%2C0c0%2C0%2C0-0.1%2C0.1-0.1c0.1-0.1%2C0.2-0.1%2C0.3-0.1%20%20%20%20%20s0.1%2C0.2%2C0.1%2C0.3c0%2C0-0.1%2C0.1-0.1%2C0.1c0%2C0%2C0%2C0%2C0%2C0c-0.3%2C0.5-0.8%2C0.8-1.2%2C0.9c-0.6%2C0-1.1-0.3-1.4-0.5c-0.4%2C0.5-0.8%2C0.7-1.2%2C0.8%20%20%20%20%20C10.6%2C18.6%2C10.5%2C18.6%2C10.4%2C18.6z%22%2F%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%3E%20%20%20%3Cg%3E%20%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M12.1%2C20.2c-0.3%2C0-0.6-0.3-0.9-0.6c-0.2-0.3-0.5-0.7-0.6-1.1c0-0.1%2C0-0.1%2C0-0.2c0-0.1%2C0.1-0.1%2C0.2-0.1%20%20%20%20%20c0.4-0.1%2C0.7-0.3%2C1.1-0.8c0%2C0%2C0.1-0.1%2C0.1-0.1c0.1%2C0%2C0.1%2C0%2C0.2%2C0.1c0%2C0%2C0.6%2C0.6%2C1.2%2C0.6c0.1%2C0%2C0.1%2C0%2C0.2%2C0.1%20%20%20%20%20c0%2C0.1%2C0.1%2C0.1%2C0%2C0.2c-0.1%2C0.4-0.2%2C0.9-0.4%2C1.2c-0.3%2C0.5-0.6%2C0.8-0.9%2C0.8C12.2%2C20.2%2C12.1%2C20.2%2C12.1%2C20.2z%20M11%2C18.5%20%20%20%20%20c0.1%2C0.3%2C0.3%2C0.5%2C0.5%2C0.8c0.3%2C0.3%2C0.5%2C0.5%2C0.7%2C0.5c0.2%2C0%2C0.4-0.2%2C0.6-0.6c0.1-0.2%2C0.2-0.5%2C0.3-0.8c0%2C0%2C0%2C0%2C0%2C0%20%20%20%20%20c-0.5-0.1-0.9-0.3-1.1-0.5C11.7%2C18.2%2C11.4%2C18.4%2C11%2C18.5z%22%2F%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cg%3E%20%20%20%20%3Cellipse%20transform%3D%22matrix%280.9897%20-0.1434%200.1434%200.9897%20-1.8999%202.2309%29%22%20class%3D%22st8%22%20cx%3D%2214.5%22%20cy%3D%2214.3%22%20rx%3D%221.1%22%20ry%3D%221.4%22%2F%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%3E%20%20%20%3Cg%3E%20%20%20%20%3Cellipse%20transform%3D%22matrix%280.9897%20-0.1434%200.1434%200.9897%20-1.8707%202.1851%29%22%20class%3D%22st9%22%20cx%3D%2214.2%22%20cy%3D%2214.1%22%20rx%3D%220.3%22%20ry%3D%220.4%22%2F%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%3Cellipse%20transform%3D%22matrix%280.9995%20-3.067872e-02%203.067872e-02%200.9995%20-0.4511%200.2658%29%22%20class%3D%22st8%22%20cx%3D%228.4%22%20cy%3D%2214.8%22%20rx%3D%221.1%22%20ry%3D%221.4%22%2F%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%3E%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%3Cellipse%20transform%3D%22matrix%280.9995%20-3.068461e-02%203.068461e-02%200.9995%20-0.4426%200.2737%29%22%20class%3D%22st9%22%20cx%3D%228.7%22%20cy%3D%2214.6%22%20rx%3D%220.3%22%20ry%3D%220.4%22%2F%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var bunnyHeadMax = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%2024%2032%22%20style%3D%22enable-background%3Anew%200%200%2024%2032%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%20.st0%7Bfill%3A%23B165FF%3B%7D%20.st1%7Bfill%3Aurl%28%23SVGID_1_%29%3B%7D%20.st2%7Bfill%3A%23FE6DCB%3B%7D%20.st3%7Bfill%3A%2333AEF1%3B%7D%20.st4%7Bfill%3A%23FDD800%3B%7D%20.st5%7Bfill%3A%23B177EA%3B%7D%20.st6%7Bfill%3Aurl%28%23SVGID_2_%29%3B%7D%20.st7%7Bfill%3Aurl%28%23SVGID_3_%29%3B%7D%20.st8%7Bfill%3A%23390075%3B%7D%20.st9%7Bfill%3A%23FF459A%3B%7D%20.st10%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Crect%20x%3D%220.9%22%20y%3D%2218.6%22%20class%3D%22st0%22%20width%3D%2214.6%22%20height%3D%229.4%22%2F%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M8.1%2C23.5c-1.2%2C1.2%2C0.2%2C3%2C1.9%2C4.8c1.7%2C1.7%2C3.6%2C3.1%2C4.8%2C1.9c1.2-1.2%2C0.6-3.8-1.2-5.5%20C11.9%2C22.9%2C9.3%2C22.3%2C8.1%2C23.5z%22%2F%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M13.3%2C21.7c-1.2%2C1.2%2C0.2%2C3%2C1.9%2C4.8c1.7%2C1.7%2C3.6%2C3.1%2C4.8%2C1.9c1.2-1.2%2C0.6-3.8-1.2-5.5%20C17.1%2C21.2%2C14.5%2C20.6%2C13.3%2C21.7z%22%2F%3E%3Cg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3ClinearGradient%20id%3D%22SVGID_1_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%2212.2654%22%20y1%3D%2221.7452%22%20x2%3D%2212.2654%22%20y2%3D%227.1046%22%3E%20%20%20%20%3Cstop%20%20offset%3D%220%22%20style%3D%22stop-color%3A%23B16EFF%22%2F%3E%20%20%20%20%3Cstop%20%20offset%3D%221%22%20style%3D%22stop-color%3A%23BB80FF%22%2F%3E%20%20%20%3C%2FlinearGradient%3E%20%20%20%3Cpath%20class%3D%22st1%22%20d%3D%22M2.4%2C16.2c0.4%2C4%2C5.1%2C6%2C10.5%2C5.4c5.4-0.6%2C9.6-3.5%2C9.1-7.4c-0.4-4-5.3-7.6-10.7-7C5.9%2C7.7%2C2%2C12.2%2C2.4%2C16.2z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st2%22%20d%3D%22M11%2C10.1c0.2%2C0%2C0.3%2C0%2C0.5%2C0c1-0.1%2C1.4-0.7%2C1.4-1.1C12.7%2C9.2%2C12%2C9.9%2C11%2C10.1z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st3%22%20d%3D%22M10.5%2C10c0.1%2C0%2C0.2%2C0.1%2C0.3%2C0.1c0%2C0%2C0.1%2C0%2C0.1%2C0c1-0.3%2C1.7-0.9%2C1.9-1.1c0%2C0%2C0%2C0%2C0-0.1c0-0.3-0.1-0.7-0.2-1.1%20%20%20%20c0%2C0-0.8%2C1-2.3%2C1.4c-0.2%2C0-0.3%2C0.1-0.5%2C0.1C10%2C9.6%2C10.2%2C9.9%2C10.5%2C10z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st4%22%20d%3D%22M9.9%2C9.4c0.2%2C0%2C0.4-0.1%2C0.5-0.1c1.5-0.4%2C2.3-1.4%2C2.3-1.4c-0.1-0.4-0.3-0.9-0.4-1.4c0%2C0-0.4%2C0.9-1.9%2C1.6%20%20%20%20C10.2%2C8.2%2C10%2C8.2%2C9.8%2C8.3C9.8%2C8.7%2C9.9%2C9.1%2C9.9%2C9.4C9.9%2C9.4%2C9.9%2C9.4%2C9.9%2C9.4z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st5%22%20d%3D%22M9.8%2C8.3c0.2-0.1%2C0.4-0.2%2C0.6-0.3c1.4-0.7%2C1.9-1.6%2C1.9-1.6c-0.2-0.5-0.4-1-0.6-1.4c0%2C0-0.3%2C0.8-1.1%2C1.4%20%20%20%20c-0.2%2C0.2-0.4%2C0.3-0.7%2C0.4C9.8%2C7.3%2C9.8%2C7.9%2C9.8%2C8.3z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st2%22%20d%3D%22M9.8%2C6.8c0.3-0.1%2C0.5-0.2%2C0.7-0.4c0.8-0.6%2C1.1-1.4%2C1.1-1.4c-0.2-0.3-0.4-0.6-0.6-0.7%20%20%20%20c-0.1-0.1-0.2-0.1-0.4-0.1C10.2%2C4.3%2C9.9%2C5.5%2C9.8%2C6.8z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3ClinearGradient%20id%3D%22SVGID_2_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%225.719%22%20y1%3D%2212.8085%22%20x2%3D%225.719%22%20y2%3D%226.6088%22%3E%20%20%20%20%3Cstop%20%20offset%3D%220%22%20style%3D%22stop-color%3A%23B16EFF%22%2F%3E%20%20%20%20%3Cstop%20%20offset%3D%221%22%20style%3D%22stop-color%3A%23BB80FF%22%2F%3E%20%20%20%3C%2FlinearGradient%3E%20%20%20%3Cpath%20class%3D%22st6%22%20d%3D%22M7.8%2C9.7c0%2C0-1.2-3.3-2.6-3c-1.4%2C0.2-1.7%2C5.1-1.5%2C6.2C3.7%2C12.8%2C5.9%2C12.6%2C7.8%2C9.7z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cg%3E%20%20%20%20%3Cpath%20class%3D%22st2%22%20d%3D%22M6.5%2C9.6c0%2C0-0.5-1.6-1.1-1.5c-0.6%2C0.1-0.8%2C2.6-0.7%2C3.1C4.8%2C11.2%2C5.7%2C11.1%2C6.5%2C9.6z%22%2F%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3ClinearGradient%20id%3D%22SVGID_3_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%2217.6684%22%20y1%3D%2210.5792%22%20x2%3D%2217.6684%22%20y2%3D%224.9968%22%3E%20%20%20%20%3Cstop%20%20offset%3D%220%22%20style%3D%22stop-color%3A%23B16EFF%22%2F%3E%20%20%20%20%3Cstop%20%20offset%3D%221%22%20style%3D%22stop-color%3A%23BB80FF%22%2F%3E%20%20%20%3C%2FlinearGradient%3E%20%20%20%3Cpath%20class%3D%22st7%22%20d%3D%22M15.3%2C8.6c0%2C0%2C0.2-3.5%2C1.6-3.6c1.4-0.2%2C3.1%2C4.4%2C3.2%2C5.5C20.1%2C10.6%2C17.9%2C11%2C15.3%2C8.6z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cg%3E%20%20%20%20%3Cpath%20class%3D%22st2%22%20d%3D%22M16.4%2C8.2c0%2C0%2C0-1.7%2C0.7-1.8c0.7-0.1%2C1.5%2C2.3%2C1.6%2C2.8C18.7%2C9.3%2C17.7%2C9.5%2C16.4%2C8.2z%22%2F%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M19.3%2C13.3c0.3-0.2%2C0.6-0.4%2C1-0.5c0.3-0.2%2C0.7-0.3%2C1-0.4s0.7-0.2%2C1-0.3c0.2-0.1%2C0.4-0.1%2C0.5-0.1%20%20%20%20c0.1%2C0%2C0.2%2C0%2C0.3-0.1c0.1%2C0%2C0.2%2C0%2C0.3-0.1c-0.1%2C0-0.2%2C0-0.3%2C0s-0.2%2C0-0.3%2C0c-0.2%2C0-0.4%2C0-0.6%2C0c-0.4%2C0-0.8%2C0.1-1.1%2C0.3%20%20%20%20c-0.4%2C0.1-0.7%2C0.3-1%2C0.5C19.8%2C12.7%2C19.5%2C13%2C19.3%2C13.3z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M19.5%2C14.2c0.4-0.1%2C0.7-0.2%2C1.1-0.3c0.4-0.1%2C0.7-0.1%2C1.1-0.2c0.4%2C0%2C0.7-0.1%2C1.1-0.1c0.2%2C0%2C0.4%2C0%2C0.6%2C0%20%20%20%20c0.1%2C0%2C0.2%2C0%2C0.3%2C0c0.1%2C0%2C0.2%2C0%2C0.3%2C0c-0.1%2C0-0.2-0.1-0.3-0.1c-0.1%2C0-0.2-0.1-0.3-0.1c-0.2%2C0-0.4-0.1-0.6-0.1%20%20%20%20c-0.4-0.1-0.8%2C0-1.2%2C0c-0.4%2C0-0.8%2C0.1-1.1%2C0.2C20.2%2C13.8%2C19.8%2C13.9%2C19.5%2C14.2z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M19.6%2C15.4c0.4%2C0%2C0.7%2C0%2C1.1%2C0c0.4%2C0%2C0.7%2C0%2C1.1%2C0.1c0.4%2C0%2C0.7%2C0.1%2C1.1%2C0.2c0.2%2C0%2C0.4%2C0.1%2C0.5%2C0.1%20%20%20%20c0.1%2C0%2C0.2%2C0.1%2C0.3%2C0.1c0.1%2C0%2C0.2%2C0.1%2C0.3%2C0.1c-0.1-0.1-0.2-0.1-0.2-0.2c-0.1%2C0-0.2-0.1-0.2-0.1c-0.2-0.1-0.3-0.2-0.5-0.2%20%20%20%20c-0.4-0.1-0.7-0.2-1.1-0.3c-0.4%2C0-0.8%2C0-1.2%2C0C20.3%2C15.1%2C20%2C15.2%2C19.6%2C15.4z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M4.4%2C14.7c-0.3-0.2-0.7-0.4-1-0.5C3%2C14.1%2C2.6%2C14%2C2.3%2C14c-0.4%2C0-0.8%2C0-1.2%2C0c-0.2%2C0-0.4%2C0.1-0.6%2C0.1%20%20%20%20c-0.1%2C0-0.2%2C0.1-0.3%2C0.1c-0.1%2C0-0.2%2C0.1-0.3%2C0.1c0.1%2C0%2C0.2%2C0%2C0.3%2C0c0.1%2C0%2C0.2%2C0%2C0.3%2C0c0.2%2C0%2C0.4%2C0%2C0.6%2C0c0.4%2C0%2C0.7%2C0%2C1.1%2C0%20%20%20%20c0.4%2C0%2C0.7%2C0.1%2C1.1%2C0.2C3.7%2C14.6%2C4%2C14.6%2C4.4%2C14.7z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M4.4%2C15.7c-0.4-0.1-0.7-0.2-1.1-0.2c-0.4%2C0-0.8%2C0-1.1%2C0.1c-0.4%2C0.1-0.8%2C0.2-1.1%2C0.3%20%20%20%20c-0.2%2C0.1-0.3%2C0.2-0.5%2C0.2c-0.1%2C0-0.2%2C0.1-0.2%2C0.1c-0.1%2C0.1-0.2%2C0.1-0.2%2C0.2c0.1%2C0%2C0.2-0.1%2C0.3-0.1c0.1%2C0%2C0.2-0.1%2C0.3-0.1%20%20%20%20c0.2-0.1%2C0.4-0.1%2C0.5-0.2c0.4-0.1%2C0.7-0.2%2C1.1-0.2c0.4-0.1%2C0.7-0.1%2C1.1-0.1C3.7%2C15.7%2C4%2C15.7%2C4.4%2C15.7z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M4.7%2C16.9c-0.4-0.1-0.8%2C0-1.1%2C0c-0.4%2C0.1-0.8%2C0.2-1.1%2C0.3c-0.4%2C0.1-0.7%2C0.3-1%2C0.5C1.3%2C17.8%2C1.1%2C18%2C1%2C18.1%20%20%20%20c-0.1%2C0.1-0.1%2C0.1-0.2%2C0.2c-0.1%2C0.1-0.1%2C0.1-0.2%2C0.2c0.1%2C0%2C0.2-0.1%2C0.2-0.1c0.1%2C0%2C0.2-0.1%2C0.2-0.1c0.2-0.1%2C0.3-0.2%2C0.5-0.3%20%20%20%20c0.3-0.2%2C0.7-0.3%2C1-0.5s0.7-0.3%2C1-0.4C4%2C17%2C4.3%2C16.9%2C4.7%2C16.9z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M11.9%2C17.9c0.2%2C0.5%2C0.6%2C1.2%2C1.6%2C1.2c0.5%2C0%2C0.9-0.2%2C1.2-0.4c0.6-0.6%2C0.6-1.6%2C0.6-1.6%20%20%20%20c-1.4%2C0.6-1.7-0.9-1.7-0.9c0%2C1.7-1.8%2C1.2-1.8%2C1.2S11.8%2C17.5%2C11.9%2C17.9z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st9%22%20d%3D%22M11.9%2C17.9c0.2%2C0.5%2C0.6%2C1.2%2C1.6%2C1.2c0.5%2C0%2C0.9-0.2%2C1.2-0.4C14.3%2C18.1%2C13.4%2C17.2%2C11.9%2C17.9z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M13.7%2C19.3c0.4%2C0%2C0.7-0.2%2C1-0.4c0.7-0.6%2C0.7-1.8%2C0.7-1.8c0-0.1%2C0-0.2-0.1-0.2c-0.1%2C0-0.2%2C0-0.2%2C0%20%20%20%20c-0.3%2C0.1-0.6%2C0.2-0.8%2C0.1c-0.4-0.2-0.5-0.8-0.5-0.8c0-0.1-0.1-0.2-0.2-0.2c0%2C0%2C0%2C0%2C0%2C0c-0.1%2C0-0.2%2C0.1-0.2%2C0.2%20%20%20%20c0%2C0.4-0.1%2C0.7-0.3%2C0.8c-0.4%2C0.3-1.2%2C0.1-1.2%2C0.1c-0.1%2C0-0.1%2C0-0.2%2C0c-0.1%2C0-0.1%2C0.1-0.1%2C0.2c0%2C0.7%2C0.4%2C2%2C2%2C2%20%20%20%20C13.6%2C19.3%2C13.7%2C19.3%2C13.7%2C19.3z%20M15%2C17.4c-0.1%2C0.3-0.2%2C0.8-0.5%2C1.1c-0.2%2C0.2-0.6%2C0.3-0.9%2C0.3c-1.1%2C0-1.4-0.8-1.5-1.3%20%20%20%20c0.3%2C0%2C0.9%2C0%2C1.3-0.3c0.2-0.1%2C0.3-0.3%2C0.4-0.4c0.1%2C0.2%2C0.3%2C0.3%2C0.5%2C0.4C14.4%2C17.4%2C14.7%2C17.4%2C15%2C17.4z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M13.4%2C16L13.4%2C16c0%2C0.1%2C0%2C0.2%2C0%2C0.2c0%2C0.1%2C0%2C0.1%2C0%2C0.2c0%2C0.1-0.1%2C0.2-0.1%2C0.3c-0.1%2C0.2-0.3%2C0.3-0.5%2C0.4%20%20%20%20c0%2C0-0.1%2C0-0.1%2C0l0%2C0l-0.1%2C0c-0.1%2C0-0.1%2C0-0.2%2C0l-0.1%2C0l-0.1%2C0l-0.1%2C0l0%2C0c0%2C0-0.1%2C0-0.1%2C0c-0.1%2C0-0.3-0.1-0.4-0.1%20%20%20%20c0%2C0-0.1%2C0-0.1%2C0c0%2C0-0.1%2C0-0.1%2C0c-0.1%2C0-0.1-0.1-0.2-0.1l0%2C0c0%2C0%2C0%2C0%2C0%2C0c0%2C0%2C0%2C0%2C0%2C0c0%2C0.1%2C0%2C0.2%2C0.1%2C0.3c0%2C0%2C0%2C0.1%2C0.1%2C0.1%20%20%20%20c0%2C0%2C0.1%2C0.1%2C0.1%2C0.1c0.1%2C0.1%2C0.3%2C0.2%2C0.5%2C0.2c0%2C0%2C0.1%2C0%2C0.1%2C0l0.1%2C0l0.1%2C0l0.1%2C0l0.1%2C0c0.1%2C0%2C0.2%2C0%2C0.2%2C0l0.1%2C0l0.1%2C0%20%20%20%20c0%2C0%2C0.1%2C0%2C0.1%2C0c0.2%2C0%2C0.4-0.1%2C0.5-0.2c0.2-0.1%2C0.3-0.3%2C0.4-0.4c0.1-0.2%2C0.1-0.3%2C0.1-0.5c0-0.1%2C0-0.2%2C0-0.3c0%2C0%2C0-0.1%2C0-0.1%20%20%20%20c0%2C0%2C0-0.1%2C0-0.1c0-0.1-0.1-0.2-0.3-0.2C13.5%2C15.7%2C13.4%2C15.8%2C13.4%2C16L13.4%2C16z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M13.4%2C16c0%2C0%2C0%2C0.1%2C0%2C0.1c0%2C0%2C0%2C0.1%2C0%2C0.1c0%2C0.1%2C0%2C0.1%2C0%2C0.2c0%2C0.1%2C0.1%2C0.3%2C0.2%2C0.4c0.1%2C0.1%2C0.2%2C0.2%2C0.3%2C0.3%20%20%20%20c0.1%2C0.1%2C0.3%2C0.1%2C0.5%2C0.1c0.1%2C0%2C0.2%2C0%2C0.2%2C0c0.1%2C0%2C0.1%2C0%2C0.2%2C0c0.1%2C0%2C0.3-0.1%2C0.4-0.1c0%2C0%2C0.1%2C0%2C0.1-0.1c0%2C0%2C0%2C0%2C0%2C0l0%2C0%20%20%20%20c0%2C0%2C0%2C0%2C0%2C0c0%2C0%2C0%2C0%2C0%2C0c0%2C0%2C0-0.1%2C0.1-0.1c0%2C0%2C0-0.1%2C0-0.1c0%2C0%2C0-0.1%2C0-0.1c0-0.1%2C0-0.1-0.1-0.2c0%2C0%2C0%2C0%2C0%2C0c0%2C0%2C0%2C0%2C0%2C0l0%2C0%20%20%20%20c0%2C0.1-0.1%2C0.1-0.1%2C0.2c0%2C0%2C0%2C0-0.1%2C0.1l0%2C0c0%2C0%2C0%2C0%2C0%2C0c-0.1%2C0.1-0.2%2C0.1-0.3%2C0.1c-0.1%2C0-0.2%2C0-0.3%2C0.1l-0.2%2C0%20%20%20%20c-0.1%2C0-0.1%2C0-0.2%2C0c-0.1%2C0-0.2-0.1-0.3-0.1c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1%2C0-0.1%2C0-0.2%20%20%20%20c0%2C0%2C0-0.1%2C0-0.1l0-0.1l0%2C0c0-0.1-0.1-0.2-0.3-0.2C13.5%2C15.8%2C13.4%2C15.9%2C13.4%2C16z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cg%3E%20%20%20%20%3Cellipse%20transform%3D%22matrix%280.9872%20-0.1596%200.1596%200.9872%20-2.0502%202.7756%29%22%20class%3D%22st8%22%20cx%3D%2216.3%22%20cy%3D%2214.2%22%20rx%3D%221.1%22%20ry%3D%221.4%22%2F%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%3E%20%20%20%3Cg%3E%20%20%20%20%3Cellipse%20transform%3D%22matrix%280.9872%20-0.1596%200.1596%200.9872%20-2.0191%202.7239%29%22%20class%3D%22st10%22%20cx%3D%2216%22%20cy%3D%2213.9%22%20rx%3D%220.3%22%20ry%3D%220.4%22%2F%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%3Cellipse%20transform%3D%22matrix%280.9995%20-3.150215e-02%203.150215e-02%200.9995%20-0.4574%200.3253%29%22%20class%3D%22st8%22%20cx%3D%2210.1%22%20cy%3D%2214.7%22%20rx%3D%221.1%22%20ry%3D%221.4%22%2F%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%3E%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%3Cellipse%20transform%3D%22matrix%280.9995%20-3.150887e-02%203.150887e-02%200.9995%20-0.449%200.3335%29%22%20class%3D%22st10%22%20cx%3D%2210.4%22%20cy%3D%2214.4%22%20rx%3D%220.3%22%20ry%3D%220.4%22%2F%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%3E%20%20%3Cg%3E%20%20%20%3Cg%3E%20%20%20%20%3Cpath%20class%3D%22st8%22%20d%3D%22M13.5%2C16.4c-0.8%2C0.1-1.4-0.7-1.2-0.9c0.1-0.1%2C0.3-0.2%2C0.5-0.3c0.4-0.1%2C0.7-0.2%2C1.1-0.1%20%20%20%20%20c0.2%2C0%2C0.4%2C0.1%2C0.5%2C0.1C14.7%2C15.4%2C14.3%2C16.3%2C13.5%2C16.4z%22%2F%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var bunnyButt = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%2015%2032%22%20style%3D%22enable-background%3Anew%200%200%2015%2032%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%20.st0%7Bfill%3A%238F47E2%3B%7D%20.st1%7Bfill%3A%23B165FF%3B%7D%20.st2%7Bfill%3A%23C08AFF%3B%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M9.6%2C20.9C7.7%2C21.4%2C8%2C24%2C8.8%2C26.8c0.7%2C2.8%2C1.8%2C5.2%2C3.7%2C4.7s2.8-3.5%2C2.1-6.3C13.8%2C22.5%2C11.4%2C20.4%2C9.6%2C20.9z%22%2F%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M1%2C24.5C1%2C20.9%2C3.9%2C18%2C7.5%2C18H15v10H4.5C2.6%2C28%2C1%2C26.4%2C1%2C24.5z%22%2F%3E%3Cpath%20class%3D%22st2%22%20d%3D%22M6.1%2C17.2c0.7%2C1.2-0.3%2C2.1-1.6%2C2.8c-1.2%2C0.7-2.6%2C1.1-3.2%2C0c-0.7-1.2-0.1-2.9%2C1.1-3.6C3.7%2C15.7%2C5.4%2C16%2C6.1%2C17.2z%20%22%2F%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M1.6%2C23.7c-1.4%2C1.4%2C0.2%2C3.5%2C2.2%2C5.5s4.2%2C3.6%2C5.5%2C2.2c1.4-1.4%2C0.7-4.4-1.3-6.4C6.1%2C23%2C3%2C22.3%2C1.6%2C23.7z%22%2F%3E%3C%2Fsvg%3E";

var getCursorStyle = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return disabled ? "not-allowed" : "cursor";
};
var getBaseThumbStyles = function (_a) {
    var isMax = _a.isMax, disabled = _a.disabled;
    return "\n  -webkit-appearance: none;\n  background-image: url(" + (isMax ? bunnyHeadMax : bunnyHeadMain) + ");\n  background-color: transparent;\n  border: 0;\n  cursor: " + getCursorStyle + ";\n  width: 24px;\n  height: 32px;\n  filter: " + (disabled ? "grayscale(100%)" : "none") + ";\n  transform: translate(-2px, -2px);\n  transition: 200ms transform;\n\n  &:hover {\n    transform: " + (disabled ? "scale(1) translate(-2px, -2px)" : "scale(1.1) translate(-3px, -3px)") + ";\n  }\n";
};
var SliderLabelContainer = styled.div(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"], ["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"])));
var SliderLabel = styled(Text)(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"], ["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"])), function (_a) {
    var progress = _a.progress;
    return progress;
});
var BunnyButt = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"], ["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"])), bunnyButt, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var BunnySlider = styled.div(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"], ["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"])));
var StyledInput = styled.input(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"], ["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"])), getCursorStyle, getBaseThumbStyles, getBaseThumbStyles, getBaseThumbStyles);
var BarBackground = styled.div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"], ["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return theme.colors[disabled ? "textDisabled" : "inputSecondary"];
});
var BarProgress = styled.div(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"], ["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var templateObject_1$r, templateObject_2$e, templateObject_3$8, templateObject_4$6, templateObject_5$3, templateObject_6$1, templateObject_7$1;

var Slider = function (_a) {
    var name = _a.name, min = _a.min, max = _a.max, value = _a.value, onValueChanged = _a.onValueChanged, valueLabel = _a.valueLabel, _b = _a.step, step = _b === void 0 ? "any" : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, props = __rest(_a, ["name", "min", "max", "value", "onValueChanged", "valueLabel", "step", "disabled"]);
    var handleChange = function (_a) {
        var target = _a.target;
        onValueChanged(parseFloat(target.value));
    };
    var progressPercentage = (value / max) * 100;
    var isMax = value === max;
    var progressWidth;
    if (progressPercentage <= 10) {
        progressWidth = progressPercentage + 0.5 + "%";
    }
    else if (progressPercentage >= 90) {
        progressWidth = progressPercentage - 4 + "%";
    }
    else if (progressPercentage >= 60) {
        progressWidth = progressPercentage - 2.5 + "%";
    }
    else {
        progressWidth = progressPercentage + "%";
    }
    var labelProgress = isMax ? "calc(100% - 12px)" : progressPercentage + "%";
    var displayValueLabel = isMax ? "MAX" : valueLabel;
    return (React.createElement(Box, __assign({ position: "relative", height: "48px" }, props),
        React.createElement(BunnyButt, { disabled: disabled }),
        React.createElement(BunnySlider, null,
            React.createElement(BarBackground, { disabled: disabled }),
            React.createElement(BarProgress, { style: { width: progressWidth }, disabled: disabled }),
            React.createElement(StyledInput, { name: name, type: "range", min: min, max: max, value: value, step: step, onChange: handleChange, isMax: isMax, disabled: disabled })),
        valueLabel && (React.createElement(SliderLabelContainer, null,
            React.createElement(SliderLabel, { progress: labelProgress }, displayValueLabel)))));
};

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$q, templateObject_2$d, templateObject_3$7, templateObject_4$5, templateObject_5$2;

var Icon$q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M43.76,68.88l-5.15,17.8A24.76,24.76,0,0,1,22.45,87.8c-4.12-1.23-5.61-3.52-.87-4.92-8.93-2.6-11.57-9.26-3.39-7.81-12.32-7.33-11.3-15.95-1-10.8-6.45-7.62-5.46-16.55-.42-17.09a4.45,4.45,0,0,1,3.76,1.5A104.33,104.33,0,0,0,29,57.1c3.05,2.72,6.27,5.29,9.59,7.78Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("path", { d: "M38.44,65.11a10.06,10.06,0,0,1-3.16-1.62,31.91,31.91,0,0,1-2.73-2.19L29.88,59c-.89-.77-1.76-1.54-2.63-2.33q-2.59-2.36-5-4.88c-.81-.84-1.61-1.71-2.39-2.57a3.58,3.58,0,0,0-2.45-1.2,2.29,2.29,0,0,0-.69,0l-.33.07-.33.1A3.42,3.42,0,0,0,14.9,49a4.39,4.39,0,0,0-.79,1.2l-.15.34c0,.12-.07.24-.12.36s-.12.5-.18.75a10,10,0,0,0,0,3.19A14.06,14.06,0,0,0,14.43,58a19.31,19.31,0,0,0,3.39,5.7l.55.63.58.61c.19.2.41.38.61.57l.32.27.33.27c.21.17.42.36.63.55l.61.58a5.55,5.55,0,0,1,1,1.46h0a.34.34,0,0,1-.17.45.45.45,0,0,1-.16,0,4.61,4.61,0,0,1-.94-.21l-.43-.17-.4-.22c-.26-.15-.51-.32-.75-.49s-.47-.39-.69-.59-.43-.42-.64-.64L18,66.49c-.11-.11-.22-.21-.32-.32l-.62-.66c-.2-.22-.39-.45-.59-.68a21.1,21.1,0,0,1-3.7-6.21,16.47,16.47,0,0,1-.91-3.56,12.05,12.05,0,0,1,.06-3.74,7.62,7.62,0,0,1,.24-.94c.05-.16.09-.31.15-.47l.19-.45a6.25,6.25,0,0,1,1.13-1.69,4.87,4.87,0,0,1,1.76-1.16l.51-.17.51-.09a4.12,4.12,0,0,1,1-.06,5.39,5.39,0,0,1,3.65,1.78c.78.86,1.56,1.7,2.36,2.53q2.4,2.48,5,4.8c.85.78,1.71,1.54,2.59,2.29s1.75,1.5,2.67,2.2L35.07,61c.45.36.9.72,1.34,1.1s.87.75,1.27,1.18a8.22,8.22,0,0,1,1.11,1.41h0a.31.31,0,0,1-.11.43A.26.26,0,0,1,38.44,65.11Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M16.76,65.06a15.83,15.83,0,0,0-3.29-1.27,6.67,6.67,0,0,0-1.63-.2,2.4,2.4,0,0,0-1.28.33,1.12,1.12,0,0,0-.47.93,3.55,3.55,0,0,0,.27,1.44,10.41,10.41,0,0,0,1.84,2.88,18.32,18.32,0,0,0,2.59,2.46c.93.75,1.95,1.41,3,2.08,2,1.32,4.14,2.54,6.23,3.94a.29.29,0,0,1,.08.41.31.31,0,0,1-.31.13,22.61,22.61,0,0,1-7-2.9A26.46,26.46,0,0,1,13.66,73a23.68,23.68,0,0,1-2.79-2.7,12,12,0,0,1-2.15-3.39,5.15,5.15,0,0,1-.38-2.19,3,3,0,0,1,.33-1.24,2.77,2.77,0,0,1,.88-1A3.61,3.61,0,0,1,10.69,62a5.53,5.53,0,0,1,1.12-.14,8.69,8.69,0,0,1,2.07.25,17.66,17.66,0,0,1,3.66,1.4.88.88,0,0,1-.78,1.58Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M18.51,76.23a14.4,14.4,0,0,0-2.39-.36,5.87,5.87,0,0,0-1.12,0,3.39,3.39,0,0,0-.48.1,1.28,1.28,0,0,0-.37.16.59.59,0,0,0-.18.17.43.43,0,0,0-.05.19,1.15,1.15,0,0,0,.05.33,3,3,0,0,0,.18.42A6.38,6.38,0,0,0,15.63,79a12.38,12.38,0,0,0,2,1.34c.72.38,1.47.7,2.23,1l2.29.93c.77.32,1.55.63,2.35,1h0a.31.31,0,0,1,.14.41.32.32,0,0,1-.24.17A11.59,11.59,0,0,1,19.15,83a15.81,15.81,0,0,1-2.4-1.2A16.91,16.91,0,0,1,14.5,80.3a8.19,8.19,0,0,1-1.89-2.17,3.23,3.23,0,0,1-.44-1.69,2,2,0,0,1,.31-1,2.19,2.19,0,0,1,.72-.73,3.8,3.8,0,0,1,1.57-.53,7.8,7.8,0,0,1,1.44,0,15.71,15.71,0,0,1,2.69.4.88.88,0,0,1-.39,1.71Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M28.84,89.52c-4.36,0-8.16-1-9.91-2.43a2.43,2.43,0,0,1-1.14-2.4c.23-1.15,1.38-2,3.55-2.65a.88.88,0,0,1,.49,1.69c-2.16.64-2.31,1.27-2.31,1.29s.12.39.5.7c2.27,1.8,10.75,3.49,18.23.16a.88.88,0,0,1,.72,1.6A25.16,25.16,0,0,1,28.84,89.52Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M9.35,66.3v0c.54,2.68,4,6,8.66,8.74a43.9,43.9,0,0,0,5,2.52l4.37,1.68c.74,4.28-13.36-1-11.78-3.93a4.66,4.66,0,0,0-2.32.73c-.82.66-.29,1.63.91,2.65h0a28.23,28.23,0,0,0,9.6,4.72,26.09,26.09,0,0,0,4,.46c1.69,0,.59,3.81-8.12,0a1.69,1.69,0,0,1-.27-.11c-4.39,3,8.67,7.54,19.1,2.9l5.15-17.8-5.15-4c-2.59-1.94-5.11-3.93-7.55-6l-.83-.1a22.22,22.22,0,0,1,4.43,8.87,2.51,2.51,0,0,1-3.8,2.63c-7.85-5-13.94-11.79-16.54-22a10.27,10.27,0,0,0-1.34,8,15.48,15.48,0,0,0,1.93,4.81h0a26.65,26.65,0,0,0,4.55,5.56L25,71.08c1.93,6.83-13.82-3-13.88-8.32A3.17,3.17,0,0,0,9.35,66.3Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("path", { d: "M84.24,68.88l5.15,17.8a24.76,24.76,0,0,0,16.16,1.12c4.12-1.23,5.61-3.52.87-4.92,8.93-2.6,11.57-9.26,3.39-7.81,12.32-7.33,11.3-15.95,1-10.8,6.45-7.62,5.46-16.55.42-17.09a4.45,4.45,0,0,0-3.76,1.5A104.33,104.33,0,0,1,99,57.1c-3,2.72-6.27,5.29-9.59,7.78Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("path", { d: "M89.21,64.64a8.22,8.22,0,0,1,1.11-1.41c.4-.43.84-.8,1.27-1.18s.89-.74,1.34-1.1l1.37-1.06c.92-.7,1.8-1.45,2.67-2.2s1.74-1.51,2.59-2.29q2.56-2.32,5-4.8c.8-.83,1.58-1.67,2.36-2.53a5.39,5.39,0,0,1,3.65-1.78,4.12,4.12,0,0,1,1,.06l.51.09.51.17a4.87,4.87,0,0,1,1.76,1.16,6.25,6.25,0,0,1,1.13,1.69l.19.45c.06.16.1.31.15.47a7.62,7.62,0,0,1,.24.94,12.05,12.05,0,0,1,.06,3.74,16.47,16.47,0,0,1-.91,3.56,21.1,21.1,0,0,1-3.7,6.21c-.2.23-.39.46-.59.68l-.62.66-.32.32-.31.32c-.21.22-.42.44-.64.64s-.45.4-.69.59-.49.34-.75.49l-.4.22-.43.17a4.61,4.61,0,0,1-.94.21.35.35,0,0,1-.36-.31.47.47,0,0,1,0-.17h0a5.55,5.55,0,0,1,1-1.46l.61-.58c.21-.19.42-.38.63-.55l.33-.27.32-.27c.2-.19.42-.37.61-.57l.58-.61.55-.63a19.31,19.31,0,0,0,3.39-5.7,14.06,14.06,0,0,0,.81-3.17,10,10,0,0,0,0-3.19c-.06-.25-.1-.51-.18-.75s-.08-.24-.12-.36l-.15-.34a4.39,4.39,0,0,0-.79-1.2,3.42,3.42,0,0,0-1.12-.74l-.33-.1-.33-.07a2.29,2.29,0,0,0-.69,0,3.58,3.58,0,0,0-2.45,1.2c-.78.86-1.58,1.73-2.39,2.57q-2.45,2.52-5,4.88c-.87.79-1.74,1.56-2.63,2.33L95.45,61.3a31.91,31.91,0,0,1-2.73,2.19,10.06,10.06,0,0,1-3.16,1.62.3.3,0,0,1-.38-.22.29.29,0,0,1,0-.24Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M110.46,63.48a17.66,17.66,0,0,1,3.66-1.4,8.69,8.69,0,0,1,2.07-.25,5.53,5.53,0,0,1,1.12.14,3.61,3.61,0,0,1,1.14.51,2.77,2.77,0,0,1,.88,1,3,3,0,0,1,.33,1.24,5.15,5.15,0,0,1-.38,2.19,12,12,0,0,1-2.15,3.39,23.68,23.68,0,0,1-2.79,2.7,26.46,26.46,0,0,1-3.09,2.28,22.61,22.61,0,0,1-7,2.9.31.31,0,0,1-.36-.23.3.3,0,0,1,.13-.31c2.09-1.4,4.2-2.62,6.23-3.94,1-.67,2-1.33,3-2.08a18.32,18.32,0,0,0,2.59-2.46,10.41,10.41,0,0,0,1.84-2.88,3.55,3.55,0,0,0,.27-1.44,1.12,1.12,0,0,0-.47-.93,2.4,2.4,0,0,0-1.28-.33,6.67,6.67,0,0,0-1.63.2,15.83,15.83,0,0,0-3.29,1.27h0a.88.88,0,0,1-.78-1.58Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M109.1,74.52a15.71,15.71,0,0,1,2.69-.4,7.8,7.8,0,0,1,1.44,0,3.8,3.8,0,0,1,1.57.53,2.19,2.19,0,0,1,.72.73,2,2,0,0,1,.31,1,3.23,3.23,0,0,1-.44,1.69,8.19,8.19,0,0,1-1.89,2.17,16.91,16.91,0,0,1-2.25,1.54,15.81,15.81,0,0,1-2.4,1.2,11.59,11.59,0,0,1-5.24.79.3.3,0,0,1-.27-.34.32.32,0,0,1,.17-.24h0c.8-.39,1.58-.7,2.35-1l2.29-.93c.76-.31,1.51-.63,2.23-1a12.38,12.38,0,0,0,2-1.34,6.38,6.38,0,0,0,1.48-1.67,3,3,0,0,0,.18-.42,1.15,1.15,0,0,0,0-.33.43.43,0,0,0,0-.19.59.59,0,0,0-.18-.17,1.28,1.28,0,0,0-.37-.16,3.39,3.39,0,0,0-.48-.1,5.87,5.87,0,0,0-1.12,0,14.4,14.4,0,0,0-2.39.36h0a.88.88,0,1,1-.39-1.71Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M99.16,89.52a25,25,0,0,1-10.13-2,.88.88,0,1,1,.72-1.6c7.48,3.33,16,1.64,18.23-.16.38-.31.53-.57.5-.7s-.15-.65-2.31-1.29a.88.88,0,0,1,.49-1.69c2.17.64,3.32,1.5,3.55,2.65a2.43,2.43,0,0,1-1.14,2.4C107.32,88.48,103.52,89.52,99.16,89.52Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M118.65,66.3v0c-.54,2.68-4,6-8.66,8.74a43.9,43.9,0,0,1-5,2.52l-4.37,1.68c-.74,4.28,13.36-1,11.78-3.93a4.66,4.66,0,0,1,2.32.73c.82.66.29,1.63-.91,2.65h0a28.23,28.23,0,0,1-9.6,4.72,26.09,26.09,0,0,1-4,.46c-1.69,0-.59,3.81,8.12,0a1.69,1.69,0,0,0,.27-.11c4.39,3-8.67,7.54-19.1,2.9l-5.15-17.8,5.15-4c2.59-1.94,5.11-3.93,7.55-6l.83-.1a22.22,22.22,0,0,0-4.43,8.87,2.51,2.51,0,0,0,3.8,2.63c7.85-5,13.94-11.79,16.54-22a10.27,10.27,0,0,1,1.34,8,15.48,15.48,0,0,1-1.93,4.81h0a26.65,26.65,0,0,1-4.55,5.56L103,71.08c-1.93,6.83,13.82-3,13.88-8.32A3.17,3.17,0,0,1,118.65,66.3Z", transform: "translate(-8.33)", fill: "#000072" }))),
            React.createElement("g", null,
                React.createElement("path", { d: "M89.1,119.51a17.85,17.85,0,0,1-7.33.91A6.8,6.8,0,0,1,77,117.85l-.18-.23-.15-.22a2.9,2.9,0,0,1-.19-.29c0-.07-.09-.15-.14-.23-.15-.25-.28-.51-.41-.78s-.17-.36-.24-.55-.08-.18-.11-.27-.08-.19-.11-.29-.1-.28-.15-.42-.17-.49-.24-.74l-.09-.3-.16-.58c-.13-.51-.25-1-.37-1.52,0-.1,0-.2-.07-.3a33.34,33.34,0,0,0-1-3.82l-.07-.19-.09-.22a4.68,4.68,0,0,0-.2-.45l-.09-.18c-.1-.19-.2-.36-.31-.53l-.07-.12-.08-.11-.12-.16a3.7,3.7,0,0,0-1.07-.94,26.22,26.22,0,0,1,3.42-1.78,12.54,12.54,0,0,1,3.52,1C86.49,107.43,79.7,119.09,89.1,119.51Z", transform: "translate(-8.33)", fill: "#37cef7" }),
                React.createElement("path", { d: "M89.34,119.52s0,.08,0,.11a11.27,11.27,0,0,1-4.86,6,11,11,0,0,1-4.21,1.4c-6.6.82-14.32-3.59-16.43-9.92a10.68,10.68,0,0,1-.56-3.62,21,21,0,0,1,6.94-8.35h0c.36-.26.74-.51,1.12-.75a3.7,3.7,0,0,1,1.07.94l.12.16.08.11.07.12c.11.17.21.34.31.53l.09.18a4.68,4.68,0,0,1,.2.45l.09.22.07.19a33.34,33.34,0,0,1,1,3.82c0,.1,0,.2.07.3.12.51.24,1,.37,1.52l.16.58.09.3c.07.25.15.5.24.74s.09.28.15.42.07.19.11.29.07.18.11.27.16.37.24.55.26.53.41.78c.05.08.09.16.14.23a2.9,2.9,0,0,0,.19.29l.15.22.18.23a6.8,6.8,0,0,0,4.73,2.57,17.85,17.85,0,0,0,7.33-.91Z", transform: "translate(-8.33)", fill: "#f962bb" }),
                React.createElement("path", { d: "M89.55,119.38c-.08.08-.16.17-.25.25a11.77,11.77,0,0,1-7.75,3.56c-5.78.29-11.44-3.8-13.64-8.89a11.08,11.08,0,0,1-1-4.64l3.24-4.5h0l.69-1a2.46,2.46,0,0,1,.43.21,3.7,3.7,0,0,1,1.07.94l.12.16.08.11.07.12c.11.17.21.34.31.53l.09.18a4.68,4.68,0,0,1,.2.45l.09.22.07.19a33.34,33.34,0,0,1,1,3.82c0,.1,0,.2.07.3.12.51.24,1,.37,1.52l.16.58.09.3c.07.25.15.5.24.74s.09.28.15.42.07.19.11.29.07.18.11.27a5.38,5.38,0,0,0,.24.55c.13.27.26.53.41.78.05.08.09.16.14.23a2.9,2.9,0,0,0,.19.29l.15.22.18.23a6.8,6.8,0,0,0,4.73,2.57,17.85,17.85,0,0,0,7.33-.91Z", transform: "translate(-8.33)", fill: "#ffb531" }),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M89.1,119.51l.45-.13c-.08.08-.16.17-.25.25a11.27,11.27,0,0,1-4.86,6,11,11,0,0,1-4.21,1.4,16.37,16.37,0,0,0,1.32-3.86,11.7,11.7,0,0,0,.22-2.77,7.62,7.62,0,0,0-6.9-7.47,12.21,12.21,0,0,0-7,1.35,18.93,18.93,0,0,0-4.11,2.83,10.68,10.68,0,0,1-.56-3.62,21,21,0,0,1,6.94-8.35h0l.69-1a2.46,2.46,0,0,1,.43.21,26.22,26.22,0,0,1,3.42-1.78,12.54,12.54,0,0,1,3.52,1C86.49,107.43,79.7,119.09,89.1,119.51Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("path", { d: "M89.34,120.37h0c-5.87-.14-6.47-4.27-7-7.92-.6-4.13-1.16-8-7.72-9a.85.85,0,0,1-.72-1,.84.84,0,0,1,1-.72c7.82,1.12,8.57,6.28,9.17,10.42.53,3.69.92,6.35,5.35,6.46a.85.85,0,0,1,0,1.7Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M80.71,124.07a13.13,13.13,0,0,1-5-1c-5.6-2.34-9.59-8-9.47-13.37a.74.74,0,0,1,.74-.73h0a.75.75,0,0,1,.73.76c-.1,4.74,3.58,9.88,8.55,12a10.62,10.62,0,0,0,9.75-.55c-3.32.63-5.87.38-7.73-.75-3-1.8-3.61-5.43-4.18-8.63-.51-2.86-1-5.33-2.75-6a.74.74,0,1,1,.56-1.38c2.56,1,3.09,4,3.66,7.17s1.11,6.17,3.49,7.61c2.06,1.26,5.3,1.17,9.9-.26A.75.75,0,0,1,89.7,120,12.4,12.4,0,0,1,80.71,124.07Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M78.62,128a15.41,15.41,0,0,1-2.91-.28C69,126.46,62.24,120.8,62.39,113.5a.85.85,0,1,1,1.7,0c-.13,6.4,6,11.39,11.94,12.51s10.53-1.44,12.51-6.81a.85.85,0,1,1,1.6.59,12.11,12.11,0,0,1-6,7A12.59,12.59,0,0,1,78.62,128Z", transform: "translate(-8.33)", fill: "#390075" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M93.73,83.07a29.71,29.71,0,0,1-27.89,29.67c-.61,0-1.22.06-1.84.06A29.73,29.73,0,1,1,93.73,83.07Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("path", { d: "M80.16,108a29.6,29.6,0,0,1-14.32,4.71A9.38,9.38,0,0,1,80.16,108Z", transform: "translate(-8.33)", fill: "#fb64c0" }),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M88.15,83.63a24.16,24.16,0,0,0-44-13.74h0a24.17,24.17,0,0,0,11.37,36.35,7.78,7.78,0,0,1-7.58.07,8.6,8.6,0,0,0,9.37,1.2,2.83,2.83,0,0,1,1.81-.23,24.16,24.16,0,0,0,9.78,0,2.83,2.83,0,0,1,1.81.23,8.6,8.6,0,0,0,9.37-1.2,7.78,7.78,0,0,1-7.58-.07A24.15,24.15,0,0,0,88.15,83.63Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M80.16,105.92a29.6,29.6,0,0,1-14.32,4.71c-.61,0-1.22.06-1.84.06A29.74,29.74,0,0,1,34.29,82c0,.35,0,.7,0,1A29.73,29.73,0,0,0,64,112.8c.62,0,1.23,0,1.84-.06A29.71,29.71,0,0,0,93.73,83.07c0-.35,0-.7,0-1A29.69,29.69,0,0,1,80.16,105.92Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("path", { d: "M64,113.64A30.57,30.57,0,1,1,94.57,83.07,30.6,30.6,0,0,1,64,113.64Zm0-59.45A28.89,28.89,0,1,0,92.88,83.07,28.91,28.91,0,0,0,64,54.19Z", transform: "translate(-8.33)", fill: "#390075" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M96.15,42.36c-.25,14.83-15,23.51-32.94,23.14S30.83,55.82,31.08,41s15.1-29.56,33.06-29.19S96.4,27.53,96.15,42.36Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("g", { opacity: "0.2" },
                    React.createElement("path", { d: "M63.5,65.45c-18-.38-32.37-9.68-32.12-24.49v-.27C34,52.61,47.13,59.89,63,60.24c17.94.37,32.65-8.28,32.94-23.07a23.16,23.16,0,0,1,.48,5.17C96.19,57.12,81.48,65.82,63.5,65.45Z", transform: "translate(-8.33)", fill: "#390075" })),
                React.createElement("path", { d: "M52.63,65.12a36.31,36.31,0,0,1-12.82-5.66C33.4,54.8,30.06,48.42,30.2,41S34,25.81,40.4,20a33.78,33.78,0,0,1,47.18,1C93.72,27,97.17,34.83,97,42.36S93.35,56.05,86.78,60.43c-6.09,4.07-14.46,6.19-23.6,6A49.12,49.12,0,0,1,52.63,65.12ZM70.82,13.64a31.94,31.94,0,0,0-6.7-.87C46,12.39,32.2,27.38,32,41c-.19,10.8,8,19.15,20.94,22.24a49,49,0,0,0,10.32,1.27c18.64.4,31.82-8.72,32.05-22.18.12-7-3.11-14.24-8.89-20A32.77,32.77,0,0,0,70.82,13.64Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M52.63,65.12a36.31,36.31,0,0,1-12.82-5.66C33.4,54.8,30.06,48.42,30.2,41S34,25.81,40.4,20a33.78,33.78,0,0,1,47.18,1C93.72,27,97.17,34.83,97,42.36S93.35,56.05,86.78,60.43c-6.09,4.07-14.46,6.19-23.6,6A49.12,49.12,0,0,1,52.63,65.12ZM70.82,13.64a31.94,31.94,0,0,0-6.7-.87C46,12.39,32.2,27.38,32,41c-.19,10.8,8,19.15,20.94,22.24a49,49,0,0,0,10.32,1.27c18.64.4,31.82-8.72,32.05-22.18.12-7-3.11-14.24-8.89-20A32.77,32.77,0,0,0,70.82,13.64Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M66.28,22.64a6.91,6.91,0,0,1-1.8.1c-3.43-.2-4.66-2.27-4.77-3.71A14.9,14.9,0,0,0,66.28,22.64Z", transform: "translate(-8.33)", fill: "#fe6dcb" }),
                React.createElement("path", { d: "M66,23.56a16,16,0,0,1-6.89-3.79,1,1,0,0,1-.3-.6c0-.07,0-.17,0-.24v0a27.73,27.73,0,0,1,.34-4.29.93.93,0,0,1,.61-.77.83.83,0,0,1,.89.27,14.22,14.22,0,0,0,9,4.44,1,1,0,0,1,.64.35.93.93,0,0,1,.18.75,4.72,4.72,0,0,1-3.61,3.84c-.16.05-.32.07-.46.1a.86.86,0,0,1-.32,0A.06.06,0,0,1,66,23.56Zm.25-.92Zm-5.73-4.06a14.38,14.38,0,0,0,5.73,3.09l.13,0h0a3.17,3.17,0,0,0,1.91-1.32,15.79,15.79,0,0,1-7.68-3.64C60.59,17.4,60.55,18.05,60.55,18.58Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("g", null,
                    React.createElement("path", { d: "M67.75,22.12a4.51,4.51,0,0,1-1.11.45,2.29,2.29,0,0,1-.36.07A15.66,15.66,0,0,1,59.68,19a.65.65,0,0,0,0-.2A25.22,25.22,0,0,1,60,14.74a15.34,15.34,0,0,0,7.84,4.48,12.29,12.29,0,0,0,1.75.25A3.62,3.62,0,0,1,67.75,22.12Z", transform: "translate(-8.33)", fill: "#33aef1" }),
                    React.createElement("path", { d: "M66.18,22.76a15.43,15.43,0,0,1-6.57-3.64l0,0v-.05a.5.5,0,0,0,0-.17v-.05a24.84,24.84,0,0,1,.34-4.12l0-.27.16.2a15.46,15.46,0,0,0,7.78,4.46,15.51,15.51,0,0,0,1.72.25h.14l0,.15a3.9,3.9,0,0,1-1.91,2.72,5.05,5.05,0,0,1-1.14.47,3.61,3.61,0,0,1-.38.1h0S66.21,22.76,66.18,22.76ZM59.8,19a15.54,15.54,0,0,0,6.43,3.54h0l.34-.08A3.91,3.91,0,0,0,67.69,22h0a3.72,3.72,0,0,0,1.77-2.37,12.07,12.07,0,0,1-1.64-.25A15.68,15.68,0,0,1,60.07,15a23.53,23.53,0,0,0-.3,3.81v0S59.8,19,59.8,19Z", transform: "translate(-8.33)", fill: "#390075" })),
                React.createElement("g", { opacity: "0.6" },
                    React.createElement("path", { d: "M67.75,22.12c.07-1,.09-1.95.12-2.87a13.65,13.65,0,0,0,1.75.25A3.76,3.76,0,0,1,67.75,22.12Z", transform: "translate(-8.33)", fill: "#fff" })),
                React.createElement("path", { d: "M69.59,19.5a13.91,13.91,0,0,1-1.75-.25A15.32,15.32,0,0,1,60,14.76c.23-1.64.59-3.46,1-5.23,0,0,1.71,3.06,6.64,5.28a16.66,16.66,0,0,0,2,.77,24.31,24.31,0,0,1-.07,3.84S69.62,19.47,69.59,19.5Z", transform: "translate(-8.33)", fill: "#fdd800" }),
                React.createElement("g", { opacity: "0.6" },
                    React.createElement("path", { d: "M69.59,19.5a13.91,13.91,0,0,1-1.75-.25,42.17,42.17,0,0,0-.16-4.44,16.2,16.2,0,0,0,2,.77,27,27,0,0,1-.07,3.84A.09.09,0,0,1,69.59,19.5Z", transform: "translate(-8.33)", fill: "#fff" })),
                React.createElement("g", null,
                    React.createElement("path", { d: "M69.69,15.58a20.13,20.13,0,0,1-2-.77c-4.93-2.22-6.63-5.28-6.63-5.28a34.69,34.69,0,0,1,1.68-5.26A13.67,13.67,0,0,0,66.8,8.88a9.12,9.12,0,0,0,2.39,1.22C69.44,12,69.62,13.91,69.69,15.58Z", transform: "translate(-8.33)", fill: "#b177ea" }),
                    React.createElement("path", { d: "M69.8,15.76l-.16,0c-.68-.23-1.36-.5-2-.77C62.73,12.72,61,9.65,60.93,9.6l0,0,0-.05a35.89,35.89,0,0,1,1.69-5.28L62.71,4l.11.23a13.93,13.93,0,0,0,4,4.56A9.36,9.36,0,0,0,69.21,10l.07,0,0,.07a53.28,53.28,0,0,1,.52,5.48ZM61.16,9.5c.23.4,2.05,3.14,6.57,5.19.59.27,1.21.5,1.82.72-.07-1.65-.25-3.44-.5-5.19A9.19,9.19,0,0,1,66.71,9a14.4,14.4,0,0,1-4-4.43A38,38,0,0,0,61.16,9.5Z", transform: "translate(-8.33)", fill: "#390075" })),
                React.createElement("g", { opacity: "0.6" },
                    React.createElement("path", { d: "M69.69,15.58a20.13,20.13,0,0,1-2-.77,45.59,45.59,0,0,0-.9-5.91,8.91,8.91,0,0,0,2.38,1.22A52.87,52.87,0,0,1,69.69,15.58Z", transform: "translate(-8.33)", fill: "#fff" })),
                React.createElement("path", { d: "M69.19,10A9.79,9.79,0,0,1,66.8,8.75a13.67,13.67,0,0,1-4.07-4.61,8.54,8.54,0,0,1,1.66-2.77A1.56,1.56,0,0,1,65.55.83C67.28.93,68.53,5.34,69.19,10Z", transform: "translate(-8.33)", fill: "#fe6dcb" }),
                React.createElement("g", { opacity: "0.6" },
                    React.createElement("path", { d: "M69.39,10.17A9.6,9.6,0,0,1,67,9a36.82,36.82,0,0,0-2.41-7.38A1.57,1.57,0,0,1,65.75,1C67.48,1.1,68.73,5.51,69.39,10.17Z", transform: "translate(-8.33)", fill: "#fff" })),
                React.createElement("g", null,
                    React.createElement("path", { d: "M69,10.87a.08.08,0,0,1-.07,0c-4.48-1.55-6.78-6-6.87-6.21a.85.85,0,0,1,0-.7C63.18,1.32,64.32.1,65.55.18,68,.3,69.23,5.59,69.87,10a.84.84,0,0,1-.23.72A.7.7,0,0,1,69,10.87ZM63.52,4.24A12.75,12.75,0,0,0,68.25,8.9c-.88-5.16-2.11-7.1-2.77-7.15C65.09,1.7,64.37,2.37,63.52,4.24Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("path", { d: "M69.53,16.36s0,0-.07,0c-6.66-2.24-9-6.23-9-6.38a.89.89,0,0,1-.09-.6A36.8,36.8,0,0,1,62.05,4a.68.68,0,0,1,.61-.45.71.71,0,0,1,.64.4c0,.05,2.11,4.11,6,5.48a.74.74,0,0,1,.48.63,51.64,51.64,0,0,1,.52,5.55.85.85,0,0,1-.27.65A.64.64,0,0,1,69.53,16.36Zm-7.71-7a15.65,15.65,0,0,0,7.09,5.11c-.09-1.22-.2-2.52-.38-3.79a13.11,13.11,0,0,1-5.69-4.79C62.5,6.93,62.14,8.11,61.82,9.38Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("path", { d: "M67.32,19.92a15.83,15.83,0,0,1-7.82-4.63.75.75,0,0,1-.18-.65c.25-1.72.61-3.54,1-5.31a.75.75,0,0,1,.6-.58.67.67,0,0,1,.7.38s2.14,3.66,8.25,5.71a.75.75,0,0,1,.5.69,25.91,25.91,0,0,1-.07,4c0,.05,0,.1,0,.15a.72.72,0,0,1-.75.6A10.8,10.8,0,0,1,67.32,19.92Zm2.27-.42Zm-8.82-5A14.68,14.68,0,0,0,69,18.65c0-.7,0-1.54,0-2.49a18.12,18.12,0,0,1-7.62-4.94C61.14,12.32,60.93,13.42,60.77,14.49Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("path", { d: "M66.05,23.39a16,16,0,0,1-6.82-3.77.75.75,0,0,1-.25-.5c0-.07,0-.14,0-.22v0a25.9,25.9,0,0,1,.34-4.24.75.75,0,0,1,.5-.63.68.68,0,0,1,.72.23,14.44,14.44,0,0,0,9.12,4.49.65.65,0,0,1,.5.3.83.83,0,0,1,.14.59,4.58,4.58,0,0,1-3.48,3.69,2.89,2.89,0,0,1-.43.1.36.36,0,0,1-.25,0Zm.23-.75Zm-5.89-4a14.74,14.74,0,0,0,5.91,3.19,1.21,1.21,0,0,0,.18-.05h0a3.3,3.3,0,0,0,2.16-1.62,15.89,15.89,0,0,1-8.12-3.86C60.43,17.23,60.39,18,60.39,18.65Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("path", { d: "M63,23.34a4.84,4.84,0,0,1-4-4.22.8.8,0,0,1,.38-.77.68.68,0,0,1,.8.1,15,15,0,0,0,6.21,3.44.06.06,0,0,1,.06,0,.75.75,0,0,1,.57.77.74.74,0,0,1-.59.75,7.49,7.49,0,0,1-2,.12A11.38,11.38,0,0,1,63,23.34Z", transform: "translate(-8.33)", fill: "#390075" })),
                React.createElement("path", { d: "M63,23.51a5.1,5.1,0,0,1-4.18-4.36c0-.08,0-.15,0-.22v0a16.76,16.76,0,0,1,.11-2.34q.08-.72.18-1.5l0-.1c0-.1,0-.22,0-.32.25-1.72.61-3.57,1.05-5.34a38.23,38.23,0,0,1,1.72-5.41c1.14-2.69,2.32-4,3.64-3.89C68.09.15,69.39,5.51,70,10c.27,1.89.45,3.81.52,5.55a27.51,27.51,0,0,1-.07,4c0,.05,0,.1,0,.18h0a.53.53,0,0,1,0,.2.56.56,0,0,0,0,.1.69.69,0,0,1,0,.17.56.56,0,0,1,0,.1.42.42,0,0,0,0,.15s0,.08,0,.1-.07.18-.09.25,0,.05,0,.07-.07.13-.09.2l0,.08,0,0c0,.05-.07.13-.09.18l-.05.1a1.74,1.74,0,0,1-.13.2s0,0,0,.05a1.74,1.74,0,0,1-.18.22.12.12,0,0,0,0,.05,1.23,1.23,0,0,1-.19.2l0,.05h0c-.07.08-.14.13-.21.2l0,.05a4.65,4.65,0,0,1-.57.42.07.07,0,0,1,0,0l0,0a.35.35,0,0,0-.11.08s0,0-.07.05l-.12.05-.25.12a.54.54,0,0,1-.11.05,1.45,1.45,0,0,1-.25.1h0a.12.12,0,0,1-.09,0,2.64,2.64,0,0,0-.3.1l-.09,0a2.52,2.52,0,0,1-.46.1,7,7,0,0,1-2,.13A10.68,10.68,0,0,1,63,23.51ZM65.53,1.92h0c-.3,0-1,.55-2,2.77A35.43,35.43,0,0,0,61.91,9.8a49,49,0,0,0-1,5.14c0,.1,0,.2,0,.32l0,.1c-.07.5-.11,1-.16,1.42a18.79,18.79,0,0,0-.11,2.07h0V19c.11,1.22,1.2,2.69,3.95,2.84a6.34,6.34,0,0,0,1.6-.1l.31-.07.07,0,.23-.07.09,0,.18-.07.07,0a.35.35,0,0,0,.18-.1l.12-.05s0,0,.06,0l0,0,0,0a2,2,0,0,0,.37-.27l0,0a.42.42,0,0,0,.11-.13h0l0,0,.11-.13,0,0a.79.79,0,0,0,.12-.15l0,0a1,1,0,0,0,.07-.12l0-.05c0-.05,0-.08.07-.13l0-.05s0-.07,0-.1a.08.08,0,0,0,0-.05l.07-.15,0,0a.56.56,0,0,0,0-.1l0-.05s0-.05,0-.07l0-.05s0-.08,0-.1v-.08a29.18,29.18,0,0,0,.07-3.66c-.07-1.7-.25-3.54-.5-5.36C67.46,4.42,66.18,2.07,65.53,1.92Zm3,19.55Zm.18-2.17Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M76.64,19.87s3-12.34,7.6-12S91.35,26,90.85,30.14C90.85,30.14,83.74,30.14,76.64,19.87Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("path", { d: "M76.35,19.8a5.24,5.24,0,0,1,.09-2.62,14.42,14.42,0,0,1,.84-2.39c.34-.78.66-1.55,1-2.32a22.35,22.35,0,0,1,1.23-2.25,11.41,11.41,0,0,1,1.66-2,4.71,4.71,0,0,1,2.52-1.25h.55l.2,0a1.48,1.48,0,0,1,.39.1,1.84,1.84,0,0,1,.36.15,4.57,4.57,0,0,1,1.21.87,9.53,9.53,0,0,1,1.52,2.24,27.73,27.73,0,0,1,1.77,4.82c.46,1.62.82,3.29,1.12,4.93s.54,3.34.7,5c0,.43.09.85.12,1.27s.09.85.13,1.28a4.65,4.65,0,0,1,0,1.29,2.44,2.44,0,0,1-.62,1.27.36.36,0,0,1-.52,0s0,0,0-.05l0,0a3.54,3.54,0,0,1-.5-1.2,7,7,0,0,1-.12-1.19c0-.4,0-.83,0-1.23s-.07-.82-.11-1.22q-.24-2.43-.69-4.86c-.29-1.59-.63-3.19-1.07-4.76a25.18,25.18,0,0,0-1.63-4.44,7.69,7.69,0,0,0-1.18-1.77,2.5,2.5,0,0,0-.69-.5l-.16-.07-.15,0h-.39a2.77,2.77,0,0,0-1.55.8,8.76,8.76,0,0,0-1.36,1.67,17.75,17.75,0,0,0-1.11,2,17.43,17.43,0,0,0-.91,2.19c-.25.78-.48,1.53-.8,2.27A6.53,6.53,0,0,1,76.87,20h0a.31.31,0,0,1-.48,0A.54.54,0,0,0,76.35,19.8Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("g", null,
                    React.createElement("g", null,
                        React.createElement("path", { d: "M80.71,19.07s1.05-6.13,3-5.85S87.1,22.44,87,24.53C87,24.53,83.92,24.39,80.71,19.07Z", transform: "translate(-8.33)", fill: "#fe6dcb" }),
                        React.createElement("path", { d: "M86.55,24.58c-.93-.22-3.36-1.19-5.93-5.46l0-.05v0c0-.25,1.09-6.24,3.16-6s3.45,9.45,3.32,11.46v.13H87A1.29,1.29,0,0,1,86.55,24.58Zm-5.7-5.53c2.77,4.56,5.43,5.24,6,5.34.09-2.37-1.3-10.63-3.07-11h-.07C82,13.12,80.94,18.45,80.85,19.05Z", transform: "translate(-8.33)", fill: "#390075" })),
                    React.createElement("path", { d: "M86.44,25.41c-1.07-.25-3.75-1.32-6.46-5.81a1,1,0,0,1-.13-.7c.27-1.64,1.41-7,4-6.63.82.1,2.05.82,3.16,5.71a30.65,30.65,0,0,1,.84,6.65.91.91,0,0,1-.91.9C86.9,25.48,86.71,25.48,86.44,25.41Zm-4.8-6.53c1.78,2.79,3.41,3.93,4.41,4.38a36.42,36.42,0,0,0-.7-4.63c-.75-3.39-1.52-4.39-1.73-4.47C83.14,14.09,82.17,16.23,81.64,18.88Z", transform: "translate(-8.33)", fill: "#390075" })),
                React.createElement("path", { d: "M51.84,18.43S50.09,5.81,45.45,5.61,36.63,22.76,36.72,27C36.7,27,43.77,27.83,51.84,18.43Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("path", { d: "M51.54,18.48a6.1,6.1,0,0,1-1-2.27c-.23-.77-.39-1.57-.57-2.35a19.49,19.49,0,0,0-.68-2.29,20.84,20.84,0,0,0-.91-2.14,8.27,8.27,0,0,0-1.18-1.82,2.92,2.92,0,0,0-1.48-1l-.21,0-.09,0h-.09l-.16,0s-.11,0-.18,0a2.31,2.31,0,0,0-.73.42A7.92,7.92,0,0,0,42.88,8.7a23.18,23.18,0,0,0-2,4.22c-.57,1.49-1.07,3-1.53,4.61s-.84,3.14-1.16,4.74c-.09.39-.16.79-.22,1.19s-.1.8-.14,1.2a6.38,6.38,0,0,1-.23,1.17A3.23,3.23,0,0,1,37,27l0,0a.35.35,0,0,1-.53,0l0-.05a2.5,2.5,0,0,1-.5-1.35,4.6,4.6,0,0,1,.07-1.29c.06-.43.18-.83.25-1.25s.15-.82.22-1.25c.34-1.64.73-3.29,1.18-4.91s1-3.22,1.6-4.79A26.1,26.1,0,0,1,41.4,7.56a8.77,8.77,0,0,1,1.73-2,4.36,4.36,0,0,1,1.28-.75,1.51,1.51,0,0,1,.38-.09,1.92,1.92,0,0,1,.41,0h.21l.18,0,.36.05a4.65,4.65,0,0,1,2.39,1.52,10.19,10.19,0,0,1,1.45,2.22,18.07,18.07,0,0,1,1,2.37c.3.8.53,1.62.8,2.42a14.46,14.46,0,0,1,.59,2.46A5.48,5.48,0,0,1,52,18.3a.34.34,0,0,1-.43.23s0,0-.05-.05Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("g", null,
                    React.createElement("g", null,
                        React.createElement("path", { d: "M48,17.33S47.36,11,45.2,11s-4.36,8.8-4.39,10.94C40.81,21.89,44.11,22.22,48,17.33Z", transform: "translate(-8.33)", fill: "#fe6dcb" }),
                        React.createElement("path", { d: "M40.7,22v-.13c0-1.92,1.66-8.57,3.46-10.49a1.51,1.51,0,0,1,1.06-.58c2.25,0,2.91,6.24,2.94,6.48v.05l0,0C44.2,22.29,40.93,22,40.79,22Zm4.73-10.9a.82.82,0,0,0-.23,0,1.34,1.34,0,0,0-.89.5C42.61,13.44,41,19.75,41,21.79c.61,0,3.57-.25,7-4.49C47.84,16.68,47.2,11.55,45.43,11.12Z", transform: "translate(-8.33)", fill: "#390075" })),
                    React.createElement("path", { d: "M40.63,22.84a1,1,0,0,1-.68-.95c0-2,1.66-8.92,3.68-11.09A2.18,2.18,0,0,1,45.22,10c2.8,0,3.57,6,3.69,7.23a1.06,1.06,0,0,1-.21.74c-4.16,5.19-7.8,4.91-7.93,4.89S40.68,22.84,40.63,22.84Zm4.64-10.92H45.2c-.18,0-1.07.7-2.18,4a34,34,0,0,0-1.21,4.84A10.74,10.74,0,0,0,47.11,17C46.79,14.61,46,12.09,45.27,11.92Z", transform: "translate(-8.33)", fill: "#390075" })),
                React.createElement("path", { d: "M40,36.68A31.81,31.81,0,0,0,36.63,35a28.13,28.13,0,0,0-3.41-1.3,34.86,34.86,0,0,0-3.52-.89c-.59-.15-1.21-.23-1.8-.33-.3-.07-.61-.07-.91-.12s-.61-.08-.93-.15A8.51,8.51,0,0,1,27,32c.32,0,.61-.1.93-.12a14.9,14.9,0,0,1,1.89,0,13.59,13.59,0,0,1,3.73.7A14.13,14.13,0,0,1,37,34.18,11.44,11.44,0,0,1,40,36.68Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M39.47,40.09a31.76,31.76,0,0,0-3.64-.67c-1.2-.15-2.41-.25-3.61-.28s-2.41,0-3.62.15c-.61.05-1.2.13-1.81.2-.32,0-.62.1-.91.15s-.62.1-.94.13l.85-.45c.29-.15.56-.28.86-.4a14.23,14.23,0,0,1,1.82-.57,14.5,14.5,0,0,1,3.77-.43,13.55,13.55,0,0,1,3.75.55A12.43,12.43,0,0,1,39.47,40.09Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M39.63,44.53a30,30,0,0,0-3.68.22,28.67,28.67,0,0,0-3.57.63,27.86,27.86,0,0,0-3.5,1,18,18,0,0,0-1.73.65c-.3.1-.57.25-.86.35s-.6.25-.89.34c.23-.22.48-.42.73-.64a8.84,8.84,0,0,1,.77-.6,15.55,15.55,0,0,1,1.66-1,15.32,15.32,0,0,1,3.59-1.32,13.68,13.68,0,0,1,3.78-.37A11.63,11.63,0,0,1,39.63,44.53Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M89.21,37.47a11.57,11.57,0,0,1,3.19-2.22A16.06,16.06,0,0,1,96,34a14.63,14.63,0,0,1,3.78-.3,12,12,0,0,1,1.88.22,8.06,8.06,0,0,1,.91.23c.3.1.62.17.91.27-.32,0-.64,0-.93,0s-.61,0-.93,0c-.62.05-1.23.05-1.82.12a33,33,0,0,0-3.59.53,24.52,24.52,0,0,0-3.53.94C91.53,36.53,90.37,37,89.21,37.47Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M89.42,40.94A10.68,10.68,0,0,1,93,39.72a14.45,14.45,0,0,1,3.77-.15,15.2,15.2,0,0,1,5.46,1.54c.3.13.57.33.84.48l.8.52-.91-.22a8.65,8.65,0,0,0-.91-.23c-.59-.15-1.18-.3-1.8-.4a33,33,0,0,0-3.59-.52,24.2,24.2,0,0,0-3.61-.1A35.23,35.23,0,0,0,89.42,40.94Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("path", { d: "M88.87,45.33A11.32,11.32,0,0,1,92.62,45a14.59,14.59,0,0,1,3.73.78,15,15,0,0,1,3.46,1.69,14.84,14.84,0,0,1,1.57,1.17,9,9,0,0,1,.7.68c.23.22.46.47.68.72l-.84-.45c-.27-.15-.54-.32-.82-.45-.56-.27-1.09-.57-1.66-.82A30.28,30.28,0,0,0,96.06,47a32.5,32.5,0,0,0-3.5-1C91.31,45.68,90.1,45.48,88.87,45.33Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("g", null,
                    React.createElement("g", { opacity: "0.2" },
                        React.createElement("path", { d: "M73.55,47.67c-1.48,2-3,2.64-4.46,2.57-2.81-.1-5.09-2.87-5.09-2.87-1.91,2.07-3.61,2.87-5,3A5.47,5.47,0,0,1,54.41,48c5.64.93,8.27-2.34,8.27-2.34l2.55,0C67.84,49.76,73.39,47.74,73.55,47.67Z", transform: "translate(-8.33)", fill: "#390075" })),
                    React.createElement("path", { d: "M69.12,50.26a18,18,0,0,1-1.78,4.27C66.48,56,65.39,57,64.21,57s-2.32-1-3.25-2.41A16.37,16.37,0,0,1,59,50.36c1.41-.1,3.12-.89,5-3C64,47.4,66.3,50.14,69.12,50.26Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("g", null,
                        React.createElement("path", { d: "M67.32,54.5C66.46,55.92,65.37,57,64.18,57s-2.31-1-3.25-2.42a3.34,3.34,0,0,1,6.39-.1Z", transform: "translate(-8.33)", fill: "#fb64c0" }),
                        React.createElement("path", { d: "M63.62,57.07a5.19,5.19,0,0,1-2.78-2.39l0,0,0-.05a3.59,3.59,0,0,1,3.25-2.5,3.53,3.53,0,0,1,3.34,2.37l0,0,0,0c-1,1.67-2.13,2.54-3.22,2.57A1.63,1.63,0,0,1,63.62,57.07ZM61.05,54.6c.72,1.07,1.84,2.34,3.13,2.32s2.35-1.32,3-2.42a3.25,3.25,0,0,0-6.16.1Z", transform: "translate(-8.33)", fill: "#390075" })),
                    React.createElement("g", null,
                        React.createElement("path", { d: "M61.18,43c.57-.85,4.71-1.07,5.44-.1S65.34,46.35,64,46.37,60.57,43.93,61.18,43Z", transform: "translate(-8.33)", fill: "#390075" }),
                        React.createElement("path", { d: "M63.43,47.25a5,5,0,0,1-2.91-2.6,2.11,2.11,0,0,1,0-2.19h0c.61-.9,2.39-1.1,3.39-1.12,1.2,0,2.75.1,3.41,1a2.06,2.06,0,0,1,.09,2.19c-.57,1.33-2.07,2.77-3.41,2.8A5.35,5.35,0,0,1,63.43,47.25ZM62,43.53a3.3,3.3,0,0,0,.63,1,2.32,2.32,0,0,0,1.34.85,2.48,2.48,0,0,0,1.44-1,2.07,2.07,0,0,0,.52-1A7,7,0,0,0,62,43.53Zm4,0Z", transform: "translate(-8.33)", fill: "#390075" }),
                        React.createElement("g", null,
                            React.createElement("ellipse", { cx: "63.93", cy: "42.91", rx: "2.25", ry: "0.65", transform: "translate(-9.2 1.34) rotate(-1.19)", fill: "#fff" }),
                            React.createElement("path", { d: "M62.43,43.56c-.5-.13-.84-.33-.84-.6s.25-.45.73-.6a6.14,6.14,0,0,1,1.61-.22,5.23,5.23,0,0,1,1.62.17c.5.12.75.32.75.57h0c0,.5-1.18.8-2.34.83A7.15,7.15,0,0,1,62.43,43.56Zm3-1.05a5.58,5.58,0,0,0-1.48-.13,5.46,5.46,0,0,0-1.56.23c-.46.15-.57.3-.57.35s.75.52,2.16.5,2.13-.4,2.13-.58-.11-.2-.59-.32C65.48,42.53,65.43,42.53,65.41,42.51Z", transform: "translate(-8.33)", fill: "#390075" }))),
                    React.createElement("path", { d: "M57.48,51.11a7,7,0,0,1-3.62-2.47l0,0a5.92,5.92,0,0,0-.37-.5.9.9,0,0,1,.23-1.19.73.73,0,0,1,1.09.25h0a3.05,3.05,0,0,0,.21.3s0,0,0,0a4.77,4.77,0,0,0,3.89,2c1.43-.1,3-1,4.52-2.72a.73.73,0,0,1,.57-.25.81.81,0,0,1,.57.27s2.09,2.5,4.52,2.57a4.55,4.55,0,0,0,3.8-2.24l0,0,0,0,.28-.4a.74.74,0,0,1,1.11-.2.93.93,0,0,1,.18,1.22,3.52,3.52,0,0,1-.36.5l-.05.05c-1.45,2-3.16,2.94-5.07,2.87a8.34,8.34,0,0,1-5.07-2.52,8.19,8.19,0,0,1-5,2.64A7.41,7.41,0,0,1,57.48,51.11Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("path", { d: "M63.48,57.82a5.77,5.77,0,0,1-3.18-2.7,17.39,17.39,0,0,1-2-4.48.94.94,0,0,1,.09-.75.72.72,0,0,1,.62-.37c1.43-.1,2.95-1,4.52-2.72a.73.73,0,0,1,.57-.25.81.81,0,0,1,.57.27s2.09,2.5,4.52,2.57a.72.72,0,0,1,.61.37,1,1,0,0,1,.12.75A17.63,17.63,0,0,1,68,55c-1.14,1.87-2.45,2.87-3.8,2.89A3.39,3.39,0,0,1,63.48,57.82Zm-3.41-6.76a15.65,15.65,0,0,0,1.5,3.07c.89,1.34,1.8,2.07,2.59,2s1.66-.77,2.5-2.14a16.17,16.17,0,0,0,1.39-3h0a9.27,9.27,0,0,1-4-2.37A9.4,9.4,0,0,1,60.07,51.06Z", transform: "translate(-8.33)", fill: "#390075" })),
                React.createElement("path", { d: "M79.51,34.06a15.33,15.33,0,0,0-1.89.85A10.28,10.28,0,0,0,75.91,36c-.27.2-.5.45-.75.65l-.34.37a.59.59,0,0,1-.18.17l-.16.2a10.59,10.59,0,0,0-1.11,1.7L72.25,37.9l.14-.08s.07,0,.11,0a2.29,2.29,0,0,0,.23-.1l.46-.15a5.26,5.26,0,0,1,.91-.22,6.3,6.3,0,0,1,1.84,0,6.1,6.1,0,0,1,1.77.47,5.88,5.88,0,0,1,1.55,1,.3.3,0,0,1,.06.42.26.26,0,0,1-.29.12h0c-.28-.07-.53-.17-.78-.25a4.25,4.25,0,0,0-.77-.17,6.61,6.61,0,0,0-3,.15,5.41,5.41,0,0,0-.71.25l-.34.15-.16.07s0,0-.07.05l0,0,0,0a.8.8,0,0,1-1.12-.4,1,1,0,0,1,0-.84,8.84,8.84,0,0,1,1.34-2.12,7.23,7.23,0,0,1,.87-.88,11.05,11.05,0,0,1,1-.72,8.15,8.15,0,0,1,2.14-.95,5.91,5.91,0,0,1,2.25-.2.31.31,0,0,1,.25.35.33.33,0,0,1-.18.28Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("g", null,
                    React.createElement("g", null,
                        React.createElement("ellipse", { cx: "52.21", cy: "36.98", rx: "5.51", ry: "3.55", transform: "translate(4.4 87.32) rotate(-87.2)", fill: "#390075" }),
                        React.createElement("path", { d: "M51.5,42.53c-1.8-.42-3.09-2.91-2.91-5.8.18-3.1,1.95-5.51,3.95-5.36A3.17,3.17,0,0,1,55,33.21a7.39,7.39,0,0,1,.82,4h0c-.18,3.1-2,5.51-4,5.36A1.52,1.52,0,0,1,51.5,42.53Zm1.39-10.89a1.64,1.64,0,0,0-.37-.05c-1.89-.12-3.57,2.19-3.75,5.16s1.23,5.49,3.14,5.63,3.57-2.19,3.75-5.16h0a7.13,7.13,0,0,0-.8-3.88A3.17,3.17,0,0,0,52.89,31.64Z", transform: "translate(-8.33)", fill: "#390075" })),
                    React.createElement("g", null,
                        React.createElement("ellipse", { cx: "53.18", cy: "35.76", rx: "1.84", ry: "1.07", transform: "translate(6.41 87.04) rotate(-87.07)", fill: "#fff" }),
                        React.createElement("path", { d: "M53,37.7c-.59-.15-1-1-.93-2a2.69,2.69,0,0,1,.41-1.35,1,1,0,0,1,.86-.52,1,1,0,0,1,.8.65,3,3,0,0,1,.25,1.39c-.07,1.08-.64,1.92-1.27,1.87ZM53.36,34a.15.15,0,0,1-.09,0,.81.81,0,0,0-.7.45,2.51,2.51,0,0,0-.37,1.22c0,1,.34,1.77.87,1.79s1-.72,1.07-1.67h0a2.58,2.58,0,0,0-.23-1.27A.86.86,0,0,0,53.36,34Z", transform: "translate(-8.33)", fill: "#390075" })))),
            React.createElement("g", null,
                React.createElement("circle", { cx: "55.73", cy: "83.65", r: "23.13", fill: "#f3ba2f" }),
                React.createElement("path", { d: "M58.44,81.34l5.61-5.61,5.62,5.61,3.27-3.26-8.89-8.89-8.88,8.88ZM49.6,83.65l3.27-3.27,3.26,3.27-3.26,3.26ZM58.44,86l5.61,5.62L69.67,86l3.27,3.26L64.05,98.1l-8.88-8.88h0ZM72,83.65l3.27-3.27,3.27,3.27-3.27,3.26Zm-4.6,0h0L64.05,87l-3.31-3.31h0l.58-.58.28-.28,2.45-2.45,3.32,3.31Z", transform: "translate(-8.33)", fill: "#fff" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M49.33,85.79c-2.66,4.1-7.85,2.84-11.37-1.62a17.49,17.49,0,0,1-3.56-10,16.85,16.85,0,0,1,.6-5.5,15.93,15.93,0,0,1,6.13-8.51c.37-.27.54-.15.79.23a8.39,8.39,0,0,0,1.89,1.82c.53.4,1.18.85,2,1.34a19.66,19.66,0,0,0-2.46,4.92,5,5,0,0,0,.48,1l.05.09a8.78,8.78,0,0,0,2.1,2.32h0a11.82,11.82,0,0,0,3.25,1.78C52.84,75,52,77.23,51.37,78.25a1.15,1.15,0,0,0,0,1.19C54.22,84.53,49.33,85.79,49.33,85.79Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("path", { d: "M43.81,62.22A9.43,9.43,0,0,1,35,68.68a15.93,15.93,0,0,1,6.13-8.51c.37-.27.54-.15.79.23A8.39,8.39,0,0,0,43.81,62.22Z", transform: "translate(-8.33)", fill: "#fb64c0" }),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M49.29,85.86c-1.95,2.92-5.21,3-8.18,1.19a.23.23,0,0,1,.22-.41,4.2,4.2,0,0,0,5.23-1.36A4.37,4.37,0,0,1,48,84.06c2.31-1.2,1.55-3.18.78-4.38a1.69,1.69,0,0,1-.07-1.75,2.22,2.22,0,0,0,.2-.45,1.4,1.4,0,0,0-.76-1.71,7.72,7.72,0,0,1-4.84-6.18.23.23,0,0,1,.43-.13h0l.05.09a7.4,7.4,0,0,0,2.1,2.32h0a11.82,11.82,0,0,0,3.25,1.78C52.84,75,52,77.23,51.37,78.25a1.15,1.15,0,0,0,0,1.19C54,84.15,50,85.58,49.41,85.76A.23.23,0,0,0,49.29,85.86Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("path", { d: "M42.43,60.31a16.78,16.78,0,0,0-2,1.5c-.31.26-.6.56-.9.84l-.42.45-.21.23-.19.24a14.56,14.56,0,0,0-2.48,4.21,17.23,17.23,0,0,0,1.37,14.27,13.3,13.3,0,0,0,3.17,3.66,9,9,0,0,0,2,1.2,5.47,5.47,0,0,0,2.18.46,4,4,0,0,0,2-.53,4.84,4.84,0,0,0,1.56-1.53.86.86,0,0,1,.48-.36h0l.12,0,.13-.05.28-.11a4.54,4.54,0,0,0,.53-.3,2.82,2.82,0,0,0,.81-.76,2.33,2.33,0,0,0,.39-1,3.19,3.19,0,0,0-.07-1.14,5.25,5.25,0,0,0-.43-1.2,5.58,5.58,0,0,0-.31-.59l-.1-.19a1.48,1.48,0,0,1-.13-.35,1.44,1.44,0,0,1,0-.77,1.66,1.66,0,0,1,.14-.37,1,1,0,0,1,.1-.15l0-.07c.06-.08.1-.16.16-.25A3.43,3.43,0,0,0,51,77.1a1.68,1.68,0,0,0,.06-1,2.76,2.76,0,0,0-1.56-1.52l-.61-.28-.7-.31c-.23-.1-.45-.24-.68-.36a5.45,5.45,0,0,1-.66-.39,10.72,10.72,0,0,1-2.33-2A5.86,5.86,0,0,1,43.66,70a3,3,0,0,1-.14-.36,2,2,0,0,1-.12-.37,2.49,2.49,0,0,1-.08-.77c.34.39.66.74,1,1.08s.62.69,1,1a9.87,9.87,0,0,0,2.26,1.58,4.43,4.43,0,0,0,.62.3c.21.09.41.2.63.27l.65.24.74.29c.24.12.49.24.73.38a5.31,5.31,0,0,1,.7.5,3.26,3.26,0,0,1,1.05,1.57,3.34,3.34,0,0,1-.05,1.91,5.46,5.46,0,0,1-.35.82c-.07.12-.14.25-.22.37l-.06.09h0a0,0,0,0,0,0,0,.06.06,0,0,0,0,0v0h0l0,0,.05.09c.13.23.26.46.38.7A7.49,7.49,0,0,1,53,81.18a4.9,4.9,0,0,1,.1,1.76,3.91,3.91,0,0,1-.66,1.72,4.71,4.71,0,0,1-1.28,1.24,5.52,5.52,0,0,1-.75.42l-.39.17-.2.07-.24.08.52-.38A6.45,6.45,0,0,1,48,88.36a5.91,5.91,0,0,1-2.93.81,7.57,7.57,0,0,1-2.89-.58,10.49,10.49,0,0,1-2.45-1.43,13.19,13.19,0,0,1-2-1.92A16.87,16.87,0,0,1,36.05,83a18.4,18.4,0,0,1-2-5.07,19,19,0,0,1-.45-2.7,24.75,24.75,0,0,1-.08-2.73,16.58,16.58,0,0,1,1.09-5.37,16.38,16.38,0,0,1,2.82-4.7l.22-.26.24-.25.47-.5c.33-.31.66-.64,1-.92a17.3,17.3,0,0,1,2.2-1.62Z", transform: "translate(-8.33)", fill: "#390075" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M93.6,74.18a17.69,17.69,0,0,1-3.17,9.47l-.39.52c-3.52,4.46-8.71,5.72-11.37,1.62,0,0-4.89-1.26-2-6.35a1.15,1.15,0,0,0,0-1.19c-.64-1-1.47-3.23,2.17-4.58a11.82,11.82,0,0,0,3.25-1.78h0a8.78,8.78,0,0,0,2.1-2.32l0-.09a5,5,0,0,0,.48-1,19.66,19.66,0,0,0-2.46-4.92,13.45,13.45,0,0,0,3.85-3.16c.25-.38.42-.5.79-.23a16.13,16.13,0,0,1,5.79,7.47A16.63,16.63,0,0,1,93.6,74.18Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("path", { d: "M93.6,74.18a17.69,17.69,0,0,1-3.17,9.47,10,10,0,0,1,2.23-16A16.63,16.63,0,0,1,93.6,74.18Z", transform: "translate(-8.33)", fill: "#fb64c0" }),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M78.71,85.86c2,2.92,5.21,3,8.18,1.19a.23.23,0,0,0-.22-.41,4.2,4.2,0,0,1-5.23-1.36A4.37,4.37,0,0,0,80,84.06c-2.31-1.2-1.55-3.18-.78-4.38a1.69,1.69,0,0,0,.07-1.75,2.22,2.22,0,0,1-.2-.45,1.4,1.4,0,0,1,.76-1.71,7.72,7.72,0,0,0,4.84-6.18.23.23,0,0,0-.43-.13h0l0,.09a7.4,7.4,0,0,1-2.1,2.32h0a11.82,11.82,0,0,1-3.25,1.78C75.16,75,76,77.23,76.63,78.25a1.15,1.15,0,0,1,0,1.19C74,84.15,78,85.58,78.59,85.76A.23.23,0,0,1,78.71,85.86Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("path", { d: "M86.47,58.88a17.3,17.3,0,0,1,2.2,1.62c.35.28.68.61,1,.92l.47.5.24.25.22.26a16.38,16.38,0,0,1,2.82,4.7,16.58,16.58,0,0,1,1.09,5.37,24.75,24.75,0,0,1-.08,2.73,19,19,0,0,1-.45,2.7A18.4,18.4,0,0,1,92,83a16.87,16.87,0,0,1-1.6,2.24,13.19,13.19,0,0,1-2,1.92,10.49,10.49,0,0,1-2.45,1.43,7.57,7.57,0,0,1-2.89.58,5.91,5.91,0,0,1-2.93-.81,6.45,6.45,0,0,1-2.12-2.1l.52.38-.24-.08-.2-.07-.39-.17a5.52,5.52,0,0,1-.75-.42,4.71,4.71,0,0,1-1.28-1.24,3.91,3.91,0,0,1-.66-1.72,4.9,4.9,0,0,1,.1-1.76,7.49,7.49,0,0,1,.56-1.55c.12-.24.25-.47.38-.7l0-.09,0,0h0v0a.06.06,0,0,0,0,0,0,0,0,0,0,0,0h0L76,78.8c-.08-.12-.15-.25-.22-.37a5.46,5.46,0,0,1-.35-.82,3.34,3.34,0,0,1,0-1.91,3.26,3.26,0,0,1,1-1.57,5.31,5.31,0,0,1,.7-.5c.24-.14.49-.26.73-.38l.74-.29.65-.24c.22-.07.42-.18.63-.27a4.43,4.43,0,0,0,.62-.3,9.87,9.87,0,0,0,2.26-1.58c.33-.32.64-.66,1-1s.64-.69,1-1.08a2.49,2.49,0,0,1-.08.77,2,2,0,0,1-.12.37,3,3,0,0,1-.14.36,5.86,5.86,0,0,1-.86,1.28,10.72,10.72,0,0,1-2.33,2,5.45,5.45,0,0,1-.66.39c-.23.12-.45.26-.68.36l-.7.31-.61.28a2.76,2.76,0,0,0-1.56,1.52,1.68,1.68,0,0,0,.06,1,3.43,3.43,0,0,0,.23.52c.06.09.1.17.16.25l0,.07a1,1,0,0,1,.1.15,1.66,1.66,0,0,1,.14.37,1.44,1.44,0,0,1,0,.77,1.48,1.48,0,0,1-.13.35l-.1.19a5.58,5.58,0,0,0-.31.59,5.25,5.25,0,0,0-.43,1.2,3.19,3.19,0,0,0-.07,1.14,2.33,2.33,0,0,0,.39,1,2.82,2.82,0,0,0,.81.76,4.54,4.54,0,0,0,.53.3l.28.11.13.05.12,0h0a.84.84,0,0,1,.48.36A4.84,4.84,0,0,0,81,86.84a4,4,0,0,0,2,.53,5.47,5.47,0,0,0,2.18-.46,9,9,0,0,0,2-1.2,13.3,13.3,0,0,0,3.17-3.66,17.23,17.23,0,0,0,1.37-14.27,14.56,14.56,0,0,0-2.48-4.21l-.19-.24-.21-.23-.42-.45c-.3-.28-.59-.58-.9-.84a16.78,16.78,0,0,0-2-1.5Z", transform: "translate(-8.33)", fill: "#390075" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M87.8,91.93l-4,9.55a1.66,1.66,0,0,1-2.19.87c.77,2.35-4.21,8.77-11.68,2.08s-2-10.33-2-10.33c.91-4,5.12-3.28,5.12-3.28,3.14-2.2,5.78,1.44,5.78,1.44a11.3,11.3,0,0,1,1.78-.84A8,8,0,0,1,87.8,91.93Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("circle", { cx: "67.01", cy: "101.13", r: "3.42", fill: "#ffc2de" }),
                React.createElement("circle", { cx: "67.68", cy: "94.88", r: "1.84", fill: "#ffc2de" }),
                React.createElement("circle", { cx: "63.6", cy: "95.72", r: "1.84", fill: "#ffc2de" }),
                React.createElement("circle", { cx: "61.39", cy: "99.28", r: "1.84", fill: "#ffc2de" }),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M80.07,95.72a8.4,8.4,0,0,0-1.29-3.46,11.3,11.3,0,0,1,1.78-.84A6,6,0,0,1,80.07,95.72Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M81.59,102.35s-5.71,7.53-15.6-4.13c0,0,1.1,7,9.67,9.14C75.66,107.36,80.61,108.05,81.59,102.35Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("path", { d: "M87.8,91.93a11.32,11.32,0,0,0-2.28-.48,8.67,8.67,0,0,0-2.22,0l-.54.1-.27.05-.26.08-.53.14-.52.19-.25.1-.25.11-.5.23-1,.52a.89.89,0,0,1-1-.18l-.05-.06h0l-.21-.25-.25-.27c-.18-.17-.36-.33-.55-.48a4.17,4.17,0,0,0-1.2-.66A2.46,2.46,0,0,0,74.66,91a3,3,0,0,0-1.17.51h0a.87.87,0,0,1-.62.14h-.14l-.18,0h-.36a4.39,4.39,0,0,0-.72.07,3.66,3.66,0,0,0-1.29.45,2.9,2.9,0,0,0-.52.38,3.28,3.28,0,0,0-.42.5,3.79,3.79,0,0,0-.53,1.27h0l-.35.51,0,0-.06,0-.13.12c-.08.08-.17.16-.25.25a4.65,4.65,0,0,0-.42.57,3.67,3.67,0,0,0-.51,1.29,4.5,4.5,0,0,0,.47,2.79,11,11,0,0,0,1.82,2.6c.18.21.38.4.57.6s.4.39.59.58c.41.37.82.73,1.26,1.06.21.17.44.31.66.47s.45.28.68.42a8.79,8.79,0,0,0,1.43.66c.25.09.5.14.75.21a6.5,6.5,0,0,0,.75.12,5.44,5.44,0,0,0,1.51-.07A5,5,0,0,0,80,105.09a9.21,9.21,0,0,0,1.27-1.93,3.34,3.34,0,0,0,.28-.81,1.53,1.53,0,0,1,.38.9,2.7,2.7,0,0,1-.08,1,4.54,4.54,0,0,1-.93,1.66,6.24,6.24,0,0,1-3.22,2,6.91,6.91,0,0,1-3.8-.14,9.77,9.77,0,0,1-1.74-.71c-.26-.15-.54-.29-.8-.46s-.52-.32-.76-.51A17.27,17.27,0,0,1,69.22,105l-.66-.6c-.21-.22-.43-.43-.63-.65a12.41,12.41,0,0,1-1.18-1.41,10.42,10.42,0,0,1-1-1.61,7,7,0,0,1-.62-1.87,5.39,5.39,0,0,1,0-2,5.15,5.15,0,0,1,.79-1.9,6.06,6.06,0,0,1,.63-.79c.12-.12.24-.24.37-.35l.2-.17.11-.08.13-.09-.36.51h0a5.85,5.85,0,0,1,.77-1.83,5.6,5.6,0,0,1,.67-.79,4.85,4.85,0,0,1,.82-.61A5.51,5.51,0,0,1,71.18,90a7.79,7.79,0,0,1,1-.09h.73l.27,0-.62.14a4.68,4.68,0,0,1,1.85-.8,4.3,4.3,0,0,1,2,.16,5.49,5.49,0,0,1,1.7.93,7,7,0,0,1,.71.62c.11.1.21.22.32.33a4.43,4.43,0,0,1,.31.39h0l-1.1-.24c.38-.19.75-.39,1.14-.55l.59-.23.3-.1c.1,0,.21-.06.31-.09l.62-.15c.21-.05.42-.07.63-.11l.32,0a1.67,1.67,0,0,1,.32,0c.21,0,.42,0,.63,0a8.33,8.33,0,0,1,2.49.42A5.06,5.06,0,0,1,87.8,91.93Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("g", null,
                    React.createElement("path", { d: "M79.51,91.83c.08.17.13.32.19.48l.15.47a8.35,8.35,0,0,1,.2,1,6.61,6.61,0,0,1,.08,1,5.32,5.32,0,0,1-.06,1c-.09-.14-.16-.28-.24-.42s-.16-.27-.25-.4-.33-.53-.5-.78l-.52-.74L78.3,93l-.25-.33Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("path", { d: "M73.67,90.31c.07.2.1.38.15.57s.07.37.09.56a6.92,6.92,0,0,1,.1,1.1,7.28,7.28,0,0,0-.82-.67l-.43-.29c-.15-.09-.3-.19-.43-.25Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("path", { d: "M68.59,93.65a3.2,3.2,0,0,0,.09.49c0,.17.08.34.13.51a5.68,5.68,0,0,0,.39,1,6.41,6.41,0,0,1-1-.47l-.5-.29-.5-.34Z", transform: "translate(-8.33)", fill: "#390075" }))),
            React.createElement("g", null,
                React.createElement("path", { d: "M40.2,91.93l4,9.55a1.66,1.66,0,0,0,2.19.87c-.77,2.35,4.21,8.77,11.68,2.08s2-10.33,2-10.33c-.91-4-5.12-3.28-5.12-3.28-3.14-2.2-5.78,1.44-5.78,1.44a11.3,11.3,0,0,0-1.78-.84A8,8,0,0,0,40.2,91.93Z", transform: "translate(-8.33)", fill: "#fff" }),
                React.createElement("circle", { cx: "44.33", cy: "101.13", r: "3.42", fill: "#ffc2de" }),
                React.createElement("circle", { cx: "43.66", cy: "94.88", r: "1.84", fill: "#ffc2de" }),
                React.createElement("circle", { cx: "47.75", cy: "95.72", r: "1.84", fill: "#ffc2de" }),
                React.createElement("circle", { cx: "49.95", cy: "99.28", r: "1.84", fill: "#ffc2de" }),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M47.93,95.72a8.4,8.4,0,0,1,1.29-3.46,11.3,11.3,0,0,0-1.78-.84A6,6,0,0,0,47.93,95.72Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("g", { opacity: "0.3" },
                    React.createElement("path", { d: "M46.41,102.35s5.71,7.53,15.6-4.13c0,0-1.1,7-9.67,9.14C52.34,107.36,47.39,108.05,46.41,102.35Z", transform: "translate(-8.33)", fill: "#000072" })),
                React.createElement("path", { d: "M40.2,91.93a5.06,5.06,0,0,1,2.09-1.31,8.33,8.33,0,0,1,2.49-.42c.21,0,.42,0,.63,0a1.67,1.67,0,0,1,.32,0l.32,0c.21,0,.42.06.63.11l.62.15c.1,0,.21,0,.31.09l.3.1.59.23c.39.16.76.36,1.14.55l-1.1.24h0a4.43,4.43,0,0,1,.31-.39c.11-.11.21-.23.32-.33a7,7,0,0,1,.71-.62,5.49,5.49,0,0,1,1.7-.93,4.3,4.3,0,0,1,2.05-.16,4.68,4.68,0,0,1,1.85.8L54.86,90l.27,0h.73a7.79,7.79,0,0,1,1,.09,5.51,5.51,0,0,1,1.87.66,4.85,4.85,0,0,1,.82.61,5.6,5.6,0,0,1,.67.79A5.85,5.85,0,0,1,61,93.91h0l-.36-.51.13.09.11.08.2.17c.13.11.25.23.37.35a6.06,6.06,0,0,1,.63.79,5.15,5.15,0,0,1,.79,1.9,5.39,5.39,0,0,1,0,2,7,7,0,0,1-.62,1.87,10.42,10.42,0,0,1-1,1.61,12.41,12.41,0,0,1-1.18,1.41c-.2.22-.42.43-.63.65l-.66.6a17.27,17.27,0,0,1-1.42,1.14c-.24.19-.51.34-.76.51s-.54.31-.8.46a9.77,9.77,0,0,1-1.74.71,6.91,6.91,0,0,1-3.8.14,6.24,6.24,0,0,1-3.22-2,4.54,4.54,0,0,1-.93-1.66,2.7,2.7,0,0,1-.08-1,1.53,1.53,0,0,1,.38-.9,3.34,3.34,0,0,0,.28.81A9.21,9.21,0,0,0,48,105.09a5,5,0,0,0,2.62,1.47,5.44,5.44,0,0,0,1.51.07,6.5,6.5,0,0,0,.75-.12c.25-.07.5-.12.75-.21a8.79,8.79,0,0,0,1.43-.66c.23-.14.46-.27.68-.42s.45-.3.66-.47c.44-.33.85-.69,1.26-1.06.19-.19.4-.38.59-.58s.39-.39.57-.6a11,11,0,0,0,1.82-2.6,4.5,4.5,0,0,0,.47-2.79,3.67,3.67,0,0,0-.51-1.29,4.65,4.65,0,0,0-.42-.57c-.08-.09-.17-.17-.25-.25l-.13-.12-.06,0-.05,0-.35-.51h0A3.79,3.79,0,0,0,58.77,93a3.28,3.28,0,0,0-.42-.5,2.9,2.9,0,0,0-.52-.38,3.66,3.66,0,0,0-1.29-.45,4.39,4.39,0,0,0-.72-.07h-.36l-.18,0h-.14a.83.83,0,0,1-.62-.14h0A3,3,0,0,0,53.34,91a2.46,2.46,0,0,0-1.23.09,4.17,4.17,0,0,0-1.2.66c-.19.15-.37.31-.55.48l-.25.27-.21.25h0l0,0A.89.89,0,0,1,48.8,93l-1-.52-.5-.23-.25-.11-.25-.1-.52-.19-.53-.14-.26-.08-.27-.05-.54-.1a8.67,8.67,0,0,0-2.22,0A11.32,11.32,0,0,0,40.2,91.93Z", transform: "translate(-8.33)", fill: "#390075" }),
                React.createElement("g", null,
                    React.createElement("path", { d: "M50,92.69,49.7,93l-.26.36-.52.74c-.17.25-.33.51-.5.78s-.17.26-.25.4-.15.28-.24.42a5.32,5.32,0,0,1-.06-1,6.61,6.61,0,0,1,.08-1,8.35,8.35,0,0,1,.2-1l.15-.47c.06-.16.11-.31.19-.48Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("path", { d: "M55.67,91.33c-.13.06-.28.16-.43.25l-.43.29a7.28,7.28,0,0,0-.82.67,6.92,6.92,0,0,1,.1-1.1c0-.19.06-.37.09-.56s.08-.37.15-.57Z", transform: "translate(-8.33)", fill: "#390075" }),
                    React.createElement("path", { d: "M60.84,94.56l-.5.34-.5.29a6.41,6.41,0,0,1-1,.47,5.68,5.68,0,0,0,.39-1c.05-.17.09-.34.13-.51a3.2,3.2,0,0,0,.09-.49Z", transform: "translate(-8.33)", fill: "#390075" }))))));
};

keyframes(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = keyframes(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$3 = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var FloatingKittyIcon = styled(Icon$q)(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React.createElement(Container$3, null,
        React.createElement(FloatingKittyIcon, { width: size + "px" })));
};
var templateObject_1$p, templateObject_2$c, templateObject_3$6, templateObject_4$4;

var StepperWrapper = styled.div(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"])));
var Stepper = function (_a) {
    var children = _a.children;
    var numberOfSteps = React.Children.count(children);
    return (React.createElement(StepperWrapper, null, React.Children.map(children, function (child) {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { numberOfSteps: numberOfSteps });
        }
        return child;
    })));
};
var templateObject_1$o;

var getStepNumberFontColor = function (_a) {
    var theme = _a.theme, status = _a.status;
    if (status === "past") {
        return theme.colors.success;
    }
    if (status === "current") {
        return theme.colors.invertedContrast;
    }
    return theme.colors.textDisabled;
};
var StyledStep = styled(Flex)(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  ", " {\n    justify-content: center;\n  }\n"], ["\n  ", " {\n    justify-content: center;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Connector = styled.div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  top: 50%;\n  left: calc(50% - 2px);\n  background-color: ", ";\n"], ["\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  top: 50%;\n  left: calc(50% - 2px);\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme, status = _a.status;
    return theme.colors[status === "past" ? "success" : "textDisabled"];
});
var ChildrenWrapper = styled(Box)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  ", " {\n    visibility: ", ";\n  }\n"], ["\n  ", " {\n    visibility: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var isVisible = _a.isVisible;
    return (isVisible ? "visible" : "hidden");
});
var ChildrenLeftWrapper = styled(ChildrenWrapper)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ChildrenRightWrapper = styled(ChildrenWrapper)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"], ["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Wrapper$2 = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n"])));
var StepNumber = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 1;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"], ["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 1;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"])), function (_a) {
    var theme = _a.theme, status = _a.status;
    return theme.colors[status === "current" ? "secondary" : "invertedContrast"];
}, function (_a) {
    var theme = _a.theme, status = _a.status;
    return (status === "past" ? theme.colors.success : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.circle;
}, getStepNumberFontColor, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
/**
 * ChildrenLeftWrapper and ChildrenRightWrapper are used on the non mobile version, to force the alternate layout.
 * One of the child is hidden based on the step number.
 */
var Step = function (_a) {
    var index = _a.index, status = _a.status, _b = _a.numberOfSteps, numberOfSteps = _b === void 0 ? 0 : _b, children = _a.children;
    var isIndexPair = index % 2 === 0;
    return (React.createElement(StyledStep, { mb: index < numberOfSteps - 1 ? "16px" : 0 },
        React.createElement(ChildrenLeftWrapper, { isVisible: !isIndexPair }, children),
        React.createElement(Wrapper$2, null,
            React.createElement(StepNumber, { status: status }, index + 1),
            index < numberOfSteps - 1 && React.createElement(Connector, { status: status })),
        React.createElement(ChildrenRightWrapper, { isVisible: isIndexPair }, children)));
};
var templateObject_1$n, templateObject_2$b, templateObject_3$5, templateObject_4$3, templateObject_5$1, templateObject_6, templateObject_7;

var byTextAscending = function (getTextProperty) {
    return function (objectA, objectB) {
        var upperA = getTextProperty(objectA).toUpperCase();
        var upperB = getTextProperty(objectB).toUpperCase();
        if (upperA < upperB) {
            return -1;
        }
        if (upperA > upperB) {
            return 1;
        }
        return 0;
    };
};
var byTextDescending = function (getTextProperty) {
    return function (objectA, objectB) {
        var upperA = getTextProperty(objectA).toUpperCase();
        var upperB = getTextProperty(objectB).toUpperCase();
        if (upperA > upperB) {
            return -1;
        }
        if (upperA < upperB) {
            return 1;
        }
        return 0;
    };
};

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () {
    return function (state, action) {
        var rows = [];
        var nextPage = 0;
        var prevPage = 0;
        var isAscending = null;
        var sortedRows = [];
        var columnCopy = [];
        var filteredRows = [];
        var selectedRowsById = {};
        var stateCopy = __assign({}, state);
        var rowIds = {};
        switch (action.type) {
            case "SET_ROWS":
                rows = __spreadArray([], action.data);
                // preserve sorting if a sort is already enabled when data changes
                if (state.sortColumn) {
                    rows = sortByColumn(action.data, state.sortColumn, state.columns);
                }
                if (state.paginationEnabled === true) {
                    rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
                }
                if (state.paginationEnabled === true) {
                    rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
                }
                columnCopy = state.columns.map(function (column) {
                    if (state.sortColumn === column.name) {
                        return __assign(__assign({}, column), { sorted: {
                                on: true,
                                asc: column.sorted.asc,
                            } });
                    }
                    return column;
                });
                return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
            case "NEXT_PAGE":
                nextPage = state.pagination.page + 1;
                return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
            case "PREV_PAGE":
                prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
                return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
            case "TOGGLE_SORT":
                if (!(action.columnName in state.columnsByName)) {
                    throw new Error("Invalid column, " + action.columnName + " not found");
                }
                // loop through all columns and set the sort parameter to off unless
                // it's the specified column (only one column at a time for )
                columnCopy = state.columns.map(function (column) {
                    // if the row was found
                    if (action.columnName === column.name) {
                        if (action.isAscOverride !== undefined) {
                            // force the sort order
                            isAscending = action.isAscOverride;
                        }
                        else {
                            // if it's undefined, start by setting to ascending, otherwise toggle
                            isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                        }
                        if (column.sort) {
                            sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                            // default to sort by string
                        }
                        else {
                            sortedRows = isAscending
                                ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                                : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                        }
                        return __assign(__assign({}, column), { sorted: {
                                on: true,
                                asc: isAscending,
                            } });
                    }
                    // set sorting to false for all other columns
                    return __assign(__assign({}, column), { sorted: {
                            on: false,
                            asc: false,
                        } });
                });
                return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
            case "GLOBAL_FILTER":
                filteredRows = action.filter(state.originalRows);
                selectedRowsById = {};
                state.selectedRows.forEach(function (row) {
                    var _a;
                    selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
                });
                return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                        return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                    }), filterOn: true });
            case "SELECT_ROW":
                stateCopy = __assign({}, state);
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    var newRow = __assign({}, row);
                    if (newRow.id === action.rowId) {
                        newRow.selected = !newRow.selected;
                    }
                    return newRow;
                });
                stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                    var newRow = __assign({}, row);
                    if (newRow.id === action.rowId) {
                        newRow.selected = !newRow.selected;
                    }
                    return newRow;
                });
                stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
                stateCopy.toggleAllState =
                    stateCopy.selectedRows.length === stateCopy.rows.length
                        ? (stateCopy.toggleAllState = true)
                        : (stateCopy.toggleAllState = false);
                return stateCopy;
            case "SEARCH_STRING":
                stateCopy = __assign({}, state);
                stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                    return (row.cells.filter(function (cell) {
                        if (cell.value.includes(action.searchString)) {
                            return true;
                        }
                        return false;
                    }).length > 0);
                });
                return stateCopy;
            case "TOGGLE_ALL":
                if (state.selectedRows.length < state.rows.length) {
                    stateCopy.rows = stateCopy.rows.map(function (row) {
                        rowIds[row.id] = true;
                        return __assign(__assign({}, row), { selected: true });
                    });
                    stateCopy.toggleAllState = true;
                }
                else {
                    stateCopy.rows = stateCopy.rows.map(function (row) {
                        rowIds[row.id] = false;
                        return __assign(__assign({}, row), { selected: false });
                    });
                    stateCopy.toggleAllState = false;
                }
                stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                    return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
                });
                stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
                return stateCopy;
            default:
                throw new Error("Invalid reducer action");
        }
    };
};
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var Wrapper$1 = styled(Flex)(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"], ["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var Inner$1 = styled(Flex)(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"], ["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, onItemClick = _a.onItemClick, children = _a.children;
    return (React.createElement(Wrapper$1, { p: ["0 4px", "0 16px"] },
        React.createElement(Inner$1, null, Children.map(children, function (child, index) {
            var isActive = activeIndex === index;
            return cloneElement(child, {
                isActive: isActive,
                onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
                color: isActive ? "backgroundAlt" : "textSubtle",
                backgroundColor: isActive ? "textSubtle" : "input",
            });
        }))));
};
var templateObject_1$m, templateObject_2$a;

var getBorderRadius = function (_a) {
    var scale = _a.scale;
    return (scale === "md" ? "16px 16px 0 0" : "24px 24px 0 0");
};
var getPadding = function (_a) {
    var scale = _a.scale;
    return (scale === "md" ? "8px" : "16px");
};
var Tab = styled.button(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: ", ";\n  border-radius: ", ";\n  font-size: 16px;\n  font-weight: 600;\n\n  ", " {\n    flex-grow: 0;\n  }\n\n  ", "\n"], ["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: ", ";\n  border-radius: ", ";\n  font-size: 16px;\n  font-weight: 600;\n\n  ", " {\n    flex-grow: 0;\n  }\n\n  ", "\n"])), getPadding, getBorderRadius, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, color);
Tab.defaultProps = {
    scale: "md",
};
var templateObject_1$l;

var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    TEXTDISABLED: "textDisabled",
    TEXTSUBTLE: "textSubtle",
    BINANCE: "binance",
    FAILURE: "failure",
    WARNING: "warning",
};
var scales$1 = {
    MD: "md",
    SM: "sm",
};

var _a$1, _b;
var scaleVariants = (_a$1 = {},
    _a$1[scales$1.MD] = {
        height: "28px",
        padding: "0 8px",
        fontSize: "14px",
    },
    _a$1[scales$1.SM] = {
        height: "24px",
        padding: "0 4px",
        fontSize: "12px",
    },
    _a$1);
var styleVariants = (_b = {},
    _b[variants.PRIMARY] = {
        backgroundColor: "primary",
    },
    _b[variants.SECONDARY] = {
        backgroundColor: "secondary",
    },
    _b[variants.SUCCESS] = {
        backgroundColor: "success",
    },
    _b[variants.TEXTDISABLED] = {
        backgroundColor: "textDisabled",
    },
    _b[variants.TEXTSUBTLE] = {
        backgroundColor: "textSubtle",
    },
    _b[variants.BINANCE] = {
        backgroundColor: "binance",
    },
    _b[variants.FAILURE] = {
        backgroundColor: "failure",
    },
    _b[variants.WARNING] = {
        backgroundColor: "warning",
    },
    _b);

var getOutlineStyles = function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variantKey = _b === void 0 ? variants.PRIMARY : _b;
    if (outline) {
        var themeColorKey = styleVariants[variantKey].backgroundColor;
        var color = theme.colors[themeColorKey];
        return "\n      color: " + color + ";\n      background: transparent;\n      border: 2px solid " + color + ";\n    ";
    }
    return "";
};
var StyledTag = styled.div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ",
    "\n  ",
    "\n  ", "\n\n  ", "\n"])), variant$1({
    prop: "scale",
    variants: scaleVariants,
}), variant$1({
    variants: styleVariants,
}), space, getOutlineStyles);
var templateObject_1$k;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledTag, __assign({}, props),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5em",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5em",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    scale: scales$1.MD,
    outline: false,
};

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale = function (property) {
    return function (_a) {
        var _b = _a.scale, scale = _b === void 0 ? scales$5.MD : _b;
        return scaleKeyValues[scale][property];
    };
};
var Handle = styled.div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
var Input = styled.input(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale("toggleHeight"), getScale("toggleWidth"));
var templateObject_1$j, templateObject_2$9, templateObject_3$4;

var scales = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React.createElement(StyledToggle, { checked: isChecked, scale: scale },
        React.createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React.createElement(Handle, { scale: scale })));
};
Toggle.defaultProps = {
    scale: scales.MD,
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "24px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var baseColors = {
    failure: "#ED4B9E",
    primary: "#b165ff",
    primaryBright: "#53DEE9",
    primaryDark: "#0098A1",
    secondary: "#7645D9",
    success: "#31D0AA",
    warning: "#FFB237",
};
var additionalColors = {
    binance: "#F0B90B",
    overlay: "#452a7a",
};
var lightColors = __assign(__assign(__assign({}, baseColors), additionalColors), { background: "#fcf9ff", backgroundDisabled: "#E9EAEB", backgroundAlt: "#FFFFFF", cardBorder: "#E7E3EB", contrast: "#191326", dropdown: "#F6F6F6", dropdownDeep: "#EEEEEE", invertedContrast: "#FFFFFF", input: "#eeeaf4", inputSecondary: "#d7caec", tertiary: "#EFF4F5", text: "#392b4e", textDisabled: "#BDC2C4", textSubtle: "#5c4277", disabled: "#E9EAEB", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
        inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
        cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
        blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
        violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
        violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
        gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), additionalColors), { secondary: "#9A6AFF", background: "#150f1f", backgroundDisabled: "#3c3742", backgroundAlt: "#251d31", cardBorder: "#383241", contrast: "#FFFFFF", dropdown: "#1E1D20", dropdownDeep: "#100C18", invertedContrast: "#191326", input: "#372F47", inputSecondary: "#262130", primaryDark: "#0098A1", tertiary: "#383144", text: "#efe8f7", textDisabled: "#666171", textSubtle: "#BE7FFF", disabled: "#524B63", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
        inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
        cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
        blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
        violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
        violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
        gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    } });

var light$6 = {
    background: lightColors.backgroundAlt,
};
var dark$6 = {
    background: darkColors.backgroundAlt,
};

var light$5 = {
    background: lightColors.backgroundAlt,
    boxShadow: "0px 2px 30px 0px rgba(221, 221, 238, 0.5)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: lightColors.gradients.cardHeader,
        blue: lightColors.gradients.blue,
        bubblegum: lightColors.gradients.bubblegum,
        violet: lightColors.gradients.violet,
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$5 = {
    background: darkColors.backgroundAlt,
    boxShadow: "0px 2px 30px 0px rgba(23, 23, 30, 0.5)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: darkColors.gradients.cardHeader,
        blue: darkColors.gradients.blue,
        bubblegum: lightColors.gradients.bubblegum,
        violet: darkColors.gradients.violet,
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$4 = {
    handleBackground: lightColors.backgroundAlt,
};
var dark$4 = {
    handleBackground: darkColors.backgroundAlt,
};

var light$3 = {
    handleBackground: lightColors.backgroundAlt,
};
var dark$3 = {
    handleBackground: darkColors.backgroundAlt,
};

var light$2 = {
    background: lightColors.backgroundAlt,
};
var dark$2 = {
    background: darkColors.backgroundAlt,
};

var light$1 = {
    background: lightColors.backgroundAlt,
};
var dark$1 = {
    background: darkColors.backgroundAlt,
};

var light = {
    background: darkColors.backgroundAlt,
    text: darkColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var dark = {
    background: lightColors.backgroundAlt,
    text: lightColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$6, colors: darkColors, card: dark$5, toggle: dark$3, nav: dark$2, modal: dark$1, radio: dark$4, tooltip: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$6, colors: lightColors, card: light$5, toggle: light$3, nav: light$2, modal: light$1, radio: light$4, tooltip: light });

var Arrow = styled.div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"], ["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.tooltip.background;
});
var StyledTooltip = styled.div(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"], ["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.tooltip.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.tooltip.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.tooltip.boxShadow;
}, Arrow, Arrow, Arrow, Arrow);
var templateObject_1$i, templateObject_2$8;

function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
var invertTheme = function (currentTheme) {
    if (currentTheme.isDark) {
        return lightTheme;
    }
    return darkTheme;
};
var portalRoot = document.getElementById("portal-root");
var useTooltip = function (content, options) {
    var _a = options.placement, placement = _a === void 0 ? "auto" : _a, _b = options.trigger, trigger = _b === void 0 ? "hover" : _b, _c = options.arrowPadding, arrowPadding = _c === void 0 ? 16 : _c, _d = options.tooltipPadding, tooltipPadding = _d === void 0 ? { left: 16, right: 16 } : _d, _e = options.tooltipOffset, tooltipOffset = _e === void 0 ? [0, 10] : _e;
    var _f = useState(null), targetElement = _f[0], setTargetElement = _f[1];
    var _g = useState(null), tooltipElement = _g[0], setTooltipElement = _g[1];
    var _h = useState(null), arrowElement = _h[0], setArrowElement = _h[1];
    var _j = useState(false), visible = _j[0], setVisible = _j[1];
    var isHoveringOverTooltip = useRef(false);
    var hideTimeout = useRef();
    var hideTooltip = useCallback(function (e) {
        var hide = function () {
            e.stopPropagation();
            e.preventDefault();
            setVisible(false);
        };
        if (trigger === "hover") {
            if (hideTimeout.current) {
                window.clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = false;
            }
            if (!isHoveringOverTooltip.current) {
                hideTimeout.current = window.setTimeout(function () {
                    if (!isHoveringOverTooltip.current) {
                        hide();
                    }
                }, 100);
            }
        }
        else {
            hide();
        }
    }, [tooltipElement, trigger]);
    var showTooltip = useCallback(function (e) {
        e.stopPropagation();
        e.preventDefault();
        setVisible(true);
        if (trigger === "hover") {
            if (e.target === targetElement) {
                // If we were about to close the tooltip and got back to it
                // then prevent closing it.
                clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = true;
            }
        }
    }, [tooltipElement, targetElement, trigger]);
    var toggleTooltip = useCallback(function (e) {
        e.stopPropagation();
        setVisible(!visible);
    }, [visible]);
    // Trigger = hover
    useEffect(function () {
        if (targetElement === null || trigger !== "hover")
            return undefined;
        if (isTouchDevice()) {
            targetElement.addEventListener("touchstart", showTooltip);
            targetElement.addEventListener("touchend", hideTooltip);
        }
        else {
            targetElement.addEventListener("mouseenter", showTooltip);
            targetElement.addEventListener("mouseleave", hideTooltip);
        }
        return function () {
            targetElement.removeEventListener("touchstart", showTooltip);
            targetElement.removeEventListener("touchend", hideTooltip);
            targetElement.removeEventListener("mouseenter", showTooltip);
            targetElement.removeEventListener("mouseleave", showTooltip);
        };
    }, [trigger, targetElement, hideTooltip, showTooltip]);
    // Keep tooltip open when cursor moves from the targetElement to the tooltip
    useEffect(function () {
        if (tooltipElement === null || trigger !== "hover")
            return undefined;
        tooltipElement.addEventListener("mouseenter", showTooltip);
        tooltipElement.addEventListener("mouseleave", hideTooltip);
        return function () {
            tooltipElement.removeEventListener("mouseenter", showTooltip);
            tooltipElement.removeEventListener("mouseleave", hideTooltip);
        };
    }, [trigger, tooltipElement, hideTooltip, showTooltip]);
    // Trigger = click
    useEffect(function () {
        if (targetElement === null || trigger !== "click")
            return undefined;
        targetElement.addEventListener("click", toggleTooltip);
        return function () { return targetElement.removeEventListener("click", toggleTooltip); };
    }, [trigger, targetElement, visible, toggleTooltip]);
    // Handle click outside
    useEffect(function () {
        if (trigger !== "click")
            return undefined;
        var handleClickOutside = function (_a) {
            var target = _a.target;
            if (target instanceof Node) {
                if (tooltipElement != null &&
                    targetElement != null &&
                    !tooltipElement.contains(target) &&
                    !targetElement.contains(target)) {
                    setVisible(false);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, [trigger, targetElement, tooltipElement]);
    // Trigger = focus
    useEffect(function () {
        if (targetElement === null || trigger !== "focus")
            return undefined;
        targetElement.addEventListener("focus", showTooltip);
        targetElement.addEventListener("blur", hideTooltip);
        return function () {
            targetElement.removeEventListener("focus", showTooltip);
            targetElement.removeEventListener("blur", hideTooltip);
        };
    }, [trigger, targetElement, showTooltip, hideTooltip]);
    // On small screens Popper.js tries to squeeze the tooltip to available space without overflowing beyound the edge
    // of the screen. While it works fine when the element is in the middle of the screen it does not handle well the
    // cases when the target element is very close to the edge of the screen - no margin is applied between the tooltip
    // and the screen edge.
    // preventOverflow mitigates this behaviour, default 16px paddings on left and right solve the problem for all screen sizes
    // that we support.
    // Note that in the farm page where there are tooltips very close to the edge of the screen this padding works perfectly
    // even on the iPhone 5 screen (320px wide), BUT in the storybook with the contrived example ScreenEdges example
    // iPhone 5 behaves differently overflowing beyound the edge. All paddings are identical so I have no idea why it is,
    // and fixing that seems like a very bad use of time.
    var _k = usePopper(targetElement, tooltipElement, {
        placement: placement,
        modifiers: [
            {
                name: "arrow",
                options: { element: arrowElement, padding: arrowPadding },
            },
            { name: "offset", options: { offset: tooltipOffset } },
            { name: "preventOverflow", options: { padding: tooltipPadding } },
        ],
    }), styles = _k.styles, attributes = _k.attributes;
    var tooltip = (React.createElement(StyledTooltip, __assign({ ref: setTooltipElement, style: styles.popper }, attributes.popper),
        React.createElement(ThemeProvider, { theme: invertTheme }, content),
        React.createElement(Arrow, { ref: setArrowElement, style: styles.arrow })));
    var tooltipInPortal = portalRoot ? createPortal(tooltip, portalRoot) : null;
    return {
        targetRef: setTargetElement,
        tooltip: tooltipInPortal !== null && tooltipInPortal !== void 0 ? tooltipInPortal : tooltip,
        tooltipVisible: visible,
    };
};

var ModalHeader = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"], ["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"])), function (_a) {
    var background = _a.background;
    return background || "transparent";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
var ModalTitle = styled(Flex)(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var ModalBody = styled(Flex)(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  flex-direction: column;\n"], ["\n  flex-direction: column;\n"])));
var ModalCloseButton = function (_a) {
    var onDismiss = _a.onDismiss;
    return (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
        React.createElement(Icon$1d, { color: "primary" })));
};
var ModalBackButton = function (_a) {
    var onBack = _a.onBack;
    return (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
        React.createElement(Icon$1y, { color: "primary" })));
};
var ModalContainer = styled(Box)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  overflow: hidden;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"], ["\n  overflow: hidden;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var minWidth = _a.minWidth;
    return minWidth;
});
var templateObject_1$h, templateObject_2$7, templateObject_3$3, templateObject_4$2;

var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c, _d = _a.headerBackground, headerBackground = _d === void 0 ? "transparent" : _d, _e = _a.minWidth, minWidth = _e === void 0 ? "320px" : _e, props = __rest(_a, ["title", "onDismiss", "onBack", "children", "hideCloseButton", "bodyPadding", "headerBackground", "minWidth"]);
    var theme = useTheme();
    return (React.createElement(ModalContainer, __assign({ minWidth: minWidth }, props),
        React.createElement(ModalHeader, { background: getThemeValue("colors." + headerBackground, headerBackground)(theme) },
            React.createElement(ModalTitle, null,
                onBack && React.createElement(ModalBackButton, { onBack: onBack }),
                React.createElement(Heading, null, title)),
            !hideCloseButton && React.createElement(ModalCloseButton, { onDismiss: onDismiss })),
        React.createElement(ModalBody, { p: bodyPadding }, children)));
};

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.overlay;
}, function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$g;

var ModalWrapper = styled.div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null,
            React.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$f;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React.createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo$2 = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    var textColor = isDark ? "#FFFFFF" : "#000000";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 516.34 110" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M141,79.13c-.48,24.54-27.18,38.9-59.78,38.26s-58.76-16-58.28-40.52,27.37-48.93,60-48.32S141.48,54.59,141,79.13Z", transform: "translate(-11.83 -9)", fill: "#fff" }),
            React.createElement("g", { opacity: "0.2" },
                React.createElement("path", { d: "M81.79,117.33c-32.59-.64-58.76-16-58.28-40.53v-.47C28.35,96,52.1,108.09,80.9,108.67c32.57.6,59.24-13.69,59.81-38.17A36.43,36.43,0,0,1,141.6,79C141.13,103.57,114.39,117.93,81.79,117.33Z", transform: "translate(-11.83 -9)", fill: "#390075" })),
            React.createElement("path", { d: "M62.06,116.82a69.07,69.07,0,0,1-23.27-9.39c-11.65-7.71-17.7-18.31-17.44-30.59.22-12.45,7-25.15,18.52-34.76a65.57,65.57,0,0,1,85.6,1.62c11.14,10.09,17.41,23,17.15,35.46-.22,12.29-6.68,22.63-18.62,29.89-11,6.72-26.26,10.25-42.81,9.93A99.91,99.91,0,0,1,62.06,116.82Zm33-85.21a65.17,65.17,0,0,0-12.19-1.44C50,29.54,24.94,54.33,24.5,76.93c-.35,17.86,14.61,31.67,38,36.8a96,96,0,0,0,18.75,2.1c33.84.64,57.74-14.45,58.19-36.7.22-11.52-5.67-23.59-16.14-33A61.17,61.17,0,0,0,95.07,31.61Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
            React.createElement("path", { d: "M62.06,116.82a69.07,69.07,0,0,1-23.27-9.39c-11.65-7.71-17.7-18.31-17.44-30.59.22-12.45,7-25.15,18.52-34.76a65.57,65.57,0,0,1,85.6,1.62c11.14,10.09,17.41,23,17.15,35.46-.22,12.29-6.68,22.63-18.62,29.89-11,6.72-26.26,10.25-42.81,9.93A99.91,99.91,0,0,1,62.06,116.82Zm33-85.21a65.17,65.17,0,0,0-12.19-1.44C50,29.54,24.94,54.33,24.5,76.93c-.35,17.86,14.61,31.67,38,36.8a96,96,0,0,0,18.75,2.1c33.84.64,57.74-14.45,58.19-36.7.22-11.52-5.67-23.59-16.14-33A61.17,61.17,0,0,0,95.07,31.61Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
            React.createElement("path", { d: "M86.79,46.5a13,13,0,0,1-3.28.19c-6.24-.32-8.43-3.75-8.69-6.17A28.69,28.69,0,0,0,86.79,46.5Z", transform: "translate(-11.83 -9)", fill: "#fe6dcb" }),
            React.createElement("path", { d: "M86.35,48a30.21,30.21,0,0,1-12.51-6.3,1.42,1.42,0,0,1-.54-1,1.5,1.5,0,0,1,0-.42v-.06a43.13,43.13,0,0,1,.64-7.07A1.64,1.64,0,0,1,75,31.89a1.57,1.57,0,0,1,1.63.45A26.75,26.75,0,0,0,93,39.69a1.61,1.61,0,0,1,1.14.6,1.57,1.57,0,0,1,.32,1.25c-.38,2.38-2.29,5.31-6.55,6.36a7.5,7.5,0,0,1-.83.16,1.88,1.88,0,0,1-.58,0A.22.22,0,0,1,86.35,48Zm.44-1.53ZM76.41,39.75a27,27,0,0,0,10.41,5.13,2.5,2.5,0,0,0,.26-.07h0a5.8,5.8,0,0,0,3.47-2.16,29.52,29.52,0,0,1-13.94-6A30.67,30.67,0,0,0,76.41,39.75Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("path", { d: "M89.47,45.61a8.33,8.33,0,0,1-2,.76,4,4,0,0,1-.67.13,28.48,28.48,0,0,1-11.94-6,1.19,1.19,0,0,1,0-.32,42.16,42.16,0,0,1,.61-6.75A28.39,28.39,0,0,0,89.66,40.9a24.2,24.2,0,0,0,3.18.41A6.06,6.06,0,0,1,89.47,45.61Z", transform: "translate(-11.83 -9)", fill: "#33aef1" }),
                React.createElement("path", { d: "M86.63,46.69a29.42,29.42,0,0,1-11.93-6l-.07-.06v-.1c0-.1,0-.19,0-.29V40.2a43.69,43.69,0,0,1,.61-6.81l.06-.45.29.32a28.46,28.46,0,0,0,14.13,7.39,26.92,26.92,0,0,0,3.15.41h.22l0,.22a6.4,6.4,0,0,1-3.47,4.49,9.28,9.28,0,0,1-2,.76c-.25.07-.47.1-.7.16h-.06S86.66,46.69,86.63,46.69ZM75.05,40.42a28.67,28.67,0,0,0,11.68,5.86s.06,0,.06,0a4.2,4.2,0,0,0,.61-.13,8.76,8.76,0,0,0,1.94-.73h0a6,6,0,0,0,3.21-4,24.74,24.74,0,0,1-3-.38,28.8,28.8,0,0,1-14-7.19,39.32,39.32,0,0,0-.55,6.3v.06A.15.15,0,0,1,75.05,40.42Z", transform: "translate(-11.83 -9)", fill: "#390075" })),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M89.47,45.61c.12-1.62.19-3.21.19-4.74a24.2,24.2,0,0,0,3.18.41A6,6,0,0,1,89.47,45.61Z", transform: "translate(-11.83 -9)", fill: "#fff" })),
            React.createElement("path", { d: "M92.84,41.28a24.2,24.2,0,0,1-3.18-.41,28.13,28.13,0,0,1-14.23-7.45,85.79,85.79,0,0,1,1.88-8.66s3.08,5.06,12.06,8.72c1.11.45,2.32.89,3.63,1.31a35.88,35.88,0,0,1-.13,6.33C92.87,41.22,92.87,41.25,92.84,41.28Z", transform: "translate(-11.83 -9)", fill: "#fdd800" }),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M92.84,41.28a24.2,24.2,0,0,1-3.18-.41,69.11,69.11,0,0,0-.32-7.35c1.11.44,2.32.89,3.63,1.3a36.87,36.87,0,0,1-.13,6.33C92.87,41.22,92.87,41.25,92.84,41.28Z", transform: "translate(-11.83 -9)", fill: "#fff" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M93,34.82c-1.31-.41-2.52-.83-3.63-1.3-9-3.67-12.06-8.73-12.06-8.73a53,53,0,0,1,3-8.69,23.63,23.63,0,0,0,7.39,7.64,17.31,17.31,0,0,0,4.33,2A90,90,0,0,1,93,34.82Z", transform: "translate(-11.83 -9)", fill: "#b177ea" }),
                React.createElement("path", { d: "M93.22,35.11l-.29-.1c-1.24-.38-2.48-.83-3.62-1.3C80.39,30.05,77.18,25,77.15,24.89l-.07-.06,0-.1A57.94,57.94,0,0,1,80.17,16l.19-.38.19.38a23.74,23.74,0,0,0,7.29,7.54,18,18,0,0,0,4.27,2l.12,0,0,.13a86.58,86.58,0,0,1,.92,9.07ZM77.53,24.76c.44.64,3.72,5.22,11.9,8.56,1,.45,2.17.83,3.31,1.21a80,80,0,0,0-.89-8.59,19.43,19.43,0,0,1-4.26-2,23.84,23.84,0,0,1-7.23-7.35A58.73,58.73,0,0,0,77.53,24.76Z", transform: "translate(-11.83 -9)", fill: "#390075" })),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M93,34.82c-1.31-.41-2.52-.83-3.63-1.3a66.44,66.44,0,0,0-1.66-9.81,17.65,17.65,0,0,0,4.33,2A81.29,81.29,0,0,1,93,34.82Z", transform: "translate(-11.83 -9)", fill: "#fff" })),
            React.createElement("path", { d: "M92.11,25.56a17.31,17.31,0,0,1-4.33-2,23.45,23.45,0,0,1-7.39-7.64,14.42,14.42,0,0,1,3-4.58,2.75,2.75,0,0,1,2.1-.89C88.61,10.53,90.9,17.85,92.11,25.56Z", transform: "translate(-11.83 -9)", fill: "#fe6dcb" }),
            React.createElement("g", { opacity: "0.6" },
                React.createElement("path", { d: "M92.49,25.88a17.48,17.48,0,0,1-4.33-2A60.84,60.84,0,0,0,83.8,11.62a2.83,2.83,0,0,1,2.1-.9C89,10.85,91.28,18.17,92.49,25.88Z", transform: "translate(-11.83 -9)", fill: "#fff" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M91.79,27.05s-.06,0-.13,0c-8.15-2.58-12.29-10-12.44-10.28a1.26,1.26,0,0,1,0-1.18c2-4.33,4.08-6.36,6.34-6.24,4.39.23,6.68,9,7.83,16.27a1.3,1.3,0,0,1-.45,1.18A1.41,1.41,0,0,1,91.79,27.05Zm-10-11a22,22,0,0,0,8.59,7.7c-1.59-8.53-3.82-11.77-5-11.84C84.63,11.87,83.35,13,81.83,16Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
                React.createElement("path", { d: "M92.71,36.09s-.06,0-.09,0c-12.1-3.72-16.24-10.31-16.4-10.57a1.4,1.4,0,0,1-.16-1,57.41,57.41,0,0,1,3.12-8.92,1.23,1.23,0,0,1,1.12-.73,1.34,1.34,0,0,1,1.18.67c0,.06,3.82,6.81,11,9.07a1.34,1.34,0,0,1,.89,1,84.25,84.25,0,0,1,1,9.2,1.21,1.21,0,0,1-.51,1.08A1.56,1.56,0,0,1,92.71,36.09Zm-14-11.55c1,1.34,4.74,5.54,12.89,8.43-.16-2-.38-4.13-.7-6.23a23.27,23.27,0,0,1-10.32-7.93C80,20.5,79.31,22.44,78.71,24.54Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
                React.createElement("path", { d: "M88.7,42a29.5,29.5,0,0,1-14.2-7.67,1.32,1.32,0,0,1-.31-1.08,81,81,0,0,1,1.91-8.78,1.23,1.23,0,0,1,1.05-.93,1.26,1.26,0,0,1,1.27.61c0,.06,3.88,6,15,9.45a1.33,1.33,0,0,1,.92,1.18,42,42,0,0,1-.12,6.56c0,.09,0,.19,0,.25a1.26,1.26,0,0,1-1.33,1A26.59,26.59,0,0,1,88.7,42Zm4.14-.73ZM76.83,33a27.41,27.41,0,0,0,14.86,6.9c.07-1.14.1-2.58,0-4.1-7.42-2.45-11.69-6-13.82-8.18C77.5,29.41,77.11,31.26,76.83,33Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
                React.createElement("path", { d: "M86.41,47.74A30.07,30.07,0,0,1,74,41.54a1.17,1.17,0,0,1-.45-.83,1.67,1.67,0,0,1,0-.38v-.07a42.29,42.29,0,0,1,.64-7,1.27,1.27,0,0,1,2.19-.67A27.25,27.25,0,0,0,92.93,40a1.33,1.33,0,0,1,.93.48,1.25,1.25,0,0,1,.25,1c-.35,2.29-2.23,5.09-6.33,6.11-.29.06-.54.13-.8.16a1.29,1.29,0,0,1-.48,0S86.44,47.74,86.41,47.74Zm.38-1.24ZM76.1,39.91A27.64,27.64,0,0,0,86.82,45.2c.1,0,.23,0,.35-.07h0a6,6,0,0,0,4-2.7,29.48,29.48,0,0,1-14.71-6.37A27,27,0,0,0,76.1,39.91Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
                React.createElement("path", { d: "M80.81,47.65c-4.94-1.08-7-4.27-7.26-7a1.31,1.31,0,0,1,.7-1.28,1.26,1.26,0,0,1,1.43.16A27.24,27.24,0,0,0,87,45.23l.13,0a1.3,1.3,0,0,1,1,1.27,1.28,1.28,0,0,1-1,1.25,14.86,14.86,0,0,1-3.57.19A17.29,17.29,0,0,1,80.81,47.65Z", transform: "translate(-11.83 -9)", fill: "#390075" })),
            React.createElement("path", { d: "M80.84,47.93c-4.84-1-7.29-4.2-7.58-7.22,0-.13,0-.26,0-.38v-.07a29.55,29.55,0,0,1,.19-3.88c.1-.8.19-1.62.32-2.48l0-.16c0-.19.07-.35.1-.54a81.62,81.62,0,0,1,1.91-8.82,51.53,51.53,0,0,1,3.15-8.94C81,11,83.16,8.88,85.55,9c4.58.25,6.94,9.1,8.12,16.52a89.78,89.78,0,0,1,1,9.23,41.41,41.41,0,0,1-.13,6.62c0,.09,0,.19,0,.25h0c0,.1,0,.22-.06.32a1.57,1.57,0,0,0,0,.16,1,1,0,0,0-.07.29c0,.06,0,.12-.06.19a1.18,1.18,0,0,1-.1.25c0,.07,0,.13-.06.16l-.19.41a.15.15,0,0,1-.06.1,1.9,1.9,0,0,0-.16.32L93.6,44l0,0-.19.28-.1.16a2.94,2.94,0,0,1-.25.35s0,.07-.06.1-.23.25-.35.38l-.07.06-.35.35-.09.07,0,0c-.13.1-.23.22-.35.32l-.1.06a10.22,10.22,0,0,1-1,.7l-.06,0-.1,0-.22.12c-.06,0-.1.07-.13.07l-.22.09-.45.19-.19.1c-.13.06-.28.09-.44.16l-.07,0c-.06,0-.12,0-.19.06s-.35.1-.54.16a.29.29,0,0,1-.16,0,6.51,6.51,0,0,1-.79.16,14.52,14.52,0,0,1-3.6.19A12.47,12.47,0,0,1,80.84,47.93Zm4.61-35.71h-.09c-.51,0-1.88.89-3.57,4.58a53.26,53.26,0,0,0-3,8.44A85.88,85.88,0,0,0,77,33.74a3.44,3.44,0,0,0-.07.51l0,.16c-.13.82-.22,1.62-.28,2.35a24,24,0,0,0-.2,3.44v.22c.2,2,2.2,4.46,7.17,4.71A11.65,11.65,0,0,0,86.47,45a4,4,0,0,0,.58-.12l.09,0a1.68,1.68,0,0,0,.38-.12l.16-.07A1.24,1.24,0,0,0,88,44.5l.1,0a3,3,0,0,0,.31-.15l.23-.1c.06,0,.09-.06.12-.06l.07,0a.1.1,0,0,1,.06,0,5.51,5.51,0,0,0,.67-.44.1.1,0,0,1,.06,0l.23-.2h0l0,0a1.14,1.14,0,0,0,.22-.22l0,0c.06-.1.15-.16.22-.26l0-.06c0-.06.1-.13.13-.19l0-.07a.8.8,0,0,0,.13-.19l.06-.09a1.58,1.58,0,0,0,.1-.16l0-.06a1.85,1.85,0,0,1,.09-.23l0-.09c0-.07,0-.1.07-.16l0-.1s0-.09,0-.12l0-.1a1.23,1.23,0,0,1,0-.16.11.11,0,0,1,0-.09v0a40.4,40.4,0,0,0,.13-6.08A82,82,0,0,0,90.45,26C89,16.33,86.63,12.47,85.45,12.22ZM91,44.56Zm.29-3.6Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
            React.createElement("path", { d: "M105.6,41.92S111,21.51,119.39,22.06s12.92,29.92,12,36.86C131.42,58.92,118.49,59,105.6,41.92Z", transform: "translate(-11.83 -9)", fill: "#fff" }),
            React.createElement("path", { d: "M105.09,41.79a8.09,8.09,0,0,1,.19-4.36,23.38,23.38,0,0,1,1.53-4c.61-1.27,1.18-2.58,1.85-3.85a37.34,37.34,0,0,1,2.23-3.72,17.74,17.74,0,0,1,3-3.38,8.31,8.31,0,0,1,4.58-2h1l.39,0a5,5,0,0,1,.73.16,2.36,2.36,0,0,1,.67.25,7.35,7.35,0,0,1,2.16,1.47,15.29,15.29,0,0,1,2.74,3.69,40.69,40.69,0,0,1,3.21,8,81.28,81.28,0,0,1,2,8.18c.54,2.73,1,5.5,1.27,8.3.06.7.16,1.4.19,2.11s.19,1.4.26,2.1a8.31,8.31,0,0,1-.1,2.16A3.94,3.94,0,0,1,131.9,59a.66.66,0,0,1-1,0l-.06-.06,0-.07a5.49,5.49,0,0,1-.92-2,10.19,10.19,0,0,1-.19-2c0-.67,0-1.34,0-2l-.19-2c-.29-2.67-.73-5.37-1.24-8s-1.15-5.28-1.94-7.86a39.93,39.93,0,0,0-3-7.35,11.77,11.77,0,0,0-2.13-2.93A4.08,4.08,0,0,0,120,23.9a1,1,0,0,0-.29-.09c-.09,0-.19-.07-.28-.07l-.16,0h-.54a5.41,5.41,0,0,0-2.84,1.34,15,15,0,0,0-2.45,2.77,33.52,33.52,0,0,0-3.63,7c-.44,1.27-.89,2.54-1.43,3.75a9.52,9.52,0,0,1-2.29,3.54l0,0a.61.61,0,0,1-.86,0A.84.84,0,0,0,105.09,41.79Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", null,
                    React.createElement("path", { d: "M113,40.61s1.91-10.15,5.51-9.71,6.08,15.28,5.82,18.75C124.35,49.62,118.84,49.4,113,40.61Z", transform: "translate(-11.83 -9)", fill: "#fe6dcb" }),
                    React.createElement("path", { d: "M123.62,49.75c-1.69-.38-6.11-2-10.79-9l-.06-.06,0-.1c.06-.41,2-10.34,5.73-9.87s6.27,15.63,6,19v.23h-.22C124.29,49.84,124,49.81,123.62,49.75Zm-10.38-9.2c5,7.54,9.84,8.69,10.92,8.85.16-3.92-2.35-17.57-5.54-18.27a.28.28,0,0,1-.13,0C115.31,30.71,113.43,39.59,113.24,40.55Z", transform: "translate(-11.83 -9)", fill: "#390075" })),
                React.createElement("path", { d: "M123.4,51.09c-2-.42-6.82-2.2-11.72-9.62a1.53,1.53,0,0,1-.22-1.18c.51-2.73,2.55-11.55,7.26-11,1.49.19,3.72,1.37,5.73,9.43a44.67,44.67,0,0,1,1.52,11,1.55,1.55,0,0,1-1.65,1.46A3.86,3.86,0,0,1,123.4,51.09Zm-8.69-10.83c3.21,4.65,6.2,6.53,8,7.29a57.82,57.82,0,0,0-1.28-7.67c-1.33-5.6-2.73-7.26-3.12-7.42C117.41,32.37,115.63,35.87,114.71,40.26Z", transform: "translate(-11.83 -9)", fill: "#390075" })),
            React.createElement("path", { d: "M60.59,39.53S57.41,18.65,49,18.33,33,46.72,33.16,53.7C33.16,53.7,46,55.06,60.59,39.53Z", transform: "translate(-11.83 -9)", fill: "#fff" }),
            React.createElement("path", { d: "M60.09,39.59a10.35,10.35,0,0,1-1.91-3.75c-.42-1.27-.7-2.61-1-3.88a30.55,30.55,0,0,0-1.24-3.79,28.26,28.26,0,0,0-1.66-3.57,15.79,15.79,0,0,0-2.16-3A5.33,5.33,0,0,0,49.42,20c-.13,0-.22,0-.35,0l-.16,0h-.16l-.28,0a2.21,2.21,0,0,1-.32.07,4.68,4.68,0,0,0-1.31.7,12.66,12.66,0,0,0-2.45,2.67,39.61,39.61,0,0,0-3.72,7c-1.05,2.48-2,5-2.77,7.61s-1.5,5.22-2.1,7.86c-.16.67-.29,1.31-.42,2s-.15,1.33-.25,2a8,8,0,0,1-.41,1.94A5.35,5.35,0,0,1,33.6,53.6l0,0a.66.66,0,0,1-1,.07l-.07-.07a3.89,3.89,0,0,1-.89-2.23,7.09,7.09,0,0,1,.13-2.16c.16-.7.35-1.37.48-2.07s.28-1.37.41-2.07c.6-2.74,1.34-5.44,2.16-8.12s1.79-5.31,2.87-7.92a42,42,0,0,1,4-7.58,15,15,0,0,1,3.12-3.37,6.93,6.93,0,0,1,2.32-1.21,6.36,6.36,0,0,1,.7-.16,6.15,6.15,0,0,1,.74-.06H49c.13,0,.22,0,.35,0l.67.09a8.73,8.73,0,0,1,4.33,2.52A17.13,17.13,0,0,1,57,23,36.28,36.28,0,0,1,58.84,27c.51,1.33,1,2.67,1.44,4a21,21,0,0,1,1.08,4.1,8.23,8.23,0,0,1-.29,4.37.62.62,0,0,1-.79.35.93.93,0,0,1-.19-.2Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", null,
                    React.createElement("path", { d: "M53.69,37.72s-1.18-10.51-5.13-10.54-7.92,14.58-8,18.11C40.61,45.26,46.59,45.77,53.69,37.72Z", transform: "translate(-11.83 -9)", fill: "#fe6dcb" }),
                    React.createElement("path", { d: "M40.38,45.48v-.19c0-3.18,3-14.19,6.27-17.38A2.85,2.85,0,0,1,48.56,27c4.08.06,5.29,10.31,5.35,10.72v.1l-.06.06c-7.07,8.06-13,7.68-13.28,7.64Zm8.6-18a1.4,1.4,0,0,0-.42,0,2.49,2.49,0,0,0-1.62.83c-3.09,3.06-6,13.5-6.11,16.87,1.08,0,6.46-.41,12.63-7.42C53.34,36.63,52.19,28.14,49,27.44Z", transform: "translate(-11.83 -9)", fill: "#390075" })),
                React.createElement("path", { d: "M40.26,46.82A1.58,1.58,0,0,1,39,45.26c0-3.34,3-14.77,6.69-18.33a4,4,0,0,1,2.89-1.34c5.1.06,6.47,10,6.69,12a1.66,1.66,0,0,1-.38,1.24c-7.55,8.59-14.14,8.12-14.42,8.12C40.41,46.85,40.32,46.85,40.26,46.82Zm8.43-18h-.13c-.32,0-1.91,1.15-3.94,6.72a49.8,49.8,0,0,0-2.2,8c2-.45,5.57-1.88,9.61-6.3C51.46,33.23,50,29.06,48.69,28.77Z", transform: "translate(-11.83 -9)", fill: "#390075" })),
            React.createElement("path", { d: "M39.08,69.74c-2-1-4-2-6-2.8a63.45,63.45,0,0,0-6.21-2.17,62.58,62.58,0,0,0-6.4-1.49c-1.08-.23-2.16-.35-3.27-.54-.55-.13-1.12-.13-1.66-.23s-1.11-.16-1.69-.25c.54-.13,1.12-.22,1.69-.32a13.71,13.71,0,0,1,1.69-.22,23.23,23.23,0,0,1,3.44,0,28.63,28.63,0,0,1,6.78,1.14,29.75,29.75,0,0,1,6.33,2.67A23,23,0,0,1,39.08,69.74Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
            React.createElement("path", { d: "M38.19,75.4c-2.23-.47-4.4-.86-6.59-1.11A57.83,57.83,0,0,0,25,73.84a65.4,65.4,0,0,0-6.56.26c-1.11.06-2.19.22-3.31.35-.57,0-1.11.16-1.65.22s-1.12.16-1.69.22c.51-.25,1-.5,1.53-.73A14.6,14.6,0,0,1,15,73.53a28.65,28.65,0,0,1,3.28-1,29.69,29.69,0,0,1,13.65.19A21,21,0,0,1,38.19,75.4Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
            React.createElement("path", { d: "M38.47,82.73a55.79,55.79,0,0,0-6.65.38,53.79,53.79,0,0,0-6.49,1A59.73,59.73,0,0,0,19,85.81c-1,.32-2.1.7-3.15,1.08a14,14,0,0,0-1.56.61c-.51.19-1,.41-1.59.57.45-.38.89-.7,1.34-1a12.14,12.14,0,0,1,1.4-1,26.43,26.43,0,0,1,3-1.66,29.39,29.39,0,0,1,6.49-2.2,31.37,31.37,0,0,1,6.85-.63A21.57,21.57,0,0,1,38.47,82.73Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
            React.createElement("path", { d: "M128.46,71a20.65,20.65,0,0,1,5.76-3.66,29.51,29.51,0,0,1,6.56-2,28.56,28.56,0,0,1,6.84-.48,24.2,24.2,0,0,1,3.41.38,14.67,14.67,0,0,1,1.65.38c.54.16,1.11.29,1.62.48l-1.68.1c-.58,0-1.12,0-1.69.06-1.11.06-2.23.09-3.31.22a62.9,62.9,0,0,0-6.49.86,53.31,53.31,0,0,0-6.37,1.56A59.87,59.87,0,0,0,128.46,71Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
            React.createElement("path", { d: "M128.81,76.77a21.24,21.24,0,0,1,6.52-2,29.32,29.32,0,0,1,6.88-.26A29,29,0,0,1,149,75.82a27.2,27.2,0,0,1,3.18,1.24,16,16,0,0,1,1.53.8c.51.28,1,.57,1.46.89a14.69,14.69,0,0,1-1.65-.39c-.54-.12-1.09-.28-1.63-.38-1.08-.22-2.16-.48-3.24-.67a60.27,60.27,0,0,0-6.5-.86,64.87,64.87,0,0,0-6.55-.19C133.26,76.36,131.07,76.52,128.81,76.77Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
            React.createElement("path", { d: "M127.79,84.06a21.31,21.31,0,0,1,6.81-.54,28.83,28.83,0,0,1,6.75,1.27,27.63,27.63,0,0,1,6.27,2.81,22.91,22.91,0,0,1,2.83,1.94c.45.35.89.73,1.31,1.11s.83.76,1.24,1.18c-.54-.22-1.05-.48-1.53-.73s-1-.54-1.49-.74c-1-.47-2-1-3-1.36a59.77,59.77,0,0,0-6.14-2.3,68.7,68.7,0,0,0-13-2.64Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", { opacity: "0.2" },
                    React.createElement("path", { d: "M100,87.91c-2.67,3.31-5.5,4.36-8.08,4.27-5.09-.16-9.23-4.74-9.23-4.74-3.47,3.43-6.56,4.74-9.11,4.9-4.26.28-7.13-2.52-8.27-3.85,10.22,1.56,15-3.89,15-3.89L85,84.51C89.62,91.38,99.71,88,100,87.91Z", transform: "translate(-11.83 -9)", fill: "#390075" })),
                React.createElement("path", { d: "M92,92.18a27.53,27.53,0,0,1-3.25,7c-1.59,2.36-3.53,4.14-5.7,4.17s-4.23-1.65-5.89-4a26.86,26.86,0,0,1-3.5-7c2.58-.16,5.64-1.46,9.11-4.9C82.72,87.47,86.86,92,92,92.18Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
                React.createElement("g", null,
                    React.createElement("path", { d: "M88.7,99.25c-1.59,2.35-3.53,4.13-5.7,4.17s-4.23-1.66-5.89-4a6.14,6.14,0,0,1,5.73-4A6.06,6.06,0,0,1,88.7,99.25Z", transform: "translate(-11.83 -9)", fill: "#fb64c0" }),
                    React.createElement("path", { d: "M82,103.48c-1.68-.38-3.4-1.72-5-4l-.07-.06,0-.1a6.45,6.45,0,0,1,11.94-.19l0,.1,0,.06C87,102.08,85,103.54,83,103.61A4.26,4.26,0,0,1,82,103.48Zm-4.67-4.11c1.3,1.79,3.34,3.89,5.69,3.82s4.27-2.19,5.51-4a6.09,6.09,0,0,0-11.2.19Z", transform: "translate(-11.83 -9)", fill: "#390075" })),
                React.createElement("g", null,
                    React.createElement("path", { d: "M77.59,80.18c1-1.4,8.53-1.78,9.84-.19s-2.33,5.7-4.81,5.73S76.45,81.74,77.59,80.18Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
                    React.createElement("path", { d: "M81.63,87.21a9,9,0,0,1-5.28-4.29c-1-1.88-.44-3.06,0-3.63h0c1.08-1.5,4.33-1.82,6.14-1.85,2.17-.06,5,.16,6.18,1.62a3.35,3.35,0,0,1,.19,3.67c-1,2.19-3.76,4.58-6.18,4.64C82.3,87.31,82,87.28,81.63,87.21ZM79,81.07a5.1,5.1,0,0,0,1.18,1.69,4.41,4.41,0,0,0,2.42,1.4,4.49,4.49,0,0,0,2.58-1.63,4.08,4.08,0,0,0,1-1.59C85,80.34,80.39,80.43,79,81.07Zm7.26,0Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
                    React.createElement("g", null,
                        React.createElement("ellipse", { cx: "82.59", cy: "80.05", rx: "4.07", ry: "1.08", transform: "translate(-13.31 -7.45) rotate(-1.07)", fill: "#fff" }),
                        React.createElement("path", { d: "M79.82,81.1c-.92-.19-1.53-.51-1.56-1s.45-.74,1.34-1a12.57,12.57,0,0,1,2.93-.38,11.51,11.51,0,0,1,3,.25c.89.22,1.37.54,1.37.92h0c0,.86-2.14,1.34-4.27,1.37A9.46,9.46,0,0,1,79.82,81.1Zm5.41-1.72a11.39,11.39,0,0,0-2.67-.22,13.64,13.64,0,0,0-2.83.35c-.83.22-1.06.48-1.06.61,0,.31,1.34.85,3.92.79s3.88-.64,3.88-1c0-.1-.22-.35-1-.55A.44.44,0,0,1,85.23,79.38Z", transform: "translate(-11.83 -9)", fill: "#390075" }))),
                React.createElement("path", { d: "M70.81,93.61a12.33,12.33,0,0,1-6.55-4.1l-.07-.07a5,5,0,0,1-.63-.86A1.44,1.44,0,1,1,66,87h0s.13.19.39.51l.06.06c.92,1.09,3.44,3.6,7.07,3.35q3.92-.3,8.18-4.49a1.45,1.45,0,0,1,1-.42,1.41,1.41,0,0,1,1,.48s3.78,4.11,8.21,4.27c2.51.09,4.84-1.18,6.91-3.73l0,0a0,0,0,0,1,0,0l.51-.67A1.44,1.44,0,1,1,101.75,88c-.22.28-.41.57-.63.86,0,0,0,.06-.07.09-2.64,3.25-5.73,4.84-9.2,4.74-4.1-.12-7.54-2.7-9.2-4.16-3,2.67-6,4.13-9,4.36A13.7,13.7,0,0,1,70.81,93.61Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
                React.createElement("path", { d: "M81.73,104.72c-2-.45-4-1.94-5.79-4.46a27.82,27.82,0,0,1-3.7-7.44,1.59,1.59,0,0,1,.16-1.25,1.45,1.45,0,0,1,1.09-.63q3.92-.28,8.18-4.49a1.44,1.44,0,0,1,2.07.06s3.78,4.11,8.21,4.27a1.33,1.33,0,0,1,1.11.6,1.41,1.41,0,0,1,.22,1.24A27.22,27.22,0,0,1,89.85,100c-2.07,3.09-4.46,4.78-6.88,4.81A5.39,5.39,0,0,1,81.73,104.72Zm-6.17-11.2a23.44,23.44,0,0,0,2.73,5.06c1.59,2.19,3.28,3.4,4.71,3.37s3-1.27,4.52-3.53a24.61,24.61,0,0,0,2.52-5,.13.13,0,0,1-.1,0,17,17,0,0,1-7.25-4A16.9,16.9,0,0,1,75.56,93.52Z", transform: "translate(-11.83 -9)", fill: "#390075" })),
            React.createElement("path", { d: "M110.82,65.38a29.66,29.66,0,0,0-3.43,1.4,19.25,19.25,0,0,0-3.09,1.84c-.48.32-.92.74-1.37,1.09l-.64.6c-.09.1-.22.19-.32.32l-.28.32a13.93,13.93,0,0,0-2,2.83l-2-2a.89.89,0,0,1,.22-.13,1.56,1.56,0,0,1,.22-.1c.13-.06.29-.09.42-.16a8,8,0,0,1,.79-.25,9.06,9.06,0,0,1,1.66-.35,13.34,13.34,0,0,1,3.34-.1,11,11,0,0,1,3.21.8,11.38,11.38,0,0,1,2.8,1.59.52.52,0,0,1-.44.92l-.07,0c-.47-.13-.92-.32-1.4-.41s-.92-.22-1.4-.29a11.69,11.69,0,0,0-2.77-.16,12.34,12.34,0,0,0-2.7.42,9.41,9.41,0,0,0-1.31.41c-.22.1-.41.16-.6.25s-.19.1-.29.13-.09,0-.12.07l-.1.06,0,0a1.49,1.49,0,0,1-2-2,16.69,16.69,0,0,1,2.42-3.54,14.47,14.47,0,0,1,1.56-1.46,13.07,13.07,0,0,1,1.78-1.18,14.67,14.67,0,0,1,3.89-1.56,12.51,12.51,0,0,1,4.1-.35.53.53,0,0,1,.48.57.51.51,0,0,1-.35.45Z", transform: "translate(-11.83 -9)", fill: "#390075" }),
            React.createElement("g", null,
                React.createElement("g", null,
                    React.createElement("ellipse", { cx: "61.27", cy: "70.23", rx: "9.13", ry: "6.43", transform: "translate(-24.48 118) rotate(-86.42)", fill: "#390075" }),
                    React.createElement("path", { d: "M60,79.41c-3.28-.7-5.6-4.8-5.32-9.61.32-5.12,3.54-9.1,7.2-8.88a5.79,5.79,0,0,1,4.52,3,11.47,11.47,0,0,1,1.49,6.65h0c-.31,5.12-3.53,9.1-7.19,8.88A4.15,4.15,0,0,1,60,79.41Zm2.51-18a3.76,3.76,0,0,0-.66-.1c-3.44-.22-6.5,3.6-6.78,8.53s2.22,9.11,5.66,9.3,6.5-3.6,6.78-8.53h0A10.89,10.89,0,0,0,66,64.14,5.46,5.46,0,0,0,62.5,61.4Z", transform: "translate(-11.83 -9)", fill: "#390075" })),
                React.createElement("g", null,
                    React.createElement("ellipse", { cx: "63.05", cy: "68.21", rx: "3.06", ry: "1.94", transform: "translate(-20.8 117.88) rotate(-86.42)", fill: "#fff" }),
                    React.createElement("path", { d: "M62.63,71.43c-1.05-.23-1.81-1.66-1.72-3.35a4.45,4.45,0,0,1,.74-2.23A1.9,1.9,0,0,1,63.24,65a1.85,1.85,0,0,1,1.46,1.09,4.14,4.14,0,0,1,.45,2.29C65,70.12,64,71.52,62.82,71.46,62.76,71.46,62.7,71.43,62.63,71.43Zm.77-6.08c-.07,0-.1,0-.16,0a1.54,1.54,0,0,0-1.28.74,4,4,0,0,0-.66,2c-.1,1.59.6,2.93,1.59,3s1.84-1.18,1.94-2.77h0a3.73,3.73,0,0,0-.42-2.1A1.67,1.67,0,0,0,63.4,65.35Z", transform: "translate(-11.83 -9)", fill: "#390075" })))),
        React.createElement("g", null,
            React.createElement("path", { d: "M173.59,95.56c-1.4,0-2.11-1.66-2.11-5,0-1.73,0-3.11.08-4.13a273.48,273.48,0,0,1,4.71-41c.28-1.53.61-3.13,1-4.78,1-4.24,2.19-6.36,3.6-6.36q1.21,0,1.53,2.07a21.1,21.1,0,0,1,.19,3,53.12,53.12,0,0,1-.31,5.49c-.2,2-.37,3.66-.49,5q-.66,7.5-1.34,14.08,5.85-8.49,15.61-20.74c1.32-1.66,2.57-3.17,3.75-4.55Q203.7,34,205.53,34c.79,0,1.19.48,1.19,1.45q0,1.72-1.95,5.13-1.46,2.52-3.37,5.55a146.84,146.84,0,0,1-15.88,20.93l-1.22,1.35c-.33.37-.79.84-1.38,1.4,1.69,1.68,2.82,2.79,3.41,3.33q2.79,2.49,6.2,6.2a68.62,68.62,0,0,1,7.23,9.33,4,4,0,0,1,.65,2,2.89,2.89,0,0,1-1.15,2,3,3,0,0,1-1.91.84q-2.07,0-10.18-9.3a102.08,102.08,0,0,1-7.92-9.75q-.69,5.31-1.42,9.9c-.15,1-.31,2.2-.49,3.47s-.37,2.33-.58,3.19C176.07,94.07,175,95.56,173.59,95.56Z", transform: "translate(-11.83 -9)", fill: textColor }),
            React.createElement("path", { d: "M211.66,93.26c-.92,0-1.62-.65-2.11-2-.92-2.39-1.38-6.06-1.38-11a91,91,0,0,1,2.18-20.16c.8-3.44,2.07-5.17,3.83-5.17a1.94,1.94,0,0,1,2.1,1.92,12.9,12.9,0,0,1,.12,1.76q0,4.27-.77,13.88Q214.79,83,214.79,89a8.26,8.26,0,0,1-.27,2.27,3,3,0,0,1-1.68,1.67A2.72,2.72,0,0,1,211.66,93.26Zm3.06-42.12c-1.94,0-2.91-1.13-2.91-3.41a8.79,8.79,0,0,1,1.05-4.36,3.66,3.66,0,0,1,3.46-1.87c1.89,0,2.83,1,2.83,3.14A8.44,8.44,0,0,1,218,49.28,3.68,3.68,0,0,1,214.72,51.14Z", transform: "translate(-11.83 -9)", fill: textColor }),
            React.createElement("path", { d: "M234.5,93.38a1.83,1.83,0,0,1-1.46-.9,6.3,6.3,0,0,1-.95-2,22.06,22.06,0,0,1-1-6.09q-.15-2.94-.15-5.7a200.24,200.24,0,0,1,2.26-29.3H228.8a7.85,7.85,0,0,1-2.3-.31,1.76,1.76,0,0,1-1.26-1.91q0-2,3.63-2.83a41,41,0,0,1,5.24-.81l.31-1.79c.84-4.7,2.23-7,4.17-7q2.1,0,2.1,3.9c0,.94-.07,2.5-.23,4.67q6,0,8.12,1.11a1.61,1.61,0,0,1,.84,1.6,2.07,2.07,0,0,1-1.27,2.07c-1.25.56-4,1-8.18,1.19Q238.71,62.16,236.56,88a13.35,13.35,0,0,1-.73,4.25C235.43,93,235,93.38,234.5,93.38Z", transform: "translate(-11.83 -9)", fill: textColor }),
            React.createElement("path", { d: "M255.65,93.38a1.82,1.82,0,0,1-1.45-.9,6.55,6.55,0,0,1-1-2,22.43,22.43,0,0,1-1-6.09q-.15-2.94-.15-5.7a201.58,201.58,0,0,1,2.25-29.3H250a7.83,7.83,0,0,1-2.29-.31,1.76,1.76,0,0,1-1.27-1.91c0-1.33,1.22-2.27,3.64-2.83a41,41,0,0,1,5.24-.81l.31-1.79c.84-4.7,2.23-7,4.17-7q2.1,0,2.1,3.9c0,.94-.08,2.5-.23,4.67q6,0,8.11,1.11a1.61,1.61,0,0,1,.84,1.6,2.08,2.08,0,0,1-1.26,2.07q-1.87.84-8.19,1.19-1.26,12.88-3.4,38.71a13.35,13.35,0,0,1-.73,4.25C256.58,93,256.14,93.38,255.65,93.38Z", transform: "translate(-11.83 -9)", fill: textColor }),
            React.createElement("path", { d: "M279.91,114a11.16,11.16,0,0,1-9.72-5,12.16,12.16,0,0,1-1.3-2.41,5.44,5.44,0,0,1-.46-1.76,1.38,1.38,0,0,1,.58-1.19,1.44,1.44,0,0,1,.95-.34c.61,0,1.51.56,2.68,1.68a12.78,12.78,0,0,0,2.72,2,9.26,9.26,0,0,0,4.32.92,5.68,5.68,0,0,0,3.94-1.53q7.23-6.58,9.95-35L292.5,73.9a43.61,43.61,0,0,1-7,11.37q-4.36,4.94-9.61,4.93a7,7,0,0,1-4.4-1.38q-3.51-2.71-3.52-9.48a60,60,0,0,1,1.61-12.9Q272.15,55,275.05,55c.61,0,1,.4,1.26,1.19a10.17,10.17,0,0,1,.19,2.41,44.72,44.72,0,0,1-.8,7.46,69.84,69.84,0,0,0-1.19,11.44,12.12,12.12,0,0,0,.6,4.65,1.79,1.79,0,0,0,1.62,1.24q4,0,9-8.49a161.56,161.56,0,0,0,7.49-15.46Q294.26,57,295,54.66c.51-1.53,1.38-2.3,2.6-2.3q2.19,0,2.49,4.6c.1,1.37.15,3.34.15,5.89a158,158,0,0,1-1.68,22.91q-2.79,18.87-11.1,25.49A11.87,11.87,0,0,1,279.91,114Z", transform: "translate(-11.83 -9)", fill: textColor }),
            React.createElement("path", { d: "M312.58,92.61a1.69,1.69,0,0,1-1.68-1.3,14.89,14.89,0,0,1-.54-4.7,210.25,210.25,0,0,1,4.9-44.12q-10.33,1.38-11.13,1.38c-1.71,0-2.57-.73-2.57-2.18,0-1.2,1.18-2.17,3.52-2.91a68.09,68.09,0,0,1,13.59-2.68,77.65,77.65,0,0,1,7.76-.42q11.06,0,11.06,3,0,1.68-1.95,2.07a38.33,38.33,0,0,1-4.06.38q-5.85.3-11.25.84,0,3.53-.19,6.43-1.64,23.42-3.71,36.92Q315.22,92.6,312.58,92.61Z", transform: "translate(-11.83 -9)", fill: textColor }),
            React.createElement("path", { d: "M339.29,92.65a11.86,11.86,0,0,1-6.89-1.87A12.46,12.46,0,0,1,327.08,83a24.38,24.38,0,0,1-.57-5.24,26.21,26.21,0,0,1,6.35-17.45,16.15,16.15,0,0,1,6.27-4.66,14.39,14.39,0,0,1,5.55-1.11,9.19,9.19,0,0,1,5.64,1.76,5.75,5.75,0,0,1,2.4,4.93q3.06,1,3.06,10.14a26.05,26.05,0,0,1-.42,4.63,22.63,22.63,0,0,1-6.43,12.59,14.84,14.84,0,0,1-4.46,3A12.81,12.81,0,0,1,339.29,92.65Zm.42-6.77a6.91,6.91,0,0,0,5-1.91,15.77,15.77,0,0,0,3.94-5.86,26.31,26.31,0,0,0,2-9.49,14.49,14.49,0,0,0-1.22-6.35,4.18,4.18,0,0,0-4-2.48,8.75,8.75,0,0,0-4.17,1.11,11.23,11.23,0,0,0-3.64,3.17,19.74,19.74,0,0,0-4.2,12.32c0,4.08,1.07,6.93,3.21,8.53A4.94,4.94,0,0,0,339.71,85.88Z", transform: "translate(-11.83 -9)", fill: textColor }),
            React.createElement("path", { d: "M389.37,93.68c-1,0-2.21-.76-3.64-2.29q-2.75-3-4-4.17-8.76-8.46-10.9-11.36Q369.13,90,368.1,92a2.6,2.6,0,0,1-2.53,1.23c-1.3,0-2.08-.41-2.33-1.23a10.11,10.11,0,0,1-.19-2.45,206.33,206.33,0,0,1,1.79-25.25q1.85-14.58,3.75-24.33,1.11-5.62,4.06-5.62c1.35,0,2,.93,2,2.79a162.55,162.55,0,0,1-1.34,17.25L371.58,69.7a71.21,71.21,0,0,1,5.89-7.77,47.26,47.26,0,0,1,6-6q4.08-3.33,6.77-3.33a1.31,1.31,0,0,1,1.49,1.46,4.47,4.47,0,0,1-1,2.83,23.5,23.5,0,0,1-1.57,1.8c-.71.71-2.41,2.66-5.08,5.85q-3.72,4.39-7.2,8.15a61.55,61.55,0,0,1,6.39,5.78A50.61,50.61,0,0,1,390.17,87a8.8,8.8,0,0,1,1.61,4.28V92c0,.41-.41.85-1.23,1.34A2.37,2.37,0,0,1,389.37,93.68Z", transform: "translate(-11.83 -9)", fill: textColor }),
            React.createElement("path", { d: "M408.11,93.65a10.28,10.28,0,0,1-9.75-6,21,21,0,0,1-2.26-9.91A33.23,33.23,0,0,1,398.86,65a23.87,23.87,0,0,1,6.27-8.91,14.69,14.69,0,0,1,10.14-3.64,8.38,8.38,0,0,1,6.08,2.22,7.22,7.22,0,0,1,2.14,5.51,11.68,11.68,0,0,1-3,7.65,21.46,21.46,0,0,1-6.05,5,20.88,20.88,0,0,1-10.32,3,9,9,0,0,1-1.23-.08,17.18,17.18,0,0,0-.11,2,16.89,16.89,0,0,0,.95,5.89q1.58,4.22,5.4,4.21a17.33,17.33,0,0,0,4-.42,13.59,13.59,0,0,0,3.72-1.57c2.27-1.35,3.78-2,4.55-2a.85.85,0,0,1,.72.37,1.23,1.23,0,0,1,.27.74,4.32,4.32,0,0,1-1.34,2.57Q415.58,93.65,408.11,93.65ZM403.6,71.91q2.56,0,7.23-3,6.51-4.12,6.5-8.15c0-1.63-.91-2.45-2.75-2.45a7.35,7.35,0,0,0-5.17,2.3Q405.48,64.37,403.6,71.91Z", transform: "translate(-11.83 -9)", fill: textColor }),
            React.createElement("path", { d: "M432.48,93.11a2,2,0,0,1-2.1-1.8,16.09,16.09,0,0,1-.31-3.25,223.65,223.65,0,0,1,1.65-25.14,23.2,23.2,0,0,1,.8-4.05,2.5,2.5,0,0,1,2.49-2c1.63,0,2.58,1.7,2.83,5.09q.15,1.91.15,4.17t-.15,4.74a60.53,60.53,0,0,1,5.24-8.95q5.4-7.55,10.37-7.54a7.29,7.29,0,0,1,5,1.69c2.58,2.21,3.87,6.35,3.87,12.39A76.89,76.89,0,0,1,460,85.34c-1.12,4.88-2.46,7.31-4,7.31-.84,0-1.34-.7-1.49-2.1a20.58,20.58,0,0,1-.11-2.15,55.34,55.34,0,0,1,.53-6.77,83.09,83.09,0,0,0,.81-11.4,20.76,20.76,0,0,0-1-7.19c-.38-1.07-1-1.61-1.76-1.61-1.09,0-2.41.84-3.94,2.53a45.32,45.32,0,0,0-6.16,8.53,73.08,73.08,0,0,0-5.47,11.93q-1.53,4.68-2.48,7A2.49,2.49,0,0,1,432.48,93.11Z", transform: "translate(-11.83 -9)", fill: textColor }),
            React.createElement("path", { d: "M470.21,92.73a4.52,4.52,0,0,1-2.57-.63,3,3,0,0,1-.91-2.59q0-6.27,3.94-6.27,2.25,0,2.79,1.53a8,8,0,0,1,.34,2.52,8.81,8.81,0,0,1-.91,4.29A2.89,2.89,0,0,1,470.21,92.73Z", transform: "translate(-11.83 -9)", fill: textColor }),
            React.createElement("path", { d: "M486.39,93.26q-1.38,0-2.1-2c-.92-2.39-1.38-6.06-1.38-11a91,91,0,0,1,2.18-20.16c.79-3.44,2.07-5.17,3.83-5.17a2,2,0,0,1,2.1,1.92,12.9,12.9,0,0,1,.12,1.76q0,4.27-.77,13.88Q489.53,83,489.53,89a8.26,8.26,0,0,1-.27,2.27,3,3,0,0,1-1.68,1.67A2.75,2.75,0,0,1,486.39,93.26Zm3.06-42.12c-1.94,0-2.91-1.13-2.91-3.41a8.69,8.69,0,0,1,1.06-4.36,3.65,3.65,0,0,1,3.46-1.87c1.89,0,2.83,1,2.83,3.14a8.44,8.44,0,0,1-1.19,4.64A3.67,3.67,0,0,1,489.45,51.14Z", transform: "translate(-11.83 -9)", fill: textColor }),
            React.createElement("path", { d: "M511.68,92.65a11.86,11.86,0,0,1-6.89-1.87A12.48,12.48,0,0,1,499.48,83a23.77,23.77,0,0,1-.58-5.24,26.21,26.21,0,0,1,6.35-17.45,16.11,16.11,0,0,1,6.28-4.66,14.31,14.31,0,0,1,5.54-1.11,9.24,9.24,0,0,1,5.65,1.76,5.77,5.77,0,0,1,2.39,4.93q3.06,1,3.06,10.14a26.05,26.05,0,0,1-.42,4.63,22.56,22.56,0,0,1-6.43,12.59,14.84,14.84,0,0,1-4.46,3A12.78,12.78,0,0,1,511.68,92.65Zm.42-6.77a6.89,6.89,0,0,0,5-1.91A15.79,15.79,0,0,0,521,78.11a26.5,26.5,0,0,0,2-9.49,14.35,14.35,0,0,0-1.22-6.35,4.17,4.17,0,0,0-4-2.48,8.75,8.75,0,0,0-4.17,1.11A11.2,11.2,0,0,0,510,64.07a19.69,19.69,0,0,0-4.21,12.32c0,4.08,1.07,6.93,3.21,8.53A5,5,0,0,0,512.1,85.88Z", transform: "translate(-11.83 -9)", fill: textColor }))));
};
var LogoWithText = React.memo(Logo$2, function (prev, next) { return prev.isDark === next.isDark; });

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3.18731 5.68438C2.44993 5.52604 2.44993 4.47393 3.18731 4.31559L5.3203 3.85755C5.58957 3.79973 5.79991 3.58939 5.85774 3.32012L6.31577 1.18713C6.47411 0.449748 7.52622 0.449751 7.68457 1.18713L8.1426 3.32012C8.20042 3.58939 8.41076 3.79973 8.68003 3.85755L10.813 4.31559C11.5504 4.47393 11.5504 5.52604 10.813 5.68438L8.68003 6.14241C8.41076 6.20024 8.20042 6.41058 8.1426 6.67985L7.68457 8.81284C7.52622 9.55022 6.47411 9.55022 6.31577 8.81284L5.85774 6.67985C5.79991 6.41058 5.58957 6.20024 5.3203 6.14241L3.18731 5.68438Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.99998C15.866 2.99998 19 6.13399 19 9.99998C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 9.99998C5 9.4477 4.55228 8.99998 4 8.99998C3.44772 8.99998 3 9.4477 3 9.99998C3 12.8894 4.36163 15.4608 6.47822 17.1075L5.58579 18C5.21071 18.3751 5 18.8838 5 19.4142V21.5C5 22.3284 5.67157 23 6.5 23H17.5C18.3284 23 19 22.3284 19 21.5V19.4142C19 18.8838 18.7893 18.3751 18.4142 18L17.5218 17.1075C19.6384 15.4608 21 12.8894 21 9.99998C21 5.02942 16.9706 0.999985 12 0.999985C11.4477 0.999985 11 1.4477 11 1.99998C11 2.55227 11.4477 2.99998 12 2.99998ZM12 19C10.6564 19 9.38156 18.7056 8.23649 18.1777L7 19.4142L7 21H17V19.4142L15.7635 18.1777C14.6184 18.7056 13.3436 19 12 19Z" })));
};

var Icon$c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 5H17C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C8.02 14.44 9.37 15.57 11 15.9V19H8C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19H13V15.9C14.63 15.57 15.98 14.44 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM12 14C10.35 14 9 12.65 9 11V5H15V11C15 12.65 13.65 14 12 14ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z" })));
};

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$p,
    GroupsIcon: Icon$o,
    HamburgerIcon: Icon$n,
    HamburgerCloseIcon: Icon$m,
    HomeIcon: Icon$l,
    IfoIcon: Icon$k,
    InfoIcon: Icon$j,
    LanguageIcon: Icon$i,
    LogoIcon: LogoWithText,
    MoonIcon: Icon$h,
    MoreIcon: Icon$g,
    NftIcon: Icon$f,
    PoolIcon: Icon$e,
    PredictionsIcon: Icon$d,
    SunIcon: Icon$c,
    TeamBattleIcon: Icon$b,
    TelegramIcon: Icon$a,
    TicketIcon: Icon$9,
    TradeIcon: Icon$8,
    TwitterIcon: Icon$7
});

var MenuButton = styled(Button)(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$e;

var blink = keyframes(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  0%,  100% { transform: scaleY(1); }\n  50% { transform:  scaleY(0.1); }\n"], ["\n  0%,  100% { transform: scaleY(1); }\n  50% { transform:  scaleY(0.1); }\n"])));
var StyledLink = styled(Link$1)(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 160px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n  .right-eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .left-eye,\n    .right-eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 160px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n  .right-eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .left-eye,\n    .right-eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, blink);
var Logo = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React.createElement(React.Fragment, null,
        React.createElement(Icon$13, { className: "mobile-icon" }),
        React.createElement(LogoWithText, { className: "desktop-icon", isDark: isDark })));
    return (React.createElement(Flex, null,
        React.createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React.createElement(Icon$m, { width: "24px", color: "textSubtle" })) : (React.createElement(Icon$n, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React.createElement(StyledLink, { as: "a", href: href, "aria-label": "kitty home page" }, innerLogo)) : (React.createElement(StyledLink, { to: href, "aria-label": "kitty home page" }, innerLogo))));
};
var Logo$1 = React.memo(Logo, function (prev, next) { return prev.isPushed === next.isPushed && prev.isDark === next.isDark; });
var templateObject_1$d, templateObject_2$6;

var status = {
    LIVE: {
        text: "LIVE",
        color: "failure",
    },
    SOON: {
        text: "SOON",
        color: "warning",
    },
    NEW: {
        text: "NEW",
        color: "success",
    },
};
var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.kittyswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.kittyswap.finance/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
        status: status.LIVE,
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Team Battle",
        icon: "TeamBattleIcon",
        href: "/competition",
        status: status.SOON,
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        status: status.LIVE,
        items: [
            {
                label: "Leaderboard",
                href: "/teams",
                status: status.NEW,
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://kittyswap.info",
            },
            {
                label: "Tokens",
                href: "https://kittyswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://kittyswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://kittyswap.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Voting",
                href: "https://voting.kittyswap.finance",
            },
            {
                label: "Github",
                href: "https://github.com/kittyswap",
            },
            {
                label: "Docs",
                href: "https://docs.kittyswap.finance",
            },
            {
                label: "Blog",
                href: "https://kittyswap.medium.com",
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/kittytokenio",
            },
            {
                label: "Announcements",
                href: "https://t.me/kittynewsbsc",
            },
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/kittytokenio",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = keyframes(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled.div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
};
var LinkStatus = styled(Text)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"], ["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var LinkLabelMemo = React.memo(LinkLabel, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$c, templateObject_2$5, templateObject_3$2, templateObject_4$1;

var Container$2 = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, status = _a.status, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className, isActive = _a.isActive;
    var _c = useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React.createElement(Container$2, null,
        React.createElement(MenuEntry, { onClick: handleClick, className: className, isActive: isActive, role: "button" },
            icon,
            React.createElement(LinkLabelMemo, { isPushed: isPushed }, label),
            status && (React.createElement(LinkStatus, { color: status.color, fontSize: "14px" }, status.text)),
            isOpen ? React.createElement(Icon$1v, null) : React.createElement(Icon$1w, null)),
        React.createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React.Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$b, templateObject_2$4;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React.createElement(Tag, __assign({ role: "button" }, props, otherProps));
};

var Icons$3 = IconModule;
var Container$1 = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React.createElement(Container$1, null, links.map(function (entry) {
        var Icon = Icons$3[entry.icon];
        var iconElement = React.createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
            return (React.createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, status: entry.status, initialOpenState: initialOpenState, className: calloutClass, isActive: entry.items.some(function (item) { return item.href === location.pathname; }) }, isPushed &&
                entry.items.map(function (item) { return (React.createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React.createElement(MenuLink, { href: item.href },
                        React.createElement(LinkLabelMemo, { isPushed: isPushed }, item.label),
                        item.status && (React.createElement(LinkStatus, { color: item.status.color, fontSize: "14px" }, item.status.text))))); })));
        }
        return (React.createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React.createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React.createElement(LinkLabelMemo, { isPushed: isPushed }, entry.label),
                entry.status && (React.createElement(LinkStatus, { color: entry.status.color, fontSize: "14px" }, entry.status.text)))));
    })));
};
var templateObject_1$a;

var PriceLink = styled.a(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var KittyPrice = function (_a) {
    var kittyPriceUsd = _a.kittyPriceUsd;
    return kittyPriceUsd ? (React.createElement(PriceLink, { href: "https://kittyswap.info/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", target: "_blank" },
        React.createElement(Icon$T, { width: "24px", mr: "8px" }),
        React.createElement(Text, { color: "textSubtle", bold: true }, "$" + kittyPriceUsd.toFixed(3)))) : (React.createElement(Skeleton, { width: 80, height: 24 }));
};
var KittyPrice$1 = React.memo(KittyPrice);
var templateObject_1$9;

var Icons$2 = IconModule;
var MoonIcon = Icons$2.MoonIcon, SunIcon = Icons$2.SunIcon;
var ThemeSwitcher = function (_a) {
    var isDark = _a.isDark, toggleTheme = _a.toggleTheme;
    return (React.createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
        React.createElement(Flex, { alignItems: "center" },
            React.createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
            React.createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
            React.createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))));
};
var ThemeSwitcher$1 = React.memo(ThemeSwitcher, function (prev, next) { return prev.isDark === next.isDark; });

var Icons$1 = IconModule;
var SocialLinks = function () { return (React.createElement(Flex, null, socials.map(function (social, index) {
    var Icon = Icons$1[social.icon];
    var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
    var mr = index < socials.length - 1 ? "24px" : 0;
    if (social.items) {
        return (React.createElement(Dropdown, { key: social.label, position: "top", target: React.createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React.createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
    }
    return (React.createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
        React.createElement(Icon, __assign({}, iconProps))));
}))); };
var SocialLinks$1 = React.memo(SocialLinks, function () { return true; });

var Icons = IconModule;
var LanguageIcon = Icons.LanguageIcon;
var LangSelector = function (_a) {
    var currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    return (React.createElement(Dropdown, { position: "top-right", target: React.createElement(Button, { variant: "text", startIcon: React.createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
            React.createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React.createElement(MenuButton, { key: lang.locale, fullWidth: true, onClick: function () { return setLang(lang); }, 
        // Safari fix
        style: { minHeight: "32px", height: "auto" } }, lang.language)); })));
};
var LangSelector$1 = React.memo(LangSelector, function (prev, next) { return prev.currentLang === next.currentLang; });

var Container = styled.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var SettingsEntry = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, kittyPriceUsd = _a.kittyPriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    if (!isPushed) {
        return (React.createElement(Container, null,
            React.createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React.createElement(Icon$1c, null))));
    }
    return (React.createElement(Container, null,
        React.createElement(SocialEntry, null,
            React.createElement(KittyPrice$1, { kittyPriceUsd: kittyPriceUsd }),
            React.createElement(SocialLinks$1, null)),
        React.createElement(SettingsEntry, null,
            React.createElement(ThemeSwitcher$1, { isDark: isDark, toggleTheme: toggleTheme }),
            React.createElement(LangSelector$1, { currentLang: currentLang, langs: langs, setLang: setLang }))));
};
var templateObject_1$8, templateObject_2$3, templateObject_3$1;

var StyledPanel = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100%;\n  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n  ", ";\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100%;\n  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n  ", ";\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var isPushed = _a.isPushed;
    return !isPushed && "white-space: nowrap;";
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React.createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React.createElement(PanelBody, __assign({}, props)),
        React.createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$7;

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React.createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React.createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$3 = function (props) {
    var id = uniqueId("svg");
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("g", { clipPath: "url(#" + id + ")" },
            React.createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React.createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: id },
                React.createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React.createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React.createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var Icon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "#F5F5F5" }),
        React.createElement("path", { d: "M56.5504425,41.9387033 L56.5504425,50.4659601 L47.3948342,50.4659601 L47.3948342,85.5971142 L45.0078131,84.7075452 C43.8992633,84.2955753 42.1136272,83.5937969 39.9052997,82.5918134 L38.8675775,82.1177881 L38.8675775,14.6817622 L47.9569067,11.8769231 L56.5504425,14.5267861 L56.5504425,23.7259307 L47.9569067,21.0669705 L47.3948342,21.2411155 L47.3948342,41.9387033 L56.5504425,41.9387033 Z M16,50.4659926 L16,21.7739797 L36.1702794,15.548296 L36.1702794,24.7052039 L24.526282,28.3200122 L24.526282,41.9387358 L36.1702794,41.9387358 L36.1702794,81.3806284 L33.591244,80.0543973 C25.5662786,75.923652 16,68.9585019 16,59.2339983 L16,54.6496962 L24.526282,54.6496962 L24.526282,59.2339983 C24.526282,61.2460878 25.5734263,63.3605199 27.6426978,65.5373324 L27.6426978,50.4659926 L16,50.4659926 Z M59.1389325,15.3302574 L79.8040306,21.7261873 L79.8040306,50.4659601 L67.6710627,50.4659601 L67.6710627,62.9111544 C67.6710627,62.9111544 64.9581695,66.4674811 59.1464051,69.4451657 C59.1464051,67.0682164 59.1389325,15.3302574 59.1389325,15.3302574 Z M71.2780734,41.9387033 L71.2780734,28.2783928 L67.6710627,27.1649695 L67.6710627,41.9387033 L71.2780734,41.9387033 Z M71.2780734,59.8661186 L71.2780734,54.6495662 L79.8040306,54.6495662 L79.8040306,59.8661186 C79.8040306,74.3588162 58.7760221,82.7005566 52.330058,84.9127828 L49.9859233,85.7230769 L49.9859233,76.7068496 L51.1311866,76.2744112 C61.1591444,72.5004032 71.2780734,65.962818 71.2780734,59.8661186 Z", fill: "#000000" })));
};

var ConnectorNames;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(ConnectorNames || (ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Icon$6,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "TrustWallet",
        icon: Icon$3,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "MathWallet",
        icon: Icon$5,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "TokenPocket",
        icon: Icon$4,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "WalletConnect",
        icon: Icon$2,
        connectorId: ConnectorNames.WalletConnect,
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$1,
        connectorId: ConnectorNames.BSC,
    },
    {
        title: "SafePal Wallet",
        icon: Icon,
        connectorId: ConnectorNames.Injected,
    },
];
var connectorLocalStorageKey = "connectorId";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React.createElement(Button, { width: "100%", variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React.createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React.createElement(Icon, { width: "32px" })));
};

var HelpLink = styled(Link)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React.createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React.createElement(HelpLink, { href: "https://docs.kittyswap.finance/get-started/connection-guide", external: true },
            React.createElement(Icon$18, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$6;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    var copyToClipboardWithCommand = function (content) {
        var el = document.createElement("textarea");
        el.value = content;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    };
    function displayTooltip() {
        setIsTooltipDisplayed(true);
        setTimeout(function () {
            setIsTooltipDisplayed(false);
        }, 1000);
    }
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard && navigator.permissions) {
                navigator.clipboard.writeText(toCopy).then(function () { return displayTooltip(); });
            }
            else if (document.queryCommandSupported("copy")) {
                copyToClipboardWithCommand(toCopy);
                displayTooltip();
            }
        } }, props),
        children,
        React.createElement(Icon$1a, { width: "20px", color: "primary", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$5, templateObject_2$2;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React.createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React.createElement(Flex, { mb: "32px" },
            React.createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React.createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React.createElement(Flex, { justifyContent: "center" },
            React.createElement(Button, { scale: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                    onDismiss();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React.createElement("div", null, account ? (React.createElement(Button, { scale: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React.createElement(Button, { scale: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};
var UserBlock$1 = React.memo(UserBlock, function (prevProps, nextProps) { return prevProps === nextProps; });

var StyledAvatar = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React.createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React.createElement(Icon$W, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React.createElement(StyledAvatar, { title: username },
            React.createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React.createElement(Pip, null)));
    }
    return (React.createElement(StyledAvatar, { title: username },
        React.createElement(Link$1, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React.createElement(Pip, null)));
};
var templateObject_1$4, templateObject_2$1;

var Wrapper = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - " + (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px)";
});
var MobileOnlyOverlay = styled(Overlay)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, kittyPriceUsd = _a.kittyPriceUsd, links = _a.links, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React.createElement(Wrapper, null,
        React.createElement(StyledNav, { showMenu: showMenu },
            React.createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React.createElement(Flex, null,
                React.createElement(UserBlock$1, { account: account, login: login, logout: logout }),
                profile && React.createElement(Avatar, { profile: profile }))),
        React.createElement(BodyWrapper, null,
            React.createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, kittyPriceUsd: kittyPriceUsd, pushNav: setIsPushed, links: links }),
            React.createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React.createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$3, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a;
var alertTypeMap = (_a = {},
    _a[types.INFO] = variants$3.INFO,
    _a[types.SUCCESS] = variants$3.SUCCESS,
    _a[types.DANGER] = variants$3.DANGER,
    _a[types.WARNING] = variants$3.WARNING,
    _a);
var StyledToast = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = useRef();
    var ref = useRef(null);
    var removeHandler = useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type;
    var handleRemove = useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, description))));
};
var templateObject_1$2;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React.createElement(StyledToastContainer, null,
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$1;

var ResetCSS = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Nunito', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", ";\n    border-radius: 10px;\n  }\n\n  /* Slider */\n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Nunito', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", ";\n    border-radius: 10px;\n  }\n\n  /* Slider */\n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

export { Icon$1z as AddIcon, Alert, Icon$1y as ArrowBackIcon, Icon$1x as ArrowDownIcon, Icon$1w as ArrowDropDownIcon, Icon$1v as ArrowDropUpIcon, Icon$1u as ArrowForwardIcon, Icon$1t as ArrowUpIcon, Icon$1s as AutoRenewIcon, BackgroundImage, BalanceInput, GridLayout$1 as BaseLayout, Icon$1r as BinanceIcon, Icon$1B as BlockIcon, Icon$1q as BnbUsdtPairTokenIcon, Box, Breadcrumbs, Icon$1p as BunnyCardsIcon, Icon$1o as BunnyPlaceholderIcon, Button, ButtonMenu$1 as ButtonMenu, ButtonMenuItem, Icon$1l as CalculateIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$1m as CardViewIcon, Icon$1n as Cards, GridLayout as CardsLayout, Icon$1j as ChartIcon, Checkbox, Icon$1D as CheckmarkCircleIcon, Icon$1i as CheckmarkIcon, Icon$1h as ChevronDownIcon, Icon$1g as ChevronLeftIcon, Icon$1f as ChevronRightIcon, Icon$1e as ChevronUpIcon, Icon$1k as CircleOutlineIcon, Icon$1d as CloseIcon, Icon$1c as CogIcon, Icon$1b as CommunityIcon, ConnectorNames, Icon$1a as CopyIcon, Icon$19 as CrownIcon, Dropdown, Icon$1C as ErrorIcon, ExpandableButton, ExpandableLabel, FallingBunnies, Flex, Grid, Heading, Icon$18 as HelpIcon, Icon$17 as HistoryIcon, IconButton, Image, Icon$1A as InfoIcon, Input$1 as Input, Icon$U as KittiesIcon, Icon$T as KittyRoundIcon, Icon$16 as LaurelLeftIcon, Icon$15 as LaurelRightIcon, Link, LinkExternal, Icon$14 as ListViewIcon, Icon$13 as LogoIcon, Icon$12 as LogoRoundIcon, Icon$11 as MedalBronzeIcon, Icon$10 as MedalGoldIcon, Icon$$ as MedalPurpleIcon, Icon$_ as MedalSilverIcon, Icon$Z as MedalTealIcon, Menu, Message, Icon$Y as MetamaskIcon, Icon$X as MinusIcon, Modal, ModalBackButton, ModalBody, ModalCloseButton, ModalContainer, ModalHeader, ModalProvider, ModalTitle, Icon$W as NoProfileAvatarIcon, NotificationDot, Icon$V as OpenNewIcon, Icon$R as PlayCircleOutlineIcon, Icon$S as PocketWatchIcon, Icon$Q as PrizeIcon, Progress, Icon$M as ProgressBunny, Icon$P as ProposalIcon, Radio, Icon$r as RefreshIcon, Icon$O as RemoveIcon, ResetCSS, Icon$C as SearchIcon, Skeleton, Slider, Spinner, Icon$B as StarFillIcon, Icon$A as StarLineIcon, Step, Stepper, Svg, Icon$z as SwapVertIcon, Icon$y as SyncAltIcon, Tab, ButtonMenu as TabMenu, Tag, Icon$J as TeamPlayerIcon, Icon$I as TestnetIcon, Text, Icon$H as Ticket, Icon$G as TicketRound, Icon$F as TimerIcon, ToastContainer, Toggle, TooltipText, Icon$E as TrophyGoldIcon, Icon$D as TuneIcon, Icon$N as VerifiedIcon, Icon$x as VisibilityOff, Icon$w as VisibilityOn, Icon$v as VolumeOffIcon, Icon$u as VolumeUpIcon, Icon$t as VoteIcon, Icon$L as WaitIcon, Icon$s as WarningIcon, Icon$K as Won, variants$3 as alertVariants, byTextAscending, byTextDescending, connectorLocalStorageKey, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, links as menuConfig, status as menuStatus, types as toastTypes, useKonamiCheatCode, useMatchBreakpoints, useModal, useParticleBurst, useTable, useTooltip, useWalletModal };
