// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Utils from "../core/Utils.bs.js";
import * as Js_mapperRt from "bs-platform/lib/es6/js_mapperRt.js";

var jsMapperConstantArray = [
  /* tuple */[
    -855250051,
    "turn"
  ],
  /* tuple */[
    22632,
    "em"
  ],
  /* tuple */[
    25096,
    "px"
  ],
  /* tuple */[
    26418,
    "vh"
  ],
  /* tuple */[
    26433,
    "vw"
  ],
  /* tuple */[
    4995526,
    "deg"
  ],
  /* tuple */[
    5591841,
    "%"
  ],
  /* tuple */[
    5690837,
    "rad"
  ],
  /* tuple */[
    5691738,
    "rem"
  ]
];

var numericRe = /[\d.-]+/;

function decomposeUnit(val_) {
  var value = Utils.$$parseFloat(val_);
  var param = val_.replace(numericRe, "");
  var unit = Js_mapperRt.revSearch(9, jsMapperConstantArray, param);
  return {
          value: value,
          unit: unit
        };
}

function testUnit(val_) {
  var match = decomposeUnit(val_);
  var unit = match.unit;
  if (unit !== undefined && !isNaN(match.value)) {
    return val_.endsWith(Js_mapperRt.binarySearch(9, unit, jsMapperConstantArray));
  } else {
    return false;
  }
}

function parseUnit(val_) {
  var match = decomposeUnit(val_);
  var unit = match.unit;
  var value = match.value;
  if (unit !== undefined) {
    return {
            value: value,
            unit: Js_mapperRt.binarySearch(9, unit, jsMapperConstantArray)
          };
  } else {
    return {
            value: value,
            unit: null
          };
  }
}

export {
  testUnit ,
  parseUnit ,
  
}
/* No side effect */
