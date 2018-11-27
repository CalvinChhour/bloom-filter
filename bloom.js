"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_md5_1 = require("ts-md5");
var fs = require("fs");
var wordList = fs.readFileSync('./wordlist.txt').toString('utf-8');
/*
 * Bloom Filter
 * Initially we have an empty array of bits and  a dictionary of words
 */
var bloomFilter = /** @class */ (function () {
    function bloomFilter(dict) {
        this.dict = new Array(dict.length);
    }
    bloomFilter.prototype.addWord = function (word) {
        var _this = this;
        var hashArray = Array.from(ts_md5_1.Md5.hashStr(word).toString());
        hashArray.forEach(function (e) {
            _this.dict[e] = true;
        });
    };
    bloomFilter.prototype.isWord = function (word) {
        return this.dict[word] !== undefined;
    };
    return bloomFilter;
}());
var formattedWordList = wordList.split('\n');
var x = new bloomFilter(formattedWordList);
console.log(x.isWord("zine"));
