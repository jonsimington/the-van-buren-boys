// Generated by Creer at 03:31AM on April 24, 2016 UTC, git hash: '087b1901032ab5bed5806b24830233eac5c2de55'
// This is a simple class to represent the Cutter object in the game. You can extend it by adding utility functions here in this file.

var Class = require("classe");
var client = require(__basedir + "/joueur/client");
var Spiderling = require("./spiderling");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * @class
 * @classdesc A Spiderling that can cut existing Webs.
 * @extends Spiderling
 */
var Cutter = Class(Spiderling, {
    /**
     * initializes a Cutter with basic logic as provided by the Creer code generator
     *
     * @memberof Cutter
     * @private
     */
    init: function() {
        Spiderling.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * The Web that this Cutter is trying to cut. Null if not cutting.
         *
         * @name Cutter#cuttingWeb
         * @type Web
         */
        this.cuttingWeb = null;

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },


    /**
     * Cuts a web, destroying it, and any Spiderlings on it.
     *
     * @memberof Cutter
     * @instance
     * @param {Web} web - The web you want to Cut. Must be connected to the Nest this Cutter is currently on.
     * @returns {boolean} - True if the cut was successfully started, false otherwise.
     */
    cut: function(web) {
        return client.runOnServer(this, "cut", {
            web: web,
        });
    },


    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Cutter;
