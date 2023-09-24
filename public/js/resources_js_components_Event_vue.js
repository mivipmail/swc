"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Event_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Event.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Event.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Event",
  data: function data() {
    return {
      event: null,
      error: null
    };
  },
  mounted: function mounted() {
    this.getEvent();
    this.startTimer();
  },
  beforeUnmount: function beforeUnmount() {
    this.stopTimer();
  },
  watch: {
    $route: function $route(to, from) {
      this.getEvent();
    }
  },
  methods: {
    getEvent: function getEvent() {
      var _this = this;
      this.error = null;
      var id = this.$route.params.id;
      if (id) axios.get("/api/events/".concat(id)).then(function (res) {
        if (res !== null && res !== void 0 && res.data.result) _this.event = res === null || res === void 0 ? void 0 : res.data.result;else {
          _this.event = null;
          _this.error = res === null || res === void 0 ? void 0 : res.data.error;
        }
      })["catch"](function (err) {
        console.log('err', err.response);
      });
    },
    followEvent: function followEvent() {
      var _this2 = this;
      var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      axios.post("/api/events/".concat(on ? '' : 'un', "follow/").concat(this.event.id)).then(function (res) {
        if (res !== null && res !== void 0 && res.data.result) {
          _this2.event = res.data.result;
          _this2.$store.dispatch('getEvents');
        } else {
          console.log(res === null || res === void 0 ? void 0 : res.data.error);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    destroyEvent: function destroyEvent() {
      var _this3 = this;
      axios["delete"]("/api/events/".concat(this.event.id)).then(function (res) {
        _this3.$router.push({
          name: 'user.index'
        });
      })["catch"](function (err) {
        console.log(err);
      });
    },
    stopTimer: function stopTimer() {
      if (this.interval) {
        window.clearInterval(this.interval);
      }
    },
    startTimer: function startTimer() {
      var _this4 = this;
      this.stopTimer();
      this.interval = window.setInterval(function () {
        _this4.getEvent();
      }, 30000);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Event.vue?vue&type=template&id=5793e382":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Event.vue?vue&type=template&id=5793e382 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "table"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Ошибка")])], -1 /* HOISTED */);
var _hoisted_3 = {
  "class": "border-0"
};
var _hoisted_4 = {
  key: 1,
  "class": "table"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "pt-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Участники")], -1 /* HOISTED */);
var _hoisted_6 = {
  key: 0
};
var _hoisted_7 = {
  key: 1
};
var _hoisted_8 = {
  "class": "border-0"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$data$event, _$data$event2, _$data$event3, _$data$event4, _$data$event5, _$data$event6, _$data$event7, _$data$event8, _$data$event9, _$data$event10;
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [$data.error ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.error), 1 /* TEXT */)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.event ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$event = $data.event) === null || _$data$event === void 0 ? void 0 : _$data$event.title), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$event2 = $data.event) === null || _$data$event2 === void 0 ? void 0 : _$data$event2.content), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Дата создания: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$event3 = $data.event) === null || _$data$event3 === void 0 ? void 0 : _$data$event3.created_at), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Создал: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$event4 = $data.event) === null || _$data$event4 === void 0 ? void 0 : _$data$event4.creator_user.name) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$event5 = $data.event) === null || _$data$event5 === void 0 ? void 0 : _$data$event5.creator_user.surname), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [_hoisted_5, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$data$event6 = $data.event) === null || _$data$event6 === void 0 ? void 0 : _$data$event6.member_users, function (user) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'user.show',
        params: {
          id: user.id
        }
      },
      "class": "bd-links-link d-inline-block rounded"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.name) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.surname), 1 /* TEXT */)];
      }),

      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])]);
  }), 256 /* UNKEYED_FRAGMENT */))])]), _ctx.$store.getters.me ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [!((_$data$event7 = $data.event) !== null && _$data$event7 !== void 0 && _$data$event7.member_users.find(function (el) {
    return el.id === _ctx.$store.getters.me.id;
  })) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.followEvent(true);
    }, ["prevent"])),
    type: "button",
    "class": "btn btn-primary btn-sm"
  }, " Принять участие ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (_$data$event8 = $data.event) !== null && _$data$event8 !== void 0 && _$data$event8.member_users.find(function (el) {
    return el.id === _ctx.$store.getters.me.id;
  }) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.followEvent(false);
    }, ["prevent"])),
    type: "button",
    "class": "btn btn-outline-primary btn-sm"
  }, " Отказаться от участия ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$store.getters.me && ((_$data$event9 = $data.event) === null || _$data$event9 === void 0 ? void 0 : _$data$event9.creator_user.id) === _ctx.$store.getters.me.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_8, [((_$data$event10 = $data.event) === null || _$data$event10 === void 0 ? void 0 : _$data$event10.creator_user.id) === _ctx.$store.getters.me.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.destroyEvent && $options.destroyEvent.apply($options, arguments);
    }, ["prevent"])),
    type: "button",
    "class": "btn btn-danger btn-sm"
  }, " Удалить ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/components/Event.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Event.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Event_vue_vue_type_template_id_5793e382__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Event.vue?vue&type=template&id=5793e382 */ "./resources/js/components/Event.vue?vue&type=template&id=5793e382");
/* harmony import */ var _Event_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Event.vue?vue&type=script&lang=js */ "./resources/js/components/Event.vue?vue&type=script&lang=js");
/* harmony import */ var C_My_Projects_swc_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_My_Projects_swc_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Event_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Event_vue_vue_type_template_id_5793e382__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Event.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Event.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Event.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Event_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Event_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Event.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Event.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Event.vue?vue&type=template&id=5793e382":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Event.vue?vue&type=template&id=5793e382 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Event_vue_vue_type_template_id_5793e382__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Event_vue_vue_type_template_id_5793e382__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Event.vue?vue&type=template&id=5793e382 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Event.vue?vue&type=template&id=5793e382");


/***/ })

}]);