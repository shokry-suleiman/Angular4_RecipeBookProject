"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    Object.defineProperty(DropdownDirective.prototype, "opened", {
        //This Class Will Be  Appended To The Host Element if
        // the property open = true
        get: function () {
            return this.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    DropdownDirective.prototype.open = function () {
        this.isOpen = true;
    };
    DropdownDirective.prototype.close = function () {
        this.isOpen = false;
    };
    return DropdownDirective;
}());
__decorate([
    core_1.HostBinding('class.open')
], DropdownDirective.prototype, "opened", null);
__decorate([
    core_1.HostListener('click')
], DropdownDirective.prototype, "open", null);
__decorate([
    core_1.HostListener('mouseleave')
], DropdownDirective.prototype, "close", null);
DropdownDirective = __decorate([
    core_1.Directive({
        selector: '[appDropdown]'
    })
], DropdownDirective);
exports.DropdownDirective = DropdownDirective;
