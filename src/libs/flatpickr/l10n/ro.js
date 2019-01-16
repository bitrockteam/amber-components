/* flatpickr v4.5.2, @license MIT */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.ro = {}));
}(this, function (exports) { 'use strict';

  const fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {},
      };
  const Romanian = {
      weekdays: {
          shorthand: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sam"],
          longhand: [
              "Duminică",
              "Luni",
              "Marți",
              "Miercuri",
              "Joi",
              "Vineri",
              "Sâmbătă",
          ],
      },
      months: {
          shorthand: [
              "Ian",
              "Feb",
              "Mar",
              "Apr",
              "Mai",
              "Iun",
              "Iul",
              "Aug",
              "Sep",
              "Oct",
              "Noi",
              "Dec",
          ],
          longhand: [
              "Ianuarie",
              "Februarie",
              "Martie",
              "Aprilie",
              "Mai",
              "Iunie",
              "Iulie",
              "August",
              "Septembrie",
              "Octombrie",
              "Noiembrie",
              "Decembrie",
          ],
      },
      firstDayOfWeek: 1,
      ordinal: () => {
          return "";
      },
  };
  fp.l10ns.ro = Romanian;
  var ro = fp.l10ns;

  exports.Romanian = Romanian;
  exports.default = ro;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
