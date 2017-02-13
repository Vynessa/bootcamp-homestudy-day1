'use strict'

var Smartphone = require('../src/oop.js');

describe("Smartphone Class: Create a Smartphone, make it send files", function () {
    it("iPhone should be a type of `object` and an instance of the `Smartphone` class", function() {
        var iPhone = new Smartphone("iPhone");
        expect(typeof iPhone).toEqual(typeof{})
        var isInstance = iPhone instanceof Smartphone;
        expect(isInstance).toBeTruthy();
    });

    it("should set Phone instance properties correctly", function() {
        var iPhone = new Smartphone("iPhone", "6S", "$700", 32, "iOS");
        expect(iPhone.brand).toEqual("iPhone");
        expect(iPhone.model).toEqual("6S");
        expect(iPhone.cost).toEqual("$700");
        expect(iPhone.volume).toEqual(32);
        expect(iPhone.os).toEqual("iOS");
    });

    it("should have brand 'Nokia' if no brand was passed as an argument", function() {
        var nokia = new Smartphone();
        expect(nokia.brand).toEqual('Nokia');
    });

    it("should have model 'Nokia' if no model was passed as an argument", function() {
        var nokia = new Smartphone();
        expect(nokia.model).toEqual('3310');
    });

    it("should have cost of '$700' if no cost was passed as an argument", function() {
        var nokia = new Smartphone('Nokia');
        expect(nokia.cost).toEqual("$50");
    });

    it("should have volume of '0' if no volume was passed as an argument", function() {
        var nokia = new Smartphone('Nokia', "700");
        expect(nokia.volume).toEqual(0);
    });

    it("should have os of 'Windows 10' if no os was passed as an argument", function() {
        var nokia = new Smartphone('Nokia', "$700");
        expect(nokia.os).toEqual("Windows 10");
    });

    it("should have volume of '100' if setVolume is called with '100' as argument", function() {
        var phone = new Smartphone('Nokia', 4000);
        expect(phone.volume).toEqual(0);
        phone.setVolume(100);
        expect(phone.volume).toEqual(100);
    });
});