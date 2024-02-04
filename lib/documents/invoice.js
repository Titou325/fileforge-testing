"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.components = exports.Right = exports.ProductTable = exports.InvoiceTemplate = exports.InvoiceHeader = exports.CustomerInfo = exports.BillingCompany = void 0;
var _reactPrint = require("@onedoc/react-print");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Logo = function Logo(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 46.15 9.31",
    version: "1.1",
    viewBox: "0 0 46.15 9.31",
    xmlSpace: "preserve",
    fill: "black"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10 9.13V2.55h1.83v.91c.35-.62 1.13-1.09 2.07-1.09.71 0 1.32.24 1.81.71s.74 1.15.74 2.03v4.02h-1.88V5.6c0-.96-.5-1.5-1.28-1.5-.85 0-1.42.62-1.42 1.55v3.48H10zM23.84 6.48h-4.83c.23.83.83 1.24 1.79 1.24.74 0 1.43-.22 2.05-.64l.74 1.28c-.8.61-1.76.91-2.88.91-1.16 0-2.05-.34-2.67-1-.61-.66-.92-1.47-.92-2.45 0-1 .32-1.81.96-2.46.64-.66 1.48-.98 2.51-.98.97 0 1.76.3 2.39.89.62.59.94 1.39.94 2.41-.01.23-.04.5-.08.8zM19 5.13h3.09c-.18-.76-.73-1.22-1.51-1.22-.76 0-1.38.46-1.58 1.22zM29.43 0h1.88v9.13h-1.82v-.71c-.52.59-1.16.88-1.96.88-.92 0-1.69-.32-2.31-.98-.61-.66-.92-1.47-.92-2.47 0-.98.31-1.8.92-2.46.62-.66 1.39-1 2.31-1 .74 0 1.38.26 1.89.8V0zm-.39 4.6c-.31-.34-.71-.5-1.2-.5s-.89.17-1.21.5c-.31.34-.47.74-.47 1.22 0 .49.16.91.47 1.25.32.34.72.5 1.21.5s.89-.17 1.2-.5c.32-.34.48-.76.48-1.25 0-.47-.15-.88-.48-1.22zM33.03 8.31c-.66-.67-.98-1.5-.98-2.47s.32-1.8.98-2.46c.66-.67 1.51-1.01 2.55-1.01 1.04 0 1.91.34 2.57 1.01.66.66 1 1.49 1 2.46s-.34 1.8-1 2.47c-.66.66-1.52 1-2.57 1-1.04 0-1.89-.34-2.55-1zm3.74-3.68c-.32-.34-.72-.5-1.19-.5s-.86.17-1.19.5c-.32.32-.48.73-.48 1.2 0 .49.16.9.48 1.24.32.32.72.49 1.19.49s.86-.17 1.19-.49c.32-.34.49-.74.49-1.24 0-.47-.17-.88-.49-1.2zM40.5 8.31c-.65-.65-.97-1.47-.97-2.48s.32-1.83.98-2.47c.66-.65 1.5-.97 2.54-.97 1.36 0 2.55.67 3.09 1.87l-1.5.8c-.38-.62-.9-.94-1.56-.94-.49 0-.89.17-1.21.49-.32.32-.48.73-.48 1.21 0 .49.16.91.47 1.24.32.32.72.48 1.2.48.66 0 1.27-.38 1.55-.92l1.52.9c-.58 1.07-1.74 1.75-3.12 1.75-1.02 0-1.86-.32-2.51-.96zM9.26 4.7c0-1.29-.44-2.36-1.34-3.25C7.03.55 5.94.1 4.63.1c-1.3 0-2.39.45-3.29 1.35C.45 2.34 0 3.43 0 4.71c0 .37.05.72.12 1.05l4.3-3.39h2.22v6.46c.47-.22.9-.5 1.29-.88.89-.89 1.33-1.97 1.33-3.25z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1.49 8.09c.62.56 1.34.94 2.17 1.1v-2.8l-2.17 1.7z"
  }));
};
var components = exports.components = {
  p: function p(props) {
    return /*#__PURE__*/_react["default"].createElement("p", _extends({
      className: "p-0"
    }, props));
  },
  hr: function hr(props) {
    return /*#__PURE__*/_react["default"].createElement("div", _extends({
      className: "h-px bg-gray-300 my-4"
    }, props));
  },
  tr: function tr(props) {
    return /*#__PURE__*/_react["default"].createElement("tr", _extends({
      className: "border-b border-gray-300"
    }, props));
  },
  table: function table(props) {
    return /*#__PURE__*/_react["default"].createElement("table", _extends({
      className: "w-full my-12"
    }, props));
  },
  th: function th(props) {
    return /*#__PURE__*/_react["default"].createElement("th", _extends({
      className: "text-left font-bold py-2"
    }, props));
  },
  td: function td(props) {
    return /*#__PURE__*/_react["default"].createElement("td", _extends({
      className: "py-2"
    }, props));
  }
};
var Right = exports.Right = function Right(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-right"
  }, children);
};
var InvoiceHeader = exports.InvoiceHeader = function InvoiceHeader(_ref2) {
  var props = _ref2.props;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-2xl font-bold"
  }, "Invoice #", props.invoiceNumber), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-xs"
  }, props.date));
};
var BillingCompany = exports.BillingCompany = function BillingCompany(_ref3) {
  var props = _ref3.props;
  return /*#__PURE__*/_react["default"].createElement(Right, null, /*#__PURE__*/_react["default"].createElement(components.p, null, /*#__PURE__*/_react["default"].createElement("b", null, props.companyName)), /*#__PURE__*/_react["default"].createElement(components.p, null, props.companyAddress, ","), /*#__PURE__*/_react["default"].createElement(components.p, null, props.city, ","), /*#__PURE__*/_react["default"].createElement(components.p, null, props.ZIPCode, ","), /*#__PURE__*/_react["default"].createElement(components.p, null, props.country));
};
var CustomerInfo = exports.CustomerInfo = function CustomerInfo(_ref4) {
  var props = _ref4.props;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(components.p, null, /*#__PURE__*/_react["default"].createElement("b", null, "Bill to:"), " "), /*#__PURE__*/_react["default"].createElement(components.p, null, props.customerName), /*#__PURE__*/_react["default"].createElement(components.p, null, props.customerAddress, ","), /*#__PURE__*/_react["default"].createElement(components.p, null, props.city, " ", props.ZIPCode, ","), /*#__PURE__*/_react["default"].createElement(components.p, null, props.country));
};
var ProductTable = exports.ProductTable = function ProductTable(_ref5) {
  var props = _ref5.props;
  var articles = props;
  var content = articles.map(function (a) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: articles.indexOf(a)
    }, /*#__PURE__*/_react["default"].createElement(components.tr, null, /*#__PURE__*/_react["default"].createElement(components.td, null, articles.indexOf(a)), /*#__PURE__*/_react["default"].createElement(components.td, null, a.description), /*#__PURE__*/_react["default"].createElement(components.td, null, "$", a.unitPrice), /*#__PURE__*/_react["default"].createElement(components.td, null, a.quantity), /*#__PURE__*/_react["default"].createElement(components.td, null, "$", a.totalPrice)));
  });
  var totalPrice = articles.map(function (a) {
    return a.totalPrice;
  }).reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  return /*#__PURE__*/_react["default"].createElement(components.table, null, /*#__PURE__*/_react["default"].createElement(components.tr, null, /*#__PURE__*/_react["default"].createElement(components.th, null, "Item"), /*#__PURE__*/_react["default"].createElement(components.th, null, "Description"), /*#__PURE__*/_react["default"].createElement(components.th, null, "Unit Price"), /*#__PURE__*/_react["default"].createElement(components.th, null, "Quantity"), /*#__PURE__*/_react["default"].createElement(components.th, null, "Amount")), content, /*#__PURE__*/_react["default"].createElement(components.tr, null, /*#__PURE__*/_react["default"].createElement(components.th, null), /*#__PURE__*/_react["default"].createElement(components.th, null, "Total"), /*#__PURE__*/_react["default"].createElement(components.th, null), /*#__PURE__*/_react["default"].createElement(components.th, null), /*#__PURE__*/_react["default"].createElement(components.th, null, "$", totalPrice)));
};
var InvoiceTemplate = exports.InvoiceTemplate = function InvoiceTemplate(_ref6) {
  var props = _ref6.props;
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "font-sans"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between items-end pb-4"
  }, /*#__PURE__*/_react["default"].createElement(InvoiceHeader, {
    props: props
  }), /*#__PURE__*/_react["default"].createElement(Logo, {
    className: "h-6"
  })), /*#__PURE__*/_react["default"].createElement(BillingCompany, {
    props: props.BillingCompany
  }), /*#__PURE__*/_react["default"].createElement(components.hr, null), /*#__PURE__*/_react["default"].createElement(CustomerInfo, {
    props: props.CustomerInfo
  }), /*#__PURE__*/_react["default"].createElement(components.hr, null), /*#__PURE__*/_react["default"].createElement(components.p, null, "All items below correspond to work completed in the month of", " ", monthNames[new Date().getMonth()], " ", new Date().getFullYear(), ". Payment is due within 15 days of receipt of this invoice.", /*#__PURE__*/_react["default"].createElement(_reactPrint.Footnote, null, "This includes non-business days.")), /*#__PURE__*/_react["default"].createElement(ProductTable, {
    props: props.articles
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-blue-100 p-3 rounded-md border-blue-300 text-blue-800 text-sm"
  }, "On ", props.date, ", Onedoc users will be upgraded free of charge to our new cloud offering."), /*#__PURE__*/_react["default"].createElement(_reactPrint.PageBottom, null, /*#__PURE__*/_react["default"].createElement(components.hr, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-gray-400 text-sm"
  }, "Invoice #", props.invoiceNumber)));
};